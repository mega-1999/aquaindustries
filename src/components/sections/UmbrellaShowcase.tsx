"use client";

import { Droplets, ShieldCheck } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export const UmbrellaShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Intersection observer for scroll-triggered entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="umbrella-showcase"
      aria-label="We Have You Covered — Waterworks Products"
      className="relative overflow-hidden bg-[#3087ff] border-y-4 border-[#3087ff]"
    >
      {/* Full-width layout: stacked on mobile, side-by-side on desktop */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-[520px] lg:min-h-[600px]">
        {/* LEFT: Video Container */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center overflow-hidden min-h-[320px] lg:min-h-[600px]">
          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-[#3087ff]/30 z-10 pointer-events-none" />

          {/* Rotating umbrella video — full bleed in the left half */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/umbrellas_video.mp4" type="video/mp4" />
          </video>

          {/* Video loading skeleton */}
          {!videoLoaded && (
            <div className="absolute inset-0 bg-[#3087ff] flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}

          {/* Bottom gradient fade into content area */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#3087ff] to-transparent z-10 pointer-events-none lg:hidden" />
          {/* Right edge gradient fade on desktop */}
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#3087ff] to-transparent z-10 pointer-events-none hidden lg:block" />
        </div>

        {/* RIGHT: Tagline & Content */}
        <div
          className={`relative z-20 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 lg:translate-x-0"
              : "opacity-0 translate-y-8 lg:translate-y-0 lg:translate-x-12"
          }`}
        >
          {/* Accent pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/40 bg-white/10 backdrop-blur-sm mb-6">
            <img
              src="/images/AI_Fevicon.png"
              alt="Aqua Industries"
              className="w-4 h-4 object-contain shrink-0"
            />
            <span className="text-[11px] font-bold tracking-widest uppercase text-white whitespace-nowrap">
              Aqua Industries &bull; Waterworks
            </span>
          </div>

          {/* Main tagline */}
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.08] tracking-tight uppercase mb-4 text-center lg:text-left transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            We Have You
            <br />
            <span className="relative inline-block">
              Covered
              {/* Underline accent */}
              <span
                className={`absolute -bottom-1 left-0 h-1 bg-white transition-all duration-700 delay-700 ${
                  isVisible ? "w-full" : "w-0"
                }`}
              />
            </span>
          </h2>

          {/* Sub-tagline */}
          <p
            className={`text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-relaxed max-w-lg mb-8 text-center lg:text-left transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            With Water Works Products......
          </p>

          {/* Trust badges */}
          <div
            className={`flex flex-col sm:flex-row items-center lg:items-start gap-3 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 bg-white/10 text-white text-xs font-semibold tracking-wide">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>AWWA &amp; NSF Certified</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/30 bg-white/10 text-white text-xs font-semibold tracking-wide">
              <Droplets className="w-4 h-4 shrink-0" />
              <span>Complete Municipal Solutions</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#product-matrix"
            className={`mt-8 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#3087ff] font-bold text-sm tracking-wide border-2 border-white hover:bg-[#3087ff] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg group ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: isVisible ? "600ms" : "0ms",
            }}
          >
            <span>Explore Our Products</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative water-pipe geometry (subtle) */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-20 text-white/5 pointer-events-none z-0"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
      </svg>
    </section>
  );
};

