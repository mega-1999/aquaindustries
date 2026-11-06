"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  Plus,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
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
    videoUrl: "/videos/sampling-stations.mp4",
    posterUrl: "/images/our-images/sampling-station.png",
    description:
      "Direct municipal watermain tap demo. Eliminates customer plumbing contamination and provides EPA Lead & Copper Rule testing points.",
    product: PRODUCTS_CATALOG[0],
  },
  {
    id: "ad-left-2",
    side: "left",
    badge: "HIGHWAY TRAFFIC",
    title: "The Century Curb Box",
    standard: "AASHTO H-20 40,000 LB",
    duration: "0:52",
    videoUrl: "/videos/bison-box/bison-curb-box.mp4",
    posterUrl: "/images/our-images/curb-box-ultimate.png",
    description:
      "AASHTO H-20 heavy highway casting. Rigid Class 35B iron withstands severe 40,000 LB wheel loads without valve crushing.",
    product: PRODUCTS_CATALOG[1],
  },
  {
    id: "ad-left-3",
    side: "left",
    badge: "FOUNDRY CASTING",
    title: "Century Next-Gen Box",
    standard: "ASTM A48 Class 35B",
    duration: "0:38",
    videoUrl: "/videos/bison-box/bison-curb-box-next-centruary.mp4",
    posterUrl: "/images/our-images/curb-box-buffalo.png",
    description:
      "Authentic PR-branded pattern tooling with arch base securely straddling 3/4\" through 2\" municipal curb stops.",
    product: PRODUCTS_CATALOG[1],
  },
  {
    id: "ad-left-4",
    side: "left",
    badge: "MECHANICAL RESTRAINT",
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
    id: "ad-left-5",
    side: "left",
    badge: "HYDROSTATIC TEST",
    title: "C153 Compact Fittings",
    standard: "AWWA C153 / C111",
    duration: "0:58",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/MJ_Fittings.jpeg",
    description:
      "Automated pressure chamber hydro-testing compact mechanical joint bends and tees beyond 2:1 safety factor thresholds.",
    product: PRODUCTS_CATALOG[3] || PRODUCTS_CATALOG[0],
  },
  {
    id: "ad-left-6",
    side: "left",
    badge: "ROADWAY DRAINAGE",
    title: "Heavy Trench Grates",
    standard: "AASHTO M306 Proof Load",
    duration: "0:48",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/trench-grates.png",
    description:
      "Machined noise-dampening bearing seat under 40,000 lb proof load press. Eliminates street rattle and dynamic road impacts.",
    product: PRODUCTS_CATALOG[5] || PRODUCTS_CATALOG[1],
  },
  {
    id: "ad-left-7",
    side: "left",
    badge: "FIELD INSPECTION",
    title: "Bison Field Close-Up",
    standard: "ASTM A48 Class 35B",
    duration: "0:30",
    videoUrl: "/videos/bison-box/bison-curb-box2.mp4",
    posterUrl: "/images/our-images/curb-box-minneapolis.png",
    description:
      "Tamper-resistant recessed brass pentagon bolt security closure prevents unauthorized valve manipulation.",
    product: PRODUCTS_CATALOG[1],
  },
  {
    id: "ad-left-8",
    side: "left",
    badge: "MUNICIPAL INLET",
    title: "Curb Inlets & Basins",
    standard: "ASTM A48 Class 35B",
    duration: "1:02",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/curb_inlet_riser_heavy_iron.png",
    description:
      "Precision cast iron curb opening inlets engineered for high-velocity storm capture and street profile seating.",
    product: PRODUCTS_CATALOG[4] || PRODUCTS_CATALOG[0],
  },
  {
    id: "ad-left-9",
    side: "left",
    badge: "ADA COMPLIANCE",
    title: "Warning Dome Plates",
    standard: "ADAAG Title III",
    duration: "0:40",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/warning-plate.png",
    description:
      "Truncated dome tactile tiles cast in unpainted natural patina ductile iron with non-slip slip-resistance ratings.",
    product: PRODUCTS_CATALOG[6] || PRODUCTS_CATALOG[0],
  },
  {
    id: "ad-left-10",
    side: "left",
    badge: "CIVIL UTILITY",
    title: "Monument & Cleanout",
    standard: "Heavy Duty Municipal",
    duration: "0:44",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/our-images/cleanout.png",
    description:
      "Self-centering cast iron monument frames and cleanout access covers protecting survey pins and municipal cleanouts.",
    product: PRODUCTS_CATALOG[7] || PRODUCTS_CATALOG[0],
  },
  {
    id: "ad-left-11",
    side: "left",
    badge: "PVC COMPATIBLE",
    title: "Series 1400 Restraint",
    standard: "UNI-B-13 / AWWA C900",
    duration: "0:55",
    videoUrl: "https://soleno.com/wp-content/uploads/2024/12/bkg_water111.mp4",
    posterUrl: "/images/products/Joint-Restraints.jpg",
    description:
      "360-degree radial gripping pads ensure uniform circumferential hold on PVC pipe walls without point-loading stress.",
    product: PRODUCTS_CATALOG[14] || PRODUCTS_CATALOG[2],
  },
  {
    id: "ad-left-12",
    side: "left",
    badge: "FOUNDRY QA",
    title: "NY Melt Pour Demo",
    standard: "ASTM A536 Grade 65-45-12",
    duration: "1:15",
    videoUrl: "/videos/swan_vidoe.mp4",
    posterUrl: "/images/our-images/Ornamental_Castings.jpeg",
    description:
      "2,500°F electric induction furnace pouring ductile iron. Traceable heat numbers cast directly on every casting.",
    product: PRODUCTS_CATALOG[8] || PRODUCTS_CATALOG[3],
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
    videoUrl: "/videos/bison-box/bison-curb-box.mp4",
    posterUrl: "/images/our-images/curb-box-ultimate.png",
    description:
      "AASHTO H-20 heavy highway casting. Rigid Class 35B iron withstands severe 40,000 LB wheel loads without valve crushing.",
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

interface SideAdCardProps {
  ad: VideoAdItem;
  isAdded: boolean;
  onPlay: (ad: VideoAdItem) => void;
  onAdd: (product: ProductItem) => void;
}

const SideAdCard: React.FC<SideAdCardProps> = ({
  ad,
  isAdded,
  onPlay,
  onAdd,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video only when card is in or near viewport (prevents GPU decode overhead for 60+ cards)
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { rootMargin: "250px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="w-36 min-[1720px]:w-40 min-[1900px]:w-44 bg-white border-2 border-[#0074f0] shadow-lg text-[#0074f0] flex flex-col justify-between group transition-all duration-300 hover:border-[#0082FC] hover:-translate-y-0.5 relative shrink-0"
    >
      {/* Top Video Preview Thumbnail Container */}
      <div className="relative w-full h-18 min-[1720px]:h-22 bg-[#0074f0] overflow-hidden">
        {/* Active Ambient Water Looping Video */}
        <video
          ref={videoRef}
          src={ad.videoUrl}
          loop
          muted
          playsInline
          preload="none"
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(() => {});
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-opacity duration-300"
        />

        {/* Hydrodynamic Fluid Caustic Accent Layer */}
        <div
          className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay gpu-water-drift pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 30%, rgba(95, 212, 253, 0.8) 0%, rgba(0, 130, 252, 0.95) 100%)",
          }}
        />

        {/* Product Silhouette Overlay */}
        <img
          src={ad.posterUrl}
          alt={ad.title}
          className="absolute inset-0 m-auto max-h-[75%] max-w-[75%] object-contain filter drop-shadow-lg pointer-events-none group-hover:scale-105 transition-transform duration-300"
        />

        {/* Top Pill: AD & Duration */}
        <div className="absolute top-1 left-1 right-1 flex items-center justify-between z-10">
          <span className="px-1 py-0.2 bg-[#0074f0] text-white text-[8px] font-black uppercase tracking-wider border border-[#0082FC]">
            {ad.badge}
          </span>
          <span className="px-1 py-0.2 bg-white/90 text-[#0074f0] text-[8px] font-bold">
            {ad.duration}
          </span>
        </div>

        {/* Centered Play Button Overlay */}
        <button
          type="button"
          onClick={() => onPlay(ad)}
          className="absolute inset-0 m-auto w-8 h-8 bg-white/90 hover:bg-[#0082FC] text-[#0074f0] flex items-center justify-center border border-[#0074f0] shadow-md transition-transform hover:scale-110 cursor-pointer z-20"
          title={`Watch ${ad.title} video`}
          aria-label={`Watch ${ad.title} video`}
        >
          <Play className="w-3.5 h-3.5 fill-[#0074f0] ml-0.5" />
        </button>
      </div>

      {/* Card Content Strip */}
      <div className="p-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-[9px] font-bold text-[#0074f0]/75 uppercase truncate mb-0.5">
            <span>{ad.standard}</span>
          </div>

          <h4 className="font-black text-[11px] uppercase tracking-tight text-[#0074f0] leading-tight line-clamp-1">
            {ad.title}
          </h4>

          <p className="text-[10px] text-[#0074f0]/80 leading-tight line-clamp-1 min-[1720px]:line-clamp-2 mt-0.5">
            {ad.description}
          </p>
        </div>

        {/* Action CTAs */}
        <div className="mt-1.5 pt-1.5 border-t border-[#0074f0]/20 flex items-center gap-1">
          <button
            type="button"
            onClick={() => onPlay(ad)}
            className="flex-1 py-0.5 px-1 bg-white hover:bg-[#0074f0] text-[#0074f0] hover:text-white border border-[#0074f0] text-[9px] font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-0.5 cursor-pointer"
          >
            <Play className="w-2 h-2" />
            <span>Go to product</span>
          </button>

          <button
            type="button"
            onClick={() => onAdd(ad.product)}
            className={`py-0.5 px-1.5 border border-[#0074f0] text-[9px] font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center ${
              isAdded
                ? "bg-[#0082FC] text-[#0074f0]"
                : "bg-[#0074f0] text-white hover:bg-[#0082FC] hover:text-[#0074f0]"
            }`}
            title="Add to Quote"
          >
            {isAdded ? (
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            ) : (
              <Plus className="w-2.5 h-2.5 stroke-[2.5]" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

interface VerticalSideVideoAdsProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

export const VerticalSideVideoAds: React.FC<VerticalSideVideoAdsProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
}) => {
  const [activeVideoModal, setActiveVideoModal] = useState<VideoAdItem | null>(
    null,
  );
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [loopedAds, setLoopedAds] = useState<VideoAdItem[]>(LEFT_VIDEO_ADS);
  const [isFooterNear, setIsFooterNear] = useState(false);

  // Monitor footer proximity to prevent side ads from ever overlapping the footer
  useEffect(() => {
    const checkFooterProximity = () => {
      const footerEl = document.querySelector("footer");
      if (!footerEl) return;
      const rect = footerEl.getBoundingClientRect();
      // Hide before footer touches viewport (40px buffer)
      const near = rect.top <= window.innerHeight - 30;
      setIsFooterNear(near);
    };

    window.addEventListener("scroll", checkFooterProximity, { passive: true });
    window.addEventListener("resize", checkFooterProximity, { passive: true });
    checkFooterProximity();

    return () => {
      window.removeEventListener("scroll", checkFooterProximity);
      window.removeEventListener("resize", checkFooterProximity);
    };
  }, []);

  // Dynamically calculate how many card repetitions are needed to fill down to the footer
  useEffect(() => {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;

    const computeRepeatedCards = () => {
      const mainHeight = mainEl.scrollHeight || mainEl.clientHeight;
      // Single card height is ~175px + 10px gap = 185px
      const cardHeightWithGap = 185;
      // Guarantee loop terminates strictly 220px before the footer boundary
      const availableHeight = Math.max(mainHeight - 220, 1000);
      const totalCards = Math.max(
        12,
        Math.floor(availableHeight / cardHeightWithGap),
      );

      const items: VideoAdItem[] = [];
      for (let i = 0; i < totalCards; i++) {
        const base = LEFT_VIDEO_ADS[i % LEFT_VIDEO_ADS.length];
        items.push({
          ...base,
          id: `${base.id}-loop-${i}`,
        });
      }
      setLoopedAds(items);
    };

    computeRepeatedCards();

    const ro = new ResizeObserver(() => {
      computeRepeatedCards();
    });
    ro.observe(mainEl);
    window.addEventListener("resize", computeRepeatedCards);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", computeRepeatedCards);
    };
  }, []);

  const handleAddProduct = (product: ProductItem) => {
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <>
      {/* 1. LEFT SIDE VERTICAL VIDEO ADS COLUMN:
          - Starts at top with 10px space below navbar.
          - Loops the 12 cards infinitely based on page height, ending cleanly before the footer.
          - max-h-[calc(100%-200px)] and overflow-hidden prevent ANY cards from bleeding into the footer.
          - Absolute positioning ensures it scrolls along naturally with website scroll. */}
      <aside
        aria-label="Left Side Product Video Ads"
        className="absolute top-[10px] pb-[10px] left-2 min-[1720px]:left-3 min-[1900px]:left-4 z-30 hidden min-[1600px]:flex flex-col gap-[10px] select-none max-h-[calc(100%-200px)] overflow-hidden"
      >
        {/* Header Bar */}
        <div className="bg-[#0074f0] text-white text-[9px] font-black uppercase tracking-wider px-2 py-1.5 border-2 border-[#0082FC] flex items-center justify-between shadow-md mb-0.5">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Waterworks Reels ({LEFT_VIDEO_ADS.length})
          </span>
        </div>

        {/* Looped Video Cards Stack until Footer */}
        <div className="flex flex-col gap-[10px]">
          {loopedAds.map((ad) => (
            <SideAdCard
              key={ad.id}
              ad={ad}
              isAdded={Boolean(addedIds[ad.product.id])}
              onPlay={setActiveVideoModal}
              onAdd={handleAddProduct}
            />
          ))}
        </div>
      </aside>

      {/* 2. RIGHT SIDE VERTICAL VIDEO ADS COLUMN:
          - Fixed in the vertical center of the screen, safely clamped below the navbar (min top 125px).
          - Automatically fades out when scrolling near the footer to prevent any overlap.
          - Contains the 3 cards. */}
      <aside
        aria-label="Right Side Product Video Ads"
        style={{
          top: "max(125px, calc(50vh - 255px))",
        }}
        className={`fixed right-2 min-[1720px]:right-3 min-[1900px]:right-4 z-30 hidden min-[1600px]:flex flex-col gap-[10px] select-none shadow-xl max-h-[calc(100vh-140px)] transition-all duration-300 ease-out ${
          isFooterNear
            ? "opacity-0 pointer-events-none translate-y-6 scale-95"
            : "opacity-100 pointer-events-auto translate-y-0 scale-100"
        }`}
      >
        {/* Header Bar */}
        <div className="bg-[#0074f0] text-white text-[9px] font-black uppercase tracking-wider px-2 py-1.5 border-2 border-[#0082FC] flex items-center justify-between shadow-md mb-0.5">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5FD4FD] animate-pulse" />
            Quality Reels ({RIGHT_VIDEO_ADS.length})
          </span>
        </div>

        {/* 3 Video Cards Stack */}
        <div className="flex flex-col gap-[10px]">
          {RIGHT_VIDEO_ADS.map((ad) => (
            <SideAdCard
              key={ad.id}
              ad={ad}
              isAdded={Boolean(addedIds[ad.product.id])}
              onPlay={setActiveVideoModal}
              onAdd={handleAddProduct}
            />
          ))}
        </div>
      </aside>

      {/* 3. RESPONSIVE FLOATING EDGE PILLS (Left & Right for screens < 1600px) */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-30 min-[1600px]:hidden transition-all duration-300 ${
          isFooterNear
            ? "opacity-0 pointer-events-none -translate-x-full"
            : "opacity-100 pointer-events-auto translate-x-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setLeftDrawerOpen(true)}
          className="bg-[#0074f0] hover:bg-[#0082FC] text-white hover:text-[#5FD4FD] border-y-2 border-r-2 border-white px-1.5 py-3 text-[9px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-1 cursor-pointer transition-all [writing-mode:vertical-lr]"
          title="Open Waterworks Video Reels"
        >
          <Play className="w-2.5 h-2.5 fill-current rotate-90" />
          <span>Waterworks Reels ({LEFT_VIDEO_ADS.length})</span>
          <ChevronRight className="w-2.5 h-2.5 rotate-90 mt-1" />
        </button>
      </div>

      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-30 min-[1600px]:hidden transition-all duration-300 ${
          isFooterNear
            ? "opacity-0 pointer-events-none translate-x-full"
            : "opacity-100 pointer-events-auto translate-x-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setRightDrawerOpen(true)}
          className="bg-[#0074f0] hover:bg-[#0082FC] text-white hover:text-[#5FD4FD] border-y-2 border-l-2 border-white px-1.5 py-3 text-[9px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-1 cursor-pointer transition-all [writing-mode:vertical-rl]"
          title="Open Quality Reels"
        >
          <Play className="w-2.5 h-2.5 fill-current -rotate-90" />
          <span>Quality Reels ({RIGHT_VIDEO_ADS.length})</span>
          <ChevronLeft className="w-2.5 h-2.5 -rotate-90 mt-1" />
        </button>
      </div>

      {/* 4. SLIDE-OVER DRAWER FOR LEFT VIDEO ADS (Responsive for all screen sizes) */}
      {leftDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <button
            type="button"
            className="fixed inset-0 bg-[#0074f0]/75 backdrop-blur-xs cursor-default w-full h-full border-0"
            onClick={() => setLeftDrawerOpen(false)}
            aria-label="Close Left Video Ads"
          />
          <div className="relative w-64 max-w-[85vw] bg-white h-full shadow-2xl border-r-4 border-[#0074f0] z-10 p-3.5 flex flex-col justify-between overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#0082FC_rgba(0,130,252,0.1)]">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b-2 border-[#0082fc] sticky top-0 bg-white z-20">
                <span className="font-black text-xs uppercase text-[#0074f0]">
                  Waterworks Reels ({LEFT_VIDEO_ADS.length} Products)
                </span>
                <button
                  type="button"
                  onClick={() => setLeftDrawerOpen(false)}
                  className="p-1 text-[#0074f0] hover:bg-[#0082FC]/30 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-3 pb-6">
                {LEFT_VIDEO_ADS.map((ad) => (
                  <SideAdCard
                    key={ad.id}
                    ad={ad}
                    isAdded={Boolean(addedIds[ad.product.id])}
                    onPlay={setActiveVideoModal}
                    onAdd={handleAddProduct}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SLIDE-OVER DRAWER FOR RIGHT VIDEO ADS (Responsive for all screen sizes) */}
      {rightDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            className="fixed inset-0 bg-[#0074f0]/75 backdrop-blur-xs cursor-default w-full h-full border-0"
            onClick={() => setRightDrawerOpen(false)}
            aria-label="Close Right Video Ads"
          />
          <div className="relative w-64 max-w-[85vw] bg-white h-full shadow-2xl border-l-4 border-[#0074f0] z-10 p-3.5 flex flex-col justify-between overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#0082FC_rgba(0,130,252,0.1)]">
            <div>
              <div className="flex items-center justify-between pb-2.5 mb-3 border-b-2 border-[#0082FC] sticky top-0 bg-white z-20">
                <span className="font-black text-xs uppercase text-[#0074f0]">
                  Quality Reels ({RIGHT_VIDEO_ADS.length} Products)
                </span>
                <button
                  type="button"
                  onClick={() => setRightDrawerOpen(false)}
                  className="p-1 text-[#0074f0] hover:bg-[#0082FC]/30 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-3 pb-6">
                {RIGHT_VIDEO_ADS.map((ad) => (
                  <SideAdCard
                    key={ad.id}
                    ad={ad}
                    isAdded={Boolean(addedIds[ad.product.id])}
                    onPlay={setActiveVideoModal}
                    onAdd={handleAddProduct}
                  />
                ))}
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
            className="fixed inset-0 bg-[#0074f0]/85 backdrop-blur-sm cursor-default w-full h-full border-0"
            onClick={() => setActiveVideoModal(null)}
            aria-label="Close Video Player"
          />

          <div className="relative w-full max-w-2xl bg-white border-4 border-[#0082FC] shadow-2xl z-10 text-[#0074f0] p-4 sm:p-6 animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#0074f0] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#0074f0] text-white text-xs font-black uppercase">
                  {activeVideoModal.badge}
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-[#0074f0]">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="p-1 text-[#0074f0] hover:bg-[#0082FC]/20 border border-[#0074f0] cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative w-full h-64 sm:h-80 bg-[#0074f0] border-2 border-[#0074f0] overflow-hidden flex items-center justify-center">
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
            <div className="mt-4 pt-3 border-t border-[#0074f0]/20">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-[#0074f0] uppercase">
                  Standard: {activeVideoModal.standard}
                </span>
                <span className="text-xs bg-[#0082FC]/30 px-2 py-0.5 font-extrabold text-[#0074f0] border border-[#0074f0]">
                  Duration: {activeVideoModal.duration}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#0074f0]/90 font-medium leading-relaxed">
                {activeVideoModal.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 pt-3 border-t-2 border-[#0074f0]/20 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  handleAddProduct(activeVideoModal.product);
                }}
                className="flex-1 py-2.5 px-4 bg-[#0074f0] hover:bg-[#0082FC] text-white hover:text-[#0074f0] font-black text-xs uppercase tracking-wider transition-all border-2 border-[#0074f0] cursor-pointer text-center"
              >
                + Add {activeVideoModal.product.name} to RFQ
              </button>

              <button
                type="button"
                onClick={() => {
                  onPreviewSubmittal(activeVideoModal.product);
                  setActiveVideoModal(null);
                }}
                className="flex-1 py-2.5 px-4 bg-white hover:bg-[#0074f0] text-[#0074f0] hover:text-white font-black text-xs uppercase tracking-wider transition-all border-2 border-[#0074f0] cursor-pointer text-center"
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
