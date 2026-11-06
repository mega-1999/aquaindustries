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

interface StormwaterTrashRacksSpotlightProps {
  onAddToRfq?: (product: ProductItem) => void;
  onPreviewSubmittal?: (product: ProductItem) => void;
}

const REAL_TRASH_RACK_PHOTOS = [
  {
    id: "photo-type-1",
    src: "/images/trash_racks/trash_rack_type_1.png",
    alt: "Heavy Structural Steel Pyramidal Anti-Vortex Trash Rack",
    title: '36" Pyramidal Anti-Vortex Trash Rack',
    badge: "100% REAL FABRICATION",
    caption:
      "Precision welded ASTM A36 structural angle & flat-bar pyramidal anti-vortex trash rack with removable apex cleanout hatch.",
  },
  {
    id: "photo-field-1",
    src: "/images/trash_racks/trash_racks1.jpg",
    alt: "Stormwater Retention Basin Riser Trash Rack Installation",
    title: "Retention Basin Field Structure",
    badge: "REAL JOB SITE INSTALLATION",
    caption:
      "Municipal retention pond riser structure fitted with hot-dip galvanized ASTM A123 heavy debris protection rack.",
  },
  {
    id: "photo-detail-2",
    src: "/images/trash_racks/trash_racks2.jpg",
    alt: "Structural Welded Bar Grid and Framing Detail",
    title: "Structural Bar Welded Assembly",
    badge: "ASTM A36 STRUCTURAL STEEL",
    caption:
      "Heavy solid steel flow-tapered bar screen layout engineered for 300%+ free open hydraulic area without clogging.",
  },
  {
    id: "photo-spillway-3",
    src: "/images/trash_racks/trash_racks3.jpg",
    alt: "Municipal Spillway Broad-Crested Overflow Trash Rack",
    title: "Spillway Heavy Overflow Barrier",
    badge: "USACE TR-55 / AASHTO COMPLIANT",
    caption:
      "High-capacity debris barrier protecting broad-crested concrete weir spillways from dynamic log and branch impacts.",
  },
];

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
    photoUrl: "/images/trash_racks/trash_rack_type_1.png",
    photoIndex: 0,
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
    photoUrl: "/images/trash_racks/trash_racks1.jpg",
    photoIndex: 1,
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
    photoUrl: "/images/trash_racks/trash_racks2.jpg",
    photoIndex: 2,
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
    photoUrl: "/images/trash_racks/trash_racks3.jpg",
    photoIndex: 3,
  },
];

export const StormwaterTrashRacksSpotlight: React.FC<
  StormwaterTrashRacksSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [activeVariantId, setActiveVariantId] = useState<string>("tr-vort-36");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [added, setAdded] = useState(false);
  const [copied, setCopied] = useState(false);

  const activeVariant =
    TRASH_RACK_VARIANTS.find((v) => v.id === activeVariantId) ||
    TRASH_RACK_VARIANTS[0];

  const currentPhoto =
    REAL_TRASH_RACK_PHOTOS[activePhotoIndex] || REAL_TRASH_RACK_PHOTOS[0];

  const handleSelectVariant = (variant: (typeof TRASH_RACK_VARIANTS)[0]) => {
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

  return (
    <section
      id="trash-racks"
      aria-label="Stormwater Trash Racks Spotlight"
      className="py-16 sm:py-20 bg-[#3087ff] text-white border-b-4 border-white relative overflow-hidden"
    >
      {/* Background CAD Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#3087ff] text-xs font-black uppercase tracking-widest border border-white mb-3">
            <ShieldCheck className="w-4 h-4 text-[#3087ff]" />
            <span>
              SECTION 3: STORMWATER DETENTION BASIN ANTI-VORTEX TRASH RACKS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-2">
            Trash Racks
          </h2>

          <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
            Eliminates high-velocity whirlpool cavitation while shedding large
            floating debris off stormwater retention riser structures. Maintains
            over 300% free open hydraulic area to ensure full design drawdown.
          </p>
        </div>

        {/* Subvariant Switcher Bar */}
        <div className="bg-white text-[#3087ff] border-2 border-white p-3 sm:p-4 mb-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-black uppercase tracking-wider flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Select Riser &amp; Weir Trash Rack Configuration:</span>
            </span>
            <span className="text-[10px] font-bold text-[#3087ff]/70 uppercase">
              {TRASH_RACK_VARIANTS.length} Real Manufactured Geometries
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {TRASH_RACK_VARIANTS.map((variant) => {
              const isActive = activeVariant.id === variant.id;
              return (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => handleSelectVariant(variant)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center gap-2 cursor-pointer ${isActive
                      ? "bg-[#3087ff] text-white border-[#3087ff] shadow-md scale-102"
                      : "bg-white text-[#3087ff] border-[#3087ff] hover:border-[#3087ff] hover:bg-[#3087ff]/10"
                    }`}
                >
                  {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  <span>{variant.tag.split(" ")[0]} RACK</span>
                  <span
                    className={`text-[9px] font-mono px-1 py-0.2 border ${isActive
                        ? "bg-white/20 border-white text-white"
                        : "bg-[#3087ff]/15 border-[#3087ff] text-[#3087ff]"
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
        <div className="bg-white text-[#3087ff] border-4 border-white p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 6 Cols: Real Photography Showcase & Gallery Strip */}
            <div className="lg:col-span-6 flex flex-col items-center">
              {/* Header Ribbon */}
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#3087ff]/20 text-[#3087ff] px-2 py-0.5 border border-[#3087ff] flex items-center gap-1.5">
                  <Camera className="w-3 h-3 text-[#3087ff]" />
                  <span>Real Manufactured Product Photography</span>
                </span>

                <span className="text-[10px] font-bold text-[#3087ff]/80 uppercase">
                  Photo {activePhotoIndex + 1} of {REAL_TRASH_RACK_PHOTOS.length}
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

                {/* Corner Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10 pointer-events-none">
                  <span className="bg-[#3087ff] text-white px-2 py-0.5 text-[9px] font-black uppercase tracking-wider border border-white/50 shadow-md">
                    {currentPhoto.badge}
                  </span>
                  <span className="bg-black/80 backdrop-blur-xs text-[#3087ff] px-2 py-0.5 text-[9px] font-mono font-bold border border-[#3087ff]/50">
                    Pattern: {activeVariant.catNumber}
                  </span>
                </div>

                <div className="absolute bottom-2 right-2 bg-white/95 text-[#3087ff] px-2 py-0.5 text-[9px] font-bold border border-[#3087ff] shadow-sm pointer-events-none">
                  {activeVariant.material.split(" ")[0]} Structural Steel
                </div>
              </div>

              {/* Real Photo Caption Bar */}
              <div className="w-full bg-[#3087ff]/15 border-2 border-[#3087ff] p-2 mt-2 text-left">
                <p className="text-[11px] text-[#3087ff] font-semibold leading-tight">
                  <span className="font-black uppercase text-[#3087ff] mr-1.5">
                    {currentPhoto.title}:
                  </span>
                  {currentPhoto.caption}
                </p>
              </div>

              {/* 4 Real Photography Thumbnail Selector Gallery */}
              <div className="w-full grid grid-cols-4 gap-2 mt-3">
                {REAL_TRASH_RACK_PHOTOS.map((photo, idx) => {
                  const isSelected = activePhotoIndex === idx;
                  return (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative h-18 sm:h-20 bg-slate-900 border-2 transition-all p-1 flex flex-col items-center justify-between cursor-pointer overflow-hidden ${isSelected
                          ? "border-[#3087ff] ring-2 ring-[#3087ff] scale-102 bg-white"
                          : "border-slate-300 hover:border-[#3087ff] opacity-80 hover:opacity-100"
                        }`}
                      title={photo.title}
                    >
                      <div className="relative w-full flex-1">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-contain p-0.5"
                          sizes="120px"
                        />
                      </div>
                      <span
                        className={`text-[8px] font-bold uppercase truncate w-full text-center mt-0.5 px-0.5 ${isSelected
                            ? "bg-[#3087ff] text-white"
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
                  <span className="bg-[#3087ff] text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    {activeVariant.tag}
                  </span>
                  <span className="bg-[#3087ff]/20 border border-[#3087ff] text-[#3087ff] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                    {activeVariant.catNumber}
                  </span>
                  <span className="text-[10px] font-bold text-[#3087ff]/80 uppercase">
                    EPA BMP / USACE TR-55
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#3087ff] leading-snug mb-2">
                  {activeVariant.name}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#3087ff]/90 font-medium leading-relaxed mb-4">
                  {activeVariant.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs border-y-2 border-[#3087ff]/20 py-3 mb-4">
                  <div>
                    <span className="font-bold text-[#3087ff]/70 uppercase text-[10px] block">
                      Riser / Weir Dimension:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.pipeFit}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff]/70 uppercase text-[10px] block">
                      Free Hydraulic Open Area:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.dimensions.flowArea}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff]/70 uppercase text-[10px] block">
                      Structural Metallurgy:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.material}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff]/70 uppercase text-[10px] block">
                      Hot-Dip Galvanizing:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.coating}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff]/70 uppercase text-[10px] block">
                      Debris Apex / Cleanout:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.cleanoutType}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#3087ff]/70 uppercase text-[10px] block">
                      Stormwater Design Standard:
                    </span>
                    <span className="font-black text-[#3087ff]">
                      {activeVariant.standards}
                    </span>
                  </div>
                </div>

                {/* Dimensions Metric Ribbon */}
                <div className="bg-[#3087ff]/10 border border-[#3087ff] p-2.5 mb-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-[#3087ff]">
                  <span>Height: {activeVariant.dimensions.height}</span>
                  <span>Width: {activeVariant.dimensions.width}</span>
                  <span>Depth: {activeVariant.dimensions.depth}</span>
                  <span className="text-[#3087ff]">
                    Weight: {activeVariant.dimensions.weightLbs} lbs
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAdd}
                  className={`flex-1 py-3 px-4 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${added
                      ? "bg-[#3087ff] text-white border-[#3087ff]"
                      : "bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white border-[#3087ff]"
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
                  className="py-3 px-4 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white border-2 border-[#3087ff] text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 shrink-0" />
                  <span>Submittal PDF</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySpecs}
                  title="Copy engineering specifications"
                  className="py-3 px-3 bg-[#3087ff]/20 hover:bg-[#3087ff] text-white hover:text-white border-2 border-[#3087ff] text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3] text-[#3087ff]" />
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
