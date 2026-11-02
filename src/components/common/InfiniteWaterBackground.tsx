"use client";

import React, { useEffect, useRef } from "react";

interface InfiniteWaterBackgroundProps {
  className?: string;
  opacity?: string;
  mixBlend?: "mix-blend-screen" | "mix-blend-multiply" | "mix-blend-normal";
  zIndex?: string;
}

/**
 * High-performance, seamless infinite-looping water dynamics background video.
 * Enforces hardware-accelerated continuous looping playback across all browsers,
 * preventing browser stall, sleep, or pause events at the loop boundary.
 */
export const InfiniteWaterBackground: React.FC<
  InfiniteWaterBackgroundProps
> = ({
  className = "absolute inset-0 w-full h-full object-cover pointer-events-none select-none",
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
      // If browser attempts to pause in background or low-power mode, resume
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
    <video
      ref={videoRef}
      src="https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      className={`${className} ${opacity} ${mixBlend} ${zIndex}`}
      onEnded={(e) => {
        // Secondary inline guarantee to restart frame immediately
        e.currentTarget.currentTime = 0;
        e.currentTarget.play().catch(() => {});
      }}
    />
  );
};
