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
    id: "mj-fittings-c153",
    name: "High-Pressure Compact Mechanical Joint Fittings",
    subtitle: "AWWA C153 Ductile Iron 350 PSI Precision Castings",
    categoryLabel: "Ductile Iron Pipeline Infrastructure",
    badge: "Authentic Foundry Cast",
    spec: '2" to 64" Diameter • 350 PSI Working Pressure',
    imageUrl: "/images/our-images/MJ_Fittings.jpeg",
    summary:
      "Authentic American foundry-poured AWWA C153 compact ductile iron fittings. Engineered with high-strength ductile metallurgy, precision-machined mechanical joint bell sockets, and heavy bituminous or fusion-bonded epoxy protective lining.",
    standards: "AWWA C153 / ANSI A21.53 / ASTM A536 Grade 65-45-12",
    metallurgy: "ASTM A536 Grade 65-45-12 Ductile Iron (AIS Compliant)",
    pressure: "350 PSI Continuous Working • 500 PSI Proof Tested",
    coating: "NSF 61 Certified Fusion-Bonded Epoxy or Heavy Bituminous",
    pipeCompatibility: "Ductile Iron (Class 50-56) & AWWA C900 / C905 PVC",
    submittalDoc: "SUBMITTAL_MJ_FITTINGS_C153.PDF",
    features: [
      "Poured from Grade 65-45-12 ductile iron with 65,000 PSI minimum tensile strength",
      "Deep-bell mechanical joint sockets precision-machined to tight AWWA C111 tolerances",
      "Certified AIS & Buy America compliant with traceable foundry heat numbers",
      "Compact profile saves trench excavation volume while retaining full hydraulic capacity",
    ],
    hotspots: [
      {
        id: 1,
        x: "30%",
        y: "35%",
        title: "Grade 65-45-12 Metallurgy",
        badge: "65,000 PSI Tensile",
        desc: "High-ductility cast iron body with 12% elongation prevents brittle fracture under dynamic surge pressures and heavy traffic overburden.",
      },
      {
        id: 2,
        x: "70%",
        y: "32%",
        title: "Precision MJ Bell Socket",
        badge: "AWWA C111 Standards",
        desc: "CNC-turned mechanical joint socket profile provides exact gasket seating for zero-leak watermain joints under 350 PSI continuous operating load.",
      },
      {
        id: 3,
        x: "48%",
        y: "65%",
        title: "Heavy-Wall Reinforcement",
        badge: "C153 Compact Design",
        desc: "Optimized wall thickness concentrates structural strength at high-stress crotch geometries while reducing overall laying weight for installers.",
      },
      {
        id: 4,
        x: "75%",
        y: "74%",
        title: "Corrosion Barrier Finish",
        badge: "NSF 61 Certified",
        desc: "Factory-applied holiday-free lining protects internal water flow from tuberculation and external surfaces from acidic burial soils.",
      },
    ],
  },
  {
    id: "swivel-restraint-gland",
    name: "MJ Swivel Restraint Gland Assembly",
    subtitle: "360° Axial Rotation for Stress-Free Valve & Hydrant Seating",
    categoryLabel: "Pipeline Joint Restraints",
    badge: "AWWA C111 Certified",
    spec: "350 PSI Proof • 5° Joint Deflection",
    imageUrl: "/images/fittings/swivel-glands.png",
    summary:
      "Heavy-duty ductile iron mechanical joint swivel follower gland allowing a full 360 degrees of smooth rotational freedom. Permits field crews to plumb fire hydrants and align valve operators precisely without pipe binding, torque stress, or bolt hole binding.",
    standards: "AWWA C111 / ANSI A21.11 / ASTM A536 Grade 65-45-12",
    metallurgy: "ASTM A536 Grade 65-45-12 High-Ductility Cast Iron",
    pressure: "350 PSI Continuous Working Pressure",
    coating: "Electrostatic Corrosion Barrier / Asphaltic Enamel",
    pipeCompatibility: "Ductile Iron Pipe & AWWA C153 / C110 Swivel Adapters",
    submittalDoc: "SUBMITTAL_MJ_SWIVEL_GLAND.PDF",
    features: [
      "360° continuous rotation simplifies positioning fire hydrants and inline valves",
      "Heavy-wall ductile iron construction prevents gland deflection under bolt torque",
      "Accommodates up to 5° joint deflection for post-installation ground settling",
      "Machined seating lip provides leak-tight gasket compression per AWWA C111",
    ],
    hotspots: [
      {
        id: 1,
        x: "34%",
        y: "30%",
        title: "360° Rotating Follower Gland",
        badge: "Zero-Strain Alignment",
        desc: "Rotates smoothly on the fitting shoulder before bolting, allowing field crews to orient hydrant outlets perfectly plumb.",
      },
      {
        id: 2,
        x: "66%",
        y: "28%",
        title: "Radial T-Bolt Eye Slots",
        badge: "AWWA Bolt Circle",
        desc: "Heavy slotted bolt openings provide fast T-bolt insertion and uniform gasket loading without cross-threading.",
      },
      {
        id: 3,
        x: "50%",
        y: "65%",
        title: "Heavy Ductile Iron Ring",
        badge: "Deflection Resistant",
        desc: "High-strength casting eliminates warping under 75-90 Ft-Lbs bolt torque, ensuring uniform circular gasket pressure.",
      },
      {
        id: 4,
        x: "74%",
        y: "76%",
        title: "Hydrostatic Sealing Seat",
        badge: "350 PSI Proof",
        desc: "Machined wedge face compresses standard SBR/EPDM mechanical joint gaskets to seal high-pressure mainlines securely.",
      },
    ],
  },
  {
    id: "swivel-solid-hydrant-adapter",
    name: "Swivel x Solid Hydrant Restraint Adapter",
    subtitle: "Rigid Structural Anchoring Spool for Municipal Fire Hydrants",
    categoryLabel: "Hydrant & Valve Connections",
    badge: "AASHTO H-20 Proof",
    spec: "AWWA C153 / ASTM A536 • 350 PSI",
    imageUrl: "/images/fittings/swivel-solid-hydrant-adapter.png",
    summary:
      "Precision cast ductile iron hydrant adapter connecting mechanical joint main branches to fire hydrant bases. Features an integral rotating swivel follower on one end and a solid anchored hub on the other, establishing a rigid, blow-off proof connection.",
    standards: "AWWA C153 / ANSI A21.53 / ASTM A536 Grade 65-45-12",
    metallurgy: "High-Tensile ASTM A536 Ductile Iron",
    pressure: "350 PSI Working Pressure • 500 PSI Proof Tested",
    coating: "AWWA C116 High-Build Epoxy / NSF-61 Potable Approved",
    pipeCompatibility: 'Standard 6" & 8" Municipal Fire Hydrant Leads',
    submittalDoc: "SUBMITTAL_SWIVEL_HYDRANT_ADAPTER.PDF",
    features: [
      "Eliminates cumbersome tie-rods and kicker blocks on fire hydrant installations",
      "Precision-machined swivel hub guarantees square, level hydrant placement",
      "Cast iron wall thickness exceeds minimum AWWA C153 pressure requirements",
      "Factory hydrostatic proof tested to 500 PSI for complete surge security",
    ],
    hotspots: [
      {
        id: 1,
        x: "30%",
        y: "35%",
        title: "Integral Swivel Retention Hub",
        badge: "Blow-Off Proof",
        desc: "Captive rotating ring locks securely behind the casting collar, resisting extreme hydraulic hydrant kickback forces.",
      },
      {
        id: 2,
        x: "70%",
        y: "30%",
        title: "Solid Mechanical Joint Bell",
        badge: "Standard MJ Pattern",
        desc: "Connects directly into standard branch tees or gate valves with certified AWWA C111 rubber gasket compression.",
      },
      {
        id: 3,
        x: "50%",
        y: "65%",
        title: "Thick Cast Iron Barrel",
        badge: "ASTM A536 Grade 65-45-12",
        desc: "Monolithic ductile iron body withstands heavy soil overburden and vehicular surface vibration.",
      },
      {
        id: 4,
        x: "24%",
        y: "75%",
        title: "NSF 61 Potable Water Epoxy",
        badge: "Zero Tuberculation",
        desc: "Smooth interior waterway minimizes head loss and preserves pristine water quality throughout decades of service.",
      },
    ],
  },
  {
    id: "cutting-in-sleeve",
    name: "Heavy-Wall MJ Cutting-In Sleeve",
    subtitle: "In-Trench Pipe Repair & Valve Retrofit System",
    categoryLabel: "Emergency Repair & Line Taps",
    badge: "Foundry Certified",
    spec: "ASTM A536 Grade 65-45-12 • 350 PSI",
    imageUrl: "/images/fittings/cutting-in-sleeve.png",
    summary:
      "Heavy-duty ductile iron cutting-in sleeve engineered for in-line insertion of gate valves, tapping tees, and replacement pipe spools into existing pressurized watermains. Features extended telescopic bell travel for fast, leak-proof in-trench closure.",
    standards: "AWWA C110/C153 / ANSI A21.10 / ASTM A536",
    metallurgy: "ASTM A536 Grade 65-45-12 Heavy Ductile Iron",
    pressure: "350 PSI Rated • Full Watermain Working Pressure",
    coating: "Heavy Bituminous Corrosion Barrier or Fusion-Bonded Epoxy",
    pipeCompatibility: "Standard Ductile Iron & Cast Iron Pipe Diameters",
    submittalDoc: "SUBMITTAL_CUTTING_IN_SLEEVE.PDF",
    features: [
      "Extended telescopic entry pocket accommodates variable pipe cut lengths",
      "Oversized mechanical joint gland delivers uniform 360° gasket sealing",
      "Allows valve cut-ins and repairs without disrupting surrounding main sections",
      "Thick cast iron body resists aggressive soil chemistry and external traffic loads",
    ],
    hotspots: [
      {
        id: 1,
        x: "32%",
        y: "30%",
        title: "Extended Telescopic Travel",
        badge: "Variable Gap Fit",
        desc: "Generous insertion socket accommodates variable rough pipe cuts in cramped excavation trenches.",
      },
      {
        id: 2,
        x: "68%",
        y: "32%",
        title: "High-Compression Gland Pocket",
        badge: "Leak-Tight Seal",
        desc: "Deep mechanical joint gasket pocket compresses tightly against existing pipe walls to seal aged mainlines.",
      },
      {
        id: 3,
        x: "50%",
        y: "65%",
        title: "Heavy Ductile Iron Body",
        badge: "Class 350 Heavy Wall",
        desc: "Exceeds standard pipeline wall thicknesses to maintain structural integrity under shifting ground conditions.",
      },
      {
        id: 4,
        x: "75%",
        y: "72%",
        title: "Dual Gasket Sealing Option",
        badge: "350 PSI Working Pressure",
        desc: "Accommodates both standard and oversized transition gaskets to bridge differing pipe outer diameters securely.",
      },
    ],
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
