"use client";

import {
  Activity,
  FileCheck2,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface GlobalUtilityTickerProps {
  onOpenYardModal: () => void;
  selectedYardCity?: string;
}

export const GlobalUtilityTicker: React.FC<GlobalUtilityTickerProps> = ({
  onOpenYardModal,
  selectedYardCity = "Chicago, IL",
}) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        `${now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })} EST`,
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside
      aria-label="Live municipal specifications and quick actions"
      className="bg-[#3087ff] border-b border-[#3087ff] text-xs sm:text-sm text-white select-none relative z-50"
    >
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-11 gap-4 overflow-hidden">
          {/* Left: Direct Mill & Stocking Yard Availability */}
          <div className="flex-1 flex items-center min-w-0 overflow-hidden pr-3">
            <div className="flex items-center gap-1.5 shrink-0 bg-white text-[#3087ff] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-none text-xs whitespace-nowrap mr-2.5 shadow-xs">
              <span className="w-2 h-2 rounded-none bg-[#3087ff] animate-ping" />
              <span className="whitespace-nowrap font-extrabold uppercase">
                LIVE FEED
              </span>
            </div>

            {currentTime && (
              <span className="hidden md:inline-block font-mono text-[11px] font-bold  bg-black/20 px-2 py-0.5 bg-white text-[#3087ff] border border-[#3087ff] mr-3 shrink-0">
                {currentTime}
              </span>
            )}

            <div className="relative overflow-hidden w-full whitespace-nowrap">
              <div className="animate-ticker inline-flex items-center gap-8 text-xs sm:text-sm text-white font-semibold">
                <span className="whitespace-nowrap text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-white" />
                  <span>Foundry Melt Heat #8492-B:</span>
                  <strong className="font-extrabold text-white">
                    ASTM A536 65-45-12 Verified
                  </strong>
                </span>
                <span className="text-white font-bold">•</span>
                <span className="whitespace-nowrap text-white">
                  Flatbed Dispatch Queue:{" "}
                  <strong className="font-extrabold text-white">
                    14 Loads In-Transit Today
                  </strong>
                </span>
                <span className="text-white font-bold">•</span>
                <span className="whitespace-nowrap text-white">
                  AWWA C153 Compact Fittings: In Stock for Immediate Jobsite
                  Delivery
                </span>
                <span className="text-white font-bold">•</span>
                <span className="whitespace-nowrap text-white">
                  NSF/ANSI 61 Annex G Certified Lead-Free (&lt;0.25% Pb)
                </span>
                <span className="text-white font-bold">•</span>
                <span className="whitespace-nowrap text-white">
                  Hydrostatic Testing Rig: 350 PSI Continuous Working Pressure
                  Proof
                </span>
              </div>
            </div>
          </div>

          {/* Center: Single-line badge */}
          <div className="hidden xl:flex items-center shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white/10 border border-white text-white font-bold text-xs whitespace-nowrap shadow-xs">
              <ShieldCheck className="w-4 h-4 text-white shrink-0" />
              <span>AWWA Standards &amp; NSF/ANSI 61 Certified Material</span>
            </span>
          </div>

          {/* Right: Dispatch Line, Yard Finder, Spec Sheet Portal */}
          <div className="flex items-center gap-3 shrink-0 text-xs sm:text-sm">
            <a
              href="tel:+15162521111"
              className="inline-flex items-center gap-1.5 text-white hover:text-white font-bold hover:font-black transition-all whitespace-nowrap"
              title="Speak with Aqua Industries New York Foundry dispatch"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="whitespace-nowrap">
                Dispatch: +1 (516) 252-1111
              </span>
            </a>

            <div className="h-4 w-px bg-white/40 hidden sm:block" />

            <button
              type="button"
              onClick={onOpenYardModal}
              className="inline-flex items-center gap-1.5 text-white hover:text-white font-bold hover:font-black transition-all whitespace-nowrap bg-white/10 hover:bg-white/25 px-2.5 py-1 rounded-none border border-white/50 hover:border-white cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="whitespace-nowrap">
                Yard: {selectedYardCity}
              </span>
            </button>

            <div className="h-4 w-px bg-white/40 hidden md:block" />

            <a
              href="#quote-form"
              className="hidden md:inline-flex items-center gap-1.5 text-white hover:text-white font-bold hover:font-black transition-all whitespace-nowrap"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="whitespace-nowrap">Spec Sheet Portal</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};
