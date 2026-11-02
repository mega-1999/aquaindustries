"use client";

import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  FileCheck2,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type React from "react";

interface CinematicHeroProps {
  variant?: "blue" | "white";
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  variant = "white",
}) => {
  const isBlue = variant === "blue";

  return (
    <section
      id="infrastructure-hero"
      aria-label="Aqua Industries American Waterworks Infrastructure"
      className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 border-b-4 ${
        isBlue
          ? "bg-[#0082FC] text-white border-[#5FD4FD]"
          : "bg-white text-[#0082FC] border-[#0082FC]"
      }`}
    >
      {/* Background Fluid Wave Watermarks and Subtle Hydro Geometric Motif */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Ambient Looping Water Dynamics Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${
            isBlue
              ? "opacity-25 mix-blend-screen"
              : "opacity-12 mix-blend-multiply"
          }`}
          src="https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4"
        />

        {/* Soft Fluid Waves */}
        <div
          className={`absolute -top-24 -left-24 w-[500px] h-[500px] rounded-none blur-3xl fluid-wave ${
            isBlue ? "bg-[#5FD4FD]/20" : "bg-[#5FD4FD]/15"
          }`}
        />
        <div
          className={`absolute -bottom-32 -right-24 w-[600px] h-[600px] rounded-none blur-3xl fluid-wave ${
            isBlue ? "bg-white/10" : "bg-[#0082FC]/5"
          }`}
        />

        {/* Technical Piping & Water Flow Schematic Overlay */}
        <svg
          aria-hidden="true"
          className={`absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-10 ${
            isBlue ? "text-white" : "text-[#0082FC]"
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
            stroke="#5FD4FD"
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
          <circle cx="150" cy="120" r="14" fill="#5FD4FD" />
          <circle cx="680" cy="550" r="14" fill="#5FD4FD" />
        </svg>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Tagline Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none border shadow-md mb-4 backdrop-blur-md ${
            isBlue
              ? "bg-white/15 border-[#5FD4FD] text-white"
              : "bg-[#0082FC] border-[#5FD4FD] text-white"
          }`}
        >
          <Droplets className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
          <span className="text-xs font-bold tracking-wide uppercase whitespace-nowrap">
            Domestic Waterworks Manufacturing &bull; Melville, NY &amp; Florida
            Hubs
          </span>
        </div>

        {/* Primary Headline */}
        <h2
          className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] max-w-4xl mb-4 font-sans uppercase ${
            isBlue ? "text-white" : "text-[#0082FC]"
          }`}
        >
          Ductile Iron Waterworks Fittings Built for American Infrastructure.
        </h2>

        {/* Grounded, Human US Copy */}
        <p
          className={`text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal ${
            isBlue ? "text-white" : "text-[#0082FC]/90"
          }`}
        >
          Heavy-duty AWWA and NSF certified fittings, wedge restraints, and
          municipal castings. Built for real field conditions, verified by lab
          testing, and backed by straightforward paperwork.
        </p>

        {/* Single-Line Trust Badges */}
        <div className="w-full max-w-3xl flex flex-wrap items-center justify-center gap-2.5 mb-8">
          <div
            className={`px-3 py-1.5 rounded-none border text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs ${
              isBlue
                ? "bg-white/10 border-[#5FD4FD] text-white"
                : "bg-white border-2 border-[#0082FC] text-[#0082FC]"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
            <span className="whitespace-nowrap">
              AWWA C153 &amp; C110 Compliant
            </span>
          </div>

          <div
            className={`px-3 py-1.5 rounded-none border text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs ${
              isBlue
                ? "bg-white/10 border-[#5FD4FD] text-white"
                : "bg-white border-2 border-[#0082FC] text-[#0082FC]"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
            <span className="whitespace-nowrap">
              NSF/ANSI 61 &amp; 372 Certified
            </span>
          </div>

          <div
            className={`px-3 py-1.5 rounded-none border text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs ${
              isBlue
                ? "bg-white/10 border-[#5FD4FD] text-white"
                : "bg-white border-2 border-[#0082FC] text-[#0082FC]"
            }`}
          >
            <Truck className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
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
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold rounded-none shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap ${
              isBlue
                ? "text-[#0082FC] bg-white hover:bg-[#5FD4FD] hover:text-[#0082FC]"
                : "text-white bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC]"
            }`}
          >
            <span>Browse Waterworks Catalog</span>
            <ArrowRight
              className={`w-4 h-4 ${isBlue ? "text-[#0082FC]" : "text-white group-hover:text-[#0082FC]"}`}
            />
          </a>

          {/* Button 2 */}
          <a
            href="#submittal-builder"
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold rounded-none shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap border-2 ${
              isBlue
                ? "text-[#5FD4FD] hover:text-[#0082FC] bg-[#0082FC] hover:bg-[#5FD4FD] border-[#5FD4FD]"
                : "text-[#0082FC] hover:text-white bg-white hover:bg-[#0082FC] border-[#0082FC]"
            }`}
          >
            <FileCheck2 className="w-4 h-4 text-[#5FD4FD]" />
            <span>Build Submittal Package</span>
          </a>
        </div>

        {/* Bottom Trust Indicators */}
        <div
          className={`mt-10 pt-5 border-t flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-normal ${
            isBlue
              ? "border-white/20 text-white"
              : "border-[#0082FC]/20 text-[#0082FC]"
          }`}
        >
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5FD4FD]" />
            <span>Quotes Valid for 30 Calendar Days</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5FD4FD]" />
            <span>Traceable Mill Heat Number on Every Body</span>
          </div>
          <a
            href="tel:+15162521111"
            className="flex items-center gap-2 whitespace-nowrap hover:text-[#5FD4FD] transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#5FD4FD]" />
            <span>Melville Dispatch: +1 (516) 252-1111</span>
          </a>
        </div>
      </div>
    </section>
  );
};
