"use client";

import { Check, Download, FileText, Layers, Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";

interface ProductCatalogMatrixProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  selectedCategory?: string;
}

export const ProductCatalogMatrix: React.FC<ProductCatalogMatrixProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
  selectedCategory = "all",
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCategory);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: "all", label: "All Waterworks Products" },
    { id: "waterworks", label: "Ductile Iron Fittings" },
    { id: "restraints", label: "Joint Restraints" },
    { id: "castings", label: "Municipal Castings" },
    { id: "saddles", label: "Repair Clamps & Saddles" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS_CATALOG
      : PRODUCTS_CATALOG.filter((p) => p.category === activeTab);

  const handleAddProduct = (product: ProductItem) => {
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  const getProductSvgIcon = (category: string) => {
    switch (category) {
      case "waterworks":
        return (
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-[#0082FC]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <title>AWWA Compact Fitting Drawing</title>
            <path
              d="M 20,20 L 50,20 C 70,20 80,30 80,50 L 80,80"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="20" cy="20" r="16" strokeWidth="6" />
            <circle cx="80" cy="80" r="16" strokeWidth="6" />
            <circle cx="20" cy="20" r="4" fill="#5FD4FD" />
            <circle cx="80" cy="80" r="4" fill="#5FD4FD" />
          </svg>
        );
      case "restraints":
        return (
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-[#0082FC]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <title>Wedge Restraint Gland Drawing</title>
            <circle
              cx="50"
              cy="50"
              r="36"
              strokeWidth="10"
              strokeDasharray="14 8"
            />
            <circle cx="50" cy="50" r="22" strokeWidth="6" />
            <rect x="44" y="6" width="12" height="14" rx="2" fill="#5FD4FD" />
            <rect x="44" y="80" width="12" height="14" rx="2" fill="#5FD4FD" />
            <rect x="6" y="44" width="14" height="12" rx="2" fill="#5FD4FD" />
            <rect x="80" y="44" width="14" height="12" rx="2" fill="#5FD4FD" />
          </svg>
        );
      case "castings":
        return (
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-[#0082FC]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <title>Municipal Street Manhole Casting</title>
            <circle cx="50" cy="50" r="40" strokeWidth="8" />
            <circle cx="50" cy="50" r="30" strokeWidth="4" />
            <line x1="20" y1="50" x2="80" y2="50" strokeWidth="4" />
            <line x1="50" y1="20" x2="50" y2="80" strokeWidth="4" />
            <line x1="28" y1="28" x2="72" y2="72" strokeWidth="3" />
            <line x1="28" y1="72" x2="72" y2="28" strokeWidth="3" />
          </svg>
        );
      default:
        return (
          <svg
            aria-hidden="true"
            className="w-24 h-24 text-[#0082FC]"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <title>Tapping Saddle and Pipe Coupling</title>
            <circle cx="50" cy="50" r="32" strokeWidth="8" />
            <rect x="38" y="10" width="24" height="80" rx="4" strokeWidth="6" />
            <circle cx="50" cy="20" r="5" fill="#5FD4FD" />
          </svg>
        );
    }
  };

  return (
    <section
      id="product-matrix"
      aria-label="Aqua Industries Waterworks Product Showcase"
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#5FD4FD]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] text-xs font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#0082FC]" />
              <span className="whitespace-nowrap">
                Complete Municipal Piping Inventory
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0082FC] tracking-tight leading-tight">
              Product Showcase Grid
            </h2>
            <p className="mt-2 text-[#0082FC] text-sm max-w-2xl leading-relaxed">
              Standardized American waterworks castings, wedge joint restraints,
              and municipal castings engineered to AWWA, ASTM, and AASHTO
              specifications.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs text-[#0082FC] font-semibold bg-white border border-[#5FD4FD] px-3 py-1.5 rounded-none">
              Showing {filteredProducts.length} Product Lines in Catalog
            </span>
          </div>
        </div>

        {/* Category Filter Tabs (Single-Line Rule: whitespace-nowrap) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-none text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 border-2 ${
                activeTab === tab.id
                  ? "bg-[#0082FC] text-white border-[#0082FC] shadow-md"
                  : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
              }`}
            >
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedIds[product.id];
            return (
              <div
                key={product.id}
                className="bg-white border-2 border-[#5FD4FD] rounded-none overflow-hidden shadow-sm hover:border-[#0082FC] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Visual Header / Clean Engineering Schematic */}
                <div className="relative h-52 bg-white border-b-2 border-[#5FD4FD] flex items-center justify-center p-6 overflow-hidden">
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                    {getProductSvgIcon(product.category)}
                  </div>

                  {/* Single-Line Badges on Top Corners */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
                    <span className="px-2.5 py-0.5 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD] text-[10px] font-bold whitespace-nowrap shadow-sm">
                      {product.standard}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD] text-[10px] font-bold whitespace-nowrap shadow-sm">
                      {product.pressureRating.split("(")[0].trim()}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-20">
                    {product.aisCompliant && (
                      <span className="px-2 py-0.5 rounded-none bg-white text-[#0082FC] border-2 border-[#5FD4FD] text-[10px] font-bold whitespace-nowrap shadow-sm">
                        AIS Certified
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#0082FC] mb-1">
                      {product.jointType} &bull; {product.diameterRange}
                    </div>
                    <h3 className="font-bold text-[#0082FC] text-base leading-snug mb-2 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#0082FC] leading-relaxed mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 mb-5 border-t border-[#5FD4FD]/30 pt-3">
                      {product.keyFeatures.slice(0, 2).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-[11px] text-[#0082FC]"
                        >
                          <span className="w-1.5 h-1.5 rounded-none bg-[#5FD4FD] shrink-0 mt-1.5" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: "Download Spec Sheet" | "Add to Quote List" */}
                  <div className="pt-4 border-t border-[#5FD4FD]/30 space-y-2">
                    <button
                      type="button"
                      onClick={() => onPreviewSubmittal(product)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] text-xs font-bold rounded-none border-2 border-[#0082FC] transition-colors whitespace-nowrap"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#0082FC]" />
                      <span className="whitespace-nowrap">
                        Download Spec Sheet
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddProduct(product)}
                      className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-none text-xs font-bold transition-all whitespace-nowrap border-2 ${
                        isAdded
                          ? "bg-[#5FD4FD] text-[#0082FC] border-[#5FD4FD]"
                          : "bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white border-[#0082FC] shadow-md"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span className="whitespace-nowrap">
                            Added to Quote List
                          </span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                          <span className="whitespace-nowrap">
                            Add to Quote List
                          </span>
                        </>
                      )}
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
