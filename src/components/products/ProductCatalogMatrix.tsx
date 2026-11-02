"use client";

import {
  Check,
  ChevronDown,
  Download,
  FileText,
  Layers,
  Plus,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductCategory, ProductItem } from "../../types";

interface ProductCatalogMatrixProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  selectedCategory?: string;
}

const INITIAL_CARD_LIMIT = 6;
const LOAD_MORE_INCREMENT = 6;

export const ProductCatalogMatrix: React.FC<ProductCatalogMatrixProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
  selectedCategory = "all",
}) => {
  const [activeTab, setActiveTab] = useState<string>(selectedCategory);
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_CARD_LIMIT);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  // Sync tab with navigation category selections
  useEffect(() => {
    if (selectedCategory) {
      if (selectedCategory === "waterworks") {
        setActiveTab("fittings");
      } else if (selectedCategory === "castings") {
        setActiveTab("municipal-castings");
      } else {
        setActiveTab(selectedCategory);
      }
    }
  }, [selectedCategory]);

  // Reset visible card count to 6 whenever category changes
  useEffect(() => {
    setVisibleCount(INITIAL_CARD_LIMIT);
  }, [activeTab]);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "fittings", label: "Fittings (C153 & C110)" },
    { id: "restraints", label: "Joint Restraints" },
    { id: "accessories", label: "MJ Accessories & Adapters" },
    { id: "linings-coatings", label: "Linings & Coatings" },
    { id: "hydrants-flanges", label: "Hydrants & Flanges" },
    { id: "valve-meter-boxes", label: "Valve & Meter Boxes" },
    { id: "municipal-castings", label: "Municipal Castings" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? PRODUCTS_CATALOG
      : PRODUCTS_CATALOG.filter((p) => p.category === activeTab);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_INCREMENT, filteredProducts.length),
    );
  };

  const handleShowAll = () => {
    setVisibleCount(filteredProducts.length);
  };

  const handleCollapseToSix = () => {
    setVisibleCount(INITIAL_CARD_LIMIT);
    const el = document.getElementById("product-matrix");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleAddProduct = (product: ProductItem) => {
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <section
      id="product-matrix"
      aria-label="Aqua Industries Waterworks Product Showcase"
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#5FD4FD]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#0082FC]" />
              <span className="whitespace-nowrap">
                Complete Municipal Piping Inventory
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0082FC] tracking-tight leading-tight">
              Product Showcase Grid
            </h2>
            <p className="mt-1.5 text-[#0082FC]/90 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
              Standardized American waterworks castings, wedge joint restraints,
              linings, and municipal castings engineered to AWWA, ASTM, and
              AASHTO specifications.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs text-[#0082FC] font-bold bg-white border-2 border-[#5FD4FD] px-3.5 py-1.5 rounded-none whitespace-nowrap shadow-xs">
              Showing {Math.min(visibleCount, filteredProducts.length)} of{" "}
              {filteredProducts.length} Products
            </span>
          </div>
        </div>

        {/* Category Filter Tabs (Single-Line Rule: whitespace-nowrap) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {categories.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-none text-xs sm:text-sm font-bold transition-all whitespace-nowrap shrink-0 border-2 ${
                activeTab === tab.id
                  ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                  : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD] hover:text-[#0082FC]"
              }`}
            >
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Product Cards Grid (Displaying Initial 6 with Load More +6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => {
            const isAdded = addedIds[product.id];
            return (
              <div
                key={product.id}
                className="bg-white border-2 border-[#5FD4FD] rounded-none overflow-hidden shadow-sm hover:border-[#0082FC] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Card Top Metadata Ribbon (Separated from image, never overlapping) */}
                <div className="px-4 py-2 bg-white border-b border-[#5FD4FD]/40 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                    <span className="px-2 py-0.5 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD] text-[11px] font-bold whitespace-nowrap shadow-xs">
                      {product.standard}
                    </span>
                    {product.aisCompliant && (
                      <span className="px-1.5 py-0.5 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD] text-[10px] font-bold whitespace-nowrap">
                        AIS
                      </span>
                    )}
                  </div>

                  <div className="shrink-0">
                    <span className="px-2 py-0.5 rounded-none bg-[#5FD4FD]/20 text-[#0082FC] border border-[#0082FC]/30 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                      {product.pressureRating
                        .split("/")[0]
                        .split("(")[0]
                        .trim()
                        .slice(0, 18)}
                    </span>
                  </div>
                </div>

                {/* Dedicated Product Image Canvas: 100% Contained, Zero Overflow, Generous Padding */}
                <div className="relative w-full h-52 bg-white border-b-2 border-[#5FD4FD] flex items-center justify-center p-6 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105 block mx-auto select-none filter drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#0082FC]/80 mb-1 whitespace-nowrap truncate">
                      {product.jointType} &bull; {product.diameterRange}
                    </div>
                    <h3 className="font-black text-[#0082FC] text-base sm:text-lg uppercase leading-snug mb-2 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0082FC]/90 leading-relaxed mb-3 line-clamp-2 font-normal">
                      {product.description}
                    </p>

                    {/* Key Technical Parameters */}
                    <div className="grid grid-cols-2 gap-2 py-2.5 my-3 border-y border-[#5FD4FD]/40 text-[11px] font-bold text-[#0082FC]">
                      <div>
                        <span className="text-[#0082FC]/70 uppercase block text-[10px]">
                          Standard
                        </span>
                        <span className="truncate block">
                          {product.standard}
                        </span>
                      </div>
                      <div>
                        <span className="text-[#0082FC]/70 uppercase block text-[10px]">
                          Rating
                        </span>
                        <span className="truncate block">
                          {product.pressureRating.split("/")[0].trim()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: "Cut Sheet" | "+ Quote" */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => onPreviewSubmittal(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white text-xs font-bold uppercase tracking-wider rounded-none border-2 border-[#0082FC] transition-all whitespace-nowrap cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Cut Sheet</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddProduct(product)}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-none text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border-2 cursor-pointer ${
                        isAdded
                          ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                          : "bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white border-[#0082FC] shadow-xs"
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
                          <span>+ Quote</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Action Controls (When products are more than 6) */}
        {hasMore && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleLoadMore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC] font-bold text-sm rounded-none border-2 border-[#0082FC] transition-colors duration-150 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>Load More Products (+6)</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleShowAll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0082FC] hover:bg-[#0082FC] hover:text-white font-bold text-sm rounded-none border-2 border-[#0082FC] transition-colors duration-150 whitespace-nowrap cursor-pointer"
            >
              <span>Show All ({filteredProducts.length} Items)</span>
            </button>
          </div>
        )}

        {/* Collapse Option When All Cards Are Fully Loaded */}
        {!hasMore && filteredProducts.length > INITIAL_CARD_LIMIT && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-5 py-2.5 bg-white border-2 border-[#5FD4FD]">
              <span className="text-sm font-bold text-[#0082FC] whitespace-nowrap">
                All {filteredProducts.length} Products Displayed
              </span>
              <button
                type="button"
                onClick={handleCollapseToSix}
                className="text-sm font-bold text-[#0082FC] hover:text-[#5FD4FD] underline whitespace-nowrap"
              >
                Show First 6 Only
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
