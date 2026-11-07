"use client";

import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type React from "react";
import { InfiniteWaterBackground } from "../common/InfiniteWaterBackground";

interface CinematicHeroProps {
  variant?: "blue" | "white";
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  variant = "blue",
}) => {
  const isBlue = variant === "blue";

  return (
    <section
      id="infrastructure-hero"
      aria-label="Aqua Industries American Waterworks Infrastructure"
      className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 border-b-4 ${isBlue
          ? "bg-[#3087ff] text-white border-[#3087ff]"
          : "bg-white text-[#3087ff] border-[#3087ff]"
        }`}
    >
      {/* Background Fluid Wave Watermarks and Seamless Looping Water Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Infinite Seamless Looping Water Background Animation */}
        <InfiniteWaterBackground
          opacity={isBlue ? "opacity-35" : "opacity-25"}
          mixBlend={isBlue ? "mix-blend-screen" : "mix-blend-overlay"}
        />

        {/* Hydrodynamic Fluid Caustic Accent Layer */}
        <div
          className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay gpu-water-drift pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 30%, rgba(48, 135, 255, 0.8) 0%, rgba(48, 135, 255, 0.95) 100%)",
          }}
        />

        {/* Soft Fluid Waves */}
        <div
          className={`absolute -top-24 -left-24 w-[500px] h-[500px] rounded-none blur-3xl fluid-wave ${isBlue ? "bg-white" : "bg-white"
            }`}
        />
        <div
          className={`absolute -bottom-32 -right-24 w-[600px] h-[600px] rounded-none blur-3xl fluid-wave ${isBlue ? "bg-white/15" : "bg-white"
            }`}
        />

        {/* Technical Piping & Water Flow Schematic Overlay */}
        <svg
          aria-hidden="true"
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-10 ${isBlue ? "text-white" : "text-[#3087ff]"
            }`}
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Aqua Industries Hydraulic Fitting Geometry</title>
          {/* Hydraulic 90-degree MJ Bend Path */}
          <path
            d="M 150,120 L 450,120 C 600,120 680,200 680,350 L 680,550"
            stroke="currentColor"
            strokeWidth="36"
            strokeLinecap="round"
          />
          <path
            d="M 150,120 L 450,120 C 600,120 680,200 680,350 L 680,550"
            stroke="#3087ff"
            strokeWidth="6"
            strokeDasharray="14 10"
          />
          {/* Flange Bolt Circles */}
          <circle
            cx="150"
            cy="120"
            r="44"
            stroke="currentColor"
            strokeWidth="10"
          />
          <circle
            cx="680"
            cy="550"
            r="44"
            stroke="currentColor"
            strokeWidth="10"
          />
          <circle cx="150" cy="120" r="14" fill="#3087ff" />
          <circle cx="680" cy="550" r="14" fill="#3087ff" />
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none border shadow-md mb-4 backdrop-blur-md ${isBlue
              ? "bg-white/15 border-[#3087ff] text-white"
              : "bg-[#3087ff] border-[#3087ff] text-white"
            }`}
        >
          <img
            src="/images/AI_Fevicon.png"
            alt="Aqua Industries Emblem"
            className="w-3.5 h-3.5 object-contain shrink-0"
          />
          <span className="text-xs font-bold tracking-wide uppercase whitespace-nowrap">
            Domestic Waterworks Manufacturing &bull; Melville, NY &amp; Florida
            Hubs
          </span>
        </div>

        {/* Primary Headline */}
        <h2
          className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] max-w-4xl mb-4 font-sans uppercase ${isBlue ? "text-white" : "text-[#3087ff]"
            }`}
        >
          Ductile Iron Waterworks Fittings Built for American Infrastructure.
        </h2>

        {/* Grounded, Human US Copy */}
        <p
          className={`text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal ${isBlue ? "text-white" : "text-[#3087ff]"
            }`}
        >
          Heavy-duty AWWA and NSF certified fittings, wedge restraints, and
          municipal castings. Built for real field conditions, verified by lab
          testing, and backed by straightforward paperwork.
        </p>

        {/* Single-Line Trust Badges */}
        <div className="w-full max-w-3xl flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div
            className={`px-3 py-1.5 rounded-none border text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs ${isBlue
                ? "bg-white/10 border-[#3087ff] text-white"
                : "bg-white border-2 border-[#3087ff] text-[#3087ff]"
              }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
            <span className="whitespace-nowrap">
              AWWA C153 &amp; C110 Compliant
            </span>
          </div>

          <div
            className={`px-3 py-1.5 rounded-none border text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs ${isBlue
                ? "bg-white/10 border-[#3087ff] text-white"
                : "bg-white border-2 border-[#3087ff] text-[#3087ff]"
              }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
            <span className="whitespace-nowrap">
              NSF/ANSI 61 &amp; 372 Certified
            </span>
          </div>

          <div
            className={`px-3 py-1.5 rounded-none border text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs ${isBlue
                ? "bg-white/10 border-[#3087ff] text-white"
                : "bg-white border-2 border-[#3087ff] text-[#3087ff]"
              }`}
          >
            <Truck className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
            <span className="whitespace-nowrap">
              Fast Nationwide Flatbed Dispatch
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Button 1 */}
          <a
            href="#product-matrix"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold rounded-none shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap ${isBlue
                ? "text-[#3087ff] bg-white hover:bg-[#3087ff] hover:text-white"
                : "text-white bg-[#3087ff] hover:bg-[#3087ff] hover:text-white"
              }`}
          >
            <span>Browse Waterworks Catalog</span>
            <ArrowRight
              className={`w-4 h-4 ${isBlue ? "text-[#3087ff]" : "text-white group-hover:text-[#3087ff]"}`}
            />
          </a>

          {/* Button 2 */}
          <a
            href="#submittal-builder"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold rounded-none shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap border-2 ${isBlue
                ? "text-[#3087ff] hover:text-white bg-[#3087ff] hover:bg-[#3087ff] border-[#3087ff]"
                : "text-[#3087ff] hover:text-white bg-white hover:bg-[#3087ff] border-[#3087ff]"
              }`}
          >
            <FileCheck2 className="w-4 h-4 text-[#3087ff]" />
            <span>Build Submittal Package</span>
          </a>
        </div>

        {/* Bottom Trust Indicators */}
        <div
          className={`mt-10 pt-5 border-t flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-normal ${isBlue
              ? "border-white/20 text-white"
              : "border-[#3087ff] text-[#3087ff]"
            }`}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3087ff]" />
            <span>Quotes Valid for 30 Calendar Days</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3087ff]" />
            <span>Traceable Mill Heat Number on Every Body</span>
          </div>
          <a
            href="tel:+15162521111"
            className="flex items-center gap-2 whitespace-nowrap hover:text-[#3087ff] transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#3087ff]" />
            <span>Melville Dispatch: +1 (516) 252-1111</span>
          </a>
        </div>
      </div>
    </section>
  );
};
