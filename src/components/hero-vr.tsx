"use client";

import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/hero-video";

/**
 * Homepage hero VR uses the local Pano2VR player so project pins navigate to
 * Spandaman pages. Tiles and marker art that are not in the repo are proxied
 * from the hosted tour (see next.config rewrites).
 */
const LOCAL_VR_SRC = "/hero/vr/index.html";

const VR_LOAD_TIMEOUT_MS = 14000;
const VR_PAINT_GRACE_MS = 1200;

type HeroMode = "loading" | "vr" | "video";

/**
 * Full-bleed hero media: local aerial VR is primary so hotspot clicks stay
 * on this site. Video is last-resort fallback only when the iframe cannot load.
 */
export function HeroVr() {
  const [mode, setMode] = useState<HeroMode>("loading");
  const [vrSrc, setVrSrc] = useState<string | null>(null);
  const promotedRef = useRef(false);
  const abandonedRef = useRef(false);
  const paintTimerRef = useRef<number | null>(null);
  const abandonTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // React Strict Mode re-runs effects; reset so a cleaned-up timer cannot
    // permanently lock us into the waterfall video fallback.
    promotedRef.current = false;
    abandonedRef.current = false;
    setMode("loading");
    setVrSrc(null);

    const abandonToVideo = () => {
      if (promotedRef.current) return;
      abandonedRef.current = true;
      setMode("video");
      setVrSrc(null);
      if (paintTimerRef.current != null) {
        window.clearTimeout(paintTimerRef.current);
        paintTimerRef.current = null;
      }
    };

    abandonTimerRef.current = window.setTimeout(() => {
      abandonToVideo();
    }, VR_LOAD_TIMEOUT_MS);

    if (!abandonedRef.current && !promotedRef.current) {
      setVrSrc(LOCAL_VR_SRC);
    }

    return () => {
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
          data-vr-source="local"
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
          }}
        />
      ) : null}
    </>
  );
}
