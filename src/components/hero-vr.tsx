"use client";

import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/hero-video";

/** Locally hosted Pano2VR tour with hotspots remapped to Spandaman project routes. */
const VR_SRC = "/hero/vr/";
/** Abort VR attempt if the tour has not become usable by this deadline. */
const VR_LOAD_TIMEOUT_MS = 4500;

type HeroMode = "pending" | "vr" | "fallback";

/**
 * Full-bleed hero media: try the local 360° VR iframe, fall back to local video.
 * Video/poster paint immediately so LCP and desktop preview are never blocked
 * by a hung tour load.
 */
export function HeroVr() {
  const [mode, setMode] = useState<HeroMode>("pending");
  const [mountIframe, setMountIframe] = useState(false);
  const settledRef = useRef(false);

  useEffect(() => {
    const settle = (next: HeroMode) => {
      if (settledRef.current) return;
      settledRef.current = true;
      setMode(next);
      if (next === "fallback") setMountIframe(false);
    };

    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      controller.abort();
      settle("fallback");
    }, VR_LOAD_TIMEOUT_MS);

    // Reachability probe for local tour assets (pano.xml is small + cacheable).
    fetch(`${VR_SRC}pano.xml`, {
      method: "GET",
      cache: "force-cache",
      signal: controller.signal,
    })
      .then((res) => {
        if (settledRef.current) return;
        if (!res.ok) {
          settle("fallback");
          return;
        }
        setMountIframe(true);
      })
      .catch(() => {
        settle("fallback");
      });

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, []);

  const showVr = mode === "vr";

  return (
    <>
      {/* Local media always present for instant paint / fallback */}
      <HeroVideo
        src="/hero/krisumi-hero.mp4"
        poster="/hero/krisumi-hero-poster.jpg"
        className={`absolute inset-0 z-0 h-full w-full object-cover hero-video-zoom transition-opacity duration-500 ${
          showVr ? "opacity-0" : "opacity-100"
        }`}
      />

      {mountIframe ? (
        <iframe
          src={VR_SRC}
          className={`absolute inset-0 z-0 h-full w-full border-0 transition-opacity duration-500 ${
            showVr ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          title="Krisumi 360° Virtual Tour"
          allow="accelerometer; gyroscope; xr-spatial-tracking"
          loading="eager"
          onLoad={() => {
            if (settledRef.current) return;
            settledRef.current = true;
            setMode("vr");
          }}
          onError={() => {
            if (settledRef.current) return;
            settledRef.current = true;
            setMode("fallback");
            setMountIframe(false);
          }}
        />
      ) : null}
    </>
  );
}
