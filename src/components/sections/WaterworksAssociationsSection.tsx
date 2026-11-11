"use client";

import {
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Droplets,
  ExternalLink,
  Globe2,
  Landmark,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

export interface AssociationItem {
  id: string;
  acronym: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  badge: string;
  description: string;
  complianceImpact: string;
  standardCodes: string[];
}

export const WATERWORKS_ASSOCIATIONS: AssociationItem[] = [
  {
    id: "awwa",
    acronym: "AWWA",
    name: "American Water Works Association",
    url: "https://www.awwa.org",
    domain: "awwa.org",
    category: "Technical Standards Authority",
    badge: "Standards & Compliance",
    description:
      "The authoritative global leader in water management, establishing mandatory technical manufacturing standards (C153, C110, C111, C104) across all potable water networks.",
    complianceImpact:
      "All Aqua Industries fittings & valves strictly conform to AWWA C153 & C110 dimensional, metallurgical, and hydrostatic proof testing requirements.",
    standardCodes: ["AWWA C153", "AWWA C110", "AWWA C111", "AWWA C104"],
  },
  {
    id: "nrwa",
    acronym: "NRWA",
    name: "National Rural Water Association",
    url: "https://nrwa.org",
    domain: "nrwa.org",
    category: "Rural & Small Utility Alliance",
    badge: "Rural Infrastructure",
    description:
      "America's largest utility membership association representing over 31,000 small and rural community water and wastewater systems nationwide.",
    complianceImpact:
      "Engineered for rapid field installation without heavy plant machinery, optimizing long-term lifecycle economics for rural water districts.",
    standardCodes: ["USDA Rural Dev", "AIS Certified", "EPA Lead-Free"],
  },
  {
    id: "asdwa",
    acronym: "ASDWA",
    name: "Association of State Drinking Water Administrators",
    url: "https://www.asdwa.org",
    domain: "asdwa.org",
    category: "State Regulatory Leadership",
    badge: "State Safe Drinking Water",
    description:
      "Professional non-profit representing the collective leadership of state and territorial drinking water programs responsible for implementing the Safe Drinking Water Act.",
    complianceImpact:
      "Guarantees that Aqua Industries sampling stations and castings comply with EPA Lead & Copper Rule Revisions (LCRR) and state public health mandates.",
    standardCodes: ["SDWA Compliant", "EPA LCRR Core", "NSF/ANSI 61"],
  },
  {
    id: "nawc",
    acronym: "NAWC",
    name: "National Association of Water Companies",
    url: "https://nawc.org",
    domain: "nawc.org",
    category: "Private Water Enterprise",
    badge: "Regulated Utilities",
    description:
      "The voice of the private water service industry, representing investor-owned water and wastewater utilities providing safe water to over 73 million Americans.",
    complianceImpact:
      "Supports private utility capital improvement programs with guaranteed 100-year ductile iron infrastructure life expectancy and 30-day quote price stability.",
    standardCodes: ["Asset Mgmt 100-Yr", "ASTM A536", "UL/FM Listed"],
  },
  {
    id: "amwa",
    acronym: "AMWA",
    name: "Association of Metropolitan Water Agencies",
    url: "https://www.amwa.net",
    domain: "amwa.net",
    category: "Metropolitan Megasystems",
    badge: "Large Metro Systems",
    description:
      "The organization of the largest publicly owned drinking water systems in the United States, serving populations of hundreds of thousands across major metropolitan hubs.",
    complianceImpact:
      "Supplies high-diameter 2\" through 64\" compact and full-body fittings engineered to withstand massive metropolitan hydraulic load cycles and traffic stress.",
    standardCodes: ["AASHTO H-20", "Large Bore 2\"-64\"", "High Pressure"],
  },
  {
    id: "nacwa",
    acronym: "NACWA",
    name: "National Association of Clean Water Agencies",
    url: "http://www.nacwa.org",
    domain: "nacwa.org",
    category: "Wastewater & Stormwater",
    badge: "Clean Water Agencies",
    description:
      "The recognized leader in clean water advocacy, representing municipal clean water utilities dedicated to environmental stewardship and sustainable watershed management.",
    complianceImpact:
      "Aligns Aqua Industries stormwater trash racks, culvert pipe grates, and catch basin traps with strict watershed pollution prevention and anti-vortex standards.",
    standardCodes: ["Clean Water Act", "Anti-Vortex", "BMP Watershed"],
  },
];

export const WaterworksAssociationsSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("awwa");

  const selectedAssoc =
    WATERWORKS_ASSOCIATIONS.find((a) => a.id === activeId) ||
    WATERWORKS_ASSOCIATIONS[0];

  return (
    <section
      id="waterworks-associations"
      aria-label="National Waterworks and Water Infrastructure Associations"
      className="py-16 sm:py-20 bg-white text-[#3087ff] border-t-4 border-b-4 border-[#3087ff] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] mb-3 shadow-xs">
            <Globe2 className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
            <span>National Infrastructure Ecosystem &bull; United States</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#3087ff] leading-[1.08] mb-3">
            National Waterworks &amp;{" "}
            <span className="text-[#3087ff] underline decoration-[#3087ff] decoration-4 underline-offset-6">
              Water Infrastructure
            </span>{" "}
            Associations
          </h2>

          <p className="text-xs sm:text-sm text-[#3087ff] font-normal leading-relaxed">
            Aqua Industries engineers and manufactures in direct technical alignment
            with America&apos;s foremost regulatory bodies, standards authorities, and
            utility advocacy councils.
          </p>
        </div>

        {/* Interactive 6-Card Association Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {WATERWORKS_ASSOCIATIONS.map((assoc) => {
            const isSelected = activeId === assoc.id;
            return (
              <div
                key={assoc.id}
                onClick={() => setActiveId(assoc.id)}
                className={`p-5 border-4 transition-all duration-200 cursor-pointer flex flex-col justify-between rounded-none relative group select-none ${
                  isSelected
                    ? "bg-[#3087ff] text-white border-[#3087ff] shadow-xl -translate-y-1"
                    : "bg-white hover:bg-white text-[#3087ff] border-[#3087ff] hover:border-[#3087ff] shadow-md hover:-translate-y-0.5"
                }`}
              >
                <div>
                  {/* Top Header Pill & Category */}
                  <div className="flex items-center justify-between gap-2 mb-3 border-b-2 pb-2.5 transition-colors border-current">
                    <span
                      className={`text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 border ${
                        isSelected
                          ? "bg-white text-[#3087ff] border-white"
                          : "bg-white text-[#3087ff] border-[#3087ff]"
                      }`}
                    >
                      {assoc.badge}
                    </span>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider truncate text-right ${
                        isSelected ? "text-white/80" : "text-[#3087ff]"
                      }`}
                    >
                      {assoc.category}
                    </span>
                  </div>

                  {/* Association Emblem Badge & Acronym */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className={`w-12 h-12 flex items-center justify-center font-black text-base uppercase shrink-0 border-2 transition-transform duration-300 group-hover:scale-105 ${
                        isSelected
                          ? "bg-white text-[#3087ff] border-white shadow-md"
                          : "bg-[#3087ff] text-white border-[#3087ff]"
                      }`}
                    >
                      {assoc.acronym}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-sm sm:text-base font-black uppercase tracking-tight leading-tight line-clamp-2 ${
                          isSelected ? "text-white" : "text-[#3087ff]"
                        }`}
                      >
                        {assoc.name}
                      </h3>
                      <span
                        className={`text-[11px] font-mono ${
                          isSelected ? "text-white/80" : "text-[#3087ff]/80"
                        }`}
                      >
                        {assoc.domain}
                      </span>
                    </div>
                  </div>

                  {/* Summary copy */}
                  <p
                    className={`text-xs font-normal leading-relaxed line-clamp-3 mb-4 ${
                      isSelected ? "text-white/90" : "text-[#3087ff]"
                    }`}
                  >
                    {assoc.description}
                  </p>
                </div>

                {/* Bottom Footer Actions: Clickable URL */}
                <div className="pt-3 border-t-2 border-current flex items-center justify-between gap-2 mt-auto">
                  <a
                    href={assoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white text-[#3087ff] hover:bg-[#3087ff] hover:text-white border-white shadow-xs"
                        : "bg-[#3087ff] text-white hover:bg-white hover:text-[#3087ff] border-[#3087ff] shadow-xs"
                    }`}
                    title={`Visit official ${assoc.acronym} website (${assoc.domain})`}
                  >
                    <span>Visit {assoc.acronym}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>

                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isSelected ? "text-white" : "text-[#3087ff]"
                    }`}
                  >
                    {isSelected ? "Active Details ↓" : "View Alignment"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spotlight Engineering Alignment Ledger (Expands for Selected Association) */}
        <div className="bg-white border-4 border-[#3087ff] p-5 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b-2 border-[#3087ff] pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#3087ff] text-white flex items-center justify-center font-black text-xl shrink-0 border-2 border-[#3087ff] shadow-sm">
                {selectedAssoc.acronym}
              </div>
              <div>
                <span className="text-[10px] font-mono font-black uppercase bg-[#3087ff] text-white px-2 py-0.5 border border-[#3087ff]">
                  Manufacturing Alignment &bull; {selectedAssoc.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#3087ff] mt-1">
                  {selectedAssoc.name}
                </h3>
              </div>
            </div>

            <a
              href={selectedAssoc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3087ff] hover:bg-white text-white hover:text-[#3087ff] border-2 border-[#3087ff] font-black text-xs uppercase tracking-wider transition-all shadow-md self-start lg:self-auto cursor-pointer"
            >
              <span>Explore Official Portal ({selectedAssoc.domain})</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Technical Description */}
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#3087ff]">
                Association Purpose &amp; Impact on Civil Waterworks:
              </h4>
              <p className="text-xs sm:text-sm text-[#3087ff] font-normal leading-relaxed">
                {selectedAssoc.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-[#3087ff] mb-1.5">
                  Aqua Industries Compliance Guarantee:
                </h4>
                <p className="text-xs sm:text-sm text-[#3087ff] font-bold leading-relaxed bg-white border border-[#3087ff] p-3">
                  &quot;{selectedAssoc.complianceImpact}&quot;
                </p>
              </div>
            </div>

            {/* Right Standard Codes & Badges */}
            <div className="lg:col-span-5 bg-white border-2 border-[#3087ff] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#3087ff] shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-[#3087ff]">
                  Key Referenced Specifications:
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {selectedAssoc.standardCodes.map((code) => (
                  <span
                    key={code}
                    className="px-2.5 py-1 text-xs font-black uppercase bg-[#3087ff] text-white border border-[#3087ff] shadow-xs"
                  >
                    {code}
                  </span>
                ))}
              </div>

              <div className="text-[11px] font-mono text-[#3087ff] pt-2 border-t border-[#3087ff]/30 flex items-center justify-between">
                <span>Verified Traceable MTRs</span>
                <span className="font-bold">100% AIS Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
