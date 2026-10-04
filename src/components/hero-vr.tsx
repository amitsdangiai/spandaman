"use client";

import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/hero-video";

/**
 * Locally hosted Pano2VR tour (nsventures aerial Krisumi package) with hotspots
 * remapped to Spandaman project routes.
 * Use index.html explicitly — Next may 308 `/hero/vr/` in a way that breaks the iframe.
 */
const VR_BASE = "/hero/vr";
const VR_SRC = `${VR_BASE}/index.html`;
/** Require config + a real tile so thin zips without tiles fail closed to video. */
const VR_PROBE_XML = `${VR_BASE}/pano.xml`;
const VR_PROBE_TILE = `${VR_BASE}/tiles/node2/cf_0/l_0/c_0/tile_0.jpg`;
/** Abort VR attempt if the tour has not become usable by this deadline. */
const VR_LOAD_TIMEOUT_MS = 12000;
/** Extra settle after iframe onLoad so Pano2VR can paint before we hide the loader. */
const VR_PAINT_GRACE_MS = 1200;

type HeroMode = "loading" | "vr" | "video";

/**
 * Full-bleed hero media: local aerial VR tour is the primary visual whenever
 * tiles are present. A brief dark loading plane covers boot — not the looping
 * waterfall film. Video is last-resort fallback only when the tour cannot load.
 */
export function HeroVr() {
  const [mode, setMode] = useState<HeroMode>("loading");
  const [mountIframe, setMountIframe] = useState(false);
  const promotedRef = useRef(false);
  const abandonedRef = useRef(false);
  const paintTimerRef = useRef<number | null>(null);
  const abandonTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // React Strict Mode re-runs effects; reset so a cleaned-up probe cannot
    // permanently lock us into the waterfall video fallback.
    promotedRef.current = false;
    abandonedRef.current = false;
    setMode("loading");
    setMountIframe(false);

    const abandonToVideo = () => {
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
      abandonToVideo();
    }, VR_LOAD_TIMEOUT_MS);

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
          abandonToVideo();
          return;
        }
        // Tiles exist — mount the VR iframe immediately as the primary hero.
        setMountIframe(true);
      })
      .catch(() => {
        // Ignore AbortError from Strict Mode cleanup / intentional timeout abort
        // handled above; only real network failures fall through after abort flag.
        if (controller.signal.aborted && !abandonedRef.current) return;
        if (controller.signal.aborted) return;
        abandonToVideo();
      });

    return () => {
      if (abandonTimerRef.current != null) {
        window.clearTimeout(abandonTimerRef.current);
        abandonTimerRef.current = null;
      }
      if (paintTimerRef.current != null) {
        window.clearTimeout(paintTimerRef.current);
        paintTimerRef.current = null;
      }
      controller.abort();
    };
  }, []);

  const showVr = mode === "vr";
  const showVideo = mode === "video";

  return (
    <>
      {/*
        Brief atmospheric loader while Pano2VR boots. Intentionally NOT the
        shutterstock waterfall mp4 — that film is fallback-only when tiles fail.
      */}
      {!showVideo ? (
        <div
          aria-hidden
          className={`absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,#2a3540_0%,#0f161c_70%)] transition-opacity duration-700 ${
            showVr ? "opacity-0" : "opacity-100"
          }`}
        />
      ) : null}

      {showVideo ? (
        <HeroVideo
          src="/hero/krisumi-hero.mp4"
          poster="/hero/krisumi-hero-poster.jpg"
          className="absolute inset-0 z-0 h-full w-full object-cover hero-video-zoom"
        />
      ) : null}

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
