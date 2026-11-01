"use client";

import {
  Award,
  BoxSelect,
  CheckCircle2,
  Download,
  FileCheck2,
  PhoneCall,
  Ruler,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import React, { useState } from "react";
import type { ProductItem } from "../../types";

interface CurbBoxSpotlightProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  product: ProductItem;
}

const CURB_BOX_IMAGES = [
  {
    src: "/images/our-images/curb-box-ultimate.png",
    label: "Ultimate Heavy Curb Box",
    sublabel: "Telescopic Arch Pattern",
  },
  {
    src: "/images/our-images/curb-box-buffalo.png",
    label: "Buffalo Style Service Box",
    sublabel: "Heavy-Wall Highway Pattern",
  },
  {
    src: "/images/our-images/curb-box-arch-full.png",
    label: "Arch Base Straddle Fitting",
    sublabel: "Cast Footing for Curb Stop",
  },
];

export const CurbBoxSpotlight: React.FC<CurbBoxSpotlightProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
  product,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <section
      id="curb-box-spotlight"
      aria-label="2nd Showcase: The Century Curb Box"
      className="py-12 sm:py-16 bg-white text-[#0082FC] border-b-4 border-[#0082FC] relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0082FC 1px, transparent 1px), linear-gradient(to bottom, #0082FC 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0082FC] text-white text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
            <span>
              2nd Product Showcase &bull; 100+ Years Industry Standard
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0082FC] leading-[1.05] mb-3">
            The Century <span className="text-[#5FD4FD]">Curb Service Box</span>
          </h2>

          <p className="text-sm sm:text-base text-[#0082FC]/90 font-normal leading-relaxed">
            The proven American municipal benchmark for over a century. Provides
            secure street-level shut-off access to underground service lines,
            engineered with telescopic frost-heave protection, heavy AASHTO H-20
            traffic casting, and tamper-resistant brass pentagon locking.
          </p>
        </div>

        {/* 2-Column Balanced Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT 6 COLUMNS: High-Resolution Visual Showcase & Variant Switcher */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative bg-white border-4 border-[#0082FC] p-8 sm:p-12 shadow-2xl flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px]">
              {/* Corner Waterworks Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#0082FC] bg-[#5FD4FD]/20 px-2.5 py-1 border border-[#0082FC]">
                  AASHTO H-20 Traffic Rated
                </span>
              </div>

              {/* Top Right Spec Tag */}
              <div className="absolute top-4 right-4 z-10 hidden sm:block">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0082FC] bg-white border border-[#0082FC] px-2 py-1 shadow-xs">
                  ASTM A48 Class 35B
                </span>
              </div>

              {/* Main Active Image Display */}
              <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">
                <img
                  src={CURB_BOX_IMAGES[activeImageIndex].src}
                  alt={CURB_BOX_IMAGES[activeImageIndex].label}
                  className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-300"
                />
              </div>

              {/* Bottom Caption Pill */}
              <div className="mt-4 text-center">
                <p className="text-base sm:text-lg font-black uppercase text-[#0082FC] tracking-tight">
                  {CURB_BOX_IMAGES[activeImageIndex].label}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#0082FC]/80">
                  {CURB_BOX_IMAGES[activeImageIndex].sublabel}
                </p>
              </div>
            </div>

            {/* Thumbnail Variant Selector */}
            <div className="grid grid-cols-3 gap-3">
              {CURB_BOX_IMAGES.map((img, idx) => (
                <button
                  type="button"
                  key={img.label}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`p-2 border-2 rounded-none transition-all text-left flex flex-col items-center justify-center bg-white ${
                    activeImageIndex === idx
                      ? "border-[#0082FC] bg-[#5FD4FD]/15 shadow-md"
                      : "border-[#5FD4FD]/50 hover:border-[#0082FC]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="h-16 w-auto object-contain mb-1"
                  />
                  <span className="text-[11px] sm:text-xs font-black uppercase text-[#0082FC] text-center line-clamp-1">
                    {img.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: Technical Engineering Parameters & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4 Feature Parameter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Centennial Cast Durability
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Heavy-wall ductile and gray iron outlasts surrounding pavement
                  with 100+ years projected service life.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Vandal-Proof Pentagon Lock
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Proprietary recessed brass pentagon bolt prevents unauthorized
                  tampering while allowing rapid utility tool access.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <Ruler className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Telescopic Frost-Heave
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Adjustable sliding shaft (18&quot; to 72&quot; burial depth)
                  absorbs road settling without crushing the valve below.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#5FD4FD] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0082FC] text-white flex items-center justify-center shrink-0">
                    <BoxSelect className="w-5 h-5 text-[#5FD4FD]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0082FC]">
                    Arch Base Fitment
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/85 font-medium leading-snug">
                  Traditional wide arched footing securely straddles 3/4&quot;
                  through 2&quot; municipal curb stops without direct pipe
                  contact.
                </p>
              </div>
            </div>

            {/* Submittal Specification Ledger */}
            <div className="bg-white border-2 border-[#0082FC] shadow-sm">
              <div className="bg-[#0082FC] text-white px-5 py-3 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  Curb Box Technical Matrix
                </span>
                <span className="text-xs font-bold text-[#5FD4FD]">
                  Melville, NY Foundry Spec
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-[#0082FC]/15 pb-2">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Casting Standard
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    ASTM A48 Class 35B / ASTM A536 Ductile
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#0082FC]/15 pb-2">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Load Rating
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    AASHTO H-20 &amp; HS-20 Traffic Certified
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#0082FC]/15 pb-2">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Upper Section
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    2-1/2&quot; &bull; 3&quot; Slide / Screw Adjustment
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#0082FC]/75 uppercase">
                    Coating Protection
                  </span>
                  <span className="font-extrabold text-[#0082FC]">
                    Heavy Asphaltic Bituminous Dip
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onAddToRfq(product)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] rounded-none shadow-sm transition-all uppercase tracking-wide cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Add Curb Box to RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#0082FC] bg-white border-2 border-[#0082FC] hover:bg-[#0082FC] hover:text-white rounded-none shadow-xs transition-all uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#0082FC] group-hover:text-white" />
                <span>Download Submittal PDF</span>
              </button>
            </div>

            {/* Quick Dispatch Strip */}
            <div className="pt-2 flex items-center justify-between border-t border-[#0082FC]/20 text-xs font-semibold text-[#0082FC]">
              <span>In-Stock at Melville, NY &amp; FL Logistics Hubs</span>
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-1 hover:text-[#5FD4FD] transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-[#0082FC]" />
                <span>+1 (516) 252-1111</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
