"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Eye,
  FileCheck2,
  Flame,
  FlaskConical,
  Gauge,
  Info,
  Lock,
  PhoneCall,
  Play,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  ThermometerSnowflake,
  Truck,
  Waves,
} from "lucide-react";
import React, { useState } from "react";

const HOTSPOTS = [
  {
    id: 1,
    x: "24%",
    y: "28%",
    title: "Smooth-Bore Brass Spigot",
    badge: "NSF/ANSI 61 Lead-Free",
    desc: "Unthreaded nozzle prevents laminar aeration, biofilm buildup, and false-positive coliform readings.",
  },
  {
    id: 2,
    x: "72%",
    y: "22%",
    title: "Anti-Tamper Lockable Shroud",
    badge: "ASTM A536 Ductile Iron",
    desc: "Heavy padlock shroud guards against vandalism, unauthorized taps, and surface contaminants.",
  },
  {
    id: 3,
    x: "78%",
    y: "65%",
    title: "Thermal Frost Core",
    badge: "-20°F R-14 Insulation",
    desc: "Polyurethane thermal casing retains subterranean ground heat without expensive electrical heat tracing.",
  },
  {
    id: 4,
    x: "22%",
    y: "82%",
    title: "Subterranean Direct Tap",
    badge: '1" NPT Mainline Inlet',
    desc: "Direct watermain feed bypasses private premise plumbing, ensuring true municipal water samples.",
  },
];

export const SolenoSamplingHero: React.FC = () => {
  const [activeMode, setActiveMode] = useState<"flow" | "thermal" | "pressure">(
    "flow",
  );
  const [isSimulating, setIsSimulating] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

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

          {/* RIGHT COLUMN: Soleno Circular Showcase Complex with Interactive Physics Render & Hotspots */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-6 lg:pt-0">
            {/* Top Area Outside Image: Hotspot Detail Callout or Mode Switcher */}
            {activeHotspot !== null ? (
              <div className="w-full max-w-[440px] mb-3 bg-white border-2 border-[#5FD4FD] p-3 text-left shadow-2xl text-[#0082FC] animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#0082FC] text-white flex items-center justify-center font-black text-xs">
                      {activeHotspot}
                    </span>
                    <span className="font-black text-xs sm:text-sm uppercase tracking-tight text-[#0082FC]">
                      {HOTSPOTS.find((h) => h.id === activeHotspot)?.title}
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#5FD4FD] text-[#0082FC] font-extrabold px-2 py-0.5 whitespace-nowrap">
                    {HOTSPOTS.find((h) => h.id === activeHotspot)?.badge}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-[#0082FC]/90 font-medium">
                  {HOTSPOTS.find((h) => h.id === activeHotspot)?.desc}
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
            ) : (
              <div className="w-full max-w-[420px] mb-3 flex items-center justify-between gap-1 bg-white/10 p-1 border border-[#5FD4FD] backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setActiveMode("flow")}
                  className={`flex-1 py-1 px-2 text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 rounded-none ${
                    activeMode === "flow"
                      ? "bg-white text-[#0082FC] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Droplets className="w-3.5 h-3.5" />
                  <span>Active Flow</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMode("thermal")}
                  className={`flex-1 py-1 px-2 text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 rounded-none ${
                    activeMode === "thermal"
                      ? "bg-white text-[#0082FC] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <ThermometerSnowflake className="w-3.5 h-3.5" />
                  <span>Frost -20°F</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveMode("pressure")}
                  className={`flex-1 py-1 px-2 text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1 rounded-none ${
                    activeMode === "pressure"
                      ? "bg-white text-[#0082FC] shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Gauge className="w-3.5 h-3.5" />
                  <span>300 PSI Test</span>
                </button>
              </div>
            )}

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

              {/* Pressure Radar Wave Pulse (Active during pressure mode or continuous) */}
              {activeMode === "pressure" && (
                <div className="absolute inset-0 rounded-full border-4 border-[#5FD4FD] animate-radar-ping pointer-events-none" />
              )}

              {/* Soleno Circular Vessel Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full bg-white border-4 border-[#5FD4FD] shadow-2xl flex items-center justify-center overflow-hidden p-6">
                {/* Radial Water Glow Background */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    activeMode === "thermal"
                      ? "bg-radial from-[#5FD4FD]/40 via-white to-white"
                      : activeMode === "pressure"
                        ? "bg-radial from-[#0082FC]/20 via-white to-white"
                        : "bg-radial from-[#5FD4FD]/30 via-white to-white"
                  }`}
                />

                {/* Animated Hydrodynamic SVG Water Flow Circuit */}
                {isSimulating && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    viewBox="0 0 400 400"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* Subterranean Supply Line to Bibb */}
                    <path
                      d="M200 380 L200 240 Q200 170 140 170 L110 170"
                      stroke="#5FD4FD"
                      strokeWidth="5"
                      strokeLinecap="square"
                      className="animate-hydro-flow"
                    />
                    <path
                      d="M200 380 L200 240 Q200 170 260 170 L280 170"
                      stroke="#0082FC"
                      strokeWidth="2.5"
                      strokeLinecap="square"
                      className="animate-hydro-flow-fast"
                    />
                  </svg>
                )}

                {/* Animated Droplet Dispense from Sample Bibb */}
                {isSimulating && activeMode === "flow" && (
                  <div className="absolute top-[38%] left-[26%] z-20 pointer-events-none">
                    <span className="block w-2.5 h-3.5 bg-[#0082FC] border border-[#5FD4FD] rounded-none animate-drop-dispense" />
                  </div>
                )}

                {/* Floating Wave Texture */}
                <div className="absolute -bottom-10 inset-x-0 h-32 bg-[#5FD4FD]/20 rounded-full blur-xl pointer-events-none" />

                {/* Central Flagship Product: Water Sampling Station */}
                <img
                  src="/images/our-images/sampling-station.png"
                  alt="Aqua Industries Municipal Water Sampling Station Flagship"
                  className="relative z-10 max-h-[82%] max-w-[82%] object-contain soleno-product-float drop-shadow-2xl"
                />

                {/* Interactive Hotspot Inspection Pins */}
                {HOTSPOTS.map((spot) => (
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

                {/* Soleno-Style Badge: Municipal Sampling Station / Industry Leader */}
                <div className="absolute inset-x-0 bottom-4 text-center z-20 px-3">
                  <div className="inline-block bg-[#0082FC] border-2 border-[#5FD4FD] px-4 py-1.5 shadow-2xl">
                    <span className="block text-[10px] sm:text-xs font-black text-[#5FD4FD] uppercase tracking-wider">
                      Flagship Innovation
                    </span>
                    <h2 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight leading-tight">
                      Sampling Station
                    </h2>
                    <span className="block text-[10px] font-bold text-white/95">
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

              {/* Live Telemetry Indicator Floating Chips */}
              <div className="absolute -top-3 left-4 bg-white border-2 border-[#0082FC] px-2.5 py-1 text-[11px] font-bold text-[#0082FC] shadow-sm z-20 hidden sm:flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 bg-[#0082FC] animate-ping" />
                <span>
                  {activeMode === "flow"
                    ? "Flow: 4.2 GPM • Cl₂: 1.25 mg/L"
                    : activeMode === "thermal"
                      ? "Thermal: -20°F R-14 Core"
                      : "Pressure: 300 PSI Hydrostatic"}
                </span>
              </div>

              <div className="absolute top-12 -right-4 bg-white border-2 border-[#5FD4FD] px-2.5 py-1 text-[11px] font-bold text-[#0082FC] shadow-sm z-20 hidden sm:block whitespace-nowrap">
                ✓ Click Pins 1-4 to Inspect
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
