"use client";

import type React from "react";
import { useEffect, useState } from "react";

export const SolenoPreloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [is100Percent, setIs100Percent] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    const duration = 850; // Smooth natural count up
    const startTime = performance.now();

    let animFrame: number;
    let finishTimer: NodeJS.Timeout;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(1, elapsed / duration);

      // Smooth ease-out cubic curve
      const easedRatio = 1 - Math.pow(1 - progressRatio, 3);
      const currentPercent = Math.min(100, Math.floor(100 * easedRatio));
      setProgress(currentPercent);

      if (progressRatio < 1) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Trigger smooth circular iris aperture wipe
        setIs100Percent(true);

        // After iris circle finishes expanding across viewport, unmount and unlock scroll
        finishTimer = setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = "";
        }, 800);
      }
    };

    animFrame = requestAnimationFrame(updateProgress);

    // Fallback safety timeout to guarantee unmount and scroll restoration
    const safetyTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(finishTimer);
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (isFinished) return null;

  return (
    <div
      id="myLoader"
      className={`fixed inset-0 w-screen h-screen z-[99999] select-none flex items-center justify-center overflow-hidden transition-all duration-300 ${
        is100Percent ? "pointer-events-none" : "pointer-events-auto"
      }`}
      aria-hidden={is100Percent}
    >
      {/* Dynamic SVG Circular Aperture Iris Mask Reveal */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Soleno Circular Iris Aperture Preloader</title>
        <defs>
          <mask id="solenoIrisMask">
            {/* White canvas = solid blue background visible */}
            <rect width="100%" height="100%" fill="white" />
            {/* Expanding black circle = transparent hole revealing page underneath */}
            <circle
              cx="50%"
              cy="50%"
              r={is100Percent ? "150vmax" : "0px"}
              fill="black"
              style={{
                transition: "r 0.8s cubic-bezier(0.77, 0, 0.175, 1)",
              }}
            />
          </mask>
        </defs>

        {/* Solid #0082FC background masked with the circular aperture */}
        <rect
          width="100%"
          height="100%"
          fill="#0082FC"
          mask="url(#solenoIrisMask)"
        />

        {/* Highlighting Iris Aperture Ring */}
        <circle
          cx="50%"
          cy="50%"
          r={is100Percent ? "150vmax" : "0px"}
          fill="none"
          stroke="#5FD4FD"
          strokeWidth="6"
          opacity={is100Percent ? 0.9 : 0}
          style={{
            transition:
              "r 0.8s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.3s ease",
          }}
        />
      </svg>

      {/* Central Brand Identity & Percentage Counter */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-400 ${
          is100Percent
            ? "opacity-0 scale-90 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        {/* Pulsing Brand Emblem */}
        <div className="pulse-logo mb-5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white border-2 border-[#5FD4FD] flex items-center justify-center shadow-2xl relative p-3">
            <img
              src="/images/AI_Waterdrop.png"
              alt="Aqua Industries"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
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
        <div
          id="progress-text"
          className="text-white font-mono font-black text-4xl sm:text-5xl tracking-tighter"
          aria-live="polite"
        >
          {progress}%
        </div>
      </div>

      {/* Bottom Horizontal Progress Tracker */}
      <div
        className={`fixed bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 h-1 bg-white/20 overflow-hidden transition-opacity duration-300 ${
          is100Percent ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className="h-full bg-[#5FD4FD] transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
