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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] text-sm font-bold uppercase tracking-wider mb-3">
              <Layers className="w-4 h-4 text-[#0082FC]" />
              <span className="whitespace-nowrap">
                Complete Municipal Piping Inventory
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0082FC] tracking-tight leading-tight">
              Product Showcase Grid
            </h2>
            <p className="mt-2 text-[#0082FC] text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Standardized American waterworks castings, wedge joint restraints,
              linings, and municipal castings engineered to AWWA, ASTM, and
              AASHTO specifications.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-sm text-[#0082FC] font-bold bg-white border-2 border-[#5FD4FD] px-4 py-2 rounded-none whitespace-nowrap">
              Showing {Math.min(visibleCount, filteredProducts.length)} of{" "}
              {filteredProducts.length} Products
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
              className={`px-5 py-3 rounded-none text-sm sm:text-base font-bold transition-all whitespace-nowrap shrink-0 border-2 ${
                activeTab === tab.id
                  ? "bg-[#0082FC] text-white border-[#0082FC] shadow-md"
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
                {/* Visual Header / Authentic Product Photograph */}
                <div className="relative h-56 bg-white border-b-2 border-[#5FD4FD] flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Single-Line Badges on Top Corners */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-20">
                    <span className="px-3 py-1 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD] text-xs font-bold whitespace-nowrap shadow-sm">
                      {product.standard}
                    </span>
                    <span className="px-3 py-1 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD] text-xs font-bold whitespace-nowrap shadow-sm">
                      {product.pressureRating.split("(")[0].trim()}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 z-20">
                    {product.aisCompliant && (
                      <span className="px-2.5 py-1 rounded-none bg-white text-[#0082FC] border-2 border-[#5FD4FD] text-xs font-bold whitespace-nowrap shadow-sm">
                        AIS Certified
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-1.5 whitespace-nowrap truncate">
                      {product.jointType} &bull; {product.diameterRange}
                    </div>
                    <h3 className="font-extrabold text-[#0082FC] text-lg sm:text-xl leading-snug mb-2 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#0082FC] leading-relaxed mb-4 line-clamp-3 font-normal">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-5 border-t border-[#5FD4FD] pt-3">
                      {product.keyFeatures.slice(0, 2).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#0082FC] font-medium"
                        >
                          <span className="w-2 h-2 rounded-none bg-[#5FD4FD] shrink-0 mt-1" />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: "Download Spec Sheet" | "Add to Quote List" */}
                  <div className="pt-4 border-t border-[#5FD4FD] space-y-2.5">
                    <button
                      type="button"
                      onClick={() => onPreviewSubmittal(product)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-[#5FD4FD] text-[#0082FC] text-sm font-bold rounded-none border-2 border-[#0082FC] transition-colors whitespace-nowrap"
                    >
                      <FileText className="w-4 h-4 text-[#0082FC]" />
                      <span className="whitespace-nowrap">
                        Download Spec Sheet
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAddProduct(product)}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-none text-sm font-bold transition-all whitespace-nowrap border-2 ${
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

        {/* Load More Action Controls (When products are more than 6) */}
        {hasMore && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleLoadMore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC] font-extrabold text-base rounded-none border-2 border-[#0082FC] transition-colors duration-150 shadow-md whitespace-nowrap"
            >
              <span>Load More Products (+6)</span>
              <ChevronDown className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleShowAll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0082FC] hover:bg-[#0082FC] hover:text-white font-extrabold text-base rounded-none border-2 border-[#0082FC] transition-colors duration-150 whitespace-nowrap"
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
