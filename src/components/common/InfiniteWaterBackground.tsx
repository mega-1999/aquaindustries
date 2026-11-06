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
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => { });
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

    // Ensure playback starts immediately when mounted into view
    useEffect(() => {
      if (isInView && videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => { });
      }
    }, [isInView]);

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
              "radial-gradient(ellipse at 30% 20%, rgba(48, 135, 255, 0.45) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(48, 135, 255, 0.5) 0%, transparent 60%)",
          }}
        />

        {/* Secondary Fluid Water Wave Caustics Layer */}
        <div
          className="absolute inset-0 w-full h-full gpu-water-layer-1 opacity-40 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 45% 40%, rgba(48, 135, 255, 0.4) 0%, transparent 65%)",
          }}
        />

        {/* Hardware-Accelerated Looping Water Video - ONLY Decodes When In Viewport */}
        {isInView && (
          <video
            ref={(el) => {
              videoRef.current = el;
              if (el) {
                el.muted = true;
                el.play().catch(() => { });
              }
            }}
            src="https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full object-cover"
            onCanPlay={(e) => {
              e.currentTarget.muted = true;
              e.currentTarget.play().catch(() => { });
            }}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => { });
            }}
          />
        )}

        {/* Subtle Caustic Shimmer Surface Grid */}
        <div
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#3087ff 1.2px, transparent 1.2px), radial-gradient(#FFFFFF 1px, transparent 1px)",
            backgroundSize: "48px 48px, 24px 24px",
            backgroundPosition: "0 0, 12px 12px",
          }}
        />
      </div>
    );
  };
