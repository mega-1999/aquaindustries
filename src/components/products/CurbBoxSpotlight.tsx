"use client";

import {
  ArrowDown,
  Award,
  BoxSelect,
  CheckCircle2,
  ChevronDown,
  Download,
  FileCheck2,
  KeyRound,
  Layers,
  PhoneCall,
  RotateCw,
  Ruler,
  ShieldAlert,
  ShieldCheck,
  Sliders,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface CurbBoxSpotlightProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  product: ProductItem;
}

const CURB_BOX_IMAGES = [
  {
    src: "/images/our-images/curb-box-ultimate.png",
    label: "Bison Heavy-Duty Curb Box",
    sublabel: "Telescopic Arch Pattern",
  },
  {
    src: "/images/our-images/curb-box-buffalo.png",
    label: "Bison Buffalo-Style Service Box",
    sublabel: "Heavy-Wall Highway Pattern",
  },
  {
    src: "/images/our-images/curb-box-arch-full.png",
    label: "Bison Arch Base Straddle Fitting",
    sublabel: "Cast Footing for Curb Stop",
  },
];

const BURY_DEPTHS = [
  { depth: 36, label: '36" (3.0 ft)', zone: "Southern / Standard" },
  { depth: 48, label: '48" (4.0 ft)', zone: "Mid-Atlantic Frost" },
  { depth: 60, label: '60" (5.0 ft)', zone: "Northern Freeze" },
  { depth: 72, label: '72" (6.0 ft)', zone: "Deep Frost Grade" },
];

export const CurbBoxSpotlight: React.FC<CurbBoxSpotlightProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
  product,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"photo" | "schematic">("photo");
  const [selectedDepth, setSelectedDepth] = useState(48);
  const [valveTurnAngle, setValveTurnAngle] = useState(0);

  const handleRotateKey = () => {
    setValveTurnAngle((prev) => (prev + 90) % 360);
  };

  return (
    <section
      id="curb-box-spotlight"
      aria-label="2nd Showcase: Bison Curb Box"
      className="py-12 sm:py-16 bg-white text-[#0082FC] border-b-4 border-[#0082FC] relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0082FC 1px, transparent 1px), linear-gradient(to bottom, #0082FC 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0082FC] text-white text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
            <span>
              2nd Product Showcase &bull; Municipal Benchmark
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0082FC] leading-[1.05] mb-3">
            BISON <span className="text-[#5FD4FD]">CURB SERVICE BOX</span>
          </h2>

          <p className="text-sm sm:text-base text-[#0082FC]/90 font-normal leading-relaxed">
            The proven American municipal waterworks benchmark. Provides secure
            street-level shut-off access to underground service lines, engineered
            with telescopic frost-heave protection, heavy AASHTO H-20 traffic
            casting, and tamper-resistant brass pentagon locking.
          </p>
        </div>

        {/* 2-Column Balanced Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT 6 COLUMNS: Visual Showcase, Interactive Telescopic Render, and Selector */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* View Mode Toggle: Real Photo vs Telescopic Strata Render */}
            <div className="flex items-center justify-between gap-2 border-2 border-[#0082FC] p-1 bg-white">
              <button
                type="button"
                onClick={() => setViewMode("photo")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer text-center ${
                  viewMode === "photo"
                    ? "bg-[#0082FC] text-white shadow-xs"
                    : "text-[#0082FC] hover:bg-[#5FD4FD]/20"
                }`}
              >
                Full Product Photographs
              </button>
              <button
                type="button"
                onClick={() => setViewMode("schematic")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center justify-center gap-1.5 ${
                  viewMode === "schematic"
                    ? "bg-[#0082FC] text-white shadow-xs"
                    : "text-[#0082FC] hover:bg-[#5FD4FD]/20"
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Telescopic Strata Render</span>
              </button>
            </div>

            <div className="relative bg-white border-4 border-[#0082FC] p-6 sm:p-10 shadow-2xl flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px]">
              {/* Corner Waterworks Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#0082FC] bg-[#5FD4FD]/20 px-2.5 py-1 border border-[#0082FC]">
                  AASHTO H-20 Traffic Rated
                </span>
              </div>

              {/* Top Right Spec Tag */}
              <div className="absolute top-4 right-4 z-10 hidden sm:block">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0082FC] bg-white border border-[#0082FC] px-2 py-1 shadow-xs">
                  ASTM A48 Class 35B
                </span>
              </div>

              {viewMode === "photo" ? (
                <>
                  {/* Main Active Image Display */}
                  <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center py-4">
                    <img
                      src={CURB_BOX_IMAGES[activeImageIndex].src}
                      alt={CURB_BOX_IMAGES[activeImageIndex].label}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="mt-4 text-center">
                    <p className="text-base sm:text-lg font-black uppercase text-[#0082FC] tracking-tight">
                      {CURB_BOX_IMAGES[activeImageIndex].label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0082FC]/80">
                      {CURB_BOX_IMAGES[activeImageIndex].sublabel}
                    </p>
                  </div>
                </>
              ) : (
                /* Animated Telescopic Ground Strata Schematic Render */
                <div className="w-full flex flex-col items-center justify-between h-[360px] sm:h-[400px] relative">
                  {/* Depth Selector Pills */}
                  <div className="w-full flex items-center justify-center gap-1.5 z-10 pt-4">
                    {BURY_DEPTHS.map((bd) => (
                      <button
                        key={bd.depth}
                        type="button"
                        onClick={() => setSelectedDepth(bd.depth)}
                        className={`px-2.5 py-1 text-[11px] font-black uppercase rounded-none border transition-all cursor-pointer ${
                          selectedDepth === bd.depth
                            ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                            : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                        }`}
                      >
                        {bd.label}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic SVG Cross-Section Render */}
                  <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-2">
                    <svg
                      viewBox="0 0 320 300"
                      className="w-full h-full max-h-[260px]"
                      fill="none"
                      aria-label="Telescopic Curb Box Cross-Section"
                    >
                      {/* Pavement Surface Line */}
                      <line
                        x1="20"
                        y1="40"
                        x2="300"
                        y2="40"
                        stroke="#0082FC"
                        strokeWidth="3"
                        strokeDasharray="4 2"
                      />
                      <text
                        x="24"
                        y="34"
                        fill="#0082FC"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        STREET GRADE (AASHTO H-20 40,000 LB LOAD)
                      </text>

                      {/* Frost Line Indicator */}
                      <line
                        x1="20"
                        y1="140"
                        x2="300"
                        y2="140"
                        stroke="#5FD4FD"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                      />
                      <text
                        x="24"
                        y="134"
                        fill="#0082FC"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        MAX FROST PENETRATION LINE
                      </text>

                      {/* Lower Arch Base Casting (Fixed) */}
                      <path
                        d="M135 150 L135 240 L100 280 L130 280 L145 250 L175 250 L190 280 L220 280 L185 240 L185 150 Z"
                        fill="#0082FC"
                        opacity="0.15"
                        stroke="#0082FC"
                        strokeWidth="2"
                      />

                      {/* Potable Water Service Line with Animated Hydrodynamic Flow */}
                      <line
                        x1="40"
                        y1="270"
                        x2="280"
                        y2="270"
                        stroke="#0082FC"
                        strokeWidth="10"
                      />
                      <line
                        x1="40"
                        y1="270"
                        x2="280"
                        y2="270"
                        stroke="#5FD4FD"
                        strokeWidth="6"
                        strokeDasharray="16 8"
                        className="animate-hydro-flow-fast"
                      />
                      <rect
                        x="145"
                        y="260"
                        width="30"
                        height="20"
                        fill="#0082FC"
                        stroke="#5FD4FD"
                        strokeWidth="2"
                      />

                      {/* Telescopic Upper Shaft (Sliding with dynamic height based on selectedDepth) */}
                      <g
                        style={{
                          transform: `translateY(${
                            selectedDepth === 36
                              ? 30
                              : selectedDepth === 48
                                ? 15
                                : selectedDepth === 60
                                  ? 0
                                  : -15
                          }px)`,
                          transition:
                            "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        {/* Upper Tube */}
                        <rect
                          x="142"
                          y="40"
                          width="36"
                          height="140"
                          fill="#5FD4FD"
                          fillOpacity="0.25"
                          stroke="#0082FC"
                          strokeWidth="2"
                        />
                        {/* Heavy Cast Lid with Pentagon Bolt */}
                        <rect
                          x="130"
                          y="32"
                          width="60"
                          height="12"
                          fill="#0082FC"
                          stroke="#5FD4FD"
                          strokeWidth="1.5"
                        />
                        <polygon
                          points="160,34 165,37 163,42 157,42 155,37"
                          fill="#FFFFFF"
                          style={{
                            transform: `rotate(${valveTurnAngle}deg)`,
                            transformOrigin: "160px 38px",
                            transition: "transform 0.4s ease",
                          }}
                        />
                        {/* Telescopic Overlap Ring */}
                        <line
                          x1="138"
                          y1="160"
                          x2="182"
                          y2="160"
                          stroke="#0082FC"
                          strokeWidth="3"
                        />
                      </g>

                      {/* Depth Dimension Leader Lines */}
                      <line
                        x1="240"
                        y1="40"
                        x2="240"
                        y2="270"
                        stroke="#0082FC"
                        strokeWidth="1"
                      />
                      <text
                        x="246"
                        y="155"
                        fill="#0082FC"
                        fontSize="11"
                        fontWeight="black"
                      >
                        {selectedDepth}&quot; BURY
                      </text>
                    </svg>
                  </div>

                  {/* Interactive Pentagon Key Turn Simulator */}
                  <div className="w-full flex items-center justify-between border-t border-[#0082FC]/20 pt-2 px-1">
                    <div className="text-left text-xs font-bold text-[#0082FC]">
                      <span>Valve State: </span>
                      <strong className="text-[#0082FC]">
                        {valveTurnAngle % 180 === 0
                          ? "OPEN (FULL FLOW)"
                          : "CLOSED (SHUT-OFF)"}
                      </strong>
                    </div>

                    <button
                      type="button"
                      onClick={handleRotateKey}
                      className="px-2.5 py-1 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs font-black uppercase tracking-wider flex items-center gap-1 transition-all rounded-none cursor-pointer"
                    >
                      <RotateCw className="w-3 h-3" />
                      <span>Rotate Key 90°</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Variant Selector (shown when in photo mode) */}
            {viewMode === "photo" && (
              <div className="grid grid-cols-3 gap-3">
                {CURB_BOX_IMAGES.map((img, idx) => (
                  <button
                    type="button"
                    key={img.label}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`p-2 border-2 rounded-none transition-all text-left flex flex-col items-center justify-center bg-white cursor-pointer ${
                      activeImageIndex === idx
                        ? "border-[#0082FC] bg-[#5FD4FD]/15 shadow-md"
                        : "border-[#5FD4FD]/50 hover:border-[#0082FC]"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="h-16 w-auto object-contain mb-1"
                    />
                    <span className="text-[11px] sm:text-xs font-black uppercase text-[#0082FC] text-center line-clamp-1">
                      {img.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT 6 COLUMNS: Technical Engineering Parameters & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4 Feature Parameter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Bison Cast Durability
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Heavy-wall ductile and gray iron outlasts surrounding pavement
                  with 100+ years projected service life.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Vandal-Proof Pentagon Lock
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Proprietary recessed brass pentagon bolt prevents unauthorized
                  tampering while allowing rapid utility tool access.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <Ruler className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Telescopic Frost-Heave
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Adjustable sliding shaft (18&quot; to 72&quot; burial depth)
                  absorbs road settling without crushing the valve below.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <BoxSelect className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Arch Base Fitment
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Traditional wide arched footing securely straddles 3/4&quot;
                  through 2&quot; municipal curb stops without direct pipe
                  contact.
                </p>
              </div>
            </div>

            {/* Submittal Specification Ledger */}
            <div className="bg-white border-2 border-[#0082FC] shadow-sm">
              <div className="bg-[#0082FC] text-white px-5 py-3 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  Bison Curb Box Technical Matrix
                </span>
                <span className="text-xs font-bold text-[#5FD4FD]">
                  Melville, NY Foundry Spec
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-[#0082FC]/15 pb-2">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Casting Standard
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    ASTM A48 Class 35B / ASTM A536 Ductile
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#0082FC]/15 pb-2">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Load Rating
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    AASHTO H-20 &amp; HS-20 Traffic Certified
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#0082FC]/15 pb-2">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Upper Section
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    2-1/2&quot; &bull; 3&quot; Slide / Screw Adjustment
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Coating Protection
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    Heavy Asphaltic Bituminous Dip
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onAddToRfq(product)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] rounded-none shadow-sm transition-all uppercase tracking-wide cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Add Bison Curb Box to RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#0082FC] bg-white border-2 border-[#0082FC] hover:bg-[#0082FC] hover:text-white rounded-none shadow-xs transition-all uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#0082FC] group-hover:text-white" />
                <span>Download Submittal PDF</span>
              </button>
            </div>

            {/* Quick Dispatch Strip */}
            <div className="pt-2 flex items-center justify-between border-t border-[#0082FC]/20 text-xs font-semibold text-[#0082FC]">
              <span>In-Stock at Melville, NY &amp; FL Logistics Hubs</span>
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-1 hover:text-[#5FD4FD] transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-[#0082FC]" />
                <span>+1 (516) 252-1111</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
