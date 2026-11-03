"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Download,
  Droplets,
  FileCheck2,
  FlaskConical,
  Gauge,
  Lock,
  PhoneCall,
  Play,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  ThermometerSnowflake,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";
import { InfiniteWaterBackground } from "../common/InfiniteWaterBackground";

interface SamplingStationSpotlightProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  product: ProductItem;
}

const STATION_HOTSPOTS = [
  {
    id: 1,
    x: "28%",
    y: "32%",
    title: "Smooth-Bore Brass Spigot",
    badge: "NSF/ANSI 61 Lead-Free",
    desc: "Unthreaded nozzle prevents laminar aeration, biofilm buildup, and false-positive coliform readings.",
  },
  {
    id: 2,
    x: "72%",
    y: "25%",
    title: "Anti-Tamper Lockable Shroud",
    badge: "ASTM A536 Ductile Iron",
    desc: "Heavy padlock shroud guards against vandalism, unauthorized taps, and surface contaminants.",
  },
  {
    id: 3,
    x: "76%",
    y: "65%",
    title: "Thermal Frost Core",
    badge: "-20°F R-14 Insulation",
    desc: "Polyurethane thermal casing retains subterranean ground heat without expensive electrical heat tracing.",
  },
  {
    id: 4,
    x: "24%",
    y: "85%",
    title: "Subterranean Direct Tap",
    badge: '1" NPT Mainline Inlet',
    desc: "Direct watermain feed bypasses private premise plumbing, ensuring true municipal water samples.",
  },
];

export const SamplingStationSpotlight: React.FC<
  SamplingStationSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal, product }) => {
  const [viewMode, setViewMode] = useState<"photo" | "simulation">("photo");
  const [activeMode, setActiveMode] = useState<"flow" | "thermal" | "pressure">(
    "flow",
  );
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section
      id="sampling-station-spotlight"
      aria-label="New Innovation Municipal Water Sampling Station"
      className="py-12 sm:py-16 bg-[#0082FC] text-white border-b-4 border-[#5FD4FD] relative overflow-hidden"
    >
      {/* Infinite Seamless Looping Water Background Animation */}
      <InfiniteWaterBackground opacity="opacity-25" />

      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#5FD4FD]">
            <FlaskConical className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>Product Showcase &bull; New Flagship Innovation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Municipal Water{" "}
            <span className="text-[#5FD4FD]">Sampling Station</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
            A critical engineering advancement for municipal public health.
            Provides dedicated, non-contaminated sampling points directly from
            the watermain for real-time chlorine residual, bacteriological
            monitoring, and EPA Lead &amp; Copper Rule compliance.
          </p>
        </div>

        {/* 2-Column Split: High-Contrast Display & Engineering Parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left 6 Columns: Crisp White Showcase Card with Interactive View Mode */}
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
                Product Photograph
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
                <span>Waterway &amp; Flow Render</span>
              </button>
            </div>

            {/* Top Area Outside Image: Hotspot Inspection Callout Banner */}
            {activeHotspot !== null && (
              <div className="w-full bg-white border-2 border-[#5FD4FD] p-3.5 text-left shadow-xl text-[#0082FC] animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#0082FC] text-white flex items-center justify-center font-black text-xs">
                      {activeHotspot}
                    </span>
                    <span className="font-black text-xs sm:text-sm uppercase tracking-tight text-[#0082FC]">
                      {
                        STATION_HOTSPOTS.find((h) => h.id === activeHotspot)
                          ?.title
                      }
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#5FD4FD] text-[#0082FC] font-extrabold px-2 py-0.5 whitespace-nowrap">
                    {
                      STATION_HOTSPOTS.find((h) => h.id === activeHotspot)
                        ?.badge
                    }
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#0082FC]/90 font-medium">
                  {STATION_HOTSPOTS.find((h) => h.id === activeHotspot)?.desc}
                </p>
                <div className="mt-2 flex items-center justify-between border-t border-[#0082FC]/15 pt-1.5">
                  <span className="text-[10px] text-[#0082FC]/70 font-bold uppercase">
                    Specification ID AQUA-WSS-2026 &bull; Point {activeHotspot}{" "}
                    of 4
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(null)}
                    className="text-[11px] font-black text-[#0082FC] hover:text-[#5FD4FD] uppercase cursor-pointer"
                  >
                    ✕ Close Inspection
                  </button>
                </div>
              </div>
            )}

            {/* Top Area Outside Image: Hotspot Inspection Callout Banner */}
            {activeHotspot !== null && (
              <div className="w-full bg-white border-2 border-[#5FD4FD] p-3.5 text-left shadow-xl text-[#0082FC] animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#0082FC] text-white flex items-center justify-center font-black text-xs">
                      {activeHotspot}
                    </span>
                    <span className="font-black text-xs sm:text-sm uppercase tracking-tight text-[#0082FC]">
                      {
                        STATION_HOTSPOTS.find((h) => h.id === activeHotspot)
                          ?.title
                      }
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#5FD4FD] text-[#0082FC] font-extrabold px-2 py-0.5 whitespace-nowrap">
                    {
                      STATION_HOTSPOTS.find((h) => h.id === activeHotspot)
                        ?.badge
                    }
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#0082FC]/90 font-medium">
                  {STATION_HOTSPOTS.find((h) => h.id === activeHotspot)?.desc}
                </p>
                <div className="mt-2 flex items-center justify-between border-t border-[#0082FC]/15 pt-1.5">
                  <span className="text-[10px] text-[#0082FC]/70 font-bold uppercase">
                    Specification ID AQUA-WSS-2026 &bull; Point {activeHotspot}{" "}
                    of 4
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(null)}
                    className="text-[11px] font-black text-[#0082FC] hover:text-[#5FD4FD] uppercase cursor-pointer"
                  >
                    ✕ Close Inspection
                  </button>
                </div>
              </div>
            )}

            <div className="bg-white border-4 border-[#5FD4FD] p-6 sm:p-10 shadow-2xl relative flex flex-col items-center justify-center text-[#0082FC] min-h-[440px] sm:min-h-[500px]">
              {/* Corner Serial & Standard Tag */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                <span className="text-xs font-bold text-[#0082FC]/80 uppercase tracking-wider">
                  Specification ID
                </span>
                <span className="text-sm sm:text-base font-black text-[#0082FC]">
                  AQUA-WSS-2026
                </span>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1 bg-white text-[#0082FC] border border-[#0082FC] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                  ANSI/NSF 61 Certified
                </span>
              </div>

              {viewMode === "photo" ? (
                <>
                  {/* High-Resolution Real Product Photograph */}
                  <div className="h-72 sm:h-84 w-full flex items-center justify-center py-4 overflow-hidden relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-xl"
                    />

                    {/* Interactive Hotspot Inspection Pins */}
                    {STATION_HOTSPOTS.map((spot) => (
                      <button
                        key={spot.id}
                        type="button"
                        onClick={() =>
                          setActiveHotspot(
                            activeHotspot === spot.id ? null : spot.id,
                          )
                        }
                        style={{ left: spot.x, top: spot.y }}
                        className={`absolute z-30 w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-none border-2 flex items-center justify-center font-black text-xs shadow-xl transition-all hover:scale-125 cursor-pointer ${
                          activeHotspot === spot.id
                            ? "bg-[#0082FC] text-white border-white scale-125 ring-4 ring-[#5FD4FD]"
                            : "bg-white text-[#0082FC] border-[#0082FC] hover:bg-[#5FD4FD]/30"
                        }`}
                        title={spot.title}
                        aria-label={spot.title}
                      >
                        <span>{spot.id}</span>
                      </button>
                    ))}
                  </div>

                  {/* Bottom Caption Strip */}
                  <div className="w-full mt-4 pt-4 border-t border-[#0082FC]/20 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#0082FC]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0082FC]" />
                      100% Lead-Free Brass Waterway
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ThermometerSnowflake className="w-4 h-4 text-[#0082FC]" />
                      Freeze-Proof Thermal Core
                    </span>
                  </div>
                </>
              ) : (
                /* Animated Waterway & Thermal Core Flow Simulation Render */
                <div className="w-full flex flex-col items-center justify-between h-[360px] sm:h-[400px] relative">
                  {/* Simulation Sub-Mode Switcher */}
                  <div className="w-full flex items-center justify-center gap-1.5 z-10 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveMode("flow")}
                      className={`px-2.5 py-1 text-[11px] font-black uppercase rounded-none border transition-all cursor-pointer ${
                        activeMode === "flow"
                          ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                          : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                      }`}
                    >
                      Active Water Flow
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveMode("thermal")}
                      className={`px-2.5 py-1 text-[11px] font-black uppercase rounded-none border transition-all cursor-pointer ${
                        activeMode === "thermal"
                          ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                          : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                      }`}
                    >
                      -20°F Frost Defense
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveMode("pressure")}
                      className={`px-2.5 py-1 text-[11px] font-black uppercase rounded-none border transition-all cursor-pointer ${
                        activeMode === "pressure"
                          ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                          : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                      }`}
                    >
                      300 PSI Hydrostatic
                    </button>
                  </div>

                  {/* SVG Waterway Diagram */}
                  <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden my-2">
                    <svg
                      viewBox="0 0 320 260"
                      className="w-full h-full max-h-[240px]"
                      fill="none"
                      aria-label="Sampling Station Waterway Schematic"
                    >
                      {/* Outer Ductile Iron Shell */}
                      <rect
                        x="110"
                        y="40"
                        width="100"
                        height="200"
                        fill="#0082FC"
                        fillOpacity="0.08"
                        stroke="#0082FC"
                        strokeWidth="2.5"
                      />

                      {/* Polyurethane Insulation Layer */}
                      <rect
                        x="125"
                        y="50"
                        width="70"
                        height="180"
                        fill="#5FD4FD"
                        fillOpacity="0.2"
                        stroke="#5FD4FD"
                        strokeWidth="1.5"
                        strokeDasharray="4 2"
                      />

                      {/* Internal Brass Waterway Pipe */}
                      <rect
                        x="150"
                        y="60"
                        width="20"
                        height="190"
                        fill="#FFFFFF"
                        stroke="#0082FC"
                        strokeWidth="2"
                      />

                      {/* Animated Hydro Flow Stream inside pipe */}
                      <line
                        x1="160"
                        y1="250"
                        x2="160"
                        y2="80"
                        stroke="#0082FC"
                        strokeWidth="4"
                        strokeDasharray="6 4"
                        className="animate-hydro-flow-fast"
                      />

                      {/* Sampling Bibb Outlet Spigot */}
                      <path
                        d="M160 80 L90 80 L90 100"
                        stroke="#0082FC"
                        strokeWidth="6"
                        fill="none"
                      />
                      <line
                        x1="160"
                        y1="80"
                        x2="90"
                        y2="80"
                        stroke="#5FD4FD"
                        strokeWidth="3"
                        strokeDasharray="4 2"
                        className="animate-hydro-flow"
                      />

                      {/* Water Droplet Dispense Animation */}
                      {activeMode === "flow" && (
                        <circle
                          cx="90"
                          cy="110"
                          r="4"
                          fill="#0082FC"
                          className="animate-drop-dispense"
                        />
                      )}

                      {/* Text Callouts */}
                      <text
                        x="180"
                        y="75"
                        fill="#0082FC"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        NSF 61 BRASS CORE
                      </text>
                      <text
                        x="180"
                        y="140"
                        fill="#0082FC"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        R-14 THERMAL CASING
                      </text>
                      <text
                        x="180"
                        y="235"
                        fill="#0082FC"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        1&quot; NPT INLET
                      </text>
                    </svg>
                  </div>

                  {/* Telemetry Strip */}
                  <div className="w-full flex items-center justify-between border-t border-[#0082FC]/20 pt-2 px-1 text-xs font-bold text-[#0082FC]">
                    <span>
                      {activeMode === "flow"
                        ? "Sampling Stream: 4.2 GPM (EPA Lead/Copper Verified)"
                        : activeMode === "thermal"
                          ? "Frost Protection: -20°F Sub-Zero Stable"
                          : "Hydrostatic Seal: 300 PSI Hydro-Proof Tested"}
                    </span>
                    <span className="bg-[#5FD4FD]/30 px-2 py-0.5 border border-[#0082FC]">
                      Continuous Flow
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right 6 Columns: Key Features & Engineering Spec Matrix */}
          <div className="lg:col-span-6 space-y-6">
            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="w-10 h-10 bg-white text-[#0082FC] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#0082FC]" />
                </div>
                <h3 className="text-base font-black uppercase text-white mb-1">
                  Zero Cross-Contamination
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Bypasses private homeowner plumbing fixtures to sample water
                  directly from the municipal distribution main.
                </p>
              </div>

              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="w-10 h-10 bg-white text-[#0082FC] flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5 text-[#0082FC]" />
                </div>
                <h3 className="text-base font-black uppercase text-white mb-1">
                  Vandal-Proof Security
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Tamper-resistant padlock hasp and heavy cast ductile iron
                  lockable cover prevent unauthorized access or contamination.
                </p>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="border-2 border-[#5FD4FD] bg-white/10 shadow-md backdrop-blur-sm">
              <div className="px-4 py-2.5 bg-white text-[#0082FC] flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Engineering Submittal Specifications
                </span>
                <span className="text-xs font-semibold text-[#0082FC]">
                  Rev. 2026.1
                </span>
              </div>
              <div className="p-4 space-y-2.5 text-xs sm:text-sm text-white">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Housing Enclosure:
                  </span>
                  <span className="text-white font-bold uppercase">
                    Heavy Ductile Iron (ASTM A536)
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Internal Waterway:
                  </span>
                  <span className="text-white font-bold uppercase">
                    Lead-Free Certified Brass (NSF 372)
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Inlet &amp; Outlet:
                  </span>
                  <span className="text-white font-bold">
                    1&quot; NPT Female Inlet &bull; 3/4&quot; Smooth Bore Bibb
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Freeze Protection:
                  </span>
                  <span className="text-white font-bold">
                    Polyurethane Insulated Outer Casing
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80 font-normal">
                    Working Pressure:
                  </span>
                  <span className="text-[#5FD4FD] font-bold">
                    300 PSI Hydrostatic Proof Tested
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="button"
                onClick={() => onAddToRfq(product)}
                className="flex-1 px-5 py-3 bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-bold text-xs sm:text-sm rounded-none shadow-md transition-all whitespace-nowrap text-center uppercase tracking-wide cursor-pointer"
              >
                + Add Sampling Station to Quote
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="flex-1 px-5 py-3 bg-[#0082FC] hover:bg-white text-[#5FD4FD] hover:text-[#0082FC] font-bold text-xs sm:text-sm rounded-none border-2 border-[#5FD4FD] transition-all whitespace-nowrap text-center inline-flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#5FD4FD] group-hover:text-[#0082FC]" />
                <span>Download Submittal PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
