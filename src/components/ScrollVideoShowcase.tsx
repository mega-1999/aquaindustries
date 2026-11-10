"use client";

import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Droplets,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

interface MilestoneStage {
  badge: string;
  badgeAccent: string;
  chapter: string;
  title: string;
  highlightText: string;
  subtitle: string;
  statNumber: string;
  statLabel: string;
  start: number;
  peak: number;
  end: number;
}

const STAGES: MilestoneStage[] = [
  {
    badge: "[ PRECISION FLUID ENGINEERING ]",
    badgeAccent: "#5FD4FD",
    chapter: "01 / 03",
    title: "Engineered for Extreme",
    highlightText: "Hydrostatic Pressure",
    subtitle:
      "Tested beyond standard operating limits to protect municipal networks with zero-fail tolerances.",
    statNumber: "350+ PSI",
    statLabel: "Hydrostatic Surge Threshold",
    start: 0.05,
    peak: 0.18,
    end: 0.32,
  },
  {
    badge: "[ SEAMLESS FLOW DYNAMICS ]",
    badgeAccent: "#5FD4FD",
    chapter: "02 / 03",
    title: "Smooth Internal Hydraulics &",
    highlightText: "Cement Linings",
    subtitle:
      "Minimizing head loss and eliminating friction across heavy transmission mains under turbulent flow.",
    statNumber: "C=140",
    statLabel: "Hazen-Williams Flow Coefficient",
    start: 0.38,
    peak: 0.52,
    end: 0.66,
  },
  {
    badge: "[ VERIFIED FIELD RELIABILITY ]",
    badgeAccent: "#5FD4FD",
    chapter: "03 / 03",
    title: "Built for Decades of",
    highlightText: "Underground Service",
    subtitle:
      "Resilient ductile iron metallurgy ready for harsh American soil conditions and continuous seismic shifts.",
    statNumber: "100+ YR",
    statLabel: "Subsurface Service Lifecycle",
    start: 0.72,
    peak: 0.85,
    end: 0.98,
  },
];

/**
 * Calculates smooth bell-curve opacity and translateY offset for a given scroll progress
 */
function getMilestoneOpacity(
  progress: number,
  start: number,
  peak: number,
  end: number,
): { opacity: number; translateY: number; scale: number } {
  if (progress < start || progress > end) {
    return { opacity: 0, translateY: 24, scale: 0.96 };
  }

  let ratio = 0;
  if (progress <= peak) {
    // Fade in
    ratio = (progress - start) / (peak - start);
  } else {
    // Fade out
    ratio = (end - progress) / (end - peak);
  }

  // Smooth quadratic ease
  const ease = ratio * ratio * (3 - 2 * ratio);
  const opacity = Math.max(0, Math.min(1, ease));
  const translateY = (1 - ease) * 20;
  const scale = 0.96 + ease * 0.04;

  return { opacity, translateY, scale };
}

export const ScrollVideoShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafIdRef = useRef<number | null>(null);

  // Scroll and video state
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [supportsDirectSeek, setSupportsDirectSeek] = useState(true);

  // Real-time lerp state refs (to avoid re-renders on every animation frame)
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const isSeekingRef = useRef(false);

  // Calculate and sync video duration once metadata loads
  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      const dur = videoRef.current.duration;
      if (dur && !Number.isNaN(dur) && dur > 0) {
        setVideoDuration(dur);
        setIsVideoReady(true);
      }
    }
  }, []);

  // Set up 60fps linear interpolation (LERP) loop for silky video scrubbing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isRunning = true;

    const renderLoop = () => {
      if (!isRunning) return;

      const dur = video.duration || videoDuration;
      if (dur > 0) {
        const target = targetTimeRef.current;
        const current = currentTimeRef.current;

        // Lerp damping factor (0.12 gives instant responsiveness with zero jitter)
        const delta = target - current;
        if (Math.abs(delta) > 0.005) {
          const next = current + delta * 0.12;
          currentTimeRef.current = next;

          // Programmatically scrub video without stutter
          if (
            !video.seeking &&
            Math.abs(video.currentTime - next) > 0.03
          ) {
            try {
              video.currentTime = Math.max(0, Math.min(dur - 0.01, next));
            } catch {
              // Ignore browser rate limit errors during ultra-fast scroll
            }
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isRunning = false;
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [videoDuration]);

  // High performance passive scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) return;

      // Distance the container has moved past the top
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollableDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clamped);

      // Target video time in seconds based on normalized scroll progress
      const dur = videoRef.current?.duration || videoDuration || 5;
      targetTimeRef.current = clamped * dur;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoDuration]);

  // CTA persistent button state (milestone 95% - 100%)
  const ctaOpacity = Math.max(
    0,
    Math.min(1, (scrollProgress - 0.9) / 0.08),
  );

  return (
    <div
      ref={containerRef}
      id="scroll-video-showcase"
      className="relative w-full h-[450vh] bg-[#090D16] text-white selection:bg-[#0082FC] selection:text-white"
    >
      {/* STICKY 100VH STAGE */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Ambient Glow Gradients */}
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[140px] pointer-events-none opacity-40"
          style={{ background: "#0082FC" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full blur-[160px] pointer-events-none opacity-30"
          style={{ background: "#5FD4FD" }}
        />

        {/* Video Canvas / Video Player Core */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/umbrellas_video.mp4"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            onLoadedMetadata={handleLoadedMetadata}
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.08] transition-opacity duration-700"
            style={{
              opacity: isVideoReady ? 1 : 0.4,
            }}
          />

          {/* Cinematic Dark Gradient Scrims for 100% Typography Readability */}
          {/* Top subtle vignette */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#090D16]/90 via-[#090D16]/50 to-transparent pointer-events-none z-10" />
          {/* Bottom deep vignette */}
          <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-[#090D16] via-[#090D16]/75 to-transparent pointer-events-none z-10" />
          {/* Central radial soft glassmorphic tint */}
          <div className="absolute inset-0 bg-[#090D16]/40 backdrop-brightness-[0.92] pointer-events-none z-10" />
        </div>

        {/* TOP BRANDING & HUD RIBBON (FIXED AT THE TOP OF THE STICKY STAGE) */}
        <div className="absolute top-6 inset-x-0 z-30 px-6 sm:px-10 flex items-center justify-between pointer-events-none">
          {/* Brand Emblem */}
          <div className="flex items-center gap-2.5 backdrop-blur-md bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-none shadow-lg">
            <img
              src="/images/AI_Fevicon.png"
              alt="Aqua Industries"
              className="w-4 h-4 object-contain shrink-0"
            />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#5FD4FD] whitespace-nowrap">
              Aqua Industries
            </span>
            <span className="text-white/40 text-xs font-mono">&bull;</span>
            <span className="text-[10px] font-bold tracking-wider text-white/80 uppercase whitespace-nowrap hidden sm:inline">
              Waterworks Infrastructure
            </span>
          </div>

          {/* Interactive Scrub Progress Bar */}
          <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-none">
            <span className="text-[10px] font-mono font-bold text-[#5FD4FD] uppercase tracking-wider whitespace-nowrap">
              Playback Scrub
            </span>
            <div className="w-20 sm:w-28 h-1.5 bg-white/15 rounded-none overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#0082FC] to-[#5FD4FD] transition-all duration-75"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-white/90 whitespace-nowrap min-w-[2.2rem] text-right">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>

        {/* FLOATING TEXT CHAPTERS (SYNCHRONIZED WITH SCROLL MILESTONES) */}
        <div className="relative z-20 max-w-5xl w-full mx-auto px-6 sm:px-12 flex flex-col items-center justify-center pointer-events-none text-center">
          {STAGES.map((stage, idx) => {
            const { opacity, translateY, scale } = getMilestoneOpacity(
              scrollProgress,
              stage.start,
              stage.peak,
              stage.end,
            );

            if (opacity <= 0.01) return null;

            return (
              <div
                key={stage.chapter}
                className="absolute inset-x-0 mx-auto max-w-4xl px-4 flex flex-col items-center justify-center transition-transform duration-100 ease-out will-change-transform"
                style={{
                  opacity,
                  transform: `translateY(${translateY}px) scale(${scale})`,
                }}
              >
                {/* Chapter Counter & Badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-5 rounded-none border border-[#5FD4FD]/40 bg-[#090D16]/80 backdrop-blur-md shadow-2xl">
                  <span className="text-[10px] font-mono font-extrabold text-[#5FD4FD] uppercase tracking-widest whitespace-nowrap">
                    {stage.chapter}
                  </span>
                  <span className="text-white/30 text-xs">&bull;</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white whitespace-nowrap">
                    {stage.badge}
                  </span>
                </div>

                {/* Main Headline */}
                <h2
                  className="font-black uppercase tracking-tight leading-[1.08] text-white mb-4 text-center drop-shadow-2xl"
                  style={{
                    fontSize: "clamp(1.75rem, 4.5vw, 3.75rem)",
                  }}
                >
                  {stage.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FD4FD] via-white to-[#0082FC]">
                    {stage.highlightText}
                  </span>
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl font-normal leading-relaxed mb-6 text-center drop-shadow-md">
                  {stage.subtitle}
                </p>

                {/* Quick Metric Pill */}
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-none border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-xl">
                  <Droplets className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                  <span className="text-xs font-black uppercase tracking-wider text-white whitespace-nowrap">
                    {stage.statNumber}
                  </span>
                  <span className="text-white/40 text-xs font-mono">|</span>
                  <span className="text-[11px] font-medium text-white/80 whitespace-nowrap">
                    {stage.statLabel}
                  </span>
                </div>
              </div>
            );
          })}

          {/* INITIAL SCROLL PROMPT (Visible only at the beginning: 0% - 10%) */}
          {scrollProgress < 0.12 && (
            <div
              className="absolute -bottom-44 flex flex-col items-center gap-2 text-white/70 transition-opacity duration-300 pointer-events-none"
              style={{
                opacity: Math.max(0, 1 - scrollProgress * 10),
              }}
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5FD4FD] whitespace-nowrap">
                Scroll to Scrub Video Timeline
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#5FD4FD]" />
            </div>
          )}

          {/* PERSISTENT FINAL CALL-TO-ACTION (Visible at scroll 90% - 100%) */}
          {ctaOpacity > 0.05 && (
            <div
              className="absolute inset-x-0 mx-auto max-w-xl px-4 flex flex-col items-center justify-center transition-all duration-300 pointer-events-auto"
              style={{
                opacity: ctaOpacity,
                transform: `translateY(${(1 - ctaOpacity) * 20}px)`,
              }}
            >
              <div className="backdrop-blur-xl bg-[#090D16]/90 border-2 border-[#0082FC] p-6 sm:p-8 rounded-none shadow-2xl flex flex-col items-center text-center">
                <span className="text-[10px] font-mono font-black text-[#5FD4FD] uppercase tracking-widest mb-2 whitespace-nowrap">
                  [ WE HAVE YOU COVERED ]
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-2 leading-tight">
                  Ready to Specify Waterworks Solutions?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mb-6 max-w-md">
                  Browse complete AWWA C153 &amp; C110 fittings, Bison curb
                  boxes, and ductile iron infrastructure catalogs.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#product-matrix"
                    className="w-full sm:w-auto px-6 py-3 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#090D16] text-xs font-black uppercase tracking-wider rounded-none transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group cursor-pointer whitespace-nowrap"
                  >
                    <span>Explore Full Product Line</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="tel:+15162521111"
                    className="w-full sm:w-auto px-5 py-3 bg-transparent hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-none border border-white/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <span>Call Engineering Dispatch</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM METRICS DOCK (SINGLE LINE TICKER STRIP) */}
        <div className="absolute bottom-5 inset-x-0 z-30 px-6 sm:px-10 flex items-center justify-between pointer-events-none text-[11px] text-white/60">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5FD4FD] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">
              60 FPS Frame-Sync Engine
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[10px] font-mono tracking-wider text-white/60">
            <span className="whitespace-nowrap">
              FORMAT: MP4 H.264
            </span>
            <span>&bull;</span>
            <span className="whitespace-nowrap">
              METALLURGY: ASTM A536 DUCTILE IRON
            </span>
            <span>&bull;</span>
            <span className="whitespace-nowrap text-[#5FD4FD]">
              100% AIS READY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
