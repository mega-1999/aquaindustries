"use client";

import type React from "react";
import { useEffect, useRef } from "react";

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
 * High-performance, seamless infinite-looping water dynamics background video.
 * Plays the authentic Soleno water flow animation across all sections.
 * Enforces hardware-accelerated continuous looping playback across all browsers.
 */
export const InfiniteWaterBackground: React.FC<
  InfiniteWaterBackgroundProps
> = ({
  className = "absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden",
  opacity = "opacity-25",
  mixBlend = "mix-blend-screen",
  zIndex = "z-0",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly guarantee muted on DOM element for browser autoplay policies
    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          // Retry playback if autoplay restrictions occur
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    playVideo();

    // Infinite loop enforcement listeners
    const handleEnded = () => {
      video.currentTime = 0;
      playVideo();
    };

    const handlePause = () => {
      playVideo();
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`${className} ${opacity} ${mixBlend} ${zIndex}`}
    >
      {/* Fallback fluid gradient background */}
      <div
        className="absolute inset-0 w-full h-full gpu-water-drift"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 30% 20%, rgba(95, 212, 253, 0.45) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(0, 130, 252, 0.5) 0%, transparent 60%)",
        }}
      />

      {/* Authentic Soleno Water Flow Animation Video */}
      <video
        ref={videoRef}
        src="https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={(e) => {
          e.currentTarget.currentTime = 0;
          e.currentTarget.play().catch(() => {});
        }}
      />

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
