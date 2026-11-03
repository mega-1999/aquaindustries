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
 * Ultra-High-Performance, GPU-accelerated seamless infinite water dynamics engine.
 * Eliminates browser thread stalls, network choking, and battery drain.
 * Combines hardware-accelerated animated caustics waves with zero-latency rendering.
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
  const [isInView, setIsInView] = useState(false);

  // Lazy Intersection Observer: Only activate heavier rendering when actually visible on screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
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
            "radial-gradient(ellipse at 30% 20%, rgba(95, 212, 253, 0.45) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(0, 130, 252, 0.5) 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(95, 212, 253, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Layer 1: Moving Fluid Water Caustics Waves (GPU Transform) */}
      {isInView && (
        <div className="absolute -inset-x-12 -inset-y-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] gpu-water-layer-1 pointer-events-none">
          <svg
            className="w-full h-full opacity-60"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="waterGrad1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#5FD4FD" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#0082FC" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#5FD4FD" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <path
              d="M0,192 C240,280 480,120 720,210 C960,300 1200,160 1440,220 L1440,900 L0,900 Z"
              fill="url(#waterGrad1)"
            />
            <path
              d="M0,350 C320,240 640,420 960,310 C1280,200 1360,340 1440,290 L1440,900 L0,900 Z"
              fill="#5FD4FD"
              fillOpacity="0.15"
            />
          </svg>
        </div>
      )}

      {/* Layer 2: Counter-Rotating Caustics Refraction Wave (GPU Transform) */}
      {isInView && (
        <div className="absolute -inset-x-12 -inset-y-12 w-[calc(100%+6rem)] h-[calc(100%+6rem)] gpu-water-layer-2 pointer-events-none">
          <svg
            className="w-full h-full opacity-50"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="waterGrad2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#5FD4FD" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0082FC" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,120 C360,250 720,80 1080,200 C1260,260 1380,180 1440,160 L1440,900 L0,900 Z"
              fill="url(#waterGrad2)"
            />
            <path
              d="M0,480 C280,390 600,530 920,440 C1240,350 1380,480 1440,430 L1440,900 L0,900 Z"
              fill="#FFFFFF"
              fillOpacity="0.12"
            />
          </svg>
        </div>
      )}

      {/* Subtle Caustic Shimmer Surface Grid */}
      <div
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
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
