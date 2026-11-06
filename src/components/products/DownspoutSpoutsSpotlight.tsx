"use client";

import {
  Check,
  Copy,
  Download,
  Filter,
  Plus,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface DownspoutSpoutsSpotlightProps {
  onAddToRfq?: (product: ProductItem) => void;
  onPreviewSubmittal?: (product: ProductItem) => void;
}

const SPOUT_VARIANTS = [
  {
    id: "ds-off-46",
    catNumber: "Cat. DS-OFF-46",
    name: '4"x6" Offset Cast Iron Downspout Boot',
    tag: '4"x6" OFFSET WALL-HUGGING',
    sizeLabel: '4"x6" Rectangular Downspout',
    pipeFit: '4"x6" Leader to 6" Round Hub / PVC Storm Sewer',
    dimensions: {
      height: '36.00"',
      width: '8.50"',
      depth: '7.25" (2.5" offset)',
      weightLbs: 55,
      flowArea: "24.0 sq in",
    },
    material: 'ASTM A48 Class 35B Heavy Cast Iron (minimum 3/8" wall)',
    coating: "Shop-Applied Anti-Corrosive Rust-Inhibitive Red Oxide Primer",
    cleanoutType: "Flush Brass Counter-Sunk Cleanout Plug with Neoprene Gasket",
    trafficRating: "Commercial Grade Pedestrian & Vehicular Impact Proof",
    standards: "ASTM A48 • ASME A112.6.4 • MasterSpec Section 077100",
    description:
      'Offset cast iron downspout boot designed to receive architectural 4"x6" sheet metal roof downspouts. The built-in 2.5" rear offset aligns flush with exterior brick foundations and discharges smoothly into underground storm pipe.',
    photoUrl: "/images/products/Cleanout-Monument-Box.jpg",
  },
  {
    id: "ds-str-44",
    catNumber: "Cat. DS-STR-44",
    name: '4"x4" Straight Cast Iron Downspout Boot',
    tag: '4"x4" STRAIGHT IMPACT BOOT',
    sizeLabel: '4"x4" Conductor Leader',
    pipeFit: '4"x4" Sheet Metal to 4" Round Cast Iron Hub',
    dimensions: {
      height: '30.00"',
      width: '7.00"',
      depth: '6.50"',
      weightLbs: 42,
      flowArea: "16.0 sq in",
    },
    material: "ASTM A48 Heavy-Duty High-Tensile Cast Iron",
    coating: "Standard Shop Primer or Optional Black Powder Coat",
    cleanoutType: "Heavy Front-Access Cleanout Door with Stainless Screws",
    trafficRating: "High-Traffic School & Loading Dock Impact Rated",
    standards: "ASTM A48 Class 35B • AIS Compliant",
    description:
      "Rugged straight downspout transition boot providing indestructible protection against schoolyard lawnmowers, delivery hand-trucks, and vehicle bumpers. Built with integral wall mounting tabs for secure anchoring.",
    photoUrl: "/images/our-images/cleanout.png",
  },
  {
    id: "sp-brg-08",
    catNumber: "Cat. SP-BRG-08",
    name: '8" Highway Bridge Deck Scupper Spout',
    tag: '8" BRIDGE DECK NOZZLE',
    sizeLabel: '8" Bridge Drain Spout',
    pipeFit: '8" Cast Iron or Steel Bridge Downspouts',
    dimensions: {
      height: '16.00"',
      width: '12.00"',
      depth: '14.50" (45° Nozzle)',
      weightLbs: 78,
      flowArea: "50.2 sq in",
    },
    material: "ASTM A536 Ductile Iron or ASTM A48 Class 35B Gray Iron",
    coating: "Hot-Dip Galvanized or Asphaltic Coating per State DOT Spec",
    cleanoutType: "Full Diameter Downward Cleanout Throat",
    trafficRating: "AASHTO HS-25 Highway Bridge Proof",
    standards: "AASHTO Bridge Specifications • State DOT Standard Drawing",
    description:
      "Heavy-duty highway bridge drainage spout engineered to direct high-velocity deck runoff away from bridge piers and substructure concrete, preventing salt and de-icing chemical erosion.",
    photoUrl: "/images/products/Cleanout-Monument-Box.jpg",
  },
  {
    id: "sp-par-12",
    catNumber: "Cat. SP-PAR-12",
    name: '12" Parapet Wall Cast Iron Overflow Scupper',
    tag: '12" PARAPET SCUPPER',
    sizeLabel: '12" Parapet Wall Opening',
    pipeFit: '12" Wide Parapet Wall Thru-Sleeve',
    dimensions: {
      height: '8.00"',
      width: '16.00" Flange',
      depth: '18.00" Wall Sleeve',
      weightLbs: 64,
      flowArea: "72.0 sq in",
    },
    material: "ASTM A48 Class 35B Cast Iron",
    coating: "Corrosion-Resistant Bituminous Coating or Hot-Dip Galvanized",
    cleanoutType: "Open-Throat Visual Overflow Window",
    trafficRating: "Roof Drainage & Emergency Secondary Overflow",
    standards: "International Plumbing Code (IPC) • ASME A112.6.4",
    description:
      "Heavy cast iron parapet wall scupper with an extended anti-drip spout. Installed through exterior roof parapet walls to safely discharge emergency stormwater overflow away from the building envelope.",
    photoUrl: "/images/our-images/cleanout.png",
  },
];

export const DownspoutSpoutsSpotlight: React.FC<
  DownspoutSpoutsSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [activeVariantId, setActiveVariantId] = useState<string>("ds-off-46");
  const [rainFlowing, setRainFlowing] = useState(true);
  const [impactTested, setImpactTested] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"cad" | "photo">("cad");
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeVariant =
    SPOUT_VARIANTS.find((v) => v.id === activeVariantId) || SPOUT_VARIANTS[0];

  const handleImpactTest = () => {
    setImpactTested(true);
    setTimeout(() => setImpactTested(false), 1800);
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);

    if (onAddToRfq) {
      onAddToRfq({
        id: activeVariant.id,
        name: `${activeVariant.name} (${activeVariant.catNumber})`,
        category: "municipal-castings",
        categoryLabel: "Downspout Spouts",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_DOWNSPOUT_BOOTS.DWG",
        submittalFile: "SUBMITTAL_DOWNSPOUT_SPOUTS.PDF",
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
          `Standard: ${activeVariant.standards}`,
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
        categoryLabel: "Downspout Spouts",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_DOWNSPOUT_BOOTS.DWG",
        submittalFile: "SUBMITTAL_DOWNSPOUT_SPOUTS.PDF",
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
          `Standard: ${activeVariant.standards}`,
        ],
        imageUrl: activeVariant.photoUrl,
        aisCompliant: true,
        buyAmericaReady: true,
      });
    }
  };

  const handleCopySpecs = () => {
    const text = `AQUA INDUSTRIES DOWNSPOUT BOOT SPECIFICATION
Model: ${activeVariant.name} (${activeVariant.catNumber})
Downspout Fit: ${activeVariant.pipeFit}
Flow Capacity: ${activeVariant.dimensions.flowArea}
Weight: ${activeVariant.dimensions.weightLbs} lbs (H: ${activeVariant.dimensions.height}, W: ${activeVariant.dimensions.width}, D: ${activeVariant.dimensions.depth})
Metallurgy: ${activeVariant.material}
Cleanout: ${activeVariant.cleanoutType}
Impact Class: ${activeVariant.trafficRating}
Compliance: ${activeVariant.standards}
100% Domestic AIS / Buy America Certified`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="spouts-boots"
      aria-label="Downspout Boots and Spouts Spotlight"
      className="py-16 sm:py-20 bg-white text-[#0082FC] border-b-4 border-[#0082FC] relative overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0082fc0a_1px,transparent_1px),linear-gradient(to_bottom,#0082fc0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5FD4FD]/20 text-[#0082FC] text-xs font-black uppercase tracking-widest border border-[#0082FC] mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
            <span>
              SECTION 4: ARCHITECTURAL CAST IRON DOWNSPOUT BOOTS &amp; SPOUTS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0082FC] mb-2">
            Sprouts
          </h2>

          <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium leading-relaxed">
            Heavy-duty Class 35B gray iron conductor boots, parapet wall
            overflow scuppers, and bridge deck drainage spouts. Protects
            exterior building facades from mower strikes, vehicular collisions,
            and wall splash erosion.
          </p>
        </div>

        {/* Subvariant Switcher Bar */}
        <div className="bg-[#5FD4FD]/10 border-2 border-[#5FD4FD] p-3 sm:p-4 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0082FC] flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Downspout Boot or Scupper Spout:</span>
            </span>
            <span className="text-[10px] font-bold text-[#0082FC]/70 uppercase">
              {SPOUT_VARIANTS.length} Cast Patterns Available
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {SPOUT_VARIANTS.map((variant) => {
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
                  <span>{variant.tag.split(" ")[0]}</span>
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
        <div className="bg-white text-[#0082FC] border-4 border-[#0082FC] p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: Wall Facade & Vehicular Impact Simulator */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Header Ribbon */}
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#0082FC] text-white px-2 py-0.5 border border-[#0082FC] flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>
                    Facade Impact &amp; Storm Runoff Discharge Simulator
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
                      Foundry Pattern: {activeVariant.catNumber}
                    </span>
                  </div>
                ) : (
                  /* Animated SVG Architectural Section */
                  <div className="relative w-full h-full flex items-center justify-center bg-slate-900 p-2">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 320 220"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <title>Downspout Boot Impact and Flow Simulator</title>

                      {/* Exterior Masonry Brick Wall */}
                      <rect
                        x="20"
                        y="10"
                        width="45"
                        height="200"
                        fill="#1e293b"
                        stroke="#475569"
                        strokeWidth="2"
                      />
                      <line
                        x1="20"
                        y1="50"
                        x2="65"
                        y2="50"
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="20"
                        y1="90"
                        x2="65"
                        y2="90"
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="20"
                        y1="130"
                        x2="65"
                        y2="130"
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="20"
                        y1="170"
                        x2="65"
                        y2="170"
                        stroke="#334155"
                        strokeWidth="1.5"
                      />
                      <text
                        x="32"
                        y="110"
                        fontSize="7"
                        fill="#64748b"
                        transform="rotate(-90 32 110)"
                      >
                        BRICK FACADE
                      </text>

                      {/* Concrete Grade Sidewalk Line */}
                      <rect
                        x="65"
                        y="190"
                        width="240"
                        height="20"
                        fill="#334155"
                        stroke="#64748b"
                      />
                      <text
                        x="180"
                        y="202"
                        fontSize="7"
                        fill="#94a3b8"
                        fontWeight="bold"
                      >
                        GRADE SIDEWALK TIE-IN
                      </text>

                      {/* Sheet Metal Downspout Entering Top */}
                      <rect
                        x="80"
                        y="10"
                        width="30"
                        height="30"
                        fill="#cbd5e1"
                        stroke="#0082fc"
                        strokeWidth="2"
                      />
                      <text
                        x="83"
                        y="28"
                        fontSize="7"
                        fill="#0082fc"
                        fontWeight="bold"
                      >
                        ROOF
                      </text>

                      {/* Cast Iron Downspout Boot Shell */}
                      <path
                        d="M 75 35 L 115 35 L 115 110 Q 115 180 180 180 L 220 180 L 220 195 L 130 195 Q 75 195 75 130 Z"
                        fill="#0f172a"
                        stroke={impactTested ? "#f59e0b" : "#5fd4fd"}
                        strokeWidth={impactTested ? "4.5" : "3.5"}
                        className="transition-all duration-300"
                      />

                      {/* Heavy Wall Anchor Brackets */}
                      <rect
                        x="65"
                        y="55"
                        width="12"
                        height="15"
                        fill="#38bdf8"
                      />
                      <rect
                        x="65"
                        y="145"
                        width="12"
                        height="15"
                        fill="#38bdf8"
                      />
                      <circle cx="71" cy="62" r="2.5" fill="#0f172a" />
                      <circle cx="71" cy="152" r="2.5" fill="#0f172a" />

                      {/* Front Cleanout Access Door */}
                      <circle
                        cx="95"
                        cy="105"
                        r="14"
                        fill={doorOpen ? "#ef4444" : "#e2e8f0"}
                        stroke="#0082fc"
                        strokeWidth="2.5"
                        className="cursor-pointer transition-colors"
                      />
                      <circle cx="95" cy="105" r="3" fill="#0082fc" />
                      <text
                        x="95"
                        y="125"
                        textAnchor="middle"
                        fontSize="6"
                        fill="#38bdf8"
                        fontWeight="bold"
                      >
                        {doorOpen ? "RODDING ACCESS" : "CLEANOUT"}
                      </text>

                      {/* Rainstorm High-Velocity Water Stream */}
                      {rainFlowing && (
                        <g>
                          <path
                            d="M 95 20 L 95 110 Q 95 188 235 188"
                            stroke="#38bdf8"
                            strokeWidth="3.5"
                            strokeDasharray="4 3"
                            className="animate-pulse"
                          />
                          <polygon
                            points="240,188 230,184 230,192"
                            fill="#38bdf8"
                          />
                        </g>
                      )}

                      {/* Vehicular Impact Bumper Animation when Tested */}
                      {impactTested ? (
                        <g className="animate-bounce">
                          {/* Car Bumper / Lawnmower Blade Icon */}
                          <rect
                            x="220"
                            y="140"
                            width="55"
                            height="35"
                            fill="#ef4444"
                            stroke="#ffffff"
                            strokeWidth="2"
                          />
                          <text
                            x="228"
                            y="162"
                            fontSize="8"
                            fill="#ffffff"
                            fontWeight="black"
                          >
                            IMPACT!
                          </text>
                          {/* Deflection Shockwaves */}
                          <path
                            d="M 215 145 Q 200 155 215 165"
                            stroke="#f59e0b"
                            strokeWidth="3"
                          />
                          <path
                            d="M 205 140 Q 190 155 205 170"
                            stroke="#f59e0b"
                            strokeWidth="2.5"
                          />
                        </g>
                      ) : null}

                      {/* Status Text Indicator */}
                      <text
                        x="160"
                        y="212"
                        textAnchor="middle"
                        fontSize="9"
                        fill={impactTested ? "#f59e0b" : "#38bdf8"}
                        fontWeight="black"
                      >
                        {impactTested
                          ? "IMPACT ABSORPTION VERIFIED: ASTM A48 CLASS 35B ZERO DEFLECTION"
                          : rainFlowing
                            ? "ACTIVE ROOF RUNOFF CONVEYANCE: HIGH VELOCITY DISCHARGE"
                            : "STANDBY SYSTEM INSPECTION READY"}
                      </text>
                    </svg>

                    {/* Simulation Status Badge */}
                    <div className="absolute top-2 left-2 bg-slate-900/90 text-white border border-[#5FD4FD] px-2 py-1 text-[10px] font-mono">
                      <span>Armor Status: </span>
                      <span className="text-[#38bdf8] font-bold">
                        {impactTested
                          ? "Deflecting 4,500 lb Force"
                          : "ASTM A48 Impact Proof"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Interactive Controls Ribbon */}
              <div className="w-full bg-[#5FD4FD]/15 border-2 border-[#5FD4FD] p-2.5 mt-3 flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleImpactTest}
                  className={`px-3 py-1.5 text-[10px] font-black uppercase border transition-all flex items-center gap-1.5 cursor-pointer ${
                    impactTested
                      ? "bg-red-600 text-white border-red-600 shadow-md animate-pulse"
                      : "bg-[#0082FC] text-white border-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC]"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Test Mower / Vehicular Impact</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setRainFlowing((prev) => !prev)}
                    className={`px-2.5 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      rainFlowing
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    {rainFlowing ? "Pause Rain Flow" : "Start Rain Flow"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setDoorOpen((prev) => !prev)}
                    className={`px-2.5 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                      doorOpen
                        ? "bg-amber-500 text-white border-amber-500"
                        : "bg-white text-[#0082FC] border-[#5FD4FD]"
                    }`}
                  >
                    {doorOpen ? "Close Door" : "Open Cleanout"}
                  </button>
                </div>
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
                    MASTERSPEC 077100
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
                      Downspout Leader Fit:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.pipeFit}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Conductor Hydraulic Area:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.dimensions.flowArea}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Shell Metallurgy:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.material}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Cleanout Access Door:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.cleanoutType}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Factory Coating Finish:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.coating}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Architectural Standard:
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
