"use client";

import { Download, Layers, Printer, ShieldCheck, X } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3087ff]/80 backdrop-blur-sm"
    >
      <div className="bg-white border-2 border-[#3087ff] rounded-none max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-[#3087ff] relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#3087ff] hover:bg-[#3087ff]/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Submittal Document Header */}
        <div className="border-b-2 border-[#3087ff] pb-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#3087ff] mb-1">
              <span>AQUA INDUSTRIES SUBMITTAL SPECIFICATION SHEET</span>
            </div>
            <h3
              id="product-submittal-title"
              className="text-2xl sm:text-3xl font-black text-[#3087ff]"
            >
              {product.name}
            </h3>
            <div className="text-xs sm:text-sm text-[#3087ff] font-medium mt-1">
              Cut Sheet Code: {product.submittalFile} &bull; Document Rev.
              2026.1
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-none bg-white border-2 border-[#3087ff] text-xs sm:text-sm font-bold text-[#3087ff] whitespace-nowrap">
              {product.standard}
            </span>
            <span className="px-3.5 py-1.5 rounded-none bg-white border border-[#3087ff] text-xs sm:text-sm font-bold text-[#3087ff] whitespace-nowrap">
              {product.pressureRating.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* Technical Specification Table */}
        <div className="space-y-6">
          {/* General Specs */}
          <div className="bg-white rounded-none border-2 border-[#3087ff] p-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#3087ff] mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#3087ff]" />
              <span>General Casting &amp; Metallurgical Parameters</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
              <div className="flex justify-between border-b border-[#3087ff]/30 pb-2">
                <span className="text-[#3087ff]">Material Standard:</span>
                <span className="text-[#3087ff] font-bold">
                  {product.material}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#3087ff]/30 pb-2">
                <span className="text-[#3087ff]">Minimum Tensile:</span>
                <span className="text-[#3087ff] font-bold">
                  {product.specs.tensileStrength}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#3087ff]/30 pb-2">
                <span className="text-[#3087ff]">Minimum Yield:</span>
                <span className="text-[#3087ff] font-bold">
                  {product.specs.yieldStrength}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#3087ff]/30 pb-2">
                <span className="text-[#3087ff]">Minimum Elongation:</span>
                <span className="text-[#3087ff] font-bold">
                  {product.specs.elongation}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#3087ff]/30 pb-2">
                <span className="text-[#3087ff]">Joint Standard:</span>
                <span className="text-[#3087ff] font-bold">
                  {product.jointType}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#3087ff]/30 pb-2">
                <span className="text-[#3087ff]">Wall Thickness:</span>
                <span className="text-[#3087ff] font-bold">
                  {product.specs.wallThicknessClass}
                </span>
              </div>
            </div>
          </div>

          {/* Lining, Coating & NSF 61 Certifications */}
          <div className="bg-white rounded-none border-2 border-[#3087ff] p-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#3087ff] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#3087ff]" />
              <span>
                Corrosion Protection &amp; Potable Water Certifications
              </span>
            </h4>
            <p className="text-sm sm:text-base text-[#3087ff] leading-relaxed mb-3">
              Standard fittings are provided with double-thickness cement-mortar
              lining and asphaltic seal coat per{" "}
              <strong>AWWA C104 / ANSI A21.4</strong>. Optional factory
              fusion-bonded epoxy per <strong>AWWA C116</strong> available upon
              request.
            </p>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              <span className="px-3 py-1.5 rounded-none bg-white border border-[#3087ff] text-[#3087ff] font-bold shadow-xs">
                ANSI/NSF 61 Annex G Certified Lead-Free
              </span>
              <span className="px-3 py-1.5 rounded-none bg-white border border-[#3087ff] text-[#3087ff] font-bold shadow-xs">
                NSF/ANSI 372 Verified (&lt;0.25% Pb)
              </span>
              <span className="px-3 py-1.5 rounded-none bg-white border border-[#3087ff] text-[#3087ff] font-bold shadow-xs">
                Buy America Act (BAA) / AIS Compliant
              </span>
            </div>
          </div>

          {/* Official 2" - 64" Ductile Iron Compact Fittings General Specifications */}
          {product.standard === "AWWA C153" && (
            <div className="bg-white rounded-none border-2 border-[#3087ff] p-5">
              <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#3087ff] mb-3 flex items-center justify-between">
                <span>
                  General Specifications (2&quot; - 64&quot; Compact Fittings)
                </span>
                <span className="text-[10px] font-mono bg-[#3087ff]/20 border border-[#3087ff] px-2 py-0.5">
                  ANSI/AWWA C153
                </span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#3087ff]">
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">MATERIAL:</strong>
                  <span>Ductile Iron per ASTM A536</span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">PRESSURE:</strong>
                  <span>
                    350 PSI rating for 2&quot; - 24&quot;, 250 PSI for 30&quot;
                    - 48&quot;, 150 PSI for 54&quot; - 64&quot;
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">TESTING:</strong>
                  <span>
                    In accordance with ANSI/AWWA C153/A21.53, ANSI/AWWA
                    C111/A21.11, UL and FM requirements
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">
                    LAYING LENGTH:
                  </strong>
                  <span>
                    ANSI/AWWA C153/A21.53 (or catalog H2O design as noted)
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">DEFLECTION:</strong>
                  <span>
                    2&quot;-4&quot;=8° | 6&quot;=7° | 8&quot;-12&quot;=5° |
                    14&quot;-16&quot;=3½° | 18&quot;-24&quot;=3° |
                    30&quot;-64&quot;=2°
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">
                    CEMENT LINING:
                  </strong>
                  <span>
                    ANSI/AWWA C104/A21.4 -- 2&quot;-3&quot; single,
                    4&quot;-64&quot; double thickness
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">COATING:</strong>
                  <span>
                    Asphaltic seal coat inside and out in accordance with
                    ANSI/AWWA C104 &amp; C153
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">
                    FLANGES &amp; HARDWARE:
                  </strong>
                  <span>
                    Flanged ends match ANSI B16.1 class 125 &bull; SBR gaskets
                    &bull; Low alloy steel T-bolts
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">APPROVALS:</strong>
                  <span>
                    3&quot;-12&quot; UL/ULC Listed &bull; 2&quot;+ UL/ANSI/NSF
                    61 &amp; 372 &bull; 3&quot;-16&quot; FM APPROVED
                  </span>
                </div>
                <div className="p-2 border border-[#3087ff]/40 bg-[#3087ff]/10">
                  <strong className="block text-[#3087ff]">
                    INSTALLATION:
                  </strong>
                  <span>
                    Per ANSI/AWWA C600 &amp; C111 using DIP (C150/C151) and PVC
                    pipe (C900)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Bolt & Installation Torque Specs */}
          <div className="bg-white rounded-none border-2 border-[#3087ff] p-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#3087ff] mb-2">
              Field Installation &amp; Bolt Torque Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <div>
                <span className="text-[#3087ff] text-xs sm:text-sm font-bold block">
                  STANDARD BOLT PACK:
                </span>
                <span className="text-[#3087ff] font-extrabold">
                  {product.specs.standardBoltCount}
                </span>
              </div>
              <div>
                <span className="text-[#3087ff] text-xs sm:text-sm font-bold block">
                  SPECIFIED BOLT TORQUE:
                </span>
                <span className="text-[#3087ff] font-extrabold">
                  {product.specs.torqueSpec}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="mt-8 pt-5 border-t-2 border-[#3087ff]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onAddToRfq(product);
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#3087ff] hover:bg-[#3087ff] hover:text-white text-white font-extrabold text-sm sm:text-base rounded-none border-2 border-[#3087ff] shadow-md transition-colors whitespace-nowrap"
          >
            + Add to Quote List
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-5 py-3.5 bg-white hover:bg-[#3087ff]/20 text-[#3087ff] text-sm sm:text-base font-extrabold rounded-none border-2 border-[#3087ff] flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Printer className="w-4 h-4 text-[#3087ff]" />
              <span>Print Submittal</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex-1 sm:flex-initial px-5 py-3.5 bg-white hover:bg-[#3087ff]/20 text-[#3087ff] text-sm sm:text-base font-extrabold rounded-none border-2 border-[#3087ff] flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-[#3087ff]" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
