"use client";

import React from "react";

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
    <section className="relative w-full border-b border-[#0082FC] bg-[#0082FC] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background hydraulic pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #5FD4FD 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual: Technical Mechanical Joint Blueprint Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border-2 border-[#5FD4FD] p-6 shadow-2xl relative">
              {/* Technical Blueprint Badge */}
              <div className="flex items-center justify-between border-b border-[#0082FC] pb-3 mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#0082FC] font-semibold whitespace-nowrap">
                  DWG SPEC: C153-MJ-B90
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#0082FC] text-white font-bold whitespace-nowrap">
                  350 PSI RATED
                </span>
              </div>

              {/* Vector Blueprint of 90 Degree Ductile Iron Mechanical Joint Bend */}
              <div className="relative py-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 280 200"
                  className="w-full h-auto text-[#0082FC]"
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
                    stroke="#0082FC"
                    strokeWidth="8"
                  />
                  {/* Inner elbow contour */}
                  <path
                    d="M 40 100 L 120 100 C 145 100 160 115 160 140 L 160 180"
                    stroke="#0082FC"
                    strokeWidth="8"
                  />
                  {/* Flange Bell A (Horizontal) */}
                  <rect
                    x="20"
                    y="25"
                    width="20"
                    height="90"
                    fill="#0082FC"
                    stroke="#0082FC"
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
                    fill="#0082FC"
                    stroke="#0082FC"
                    strokeWidth="2"
                  />
                  {/* Bolt Holes B */}
                  <circle cx="160" cy="190" r="4" fill="#FFFFFF" />
                  <circle cx="200" cy="190" r="4" fill="#FFFFFF" />
                  <circle cx="240" cy="190" r="4" fill="#FFFFFF" />

                  {/* Centerline hydraulic flow arrow */}
                  <path
                    d="M 45 70 C 170 70 200 95 200 175"
                    stroke="#5FD4FD"
                    strokeWidth="3"
                    strokeDasharray="6 4"
                  />

                  {/* Dimension callout lines */}
                  <line
                    x1="20"
                    y1="125"
                    x2="145"
                    y2="125"
                    stroke="#0082FC"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="265"
                    y1="40"
                    x2="265"
                    y2="180"
                    stroke="#0082FC"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                </svg>

                {/* Sky blue dimension callout pill */}
                <div className="absolute bottom-2 right-2 bg-[#0082FC] border border-[#5FD4FD] px-2 py-1 text-[10px] font-mono text-[#5FD4FD] whitespace-nowrap">
                  GRADE 65-45-12 DUCTILE
                </div>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#0082FC] text-center">
                <div className="bg-[#0082FC] p-2">
                  <div className="text-[10px] font-mono text-[#5FD4FD] uppercase tracking-wider whitespace-nowrap">
                    AWWA Standard
                  </div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">
                    C153 / C111
                  </div>
                </div>
                <div className="bg-[#0082FC] p-2">
                  <div className="text-[10px] font-mono text-[#5FD4FD] uppercase tracking-wider whitespace-nowrap">
                    Lining
                  </div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">
                    Cement / Seal
                  </div>
                </div>
                <div className="bg-[#0082FC] p-2">
                  <div className="text-[10px] font-mono text-[#5FD4FD] uppercase tracking-wider whitespace-nowrap">
                    Hydro Test
                  </div>
                  <div className="text-xs font-bold text-white whitespace-nowrap">
                    500 PSI Proof
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Title, Direct US Contractor Copy, Single-Line Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 border border-[#5FD4FD] bg-white px-3 py-1">
              <span className="w-2 h-2 bg-[#0082FC]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0082FC] whitespace-nowrap">
                Mastering Water Infrastructure
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Reliable Waterworks Fittings for Heavy Municipal Infrastructure
            </h2>

            <div className="space-y-4 text-white text-base lg:text-lg leading-relaxed font-normal">
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
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={scrollToMatrix}
                className="inline-flex items-center justify-center bg-white text-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] font-bold text-sm px-6 py-3.5 border-2 border-white transition-colors duration-150 whitespace-nowrap"
              >
                <span>Browse Fittings & Castings</span>
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
                className="inline-flex items-center justify-center bg-[#0082FC] text-white hover:bg-white hover:text-[#0082FC] font-bold text-sm px-6 py-3.5 border-2 border-white transition-colors duration-150 whitespace-nowrap"
              >
                <span>Request Project Material Quote</span>
              </button>
            </div>

            {/* Bottom 3 Single-line Trust Markers */}
            <div className="pt-4 border-t border-[#5FD4FD] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#5FD4FD]"></span>
                <span className="whitespace-nowrap">
                  AWWA C153 & C110 COMPLIANT
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#5FD4FD]"></span>
                <span className="whitespace-nowrap">
                  NSF/ANSI 61 & 372 APPROVED
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#5FD4FD]"></span>
                <span className="whitespace-nowrap">
                  AIS & BABA DOMESTIC ELIGIBLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
