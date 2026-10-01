"use client";

import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

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
        void el.play().catch(() => {
          /* Autoplay can fail on some browsers; poster remains visible. */
        });
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

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
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
