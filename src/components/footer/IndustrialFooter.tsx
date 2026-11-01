"use client";

import {
  Award,
  Droplets,
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
    <footer
      aria-label="Aqua Industries Company Directory"
      className="bg-[#0082FC] text-white border-t-4 border-[#5FD4FD] text-xs"
    >
      {/* Top Bar: Regional Warehouse Emergency Dispatch Line */}
      <div className="bg-[#0082FC] border-b border-[#5FD4FD]/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-center md:text-left">
              <span className="p-3 rounded-none bg-white text-[#0082FC] shrink-0 shadow-md">
                <PhoneCall className="w-5 h-5 animate-pulse text-[#0082FC]" />
              </span>
              <div>
                <div className="text-white font-extrabold text-sm sm:text-base whitespace-nowrap">
                  Regional Warehouse Emergency Watermain Dispatch Line
                </div>
                <div className="text-white/90 text-xs mt-0.5">
                  Direct flatbed dispatch of MJ sleeves, repair clamps, and
                  wedge restraint glands.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:18005552782"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-bold text-xs shadow-md transition-colors whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#0082FC]" />
                <span className="whitespace-nowrap">
                  DISPATCH HOTLINE: (800) 555-AQUA
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenYardModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-none bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-bold text-xs border-2 border-[#5FD4FD] transition-colors whitespace-nowrap"
              >
                <MapPin className="w-3.5 h-3.5 text-[#5FD4FD] group-hover:text-[#0082FC]" />
                <span className="whitespace-nowrap">
                  View All 4 Stocking Hubs
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Columns Directory */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Aqua Industries history & Certs */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center text-[#0082FC]">
                <Droplets className="w-5 h-5 text-[#0082FC]" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                Aqua Industries
              </span>
            </div>

            <p className="text-xs text-white/90 leading-relaxed">
              Manufacturer of ductile iron waterworks fittings, wedge
              restraints, and municipal street castings. Serving American civil
              contractors, city utilities, and wholesale supply houses.
            </p>

            <div className="space-y-1.5 pt-2 border-t border-[#5FD4FD]/30 text-[11px] text-white/90">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
                <span>ISO 9001:2015 Registered Facility</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
                <span>AWWA &amp; DIPRA Member Foundry</span>
              </div>
              <div>CAGE Code: 6AQ12 &bull; DUNS: 09-338-7102</div>
            </div>
          </div>

          {/* Column 2: Product lines */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#5FD4FD]" />
              <span>Product Lines</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/90">
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  AWWA C153 Compact MJ Fittings (3&quot;–48&quot;)
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  AWWA C110 Full Body Mechanical Joint Tees
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Series 3000 Wedge Restraints (PVC &amp; DI)
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Series 4100 Push-On Bell Harnesses
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  AASHTO M306 Highway-Rated Castings
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Double-Strap Tapping Saddles
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Wide-Range Bolted Couplings
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech help & submittals */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5FD4FD]" />
              <span>Technical Help</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-white/90">
              <li>
                <a
                  href="#thrust-calculator"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Thrust Length Calculator (AWWA C600)
                </a>
              </li>
              <li>
                <a
                  href="#quote-form"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Submittal Sheet Package Builder
                </a>
              </li>
              <li>
                <a
                  href="#quality-standards"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Cement Lining per AWWA C104
                </a>
              </li>
              <li>
                <a
                  href="#quality-standards"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  Fusion-Bonded Epoxy per AWWA C116
                </a>
              </li>
              <li>
                <a
                  href="#quality-standards"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
                >
                  ASTM A536 Metallurgical Specifications
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLoginModal}
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap text-left"
                >
                  Contractor Portal / MTR Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Stocking yard hours & shipping */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#5FD4FD]" />
              <span>Stocking Yards &amp; Hours</span>
            </h4>
            <div className="space-y-3 text-xs text-white/90">
              {DISTRIBUTION_YARDS.map((yard) => (
                <div
                  key={yard.id}
                  className="pb-2 border-b border-[#5FD4FD]/30 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white whitespace-nowrap">
                      {yard.city}, {yard.state} Yard
                    </span>
                    <span className="text-[10px] text-[#5FD4FD] font-bold whitespace-nowrap">
                      {yard.stockStatus}
                    </span>
                  </div>
                  <div className="text-[11px] text-white/80 mt-0.5">
                    {yard.phone} &bull; M-F 06:00 to 17:00 CST
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal copyright, terms, anti-theft scrap registry */}
      <div className="border-t border-[#5FD4FD]/30 bg-[#0082FC] py-6 text-[11px] text-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>&copy; 2026 Aqua Industries, Inc. All Rights Reserved.</div>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="whitespace-nowrap">ASTM A536 Certified</span>
              <span>&bull;</span>
              <span className="whitespace-nowrap">AWWA C153 &amp; C110</span>
              <span>&bull;</span>
              <span className="whitespace-nowrap">NSF/ANSI 61 &amp; 372</span>
              <span>&bull;</span>
              <span className="whitespace-nowrap">Terms of Sale</span>
            </div>
          </div>

          <p className="text-[10px] text-white/80 leading-relaxed">
            <strong>Anti-Theft Scrap Registry Notice:</strong> All municipal
            frames, grates, and waterworks fittings carry deep-relief Aqua
            Industries foundry trademarks and heat marks. The unauthorized sale,
            transfer, or scrap processing of municipal utility castings is
            strictly tracked and prohibited under state metal theft laws.
          </p>
        </div>
      </div>
    </footer>
  );
};
