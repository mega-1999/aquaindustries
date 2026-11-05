"use client";

import {
  Award,
  ChevronRight,
  Clock,
  Layers,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type React from "react";
import { DISTRIBUTION_YARDS } from "../../data/waterworks-data";

interface IndustrialFooterProps {
  onOpenYardModal: () => void;
  onOpenLoginModal: () => void;
}

export const IndustrialFooter: React.FC<IndustrialFooterProps> = ({
  onOpenYardModal,
  onOpenLoginModal,
}) => {
  return (
    <footer className="bg-[#0074f0] text-white border-t-4 border-[#0082FC] text-sm relative overflow-hidden">
      {/* ========================================================
          1. TOP BAR: EMERGENCY WATERMAIN DISPATCH HOTLINE
      ======================================================== */}
      <div className="bg-[#0074f0] border-b-2 border-[#0082FC]/40 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Hotline Identity */}
            <div className="flex items-start sm:items-center gap-3.5 max-w-2xl">
              <span className="p-3 bg-white text-[#0074f0] shrink-0 shadow-md border-2 border-[#0082FC]">
                <PhoneCall className="w-6 h-6 animate-pulse text-[#0074f0]" />
              </span>
              <div className="min-w-0">
                <h3 className="text-white font-black text-base sm:text-lg tracking-tight uppercase leading-snug break-words">
                  Regional Warehouse Emergency Watermain Dispatch Line
                </h3>
                <p className="text-white/90 text-xs sm:text-sm mt-1 leading-relaxed">
                  24/7 direct flatbed dispatch of AWWA C153 compact fittings,
                  repair sleeves, mechanical joint restraints, and service
                  boxes.
                </p>
              </div>
            </div>

            {/* Right: Hotline Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:+15162521111"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-[#0082FC] text-[#0074f0] font-black text-sm uppercase tracking-wider shadow-lg transition-all text-center cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#0074f0] shrink-0" />
                <span>+1 (516) 252-1111</span>
              </a>

              <button
                type="button"
                onClick={onOpenYardModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0074f0] hover:bg-white text-white hover:text-[#0074f0] font-black text-sm uppercase tracking-wider border-2 border-[#0082FC] transition-all text-center cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#0082FC] group-hover:text-[#0074f0] shrink-0" />
                <span>View All Yards</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. MAIN 4-COLUMN INDUSTRIAL DIRECTORY (PERFECTLY CONSTRAINED)
      ======================================================== */}
      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* ========================================================
              COLUMN 1 (3.5 cols): FOUNDRY HQ & CREDENTIALS
          ======================================================== */}
          <div className="lg:col-span-3 min-w-0 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 px-1.5 bg-white flex items-center justify-center border border-[#5FD4FD] shrink-0 shadow-sm">
                <img
                  src="/images/AI_Waterdrop.png"
                  alt="Aqua Industries Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="font-black text-white text-lg tracking-tight uppercase">
                Aqua Industries
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed break-words">
              Primary domestic distributor and manufacturer of ASTM A536 ductile
              iron waterworks fittings, Series 3000 wedge restraints, and AASHTO
              H-20 municipal street castings.
            </p>

            {/* Direct Address & Mobile Box */}
            <div className="p-3.5 bg-white/10 border-2 border-[#0082FC] rounded-none space-y-2 text-xs text-white">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0082FC] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-black text-white uppercase tracking-wider">
                    New York Foundry &amp; Logistics Hub
                  </div>
                  <div className="text-white/90 text-[11px] leading-snug mt-0.5 break-words">
                    105 Maxess Road, Melville, NY 11747, USA
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/20">
                <PhoneCall className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                <a
                  href="tel:+15162521111"
                  className="font-bold text-white hover:text-[#0082FC] transition-colors"
                >
                  +1 (516) 252-1111
                </a>
              </div>
            </div>

            {/* Quality Certifications Strip */}
            <div className="space-y-1.5 pt-2 border-t border-white/20 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                <span className="font-semibold">ISO 9001:2015 Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                <span className="font-semibold">AWWA &amp; DIPRA Member</span>
              </div>
              <div className="text-[11px] font-mono text-white/80 pt-0.5">
                CAGE: 6AQ12 &bull; DUNS: 09-338-7102
              </div>
            </div>
          </div>

          {/* ========================================================
              COLUMN 2 (3 cols): WATERWORKS PRODUCT LINES
          ======================================================== */}
          <div className="lg:col-span-3 min-w-0">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2 pb-2 border-b border-white/20">
              <Layers className="w-4 h-4 text-[#0082FC] shrink-0" />
              <span>Product Lines</span>
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    AWWA C153 Compact MJ Fittings (3&quot;–48&quot;)
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    AWWA C110 Full-Body Mechanical Joint Fittings
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Series 3000 Cam-Action Restraints (DI &amp; PVC)
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Ultra-Lok 360° Serrated Restraints for C900
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    The Century Curb Service Box
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Municipal Freeze-Proof Sampling Stations
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    AASHTO M306 Highway-Rated Castings
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* ========================================================
              COLUMN 3 (2.5 cols): TECHNICAL & ENGINEERING HELP
          ======================================================== */}
          <div className="lg:col-span-2 min-w-0">
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2 pb-2 border-b border-white/20">
              <ShieldCheck className="w-4 h-4 text-[#0082FC] shrink-0" />
              <span>Technical Help</span>
            </h4>

            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
              <li>
                <a
                  href="#thrust-calculator"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Thrust Length Calculator
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#quote-form"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Submittal Sheet Builder
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Municipal Case Studies
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#domestic-standards"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    AWWA C104 Cement Lining
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#domestic-standards"
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Arc-Zinc Thermal Spray
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLoginModal}
                  className="hover:text-[#0082FC] transition-colors flex items-start gap-1.5 group text-left cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="break-words leading-snug">
                    Contractor MTR Portal
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* ========================================================
              COLUMN 4 (4 cols): STOCKING YARDS SPEC TABLE (NO OVERFLOW)
          ======================================================== */}
          <div className="lg:col-span-4 min-w-0">
            <div className="flex items-center justify-between pb-2 mb-4 border-b border-white/20">
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#0082FC] shrink-0" />
                <span>Stocking Yards &amp; Hours</span>
              </h4>
              <button
                type="button"
                onClick={onOpenYardModal}
                className="text-[11px] font-bold text-[#0082FC] hover:text-white uppercase transition-colors cursor-pointer"
              >
                Yard Map &rsaquo;
              </button>
            </div>

            {/* Structured Table Container: Clean borders, table-fixed, zero overflow */}
            <div className="border-2 border-[#0082FC] bg-white/10 overflow-hidden shadow-md">
              <table className="w-full text-left text-xs border-collapse table-fixed">
                <thead>
                  <tr className="bg-white text-[#0074f0] border-b border-[#0082FC]">
                    <th
                      scope="col"
                      className="p-2 font-black uppercase tracking-wider w-[58%]"
                    >
                      Regional Hub
                    </th>
                    <th
                      scope="col"
                      className="p-2 font-black uppercase tracking-wider text-right w-[42%]"
                    >
                      Inventory Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/20">
                  {DISTRIBUTION_YARDS.map((yard) => (
                    <tr
                      key={yard.id}
                      className="hover:bg-white/10 transition-colors"
                    >
                      <td className="p-2.5 align-top">
                        <div className="font-bold text-white text-xs leading-snug break-words">
                          {yard.city}, {yard.state}
                        </div>
                        <div className="text-[11px] text-white/80 font-mono mt-0.5 break-words">
                          {yard.phone}
                        </div>
                      </td>
                      <td className="p-2.5 align-top text-right">
                        <span className="inline-block bg-[#0082FC] text-[#0074f0] text-[10px] font-black uppercase px-2 py-0.5 shadow-xs">
                          {yard.stockStatus}
                        </span>
                        <div className="text-[10px] text-white/80 mt-1 leading-tight break-words">
                          {yard.transitHours.split(" ")[0]} Dispatch
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="p-2 bg-white/5 border-t border-white/20 flex items-center justify-between text-[11px] text-white/80">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0082FC] shrink-0" />
                  M-F 06:00 to 17:00 Local
                </span>
                <span className="font-mono text-[#0082FC]">
                  Rail Spur Direct
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          THIN SWAN PANORAMIC VIDEO FOOTER RIBBON
      ======================================================== */}
      <div className="relative w-full h-40 sm:h-52 md:h-64 lg:h-72 overflow-hidden border-t-2 border-b-2 border-[#0082FC] bg-[#0074f0]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center filter brightness-95"
        >
          <source src="/videos/swan_vidoe.mp4" type="video/mp4" />
        </video>

        {/* Ambient Gradient Overlay for Contrast & Visual Polish */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0074f0]/75 via-transparent to-[#0074f0]/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[#0074f0]/15 pointer-events-none" />

        {/* Floating Architectural Ribbon Badges */}
        <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none">
          <div className="flex items-center gap-2.5 bg-[#0074f0]/85 backdrop-blur-xs px-3.5 py-1.5 border border-[#0082FC]/70 shadow-md">
            <img
              src="/images/AI_Fevicon.png"
              alt="Watermark"
              className="w-3.5 h-3.5 object-contain shrink-0"
            />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white">
              Sustaining America&apos;s Clean Waterways
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-[#0074f0]/85 backdrop-blur-xs px-3.5 py-1.5 border border-[#0082FC]/70 shadow-md">
            <span className="w-2 h-2 bg-[#0082FC] rounded-none animate-pulse shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-white/95">
              Ecological Water Infrastructure &bull; 100% Recycled Iron
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          3. BOTTOM BAR: LEGAL COPYRIGHT & ANTI-THEFT SCRAP REGISTRY
      ======================================================== */}
      <div className="border-t-2 border-[#0082FC]/40 bg-[#0074f0] py-6 sm:py-8 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-semibold text-white/90 text-center md:text-left">
              &copy; 2026 Aqua Industries, Inc. All Rights Reserved. Melville,
              NY.
            </div>

            {/* Certifications Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-2.5 py-1 bg-white text-[#0074f0] font-extrabold text-[11px] uppercase tracking-wider border border-[#0082FC]">
                ASTM A536 Certified
              </span>
              <span className="px-2.5 py-1 bg-white text-[#0074f0] font-extrabold text-[11px] uppercase tracking-wider border border-[#0082FC]">
                AWWA C153 &amp; C110
              </span>
              <span className="px-2.5 py-1 bg-white text-[#0074f0] font-extrabold text-[11px] uppercase tracking-wider border border-[#0082FC]">
                NSF/ANSI 61 &amp; 372
              </span>
              <span className="px-2.5 py-1 bg-white text-[#0074f0] font-extrabold text-[11px] uppercase tracking-wider border border-[#0082FC]">
                100% AIS / BABA Ready
              </span>
            </div>
          </div>

          {/* Enclosed Anti-Theft Scrap Registry Notice Box */}
          <div className="p-3.5 bg-white/10 border-2 border-[#0082FC]/40 text-[11px] text-white/90 leading-relaxed shadow-sm">
            <strong className="text-white uppercase tracking-wider font-black">
              Anti-Theft Scrap Registry Notice:{" "}
            </strong>
            All municipal frames, storm grates, and waterworks fittings carry
            deep-relief Aqua Industries foundry trademarks, pattern numbers, and
            permanent melt heat codes. Unauthorized sale, transport, or scrap
            smelting of municipal utility infrastructure is actively prosecuted
            under federal interstate commerce and state metal theft statutes.
          </div>
        </div>
      </div>
    </footer>
  );
};
