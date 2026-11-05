"use client";

import {
  Award,
  BoxSelect,
  CheckCircle2,
  FileCheck2,
  PhoneCall,
  Play,
  Ruler,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface CurbBoxSpotlightProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
  product: ProductItem;
}

const CURB_BOX_VIDEOS = [
  {
    id: "main",
    src: "/videos/bison-box/bison-curb-box.mp4",
    title: "Primary 4K Product Showcase",
    badge: "Full Casting View",
  },
  {
    id: "arch",
    src: "/videos/bison-box/bison-curb-box-next-centruary.mp4",
    title: "Next Gen Curb Box Architecture",
    badge: "Foundry Geometry",
  },
  {
    id: "field",
    src: "/videos/bison-box/bison-curb-box2.mp4",
    title: "Installation Close-Up",
    badge: "Field Inspection",
  },
];

const CURB_BOX_IMAGES = [
  {
    src: "/images/our-images/curb-box-ultimate.png",
    label: "Bison Heavy-Duty Curb Box",
    sublabel: "Heavy Highway Arch Pattern",
  },
  {
    src: "/images/our-images/curb-box-buffalo.png",
    label: "Bison Buffalo-Style Service Box",
    sublabel: "Heavy-Wall Highway Pattern",
  },
  {
    src: "/images/our-images/curb-box-arch-full.png",
    label: "Bison Arch Base Straddle Fitting",
    sublabel: "Cast Footing for Curb Stop",
  },
];

export const CurbBoxSpotlight: React.FC<CurbBoxSpotlightProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
  product,
}) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"video" | "photo">("video");

  return (
    <section
      id="curb-box-spotlight"
      aria-label="2nd Showcase: Bison Curb Box"
      className="py-12 sm:py-16 bg-white text-[#0074f0] border-b-4 border-[#0074f0] relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0074f0 1px, transparent 1px), linear-gradient(to bottom, #0074f0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0074f0] text-white text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>2nd Product Showcase &bull; Municipal Benchmark</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0074f0] leading-[1.05] mb-3">
            BISON <span className="text-[#0082FC]">CURB SERVICE BOX</span>
          </h2>

          <p className="text-sm sm:text-base text-[#0074f0]/90 font-normal leading-relaxed">
            The proven American municipal waterworks benchmark. Provides secure
            street-level shut-off access to underground service lines,
            engineered with authentic PR-branded foundry tooling, heavy AASHTO
            H-20 traffic casting, and tamper-resistant brass pentagon locking.
          </p>
        </div>

        {/* 2-Column Balanced Engineering Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT 6 COLUMNS: Real Field Video Showcase & Photographs */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* View Mode Toggle: Real Video vs Real Photographs */}
            <div className="flex items-center justify-between gap-2 border-2 border-[#0074f0] p-1 bg-white">
              <button
                type="button"
                onClick={() => setViewMode("video")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center justify-center gap-1.5 ${viewMode === "video"
                  ? "bg-[#0074f0] text-white shadow-xs"
                  : "text-[#0074f0] hover:bg-[#0082FC]/20"
                  }`}
              >
                <Play className="w-3 h-3 fill-current shrink-0" />
                <span>Field Video</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("photo")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer text-center ${viewMode === "photo"
                  ? "bg-[#0074f0] text-white shadow-xs"
                  : "text-[#0074f0] hover:bg-[#0082FC]/20"
                  }`}
              >
                <span>Full Product Photographs</span>
              </button>
            </div>

            <div className="relative bg-white border-4 border-[#0074f0] p-5 sm:p-8 shadow-2xl flex flex-col items-center justify-center min-h-[440px] sm:min-h-[500px] overflow-hidden">
              {/* Corner Waterworks Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#0074f0] bg-[#0082FC]/20 px-2.5 py-1 border border-[#0074f0]">
                  AASHTO H-20 Traffic Rated
                </span>
              </div>

              {/* Top Right Spec Tag */}
              <div className="absolute top-4 right-4 z-20 hidden sm:block">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0074f0] bg-white border border-[#0074f0] px-2 py-1 shadow-xs">
                  ASTM A48 Class 35B
                </span>
              </div>

              {viewMode === "video" ? (
                /* Real Field / Casting Video Display */
                <div className="relative w-full h-[340px] sm:h-[400px] flex flex-col items-center justify-center">
                  <video
                    key={CURB_BOX_VIDEOS[activeVideoIndex].src}
                    src={CURB_BOX_VIDEOS[activeVideoIndex].src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#0074f0] text-white px-3 py-1 shadow-md border border-[#0082FC] whitespace-nowrap">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-wider">
                      LIVE FIELD DEMO &bull;{" "}
                      {CURB_BOX_VIDEOS[activeVideoIndex].title}
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Main Active Image Display */}
                  <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center py-4">
                    <img
                      src={CURB_BOX_IMAGES[activeImageIndex].src}
                      alt={CURB_BOX_IMAGES[activeImageIndex].label}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-all duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Bottom Caption Pill */}
                  <div className="mt-4 text-center">
                    <p className="text-base sm:text-lg font-black uppercase text-[#0074f0] tracking-tight">
                      {CURB_BOX_IMAGES[activeImageIndex].label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0074f0]/80">
                      {CURB_BOX_IMAGES[activeImageIndex].sublabel}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Video Selector Strip (shown when in video mode) */}
            {viewMode === "video" && (
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {CURB_BOX_VIDEOS.map((vid, idx) => (
                  <button
                    type="button"
                    key={vid.id}
                    onClick={() => setActiveVideoIndex(idx)}
                    className={`p-2 sm:p-2.5 border-2 rounded-none transition-all text-center flex flex-col items-center justify-center bg-white cursor-pointer ${activeVideoIndex === idx
                      ? "border-[#0074f0] bg-[#0082FC]/20 shadow-md ring-2 ring-[#0074f0]"
                      : "border-[#0082FC]/50 hover:border-[#0074f0] hover:bg-[#0082FC]/10"
                      }`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Play className="w-3 h-3 text-[#0074f0] fill-current" />
                      <span className="text-[10px] sm:text-xs font-black uppercase text-[#0074f0] truncate">
                        Video 0{idx + 1}
                      </span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#0074f0]/80 truncate">
                      {vid.badge}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Thumbnail Variant Selector (shown when in photo mode) */}
            {viewMode === "photo" && (
              <div className="grid grid-cols-3 gap-3">
                {CURB_BOX_IMAGES.map((img, idx) => (
                  <button
                    type="button"
                    key={img.label}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`p-2 border-2 rounded-none transition-all text-left flex flex-col items-center justify-center bg-white cursor-pointer ${activeImageIndex === idx
                      ? "border-[#0074f0] bg-[#0082FC]/15 shadow-md"
                      : "border-[#0082FC]/50 hover:border-[#0074f0]"
                      }`}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="h-16 w-auto object-contain mb-1"
                    />
                    <span className="text-[11px] sm:text-xs font-black uppercase text-[#0074f0] text-center line-clamp-1">
                      {img.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT 6 COLUMNS: Technical Engineering Parameters & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4 Feature Parameter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white border-2 border-[#0082FC] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0074f0] text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#0082FC]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0074f0]">
                    Bison Cast Durability
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0074f0]/85 font-medium leading-snug">
                  Heavy-wall ductile and gray iron outlasts surrounding pavement
                  with 100+ years projected service life.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#0082FC] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0074f0] text-white flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5 text-[#0082FC]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0074f0]">
                    Vandal-Proof Pentagon Lock
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0074f0]/85 font-medium leading-snug">
                  Proprietary recessed brass pentagon bolt prevents unauthorized
                  tampering while allowing rapid utility tool access.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#0082FC] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0074f0] text-white flex items-center justify-center shrink-0">
                    <Ruler className="w-5 h-5 text-[#0082FC]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0074f0]">
                    AASHTO H-20 Heavy Traffic
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0074f0]/85 font-medium leading-snug">
                  Engineered to absorb 40,000+ LBS highway axle wheel loads
                  without fracturing or dislodging subgrade pipework.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#0082FC] shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 bg-[#0074f0] text-white flex items-center justify-center shrink-0">
                    <BoxSelect className="w-5 h-5 text-[#0082FC]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase text-[#0074f0]">
                    Arch Base Fitment
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#0074f0]/85 font-medium leading-snug">
                  Traditional wide arched footing securely straddles 3/4&quot;
                  through 2&quot; municipal curb stops without direct pipe
                  contact.
                </p>
              </div>
            </div>

            {/* Submittal Specification Ledger */}
            <div className="bg-white border-2 border-[#0074f0] shadow-sm">
              <div className="bg-[#0074f0] text-white px-5 py-3 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider">
                  Bison Curb Box Technical Matrix
                </span>
                <span className="text-xs font-bold text-[#0082FC]">
                  Melville, NY Foundry Spec
                </span>
              </div>

              <div className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-[#0074f0]/15 pb-2">
                  <span className="font-bold text-[#0074f0]/75 uppercase">
                    Casting Standard
                  </span>
                  <span className="font-extrabold text-[#0074f0]">
                    ASTM A48 Class 35B / ASTM A536 Ductile
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#0074f0]/15 pb-2">
                  <span className="font-bold text-[#0074f0]/75 uppercase">
                    Load Rating
                  </span>
                  <span className="font-extrabold text-[#0074f0]">
                    AASHTO H-20 &amp; HS-20 Traffic Certified
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#0074f0]/15 pb-2">
                  <span className="font-bold text-[#0074f0]/75 uppercase">
                    Service Range
                  </span>
                  <span className="font-extrabold text-[#0074f0]">
                    3/4&quot; through 2&quot; Municipal Curb Stops
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#0074f0]/75 uppercase">
                    Coating Protection
                  </span>
                  <span className="font-extrabold text-[#0074f0]">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#0074f0] hover:bg-[#0082FC] hover:text-[#0074f0] rounded-none shadow-sm transition-all uppercase tracking-wide cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Add Bison Curb Box to RFQ</span>
              </button>

              <button
                type="button"
                onClick={() => onPreviewSubmittal(product)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#0074f0] bg-white border-2 border-[#0074f0] hover:bg-[#0074f0] hover:text-white rounded-none shadow-xs transition-all uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#0074f0] group-hover:text-white" />
                <span>Download Submittal PDF</span>
              </button>
            </div>

            {/* Quick Dispatch Strip */}
            <div className="pt-2 flex items-center justify-between border-t border-[#0074f0]/20 text-xs font-semibold text-[#0074f0]">
              <span>In-Stock at Melville, NY &amp; FL Logistics Hubs</span>
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-1 hover:text-[#0082FC] transition-colors"
              >
                <PhoneCall className="w-3 h-3 text-[#0074f0]" />
                <span>+1 (516) 252-1111</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
