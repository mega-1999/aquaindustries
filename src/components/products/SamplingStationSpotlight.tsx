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
      aria-label="3rd Showcase: New Innovation Municipal Water Sampling Station"
      className="py-12 sm:py-16 bg-[#0082FC] text-white border-b-4 border-[#5FD4FD] relative overflow-hidden"
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
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#5FD4FD]">
            <FlaskConical className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>3rd Product Showcase &bull; New Flagship Innovation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Municipal Water{" "}
            <span className="text-[#5FD4FD]">Sampling Station</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
            A critical engineering advancement for municipal public health.
            Provides dedicated, non-contaminated sampling points directly from
            the watermain for real-time chlorine residual, bacteriological
            monitoring, and EPA Lead &amp; Copper Rule compliance.
          </p>
        </div>

        {/* 2-Column Split: High-Contrast Display & Engineering Parameters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left 6 Columns: Crisp White Showcase Card */}
          <div className="lg:col-span-6 bg-white border-4 border-[#5FD4FD] p-6 sm:p-10 shadow-2xl relative group flex flex-col items-center justify-center text-[#0082FC]">
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
              <span className="px-3 py-1 bg-white text-[#0082FC] border border-[#0082FC] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                ANSI/NSF 61 Certified
              </span>
            </div>

            {/* High-Resolution Real Product Photograph */}
            <div className="h-80 sm:h-96 w-full flex items-center justify-center py-6 overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-xl"
              />
            </div>

            {/* Bottom Caption Strip */}
            <div className="w-full mt-4 pt-4 border-t border-[#0082FC]/20 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#0082FC]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0082FC]" />
                100% Lead-Free Brass Waterway
              </span>
              <span className="flex items-center gap-1.5">
                <ThermometerSnowflake className="w-4 h-4 text-[#0082FC]" />
                Freeze-Proof Thermal Core
              </span>
            </div>
          </div>

          {/* Right 6 Columns: Key Features & Engineering Spec Matrix */}
          <div className="lg:col-span-6 space-y-6">
            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="w-10 h-10 bg-white text-[#0082FC] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#0082FC]" />
                </div>
                <h3 className="text-base font-black uppercase text-white mb-1">
                  Zero Cross-Contamination
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Bypasses private homeowner plumbing fixtures to sample water
                  directly from the municipal distribution main.
                </p>
              </div>

              <div className="p-4 bg-white/10 border-2 border-[#5FD4FD] shadow-xs backdrop-blur-sm">
                <div className="w-10 h-10 bg-white text-[#0082FC] flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5 text-[#0082FC]" />
                </div>
                <h3 className="text-base font-black uppercase text-white mb-1">
                  Vandal-Proof Security
                </h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Tamper-resistant padlock hasp and heavy cast ductile iron
                  lockable cover prevent unauthorized access or contamination.
                </p>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="border-2 border-[#5FD4FD] bg-white/10 shadow-md backdrop-blur-sm">
              <div className="px-4 py-2.5 bg-white text-[#0082FC] flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Engineering Submittal Specifications
                </span>
                <span className="text-xs font-semibold text-[#0082FC]">
                  Rev. 2026.1
                </span>
              </div>
              <div className="p-4 space-y-2.5 text-xs sm:text-sm text-white">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Housing Enclosure:
                  </span>
                  <span className="text-white font-bold uppercase">
                    Heavy Ductile Iron (ASTM A536)
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Internal Waterway:
                  </span>
                  <span className="text-white font-bold uppercase">
                    Lead-Free Certified Brass (NSF 372)
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Inlet &amp; Outlet:
                  </span>
                  <span className="text-white font-bold">
                    1&quot; NPT Female Inlet &bull; 3/4&quot; Smooth Bore Bibb
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-white/80 font-normal">
                    Freeze Protection:
                  </span>
                  <span className="text-white font-bold">
                    Polyurethane Insulated Outer Casing
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80 font-normal">
                    Working Pressure:
                  </span>
                  <span className="text-[#5FD4FD] font-bold">
                    300 PSI Hydrostatic Proof Tested
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="button"
                onClick={() => onAddToRfq(product)}
                className="flex-1 px-5 py-3 bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-bold text-xs sm:text-sm rounded-none shadow-md transition-all whitespace-nowrap text-center uppercase tracking-wide cursor-pointer"
              >
                + Add Sampling Station to Quote
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="flex-1 px-5 py-3 bg-[#0082FC] hover:bg-white text-[#5FD4FD] hover:text-[#0082FC] font-bold text-xs sm:text-sm rounded-none border-2 border-[#5FD4FD] transition-all whitespace-nowrap text-center inline-flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#5FD4FD] group-hover:text-[#0082FC]" />
                <span>Download Submittal PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
