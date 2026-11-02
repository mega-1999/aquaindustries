"use client";

import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  FlaskConical,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type React from "react";

export const SolenoSamplingHero: React.FC = () => {
  return (
    <section
      aria-label="Aqua Industries Soleno Water Management Showcase"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0082FC] text-white py-16 sm:py-20 lg:py-24 border-b-4 border-[#5FD4FD]"
    >
      {/* Background Fluid Wave Watermarks and Schematic Geometry */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#5FD4FD]/20 rounded-none blur-3xl fluid-wave" />
        <div className="absolute -bottom-40 -right-32 w-[700px] h-[700px] bg-white/10 rounded-none blur-3xl fluid-wave" />

        {/* Ambient Technical Coordinate Grid Lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Soleno Industrial Typography */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-[#0082FC] shadow-md border-2 border-[#5FD4FD] rounded-none">
              <FlaskConical className="w-4 h-4 text-[#0082FC] shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                Flagship Product Showcase &bull; Laboratory Grade
              </span>
            </div>

            {/* Soleno-Style Headline (Balanced Scale) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[0.96] uppercase font-sans">
              <span className="text-[#5FD4FD] block">CONNECTING YOU</span>
              TO THE FUTURE OF
              <br />
              WATER MANAGEMENT
            </h1>

            {/* Grounded Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-white/95 max-w-xl leading-relaxed font-normal">
              Engineering next-generation municipal water infrastructure and our
              flagship <strong>Water Sampling Station</strong>. Providing
              secure, non-contaminated sampling points for real-time chlorine
              residual, lead/copper compliance, and heavy ductile iron watermain
              integrity.
            </p>

            {/* Single-Line Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="px-3 py-1.5 bg-white/10 border border-[#5FD4FD] text-white text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
                <span>EPA Lead &amp; Copper Rule Approved</span>
              </div>

              <div className="px-3 py-1.5 bg-white/10 border border-[#5FD4FD] text-white text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs backdrop-blur-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
                <span>NSF/ANSI 61 &amp; 372 Certified Lead-Free</span>
              </div>

              <div className="px-3 py-1.5 bg-white/10 border border-[#5FD4FD] text-white text-xs font-semibold whitespace-nowrap inline-flex items-center gap-1.5 shadow-xs backdrop-blur-sm">
                <Truck className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
                <span>Melville, NY Foundry &amp; FL Logistics</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#curb-box-spotlight"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-[#0082FC] bg-white hover:bg-[#5FD4FD] hover:text-[#0082FC] rounded-none shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <span>Explore Curb Box &amp; Innovations</span>
                <ArrowRight className="w-4 h-4 text-[#0082FC]" />
              </a>

              <a
                href="#product-matrix"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-[#5FD4FD] hover:text-[#0082FC] bg-[#0082FC] hover:bg-[#5FD4FD] border-2 border-[#5FD4FD] rounded-none shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <FileCheck2 className="w-4 h-4 text-[#5FD4FD] group-hover:text-[#0082FC]" />
                <span>Browse Complete Catalog</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Soleno Circular Showcase Complex with Sampling Station */}
          <div className="lg:col-span-5 flex items-center justify-center relative pt-6 lg:pt-0">
            {/* Concentric Soleno Geometric Rotating Ring */}
            <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] xl:w-[490px] xl:h-[490px] flex items-center justify-center">
              {/* Outer Rotating Dashed Ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#5FD4FD]/60 soleno-rotate-ring pointer-events-none"
                style={{
                  boxShadow: "0 0 50px rgba(95, 212, 253, 0.25)",
                }}
              />

              {/* Middle Rotating Geometric Accent Ring */}
              <div
                className="absolute inset-4 rounded-full border border-white/40 soleno-rotate-ring pointer-events-none"
                style={{
                  animationDirection: "reverse",
                  animationDuration: "35s",
                }}
              />

              {/* Soleno Circular Vessel Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full bg-white border-4 border-[#5FD4FD] shadow-2xl flex items-center justify-center overflow-hidden p-6">
                {/* Radial Water Glow Background */}
                <div className="absolute inset-0 bg-radial from-[#5FD4FD]/30 via-white to-white" />

                {/* Floating Wave Texture */}
                <div className="absolute -bottom-10 inset-x-0 h-32 bg-[#5FD4FD]/20 rounded-full blur-xl pointer-events-none" />

                {/* Central Flagship Product: Water Sampling Station */}
                <img
                  src="/images/our-images/sampling-station.png"
                  alt="Aqua Industries Municipal Water Sampling Station Flagship"
                  className="relative z-10 max-h-[82%] max-w-[82%] object-contain soleno-product-float drop-shadow-2xl"
                />

                {/* Soleno-Style Badge: Municipal Sampling Station / Industry Leader */}
                <div className="absolute inset-x-0 bottom-4 text-center z-20 px-3">
                  <div className="inline-block bg-[#0082FC] border-2 border-[#5FD4FD] px-4 py-2 shadow-2xl">
                    <span className="block text-[11px] sm:text-xs font-black text-[#5FD4FD] uppercase tracking-wider">
                      Flagship Innovation
                    </span>
                    <h2 className="text-sm sm:text-base font-black text-white uppercase tracking-tight leading-tight">
                      Sampling Station
                    </h2>
                    <span className="block text-[10px] sm:text-xs font-bold text-white/95">
                      American Industry Leader
                    </span>
                  </div>
                </div>
              </div>

              {/* Soleno Circular Floating Interactive CTA Button */}
              <a
                href="#quote-form"
                className="absolute -bottom-3 -right-3 sm:bottom-0 sm:right-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-4 border-white flex flex-col items-center justify-center p-2 text-center shadow-xl transition-all duration-300 hover:scale-105 group z-30"
                title="Start a project with Aqua Industries"
              >
                <span className="text-[10px] sm:text-[11px] font-black tracking-wider uppercase leading-tight">
                  START A<br />
                  PROJECT
                </span>
                <span className="text-lg sm:text-xl font-black mt-0.5 text-white group-hover:text-[#0082FC] transition-transform duration-300 group-hover:rotate-90">
                  +
                </span>
              </a>

              {/* Floating Engineering Chips */}
              <div className="absolute -top-3 left-4 bg-white border-2 border-[#0082FC] px-2.5 py-1 text-[11px] font-bold text-[#0082FC] shadow-sm z-20 hidden sm:block whitespace-nowrap">
                ✓ Non-Contaminating Waterway
              </div>
              <div className="absolute top-12 -right-4 bg-white border-2 border-[#5FD4FD] px-2.5 py-1 text-[11px] font-bold text-[#0082FC] shadow-sm z-20 hidden sm:block whitespace-nowrap">
                ✓ Freeze-Proof Insulated
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators & Direct Hotline */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white font-normal">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 bg-[#5FD4FD]" />
              <span>Traceable Melt Heat Numbers Cast on Every Body</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 bg-[#5FD4FD]" />
              <span>New York Foundry &amp; Florida Operations</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 bg-[#5FD4FD]" />
              <span>Certified Mill Test Reports (MTRs) Provided</span>
            </div>
          </div>

          <a
            href="tel:+15162521111"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#5FD4FD] transition-colors whitespace-nowrap bg-white/10 px-3.5 py-1.5 border border-[#5FD4FD]/50"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#5FD4FD]" />
            <span>Direct Dispatch: +1 (516) 252-1111</span>
          </a>
        </div>
      </div>
    </section>
  );
};
