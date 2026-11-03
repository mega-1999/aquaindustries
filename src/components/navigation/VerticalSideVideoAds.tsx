"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  FileText,
  Maximize2,
  Play,
  Plus,
  ShieldCheck,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";

interface VideoAdItem {
  id: string;
  side: "left" | "right";
  badge: string;
  title: string;
  standard: string;
  duration: string;
  videoUrl: string;
  posterUrl: string;
  description: string;
  product: ProductItem;
}

const LEFT_VIDEO_ADS: VideoAdItem[] = [
  {
    id: "ad-left-1",
    side: "left",
    badge: "NEW INNOVATION",
    title: "Water Sampling Station",
    standard: "ANSI/NSF 61 Certified",
    duration: "0:45",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/sampling-station.png",
    description:
      "Direct municipal watermain tap demo. Eliminates customer plumbing contamination and provides EPA Lead & Copper Rule testing points.",
    product: PRODUCTS_CATALOG[0],
  },
  {
    id: "ad-left-2",
    side: "left",
    badge: "FOUNDRY CASTING",
    title: "Melville NY Melt Pour",
    standard: "ASTM A536 Grade 65-45-12",
    duration: "1:12",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/MJ_Fittings.jpeg",
    description:
      "2,500°F electric induction furnace pouring ductile iron. Traceable heat numbers cast directly on every fitting body.",
    product: PRODUCTS_CATALOG[3] || PRODUCTS_CATALOG[0],
  },
  {
    id: "ad-left-3",
    side: "left",
    badge: "HYDROSTATIC TEST",
    title: "500 PSI Burst Proofing",
    standard: "AWWA C153 / C111",
    duration: "0:58",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/MJ_Fittings.jpeg",
    description:
      "Automated pressure chamber hydro-testing compact mechanical joint bends and tees beyond 2:1 safety factor thresholds.",
    product: PRODUCTS_CATALOG[3] || PRODUCTS_CATALOG[0],
  },
];

const RIGHT_VIDEO_ADS: VideoAdItem[] = [
  {
    id: "ad-right-1",
    side: "right",
    badge: "HIGHWAY TRAFFIC",
    title: "The Century Curb Box",
    standard: "AASHTO H-20 40,000 LB",
    duration: "0:52",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/curb-box-ultimate.png",
    description:
      'Telescopic sliding test. Upper shaft adjusts from 18" to 72" burial depth, absorbing pavement frost-heave without valve crushing.',
    product: PRODUCTS_CATALOG[1],
  },
  {
    id: "ad-right-2",
    side: "right",
    badge: "JOINT RESTRAINT",
    title: "Cam-Action Restraint",
    standard: "UL Listed & FM Approved",
    duration: "1:05",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/products/Joint-Restraints.jpg",
    description:
      "Concrete-free thrust restraint. Heat-treated ductile iron cam wedges bite radially under line pressure surges.",
    product: PRODUCTS_CATALOG[2],
  },
  {
    id: "ad-right-3",
    side: "right",
    badge: "MUNICIPAL CASTING",
    title: "Highway Vane Grate",
    standard: "AASHTO M306 Proof Load",
    duration: "0:48",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/trench-grates.png",
    description:
      "Machined noise-dampening bearing seat under 40,000 lb proof load press. Eliminates street rattle and dynamic road impacts.",
    product: PRODUCTS_CATALOG[5] || PRODUCTS_CATALOG[1],
  },
];

interface VerticalSideVideoAdsProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

export const VerticalSideVideoAds: React.FC<VerticalSideVideoAdsProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<VideoAdItem | null>(
    null,
  );
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  // Monitor scroll: show only between Hero section and Footer
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Show after scrolling past hero (~600px), hide before reaching footer (~700px from bottom)
      const pastHero = scrollY > 580;
      const beforeFooter = scrollY + windowHeight < fullHeight - 650;

      setIsVisible(pastHero && beforeFooter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddProduct = (product: ProductItem) => {
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  const renderVideoCard = (ad: VideoAdItem) => {
    const isAdded = addedIds[ad.product.id];
    return (
      <div
        key={ad.id}
        className="w-48 xl:w-52 bg-white border-2 border-[#0082FC] shadow-xl text-[#0082FC] flex flex-col justify-between group transition-all duration-300 hover:border-[#5FD4FD] hover:-translate-y-1 relative"
      >
        {/* Top Video Preview Thumbnail Container */}
        <div className="relative w-full h-24 bg-[#0082FC] overflow-hidden">
          {/* Looping Ambient Water Video Animation */}
          <video
            src={ad.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-300"
          />

          {/* Product Silhouette Overlay */}
          <img
            src={ad.posterUrl}
            alt={ad.title}
            className="absolute inset-0 m-auto max-h-[75%] max-w-[75%] object-contain filter drop-shadow-lg pointer-events-none group-hover:scale-110 transition-transform duration-300"
          />

          {/* Top Pill: AD & Duration */}
          <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between z-10">
            <span className="px-1.5 py-0.5 bg-[#0082FC] text-white text-[9px] font-black uppercase tracking-wider border border-[#5FD4FD]">
              {ad.badge}
            </span>
            <span className="px-1.5 py-0.5 bg-white/90 text-[#0082FC] text-[9px] font-bold">
              {ad.duration}
            </span>
          </div>

          {/* Centered Play Button Overlay */}
          <button
            type="button"
            onClick={() => setActiveVideoModal(ad)}
            className="absolute inset-0 m-auto w-9 h-9 bg-white/90 hover:bg-[#5FD4FD] text-[#0082FC] flex items-center justify-center border border-[#0082FC] shadow-md transition-transform hover:scale-110 cursor-pointer z-20"
            title={`Watch ${ad.title} video`}
            aria-label={`Watch ${ad.title} video`}
          >
            <Play className="w-4 h-4 fill-[#0082FC] ml-0.5" />
          </button>
        </div>

        {/* Card Content Strip */}
        <div className="p-2.5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#0082FC]/75 uppercase truncate mb-0.5">
              <span>{ad.standard}</span>
            </div>

            <h4 className="font-black text-xs uppercase tracking-tight text-[#0082FC] leading-tight line-clamp-1">
              {ad.title}
            </h4>

            <p className="text-[11px] text-[#0082FC]/85 leading-snug line-clamp-2 mt-1">
              {ad.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-2 pt-2 border-t border-[#0082FC]/20 flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveVideoModal(ad)}
              className="flex-1 py-1 px-1.5 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white border border-[#0082FC] text-[10px] font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5" />
              <span>Watch</span>
            </button>

            <button
              type="button"
              onClick={() => handleAddProduct(ad.product)}
              className={`py-1 px-2 border border-[#0082FC] text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center ${
                isAdded
                  ? "bg-[#5FD4FD] text-[#0082FC]"
                  : "bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC]"
              }`}
              title="Add to Quote"
            >
              {isAdded ? (
                <Check className="w-3 h-3 stroke-[3]" />
              ) : (
                <Plus className="w-3 h-3 stroke-[2.5]" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* 1. LEFT SIDE VERTICAL VIDEO ADS COLUMN (Fixed in left gutter) */}
      <aside
        aria-label="Left Side Product Video Ads"
        className={`fixed top-24 left-3 z-30 transition-all duration-300 select-none ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hidden min-[1680px]:flex flex-col gap-3.5`}
      >
        <div className="bg-[#0082FC] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 border-2 border-[#5FD4FD] text-center shadow-md">
          <span>Waterworks Reels &bull; Left</span>
        </div>

        {LEFT_VIDEO_ADS.map(renderVideoCard)}
      </aside>

      {/* 2. RIGHT SIDE VERTICAL VIDEO ADS COLUMN (Fixed in right gutter) */}
      <aside
        aria-label="Right Side Product Video Ads"
        className={`fixed top-24 right-3 z-30 transition-all duration-300 select-none ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hidden min-[1680px]:flex flex-col gap-3.5`}
      >
        <div className="bg-[#0082FC] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 border-2 border-[#5FD4FD] text-center shadow-md">
          <span>Quality Proof Reels &bull; Right</span>
        </div>

        {RIGHT_VIDEO_ADS.map(renderVideoCard)}
      </aside>

      {/* 3. RESPONSIVE FLOATING EDGE PILLS (For screens < 1680px where gutters are narrower) */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-30 min-[1680px]:hidden transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setLeftDrawerOpen(true)}
          className="bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-y-2 border-r-2 border-white px-2 py-3 text-[10px] font-black uppercase tracking-widest vertical-writing-lr shadow-2xl flex items-center gap-1 cursor-pointer transition-all [writing-mode:vertical-lr]"
          title="Open Left Video Ads"
        >
          <Play className="w-3 h-3 fill-current rotate-90" />
          <span>Left Video Ads (4)</span>
        </button>
      </div>

      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-30 min-[1680px]:hidden transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={() => setRightDrawerOpen(true)}
          className="bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-y-2 border-l-2 border-white px-2 py-3 text-[10px] font-black uppercase tracking-widest vertical-writing-rl shadow-2xl flex items-center gap-1 cursor-pointer transition-all [writing-mode:vertical-rl]"
          title="Open Right Video Ads"
        >
          <Play className="w-3 h-3 fill-current -rotate-90" />
          <span>Right Video Ads (4)</span>
        </button>
      </div>

      {/* 4. SLIDE-OVER DRAWER FOR LEFT VIDEO ADS (Responsive) */}
      {leftDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            className="fixed inset-0 bg-[#0082FC]/75 backdrop-blur-xs cursor-default w-full h-full border-0"
            onClick={() => setLeftDrawerOpen(false)}
            aria-label="Close Left Video Ads"
          />
          <div className="relative w-72 max-w-[85vw] bg-white h-full shadow-2xl border-r-4 border-[#0082FC] z-10 p-4 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#0082FC]">
                <span className="font-black text-sm uppercase text-[#0082FC]">
                  Left Video Ads &bull; Waterworks
                </span>
                <button
                  type="button"
                  onClick={() => setLeftDrawerOpen(false)}
                  className="p-1 text-[#0082FC] hover:bg-[#5FD4FD]/30 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {LEFT_VIDEO_ADS.map(renderVideoCard)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SLIDE-OVER DRAWER FOR RIGHT VIDEO ADS (Responsive) */}
      {rightDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            className="fixed inset-0 bg-[#0082FC]/75 backdrop-blur-xs cursor-default w-full h-full border-0"
            onClick={() => setRightDrawerOpen(false)}
            aria-label="Close Right Video Ads"
          />
          <div className="relative w-72 max-w-[85vw] bg-white h-full shadow-2xl border-l-4 border-[#0082FC] z-10 p-4 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#0082FC]">
                <span className="font-black text-sm uppercase text-[#0082FC]">
                  Right Video Ads &bull; Quality
                </span>
                <button
                  type="button"
                  onClick={() => setRightDrawerOpen(false)}
                  className="p-1 text-[#0082FC] hover:bg-[#5FD4FD]/30 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {RIGHT_VIDEO_ADS.map(renderVideoCard)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. FULL VIDEO PLAYER MODAL (When clicking any video play button) */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            className="fixed inset-0 bg-[#0082FC]/85 backdrop-blur-sm cursor-default w-full h-full border-0"
            onClick={() => setActiveVideoModal(null)}
            aria-label="Close Video Player"
          />

          <div className="relative w-full max-w-2xl bg-white border-4 border-[#5FD4FD] shadow-2xl z-10 text-[#0082FC] p-4 sm:p-6 animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#0082FC] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#0082FC] text-white text-xs font-black uppercase">
                  {activeVideoModal.badge}
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-[#0082FC]">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="p-1 text-[#0082FC] hover:bg-[#5FD4FD]/20 border border-[#0082FC] cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative w-full h-64 sm:h-80 bg-[#0082FC] border-2 border-[#0082FC] overflow-hidden flex items-center justify-center">
              <video
                src={activeVideoModal.videoUrl}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <img
                src={activeVideoModal.posterUrl}
                alt={activeVideoModal.title}
                className="absolute top-3 right-3 w-16 h-16 object-contain filter drop-shadow-lg pointer-events-none bg-white/20 p-1 border border-white"
              />
            </div>

            {/* Video Specifications & Overview */}
            <div className="mt-4 pt-3 border-t border-[#0082FC]/20">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#0082FC] uppercase">
                  Standard: {activeVideoModal.standard}
                </span>
                <span className="text-xs bg-[#5FD4FD]/30 px-2 py-0.5 font-extrabold text-[#0082FC] border border-[#0082FC]">
                  Duration: {activeVideoModal.duration}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium leading-relaxed">
                {activeVideoModal.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t-2 border-[#0082FC]/20 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  handleAddProduct(activeVideoModal.product);
                }}
                className="flex-1 py-2.5 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-all border-2 border-[#0082FC] cursor-pointer text-center"
              >
                + Add {activeVideoModal.product.name} to RFQ
              </button>

              <button
                type="button"
                onClick={() => {
                  onPreviewSubmittal(activeVideoModal.product);
                  setActiveVideoModal(null);
                }}
                className="flex-1 py-2.5 px-4 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white font-black text-xs uppercase tracking-wider transition-all border-2 border-[#0082FC] cursor-pointer text-center"
              >
                Download Submittal PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
