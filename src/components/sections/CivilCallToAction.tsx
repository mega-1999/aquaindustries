"use client";

import React from "react";
import { InfiniteWaterBackground } from "../common/InfiniteWaterBackground";

interface CivilCallToActionProps {
  onExploreCatalog?: () => void;
  onRequestQuote?: () => void;
}

export function CivilCallToAction({
  onExploreCatalog,
  onRequestQuote,
}: CivilCallToActionProps) {
  const scrollToMatrix = () => {
    if (onExploreCatalog) {
      onExploreCatalog();
    } else {
      const el = document.getElementById("product-matrix");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToQuote = () => {
    if (onRequestQuote) {
      onRequestQuote();
    } else {
      const el = document.getElementById("quote-builder");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full border-b border-[#3087ff] bg-[#3087ff] text-white py-16 lg:py-24 overflow-hidden">
      {/* Infinite Seamless Looping Water Background Animation */}
      <InfiniteWaterBackground opacity="opacity-25" />

      {/* Background hydraulic pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3087ff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Technical Mechanical Joint Blueprint Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border-2 border-[#3087ff] p-6 shadow-2xl relative">
              {/* Technical Blueprint Badge */}
              <div className="flex items-center justify-between border-b border-[#3087ff] pb-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#3087ff] font-bold whitespace-nowrap">
                  DWG SPEC: C153-MJ-B90
                </span>
                <span className="text-xs font-mono uppercase px-2.5 py-1 bg-[#3087ff] text-white font-bold whitespace-nowrap">
                  350 PSI RATED
                </span>
              </div>

              {/* Vector Blueprint of 90 Degree Ductile Iron Mechanical Joint Bend */}
              <div className="relative py-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 280 200"
                  className="w-full h-auto text-[#3087ff]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  aria-label="Technical mechanical joint elbow diagram"
                >
                  {/* Outer elbow contour */}
                  <path
                    d="M 40 40 L 160 40 C 210 40 240 70 240 120 L 240 180"
                    stroke="#3087ff"
                    strokeWidth="8"
                  />
                  {/* Inner elbow contour */}
                  <path
                    d="M 40 100 L 120 100 C 145 100 160 115 160 140 L 160 180"
                    stroke="#3087ff"
                    strokeWidth="8"
                  />
                  {/* Flange Bell A (Horizontal) */}
                  <rect
                    x="20"
                    y="25"
                    width="20"
                    height="90"
                    fill="#3087ff"
                    stroke="#3087ff"
                    strokeWidth="2"
                  />
                  {/* Bolt Holes A */}
                  <circle cx="30" cy="38" r="4" fill="#FFFFFF" />
                  <circle cx="30" cy="70" r="4" fill="#FFFFFF" />
                  <circle cx="30" cy="102" r="4" fill="#FFFFFF" />

                  {/* Flange Bell B (Vertical) */}
                  <rect
                    x="145"
                    y="180"
                    width="110"
                    height="20"
                    fill="#3087ff"
                    stroke="#3087ff"
                    strokeWidth="2"
                  />
                  {/* Bolt Holes B */}
                  <circle cx="160" cy="190" r="4" fill="#FFFFFF" />
                  <circle cx="200" cy="190" r="4" fill="#FFFFFF" />
                  <circle cx="240" cy="190" r="4" fill="#FFFFFF" />

                  {/* Centerline hydraulic flow arrow */}
                  <path
                    d="M 45 70 C 170 70 200 95 200 175"
                    stroke="#3087ff"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />

                  {/* Dimension callout lines */}
                  <line
                    x1="20"
                    y1="125"
                    x2="145"
                    y2="125"
                    stroke="#3087ff"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="265"
                    y1="40"
                    x2="265"
                    y2="180"
                    stroke="#3087ff"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                </svg>

                {/* Sky blue dimension callout pill */}
                <div className="absolute bottom-2 right-2 bg-[#3087ff] border border-white px-2.5 py-1 text-xs font-mono text-white font-bold whitespace-nowrap">
                  GRADE 65-45-12 DUCTILE
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-[#3087ff] text-center">
                <div className="bg-[#3087ff] p-2.5">
                  <div className="text-xs font-mono text-white/80 uppercase tracking-wider font-bold whitespace-nowrap">
                    AWWA Standard
                  </div>
                  <div className="text-sm font-extrabold text-white whitespace-nowrap mt-0.5">
                    C153 / C111
                  </div>
                </div>
                <div className="bg-[#3087ff] p-2.5">
                  <div className="text-xs font-mono text-white/80 uppercase tracking-wider font-bold whitespace-nowrap">
                    Lining
                  </div>
                  <div className="text-sm font-extrabold text-white whitespace-nowrap mt-0.5">
                    Cement / Seal
                  </div>
                </div>
                <div className="bg-[#3087ff] p-2.5">
                  <div className="text-xs font-mono text-white/80 uppercase tracking-wider font-bold whitespace-nowrap">
                    Hydro Test
                  </div>
                  <div className="text-sm font-extrabold text-white whitespace-nowrap mt-0.5">
                    500 PSI Proof
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Title, Direct US Contractor Copy, Single-Line Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 border-2 border-[#3087ff] bg-white px-3.5 py-1.5">
              <span className="w-2.5 h-2.5 bg-[#3087ff]"></span>
              <span className="text-sm font-bold uppercase tracking-wider text-[#3087ff] whitespace-nowrap">
                Mastering Water Infrastructure
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Reliable Waterworks Fittings for Heavy Municipal Infrastructure
            </h2>

            <div className="space-y-3 text-white text-sm sm:text-base leading-relaxed font-normal">
              <p>
                American water and sewer utilities operate under harsh,
                high-pressure field conditions. Aqua Industries manufactures and
                stocks AWWA-certified ductile iron mechanical joint fittings,
                wedge restraint glands, and highway-rated municipal castings
                built for long-term underground service.
              </p>
              <p>
                Every fitting body is poured from ASTM A536 Grade 65-45-12
                ductile iron, hydrostatically pressure tested, and stamped with
                traceable heat codes. With direct regional yard inventory across
                Eastern and Central freight corridors, we keep utility
                contractors on schedule without supply house backorders.
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3.5 items-center">
              <button
                type="button"
                onClick={scrollToMatrix}
                className="inline-flex items-center justify-center bg-white text-[#3087ff] hover:bg-[#3087ff] hover:text-white font-bold text-sm sm:text-base px-6 py-3.5 border-2 border-white transition-colors duration-150 whitespace-nowrap cursor-pointer shadow-sm"
              >
                <span>Browse Fittings &amp; Castings</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={scrollToQuote}
                className="inline-flex items-center justify-center bg-[#3087ff] text-white hover:bg-white hover:text-[#3087ff] font-bold text-sm sm:text-base px-6 py-3.5 border-2 border-white transition-colors duration-150 whitespace-nowrap cursor-pointer shadow-sm"
              >
                <span>Request Project Material Quote</span>
              </button>
            </div>

            {/* Bottom 3 Single-line Trust Markers */}
            <div className="pt-4 border-t border-[#3087ff] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono font-bold">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#3087ff]"></span>
                <span className="whitespace-nowrap">
                  AWWA C153 &amp; C110 COMPLIANT
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#3087ff]"></span>
                <span className="whitespace-nowrap">
                  NSF/ANSI 61 &amp; 372 APPROVED
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#3087ff]"></span>
                <span className="whitespace-nowrap">
                  AIS &amp; BABA DOMESTIC ELIGIBLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
