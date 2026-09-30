"use client";

import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/hero-video";

const VR_SRC = "https://nsventures.in/Krisumi-Gurugram-VR-New-V06/";
/** Abort VR attempt if the tour has not become usable by this deadline. */
const VR_LOAD_TIMEOUT_MS = 4500;

type HeroMode = "pending" | "vr" | "fallback";

/**
 * Full-bleed hero media: try the 360° VR iframe, fall back to local video.
 * Video/poster paint immediately so LCP and desktop preview are never blocked
 * by a hung or sandboxed third-party tour.
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

    // Reachability probe (opaque ok). Avoid mounting a hung iframe when
    // nsventures is blocked, slow, or offline in preview sandboxes.
    fetch(VR_SRC, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      signal: controller.signal,
    })
      .then(() => {
        if (settledRef.current) return;
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
          title="Krsumi 360° Virtual Tour"
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
