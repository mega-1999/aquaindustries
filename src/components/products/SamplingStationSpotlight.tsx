"use client";

import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Download,
  FileCheck2,
  FlaskConical,
  Lock,
  PhoneCall,
  ShieldCheck,
  ThermometerSnowflake,
} from "lucide-react";
import type React from "react";
import type { ProductItem } from "../../types";

interface SamplingStationSpotlightProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  product: ProductItem;
}

export const SamplingStationSpotlight: React.FC<
  SamplingStationSpotlightProps
> = ({ onAddToRfq, onPreviewSubmittal, product }) => {
  return (
    <section
      id="sampling-station-spotlight"
      aria-label="Flagship Product: Municipal Water Sampling Station"
      className="py-16 sm:py-24 bg-white text-[#0082FC] border-b-4 border-[#0082FC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0082FC] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-none mb-4 shadow-sm">
            <FlaskConical className="w-4 h-4 text-[#5FD4FD] shrink-0" />
            <span>Featured Flagship Innovation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0082FC] leading-[1.05] mb-4">
            Municipal Water{" "}
            <span className="text-[#5FD4FD]">Sampling Station</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#0082FC]/90 font-medium leading-relaxed">
            A critical engineering advancement for municipal public health.
            Provides dedicated, non-contaminated sampling points directly from
            the watermain for real-time chlorine residual, bacteriological
            monitoring, and EPA Lead &amp; Copper Rule compliance.
          </p>
        </div>

        {/* 2-Column Split: Authentic Real Photograph & Engineering Parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left 6 Columns: Product Visual Display */}
          <div className="lg:col-span-6 bg-white border-2 border-[#5FD4FD] p-6 sm:p-10 shadow-lg relative group flex flex-col items-center justify-center">
            {/* Corner Serial & Standard Tag */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
              <span className="text-xs font-bold text-[#0082FC]/80 uppercase tracking-wider">
                Specification ID
              </span>
              <span className="text-sm sm:text-base font-black text-[#0082FC]">
                AQUA-WSS-2026
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-white text-[#0082FC] border border-[#5FD4FD] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                ANSI/NSF 61 Certified
              </span>
            </div>

            {/* High-Resolution Real Product Photograph */}
            <div className="h-80 sm:h-96 w-full flex items-center justify-center py-6 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom Caption Pill */}
            <div className="w-full mt-4 pt-4 border-t border-[#5FD4FD]/30 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#0082FC]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#5FD4FD]" />
                100% Lead-Free Brass Waterway
              </span>
              <span className="flex items-center gap-1.5">
                <ThermometerSnowflake className="w-4 h-4 text-[#5FD4FD]" />
                Freeze-Proof Thermal Core
              </span>
            </div>
          </div>

          {/* Right 6 Columns: Key Features & Engineering Spec Matrix */}
          <div className="lg:col-span-6 space-y-6">
            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="w-10 h-10 bg-[#0082FC] text-white flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base font-black uppercase text-[#0082FC] mb-1">
                  Zero Cross-Contamination
                </h4>
                <p className="text-sm text-[#0082FC]/85 leading-relaxed">
                  Bypasses private homeowner plumbing fixtures to sample water
                  directly from the municipal distribution main.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="w-10 h-10 bg-[#0082FC] text-white flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-base font-black uppercase text-[#0082FC] mb-1">
                  Vandal-Proof Security
                </h4>
                <p className="text-sm text-[#0082FC]/85 leading-relaxed">
                  Tamper-resistant padlock hasp and heavy cast ductile iron
                  lockable cover prevent unauthorized access or contamination.
                </p>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="border-2 border-[#0082FC] bg-white overflow-hidden shadow-sm">
              <div className="px-5 py-3 bg-[#0082FC] text-white flex justify-between items-center">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  Engineering Submittal Specifications
                </span>
                <span className="text-xs font-bold text-[#5FD4FD]">
                  Rev. 2026.1
                </span>
              </div>
              <div className="p-5 space-y-3 text-sm sm:text-base">
                <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                  <span className="text-[#0082FC] font-medium">
                    Housing Enclosure:
                  </span>
                  <span className="text-[#0082FC] font-black uppercase">
                    Heavy Ductile Iron (ASTM A536)
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                  <span className="text-[#0082FC] font-medium">
                    Internal Waterway:
                  </span>
                  <span className="text-[#0082FC] font-black uppercase">
                    Lead-Free Certified Brass (NSF 372)
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                  <span className="text-[#0082FC] font-medium">
                    Inlet &amp; Outlet:
                  </span>
                  <span className="text-[#0082FC] font-black">
                    1&quot; NPT Female Inlet &bull; 3/4&quot; Smooth Bore Bibb
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                  <span className="text-[#0082FC] font-medium">
                    Freeze Protection:
                  </span>
                  <span className="text-[#0082FC] font-black">
                    Polyurethane Insulated Outer Casing
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0082FC] font-medium">
                    Working Pressure:
                  </span>
                  <span className="text-[#0082FC] font-black">
                    300 PSI Hydrostatic Proof Tested
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => onAddToRfq(product)}
                className="flex-1 px-6 py-4 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-extrabold text-sm sm:text-base rounded-none border-2 border-[#0082FC] shadow-md transition-colors whitespace-nowrap text-center"
              >
                + Add Sampling Station to Quote
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="flex-1 px-6 py-4 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] font-extrabold text-sm sm:text-base rounded-none border-2 border-[#5FD4FD] transition-colors whitespace-nowrap text-center inline-flex items-center justify-center gap-2"
              >
                <FileCheck2 className="w-5 h-5 text-[#0082FC]" />
                <span>Download Submittal PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
