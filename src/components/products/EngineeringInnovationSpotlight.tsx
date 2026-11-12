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

  const currentProduct = INNOVATION_PRODUCTS[selectedProductIndex];

  const handleSelectProduct = (index: number) => {
    setSelectedProductIndex(index);
  };

  return (
    <section
      id="engineering-spotlight"
      aria-label="4th Showcase: Next-Gen Mechanical Joint Innovations"
      className="py-14 sm:py-20 bg-white text-[#3087ff] border-b-4 border-[#3087ff] relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #3087ff 1px, transparent 1px), linear-gradient(to bottom, #3087ff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            TOP SECTION HEADER
        ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 border-b-2 border-[#3087ff] pb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#3087ff] text-white text-xs font-bold uppercase tracking-wider rounded-none mb-4 shadow-md border-2 border-[#3087ff]">
              <Sparkles className="w-4 h-4 text-white shrink-0" />
              <span>
                4th Product Showcase &bull; Mechanical Joint Engineering
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#3087ff] leading-[1.05] mb-3">
              {currentProduct.name.split(" ")[0]}{" "}
              <span className="text-[#3087ff]">
                {currentProduct.name.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#3087ff] font-normal leading-relaxed">
              {currentProduct.summary}
            </p>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
            <span className="px-3 py-1 bg-[#3087ff] text-white text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] shadow-sm">
              {currentProduct.badge}
            </span>
            <span className="px-3 py-1 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff]">
              {currentProduct.spec}
            </span>
            <span className="text-[11px] text-[#3087ff] font-mono font-bold">
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
                className={`p-3 sm:p-4 text-left border-2 rounded-none transition-all flex flex-col justify-between cursor-pointer group ${isSelected
                  ? "bg-[#3087ff] text-white border-[#3087ff] shadow-xl"
                  : "bg-white text-[#3087ff] border-[#3087ff] hover:bg-[#3087ff] hover:text-white shadow-sm"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 ${isSelected
                        ? "bg-white text-[#3087ff]"
                        : "bg-[#3087ff] text-white group-hover:bg-white group-hover:text-[#3087ff]"
                        }`}
                    >
                      Innovation 0{idx + 1}
                    </span>
                    <span
                      className={`text-[10px] font-black uppercase ${isSelected ? "text-white" : "text-[#3087ff] group-hover:text-white"
                        }`}
                    >
                      AWWA
                    </span>
                  </div>
                  <h3
                    className={`text-xs sm:text-sm font-black uppercase leading-snug line-clamp-2 ${isSelected ? "text-white" : "text-[#3087ff] group-hover:text-white"
                      }`}
                  >
                    {prod.name}
                  </h3>
                </div>
                <p
                  className={`text-[11px] mt-2 font-medium line-clamp-1 ${isSelected ? "text-white" : "text-[#3087ff] group-hover:text-white"
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
              LEFT 7 COLUMNS: REAL PRODUCT IMAGE & TECHNICAL HIGHLIGHTS
          ======================================================== */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* MAIN REAL PRODUCT VISUAL CANVAS */}
            <div className="relative bg-white border-4 border-[#3087ff] p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px] text-[#3087ff] overflow-hidden group">
              {/* Corner Waterworks Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[10px] font-black uppercase tracking-widest text-white bg-[#3087ff] px-2.5 py-1 border border-[#3087ff] shadow-sm">
                  {currentProduct.categoryLabel}
                </span>
              </div>

              {/* Top Right Spec Tag */}
              <div className="absolute top-4 right-4 z-20 hidden sm:block">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#3087ff] bg-white border-2 border-[#3087ff] px-2.5 py-1 shadow-xs">
                  {currentProduct.standards.split("/")[0].trim()}
                </span>
              </div>

              {/* Pure Real Waterworks Product Photo Display */}
              <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center p-2 select-none">
                <img
                  src={currentProduct.imageUrl}
                  alt={currentProduct.name}
                  className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Real Image Specification Bar */}
              <div className="w-full flex items-center justify-between border-t-2 border-[#3087ff] pt-3 text-xs mt-2 font-bold text-[#3087ff]">
                <span className="uppercase text-[11px] font-black">
                  {currentProduct.spec}
                </span>
                <span className="font-mono text-[10px] bg-[#3087ff] text-white px-2 py-0.5 border border-[#3087ff]">
                  Foundry Certified ASTM A536
                </span>
              </div>
            </div>

            {/* Instruction / Compliance Banner */}
            <div className="bg-white border-2 border-[#3087ff] p-3 flex items-center justify-between text-xs text-[#3087ff] shadow-xs">
              <span className="font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3087ff]" />
                Authentic American Waterworks Foundry Photography &bull; Zero Simulated Renderings
              </span>
              <span className="text-[11px] font-mono font-black text-[#3087ff] hidden sm:inline">
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
              <div className="p-3.5 bg-white border-2 border-[#3087ff] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-[#3087ff] text-white flex items-center justify-center shrink-0">
                    <Zap className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-[#3087ff]">
                    Dynamic Grip
                  </h4>
                </div>
                <p className="text-[11px] text-[#3087ff] font-medium leading-snug">
                  Independent heat-treated wedges bite radially deeper as line
                  pressure surges.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-[#3087ff] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-[#3087ff] text-white flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-[#3087ff]">
                    Torque Shear
                  </h4>
                </div>
                <p className="text-[11px] text-[#3087ff] font-medium leading-snug">
                  Breakaway hex nuts eliminate torque wrench guesswork and pipe
                  crushing.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-[#3087ff] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-[#3087ff] text-white flex items-center justify-center shrink-0">
                    <Activity className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-[#3087ff]">
                    5° Flex Deflection
                  </h4>
                </div>
                <p className="text-[11px] text-[#3087ff] font-medium leading-snug">
                  Accommodates seismic movement and trench settling without
                  compromising seal.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-[#3087ff] shadow-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 bg-[#3087ff] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h4 className="text-xs font-black uppercase text-[#3087ff]">
                    UL &amp; FM Rated
                  </h4>
                </div>
                <p className="text-[11px] text-[#3087ff] font-medium leading-snug">
                  Rated up to 350 PSI continuous service for potable and fire
                  protection mains.
                </p>
              </div>
            </div>

            {/* Submittal Specification Ledger */}
            <div className="border-2 border-[#3087ff] bg-white shadow-md">
              <div className="bg-[#3087ff] text-white px-4 py-2.5 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider">
                  {currentProduct.name} Spec Ledger
                </span>
                <span className="text-xs font-mono font-bold text-white">
                  {currentProduct.standards.split("/")[0].trim()}
                </span>
              </div>

              <div className="p-4 space-y-2.5 text-xs text-[#3087ff]">
                <div className="flex justify-between border-b border-[#3087ff] pb-2">
                  <span className="text-[#3087ff] font-bold">
                    Standards Compliance:
                  </span>
                  <span className="text-[#3087ff] font-extrabold text-right">
                    {currentProduct.standards}
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#3087ff] pb-2">
                  <span className="text-[#3087ff] font-bold">
                    Metallurgy &amp; Material:
                  </span>
                  <span className="text-[#3087ff] font-extrabold text-right">
                    {currentProduct.metallurgy}
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#3087ff] pb-2">
                  <span className="text-[#3087ff] font-bold">
                    Continuous Pressure:
                  </span>
                  <span className="text-[#3087ff] font-extrabold text-right">
                    {currentProduct.pressure}
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#3087ff] pb-2">
                  <span className="text-[#3087ff] font-bold">
                    Coating &amp; Lining:
                  </span>
                  <span className="text-[#3087ff] font-extrabold text-right">
                    {currentProduct.coating}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#3087ff] font-bold">
                    Pipe Compatibility:
                  </span>
                  <span className="text-[#3087ff] font-extrabold text-right">
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-black text-white bg-[#3087ff] hover:bg-white hover:text-[#3087ff] border-2 border-[#3087ff] rounded-none shadow-md transition-all uppercase tracking-wide cursor-pointer group"
              >
                <CheckCircle2 className="w-4 h-4 text-white group-hover:text-[#3087ff]" />
                <span>Add {currentProduct.name.split(" ")[0]} to RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-black text-[#3087ff] hover:text-white bg-white hover:bg-[#3087ff] border-2 border-[#3087ff] rounded-none shadow-md transition-all uppercase tracking-wide cursor-pointer group"
              >
                <FileCheck2 className="w-4 h-4 text-[#3087ff] group-hover:text-white" />
                <span>Download Submittal</span>
              </button>
            </div>

            {/* Quick Dispatch Strip */}
            <div className="pt-2 flex items-center justify-between border-t-2 border-[#3087ff] text-xs font-bold text-[#3087ff]">
              <span>
                Next-Day Flatbed Dispatch &bull; Melville, NY &amp; FL
              </span>
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-1 hover:underline text-[#3087ff] transition-colors"
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
