"use client";

import {
  Camera,
  Check,
  Copy,
  Download,
  Filter,
  Plus,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface CulvertPipeGratesSpotlightProps {
  onAddToRfq?: (product: ProductItem) => void;
  onPreviewSubmittal?: (product: ProductItem) => void;
}

const REAL_PIPE_GRATE_PHOTOS = [
  {
    id: "pipe-grate-photo-1",
    src: "/images/pipe_TREE_GRATE/image13.jpg",
    alt: "Heavy Highway Culvert End Grate with Solid Steel Bar Grid",
    title: "Heavy Highway Culvert End Grate",
    badge: "100% REAL FABRICATION",
    caption:
      'ASTM A36 heavy-gauge welded steel circular culvert safety grate engineered for 18" to 36" concrete pipe outfalls.',
  },
  {
    id: "pipe-grate-photo-2",
    src: "/images/pipe_TREE_GRATE/image19.jpeg",
    alt: "Flared End Section (FES) Hinged Pipe Safety Grate Assembly",
    title: "Flared End Pipe Grate Assembly",
    badge: "JOB SITE VERIFIED",
    caption:
      "Hot-dip galvanized ASTM A123 pipe protection screen fitted with heavy top maintenance cleanout hinges and anchor frame.",
  },
  {
    id: "pipe-grate-photo-3",
    src: "/images/pipe_TREE_GRATE/image3.jpeg",
    alt: "Traversable Slope Drainage Bar Grid Fabrication Detail",
    title: "Traversable Roadside Safety Slope Grid",
    badge: "AASHTO / DOT COMPLIANT",
    caption:
      "Full heavy bar screen structure engineered for AASHTO roadside clear zones to prevent vehicle wheel-trap drops along ditch lines.",
  },
];

const PIPE_GRATE_VARIANTS = [
  {
    id: "pg-fes-18",
    catNumber: "Cat. PG-FES-18",
    name: '18" Flared End Section (FES) Hinged Bar Grate',
    tag: '18" FES HINGED GRATE',
    sizeLabel: '18" Flared End Pipe',
    pipeFit: '18" Concrete or Metal Flared End Sections',
    dimensions: {
      height: '24.00"',
      width: '28.00"',
      depth: '4.50"',
      weightLbs: 48,
      flowArea: "88% Clear Area",
    },
    material: 'ASTM A36 Structural Carbon Steel (1/2" x 2" Flat Bars)',
    coating: "Hot-Dip Galvanized per ASTM A123 (3.9 mil minimum)",
    cleanoutType: "Heavy Top Hinge Pin with Tamper-Resistant Padlock Hasp",
    trafficRating: "State DOT Standard Roadside Drainage",
    standards: "ASTM A123 • AASHTO M180 • DOT Standard 604",
    description:
      'Hinged bar grate manufactured to clamp directly to standard 18" precast concrete flared end sections. Top hinges allow the grate to be swung upward for debris cleaning and maintenance rodding.',
    photoUrl: "/images/pipe_TREE_GRATE/image13.jpg",
    photoIndex: 0,
  },
  {
    id: "pg-rnd-24",
    catNumber: "Cat. PG-RND-24",
    name: '24" Round Culvert Safety Bar Grate',
    tag: '24" CIRCULAR PIPE INSERT',
    sizeLabel: '24" Round Culvert',
    pipeFit: '24" RCP, CMP & Corrugated HDPE Pipes',
    dimensions: {
      height: '24.00" Dia',
      width: '24.00" Dia',
      depth: '8.00" Collar',
      weightLbs: 72,
      flowArea: '86% Clear Area (3" Spacing)',
    },
    material: 'Heavy 5/8" Round Solid Steel Bars with Welded Outer Ring',
    coating: "Hot-Dip Galvanized per ASTM A123 or Black Bituminous",
    cleanoutType: "Internal Wedge-Lock Compression Fasteners",
    trafficRating: "AASHTO H-20 Wheel Load Rated",
    standards: "ASTM A123 • ASTM A36 • AASHTO Roadside Design",
    description:
      'Circular pipe end grate featuring 3" on-center round safety bars welded to an expandable retention collar. Easily slips into the bell or spigot of 24" storm culverts and locks rigidly in place.',
    photoUrl: "/images/pipe_TREE_GRATE/image19.jpeg",
    photoIndex: 1,
  },
  {
    id: "pg-slp-36",
    catNumber: "Cat. PG-SLP-36",
    name: '36" Highway Traversable Safety Slope Grate',
    tag: '36" 4:1 TRAVERSABLE SLOPE',
    sizeLabel: '36" Safety Sloped Culvert',
    pipeFit: '36" Highway Ditch Crossings (4:1 & 6:1 Slopes)',
    dimensions: {
      height: '42.00"',
      width: '52.00"',
      depth: '12.00"',
      weightLbs: 145,
      flowArea: "84% Clear Flow Area",
    },
    material: "Heavy-Gauge Structural Steel Tubing & Solid Cross-Bars",
    coating: "Hot-Dip Galvanized per ASTM A123",
    cleanoutType: "Removable Center Bar Section for Sediment Bucket Entry",
    trafficRating: "AASHTO Safety Clear Zone Traversable (4:1 / 6:1)",
    standards: "AASHTO Highway Safety Manual • DOT Cross-Drain Standard",
    description:
      "Traversable roadway safety pipe grate engineered to highway cross-drain specifications. Allows vehicles accidentally running off the road to safely traverse ditch culverts without hazardous wheel-trap drops.",
    photoUrl: "/images/pipe_TREE_GRATE/image3.jpeg",
    photoIndex: 2,
  },
  {
    id: "pg-ind-48",
    catNumber: "Cat. PG-IND-48",
    name: '48" Heavy Industrial Pipe Intake Grate',
    tag: '48" HEAVY INTAKE SCREEN',
    sizeLabel: '48" Large Diameter Culvert',
    pipeFit: '42" to 48" Reinforced Concrete Pipe Outfalls',
    dimensions: {
      height: '50.00"',
      width: '50.00"',
      depth: '10.00"',
      weightLbs: 230,
      flowArea: "85% Clear Hydraulic Intake",
    },
    material: '3/4" Solid High-Strength Round Bars & 3" Channel Frame',
    coating: "ASTM A123 Hot-Dip Galvanized or 304 Stainless",
    cleanoutType: "Dual Counterweighted Swing-Up Access Gates",
    trafficRating: "Heavy Industrial Floodwater & Hydraulic Surge",
    standards: "USACE Civil Works • ASTM A123 • AIS Compliant",
    description:
      'Industrial-grade 48" outfall safety grate designed to stop heavy logs, tree branches, and urban detritus. Includes dual counter-weighted hinged service doors for backhoe and excavator maintenance access.',
    photoUrl: "/images/pipe_TREE_GRATE/image13.jpg",
    photoIndex: 0,
  },
];

export const CulvertPipeGratesSpotlight: React.FC<
  CulvertPipeGratesSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [activeVariantId, setActiveVariantId] = useState<string>("pg-fes-18");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeVariant =
    PIPE_GRATE_VARIANTS.find((v) => v.id === activeVariantId) ||
    PIPE_GRATE_VARIANTS[0];

  const currentPhoto =
    REAL_PIPE_GRATE_PHOTOS[activePhotoIndex] || REAL_PIPE_GRATE_PHOTOS[0];

  const handleSelectVariant = (variant: (typeof PIPE_GRATE_VARIANTS)[0]) => {
    setActiveVariantId(variant.id);
    setActivePhotoIndex(variant.photoIndex);
    setAdded(false);
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);

    if (onAddToRfq) {
      onAddToRfq({
        id: activeVariant.id,
        name: `${activeVariant.name} (${activeVariant.catNumber})`,
        category: "municipal-castings",
        categoryLabel: "Pipe Grates",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_PIPE_GRATES.DWG",
        submittalFile: "SUBMITTAL_CULVERT_PIPE_GRATES.PDF",
        specs: {
          tensileStrength: activeVariant.material,
          yieldStrength: activeVariant.trafficRating,
          elongation: activeVariant.dimensions.flowArea,
          wallThicknessClass: activeVariant.pipeFit,
          standardBoltCount: activeVariant.cleanoutType,
          torqueSpec: activeVariant.standards,
        },
        keyFeatures: [
          `Clear Flow Area: ${activeVariant.dimensions.flowArea}`,
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Pipe Fit: ${activeVariant.pipeFit}`,
          `Mechanism: ${activeVariant.cleanoutType}`,
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
        categoryLabel: "Pipe Grates",
        standard: "ASTM A48",
        pressureRating: activeVariant.trafficRating,
        jointType: "Gravity Flow Drop-In",
        diameterRange: activeVariant.sizeLabel,
        material: activeVariant.material,
        coating: activeVariant.coating,
        description: activeVariant.description,
        cadFile: "AQUA_PIPE_GRATES.DWG",
        submittalFile: "SUBMITTAL_CULVERT_PIPE_GRATES.PDF",
        specs: {
          tensileStrength: activeVariant.material,
          yieldStrength: activeVariant.trafficRating,
          elongation: activeVariant.dimensions.flowArea,
          wallThicknessClass: activeVariant.pipeFit,
          standardBoltCount: activeVariant.cleanoutType,
          torqueSpec: activeVariant.standards,
        },
        keyFeatures: [
          `Clear Flow Area: ${activeVariant.dimensions.flowArea}`,
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Pipe Fit: ${activeVariant.pipeFit}`,
          `Mechanism: ${activeVariant.cleanoutType}`,
          `Standards: ${activeVariant.standards}`,
        ],
        imageUrl: activeVariant.photoUrl,
        aisCompliant: true,
        buyAmericaReady: true,
      });
    }
  };

  const handleCopySpecs = () => {
    const text = `AQUA INDUSTRIES CULVERT PIPE SAFETY GRATE SPECIFICATION
Model: ${activeVariant.name} (${activeVariant.catNumber})
Pipe Size Compatibility: ${activeVariant.pipeFit}
Clear Hydraulic Intake: ${activeVariant.dimensions.flowArea}
Weight: ${activeVariant.dimensions.weightLbs} lbs (H: ${activeVariant.dimensions.height}, W: ${activeVariant.dimensions.width}, D: ${activeVariant.dimensions.depth})
Structural Steel: ${activeVariant.material}
Galvanizing: ${activeVariant.coating}
Access Hasp: ${activeVariant.cleanoutType}
Safety Slope Standard: ${activeVariant.trafficRating}
Compliance: ${activeVariant.standards}
100% Domestic AIS / Buy America Certified`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="pipe-grates"
      aria-label="Culvert Pipe Grates Spotlight"
      className="py-16 sm:py-20 bg-white text-[#0082FC] border-b-4 border-[#0082FC] relative overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0082fc0a_1px,transparent_1px),linear-gradient(to_bottom,#0082fc0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5FD4FD]/20 text-[#0082FC] text-xs font-black uppercase tracking-widest border border-[#0082FC] mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
            <span>
              SECTION 2: END-OF-PIPE &amp; ROADSIDE TRAVERSABLE SAFETY GRATES
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#0082FC] mb-2">
            Culvert Safety Pipe Grates
          </h2>

          <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium leading-relaxed">
            Engineered for circular RCP, CMP, and flared concrete end walls.
            Protects culverts against debris clogs and animal intrusion while
            delivering AASHTO traversable roadside safety across 3:1 to 6:1
            slopes.
          </p>
        </div>

        {/* Subvariant Switcher Bar */}
        <div className="bg-[#5FD4FD]/10 border-2 border-[#5FD4FD] p-3 sm:p-4 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#0082FC] flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Culvert Pipe Grate Model:</span>
            </span>
            <span className="text-[10px] font-bold text-[#0082FC]/70 uppercase">
              {PIPE_GRATE_VARIANTS.length} Real Heavy Fabrications Available
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PIPE_GRATE_VARIANTS.map((variant) => {
              const isActive = activeVariant.id === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => handleSelectVariant(variant)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#0082FC] text-white border-[#0082FC] shadow-md scale-102"
                      : "bg-white text-[#0082FC] border-[#5FD4FD] hover:border-[#0082FC] hover:bg-[#5FD4FD]/10"
                  }`}
                >
                  {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  <span>{variant.tag.split(" ")[0]} GRATE</span>
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
            {/* Left 6 Cols: Real Photography Showcase & Interactive Gallery */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Header Ribbon */}
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#0082FC] text-white px-2 py-0.5 border border-[#0082FC] flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-white" />
                  <span>Real Manufactured Pipe Grate Photography</span>
                </span>

                <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase">
                  Photo {activePhotoIndex + 1} of {REAL_PIPE_GRATE_PHOTOS.length}
                </span>
              </div>

              {/* Main Real Product Photography Display Viewport */}
              <div className="relative w-full h-80 sm:h-96 bg-slate-950 border-2 border-[#0082FC] overflow-hidden flex items-center justify-center group shadow-inner">
                {/* Real High-Resolution Photo */}
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Corner Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
                  <span className="bg-[#0082FC] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider border border-white/50 shadow-md">
                    {currentPhoto.badge}
                  </span>
                  <span className="bg-black/80 backdrop-blur-xs text-[#5FD4FD] px-2 py-0.5 text-[9px] font-mono font-bold border border-[#5FD4FD]/50">
                    Pattern: {activeVariant.catNumber}
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 bg-white/95 text-[#0082FC] px-2 py-0.5 text-[9px] font-bold border border-[#0082FC] shadow-sm pointer-events-none">
                  ASTM A36 Heavy Steel
                </div>
              </div>

              {/* Real Photo Caption Bar */}
              <div className="w-full bg-[#5FD4FD]/15 border-2 border-[#5FD4FD] p-2 mt-2 text-left">
                <p className="text-[11px] text-[#0082FC] font-semibold leading-tight">
                  <span className="font-black uppercase text-[#0082FC] mr-1.5">
                    {currentPhoto.title}:
                  </span>
                  {currentPhoto.caption}
                </p>
              </div>

              {/* 3 Real Photography Thumbnail Selector Gallery */}
              <div className="w-full grid grid-cols-3 gap-2 mt-3">
                {REAL_PIPE_GRATE_PHOTOS.map((photo, idx) => {
                  const isSelected = activePhotoIndex === idx;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative h-20 sm:h-22 bg-slate-900 border-2 transition-all p-1 flex flex-col items-center justify-between cursor-pointer overflow-hidden ${
                        isSelected
                          ? "border-[#0082FC] ring-2 ring-[#0082FC] scale-102 bg-white"
                          : "border-slate-300 hover:border-[#0082FC] opacity-80 hover:opacity-100"
                      }`}
                      title={photo.title}
                    >
                      <div className="relative w-full flex-1">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-contain p-0.5"
                          sizes="150px"
                        />
                      </div>
                      <span
                        className={`text-[8px] font-bold uppercase truncate w-full text-center mt-0.5 px-0.5 ${
                          isSelected
                            ? "bg-[#0082FC] text-white"
                            : "bg-slate-800 text-white/90"
                        }`}
                      >
                        {photo.badge.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
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
                    ASTM A123 HOT-DIP GALVANIZED
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
                      Pipe Compatibility:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.pipeFit}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Hydraulic Intake Efficiency:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.dimensions.flowArea}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Steel Bar Grid Spec:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.material}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Hinge &amp; Latch Mechanism:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.cleanoutType}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Galvanizing Standard:
                    </span>
                    <span className="font-black text-[#0082FC]">
                      {activeVariant.coating}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                      Roadside Safety Standards:
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
