"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Gauge,
  Layers,
  PhoneCall,
  ShieldCheck,
  Sliders,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import type { ProductItem } from "../../types";

interface EngineeringInnovationSpotlightProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  product: ProductItem;
}

const INNOVATION_VARIANTS = [
  {
    id: "restraints",
    label: "Series 3000 Cam-Action Restraint",
    sublabel: "Concrete-Free Mechanical Joint Restraint",
    src: "/images/our-images/MJ_Fittings.jpeg",
    badge: "UL Listed / FM Approved",
    spec: "350 PSI Working • 500 PSI Proof",
  },
  {
    id: "ada-plates",
    label: "Indestructible Cast Iron ADA Armor",
    sublabel: "Non-Cracking Truncated Dome Tiles",
    src: "/images/our-images/warning-plate.png",
    badge: "AASHTO H-20 Traffic Rated",
    spec: "50+ Year Snowplow Armor",
  },
  {
    id: "trench-grates",
    label: "Heavy-Duty High-Inflow Vane Grates",
    sublabel: "Bicycle-Safe Storm Drainage Systems",
    src: "/images/our-images/trench-grates.png",
    badge: "State DOT Approved",
    spec: "AASHTO M306 Highway Cast Iron",
  },
];

const PRESSURE_STEPS = [
  { psi: 100, label: "100 PSI", bite: "0.8 mm", state: "Initial Seating" },
  { psi: 250, label: "250 PSI", bite: "1.8 mm", state: "Operating Load" },
  { psi: 350, label: "350 PSI", bite: "2.6 mm", state: "AWWA Working Max" },
  { psi: 500, label: "500 PSI", bite: "3.5 mm", state: "Surge Proof Seal" },
];

export const EngineeringInnovationSpotlight: React.FC<
  EngineeringInnovationSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal, product }) => {
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"photo" | "simulation">("photo");
  const [selectedPsi, setSelectedPsi] = useState(350);

  const activeVariant = INNOVATION_VARIANTS[activeVariantIndex];
  const currentStep =
    PRESSURE_STEPS.find((p) => p.psi === selectedPsi) || PRESSURE_STEPS[2];

  return (
    <section
      id="innovation-spotlight"
      aria-label="3rd Showcase: Groundbreaking Waterworks Innovation"
      className="py-12 sm:py-16 bg-[#0082FC] text-white border-b-4 border-[#5FD4FD] relative overflow-hidden"
    >
      {/* Background Architectural Grid Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Best Waterworks Copywriting */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#5FD4FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>
              3rd Product Showcase &bull; Next-Gen Mechanical Joint Engineering
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Series 3000{" "}
            <span className="text-[#5FD4FD]">Cam-Action Joint Restraint</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
            The engineering breakthrough that rendered bulky concrete thrust
            blocks obsolete. Aqua Industries&apos; Series 3000 harnesses dynamic
            cam leverage: heat-treated ductile iron gripping wedges bite
            radially into the pipe wall proportionally as line pressure surges.
            Eliminates trench over-excavation, cuts installation labor by 70%,
            and absorbs ground seismic deflection while maintaining an
            impenetrable 350 PSI pressure seal.
          </p>
        </div>

        {/* 2-Column Balanced Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT 6 COLUMNS: Visual Showcase, Dynamic Bite Simulator, and Variant Selector */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* View Mode Switcher */}
            <div className="flex items-center justify-between gap-2 border-2 border-white/60 p-1 bg-[#0082FC]">
              <button
                type="button"
                onClick={() => setViewMode("photo")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer text-center ${
                  viewMode === "photo"
                    ? "bg-white text-[#0082FC] shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Product Photographs
              </button>
              <button
                type="button"
                onClick={() => setViewMode("simulation")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center justify-center gap-1.5 ${
                  viewMode === "simulation"
                    ? "bg-white text-[#0082FC] shadow-sm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Dynamic Cam Grip Render</span>
              </button>
            </div>

            <div className="relative bg-white border-4 border-[#5FD4FD] p-6 sm:p-10 shadow-2xl flex flex-col items-center justify-center min-h-[420px] sm:min-h-[480px] text-[#0082FC]">
              {/* Corner Waterworks Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#0082FC] bg-[#5FD4FD]/20 px-2.5 py-1 border border-[#0082FC]">
                  {activeVariant.badge}
                </span>
              </div>

              {/* Top Right Spec Tag */}
              <div className="absolute top-4 right-4 z-10 hidden sm:block">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0082FC] bg-white border border-[#0082FC] px-2 py-1 shadow-xs">
                  {activeVariant.spec}
                </span>
              </div>

              {viewMode === "photo" ? (
                <>
                  {/* Main Active Image Display */}
                  <div className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center overflow-hidden py-4">
                    <img
                      src={activeVariant.src}
                      alt={activeVariant.label}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="mt-4 text-center">
                    <p className="text-base sm:text-lg font-black uppercase text-[#0082FC] tracking-tight">
                      {activeVariant.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0082FC]/80">
                      {activeVariant.sublabel}
                    </p>
                  </div>
                </>
              ) : (
                /* Dynamic Cam Wedge Mechanical Bite Simulation Render */
                <div className="w-full flex flex-col items-center justify-between h-[360px] sm:h-[400px] relative">
                  {/* Hydrostatic Pressure Simulator Selector */}
                  <div className="w-full flex items-center justify-center gap-1.5 z-10 pt-4">
                    {PRESSURE_STEPS.map((step) => (
                      <button
                        key={step.psi}
                        type="button"
                        onClick={() => setSelectedPsi(step.psi)}
                        className={`px-2.5 py-1 text-[11px] font-black uppercase rounded-none border transition-all cursor-pointer ${
                          selectedPsi === step.psi
                            ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                            : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                        }`}
                      >
                        {step.label}
                      </button>
                    ))}
                  </div>

                  {/* Interactive Cross-Section SVG Diagram of Cam Wedge Force Vectors */}
                  <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-2">
                    <svg
                      viewBox="0 0 340 260"
                      className="w-full h-full max-h-[240px]"
                      fill="none"
                      aria-label="Cam Action Wedge Bite Cross-Section"
                    >
                      {/* Ductile Iron Pipe Outer Wall */}
                      <rect
                        x="30"
                        y="90"
                        width="280"
                        height="80"
                        fill="#0082FC"
                        fillOpacity="0.08"
                        stroke="#0082FC"
                        strokeWidth="3"
                      />
                      <text
                        x="100"
                        y="135"
                        fill="#0082FC"
                        fontSize="10"
                        fontWeight="black"
                        letterSpacing="1"
                      >
                        DUCTILE IRON PIPE BARREL (350 PSI)
                      </text>

                      {/* Top Restraint Gland Body */}
                      <rect
                        x="70"
                        y="45"
                        width="200"
                        height="35"
                        fill="#0082FC"
                        stroke="#5FD4FD"
                        strokeWidth="2"
                      />
                      <text
                        x="105"
                        y="66"
                        fill="#FFFFFF"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        SERIES 3000 MJ GLAND
                      </text>

                      {/* Left Cam Wedge */}
                      <g
                        style={{
                          transform: `translateY(${
                            selectedPsi === 100
                              ? 2
                              : selectedPsi === 250
                                ? 6
                                : selectedPsi === 350
                                  ? 10
                                  : 14
                          }px)`,
                          transition:
                            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <polygon
                          points="90,75 115,75 110,95 95,95"
                          fill="#5FD4FD"
                          stroke="#0082FC"
                          strokeWidth="2"
                        />
                        {/* Force Vector Downward Arrow */}
                        <line
                          x1="102"
                          y1="60"
                          x2="102"
                          y2="88"
                          stroke="#0082FC"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                          className="animate-hydro-flow-fast"
                        />
                      </g>

                      {/* Right Cam Wedge */}
                      <g
                        style={{
                          transform: `translateY(${
                            selectedPsi === 100
                              ? 2
                              : selectedPsi === 250
                                ? 6
                                : selectedPsi === 350
                                  ? 10
                                  : 14
                          }px)`,
                          transition:
                            "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <polygon
                          points="225,75 250,75 245,95 230,95"
                          fill="#5FD4FD"
                          stroke="#0082FC"
                          strokeWidth="2"
                        />
                        {/* Force Vector Downward Arrow */}
                        <line
                          x1="237"
                          y1="60"
                          x2="237"
                          y2="88"
                          stroke="#0082FC"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                          className="animate-hydro-flow-fast"
                        />
                      </g>

                      {/* Breakaway Torque Screw Heads */}
                      <circle
                        cx="102"
                        cy="35"
                        r="8"
                        fill="#FFFFFF"
                        stroke="#0082FC"
                        strokeWidth="2"
                      />
                      <circle
                        cx="237"
                        cy="35"
                        r="8"
                        fill="#FFFFFF"
                        stroke="#0082FC"
                        strokeWidth="2"
                      />

                      {/* Bottom Gland Collar */}
                      <rect
                        x="70"
                        y="180"
                        width="200"
                        height="30"
                        fill="#0082FC"
                        stroke="#5FD4FD"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Telemetry Indicator Readout */}
                  <div className="w-full flex items-center justify-between border-t border-[#0082FC]/20 pt-2 px-1 text-xs">
                    <div className="text-left font-bold text-[#0082FC]">
                      <span>Radial Bite: </span>
                      <strong className="text-[#0082FC] font-black">
                        {currentStep.bite} Penetration
                      </strong>
                    </div>

                    <div className="text-right font-bold text-[#0082FC]">
                      <span className="bg-[#5FD4FD]/30 px-2 py-0.5 border border-[#0082FC]">
                        {currentStep.state}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Variant Selector (shown when in photo mode) */}
            {viewMode === "photo" && (
              <div className="grid grid-cols-3 gap-3">
                {INNOVATION_VARIANTS.map((item, idx) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveVariantIndex(idx)}
                    className={`p-2 border-2 rounded-none transition-all text-left flex flex-col items-center justify-center bg-white cursor-pointer ${
                      activeVariantIndex === idx
                        ? "border-white bg-[#5FD4FD]/30 shadow-md ring-2 ring-white"
                        : "border-[#5FD4FD]/60 hover:border-white opacity-85 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="h-14 w-auto object-contain mb-1"
                    />
                    <span className="text-[11px] sm:text-xs font-black uppercase text-[#0082FC] text-center line-clamp-1">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT 6 COLUMNS: Technical Engineering Parameters & Spec Ledger */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4 Feature Parameter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white text-[#0082FC] flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 text-[#0082FC]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-white">
                    Dynamic Cam Gripping
                  </h3>
                </div>
                <p className="text-xs text-white/90 leading-snug">
                  Independent heat-treated ductile iron wedges bite radially
                  into the pipe proportionally as hydrostatic water pressure
                  spikes.
                </p>
              </div>

              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white text-[#0082FC] flex items-center justify-center shrink-0">
                    <Wrench className="w-4 h-4 text-[#0082FC]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-white">
                    Torque-Off Shear Nuts
                  </h3>
                </div>
                <p className="text-xs text-white/90 leading-snug">
                  Calibrated breakaway hex nuts snap off at exact factory
                  torque, eliminating torque wrench guesswork and pipe crushing.
                </p>
              </div>

              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white text-[#0082FC] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-[#0082FC]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-white">
                    5&deg; Flex Deflection
                  </h3>
                </div>
                <p className="text-xs text-white/90 leading-snug">
                  Accommodates natural pipeline settlement and seismic ground
                  movement without stressing fittings or compromising seals.
                </p>
              </div>

              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white text-[#0082FC] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-white">
                    UL &amp; FM Certified
                  </h3>
                </div>
                <p className="text-xs text-white/90 leading-snug">
                  Rated up to 350 PSI continuous service for municipal potable
                  distribution and high-pressure dedicated fire mains.
                </p>
              </div>
            </div>

            {/* Submittal Specification Ledger */}
            <div className="border-2 border-[#5FD4FD] bg-white/10 shadow-md backdrop-blur-sm">
              <div className="bg-white text-[#0082FC] px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Series 3000 Engineering Parameters
                </span>
                <span className="text-xs font-semibold text-[#0082FC]">
                  AWWA C111 / ASTM A536
                </span>
              </div>

              <div className="p-4 space-y-2.5 text-xs sm:text-sm text-white">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Gland Metallurgy:
                  </span>
                  <span className="text-white font-bold uppercase">
                    Grade 65-45-12 Ductile Iron (ASTM A536)
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Pressure Rating:
                  </span>
                  <span className="text-[#5FD4FD] font-bold">
                    350 PSI Working Pressure (2:1 Safety Factor)
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Pipe Compatibility:
                  </span>
                  <span className="text-white font-bold">
                    Ductile Iron (Class 50-56) &bull; C900 / C905 PVC
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80 font-normal">
                    Protective Finish:
                  </span>
                  <span className="text-white font-bold">
                    Electrostatic Fusion-Bonded Epoxy / Bituminous
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onAddToRfq(product)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#0082FC] bg-white hover:bg-[#5FD4FD] rounded-none shadow-md transition-all uppercase tracking-wide cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0082FC]" />
                <span>Add Series 3000 to RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#5FD4FD] hover:text-[#0082FC] bg-[#0082FC] hover:bg-white border-2 border-[#5FD4FD] rounded-none shadow-xs transition-all uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#5FD4FD] group-hover:text-[#0082FC]" />
                <span>Download Restraint PDF</span>
              </button>
            </div>

            {/* Quick Dispatch Strip */}
            <div className="pt-2 flex items-center justify-between border-t border-white/20 text-xs font-semibold text-white">
              <span>Next-Day Flatbed Dispatch from Melville &amp; FL</span>
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-1 hover:text-[#5FD4FD] transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-[#5FD4FD]" />
                <span>+1 (516) 252-1111</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
