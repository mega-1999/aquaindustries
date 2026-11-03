"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

interface InfiniteWaterBackgroundProps {
  className?: string;
  opacity?: string;
  mixBlend?:
    | "mix-blend-screen"
    | "mix-blend-multiply"
    | "mix-blend-normal"
    | "mix-blend-overlay";
  zIndex?: string;
}

/**
 * Ultra-high-performance virtualized water dynamics background.
 * Uses IntersectionObserver so the authentic Soleno water video only decodes
 * when visible in the viewport. Prevents multi-video browser freezing and GPU stalling.
 */
export const InfiniteWaterBackground: React.FC<
  InfiniteWaterBackgroundProps
> = ({
  className = "absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden",
  opacity = "opacity-25",
  mixBlend = "mix-blend-screen",
  zIndex = "z-0",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);
        if (videoRef.current) {
          if (visible) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "150px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`${className} ${opacity} ${mixBlend} ${zIndex}`}
    >
      {/* Base Hydrodynamic Fluid Gradient Drift Layer */}
      <div
        className="absolute inset-0 w-full h-full gpu-water-drift"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 20%, rgba(95, 212, 253, 0.45) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(0, 130, 252, 0.5) 0%, transparent 60%)",
        }}
      />

      {/* Hardware-Accelerated Looping Water Video - ONLY Decodes When In Viewport */}
      {isInView && (
        <video
          ref={videoRef}
          src="https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(() => {});
          }}
        />
      )}

      {/* Subtle Caustic Shimmer Surface Grid */}
      <div
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#5FD4FD 1.2px, transparent 1.2px), radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "48px 48px, 24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />
    </div>
  );
};
