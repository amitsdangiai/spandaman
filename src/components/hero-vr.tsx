"use client";

import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/hero-video";

/**
 * Locally hosted Pano2VR tour with hotspots remapped to Spandaman project routes.
 * Use index.html explicitly — Next may 308 `/hero/vr/` in a way that breaks the iframe.
 */
const VR_BASE = "/hero/vr";
const VR_SRC = `${VR_BASE}/index.html`;
/** Small probe assets — prefer a real tile so a thin zip without tiles fails closed to video. */
const VR_PROBE_XML = `${VR_BASE}/pano.xml`;
const VR_PROBE_TILE = `${VR_BASE}/tiles/node2/cf_0/l_0/c_0/tile_0.jpg`;
/** Abort VR attempt if the tour has not become usable by this deadline. */
const VR_LOAD_TIMEOUT_MS = 8000;
/** Extra settle after iframe onLoad so Pano2VR can paint before we hide video. */
const VR_PAINT_GRACE_MS = 1800;

type HeroMode = "video" | "vr";

/**
 * Full-bleed hero media: local video/poster always paint first.
 * VR iframe may enhance on top only after assets + iframe settle; if anything
 * fails, video stays visible so the hero is never a black screen.
 */
export function HeroVr() {
  const [mode, setMode] = useState<HeroMode>("video");
  const [mountIframe, setMountIframe] = useState(false);
  const promotedRef = useRef(false);
  const abandonedRef = useRef(false);
  const paintTimerRef = useRef<number | null>(null);
  const abandonTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const abandonVr = () => {
      if (promotedRef.current) return;
      abandonedRef.current = true;
      setMode("video");
      setMountIframe(false);
      if (paintTimerRef.current != null) {
        window.clearTimeout(paintTimerRef.current);
        paintTimerRef.current = null;
      }
    };

    const controller = new AbortController();
    abandonTimerRef.current = window.setTimeout(() => {
      controller.abort();
      abandonVr();
    }, VR_LOAD_TIMEOUT_MS);

    // Require both config + a sample tile so missing tile packs never promote VR.
    Promise.all([
      fetch(VR_PROBE_XML, {
        method: "GET",
        cache: "force-cache",
        signal: controller.signal,
      }),
      fetch(VR_PROBE_TILE, {
        method: "GET",
        cache: "force-cache",
        signal: controller.signal,
      }),
    ])
      .then(([xmlRes, tileRes]) => {
        if (abandonedRef.current || promotedRef.current) return;
        if (!xmlRes.ok || !tileRes.ok) {
          abandonVr();
          return;
        }
        setMountIframe(true);
      })
      .catch(() => {
        abandonVr();
      });

    return () => {
      if (abandonTimerRef.current != null) {
        window.clearTimeout(abandonTimerRef.current);
      }
      if (paintTimerRef.current != null) {
        window.clearTimeout(paintTimerRef.current);
      }
      controller.abort();
    };
  }, []);

  const showVr = mode === "vr";

  return (
    <>
      {/*
        Local video+poster always remain mounted and fully opaque under any VR
        attempt. Missing tiles never promote the iframe (probe fails → video only).
        When VR does promote, the iframe sits above; video stays as a live underlay
        so we never blank the hero to pure black while waiting on VR.
      */}
      <HeroVideo
        src="/hero/krisumi-hero.mp4"
        poster="/hero/krisumi-hero-poster.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover hero-video-zoom"
      />

      {mountIframe ? (
        <iframe
          src={VR_SRC}
          className={`absolute inset-0 z-[1] h-full w-full border-0 bg-transparent transition-opacity duration-700 ${
            showVr ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          title="Krisumi 360° Virtual Tour"
          allow="accelerometer; gyroscope; xr-spatial-tracking"
          loading="eager"
          onLoad={() => {
            if (abandonedRef.current || promotedRef.current) return;
            // Give Pano2VR time to paint; clear the hard abandon so grace can finish.
            if (abandonTimerRef.current != null) {
              window.clearTimeout(abandonTimerRef.current);
              abandonTimerRef.current = null;
            }
            if (paintTimerRef.current != null) {
              window.clearTimeout(paintTimerRef.current);
            }
            paintTimerRef.current = window.setTimeout(() => {
              if (abandonedRef.current || promotedRef.current) return;
              promotedRef.current = true;
              setMode("vr");
              paintTimerRef.current = null;
            }, VR_PAINT_GRACE_MS);
          }}
          onError={() => {
            if (promotedRef.current) return;
            abandonedRef.current = true;
            setMode("video");
            setMountIframe(false);
          }}
        />
      ) : null}
    </>
  );
}
