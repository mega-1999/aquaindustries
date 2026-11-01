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
      className="bg-[#0082FC] text-white border-t-4 border-[#5FD4FD] text-sm"
    >
      {/* Top Bar: Regional Warehouse Emergency Dispatch Line */}
      <div className="bg-[#0082FC] border-b border-[#5FD4FD]/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-center md:text-left">
              <span className="p-3 rounded-none bg-white text-[#0082FC] shrink-0 shadow-md">
                <PhoneCall className="w-6 h-6 animate-pulse text-[#0082FC]" />
              </span>
              <div>
                <div className="text-white font-extrabold text-base sm:text-lg whitespace-nowrap">
                  Regional Warehouse Emergency Watermain Dispatch Line
                </div>
                <div className="text-white/90 text-xs sm:text-sm mt-0.5">
                  Direct flatbed dispatch of MJ sleeves, repair clamps, and
                  wedge restraint glands.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-extrabold text-sm sm:text-base shadow-md transition-colors whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-[#0082FC]" />
                <span className="whitespace-nowrap">
                  DISPATCH HOTLINE: +1 (516) 252-1111
                </span>
              </a>

              <button
                type="button"
                onClick={onOpenYardModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-none bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-extrabold text-sm sm:text-base border-2 border-[#5FD4FD] transition-colors whitespace-nowrap"
              >
                <MapPin className="w-4 h-4 text-[#5FD4FD] group-hover:text-[#0082FC]" />
                <span className="whitespace-nowrap">
                  View All Foundries &amp; Yards
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
              <div className="w-9 h-9 rounded-none bg-white flex items-center justify-center text-[#0082FC]">
                <Droplets className="w-6 h-6 text-[#0082FC]" />
              </div>
              <span className="font-extrabold text-white text-lg sm:text-xl tracking-tight">
                Aqua Industries
              </span>
            </div>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Manufacturer of ductile iron waterworks fittings, wedge
              restraints, and municipal street castings. Serving American civil
              contractors, city utilities, and wholesale supply houses.
            </p>

            {/* Direct Address & Mobile */}
            <div className="p-3 bg-white/10 border border-[#5FD4FD]/40 rounded-none space-y-1.5 text-xs sm:text-sm text-white">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#5FD4FD] shrink-0 mt-0.5" />
                <div>
                  <div className="font-extrabold text-white">
                    New York Foundry (Corporate HQ)
                  </div>
                  <div className="text-white/90">
                    105 Maxes Road, Melville, NY 11747, USA
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-[#5FD4FD]/20">
                <PhoneCall className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                <a
                  href="tel:+15162521111"
                  className="font-extrabold text-white hover:text-[#5FD4FD] transition-colors"
                >
                  +1 (516) 252-1111
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#5FD4FD]/30 text-xs sm:text-sm text-white/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                <span className="font-medium">
                  ISO 9001:2015 Registered Facility
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                <span className="font-medium">
                  AWWA &amp; DIPRA Member Foundry
                </span>
              </div>
              <div className="font-medium">
                CAGE Code: 6AQ12 &bull; DUNS: 09-338-7102
              </div>
            </div>
          </div>

          {/* Column 2: Product lines */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#5FD4FD]" />
              <span>Product Lines</span>
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-white/90">
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  AWWA C153 Compact MJ Fittings (3&quot;–48&quot;)
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  AWWA C110 Full Body Mechanical Joint Tees
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Series 3000 Wedge Restraints (PVC &amp; DI)
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Series 4100 Push-On Bell Harnesses
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  AASHTO M306 Highway-Rated Castings
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Double-Strap Tapping Saddles
                </a>
              </li>
              <li>
                <a
                  href="#product-matrix"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Wide-Range Bolted Couplings
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech help & submittals */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#5FD4FD]" />
              <span>Technical Help</span>
            </h4>
            <ul className="space-y-3 text-sm sm:text-base text-white/90">
              <li>
                <a
                  href="#thrust-calculator"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Thrust Length Calculator (AWWA C600)
                </a>
              </li>
              <li>
                <a
                  href="#quote-form"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Submittal Sheet Package Builder
                </a>
              </li>
              <li>
                <a
                  href="#quality-standards"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Cement Lining per AWWA C104
                </a>
              </li>
              <li>
                <a
                  href="#quality-standards"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  Fusion-Bonded Epoxy per AWWA C116
                </a>
              </li>
              <li>
                <a
                  href="#quality-standards"
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap block"
                >
                  ASTM A536 Metallurgical Specifications
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenLoginModal}
                  className="hover:text-[#5FD4FD] transition-colors whitespace-nowrap text-left block"
                >
                  Contractor Portal / MTR Archive
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Stocking yard hours & shipping */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#5FD4FD]" />
              <span>Stocking Yards &amp; Hours</span>
            </h4>
            <div className="space-y-3.5 text-sm sm:text-base text-white/90">
              {DISTRIBUTION_YARDS.map((yard) => (
                <div
                  key={yard.id}
                  className="pb-2.5 border-b border-[#5FD4FD]/30 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white whitespace-nowrap">
                      {yard.city}, {yard.state} Yard
                    </span>
                    <span className="text-xs sm:text-sm text-[#5FD4FD] font-extrabold whitespace-nowrap">
                      {yard.stockStatus}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 mt-0.5">
                    {yard.phone} &bull; M-F 06:00 to 17:00 CST
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Legal copyright, terms, anti-theft scrap registry */}
      <div className="border-t border-[#5FD4FD]/30 bg-[#0082FC] py-6 text-xs sm:text-sm text-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-medium">
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

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
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
