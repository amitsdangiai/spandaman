"use client";

import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/hero-video";

/**
 * Homepage hero VR: prefer live nsventures aerial tour so thin deploys work
 * without shipping ~140MB of tiles. If a full local tile set is present
 * (git clone / fat zip), use that instead so remapped internal hotspots work.
 */
const LOCAL_VR_BASE = "/hero/vr";
const LOCAL_VR_SRC = `${LOCAL_VR_BASE}/index.html`;
const LOCAL_PROBE_XML = `${LOCAL_VR_BASE}/pano.xml`;
const LOCAL_PROBE_TILE = `${LOCAL_VR_BASE}/tiles/node2/cf_0/l_0/c_0/tile_0.jpg`;

/** Live nsventures tour — primary reliable path when local tiles are absent. */
const REMOTE_VR_SRC =
  "https://nsventures.in/Krisumi-Gurugram-VR-New-V06/index.html";

const LOCAL_PROBE_MS = 2500;
const VR_LOAD_TIMEOUT_MS = 14000;
const VR_PAINT_GRACE_MS = 1200;

type HeroMode = "loading" | "vr" | "video";
type VrSource = "local" | "remote";

/**
 * Full-bleed hero media: nsventures (or local) aerial VR is primary.
 * Video is last-resort fallback only when the iframe cannot load.
 */
export function HeroVr() {
  const [mode, setMode] = useState<HeroMode>("loading");
  const [vrSrc, setVrSrc] = useState<string | null>(null);
  const [vrSource, setVrSource] = useState<VrSource | null>(null);
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
    setVrSrc(null);
    setVrSource(null);

    const abandonToVideo = () => {
      if (promotedRef.current) return;
      abandonedRef.current = true;
      setMode("video");
      setVrSrc(null);
      setVrSource(null);
      if (paintTimerRef.current != null) {
        window.clearTimeout(paintTimerRef.current);
        paintTimerRef.current = null;
      }
    };

    const mountVr = (src: string, source: VrSource) => {
      if (abandonedRef.current || promotedRef.current) return;
      setVrSource(source);
      setVrSrc(src);
    };

    let cancelled = false;
    abandonTimerRef.current = window.setTimeout(() => {
      abandonToVideo();
    }, VR_LOAD_TIMEOUT_MS);

    const probeLocal = async (): Promise<boolean> => {
      const probeController = new AbortController();
      const timeout = window.setTimeout(
        () => probeController.abort(),
        LOCAL_PROBE_MS,
      );
      try {
        const [xmlRes, tileRes] = await Promise.all([
          fetch(LOCAL_PROBE_XML, {
            method: "GET",
            cache: "force-cache",
            signal: probeController.signal,
          }),
          fetch(LOCAL_PROBE_TILE, {
            method: "GET",
            cache: "force-cache",
            signal: probeController.signal,
          }),
        ]);
        return xmlRes.ok && tileRes.ok;
      } catch {
        return false;
      } finally {
        window.clearTimeout(timeout);
      }
    };

    void (async () => {
      const hasLocal = await probeLocal();
      if (cancelled || abandonedRef.current || promotedRef.current) return;
      if (hasLocal) {
        // Full local tile set — remapped internal hotspots available.
        mountVr(LOCAL_VR_SRC, "local");
        return;
      }
      // Thin / production without tiles: live nsventures tour is the primary path.
      mountVr(REMOTE_VR_SRC, "remote");
    })();

    return () => {
      cancelled = true;
      if (abandonTimerRef.current != null) {
        window.clearTimeout(abandonTimerRef.current);
        abandonTimerRef.current = null;
      }
      if (paintTimerRef.current != null) {
        window.clearTimeout(paintTimerRef.current);
        paintTimerRef.current = null;
      }
    };
  }, []);

  const showVr = mode === "vr";
  const showVideo = mode === "video";

  return (
    <>
      {/*
        Brief atmospheric loader while Pano2VR boots. Intentionally NOT the
        shutterstock waterfall mp4 — that film is fallback-only when VR fails.
      */}
      {!showVideo ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,#2a3540_0%,#0f161c_70%)] transition-opacity duration-700 ${
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

      {vrSrc ? (
        <iframe
          src={vrSrc}
          className={`absolute inset-0 z-[1] h-full w-full border-0 bg-transparent transition-opacity duration-700 ${
            showVr ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          title="Krisumi 360° Virtual Tour"
          allow="accelerometer; gyroscope; xr-spatial-tracking; fullscreen"
          referrerPolicy="no-referrer-when-downgrade"
          loading="eager"
          data-vr-source={vrSource ?? undefined}
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
            setVrSrc(null);
            setVrSource(null);
          }}
        />
      ) : null}
    </>
  );
}
