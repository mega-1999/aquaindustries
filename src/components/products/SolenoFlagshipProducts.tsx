"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Layers,
  Plus,
  ShieldCheck,
} from "lucide-react";
import React, { useState } from "react";
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

  // Match the 3 genuine flagship products from the catalog
  const flagshipItems = [
    {
      product: PRODUCTS_CATALOG[0], // AWWA C153 Compact MJ Fittings
      label: "C153 Compact MJ Fittings",
      sublabel: "AWWA C153 & C110 Ductile Iron",
      summary:
        "High-strength ASTM A536 Grade 65-45-12 compact mechanical joint fittings. 350 PSI rated with double cement mortar lining per AWWA C104 for potable distribution.",
      specs: [
        '2" to 64" Diameter Range',
        "350 PSI Working Pressure",
        "NSF/ANSI 61 Lead-Free Certified",
      ],
      tag: "CORE DISTRIBUTION",
    },
    {
      product: PRODUCTS_CATALOG[1], // The Century Curb Box
      label: "The Century Curb Box",
      sublabel: "AASHTO H-20 Heavy Highway Traffic",
      summary:
        'The century-tested municipal standard. Telescopic 18" to 72" sliding frost-heave adjustment, heavy ASTM A48 Class 35B casting, and vandal-proof pentagon locking.',
      specs: [
        "AASHTO H-20 40,000 LB Proof",
        '18" - 72" Telescopic Bury',
        "Brass Pentagon Lock Plug",
      ],
      tag: "HIGHWAY TRAFFIC",
    },
    {
      product: PRODUCTS_CATALOG[2], // Series 3000 Cam-Action Restraint
      label: "Series 3000 Cam Restraint",
      sublabel: "Concrete-Free Mechanical Joint Restraint",
      summary:
        "Eliminates concrete thrust blocks. Heat-treated ductile iron cam wedges bite radially into pipe proportionally to pressure surges. Factory torque-off breakaway hex heads.",
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
      className="py-16 sm:py-24 bg-[#0082FC] text-white border-t-4 border-[#5FD4FD] border-b-4 border-[#5FD4FD] relative overflow-hidden"
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
        {/* Section Header: Soleno other_drainage Editorial Style */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#5FD4FD]">
            <Layers className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>Engineered Waterworks Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Our Flagship <span className="text-[#5FD4FD]">Products</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
            Manufactured and proof-tested to exceed AWWA, ASTM, and AASHTO
            specifications. Certified Mill Test Reports (MTRs) and traceable
            heat numbers provided with every shipment from our Melville, NY
            foundry and stocking logistics hubs.
          </p>
        </div>

        {/* 3-Column Soleno-Style Card Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flagshipItems.map((item) => {
            const isAdded = addedIds[item.product.id];
            return (
              <div
                key={item.product.id}
                className="bg-white border-4 border-[#5FD4FD] rounded-none p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-white transition-all duration-300 group hover:-translate-y-1.5 relative text-[#0082FC]"
              >
                {/* Top Category Tag */}
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#0082FC]/15 pb-3">
                  <span className="text-[11px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2.5 py-0.5 border border-[#0082FC]">
                    {item.tag}
                  </span>
                  <span className="text-xs font-bold text-[#0082FC]/80 uppercase">
                    Melville, NY Stock
                  </span>
                </div>

                {/* Centered Large High-Resolution Product Image */}
                <div className="relative w-full h-56 sm:h-64 flex items-center justify-center p-4 overflow-hidden my-2">
                  <img
                    src={item.product.imageUrl}
                    alt={item.label}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Block */}
                <div className="mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0082FC] group-hover:text-[#0082FC] leading-tight mb-1">
                      {item.label}
                    </h3>

                    <p className="text-xs font-bold text-[#0082FC]/75 uppercase tracking-wider mb-3">
                      {item.sublabel}
                    </p>

                    <p className="text-xs sm:text-sm text-[#0082FC]/90 font-normal leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Bullet Specs */}
                    <div className="space-y-1.5 border-t border-[#0082FC]/15 pt-3 mb-6">
                      {item.specs.map((spec) => (
                        <div
                          key={spec}
                          className="flex items-center gap-2 text-xs font-bold text-[#0082FC]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="space-y-2 pt-2 border-t-2 border-[#0082FC]/15">
                    <button
                      type="button"
                      onClick={() => handleAdd(item.product)}
                      className={`w-full py-2.5 px-3 text-xs sm:text-sm font-black uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border-2 ${
                        isAdded
                          ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                          : "bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-[#0082FC] shadow-sm"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Added to Quote List</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                          <span>+ Add to Commercial Quote</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onPreviewSubmittal(item.product)}
                      className="w-full py-2.5 px-3 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none border-2 border-[#0082FC] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Download Cut Sheet PDF</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
