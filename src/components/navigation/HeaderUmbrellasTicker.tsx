"use client";

import { Droplets, ShieldCheck, Sparkles } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface UmbrellaProductItem {
  id: string;
  title: string;
  shortLabel: string;
  videoSrc: string;
  targetId: string;
  categoryFilter?: string;
  badge: string;
}

const UMBRELLA_PRODUCTS: UmbrellaProductItem[] = [
  {
    id: "sampling-station",
    title: "Sampling Stations",
    shortLabel: "Sampling",
    videoSrc: "/videos/umbrellas/sampling_station.mp4",
    targetId: "#soleno-sampling-hero",
    categoryFilter: "sampling-stations",
    badge: "EPA Lead & Copper",
  },
  {
    id: "bison-curb-box",
    title: "Bison Curb Boxes",
    shortLabel: "Curb Boxes",
    videoSrc: "/videos/umbrellas/bison_curb_box.mp4",
    targetId: "#curb-box-spotlight",
    categoryFilter: "valve-meter-boxes",
    badge: "AASHTO H-20",
  },
  {
    id: "mj-fittings",
    title: "MJ Fittings & Restraints",
    shortLabel: "MJ Fittings",
    videoSrc: "/videos/umbrellas/mj_fitting.mp4",
    targetId: "#c153-fittings-schedule",
    categoryFilter: "fittings",
    badge: "AWWA C153 / C110",
  },
  {
    id: "trash-racks",
    title: "Basin Trash Racks",
    shortLabel: "Trash Racks",
    videoSrc: "/videos/umbrellas/trash_racks.mp4",
    targetId: "#stormwater-trash-racks",
    categoryFilter: "stormwater",
    badge: "Anti-Vortex Debris",
  },
  {
    id: "trench-grates",
    title: "Culvert & Trench Grates",
    shortLabel: "Pipe Grates",
    videoSrc: "/videos/umbrellas/trench_grate.mp4",
    targetId: "#culvert-pipe-grates",
    categoryFilter: "castings",
    badge: "Highway Heavy Duty",
  },
  {
    id: "flangs",
    title: "Flanges & Adapters",
    shortLabel: "Flanges",
    videoSrc: "/videos/umbrellas/flangs.mp4",
    targetId: "#c153-fittings-schedule",
    categoryFilter: "fittings",
    badge: "Class 125/150",
  },
  {
    id: "valves",
    title: "Valves & Flow Controls",
    shortLabel: "Valves",
    videoSrc: "/videos/umbrellas/valves.mp4",
    targetId: "#engineering-spotlight",
    categoryFilter: "valves",
    badge: "AWWA Gate & Check",
  },
  {
    id: "construction-casting",
    title: "Construction Castings",
    shortLabel: "Castings",
    videoSrc: "/videos/umbrellas/construction_casting.mp4",
    targetId: "#catch-basin-traps",
    categoryFilter: "castings",
    badge: "ASTM A48 Class 35B",
  },
  {
    id: "pumps",
    title: "Waterworks Pumps & Stations",
    shortLabel: "Pumps",
    videoSrc: "/videos/umbrellas/pumps.mp4",
    targetId: "#infrastructure-hero",
    categoryFilter: "accessories",
    badge: "Heavy Duty Municipal",
  },
  {
    id: "water-works",
    title: "Municipal Water Works",
    shortLabel: "Water Works",
    videoSrc: "/videos/umbrellas/water_work.mp4",
    targetId: "#umbrella-showcase",
    categoryFilter: "all",
    badge: "100% AIS Ready",
  },
];

interface HeaderUmbrellasTickerProps {
  onSelectCategory?: (category: string) => void;
}

export const HeaderUmbrellasTicker: React.FC<HeaderUmbrellasTickerProps> = ({
  onSelectCategory,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClick = (item: UmbrellaProductItem) => {
    if (item.categoryFilter && onSelectCategory) {
      onSelectCategory(item.categoryFilter);
    }
    const el = document.querySelector(item.targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      aria-label="Water Works Umbrella Products Quick Bar"
      className="w-full bg-[#3087ff] text-white border-b-2 border-white/30 overflow-hidden relative shadow-inner select-none"
    >
      <div className="w-full px-3 sm:px-4 py-1.5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Tagline Ribbon (Ben Mega Foundries US Official Brandline) */}
        <div className="flex items-center gap-2 shrink-0 pr-2 border-r-2 border-white/30 hidden md:flex">
          <div className="w-5 h-5 bg-white text-[#3087ff] flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
            ☂
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-white whitespace-nowrap leading-tight">
              We Have You Covered
            </span>
            <span className="text-[8px] font-mono tracking-wider text-white/90 whitespace-nowrap uppercase leading-tight">
              With Water Works Products......
            </span>
          </div>
        </div>

        {/* 6 Individual Product Rotating Umbrellas Strip */}
        <div className="flex-1 flex items-center justify-around gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-0.5">
          {UMBRELLA_PRODUCTS.map((prod) => {
            const isHovered = hoveredId === prod.id;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => handleClick(prod)}
                onMouseEnter={() => setHoveredId(prod.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group flex items-center gap-2 sm:gap-2.5 px-2 sm:px-2.5 py-1 border transition-all duration-200 cursor-pointer shrink-0 rounded-none ${
                  isHovered
                    ? "bg-white text-[#3087ff] border-white shadow-md -translate-y-0.5"
                    : "bg-white/10 hover:bg-white/20 text-white border-white/30"
                }`}
                title={`Explore ${prod.title} — ${prod.badge}`}
              >
                {/* Micro Umbrella Rotating Video Bubble */}
                <div
                  className={`relative w-8 h-8 sm:w-9 sm:h-9 overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                    isHovered
                      ? "border-[#3087ff] shadow-sm scale-105"
                      : "border-white/80 bg-white"
                  }`}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center"
                  >
                    <source src={prod.videoSrc} type="video/mp4" />
                  </video>
                </div>

                {/* Product Title & Standard Tag */}
                <div className="flex flex-col items-start text-left leading-tight">
                  <span
                    className={`text-[10px] sm:text-[11px] font-black uppercase tracking-tight whitespace-nowrap transition-colors ${
                      isHovered ? "text-[#3087ff]" : "text-white"
                    }`}
                  >
                    {prod.shortLabel}
                  </span>
                  <span
                    className={`text-[8px] font-mono uppercase tracking-wider whitespace-nowrap hidden sm:inline ${
                      isHovered ? "text-[#3087ff]/80" : "text-white/80"
                    }`}
                  >
                    {prod.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Call-to-Action Mini Badge */}
        <div className="shrink-0 pl-2 border-l-2 border-white/30 hidden lg:flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-white whitespace-nowrap">
            10 Product Lines
          </span>
        </div>
      </div>
    </div>
  );
};

