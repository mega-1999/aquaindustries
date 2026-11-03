"use client";

import { Droplets } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

export const SolenoPreloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [is100Percent, setIs100Percent] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    try {
      const alreadySeen = sessionStorage.getItem("aqua_preloader_seen_v1");
      if (alreadySeen) {
        setIsFinished(true);
        return;
      }
    } catch {
      // Fallback for private mode
    }

    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    const duration = 500; // Ultra-snappy 500ms count up
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(1, elapsed / duration);

      // Smooth ease-out curve
      const easedPercent = Math.min(
        100,
        Math.floor(100 * Math.sin(progressRatio * (Math.PI / 2))),
      );
      setProgress(easedPercent);

      if (progressRatio < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        // Trigger Soleno 100% circle iris wipe
        setIs100Percent(true);

        try {
          sessionStorage.setItem("aqua_preloader_seen_v1", "true");
        } catch {}

        // After quick circle expansion completes, unmount and unlock scroll
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = "";
        }, 500);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = "";
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      id="myLoader"
      className={is100Percent ? "class_100pourcent" : ""}
      aria-hidden={is100Percent}
    >
      {/* Soleno's Circular Iris Opening Aperture */}
      <div className="invisible_scale" />

      {/* Central Logo & Numerical Percentage */}
      <div className="logo_loader">
        {/* Pulsing Emblem */}
        <div className="pulse-logo mb-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-2 border-[#5FD4FD] flex items-center justify-center shadow-2xl relative">
            <Droplets className="w-10 h-10 sm:w-12 sm:h-12 text-[#0082FC]" />
            <div className="absolute top-1 right-1 w-3 h-3 bg-[#5FD4FD]" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight uppercase whitespace-nowrap mb-1">
          Aqua <span className="text-[#5FD4FD]">Industries</span>
        </div>

        <div className="text-[#5FD4FD] text-xs sm:text-sm font-extrabold tracking-widest uppercase whitespace-nowrap mb-4">
          Municipal Waterworks &bull; Domestic Foundries
        </div>

        {/* Dynamic Percentage Counter */}
        <div id="progress-text" aria-live="polite">
          {progress}%
        </div>
      </div>

      {/* Thin Bottom Progress Tracker */}
      <div className="fix_progress">
        <div id="myBar" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};
