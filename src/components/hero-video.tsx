"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Looping muted hero video. Poster is a fallback only (reduced motion / autoplay
 * failure) — the <video> element is what paints for normal visitors.
 */
export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(media.matches);
      const el = videoRef.current;
      if (!el) return;
      if (media.matches) {
        el.pause();
      } else {
        el.muted = true;
        void el.play().catch(() => {
          /* Autoplay can fail on some browsers; poster remains visible. */
        });
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  // Retry play once the element can start (handles late hydration / decode).
  useEffect(() => {
    if (reduceMotion) return;
    const el = videoRef.current;
    if (!el) return;

    const tryPlay = () => {
      el.muted = true;
      void el.play().catch(() => {});
    };

    tryPlay();
    el.addEventListener("loadeddata", tryPlay);
    el.addEventListener("canplay", tryPlay);
    return () => {
      el.removeEventListener("loadeddata", tryPlay);
      el.removeEventListener("canplay", tryPlay);
    };
  }, [reduceMotion, src]);

  if (reduceMotion) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- full-bleed poster fallback for reduced motion
      <img
        src={poster}
        alt=""
        className={className}
        decoding="async"
        fetchPriority="high"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
