"use client";

import {
  Activity,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Download,
  FileCheck2,
  Gauge,
  Layers,
  PhoneCall,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface EngineeringInnovationSpotlightProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  product: ProductItem;
}

interface Hotspot {
  id: number;
  x: string;
  y: string;
  title: string;
  badge: string;
  desc: string;
}

interface InnovationProduct {
  id: string;
  name: string;
  subtitle: string;
  categoryLabel: string;
  badge: string;
  spec: string;
  imageUrl: string;
  summary: string;
  standards: string;
  metallurgy: string;
  pressure: string;
  coating: string;
  pipeCompatibility: string;
  submittalDoc: string;
  features: string[];
  hotspots: Hotspot[];
}

const INNOVATION_PRODUCTS: InnovationProduct[] = [
  {
    id: "series-3000-restraint",
    name: "Series 3000 Cam-Action MJ Restraint",
    subtitle: "Self-Actuating Radial Cam Wedge Engineering",
    categoryLabel: "Ductile Iron Pipeline Restraint",
    badge: "UL Listed & FM Approved",
    spec: "350 PSI Working • 500 PSI Proof",
    imageUrl: "/images/products/Joint-Restraints.jpg",
    summary:
      "The engineering breakthrough that eliminated concrete thrust blocks. Independent heat-treated ductile iron gripping wedges bite radially into the pipe wall proportionally as line pressure surges. Accommodates 5° joint deflection for ground settling without leaking.",
    standards: "AWWA C111 / ASTM A536 Grade 65-45-12",
    metallurgy: "High-Strength ASTM A536 Ductile Iron (AIS Compliant)",
    pressure: "350 PSI Continuous Working Pressure (2:1 Safety Margin)",
    coating: "Electrostatic Fusion-Bonded Blue Epoxy per AWWA C116",
    pipeCompatibility: "Ductile Iron (Class 50-56) & AWWA C900 / C905 PVC",
    submittalDoc: "SUBMITTAL_SERIES_3000_RESTRAINT.PDF",
    features: [
      "Dynamic cam leverage: wedges bite deeper under high-pressure water surges",
      "Calibrated breakaway shear-head nuts eliminate torque wrench guesswork",
      "Allows 5° angular joint deflection for seismic settling without stress",
      "Eliminates 48-hour concrete thrust block pour and cure delays completely",
    ],
    hotspots: [
      {
        id: 1,
        x: "28%",
        y: "32%",
        title: "Heat-Treated Cam Wedges",
        badge: "55-60 HRC Hardened Teeth",
        desc: "Precision-cast tool steel wedges with directional biting serrations. As hydraulic line pressure pushes the pipe, cam leverage forces wedges deeper into the pipe wall.",
      },
      {
        id: 2,
        x: "74%",
        y: "28%",
        title: "Breakaway Torque Shear Nuts",
        badge: "65-90 Ft-Lbs Calibrated",
        desc: "Double-hex shear nuts snap cleanly at predetermined factory torque, visually confirming proper installation without crushing thin pipe walls.",
      },
      {
        id: 3,
        x: "48%",
        y: "68%",
        title: "Grade 65-45-12 Ductile Gland",
        badge: "65,000 PSI Tensile Strength",
        desc: "High-ductility cast iron body with 12% elongation prevents catastrophic brittle cracking under heavy highway soil overburden and vehicular traffic.",
      },
      {
        id: 4,
        x: "78%",
        y: "74%",
        title: "5° Flex Deflection Pocket",
        badge: "AWWA C111 MJ Seating",
        desc: "Internal gland geometry allows up to 5° axial deflection per joint during installation and post-burial settlement while holding 350 PSI water tightness.",
      },
    ],
  },
  {
    id: "ultra-lok-pvc-restraint",
    name: "Ultra-Lok 360° Restraint for C900 PVC",
    subtitle: "Full-Circumference Serrated Bell Restraint System",
    categoryLabel: "PVC Pressure Pipe Engineering",
    badge: "ASTM F1674 & UNI-B-13",
    spec: "305 PSI (DR14) • 235 PSI (DR18)",
    imageUrl: "/images/products/ULTRA-PVC-Restraints-Spotlight.jpg",
    summary:
      "Engineered specifically for PVC pressure mains to prevent pipe notch sensitivity. Continuous 360° contoured clamping rings distribute restraining force uniformly around the entire pipe circumference, preventing localized point-load wall deformation.",
    standards: "ASTM F1674 / UNI-B-13 / AWWA C900",
    metallurgy: "ASTM A536 Grade 65-45-12 Ductile Body & Low-Alloy Tie Rods",
    pressure: "Full Pressure Rating of AWWA C900 PVC Pipe (DR14 / DR18 / DR25)",
    coating: "Corrosion-Resistant Black Bituminous or Fusion-Bonded Epoxy",
    pipeCompatibility: '4" to 24" AWWA C900 and C905 PVC Pressure Pipe',
    submittalDoc: "SUBMITTAL_ULTRA_PVC_RESTRAINT.PDF",
    features: [
      "True 360° radial engagement prevents pipe ovality and localized stress cracks",
      "Split-ring design enables fast, drop-over in-trench assembly on existing lines",
      "Includes high-strength Cor-Blue fluoropolymer coated ductile tie rods",
      "Exceeds AWWA C900 burst proof testing standards with 2:1 safety factor",
    ],
    hotspots: [
      {
        id: 1,
        x: "34%",
        y: "30%",
        title: "360° Contoured Serrated Ring",
        badge: "Zero Point-Load Stress",
        desc: "Smoothly radiused internal serrations grip the PVC pipe exterior without puncturing the extrusion boundary, protecting against long-term fatigue cracking.",
      },
      {
        id: 2,
        x: "66%",
        y: "24%",
        title: "Fluoropolymer Coated Tie Rods",
        badge: "Cor-Blue Corrosion Barrier",
        desc: "Heavy-gauge low-alloy steel connecting rods transfer thrust across the PVC push-on bell joint with extreme resistance to aggressive soils.",
      },
      {
        id: 3,
        x: "50%",
        y: "65%",
        title: "Split-Collar Drop-In Clamp",
        badge: "No Pipe Cutting Required",
        desc: "Hinged two-piece ductile iron collars bolt together securely in cramped trenches, cutting contractor labor by more than 50% compared to harness sleeves.",
      },
      {
        id: 4,
        x: "74%",
        y: "76%",
        title: "Machined Bell-Stop Flange",
        badge: "Integral Shoulder Lock",
        desc: "Seats squarely behind the PVC bell socket contour, locking the bell and spigot securely together during thermal ground expansion and contraction.",
      },
    ],
  },
  {
    id: "arc-zinc-shield",
    name: "Arc-Zinc Thermal Spray Metallized Shield",
    subtitle: "Active Sacrificial Galvanic Barrier for Aggressive Soils",
    categoryLabel: "Advanced Corrosion Technology",
    badge: "ISO 8179-1 & AWWA C151 Annex A",
    spec: "200 g/m² 99.99% Pure Molten Zinc",
    imageUrl: "/images/products/Spotlight-ARC-ZINC.jpg",
    summary:
      "The pinnacle of ductile iron corrosion protection. High-velocity electric arc guns atomize 99.99% pure molten zinc directly onto red-hot annealed iron. Creates an active galvanic anode that chemically self-heals scratches in corrosive, low-resistivity soils.",
    standards: "ISO 8179-1 / AWWA C151 Annex A / ASTM A536",
    metallurgy:
      "99.99% Pure Metallized Zinc + Grade 65-45-12 Ductile Substrate",
    pressure: "Rated for 350 PSI Working Pressure Fittings & Spools",
    coating:
      "200 g/m² Pure Zinc Metallization + 80-Micron Synthetic Resin Seal",
    pipeCompatibility:
      "All AWWA C153 & C110 Ductile Iron Fittings and Watermains",
    submittalDoc: "SUBMITTAL_ARC_ZINC_CORROSION_SHIELD.PDF",
    features: [
      "Active galvanic sacrificial barrier outlasts standard bituminous paint by decades",
      "Self-healing mechanism: zinc oxidizes to form insoluble protective carbonates",
      "High-bond adhesion exceeds 5 MPa, resisting severe transit and jobsite gouging",
      "Meets the most rigorous EPA and state DOT mandates for acidic and coastal soils",
    ],
    hotspots: [
      {
        id: 1,
        x: "30%",
        y: "35%",
        title: "Molten Zinc Thermal Deposit",
        badge: "200 g/m² Pure Zinc",
        desc: "Electric arc guns propel atomized molten zinc droplets at supersonic velocity, forming a dense, interlocking metallurgic crystalline matrix over the iron.",
      },
      {
        id: 2,
        x: "70%",
        y: "30%",
        title: "Self-Healing Sacrificial Layer",
        badge: "Galvanic Anode Action",
        desc: "If soil rocks scratch through to bare iron, surrounding zinc reacts with groundwater to precipitate zinc hydroxycarbonate, sealing the breach automatically.",
      },
      {
        id: 3,
        x: "50%",
        y: "65%",
        title: "Pore-Sealing Synthetic Topcoat",
        badge: "80µm Polymeric Shield",
        desc: "Specially formulated acrylic resin penetrates microscopic zinc pore voids, establishing an impermeable barrier against sulfides and acidic moisture.",
      },
      {
        id: 4,
        x: "24%",
        y: "75%",
        title: "Ductile Iron Interface",
        badge: ">5 MPa Adhesion",
        desc: "Direct metallurgical fusion with the ASTM A536 ductile iron substrate ensures zero peeling, flaking, or cathodic disbondment during burial.",
      },
    ],
  },
  {
    id: "mj-swivel-adapter",
    name: "Precision MJ x MJ Swivel Adapter",
    subtitle: "360° Rotational Gland System for Fire Hydrants & Valves",
    categoryLabel: "Valve & Hydrant Accessories",
    badge: "AWWA C153 & ANSI A21.53",
    spec: "350 PSI Working Pressure",
    imageUrl: "/images/products/MJ-x-MJ-Adapter-Blue.jpg",
    summary:
      "Eliminates joint binding and misaligned fire hydrant ports. A precision-machined 360-degree rotating follower gland allows contractors to plumb and level hydrant nozzles and gate valves instantly without cutting, heating, or forcing buried pipe.",
    standards: "AWWA C153 / ANSI A21.53 / ASTM A536",
    metallurgy: "ASTM A536 Grade 65-45-12 High-Tensile Ductile Iron",
    pressure: "350 PSI Continuous Working • Hydro-Tested to 500 PSI",
    coating: "NSF 61 Certified High-Build Electrostatic Powder Coat",
    pipeCompatibility: '4" to 12" Standard Mechanical Joint Watermain Outlets',
    submittalDoc: "SUBMITTAL_MJ_SWIVEL_ADAPTER.PDF",
    features: [
      "360° continuous rotation allows rapid plumb alignment of hydrant nozzles",
      "Eliminates crooked hydrant installations caused by trench grade variances",
      "Factory-installed retaining ring locks components securely during transport",
      "Double cement mortar lined or fusion epoxy lined for maximum hydraulic flow",
    ],
    hotspots: [
      {
        id: 1,
        x: "32%",
        y: "30%",
        title: "360° Rotating Swivel Gland",
        badge: "Zero-Strain Alignment",
        desc: "Spins freely around the barrel shoulder until T-bolts are torqued down, allowing exact municipal orientation for hose nozzles and valve stems.",
      },
      {
        id: 2,
        x: "68%",
        y: "32%",
        title: "Machined Gasket Cavity",
        badge: "AWWA C111 Standard Gasket",
        desc: "Precision CNC-machined mechanical joint socket ensures leak-free compression of standard ductile iron MJ gaskets up to 350 PSI.",
      },
      {
        id: 3,
        x: "50%",
        y: "65%",
        title: "Compact Short-Bury Body",
        badge: "Heavy Cast Section",
        desc: "Minimized center-to-face dimensions reduce trench excavation footprint between the main line tee and auxiliary hydrant shutoff valve.",
      },
      {
        id: 4,
        x: "75%",
        y: "72%",
        title: "Fusion-Bonded Blue Epoxy",
        badge: "NSF/ANSI 61 Lead-Free",
        desc: "12-mil holiday-free epoxy coating provides full resistance to municipal potable water chlorine and eliminates iron tuberculation forever.",
      },
    ],
  },
];

const PRESSURE_STEPS = [
  {
    psi: 100,
    label: "100 PSI",
    bite: "0.8 mm",
    safety: "3.5x",
    state: "Initial Seating",
  },
  {
    psi: 250,
    label: "250 PSI",
    bite: "1.8 mm",
    safety: "2.8x",
    state: "Operating Load",
  },
  {
    psi: 350,
    label: "350 PSI",
    bite: "2.6 mm",
    safety: "2.2x",
    state: "AWWA Working Max",
  },
  {
    psi: 500,
    label: "500 PSI",
    bite: "3.5 mm",
    safety: "1.8x",
    state: "Surge Proof Seal",
  },
];

export const EngineeringInnovationSpotlight: React.FC<
  EngineeringInnovationSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal, product }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"photo" | "simulation" | "torque">(
    "photo",
  );
  const [selectedPsi, setSelectedPsi] = useState(350);
  const [torqueValue, setTorqueValue] = useState(85);

  const currentProduct = INNOVATION_PRODUCTS[selectedProductIndex];
  const activeSpotData = currentProduct.hotspots.find(
    (h) => h.id === activeHotspot,
  );
  const currentStep =
    PRESSURE_STEPS.find((p) => p.psi === selectedPsi) || PRESSURE_STEPS[2];

  const handleSelectProduct = (index: number) => {
    setSelectedProductIndex(index);
    setActiveHotspot(null);
  };

  const isTorqueSheared = torqueValue >= 75;

  return (
    <section
      id="innovation-spotlight"
      aria-label="4th Showcase: Next-Gen Mechanical Joint Innovations"
      className="py-14 sm:py-20 bg-[#3087ff] text-white border-b-4 border-[#3087ff] relative overflow-hidden"
    >
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
        {/* ========================================================
            TOP SECTION HEADER
        ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 border-b-2 border-white/20 pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-[#3087ff] text-xs font-bold uppercase tracking-wider rounded-none mb-4 shadow-md border-2 border-[#3087ff]">
              <Sparkles className="w-4 h-4 text-[#3087ff] shrink-0" />
              <span>
                4th Product Showcase &bull; Mechanical Joint Engineering
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
              {currentProduct.name.split(" ")[0]}{" "}
              <span className="text-[#3087ff]">
                {currentProduct.name.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
              {currentProduct.summary}
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
            <span className="px-3 py-1 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] shadow-sm">
              {currentProduct.badge}
            </span>
            <span className="px-3 py-1 bg-[#3087ff] text-[#3087ff] text-xs font-bold uppercase tracking-wider">
              {currentProduct.spec}
            </span>
            <span className="text-[11px] text-white/80 font-mono">
              Melville, NY &amp; Dallas Hub Stock
            </span>
          </div>
        </div>

        {/* ========================================================
            INNOVATION PRODUCT TABS (4 REAL WATERWORKS INNOVATIONS)
        ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {INNOVATION_PRODUCTS.map((prod, idx) => {
            const isSelected = selectedProductIndex === idx;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => handleSelectProduct(idx)}
                className={`p-3 sm:p-4 text-left border-2 rounded-none transition-all flex flex-col justify-between cursor-pointer ${isSelected
                    ? "bg-white text-[#3087ff] border-[#3087ff] shadow-lg ring-2 ring-white"
                    : "bg-white/10 text-white border-white/30 hover:border-[#3087ff] hover:bg-white/20"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 ${isSelected
                          ? "bg-[#3087ff] text-white"
                          : "bg-white/20 text-white"
                        }`}
                    >
                      Innovation 0{idx + 1}
                    </span>
                    <span
                      className={`text-[10px] font-bold ${isSelected ? "text-[#3087ff]" : "text-[#3087ff]"
                        }`}
                    >
                      AWWA
                    </span>
                  </div>
                  <h3
                    className={`text-xs sm:text-sm font-black uppercase leading-snug line-clamp-2 ${isSelected ? "text-[#3087ff]" : "text-white"
                      }`}
                  >
                    {prod.name}
                  </h3>
                </div>
                <p
                  className={`text-[11px] mt-2 font-medium line-clamp-1 ${isSelected ? "text-[#3087ff]/75" : "text-white/75"
                    }`}
                >
                  {prod.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            MAIN 2-COLUMN BALANCED ENGINEERING WORKBENCH
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================
              LEFT 7 COLUMNS: INTERACTIVE VISUAL DISPLAY + HOTSPOTS
          ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* View Mode Controller */}
            <div className="flex items-center justify-between gap-1 border-2 border-white/60 p-1 bg-[#3087ff]">
              <button
                type="button"
                onClick={() => setViewMode("photo")}
                className={`flex-1 py-2 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center justify-center gap-1.5 ${viewMode === "photo"
                    ? "bg-white text-[#3087ff] shadow-sm"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Hotspots</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("simulation")}
                className={`flex-1 py-2 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center justify-center gap-1.5 ${viewMode === "simulation"
                    ? "bg-white text-[#3087ff] shadow-sm"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Pressure Bite Simulation</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("torque")}
                className={`flex-1 py-2 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center justify-center gap-1.5 ${viewMode === "torque"
                    ? "bg-white text-[#3087ff] shadow-sm"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Torque Shear Test</span>
              </button>
            </div>

            {/* MAIN VISUAL CANVAS */}
            <div className="relative bg-white border-4 border-[#3087ff] p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center min-h-[420px] sm:min-h-[480px] text-[#3087ff] overflow-hidden">
              {/* Floating Upper Hotspot Detail Popup (Zero Layout Displacement) */}
              {activeSpotData && viewMode === "photo" && (
                <div
                  role="region"
                  aria-live="polite"
                  className="absolute inset-x-4 sm:inset-x-6 top-14 z-30 bg-white text-[#3087ff] border-4 border-[#3087ff] p-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200 backdrop-blur-md"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-[#3087ff] text-white text-xs font-black flex items-center justify-center shrink-0">
                        {activeSpotData.id}
                      </span>
                      <h4 className="text-sm sm:text-base font-black uppercase text-[#3087ff]">
                        {activeSpotData.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black uppercase bg-[#3087ff] text-[#3087ff] px-2.5 py-0.5 shrink-0">
                        {activeSpotData.badge}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveHotspot(null)}
                        className="w-6 h-6 bg-[#3087ff]/10 hover:bg-[#3087ff] text-[#3087ff] hover:text-white flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                        title="Close Popup"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3087ff]/90 font-medium leading-relaxed mb-3">
                    {activeSpotData.desc}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#3087ff]/20 pt-2 text-xs">
                    <span className="font-bold text-[#3087ff]/70 uppercase text-[10px]">
                      Field Inspection Hotspot {activeSpotData.id} of{" "}
                      {currentProduct.hotspots.length} &bull;{" "}
                      {currentProduct.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(null)}
                      className="font-black text-[#3087ff] hover:text-[#3087ff] uppercase cursor-pointer"
                    >
                      &times; Close Inspection
                    </button>
                  </div>
                </div>
              )}
              {/* Corner Waterworks Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3087ff] bg-[#3087ff]/30 px-2.5 py-1 border border-[#3087ff]">
                  {currentProduct.categoryLabel}
                </span>
              </div>

              {/* Top Right Spec Tag */}
              <div className="absolute top-4 right-4 z-20 hidden sm:block">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#3087ff] bg-white border border-[#3087ff] px-2 py-1 shadow-xs">
                  {currentProduct.standards.split("/")[0].trim()}
                </span>
              </div>

              {/* --------------------------------------------------------
                  MODE A: PRODUCT PHOTOGRAPH + INTERACTIVE HOTSPOT DOTS
              -------------------------------------------------------- */}
              {viewMode === "photo" && (
                <div className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center select-none">
                  {/* Real Waterworks Innovation Image */}
                  <img
                    src={currentProduct.imageUrl}
                    alt={currentProduct.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-all duration-300"
                  />

                  {/* Hotspot Markers (Clickable Dots 1, 2, 3, 4) */}
                  {currentProduct.hotspots.map((spot) => {
                    const isActive = activeHotspot === spot.id;
                    return (
                      <div
                        key={spot.id}
                        className="absolute z-20"
                        style={{ top: spot.y, left: spot.x }}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveHotspot(isActive ? null : spot.id)
                          }
                          aria-label={`Inspect ${spot.title}`}
                          className="relative flex items-center justify-center cursor-pointer group"
                        >
                          {/* Pulsing Radar Ring */}
                          <span className="absolute -inset-2 rounded-full border-2 border-[#3087ff] opacity-75 animate-ping" />

                          {/* Numbered Hotspot Pill */}
                          <span
                            className={`relative w-8 h-8 rounded-none border-2 font-black text-xs flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 ${isActive
                                ? "bg-[#3087ff] text-white border-white scale-110 ring-2 ring-[#3087ff]"
                                : "bg-white text-[#3087ff] border-[#3087ff] hover:bg-[#3087ff]"
                              }`}
                          >
                            {spot.id}
                          </span>

                          {/* Hover Tooltip Label */}
                          <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 hidden group-hover:block whitespace-nowrap bg-[#3087ff] text-white text-[10px] font-black uppercase px-2 py-0.5 border border-[#3087ff] shadow-md z-30 pointer-events-none">
                            {spot.title}
                          </span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* --------------------------------------------------------
                  MODE B: HYDROSTATIC CAM PRESSURE BITE SIMULATOR
              -------------------------------------------------------- */}
              {viewMode === "simulation" && (
                <div className="w-full flex flex-col items-center justify-between h-[360px] sm:h-[420px] relative py-2">
                  {/* Pressure Steps Selector */}
                  <div className="w-full flex flex-wrap items-center justify-center gap-2 pt-2 z-10">
                    {PRESSURE_STEPS.map((step) => (
                      <button
                        key={step.psi}
                        type="button"
                        onClick={() => setSelectedPsi(step.psi)}
                        className={`px-3 py-1.5 text-xs font-black uppercase rounded-none border transition-all cursor-pointer ${selectedPsi === step.psi
                            ? "bg-[#3087ff] text-white border-[#3087ff] shadow-md"
                            : "bg-white text-[#3087ff] border-[#3087ff] hover:bg-[#3087ff]/20"
                          }`}
                      >
                        {step.label}
                      </button>
                    ))}
                  </div>

                  {/* Interactive Cross-Section SVG Diagram */}
                  <div className="relative w-full flex-1 flex items-center justify-center my-3">
                    <svg
                      viewBox="0 0 360 220"
                      className="w-full h-full max-h-[220px]"
                      fill="none"
                      aria-label="Cam Action Wedge Bite Cross-Section"
                    >
                      {/* Ductile Iron Pipe Outer Wall */}
                      <rect
                        x="30"
                        y="80"
                        width="300"
                        height="70"
                        fill="#3087ff"
                        fillOpacity="0.08"
                        stroke="#3087ff"
                        strokeWidth="3"
                      />
                      <text
                        x="105"
                        y="120"
                        fill="#3087ff"
                        fontSize="11"
                        fontWeight="black"
                        letterSpacing="1"
                      >
                        DUCTILE IRON PIPE BARREL (350 PSI)
                      </text>

                      {/* Top Restraint Gland Body */}
                      <rect
                        x="70"
                        y="35"
                        width="220"
                        height="35"
                        fill="#3087ff"
                        stroke="#3087ff"
                        strokeWidth="2"
                      />
                      <text
                        x="110"
                        y="57"
                        fill="#FFFFFF"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        SERIES 3000 MJ GLAND BODY
                      </text>

                      {/* Left Cam Wedge with Dynamic Penetration */}
                      <g
                        style={{
                          transform: `translateY(${selectedPsi === 100
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
                          points="95,65 125,65 120,85 100,85"
                          fill="#3087ff"
                          stroke="#3087ff"
                          strokeWidth="2"
                        />
                        <line
                          x1="110"
                          y1="50"
                          x2="110"
                          y2="78"
                          stroke="#3087ff"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                        />
                      </g>

                      {/* Right Cam Wedge with Dynamic Penetration */}
                      <g
                        style={{
                          transform: `translateY(${selectedPsi === 100
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
                          points="235,65 265,65 260,85 240,85"
                          fill="#3087ff"
                          stroke="#3087ff"
                          strokeWidth="2"
                        />
                        <line
                          x1="250"
                          y1="50"
                          x2="250"
                          y2="78"
                          stroke="#3087ff"
                          strokeWidth="2.5"
                          strokeDasharray="4 2"
                        />
                      </g>

                      {/* Bottom Gland Collar */}
                      <rect
                        x="70"
                        y="160"
                        width="220"
                        height="30"
                        fill="#3087ff"
                        stroke="#3087ff"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Telemetry Indicator Readout */}
                  <div className="w-full grid grid-cols-3 gap-2 border-t border-[#3087ff]/20 pt-3 text-xs">
                    <div className="text-left font-bold text-[#3087ff]">
                      <span className="text-[10px] text-[#3087ff]/70 uppercase block">
                        Radial Bite Depth
                      </span>
                      <strong className="text-sm font-black text-[#3087ff]">
                        {currentStep.bite}
                      </strong>
                    </div>

                    <div className="text-center font-bold text-[#3087ff]">
                      <span className="text-[10px] text-[#3087ff]/70 uppercase block">
                        Safety Margin
                      </span>
                      <strong className="text-sm font-black text-[#3087ff]">
                        {currentStep.safety} Proof
                      </strong>
                    </div>

                    <div className="text-right font-bold text-[#3087ff]">
                      <span className="text-[10px] text-[#3087ff]/70 uppercase block">
                        Operating State
                      </span>
                      <span className="inline-block bg-[#3087ff]/30 px-2 py-0.5 border border-[#3087ff] font-extrabold text-[11px]">
                        {currentStep.state}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* --------------------------------------------------------
                  MODE C: TORQUE BREAKAWAY SHEAR TEST
              -------------------------------------------------------- */}
              {viewMode === "torque" && (
                <div className="w-full flex flex-col items-center justify-between h-[360px] sm:h-[420px] relative py-2">
                  <div className="w-full text-center">
                    <h4 className="text-sm font-black uppercase text-[#3087ff] mb-1">
                      Calibrated Breakaway Bolt Demonstration
                    </h4>
                    <p className="text-xs text-[#3087ff]/80 max-w-md mx-auto">
                      Drag the torque wrench slider to simulate bolt tightening.
                      At 75-90 ft-lbs, the upper hex nut shears cleanly off to
                      prevent pipe wall pinching.
                    </p>
                  </div>

                  {/* Visual Bolt Shear Demonstration */}
                  <div className="my-4 flex flex-col items-center justify-center">
                    <div className="relative w-32 h-44 flex flex-col items-center justify-center">
                      {/* Upper Breakaway Hex Nut */}
                      <div
                        className={`w-14 h-8 border-2 border-[#3087ff] font-black text-xs flex items-center justify-center transition-all duration-300 ${isTorqueSheared
                            ? "translate-x-12 -translate-y-6 rotate-45 opacity-0 bg-red-100"
                            : "bg-[#3087ff] text-[#3087ff]"
                          }`}
                      >
                        {isTorqueSheared ? "SHEARED" : "TORQUE"}
                      </div>

                      {/* Shear Plane Neck */}
                      <div className="w-5 h-3 bg-[#3087ff] border border-white" />

                      {/* Secondary Permanent Inspection Nut */}
                      <div className="w-16 h-10 bg-[#3087ff] text-white font-black text-xs flex items-center justify-center border-2 border-[#3087ff]">
                        REMOVAL
                      </div>

                      {/* Threaded Stud into Gland Body */}
                      <div className="w-6 h-16 bg-stripes-blue border border-[#3087ff]" />
                    </div>

                    <div className="mt-2 text-center">
                      {isTorqueSheared ? (
                        <span className="px-3 py-1 bg-[#3087ff] text-white text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] shadow-md inline-flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3087ff]" />
                          Shear Achieved @ {torqueValue} Ft-Lbs &bull; Certified
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border border-[#3087ff]">
                          Current Torque: {torqueValue} Ft-Lbs (Required: 75-90)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Interactive Range Slider */}
                  <div className="w-full max-w-sm px-4">
                    <div className="flex justify-between text-[11px] font-bold text-[#3087ff] mb-1">
                      <span>0 Ft-Lbs (Loose)</span>
                      <span>Target: 75-90 Ft-Lbs</span>
                      <span>110 Ft-Lbs (Max)</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="110"
                      value={torqueValue}
                      onChange={(e) => setTorqueValue(Number(e.target.value))}
                      className="w-full accent-[#3087ff] cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Instruction Banner */}
            <div className="bg-white/10 border border-[#3087ff] p-2.5 flex items-center justify-between text-xs text-white">
              <span className="font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#3087ff]" />
                Click numbered dots (1-4) on the active product to inspect
                engineering specs.
              </span>
              <span className="text-[11px] font-mono text-[#3087ff]">
                100% AIS / Buy America
              </span>
            </div>
          </div>

          {/* ========================================================
              RIGHT 5 COLUMNS: TECHNICAL PARAMETERS & SUBMITTAL CTAS
          ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-white/10 border-2 border-[#3087ff] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-white text-[#3087ff] flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-[#3087ff]" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-white">
                    Dynamic Grip
                  </h4>
                </div>
                <p className="text-[11px] text-white/90 leading-snug">
                  Independent heat-treated wedges bite radially deeper as line
                  pressure surges.
                </p>
              </div>

              <div className="p-3.5 bg-white/10 border-2 border-[#3087ff] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-white text-[#3087ff] flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5 text-[#3087ff]" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-white">
                    Torque Shear
                  </h4>
                </div>
                <p className="text-[11px] text-white/90 leading-snug">
                  Breakaway hex nuts eliminate torque wrench guesswork and pipe
                  crushing.
                </p>
              </div>

              <div className="p-3.5 bg-white/10 border-2 border-[#3087ff] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-white text-[#3087ff] flex items-center justify-center shrink-0">
                    <Activity className="w-3.5 h-3.5 text-[#3087ff]" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-white">
                    5° Flex Deflection
                  </h4>
                </div>
                <p className="text-[11px] text-white/90 leading-snug">
                  Accommodates seismic movement and trench settling without
                  compromising seal.
                </p>
              </div>

              <div className="p-3.5 bg-white/10 border-2 border-[#3087ff] shadow-xs backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-white text-[#3087ff] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3087ff]" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-white">
                    UL &amp; FM Rated
                  </h4>
                </div>
                <p className="text-[11px] text-white/90 leading-snug">
                  Rated up to 350 PSI continuous service for potable and fire
                  protection mains.
                </p>
              </div>
            </div>

            {/* Submittal Specification Ledger */}
            <div className="border-2 border-[#3087ff] bg-white/10 shadow-md backdrop-blur-sm">
              <div className="bg-white text-[#3087ff] px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider">
                  {currentProduct.name} Spec Ledger
                </span>
                <span className="text-xs font-mono font-bold text-[#3087ff]">
                  {currentProduct.standards.split("/")[0].trim()}
                </span>
              </div>

              <div className="p-4 space-y-2.5 text-xs text-white">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Standards Compliance:
                  </span>
                  <span className="text-white font-bold text-right">
                    {currentProduct.standards}
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Metallurgy &amp; Material:
                  </span>
                  <span className="text-white font-bold text-right">
                    {currentProduct.metallurgy}
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Continuous Pressure:
                  </span>
                  <span className="text-[#3087ff] font-bold text-right">
                    {currentProduct.pressure}
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Coating &amp; Lining:
                  </span>
                  <span className="text-white font-bold text-right">
                    {currentProduct.coating}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/80 font-normal">
                    Pipe Compatibility:
                  </span>
                  <span className="text-white font-bold text-right">
                    {currentProduct.pipeCompatibility}
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onAddToRfq(product)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#3087ff] bg-white hover:bg-[#3087ff] rounded-none shadow-md transition-all uppercase tracking-wide cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#3087ff]" />
                <span>Add {currentProduct.name.split(" ")[0]} to RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#3087ff] hover:text-[#3087ff] bg-[#3087ff] hover:bg-white border-2 border-[#3087ff] rounded-none shadow-xs transition-all uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#3087ff] group-hover:text-[#3087ff]" />
                <span>Download Submittal</span>
              </button>
            </div>

            {/* Quick Dispatch Strip */}
            <div className="pt-2 flex items-center justify-between border-t border-white/20 text-xs font-semibold text-white">
              <span>
                Next-Day Flatbed Dispatch &bull; Melville, NY &amp; FL
              </span>
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-1 hover:text-[#3087ff] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#3087ff]" />
                <span>+1 (516) 252-1111</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
