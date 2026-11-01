"use client";

import { FileCheck2, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import type React from "react";

interface GlobalUtilityTickerProps {
  onOpenYardModal: () => void;
  selectedYardCity?: string;
}

export const GlobalUtilityTicker: React.FC<GlobalUtilityTickerProps> = ({
  onOpenYardModal,
  selectedYardCity = "Chicago, IL",
}) => {
  return (
    <aside
      aria-label="Live municipal specifications and quick actions"
      className="bg-[#0082fc] border-b border-[#5fd4fd]/30 text-xs sm:text-sm text-white select-none relative z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 gap-4 overflow-hidden">
          {/* Left: Direct Mill & Stocking Yard Availability */}
          <div className="flex-1 flex items-center min-w-0 overflow-hidden pr-3">
            <div className="flex items-center gap-1.5 shrink-0 bg-white text-[#0082fc] font-bold px-2.5 py-1 rounded-none text-xs whitespace-nowrap mr-3 shadow-xs">
              <span className="w-2 h-2 rounded-none bg-[#5fd4fd] animate-ping" />
              <span className="whitespace-nowrap font-extrabold">
                YARD FEED
              </span>
            </div>

            <div className="relative overflow-hidden w-full whitespace-nowrap">
              <div className="animate-ticker inline-flex items-center gap-8 text-xs sm:text-sm text-white font-semibold">
                <span className="whitespace-nowrap text-white">
                  Direct Mill &amp; Stocking Yard Availability:{" "}
                  <strong className="text-[#5fd4fd] font-extrabold">
                    Eastern &amp; Central Hubs
                  </strong>
                </span>
                <span className="text-[#5fd4fd]">•</span>
                <span className="whitespace-nowrap text-white">
                  AWWA C153 Compact MJ Fittings: In Stock for Immediate Dispatch
                </span>
                <span className="text-[#5fd4fd]">•</span>
                <span className="whitespace-nowrap text-white">
                  NSF/ANSI 61 Annex G Certified Lead-Free (&lt;0.25% Pb)
                </span>
                <span className="text-[#5fd4fd]">•</span>
                <span className="whitespace-nowrap text-white">
                  Grade 65-45-12 Ductile Iron: 65,000 PSI Minimum Tensile
                </span>
                <span className="text-[#5fd4fd]">•</span>
                <span className="whitespace-nowrap text-white">
                  Direct Mill &amp; Stocking Yard Availability:{" "}
                  <strong className="text-[#5fd4fd] font-extrabold">
                    Eastern &amp; Central Hubs
                  </strong>
                </span>
                <span className="text-[#5fd4fd]">•</span>
                <span className="whitespace-nowrap text-white">
                  AWWA C153 Compact MJ Fittings: In Stock for Immediate Dispatch
                </span>
              </div>
            </div>
          </div>

          {/* Center: Single-line badge */}
          <div className="hidden xl:flex items-center shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white/10 border border-[#5fd4fd] text-[#5fd4fd] font-bold text-xs whitespace-nowrap shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#5fd4fd] shrink-0" />
              AWWA Standards &amp; NSF/ANSI 61 Certified Material
            </span>
          </div>

          {/* Right: Dispatch Line, Yard Finder, Spec Sheet Portal */}
          <div className="flex items-center gap-3 shrink-0 text-xs sm:text-sm">
            <a
              href="tel:+15162521111"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#5fd4fd] transition-colors whitespace-nowrap font-bold"
              title="Speak with Aqua Industries New York Foundry dispatch"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#5fd4fd] shrink-0" />
              <span className="whitespace-nowrap">
                Dispatch: +1 (516) 252-1111
              </span>
            </a>

            <div className="h-4 w-px bg-[#5fd4fd]/40 hidden sm:block" />

            <button
              type="button"
              onClick={onOpenYardModal}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#5fd4fd] transition-colors whitespace-nowrap font-bold bg-white/10 px-2.5 py-1 rounded-none border border-[#5fd4fd]/50"
            >
              <MapPin className="w-3.5 h-3.5 text-[#5fd4fd] shrink-0" />
              <span className="whitespace-nowrap">
                Yard: {selectedYardCity}
              </span>
            </button>

            <div className="h-4 w-px bg-[#5fd4fd]/40 hidden md:block" />

            <a
              href="#quote-form"
              className="hidden md:inline-flex items-center gap-1.5 text-[#5fd4fd] hover:text-white transition-colors whitespace-nowrap font-bold"
            >
              <FileCheck2 className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Spec Sheet Portal</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
