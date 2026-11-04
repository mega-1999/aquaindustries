"use client";

import {
  Check,
  Copy,
  Download,
  Filter,
  Plus,
  ShieldCheck,
  Waves,
  Zap,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface StormwaterTrashRacksSpotlightProps {
  onAddToRfq?: (product: ProductItem) => void;
  onPreviewSubmittal?: (product: ProductItem) => void;
}

const TRASH_RACK_VARIANTS = [
  {
    id: "tr-vort-36",
    catNumber: "Cat. TR-VORT-36",
    name: '36" Pyramidal Anti-Vortex Trash Rack',
    tag: '36" ANTI-VORTEX DOME',
    sizeLabel: '36" Riser Opening',
    pipeFit: '36" Precast Concrete Catch Basins & Risers',
    dimensions: {
      height: '18.00"',
      width: '38.00" Sq',
      depth: '38.00" Sq',
      weightLbs: 160,
      flowArea: "320% of Pipe Area",
    },
    material: "ASTM A36 Heavy Structural Angle & Flat Bar",
    coating: "Hot-Dip Galvanized per ASTM A123 (minimum 4.0 mil)",
    cleanoutType: "Removable Anti-Vortex Apex Cap",
    trafficRating: "Stormwater Retention Basin Hydraulic Surge Proof",
    standards: "State Water Quality BMP • USACE TR-55 Hydraulic Manual",
    description:
      "Four-sided pyramid anti-vortex trash rack that sits atop stormwater riser structures. Its unique pyramidal slope sheds floating debris automatically while vertical vortex-breaking vanes prevent high-velocity whirlpool suction.",
    photoUrl: "/images/our-images/trench-grates.png",
  },
  {
    id: "tr-inc-48",
    catNumber: "Cat. TR-INC-48",
    name: '48" Inclined Bar Screen Trash Rack',
    tag: '48" 3:1 INCLINED SCREEN',
    sizeLabel: '48" Spillway Channel',
    pipeFit: '48" Wide Rectangular Orifice / Weir Inlets',
    dimensions: {
      height: '36.00"',
      width: '48.00"',
      depth: '36.00" (at 45° angle)',
      weightLbs: 210,
      flowArea: "290% of Orifice Flow Area",
    },
    material: '1/2" x 2" Solid Structural Steel Flow-Tapered Bars',
    coating: "ASTM A123 Hot-Dip Galvanized / 304 Stainless Optional",
    cleanoutType: "Hand-Rake Tapered Deck for Swift Maintenance",
    trafficRating: "Municipal Detention Facility Heavy Inflow",
    standards: "EPA Stormwater Phase II BMP • ASTM A123 • Buy America",
    description:
      "Inclined bar screen set at a 45-degree angle to the approaching water current. Floating branches and leaves rise up the screen as water levels rise, preserving full open hydraulic area through the lower slots.",
    photoUrl: "/images/products/Trench-Grates.jpg",
  },
  {
    id: "tr-orf-18",
    catNumber: "Cat. TR-ORF-18",
    name: '18" Low-Flow Orifice Debris Cage',
    tag: '18" WATER QUALITY CAGE',
    sizeLabel: '18" Orifice Plate',
    pipeFit: '2" to 12" Bottom Orifice Holes',
    dimensions: {
      height: '18.00"',
      width: '18.00"',
      depth: '14.00"',
      weightLbs: 85,
      flowArea: "450% of Bottom Orifice Area",
    },
    material: "304 Stainless Steel Perforated Screen & Galvanized Frame",
    coating: "Type 304 Stainless Steel Passivated & Galv Base Plate",
    cleanoutType: "Quick-Release Cam-Latch Inspection Dome",
    trafficRating: "Water Quality Extended Detention Protection",
    standards: "BMP Design Manual • ASTM A240 • 100% Domestic",
    description:
      'Protective debris enclosure designed to prevent mulch, plastic bags, and sediment from clogging small bottom drawdown orifices (2" to 12") in extended detention water quality ponds.',
    photoUrl: "/images/our-images/curb_inlet_riser_heavy_iron.png",
  },
  {
    id: "tr-weir-72",
    catNumber: "Cat. TR-WEIR-72",
    name: '72" Modular Weir Overflow Bar Rack',
    tag: '72" HIGH-CAPACITY WEIR',
    sizeLabel: '72" Broad-Crested Weir',
    pipeFit: '60" to 72" Riser Crests & Box Inlets',
    dimensions: {
      height: '24.00"',
      width: '72.00"',
      depth: '16.00"',
      weightLbs: 340,
      flowArea: "350% Effective Intake Capacity",
    },
    material: 'Heavy 5/8" Round Bar Grid with 4" Tubular Support Posts',
    coating: "Hot-Dip Galvanized per ASTM A123",
    cleanoutType: 'Independent 36" Modular Service Panels',
    trafficRating: "Major Municipal Dam & Flood Control Structures",
    standards: "USACE Standards • AASHTO • NRCS Pond Standard 378",
    description:
      "Modular multi-section weir overflow rack designed for broad-crested concrete spillways. Interlocking sections allow any perimeter length to be covered with high-impact debris protection.",
    photoUrl: "/images/our-images/trench-grates.png",
  },
];

export const StormwaterTrashRacksSpotlight: React.FC<
  StormwaterTrashRacksSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [activeVariantId, setActiveVariantId] = useState<string>("tr-vort-36");
  const [hasAntiVortexRack, setHasAntiVortexRack] = useState(true);
  const [floodStage, setFloodStage] = useState<"pond" | "peak" | "surge">(
    "peak",
  );
  const [viewMode, setViewMode] = useState<"cad" | "photo">("cad");
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeVariant =
    TRASH_RACK_VARIANTS.find((v) => v.id === activeVariantId) ||
    TRASH_RACK_VARIANTS[0];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);

    if (onAddToRfq) {
      onAddToRfq({
        id: activeVariant.id,
        name: `${activeVariant.name} (${activeVariant.catNumber})`,
        category: "municipal-castings",
        categoryLabel: "Trash Racks",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_TRASH_RACKS.DWG",
        submittalFile: "SUBMITTAL_DETENTION_TRASH_RACKS.PDF",
        specs: {
          tensileStrength: activeVariant.material,
          yieldStrength: activeVariant.trafficRating,
          elongation: activeVariant.dimensions.flowArea,
          wallThicknessClass: activeVariant.pipeFit,
          standardBoltCount: activeVariant.cleanoutType,
          torqueSpec: activeVariant.standards,
        },
        keyFeatures: [
          `Intake Area: ${activeVariant.dimensions.flowArea}`,
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Fit: ${activeVariant.pipeFit}`,
          `Design: ${activeVariant.cleanoutType}`,
          `Standards: ${activeVariant.standards}`,
        ],
        imageUrl: activeVariant.photoUrl,
        aisCompliant: true,
        buyAmericaReady: true,
      });
    }
  };

  const handleSubmittal = () => {
    if (onPreviewSubmittal) {
      onPreviewSubmittal({
        id: activeVariant.id,
        name: `${activeVariant.name} (${activeVariant.catNumber})`,
        category: "municipal-castings",
        categoryLabel: "Trash Racks",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_TRASH_RACKS.DWG",
        submittalFile: "SUBMITTAL_DETENTION_TRASH_RACKS.PDF",
        specs: {
          tensileStrength: activeVariant.material,
          yieldStrength: activeVariant.trafficRating,
          elongation: activeVariant.dimensions.flowArea,
          wallThicknessClass: activeVariant.pipeFit,
          standardBoltCount: activeVariant.cleanoutType,
          torqueSpec: activeVariant.standards,
        },
        keyFeatures: [
          `Intake Area: ${activeVariant.dimensions.flowArea}`,
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Fit: ${activeVariant.pipeFit}`,
          `Design: ${activeVariant.cleanoutType}`,
          `Standards: ${activeVariant.standards}`,
        ],
        imageUrl: activeVariant.photoUrl,
        aisCompliant: true,
        buyAmericaReady: true,
      });
    }
  };

  const handleCopySpecs = () => {
    const text = `AQUA INDUSTRIES TRASH RACK SPECIFICATION
Model: ${activeVariant.name} (${activeVariant.catNumber})
Riser Opening: ${activeVariant.pipeFit}
Open Hydraulic Area: ${activeVariant.dimensions.flowArea}
Weight: ${activeVariant.dimensions.weightLbs} lbs (H: ${activeVariant.dimensions.height}, W: ${activeVariant.dimensions.width}, D: ${activeVariant.dimensions.depth})
Material: ${activeVariant.material}
Coating: ${activeVariant.coating}
Access/Apex: ${activeVariant.cleanoutType}
Flood Rating: ${activeVariant.trafficRating}
Compliance: ${activeVariant.standards}
100% Domestic AIS / Buy America Certified`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const dischargeGpm =
    floodStage === "pond"
      ? "2,450 GPM"
      : floodStage === "peak"
        ? "8,800 GPM"
        : "16,500 GPM";

  return (
    <section
      id="trash-racks"
      aria-label="Stormwater Trash Racks Spotlight"
      className="py-16 sm:py-20 bg-[#0082FC] text-white border-b-4 border-white relative overflow-hidden"
    >
      {/* Background CAD Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-black uppercase tracking-widest border border-white mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
            <span>
              SECTION 3: STORMWATER DETENTION BASIN ANTI-VORTEX TRASH RACKS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
            Detention Basin Trash Racks
          </h2>

          <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
            Eliminates high-velocity whirlpool cavitation while shedding large
            floating debris off stormwater retention riser structures. Maintains
            over 300% free open hydraulic area to ensure full design drawdown.
          </p>
        </div>

        {/* Subvariant Switcher Bar */}
        <div className="bg-white text-[#0082FC] border-2 border-white p-3 sm:p-4 mb-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Riser &amp; Weir Trash Rack Configuration:</span>
            </span>
            <span className="text-[10px] font-bold text-[#0082FC]/70 uppercase">
              {TRASH_RACK_VARIANTS.length} BMP Geometries Available
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TRASH_RACK_VARIANTS.map((variant) => {
              const isActive = activeVariant.id === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => {
                    setActiveVariantId(variant.id);
                    setAdded(false);
                  }}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#0082FC] text-white border-[#0082FC] shadow-md scale-102"
                      : "bg-white text-[#0082FC] border-[#5FD4FD] hover:border-[#0082FC] hover:bg-[#5FD4FD]/10"
                  }`}
                >
                  {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  <span>{variant.tag.split(" ")[0]} RACK</span>
                  <span
                    className={`text-[9px] font-mono px-1 py-0.2 border ${
                      isActive
                        ? "bg-white/20 border-white text-white"
                        : "bg-[#5FD4FD]/15 border-[#5FD4FD] text-[#0082FC]"
                    }`}
                  >
                    {variant.catNumber}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Showcase Split Panel */}
        <div className="bg-white text-[#0082FC] border-4 border-white p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: Anti-Vortex Whirlpool vs Shedding Flow Simulator */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Header Ribbon */}
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2 py-0.5 border border-[#0082FC] flex items-center gap-1.5">
                  <Waves className="w-3 h-3" />
                  <span>
                    Whirlpool Cavitation vs Pyramidal Shedding Simulator
                  </span>
                </span>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => setViewMode("cad")}
                    className={`px-2 py-0.5 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      viewMode === "cad"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/10"
                    }`}
                  >
                    CAD Simulator
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode("photo")}
                    className={`px-2 py-0.5 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      viewMode === "photo"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/10"
                    }`}
                  >
                    Foundry Image
                  </button>
                </div>
              </div>

              {/* Simulation Canvas Box */}
              <div className="relative w-full h-80 bg-slate-900 border-2 border-[#0082FC] overflow-hidden flex items-center justify-center">
                {viewMode === "photo" ? (
                  <div className="relative w-full h-full flex items-center justify-center p-4 bg-slate-800">
                    <Image
                      src={activeVariant.photoUrl}
                      alt={activeVariant.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <span className="absolute bottom-2 left-2 bg-[#0082FC] text-white px-2 py-0.5 text-[10px] font-mono font-bold">
                      Pattern: {activeVariant.catNumber}
                    </span>
                  </div>
                ) : (
                  /* Animated SVG Riser Flow */
                  <div className="relative w-full h-full flex items-center justify-center bg-slate-900 p-2">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 320 220"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <title>Detention Basin Anti-Vortex Simulator</title>

                      {/* Detention Pond Water Reservoir Background */}
                      <rect
                        x="10"
                        y={
                          floodStage === "pond"
                            ? "120"
                            : floodStage === "peak"
                              ? "80"
                              : "40"
                        }
                        width="300"
                        height={
                          floodStage === "pond"
                            ? "90"
                            : floodStage === "peak"
                              ? "130"
                              : "170"
                        }
                        fill="#0284c7"
                        fillOpacity="0.35"
                        className="transition-all duration-700 ease-out"
                      />

                      {/* Precast Concrete Circular Riser Shaft */}
                      <rect
                        x="110"
                        y="120"
                        width="100"
                        height="90"
                        fill="#334155"
                        stroke="#64748b"
                        strokeWidth="3"
                      />
                      <ellipse
                        cx="160"
                        cy="120"
                        rx="50"
                        ry="18"
                        fill="#0f172a"
                        stroke="#64748b"
                        strokeWidth="2.5"
                      />

                      {/* CASE A: WITHOUT RACK -> DANGEROUS WHIRLPOOL VORTEX */}
                      {!hasAntiVortexRack ? (
                        <g className="animate-spin origin-[160px_100px] duration-1000">
                          {/* Swirling Vortex Funnel */}
                          <path
                            d="M 110 50 Q 160 120 160 150"
                            stroke="#f43f5e"
                            strokeWidth="3.5"
                            strokeDasharray="4 2"
                          />
                          <path
                            d="M 210 50 Q 160 120 160 150"
                            stroke="#f43f5e"
                            strokeWidth="3.5"
                            strokeDasharray="4 2"
                          />
                          <ellipse
                            cx="160"
                            cy="70"
                            rx="35"
                            ry="12"
                            stroke="#f43f5e"
                            strokeWidth="2.5"
                          />
                          <ellipse
                            cx="160"
                            cy="95"
                            rx="20"
                            ry="8"
                            stroke="#f43f5e"
                            strokeWidth="2"
                          />
                          <circle cx="160" cy="118" r="6" fill="#f43f5e" />

                          {/* Debris sucked down into pipe */}
                          <rect
                            x="145"
                            y="80"
                            width="22"
                            height="6"
                            fill="#eab308"
                            transform="rotate(25 155 83)"
                          />
                          <rect
                            x="155"
                            y="105"
                            width="16"
                            height="5"
                            fill="#eab308"
                            transform="rotate(-35 163 107)"
                          />
                        </g>
                      ) : (
                        /* CASE B: WITH PYRAMIDAL ANTI-VORTEX TRASH RACK */
                        <g>
                          {/* Pyramidal 4-Sided Structure */}
                          <path
                            d="M 110 120 L 160 40 L 210 120 Z"
                            fill="#0284c7"
                            fillOpacity="0.2"
                            stroke="#38bdf8"
                            strokeWidth="3.5"
                          />

                          {/* Sloped Debris-Shedding Bars */}
                          <line
                            x1="160"
                            y1="40"
                            x2="160"
                            y2="120"
                            stroke="#38bdf8"
                            strokeWidth="3"
                          />
                          <line
                            x1="125"
                            y1="120"
                            x2="160"
                            y2="40"
                            stroke="#38bdf8"
                            strokeWidth="2"
                          />
                          <line
                            x1="142"
                            y1="120"
                            x2="160"
                            y2="40"
                            stroke="#38bdf8"
                            strokeWidth="2"
                          />
                          <line
                            x1="178"
                            y1="120"
                            x2="160"
                            y2="40"
                            stroke="#38bdf8"
                            strokeWidth="2"
                          />
                          <line
                            x1="195"
                            y1="120"
                            x2="160"
                            y2="40"
                            stroke="#38bdf8"
                            strokeWidth="2"
                          />

                          {/* Anti-Vortex Top Apex Cap & Vane */}
                          <polygon
                            points="160,25 168,40 152,40"
                            fill="#38bdf8"
                          />

                          {/* Floating Logs Shedding Safely to the Sides */}
                          <rect
                            x="60"
                            y={
                              floodStage === "pond"
                                ? "125"
                                : floodStage === "peak"
                                  ? "85"
                                  : "45"
                            }
                            width="35"
                            height="7"
                            fill="#d97706"
                            className="transition-all duration-700"
                          />
                          <text
                            x="50"
                            y="70"
                            fontSize="7"
                            fill="#fbbf24"
                            fontWeight="bold"
                          >
                            DEBRIS SHED OUTWARD
                          </text>

                          <rect
                            x="225"
                            y={
                              floodStage === "pond"
                                ? "128"
                                : floodStage === "peak"
                                  ? "88"
                                  : "48"
                            }
                            width="30"
                            height="6"
                            fill="#d97706"
                            className="transition-all duration-700"
                          />

                          {/* Laminar High-Capacity Water Inflow Arrows */}
                          <path
                            d="M 90 100 L 130 115"
                            stroke="#38bdf8"
                            strokeWidth="2.5"
                            strokeDasharray="3 2"
                            className="animate-pulse"
                          />
                          <polygon
                            points="135,116 125,112 127,120"
                            fill="#38bdf8"
                          />

                          <path
                            d="M 230 100 L 190 115"
                            stroke="#38bdf8"
                            strokeWidth="2.5"
                            strokeDasharray="3 2"
                            className="animate-pulse"
                          />
                          <polygon
                            points="185,116 193,120 195,112"
                            fill="#38bdf8"
                          />
                        </g>
                      )}

                      {/* Hydraulic Status Label */}
                      <text
                        x="160"
                        y="205"
                        textAnchor="middle"
                        fontSize="9"
                        fill={hasAntiVortexRack ? "#38bdf8" : "#f43f5e"}
                        fontWeight="black"
                      >
                        {hasAntiVortexRack
                          ? `OPTIMAL LAMINAR DRAWDOWN: ${dischargeGpm} (NO CAVITATION)`
                          : "SEVERE WHIRLPOOL CAVITATION & ORIFICE CLOG DETECTED!"}
                      </text>
                    </svg>

                    {/* Simulation Status Badge */}
                    <div className="absolute top-2 left-2 bg-slate-900/90 text-white border border-[#5FD4FD] px-2 py-1 text-[10px] font-mono">
                      <span>Hydraulic Mode: </span>
                      <span
                        className={
                          hasAntiVortexRack
                            ? "text-[#38bdf8] font-bold"
                            : "text-red-400 font-bold"
                        }
                      >
                        {hasAntiVortexRack
                          ? "Pyramidal Anti-Vortex"
                          : "Unprotected (High Risk)"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Controls */}
              <div className="w-full bg-[#5FD4FD]/15 border-2 border-[#5FD4FD] p-2.5 mt-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black uppercase text-[#0082FC]">
                    Basin Inflow:
                  </span>
                  <button
                    type="button"
                    onClick={() => setFloodStage("pond")}
                    className={`px-2 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      floodStage === "pond"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    Low Pool
                  </button>
                  <button
                    type="button"
                    onClick={() => setFloodStage("peak")}
                    className={`px-2 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      floodStage === "peak"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    Peak Design
                  </button>
                  <button
                    type="button"
                    onClick={() => setFloodStage("surge")}
                    className={`px-2 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      floodStage === "surge"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    100-Yr Surge
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setHasAntiVortexRack((prev) => !prev)}
                  className={`px-3 py-1 text-[10px] font-black uppercase border transition-all flex items-center gap-1.5 cursor-pointer ${
                    hasAntiVortexRack
                      ? "bg-white text-[#0082FC] border-[#0082FC] hover:bg-[#5FD4FD]/20"
                      : "bg-red-600 text-white border-red-600 animate-pulse"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>
                    {hasAntiVortexRack
                      ? "Simulate Whirlpool Failure"
                      : "Engage Anti-Vortex Rack"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right 6 Cols: Technical Specs & Commercial Action Bar */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-[#0082FC] text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    {activeVariant.tag}
                  </span>
                  <span className="bg-[#5FD4FD]/20 border border-[#0082FC] text-[#0082FC] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    {activeVariant.catNumber}
                  </span>
                  <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase">
                    EPA BMP / USACE TR-55
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0082FC] leading-snug mb-2">
                  {activeVariant.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#0082FC]/90 font-medium leading-relaxed mb-4">
                  {activeVariant.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs border-y-2 border-[#0082FC]/20 py-3 mb-4">
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Riser / Weir Dimension:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.pipeFit}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Free Hydraulic Open Area:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.dimensions.flowArea}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Structural Metallurgy:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.material}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Hot-Dip Galvanizing:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.coating}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Debris Apex / Cleanout:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.cleanoutType}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Stormwater Design Standard:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.standards}
                    </span>
                  </div>
                </div>

                {/* Dimensions Metric Ribbon */}
                <div className="bg-[#5FD4FD]/10 border border-[#5FD4FD] p-2.5 mb-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-[#0082FC]">
                  <span>Height: {activeVariant.dimensions.height}</span>
                  <span>Width: {activeVariant.dimensions.width}</span>
                  <span>Depth: {activeVariant.dimensions.depth}</span>
                  <span className="text-[#0082FC]">
                    Weight: {activeVariant.dimensions.weightLbs} lbs
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    added
                      ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                      : "bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-[#0082FC]"
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Added to RFQ Quote</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                      <span>Add to Project RFQ</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSubmittal}
                  className="py-3 px-4 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white border-2 border-[#0082FC] text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Submittal PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySpecs}
                  title="Copy engineering specifications"
                  className="py-3 px-3 bg-[#5FD4FD]/20 hover:bg-[#0082FC] text-[#0082FC] hover:text-white border-2 border-[#5FD4FD] text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3] text-[#0082FC]" />
                      <span className="text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 shrink-0" />
                      <span className="text-[11px]">Copy Specs</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
