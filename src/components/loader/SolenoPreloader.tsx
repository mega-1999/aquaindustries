"use client";

import { Droplets } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

export const SolenoPreloader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Lock body scroll while loader is active
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0% to 100%
    const duration = 1600; // 1.6 seconds total loading duration
    const startTime = performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      // Natural ease-out curve for civil engineering precision feel
      const easedProgress = Math.min(
        100,
        Math.floor(100 * Math.sin((rawProgress / 100) * (Math.PI / 2))),
      );

      setProgress(easedProgress);

      if (rawProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Trigger Soleno 100% class: logo fades out, iris scale expands
        setIsCompleted(true);

        // After iris expansion finishes (800ms), unlock body scroll and remove from DOM
        setTimeout(() => {
          setIsRemoved(true);
          document.body.style.overflow = "";
        }, 900);
      }
    };

    const animFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animFrame);
      document.body.style.overflow = "";
    };
  }, []);

  if (isRemoved) return null;

  return (
    <div
      id="myLoader"
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors duration-700 pointer-events-auto ${
        isCompleted
          ? "class_100pourcent bg-transparent pointer-events-none"
          : "bg-[#0082FC]"
      }`}
      aria-hidden={isCompleted}
    >
      {/* Soleno Iris Aperture Expansion Element */}
      <div
        className={`invisible_scale fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[#0082FC] pointer-events-none transition-all duration-700 ease-out ${
          isCompleted
            ? "opacity-100 p-[120vw] border-[80vw] border-[#0082FC]"
            : "opacity-0 p-0 border-0"
        }`}
      />

      {/* Central Logo & Progress Percentage (Fades out on 100%) */}
      <div
        className={`logo_loader flex flex-col items-center justify-center transition-all duration-400 transform ${
          isCompleted
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        {/* Pulsing Aqua Industries Engineering Motif */}
        <div className="relative mb-5 animate-[scaleAnimation_2s_infinite_ease-in-out]">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-2 border-[#5FD4FD] flex items-center justify-center shadow-2xl relative">
            <Droplets className="w-10 h-10 sm:w-12 sm:h-12 text-[#0082FC]" />
            <div className="absolute top-1 right-1 w-3 h-3 bg-[#5FD4FD]" />
          </div>
        </div>

        {/* Company Title */}
        <div className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight uppercase whitespace-nowrap mb-1">
          Aqua <span className="text-[#5FD4FD]">Industries</span>
        </div>

        <div className="text-[#5FD4FD] text-xs font-bold tracking-widest uppercase whitespace-nowrap mb-4">
          Municipal Waterworks &bull; Domestic Foundries
        </div>

        {/* Numeric Progress Counter */}
        <div
          id="progress-text"
          className="text-white text-3xl sm:text-4xl font-black tracking-tight font-mono"
        >
          {progress}%
        </div>
      </div>

      {/* Bottom Horizontal Progress Bar (Soleno fix_progress) */}
      <div
        className={`fix_progress fixed bottom-[5vw] left-[4vw] w-[calc(100%-8vw)] h-1 sm:h-1.5 bg-white/20 transition-opacity duration-500 overflow-hidden ${
          isCompleted ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div
          id="myBar"
          className="h-full bg-[#5FD4FD] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
