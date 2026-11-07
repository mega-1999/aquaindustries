"use client";

import {
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
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
    src: "/images/pipe_GRATE/NON_SIFTING.15.png",
    alt: "Aqua Non-Sifting ADA Compliant Heel-Proof Pipe Grate",
    title: "Model NS-15 Non-Sifting ADA Pipe Grate",
    badge: "ADA COMPLIANT 1/4\" SLOTS",
    shortTag: "NON-SIFTING",
    caption:
      "Non-sifting slotted profile engineered for high-pedestrian civil culvert intakes, preventing heel entrapment while maintaining maximum hydraulic inflow.",
  },
  {
    id: "pipe-grate-photo-2",
    src: "/images/pipe_GRATE/4x24.1.png",
    alt: "Aqua 4x24 Heavy-Duty Linear Trench & Culvert Drop Grate",
    title: "Model 4x24 Linear Culvert Drainage Grate",
    badge: "HEAVY TRAFFIC CLASS D",
    shortTag: "4x24 LINEAR",
    caption:
      "High-load cast iron linear drainage grate engineered for culvert drop inlets, roadside flumes, and heavy municipal stormwater trenches.",
  },
];

const PIPE_GRATE_VARIANTS = [
  {
    id: "pg-ns-15-ada",
    catNumber: "Cat. PG-NS-15",
    name: "Model NS-15 Non-Sifting ADA Heel-Proof Pipe Safety Grate",
    tag: "NS-15 ADA HEEL-PROOF",
    sizeLabel: '48" x 48" / 60" x 60" Square & Round Options',
    pipeFit: "Pedestrian Concourse Culverts, Catch Basins & High-Traffic Plazas",
    dimensions: {
      height: '48.00" Square',
      width: '16.00" Opening',
      depth: '1.75" Flange',
      weightLbs: 310,
      flowArea: "1/4\" Max ADA Non-Sifting Slots",
    },
    material: "ASTM A536 Grade 65-45-12 High-Ductility Iron",
    coating: "Black Bituminous Eco-Coat or Natural Weathering Patina",
    cleanoutType: "Quick-Release Bolt-Down Security Clips",
    trafficRating: "Pedestrian Safe ADA & Heavy Maintenance Vehicle Rated",
    standards: "ADA Standards Section 302.3 • ASTM A536 • AASHTO H-15/H-20",
    description:
      "Architectural non-sifting pipe safety grate engineered specifically with narrow 1/4\" maximum slot dimensions. Prevents pedestrian shoe heel entrapment and debris passage while sustaining rapid stormwater inflow.",
    photoUrl: "/images/pipe_GRATE/NON_SIFTING.15.png",
    photoIndex: 0,
  },
  {
    id: "pg-4x24-lin",
    catNumber: "Cat. PG-4x24",
    name: '4" x 24" Heavy-Duty Linear Culvert Drop Trench Grate',
    tag: '4x24 LINEAR TRENCH',
    sizeLabel: '4.00" W x 24.00" L Segment',
    pipeFit: 'Roadside Culvert Flumes, Swale Drop Inlets & Concrete Trenches',
    dimensions: {
      height: '24.00" L',
      width: '4.00" W',
      depth: '1.50" H',
      weightLbs: 34,
      flowArea: "68% Free Flow Bar Area",
    },
    material: "ASTM A536 80-55-06 Ductile Iron / Class 35B Cast Iron",
    coating: "Hot-Dip Galvanized per ASTM A123 or Black Bituminous",
    cleanoutType: "Individual Drop-In Modular Interlock with Security Hold-Downs",
    trafficRating: "AASHTO H-25 / FAA Airport Heavy Wheel Load Rated",
    standards: "ASTM A536 • AASHTO M306 Class D • DOT Approved Trench Specs",
    description:
      'Heavy transverse bar channel grate manufactured for continuous trench drains, roadside drainage channels, and highway culvert inlet aprons. Withstands repetitive high-speed wheel impacts without displacement.',
    photoUrl: "/images/pipe_GRATE/4x24.1.png",
    photoIndex: 1,
  },
];

export const CulvertPipeGratesSpotlight: React.FC<
  CulvertPipeGratesSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [activeVariantId, setActiveVariantId] = useState<string>("pg-ns-15-ada");
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

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) =>
      prev === 0 ? REAL_PIPE_GRATE_PHOTOS.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) =>
      prev === REAL_PIPE_GRATE_PHOTOS.length - 1 ? 0 : prev + 1
    );
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
        submittalFile: "SUBMITTAL_PIPE_GRATES.PDF",
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
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Fit: ${activeVariant.pipeFit}`,
          `Assembly: ${activeVariant.cleanoutType}`,
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
        submittalFile: "SUBMITTAL_PIPE_GRATES.PDF",
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
          `Weight: ${activeVariant.dimensions.weightLbs} lbs • Fit: ${activeVariant.pipeFit}`,
          `Assembly: ${activeVariant.cleanoutType}`,
          `Standards: ${activeVariant.standards}`,
        ],
        imageUrl: activeVariant.photoUrl,
        aisCompliant: true,
        buyAmericaReady: true,
      });
    }
  };

  const handleCopySpecs = () => {
    const text = `AQUA INDUSTRIES CULVERT & PIPE GRATE SPECIFICATION
Model: ${activeVariant.name} (${activeVariant.catNumber})
Fit / Application: ${activeVariant.pipeFit}
Clear Infiltration Area: ${activeVariant.dimensions.flowArea}
Weight: ${activeVariant.dimensions.weightLbs} lbs (Dimensions: ${activeVariant.dimensions.height} x ${activeVariant.dimensions.width} x ${activeVariant.dimensions.depth})
Material Specification: ${activeVariant.material}
Coating: ${activeVariant.coating}
Fastening & Cleanout: ${activeVariant.cleanoutType}
Load Rating: ${activeVariant.trafficRating}
Standards: ${activeVariant.standards}
100% Domestic AIS / Buy America Certified`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="pipe-grates"
      aria-label="Culvert and Pipe Grates Spotlight"
      className="py-16 sm:py-20 bg-white text-[#3087ff] border-b-4 border-[#3087ff] relative overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3087ff0a_1px,transparent_1px),linear-gradient(to_bottom,#3087ff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#3087ff] text-xs font-black uppercase tracking-widest border border-[#3087ff] mb-3">
            <ShieldCheck className="w-4 h-4 text-[#3087ff]" />
            <span>
              SECTION 2: END-OF-PIPE &amp; CULVERT SAFETY GRATES
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#3087ff] mb-2">
            Pipe Grates
          </h2>

          <p className="text-xs sm:text-sm text-[#3087ff] font-medium leading-relaxed">
            Engineered for circular pipe outfalls, stormwater risers, roadside
            trenches, and civil drainage vaults. Manufactured in heavy-duty
            ASTM A536 ductile iron and ASTM A48 gray iron with AASHTO H-20 and
            ADA heel-proof compliance.
          </p>
        </div>

        {/* Subvariant Switcher Bar */}
        <div className="bg-white border-2 border-[#3087ff] p-3 sm:p-4 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#3087ff] flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Pipe Grate Configuration:</span>
            </span>
            <span className="text-[10px] font-bold text-[#3087ff] uppercase">
              {PIPE_GRATE_VARIANTS.length} Cast Patterns Available
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
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center gap-2 cursor-pointer ${isActive
                      ? "bg-[#3087ff] text-white border-[#3087ff] shadow-md scale-102"
                      : "bg-white text-[#3087ff] border-[#3087ff] hover:border-[#3087ff] hover:bg-[#3087ff] hover:text-white"
                    }`}
                >
                  {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  <span>{variant.tag}</span>
                  <span
                    className={`text-[9px] font-mono px-1 py-0.2 border ${isActive
                        ? "bg-white/20 border-white text-white"
                        : "bg-white border-[#3087ff] text-[#3087ff]"
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
        <div className="bg-white text-[#3087ff] border-4 border-[#3087ff] p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: Real Photography Showcase & Interactive Gallery */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Header Ribbon */}
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#3087ff] text-white px-2 py-0.5 border border-[#3087ff] flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-white" />
                  <span>Real Pipe Grate Photography ({REAL_PIPE_GRATE_PHOTOS.length} Views)</span>
                </span>

                <span className="text-[10px] font-bold text-[#3087ff] uppercase">
                  Photo {activePhotoIndex + 1} of {REAL_PIPE_GRATE_PHOTOS.length}
                </span>
              </div>

              {/* Main Real Product Photography Display Viewport */}
              <div className="relative w-full h-80 sm:h-96 bg-slate-950 border-2 border-[#3087ff] overflow-hidden flex items-center justify-center group shadow-inner">
                {/* Real High-Resolution Photo */}
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Left/Right Quick Arrows */}
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#3087ff] text-white p-1.5 border border-white/40 transition-colors z-20 cursor-pointer"
                  title="Previous Photo"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#3087ff] text-white p-1.5 border border-white/40 transition-colors z-20 cursor-pointer"
                  title="Next Photo"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Corner Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
                  <span className="bg-[#3087ff] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider border border-white/50 shadow-md">
                    {currentPhoto.badge}
                  </span>
                  <span className="bg-black/80 backdrop-blur-xs text-[#3087ff] px-2 py-0.5 text-[9px] font-mono font-bold border border-[#3087ff]">
                    Pattern: {activeVariant.catNumber}
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 bg-white/95 text-[#3087ff] px-2 py-0.5 text-[9px] font-bold border border-[#3087ff] shadow-sm pointer-events-none">
                  100% Real Heavy Casting
                </div>
              </div>

              {/* Real Photo Caption Bar */}
              <div className="w-full bg-white border-2 border-[#3087ff] p-2 mt-2 text-left">
                <p className="text-[11px] text-[#3087ff] font-semibold leading-tight">
                  <span className="font-black uppercase text-[#3087ff] mr-1.5">
                    {currentPhoto.title}:
                  </span>
                  {currentPhoto.caption}
                </p>
              </div>

              {/* 7 Real Photography Thumbnail Selector Gallery */}
              <div className="w-full grid grid-cols-4 sm:grid-cols-7 gap-1.5 mt-3">
                {REAL_PIPE_GRATE_PHOTOS.map((photo, idx) => {
                  const isSelected = activePhotoIndex === idx;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative h-16 bg-slate-900 border-2 transition-all p-0.5 flex flex-col items-center justify-between cursor-pointer overflow-hidden ${isSelected
                          ? "border-[#3087ff] ring-2 ring-[#3087ff] scale-105 bg-white z-10"
                          : "border-slate-300 hover:border-[#3087ff] opacity-75 hover:opacity-100"
                        }`}
                      title={photo.title}
                    >
                      <div className="relative w-full flex-1">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-contain p-0.5"
                          sizes="100px"
                        />
                      </div>
                      <span
                        className={`text-[7px] font-black uppercase truncate w-full text-center mt-0.5 px-0.5 ${isSelected
                            ? "bg-[#3087ff] text-white"
                            : "bg-slate-800 text-white/90"
                          }`}
                      >
                        {photo.shortTag}
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
                  <span className="bg-[#3087ff] text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    {activeVariant.tag}
                  </span>
                  <span className="bg-white border border-[#3087ff] text-[#3087ff] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    {activeVariant.catNumber}
                  </span>
                  <span className="text-[10px] font-bold text-[#3087ff] uppercase">
                    ASTM A536 / A48 HEAVY CASTING
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#3087ff] leading-snug mb-2">
                  {activeVariant.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#3087ff] font-medium leading-relaxed mb-4">
                  {activeVariant.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs border-y-2 border-[#3087ff] py-3 mb-4">
                  <div>
                    <span className="font-bold text-[#3087ff] uppercase text-[10px] block">
                      Application / Fit:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.pipeFit}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff] uppercase text-[10px] block">
                      Hydraulic Intake Efficiency:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.dimensions.flowArea}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff] uppercase text-[10px] block">
                      Metallurgical Grade:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.material}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff] uppercase text-[10px] block">
                      Load / Traffic Rating:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.trafficRating}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff] uppercase text-[10px] block">
                      Dimensions &amp; Unit Weight:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.dimensions.height} • {activeVariant.dimensions.weightLbs} lbs
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff] uppercase text-[10px] block">
                      Standard Compliance:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.standards}
                    </span>
                  </div>
                </div>

                {/* Engineering Advantage Highlights */}
                <div className="bg-white border border-[#3087ff] p-3 mb-6">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#3087ff] mb-1.5">
                    Municipal &amp; Civil Engineering Advantages:
                  </div>
                  <ul className="text-xs text-[#3087ff] space-y-1">
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#3087ff] font-black">✓</span>
                      <span>
                        <strong>True Heavy Cast Ductile &amp; Gray Iron:</strong> Superior tensile &amp; impact resistance compared to fabricated sheet-metal products.
                      </span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#3087ff] font-black">✓</span>
                      <span>
                        <strong>ADA Section 302.3 Compliant:</strong> Heel-proof 1/4\" narrow slots available on NS-15 models for zero pedestrian hazard over pipe intakes.
                      </span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#3087ff] font-black">✓</span>
                      <span>
                        <strong>Modular Split Ring Architecture:</strong> Matched two-piece halves install quickly over pre-existing culvert risers and catch basins.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t-2 border-[#3087ff]">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 text-xs font-black uppercase tracking-wider border-2 transition-all flex items-center justify-center gap-2 cursor-pointer ${added
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-[#3087ff] text-white border-[#3087ff] hover:bg-[#3087ff] hover:text-white shadow-md"
                    }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>ADDED TO RFQ CART</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 stroke-[3]" />
                      <span>ADD {activeVariant.catNumber} TO RFQ</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSubmittal}
                  className="py-3 px-4 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] hover:bg-[#3087ff] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>SUBMITTAL PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySpecs}
                  className="py-3 px-3 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] hover:border-[#3087ff] hover:bg-[#3087ff] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  title="Copy Engineering Spec Text"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">
                    {copied ? "COPIED" : "SPECS"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CulvertPipeGratesSpotlight;
