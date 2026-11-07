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
import type React from "react";
import { useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";
import { InfiniteWaterBackground } from "../common/InfiniteWaterBackground";

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
    sublabel: "AASHTO H-20 Heavy Traffic & Authentic PR Tooling",
    standard: "AASHTO H-20 • ASTM A48 35B",
    duration: "0:52",
    videoUrl: "/videos/bison-box/bison-curb-box.mp4",
    posterUrl: "/images/our-images/curb-box-ultimate.png",
    summary:
      "Watch the heavy Class 35B casting endure 40,000+ LBS highway axle wheel loads without transferring load or stress to the underground brass curb stop valve.",
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
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

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
      className="py-16 sm:py-24 bg-[#3087ff] text-white border-t-4 border-[#3087ff] border-b-4 border-[#3087ff] relative overflow-hidden"
    >
      {/* Infinite Seamless Looping Water Background Animation */}
      <InfiniteWaterBackground
        opacity="opacity-45"
        mixBlend="mix-blend-screen"
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

      {/* Floating Fluid Ambient Water Blobs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 hidden pointer-events-none fluid-wave"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 blur-3xl pointer-events-none fluid-wave"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#3087ff] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#3087ff]">
            <Video className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
            <span>Field Proof &amp; Manufacturing Demonstrations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Waterworks <span className="">Video Showcases</span>
          </h2>

          {/* Animated Hydrodynamic Water Wave Stream Indicator */}
          <div
            className="flex items-center justify-center gap-2 my-3"
            aria-hidden="true"
          >
            <span className="h-0.5 w-10 bg-white/40" />
            <span className="h-1.5 w-24 bg-[#3087ff] animate-pulse" />
            <span className="h-0.5 w-10 bg-white/40" />
          </div>

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
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="bg-white border-4 border-[#3087ff] rounded-none overflow-hidden flex flex-col justify-between shadow-2xl hover:border-white transition-all duration-300 group hover:-translate-y-1.5 relative text-[#3087ff]"
              >
                {/* Top Video Preview Box with Active Looping Water Stream */}
                <div className="relative w-full h-44 sm:h-48 bg-[#3087ff] overflow-hidden flex items-center justify-center">
                  {/* 1. Looping Water Video Flow - Active Continuous Animation */}
                  <video
                    src={item.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onCanPlay={(e) => {
                      e.currentTarget.muted = true;
                      e.currentTarget.play().catch(() => { });
                    }}
                    onEnded={(e) => {
                      e.currentTarget.currentTime = 0;
                      e.currentTarget.play().catch(() => { });
                    }}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-300"
                  />

                  {/* 2. Hydrodynamic Fluid Caustic Accent Layer */}
                  <div
                    className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay gpu-water-drift pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(ellipse at 30% 30%, rgba(48, 135, 255, 0.85) 0%, rgba(48, 135, 255, 0.95) 100%)",
                    }}
                  />

                  {/* 3. Product Silhouette Overlay */}
                  <img
                    src={item.posterUrl}
                    alt={item.title}
                    className="absolute inset-0 m-auto max-h-[75%] max-w-[75%] object-contain filter drop-shadow-xl pointer-events-none group-hover:scale-110 transition-transform duration-300 z-10"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 bg-[#3087ff] text-white text-[10px] font-black uppercase tracking-wider border border-[#3087ff]">
                      {item.badge}
                    </span>
                    <span className="px-2 py-0.5 bg-white text-[#3087ff] text-[10px] font-bold border border-[#3087ff]">
                      {item.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className="absolute inset-0 m-auto w-12 h-12 bg-white/95 hover:bg-[#3087ff] text-white flex items-center justify-center border-2 border-[#3087ff] shadow-xl transition-transform hover:scale-110 cursor-pointer z-20"
                    title={`Watch ${item.title}`}
                    aria-label={`Watch ${item.title}`}
                  >
                    <Play className="w-5 h-5 fill-[#3087ff] ml-0.5" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between text-[#3087ff]">
                  <div>
                    <span className="text-[10px] font-bold text-[#3087ff] uppercase block mb-1">
                      {item.standard}
                    </span>

                    <h3 className="font-black text-sm sm:text-base uppercase tracking-tight text-[#3087ff] leading-tight mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#3087ff] leading-relaxed mb-4 line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="pt-2 border-t border-[#3087ff] space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      className="w-full py-2 px-3 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white font-black text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-[#3087ff]"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>Watch Full Demo</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAdd(item.product)}
                      className={`w-full py-2 px-3 text-xs font-black uppercase tracking-wider rounded-none border border-[#3087ff] transition-all flex items-center justify-center gap-1.5 cursor-pointer ${isAdded
                        ? "bg-[#3087ff] text-white"
                        : "bg-white hover:bg-[#3087ff] hover:text-white text-[#3087ff]"
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-default w-full h-full border-0"
            onClick={() => setActiveVideo(null)}
            aria-label="Close Video Player"
          />

          <div className="relative w-full max-w-2xl bg-white border-4 border-[#3087ff] shadow-2xl z-10 text-[#3087ff] p-4 sm:p-6 animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#3087ff] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#3087ff] text-white text-xs font-black uppercase">
                  {activeVideo.badge}
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-[#3087ff]">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="p-1 text-[#3087ff] hover:bg-[#3087ff] hover:text-white border border-[#3087ff] cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative w-full h-64 sm:h-80 bg-[#3087ff] border-2 border-[#3087ff] overflow-hidden flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <img
                src={activeVideo.posterUrl}
                alt={activeVideo.title}
                className="absolute top-3 right-3 w-16 h-16 object-contain filter drop-shadow-lg pointer-events-none bg-white/20 p-1 border border-white"
              />
            </div>

            {/* Video Specifications & Overview */}
            <div className="mt-4 pt-3 border-t border-[#3087ff]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#3087ff] uppercase">
                  Standard: {activeVideo.standard}
                </span>
                <span className="text-xs bg-white px-2 py-0.5 font-extrabold text-[#3087ff] border border-[#3087ff]">
                  Duration: {activeVideo.duration}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#3087ff] font-medium leading-relaxed">
                {activeVideo.summary}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t-2 border-[#3087ff] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  handleAdd(activeVideo.product);
                }}
                className="flex-1 py-2.5 px-4 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white font-black text-xs uppercase tracking-wider transition-all border-2 border-[#3087ff] cursor-pointer text-center"
              >
                + Add {activeVideo.product.name} to RFQ
              </button>

              <button
                type="button"
                onClick={() => {
                  onPreviewSubmittal(activeVideo.product);
                  setActiveVideo(null);
                }}
                className="flex-1 py-2.5 px-4 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white font-black text-xs uppercase tracking-wider transition-all border-2 border-[#3087ff] cursor-pointer text-center"
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
