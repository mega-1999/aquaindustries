"use client";

import {
  Download,
  FileText,
  Layers,
  Printer,
  ShieldCheck,
  X,
} from "lucide-react";
import type React from "react";
import type { ProductItem } from "../../types";

interface ProductSubmittalModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onAddToRfq: (product: ProductItem) => void;
}

export const ProductSubmittalModal: React.FC<ProductSubmittalModalProps> = ({
  product,
  onClose,
  onAddToRfq,
}) => {
  if (!product) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-submittal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0082FC]/80 backdrop-blur-sm"
    >
      <div className="bg-white border-2 border-[#0082FC] rounded-none max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#0082FC] hover:bg-[#5FD4FD]/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Submittal Document Header */}
        <div className="border-b-2 border-[#0082FC] pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0082FC] mb-1">
              <span>AQUA INDUSTRIES SUBMITTAL SPECIFICATION SHEET</span>
            </div>
            <h3
              id="product-submittal-title"
              className="text-xl sm:text-2xl font-black text-[#0082FC]"
            >
              {product.name}
            </h3>
            <div className="text-xs text-[#0082FC] font-medium mt-0.5">
              Cut Sheet Code: {product.submittalFile} &bull; Document Rev.
              2026.1
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-xs font-bold text-[#0082FC] whitespace-nowrap">
              {product.standard}
            </span>
            <span className="px-3 py-1 rounded-none bg-white border border-[#5FD4FD] text-xs font-bold text-[#0082FC] whitespace-nowrap">
              {product.pressureRating.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="space-y-6">
          {/* General Specs */}
          <div className="bg-white rounded-none border-2 border-[#5FD4FD] p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0082FC] mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0082FC]" />
              <span>General Casting &amp; Metallurgical Parameters</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Material Standard:</span>
                <span className="text-[#0082FC] font-bold">
                  {product.material}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Minimum Tensile:</span>
                <span className="text-[#0082FC] font-bold">
                  {product.specs.tensileStrength}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Minimum Yield:</span>
                <span className="text-[#0082FC] font-bold">
                  {product.specs.yieldStrength}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Minimum Elongation:</span>
                <span className="text-[#0082FC] font-bold">
                  {product.specs.elongation}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Joint Standard:</span>
                <span className="text-[#0082FC] font-bold">
                  {product.jointType}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Wall Thickness:</span>
                <span className="text-[#0082FC] font-bold">
                  {product.specs.wallThicknessClass}
                </span>
              </div>
            </div>
          </div>

          {/* Lining, Coating & NSF 61 Certifications */}
          <div className="bg-white rounded-none border-2 border-[#5FD4FD] p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0082FC] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5FD4FD]" />
              <span>
                Corrosion Protection &amp; Potable Water Certifications
              </span>
            </h4>
            <p className="text-xs text-[#0082FC] leading-relaxed mb-3">
              Standard fittings are provided with double-thickness cement-mortar
              lining and asphaltic seal coat per{" "}
              <strong>AWWA C104 / ANSI A21.4</strong>. Optional factory
              fusion-bonded epoxy per <strong>AWWA C116</strong> available upon
              request.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-none bg-white border border-[#5FD4FD] text-[#0082FC] font-bold shadow-xs">
                ANSI/NSF 61 Annex G Certified Lead-Free
              </span>
              <span className="px-2.5 py-1 rounded-none bg-white border border-[#5FD4FD] text-[#0082FC] font-bold shadow-xs">
                NSF/ANSI 372 Verified (&lt;0.25% Pb)
              </span>
              <span className="px-2.5 py-1 rounded-none bg-white border border-[#5FD4FD] text-[#0082FC] font-bold shadow-xs">
                Buy America Act (BAA) / AIS Compliant
              </span>
            </div>
          </div>

          {/* Bolt & Installation Torque Specs */}
          <div className="bg-white rounded-none border-2 border-[#5FD4FD] p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0082FC] mb-2">
              Field Installation &amp; Bolt Torque Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#0082FC] block">
                  STANDARD BOLT PACK:
                </span>
                <span className="text-[#0082FC] font-bold">
                  {product.specs.standardBoltCount}
                </span>
              </div>
              <div>
                <span className="text-[#0082FC] block">
                  SPECIFIED BOLT TORQUE:
                </span>
                <span className="text-[#0082FC] font-bold">
                  {product.specs.torqueSpec}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-8 pt-5 border-t-2 border-[#5FD4FD]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onAddToRfq(product);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-bold text-xs rounded-none border-2 border-[#0082FC] shadow-md transition-colors whitespace-nowrap"
          >
            + Add to Quote List
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] text-xs font-bold rounded-none border-2 border-[#5FD4FD] flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Printer className="w-4 h-4 text-[#0082FC]" />
              <span>Print Submittal</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] text-xs font-bold rounded-none border-2 border-[#0082FC] flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-[#0082FC]" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
