"use client";

import {
  Check,
  CheckCircle2,
  ExternalLink,
  Eye,
  FileText,
  Layers,
  Play,
  Plus,
  ShieldCheck,
  Video,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";

interface VideoShowcaseCard {
  id: string;
  badge: string;
  title: string;
  sublabel: string;
  standard: string;
  duration: string;
  videoUrl: string;
  posterUrl: string;
  summary: string;
  product: ProductItem;
}

const VIDEO_SHOWCASES: VideoShowcaseCard[] = [
  {
    id: "video-1",
    badge: "FLAGSHIP INNOVATION",
    title: "Municipal Water Sampling Station",
    sublabel: "Non-Contaminating Direct Mainline Sampling",
    standard: "ANSI/NSF 61 & 372 Certified",
    duration: "0:45",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/sampling-station.png",
    summary:
      "See how the dedicated lead-free brass waterway bypasses private plumbing to deliver true EPA Lead & Copper Rule water samples with a -20°F freeze-proof core.",
    product: PRODUCTS_CATALOG[0],
  },
  {
    id: "video-2",
    badge: "100+ YR BENCHMARK",
    title: "The Century Curb Service Box",
    sublabel: "Telescopic Frost-Heave Absorption & H-20 Proof",
    standard: "AASHTO H-20 • ASTM A48 35B",
    duration: "0:52",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/curb-box-ultimate.png",
    summary:
      "Watch the sliding upper shaft absorb 6 inches of vertical pavement frost settlement without transferring load to the underground brass curb stop valve.",
    product: PRODUCTS_CATALOG[1],
  },
  {
    id: "video-3",
    badge: "MECHANICAL RESTRAINT",
    title: "Series 3000 Cam-Action Restraint",
    sublabel: "Concrete-Free Radial Cam Wedge Leverage",
    standard: "UL Listed & FM Approved",
    duration: "1:05",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/products/Joint-Restraints.jpg",
    summary:
      "Observe ductile iron cam wedges automatically bite deeper into the pipe wall under hydraulic surge pressures up to 500 PSI, eliminating thrust blocks.",
    product: PRODUCTS_CATALOG[2],
  },
  {
    id: "video-4",
    badge: "DOMESTIC FOUNDRY",
    title: "2,500°F Ductile Iron Induction Melt",
    sublabel: "Electric Furnace Pouring & Spectrometry",
    standard: "ASTM A536 Grade 65-45-12",
    duration: "1:12",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/MJ_Fittings.jpeg",
    summary:
      "Tour the Melville, NY electric induction melt deck. Witness physical pull bar tensile testing and permanent traceable heat numbers cast onto every fitting.",
    product: PRODUCTS_CATALOG[3] || PRODUCTS_CATALOG[0],
  },
];

interface SolenoVideoShowcaseProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

export const SolenoVideoShowcase: React.FC<SolenoVideoShowcaseProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoShowcaseCard | null>(
    null,
  );
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAdd = (product: ProductItem) => {
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <section
      aria-label="Waterworks Engineering Video Demonstrations"
      className="py-16 sm:py-24 bg-[#0082FC] text-white border-t-4 border-[#5FD4FD] border-b-4 border-[#5FD4FD] relative overflow-hidden"
    >
      {/* Ambient Looping Water Dynamics Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none"
        src="https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4"
      />

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
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#5FD4FD]">
            <Video className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>Field Proof &amp; Manufacturing Demonstrations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Waterworks <span className="text-[#5FD4FD]">Video Showcases</span>
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
            Watch real engineering demonstrations: laboratory watermain
            sampling, subterranean frost-heave simulation, concrete-free cam
            joint restraint surge testing, and certified ductile iron foundry
            melt operations.
          </p>
        </div>

        {/* 4-Card Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_SHOWCASES.map((item) => {
            const isAdded = addedIds[item.product.id];
            return (
              <div
                key={item.id}
                className="bg-white border-4 border-[#5FD4FD] rounded-none overflow-hidden flex flex-col justify-between shadow-2xl hover:border-white transition-all duration-300 group hover:-translate-y-1.5 relative text-[#0082FC]"
              >
                {/* Top Video Preview Box */}
                <div className="relative w-full h-44 sm:h-48 bg-[#0082FC] overflow-hidden flex items-center justify-center">
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />

                  {/* Product Silhouette Overlay */}
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    className="absolute inset-0 m-auto max-h-[75%] max-w-[75%] object-contain filter drop-shadow-xl pointer-events-none group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 bg-[#0082FC] text-white text-[10px] font-black uppercase tracking-wider border border-[#5FD4FD]">
                      {item.badge}
                    </span>
                    <span className="px-2 py-0.5 bg-white text-[#0082FC] text-[10px] font-bold border border-[#0082FC]">
                      {item.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className="absolute inset-0 m-auto w-12 h-12 bg-white/95 hover:bg-[#5FD4FD] text-[#0082FC] flex items-center justify-center border-2 border-[#0082FC] shadow-xl transition-transform hover:scale-110 cursor-pointer z-20"
                    title={`Watch ${item.title}`}
                    aria-label={`Watch ${item.title}`}
                  >
                    <Play className="w-5 h-5 fill-[#0082FC] ml-0.5" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between text-[#0082FC]">
                  <div>
                    <span className="text-[10px] font-bold text-[#0082FC]/75 uppercase block mb-1">
                      {item.standard}
                    </span>

                    <h3 className="font-black text-sm sm:text-base uppercase tracking-tight text-[#0082FC] leading-tight mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#0082FC]/90 leading-relaxed mb-4 line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 border-t border-[#0082FC]/20 space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      className="w-full py-2 px-3 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-[#0082FC]"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Watch Full Demo</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAdd(item.product)}
                      className={`w-full py-2 px-3 text-xs font-black uppercase tracking-wider rounded-none border border-[#0082FC] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? "bg-[#5FD4FD] text-[#0082FC]"
                          : "bg-white hover:bg-[#5FD4FD]/30 text-[#0082FC]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Added to RFQ</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span>Add to Quote</span>
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

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            className="fixed inset-0 bg-[#0082FC]/85 backdrop-blur-sm cursor-default w-full h-full border-0"
            onClick={() => setActiveVideo(null)}
            aria-label="Close Video Player"
          />

          <div className="relative w-full max-w-2xl bg-white border-4 border-[#0082FC] shadow-2xl z-10 text-[#0082FC] p-4 sm:p-6 animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#0082FC] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#0082FC] text-white text-xs font-black uppercase">
                  {activeVideo.badge}
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-[#0082FC]">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1 text-[#0082FC] hover:bg-[#5FD4FD]/20 border border-[#0082FC] cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative w-full h-64 sm:h-80 bg-[#0082FC] border-2 border-[#0082FC] overflow-hidden flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <img
                src={activeVideo.posterUrl}
                alt={activeVideo.title}
                className="absolute top-3 right-3 w-16 h-16 object-contain filter drop-shadow-lg pointer-events-none bg-white/20 p-1 border border-white"
              />
            </div>

            {/* Video Specifications & Overview */}
            <div className="mt-4 pt-3 border-t border-[#0082FC]/20">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#0082FC] uppercase">
                  Standard: {activeVideo.standard}
                </span>
                <span className="text-xs bg-[#5FD4FD]/30 px-2 py-0.5 font-extrabold text-[#0082FC] border border-[#0082FC]">
                  Duration: {activeVideo.duration}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium leading-relaxed">
                {activeVideo.summary}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t-2 border-[#0082FC]/20 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  handleAdd(activeVideo.product);
                }}
                className="flex-1 py-2.5 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-all border-2 border-[#0082FC] cursor-pointer text-center"
              >
                + Add {activeVideo.product.name} to RFQ
              </button>

              <button
                type="button"
                onClick={() => {
                  onPreviewSubmittal(activeVideo.product);
                  setActiveVideo(null);
                }}
                className="flex-1 py-2.5 px-4 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white font-black text-xs uppercase tracking-wider transition-all border-2 border-[#0082FC] cursor-pointer text-center"
              >
                Download Submittal PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
