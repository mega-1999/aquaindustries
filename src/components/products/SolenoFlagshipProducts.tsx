"use client";

import {
  Check,
  CheckCircle2,
  FileText,
  Grid2X2,
  Layers,
  LayoutGrid,
  Plus,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";

interface SolenoFlagshipProductsProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

export const SolenoFlagshipProducts: React.FC<SolenoFlagshipProductsProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
}) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [layoutMode, setLayoutMode] = useState<"split" | "compact">("split");

  // Match the genuine flagship products from the catalog with their exact photographs
  const flagshipItems = [
    {
      product: PRODUCTS_CATALOG[0], // Municipal Water Sampling Station (id: water-sampling-station)
      label: "Municipal Sampling Station",
      sublabel: "ANSI/NSF 61 Sanitary Potable Compliance",
      image: "/images/our-images/sampling-station.png",
      summary:
        "Dedicated non-contaminated water testing point for EPA Lead & Copper Rule compliance with freeze-proof thermal core and padlock shroud.",
      specs: [
        '1" NPT Mainline Inlet',
        "300 PSI Working Pressure",
        "-20°F Thermal Frost Jacket",
      ],
      tag: "EPA COMPLIANCE",
    },
    {
      product: PRODUCTS_CATALOG[3], // C153 Compact MJ Fittings (id: c153-compact-mj-fittings)
      label: "C153 Compact MJ Fittings",
      sublabel: "AWWA C153 & C110 Ductile Iron",
      image: "/images/our-images/MJ_Fittings.jpeg",
      summary:
        "High-strength ASTM A536 Grade 65-45-12 compact mechanical joint fittings. 350 PSI rated with double cement mortar lining per AWWA C104.",
      specs: [
        '2" to 64" Diameter Range',
        "350 PSI Working Pressure",
        "NSF/ANSI 61 Lead-Free Certified",
      ],
      tag: "CORE DISTRIBUTION",
    },
    {
      product: PRODUCTS_CATALOG[1], // The Century Curb Box (id: century-curb-box)
      label: "The Century Curb Box",
      sublabel: "AASHTO H-20 Heavy Highway Traffic",
      image: "/images/our-images/curb-box-ultimate.png",
      summary:
        'The century-tested municipal standard. Telescopic 18" to 72" sliding frost-heave adjustment, heavy Class 35B casting, and vandal-proof pentagon locking.',
      specs: [
        "AASHTO H-20 40,000 LB Proof",
        '18" - 72" Telescopic Bury',
        "Brass Pentagon Lock Plug",
      ],
      tag: "HIGHWAY TRAFFIC",
    },
    {
      product: PRODUCTS_CATALOG[2], // Series 3000 Cam Restraint (id: series-3000-wedge-restraint)
      label: "Series 3000 Cam Restraint",
      sublabel: "Concrete-Free Mechanical Joint Restraint",
      image: "/images/products/Joint-Restraints.jpg",
      summary:
        "Eliminates concrete thrust blocks. Heat-treated ductile iron cam wedges bite radially into pipe proportionally to pressure surges.",
      specs: [
        "UL Listed & FM Approved",
        "350 PSI Continuous Rating",
        "Breakaway Torque-Head Bolts",
      ],
      tag: "JOINT RESTRAINT",
    },
  ];

  const handleAdd = (product: ProductItem) => {
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <section
      aria-label="Flagship Engineered Waterworks Products"
      className="py-14 sm:py-20 bg-[#0082FC] text-white border-t-4 border-[#5FD4FD] border-b-4 border-[#5FD4FD] relative overflow-hidden"
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#5FD4FD]">
            <Layers className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>Engineered Waterworks Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Our Flagship <span className="text-[#5FD4FD]">Products</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed mb-6">
            Manufactured and proof-tested to exceed AWWA, ASTM, and AASHTO
            specifications. Certified Mill Test Reports (MTRs) and traceable
            heat numbers provided with every shipment from our Melville, NY
            foundry and stocking logistics hubs.
          </p>

          {/* View Mode Toggle: 2x2 Landscape Spec Sheets vs 4-Column Compact */}
          <div className="inline-flex items-center p-1 bg-white border-2 border-[#5FD4FD] shadow-md">
            <button
              type="button"
              onClick={() => setLayoutMode("split")}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === "split"
                  ? "bg-[#0082FC] text-white shadow-xs"
                  : "text-[#0082FC] hover:bg-[#5FD4FD]/20"
              }`}
            >
              <Grid2X2 className="w-3.5 h-3.5" />
              <span>2x2 Spec Sheets</span>
            </button>
            <button
              type="button"
              onClick={() => setLayoutMode("compact")}
              className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === "compact"
                  ? "bg-[#0082FC] text-white shadow-xs"
                  : "text-[#0082FC] hover:bg-[#5FD4FD]/20"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>4-Column Row</span>
            </button>
          </div>
        </div>

        {/* Dynamic Responsive Layout Grid */}
        {layoutMode === "split" ? (
          /* 2x2 Balanced Landscape Specification Cards (Proportional, Never Long) */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {flagshipItems.map((item) => {
              const isAdded = addedIds[item.product.id];
              return (
                <div
                  key={item.product.id}
                  className="bg-white border-4 border-[#5FD4FD] rounded-none shadow-2xl hover:border-white transition-all duration-300 group hover:-translate-y-1 relative text-[#0082FC] flex flex-col sm:flex-row items-stretch"
                >
                  {/* Left: Product Image & Blueprint Frame */}
                  <div className="sm:w-44 lg:w-48 shrink-0 p-4 flex flex-col items-center justify-between bg-gradient-to-b from-[#5FD4FD]/10 to-transparent border-b-2 sm:border-b-0 sm:border-r-2 border-[#5FD4FD]/30">
                    <div className="w-full flex items-center justify-between mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2 py-0.5 border border-[#0082FC]">
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase">
                        In Stock
                      </span>
                    </div>

                    <div className="relative w-full h-32 sm:h-36 flex items-center justify-center p-2 overflow-hidden my-auto">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <span className="text-[10px] font-semibold text-[#0082FC]/70 uppercase tracking-wider mt-2">
                      Melville, NY Stock
                    </span>
                  </div>

                  {/* Right: Technical Specs & Action Row */}
                  <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0082FC] leading-tight mb-1">
                        {item.label}
                      </h3>
                      <p className="text-[11px] font-bold text-[#0082FC]/75 uppercase tracking-wider mb-2">
                        {item.sublabel}
                      </p>
                      <p className="text-xs text-[#0082FC]/90 font-normal leading-relaxed line-clamp-2 mb-3">
                        {item.summary}
                      </p>

                      {/* Technical Chip Specs */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.specs.map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0082FC] bg-[#5FD4FD]/15 border border-[#5FD4FD] px-2 py-0.5 rounded-none"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#0082FC] shrink-0" />
                            <span className="truncate">{spec}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action Row Side-by-Side */}
                    <div className="flex items-center gap-2 pt-2.5 border-t-2 border-[#0082FC]/15 mt-auto">
                      <button
                        type="button"
                        onClick={() => handleAdd(item.product)}
                        className={`flex-1 py-2 px-3 text-xs font-black uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border-2 ${
                          isAdded
                            ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                            : "bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-[#0082FC] shadow-sm"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>+ Add to Quote</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onPreviewSubmittal(item.product)}
                        title="Download Cut Sheet PDF"
                        className="py-2 px-3 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white text-xs font-bold uppercase tracking-wider rounded-none border-2 border-[#0082FC] transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Cut Sheet</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* 4-Column Compact Grid (Height Capped, Unified Horizontal Actions) */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {flagshipItems.map((item) => {
              const isAdded = addedIds[item.product.id];
              return (
                <div
                  key={item.product.id}
                  className="bg-white border-4 border-[#5FD4FD] rounded-none p-4 flex flex-col justify-between shadow-2xl hover:border-white transition-all duration-300 group hover:-translate-y-1 relative text-[#0082FC] h-full"
                >
                  <div>
                    {/* Top Category Tag */}
                    <div className="flex items-center justify-between mb-2.5 border-b-2 border-[#0082FC]/15 pb-2 min-h-[26px]">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2 py-0.5 border border-[#0082FC]">
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase">
                        In Stock
                      </span>
                    </div>

                    {/* Centered Compact Image */}
                    <div className="relative w-full h-32 sm:h-36 flex items-center justify-center p-2 overflow-hidden my-1 bg-gradient-to-b from-[#5FD4FD]/10 to-transparent border border-[#5FD4FD]/20">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Block */}
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#0082FC] leading-snug line-clamp-1 mt-2.5 mb-0.5">
                      {item.label}
                    </h3>

                    <p className="text-[10px] font-bold text-[#0082FC]/75 uppercase tracking-wider mb-2 truncate">
                      {item.sublabel}
                    </p>

                    <p className="text-xs text-[#0082FC]/90 font-normal leading-relaxed line-clamp-2 mb-2.5">
                      {item.summary}
                    </p>

                    {/* Technical Chip Specs */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1 text-[9px] font-bold text-[#0082FC] bg-[#5FD4FD]/15 border border-[#5FD4FD] px-1.5 py-0.5"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#0082FC] shrink-0" />
                          <span className="truncate">{spec}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Row Side-by-Side */}
                  <div className="flex items-center gap-1.5 pt-2.5 border-t-2 border-[#0082FC]/15 mt-auto">
                    <button
                      type="button"
                      onClick={() => handleAdd(item.product)}
                      className={`flex-1 py-2 px-2 text-[11px] font-black uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1 cursor-pointer border-2 ${
                        isAdded
                          ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                          : "bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-[#0082FC] shadow-sm"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3 stroke-[3]" />
                          <span className="truncate">Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span className="truncate">+ Add</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onPreviewSubmittal(item.product)}
                      title="Download Cut Sheet PDF"
                      className="py-2 px-2.5 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white text-[11px] font-bold uppercase rounded-none border-2 border-[#0082FC] transition-all flex items-center justify-center gap-1 cursor-pointer shrink-0"
                    >
                      <FileText className="w-3 h-3" />
                      <span className="hidden xl:inline">PDF</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
