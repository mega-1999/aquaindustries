"use client";

import { Droplets, ShieldCheck } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export const UmbrellaShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Play video on mount & viewport intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          videoRef.current?.play().catch(() => {});
        }
      },
      { threshold: 0.1 },
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
      aria-label="We Have You Covered With Water Works Products"
      className="relative overflow-hidden bg-[#3087ff] text-white border-y-4 border-[#3087ff]"
    >
      {/* Full-width container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Crisp Rotating Umbrella Video Card */}
          <div className="lg:col-span-6 w-full flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg overflow-hidden border-4 border-white shadow-2xl bg-[#3087ff] group">
              {/* Rotating umbrella video - autoplay, loop, muted */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center"
              >
                <source src="/videos/umbrellas_video.mp4" type="video/mp4" />
              </video>

              {/* Corner Waterworks Badge */}
              <div className="absolute top-3 left-3 bg-[#3087ff] text-white px-2.5 py-1 text-[10px] font-black uppercase tracking-wider border-2 border-white shadow-md">
                Aqua Industries
              </div>
            </div>
          </div>

          {/* RIGHT: Ben Mega Foundries US Tagline & Brand Messaging */}
          <div
            className={`lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider mb-5 border-2 border-white shadow-sm">
              <img
                src="/images/AI_Fevicon.png"
                alt="Aqua Industries"
                className="w-3.5 h-3.5 object-contain shrink-0"
              />
              <span>Full Municipal Protection</span>
            </div>

            {/* Official Tagline from Ben Mega Foundries US */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.08] mb-4">
              We Have You Covered
              <br />
              <span className="text-white underline decoration-white decoration-4 underline-offset-8">
                With Water Works
              </span>{" "}
              Products......
            </h2>

            <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed max-w-xl mb-8">
              From heavy-duty municipal castings and AWWA compact fittings to robust curb boxes and restraint harnesses — Aqua Industries protects critical civil water infrastructure nationwide.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8">
              <div className="px-3 py-1.5 bg-white text-[#3087ff] text-xs font-black uppercase border-2 border-white flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
                <span>AWWA &amp; NSF Certified</span>
              </div>
              <div className="px-3 py-1.5 bg-white text-[#3087ff] text-xs font-black uppercase border-2 border-white flex items-center gap-1.5 shadow-sm">
                <Droplets className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
                <span>100% AIS Ready</span>
              </div>
            </div>

            {/* Explore Catalog CTA */}
            <a
              href="#product-matrix"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white transition-all shadow-xl group cursor-pointer"
            >
              <span>Explore Waterworks Catalog</span>
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
      </div>
    </section>
  );
};

