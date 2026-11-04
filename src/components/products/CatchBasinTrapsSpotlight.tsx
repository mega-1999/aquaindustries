"use client";

import {
  Check,
  Copy,
  Download,
  Filter,
  Plus,
  ShieldCheck,
  Waves,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface CatchBasinTrapsSpotlightProps {
  onAddToRfq?: (product: ProductItem) => void;
  onPreviewSubmittal?: (product: ProductItem) => void;
}

const TRAP_VARIANTS = [
  {
    id: "cbt-08",
    catNumber: "Cat. CBT-08",
    name: '8" Catch Basin Siphon Trap with Cleanout Plug',
    tag: '8" PIPE OUTLET',
    sizeLabel: '8" Nominal Outlet',
    pipeFit: '6" to 8" RCP / CMP / PVC Outlets',
    dimensions: {
      height: '14.50"',
      width: '12.00"',
      depth: '8.25"',
      weightLbs: 65,
      flowArea: "48.2 sq in",
    },
    material: "ASTM A48 Class 35B Heavy Cast Iron",
    coating: "Asphaltic Dip per AWWA C104 / High-Build Bituminous Primer",
    cleanoutType: '3" NPT Brass Cleanout Screw Plug with Raised Square Nut',
    trafficRating: "AASHTO H-20 Heavy Highway Traffic Proof",
    standards: "ASTM A48 Class 35B • AASHTO M306 • AIS Certified",
    description:
      'Compact cast iron catch basin gas and siphon hood designed for 8" storm sewer outlet pipes. Features an integrated downward water-dip siphon skirt and an easy-access cleanout plug for maintenance rodding.',
    photoUrl: "/images/products/Drainage-Grates-Curb-Inlets-Feature.jpg",
    blueprintSvg: "cbt-08",
  },
  {
    id: "cbt-12",
    catNumber: "Cat. CBT-12",
    name: '12" Standard Municipal Catch Basin Trap',
    tag: '12" MUNICIPAL STANDARD',
    sizeLabel: '12" Nominal Outlet',
    pipeFit: '10" to 12" Storm Sewer Pipes',
    dimensions: {
      height: '19.75"',
      width: '16.50"',
      depth: '11.50"',
      weightLbs: 115,
      flowArea: "110.8 sq in",
    },
    material: "ASTM A48 Class 35B High-Tensile Iron",
    coating: "Heavy Asphalt Dip or Optional Hot-Dip Galvanized",
    cleanoutType:
      '4" Quick-Turn Bronze Siphon Cap with Stainless Retaining Chain',
    trafficRating: "AASHTO HS-20 & HS-25 Highway Proof",
    standards: "State DOT Approved • ASTM A48 • Buy America Ready",
    description:
      'High-capacity municipal stormwater gas hood engineered for 12" storm laterals. Keeps floatable street plastics, bottles, and floating oils trapped in the sump basin while discharging pristine subsurface storm flows.',
    photoUrl: "/images/our-images/curb_inlet_riser_heavy_iron.png",
    blueprintSvg: "cbt-12",
  },
  {
    id: "cbt-18",
    catNumber: "Cat. CBT-18",
    name: '18" Highway Inflow Catch Basin Hood',
    tag: '18" HIGH-FLOW INFLOW',
    sizeLabel: '18" Nominal Outlet',
    pipeFit: '15" to 18" RCP / Corrugated HDPE',
    dimensions: {
      height: '26.00"',
      width: '23.00"',
      depth: '15.50"',
      weightLbs: 185,
      flowArea: "248.5 sq in",
    },
    material: "ASTM A536 Grade 65-45-12 Ductile Iron",
    coating: "High-Build Bituminous Marine Grade Enamel",
    cleanoutType: '6" Bolted Cast Iron Cleanout Port with SBR Neoprene Seal',
    trafficRating: "AASHTO HS-25 Airport & Highway Heavy Duty",
    standards: "AASHTO M306 • ASTM A536 • 100% Domestic Melt",
    description:
      "Heavy ductile iron anti-debris trap built for highway culvert basins and high-volume interchange storm structures. Dual mounting anchor ears bolt securely to round or square precast catch basin walls.",
    photoUrl: "/images/products/Drainage-Grates-Curb-Inlets-Feature.jpg",
    blueprintSvg: "cbt-18",
  },
  {
    id: "cbt-24",
    catNumber: "Cat. CBT-24",
    name: '24" Heavy Municipal Siphon Trap',
    tag: '24" DEEP INVERT STORM HOOD',
    sizeLabel: '24" Nominal Outlet',
    pipeFit: '20" to 24" Main Line Culverts',
    dimensions: {
      height: '34.00"',
      width: '30.50"',
      depth: '20.00"',
      weightLbs: 290,
      flowArea: "441.2 sq in",
    },
    material: "ASTM A536 Ductile Iron / ASTM A48 Gray Iron",
    coating: "Double-Dip Asphaltic Protective Enamel",
    cleanoutType: '8" Manhole Rodding Port with Stainless T-Handle Latch',
    trafficRating: "FAA High Airport Taxiway / AASHTO HS-25",
    standards: "AASHTO M306 • ASTM A536 • USACE Heavy Spec",
    description:
      'Extra-large siphon trap hood engineered for 24" storm trunk lines. Equipped with internal vortex dampening baffles to minimize hydraulic turbulence while providing maximum debris holding capacity.',
    photoUrl: "/images/our-images/curb_inlet_riser_heavy_iron.png",
    blueprintSvg: "cbt-24",
  },
];

export const CatchBasinTrapsSpotlight: React.FC<
  CatchBasinTrapsSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [activeVariantId, setActiveVariantId] = useState<string>("cbt-12");
  const [waterStage, setWaterStage] = useState<"low" | "normal" | "surge">(
    "normal",
  );
  const [cleanoutOpen, setCleanoutOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"cad" | "photo">("cad");
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeVariant =
    TRAP_VARIANTS.find((v) => v.id === activeVariantId) || TRAP_VARIANTS[1];

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);

    if (onAddToRfq) {
      onAddToRfq({
        id: activeVariant.id,
        name: `${activeVariant.name} (${activeVariant.catNumber})`,
        category: "municipal-castings",
        categoryLabel: "Catch Basin Traps",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_CB_TRAPS.DWG",
        submittalFile: "SUBMITTAL_CATCH_BASIN_TRAPS.PDF",
        specs: {
          tensileStrength: activeVariant.material,
          yieldStrength: activeVariant.trafficRating,
          elongation: activeVariant.dimensions.flowArea,
          wallThicknessClass: activeVariant.pipeFit,
          standardBoltCount: activeVariant.cleanoutType,
          torqueSpec: activeVariant.standards,
        },
        keyFeatures: [
          `Flow Area: ${activeVariant.dimensions.flowArea}`,
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Fit: ${activeVariant.pipeFit}`,
          `Cleanout: ${activeVariant.cleanoutType}`,
          `Traffic: ${activeVariant.trafficRating}`,
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
        categoryLabel: "Catch Basin Traps",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_CB_TRAPS.DWG",
        submittalFile: "SUBMITTAL_CATCH_BASIN_TRAPS.PDF",
        specs: {
          tensileStrength: activeVariant.material,
          yieldStrength: activeVariant.trafficRating,
          elongation: activeVariant.dimensions.flowArea,
          wallThicknessClass: activeVariant.pipeFit,
          standardBoltCount: activeVariant.cleanoutType,
          torqueSpec: activeVariant.standards,
        },
        keyFeatures: [
          `Flow Area: ${activeVariant.dimensions.flowArea}`,
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Fit: ${activeVariant.pipeFit}`,
          `Cleanout: ${activeVariant.cleanoutType}`,
          `Traffic: ${activeVariant.trafficRating}`,
        ],
        imageUrl: activeVariant.photoUrl,
        aisCompliant: true,
        buyAmericaReady: true,
      });
    }
  };

  const handleCopySpecs = () => {
    const text = `AQUA INDUSTRIES CATCH BASIN TRAP SPECIFICATION
Model: ${activeVariant.name} (${activeVariant.catNumber})
Pipe Size: ${activeVariant.pipeFit}
Flow Area: ${activeVariant.dimensions.flowArea}
Weight: ${activeVariant.dimensions.weightLbs} lbs (H: ${activeVariant.dimensions.height}, W: ${activeVariant.dimensions.width}, D: ${activeVariant.dimensions.depth})
Material: ${activeVariant.material}
Cleanout: ${activeVariant.cleanoutType}
Rating: ${activeVariant.trafficRating}
Compliance: ${activeVariant.standards}
100% Domestic AIS / Buy America Certified`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="catch-basin-traps"
      aria-label="Catch Basin Traps Spotlight"
      className="py-16 sm:py-20 bg-[#0082FC] text-white border-b-4 border-white relative overflow-hidden"
    >
      {/* Background CAD Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-black uppercase tracking-widest border border-white mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
            <span>SECTION 1: MUNICIPAL STORMWATER GAS &amp; SIPHON TRAPS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
            Cast Iron Catch Basin Traps
          </h2>

          <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
            Eliminates floatable street debris, oils, and foul sewer gas from
            escaping into municipal storm mains. Deep-invert downward siphon
            hoods with heavy brass maintenance cleanout plugs.
          </p>
        </div>

        {/* Subvariant Switcher Bar (Select size to view ONLY that specific spec) */}
        <div className="bg-white text-[#0082FC] border-2 border-white p-3 sm:p-4 mb-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Catch Basin Outlet Size:</span>
            </span>
            <span className="text-[10px] font-bold text-[#0082FC]/70 uppercase">
              {TRAP_VARIANTS.length} Calibrated Sizes Available
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TRAP_VARIANTS.map((variant) => {
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
                  <span>{variant.tag.split(" ")[0]} OUTLET</span>
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
            {/* Left 6 Cols: Interactive Siphon Flow & Debris Trap Simulator */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Simulator Header & View Mode Switcher */}
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2 py-0.5 border border-[#0082FC] flex items-center gap-1.5">
                  <Waves className="w-3 h-3" />
                  <span>Interactive Water Seal &amp; Siphon Simulator</span>
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
                    CAD Blueprint
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
                    Foundry Photo
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
                      Foundry Pattern: {activeVariant.catNumber}
                    </span>
                  </div>
                ) : (
                  /* Live Animated SVG Siphon Cross-Section */
                  <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-2">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 320 220"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <title>Catch Basin Trap Siphon Simulation</title>

                      {/* Catch Basin Concrete Sump Chamber */}
                      <rect
                        x="20"
                        y="20"
                        width="30"
                        height="180"
                        fill="#334155"
                        stroke="#64748b"
                      />
                      <rect
                        x="270"
                        y="20"
                        width="30"
                        height="60"
                        fill="#334155"
                        stroke="#64748b"
                      />
                      <rect
                        x="270"
                        y="130"
                        width="30"
                        height="70"
                        fill="#334155"
                        stroke="#64748b"
                      />

                      {/* Animated Water Body inside Basin */}
                      <rect
                        x="50"
                        y={
                          waterStage === "low"
                            ? "140"
                            : waterStage === "normal"
                              ? "95"
                              : "55"
                        }
                        width="220"
                        height={
                          waterStage === "low"
                            ? "60"
                            : waterStage === "normal"
                              ? "105"
                              : "145"
                        }
                        fill="#0082fc"
                        fillOpacity="0.45"
                        className="transition-all duration-700 ease-out"
                      />

                      {/* Floatable Trash & Oil Film trapped on surface */}
                      <rect
                        x="50"
                        y={
                          waterStage === "low"
                            ? "137"
                            : waterStage === "normal"
                              ? "92"
                              : "52"
                        }
                        width="80"
                        height="6"
                        fill="#f59e0b"
                        fillOpacity="0.85"
                        className="transition-all duration-700 ease-out"
                      />
                      <circle
                        cx="70"
                        cy={
                          waterStage === "low"
                            ? "135"
                            : waterStage === "normal"
                              ? "90"
                              : "50"
                        }
                        r="3"
                        fill="#ef4444"
                      />
                      <circle
                        cx="95"
                        cy={
                          waterStage === "low"
                            ? "135"
                            : waterStage === "normal"
                              ? "90"
                              : "50"
                        }
                        r="4"
                        fill="#3b82f6"
                      />
                      <circle
                        cx="115"
                        cy={
                          waterStage === "low"
                            ? "136"
                            : waterStage === "normal"
                              ? "91"
                              : "51"
                        }
                        r="2.5"
                        fill="#10b981"
                      />
                      <text
                        x="60"
                        y={
                          waterStage === "low"
                            ? "130"
                            : waterStage === "normal"
                              ? "82"
                              : "44"
                        }
                        fontSize="7"
                        fill="#f59e0b"
                        fontWeight="bold"
                        className="transition-all duration-700"
                      >
                        FLOATING OILS &amp; TRASH TRAPPED
                      </text>

                      {/* Cast Iron Trap Hood Body */}
                      <path
                        d="M 130 50 L 270 50 L 270 130 L 220 130 Q 220 170 160 170 L 130 170 Z"
                        fill="#1e293b"
                        stroke="#5fd4fd"
                        strokeWidth="3.5"
                      />

                      {/* Cleanout Plug on Top */}
                      <rect
                        x="170"
                        y="35"
                        width="40"
                        height="15"
                        fill={cleanoutOpen ? "#ef4444" : "#eab308"}
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="cursor-pointer transition-colors"
                      />
                      <text
                        x="190"
                        y="46"
                        textAnchor="middle"
                        fontSize="7"
                        fill="#000000"
                        fontWeight="black"
                      >
                        {cleanoutOpen ? "OPEN" : "BRASS PLUG"}
                      </text>

                      {/* Sewer Cleanout Rod Animation when Open */}
                      {cleanoutOpen && (
                        <g className="animate-pulse">
                          <line
                            x1="190"
                            y1="10"
                            x2="190"
                            y2="175"
                            stroke="#f43f5e"
                            strokeWidth="2.5"
                            strokeDasharray="4 2"
                          />
                          <polygon
                            points="190,178 186,168 194,168"
                            fill="#f43f5e"
                          />
                          <text
                            x="200"
                            y="30"
                            fontSize="7"
                            fill="#f43f5e"
                            fontWeight="bold"
                          >
                            RODDING TOOL
                          </text>
                        </g>
                      )}

                      {/* Subsurface Clean Water Path Flowing Under Baffle */}
                      <path
                        d="M 100 185 Q 145 185 175 145 L 290 90"
                        stroke="#5fd4fd"
                        strokeWidth="3"
                        strokeDasharray="4 3"
                        className="animate-pulse"
                      />
                      <polygon points="295,88 285,84 288,94" fill="#5fd4fd" />

                      <text
                        x="210"
                        y="105"
                        fontSize="8"
                        fill="#5fd4fd"
                        fontWeight="bold"
                      >
                        CLEAN WATER FLOW
                      </text>

                      {/* Outlet Storm Pipe going right */}
                      <rect
                        x="270"
                        y="80"
                        width="45"
                        height="50"
                        fill="#0082fc"
                        fillOpacity="0.3"
                        stroke="#5fd4fd"
                        strokeWidth="2"
                      />
                      <text
                        x="275"
                        y="110"
                        fontSize="7"
                        fill="#ffffff"
                        fontWeight="bold"
                      >
                        STORM MAIN
                      </text>
                    </svg>

                    {/* Siphon Depth Indicator */}
                    <div className="absolute top-2 left-2 bg-slate-900/90 text-white border border-[#5FD4FD] px-2 py-1 text-[10px] font-mono">
                      <span>Siphon Seal: </span>
                      <span className="text-[#5FD4FD] font-bold">
                        {waterStage === "low"
                          ? 'Seal Engaged (5.5")'
                          : waterStage === "normal"
                            ? 'Optimal Submergence (9.2")'
                            : 'Surge Vortex Dampening (14.5")'}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Simulator Interactive Control Ribbon */}
              <div className="w-full bg-[#5FD4FD]/15 border-2 border-[#5FD4FD] p-2.5 mt-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black uppercase text-[#0082FC]">
                    Water Inflow:
                  </span>
                  <button
                    type="button"
                    onClick={() => setWaterStage("low")}
                    className={`px-2 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      waterStage === "low"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    Low Dry Run
                  </button>
                  <button
                    type="button"
                    onClick={() => setWaterStage("normal")}
                    className={`px-2 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      waterStage === "normal"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    Normal Storm
                  </button>
                  <button
                    type="button"
                    onClick={() => setWaterStage("surge")}
                    className={`px-2 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      waterStage === "surge"
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    Peak Surge
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setCleanoutOpen((prev) => !prev)}
                  className={`px-2.5 py-1 text-[10px] font-black uppercase border transition-all flex items-center gap-1 cursor-pointer ${
                    cleanoutOpen
                      ? "bg-red-600 text-white border-red-600 animate-pulse"
                      : "bg-white text-[#0082FC] border-[#0082FC] hover:bg-[#0082FC] hover:text-white"
                  }`}
                >
                  <Wrench className="w-3 h-3" />
                  <span>
                    {cleanoutOpen ? "Close Cleanout" : "Open Brass Cleanout"}
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
                    ASTM A48 CLASS 35B
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
                      Pipe Outlet Fit:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.pipeFit}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Hydraulic Flow Capacity:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.dimensions.flowArea}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Material Specification:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.material}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Maintenance Access:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.cleanoutType}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Coating Protection:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.coating}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Proof Load Testing:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.trafficRating}
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
