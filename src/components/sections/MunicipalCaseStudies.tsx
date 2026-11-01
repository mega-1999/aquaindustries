"use client";

import React, { useState } from "react";

interface CaseStudy {
  id: string;
  projectTitle: string;
  agencyLocation: string;
  sectorTag: string;
  diameterSpec: string;
  pressureTest: string;
  materialsSupplied: string;
  freightTimeline: string;
  summary: string;
  challengeSolved: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-great-lakes",
    projectTitle: "36-Inch Water Transmission Main Interconnect",
    agencyLocation:
      "Great Lakes Regional Water Authority • Ohio / Michigan Corridor",
    sectorTag: "MUNICIPAL TRANSMISSION",
    diameterSpec: '36" Ductile Iron (Class 350)',
    pressureTest: "300 PSI Hydro-Tested (24-Hr Hold)",
    materialsSupplied:
      "AWWA C110 MJ Bends, Tees, and Series 3000 Wedge Restraints",
    freightTimeline: "Delivered via 14 Flatbeds in 5 Staged Jobsite Drops",
    summary:
      "A 6.2-mile high-capacity drinking water interconnection supplying two suburban township networks with redundancy against supply outages.",
    challengeSolved:
      "High groundwater tables and soft clay soils required rigorous restrained joint calculation. Over 1,200 linear feet of mechanical joint restraint prevented thrust block displacement under 300 PSI hydro-testing.",
  },
  {
    id: "case-highway-drainage",
    projectTitle: "Interstate 95 Corridor Stormwater & Culvert Reconstruction",
    agencyLocation: "State DOT Infrastructure Program • Mid-Atlantic Corridor",
    sectorTag: "HIGHWAY DRAINAGE",
    diameterSpec: '24" to 48" Drainage Systems',
    pressureTest: "AASHTO M306 Proof-Load (40,000 LB)",
    materialsSupplied:
      "Heavy-Duty Highway Manhole Frames, Vane Grates & Curb Inlets",
    freightTimeline: "Next-Day Direct Yard Dispatch from Baltimore Hub",
    summary:
      "Upgrading critical interstate stormwater drainage across a 12-mile widening corridor to eliminate recurring highway hydroplaning during heavy rainfall.",
    challengeSolved:
      "Heavy traffic flow required zero downtime and guaranteed cast iron structural load performance. Supplied 380 AASHTO M306 machined frames with noise-dampening seals that passed on-site axle proof load inspections on day one.",
  },
  {
    id: "case-treatment-manifold",
    projectTitle:
      "Metropolitan Water Reclamation Facility High-Pressure Header",
    agencyLocation: "Metropolitan Sewerage District • Midwest Facility",
    sectorTag: "WASTEWATER TREATMENT",
    diameterSpec: '16" to 30" Flanged Piping',
    pressureTest: "250 PSI Flange Hydro-Checked",
    materialsSupplied:
      "AWWA C115 Flanged Spools with Ceramic Epoxy Interior Lining",
    freightTimeline: "Shop Fabricated and Shipped to Jobsite in 8 Days",
    summary:
      "Complete replacement of aging pump discharge manifolds and wall sleeve penetrations in an active 85 MGD wastewater treatment facility.",
    challengeSolved:
      "Corrosive sewer gases and tight equipment room clearances required custom wall pipes with integral puddle flanges and 40-mil ceramic epoxy linings, delivered with pre-matched bolt hole orientations.",
  },
  {
    id: "case-texas-loop",
    projectTitle: "Municipal Utility District 44 Distribution Feeder Grid",
    agencyLocation: "County Municipal Utility District • Greater Houston, TX",
    sectorTag: "RESIDENTIAL & COMMERCIAL",
    diameterSpec: '8" to 16" Distribution Loop',
    pressureTest: "350 PSI Working Pressure Rated",
    materialsSupplied:
      "C153 Compact MJ Fittings, Gate Valve Boxes, Restrained Sleeves",
    freightTimeline: "Local Yard Staging with 24-Hour Jobsite Callouts",
    summary:
      "New 350-acre commercial business park and residential subdivision water infrastructure grid requiring phased utility contractor installations.",
    challengeSolved:
      "Contractor faced rolling trenching schedules and changing plan revisions. Aqua Industries provided local yard inventory staging with dedicated flatbed drops directly to active trench headings, avoiding project delays.",
  },
];

export function MunicipalCaseStudies() {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const current = CASE_STUDIES[selectedCase];

  return (
    <section className="relative w-full bg-white text-[#0082FC] py-20 border-b border-[#0082FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 border border-[#0082FC] bg-white px-3 py-1 mb-4">
            <span className="w-2 h-2 bg-[#0082FC]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0082FC] whitespace-nowrap">
              Field Case Studies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0082FC] tracking-tight">
            Proven Field Installations Across North America
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#0082FC] font-normal leading-relaxed">
            Real waterworks projects demand real accountability. Review how
            American utility contractors and public works departments install
            Aqua Industries fittings under strict engineering inspection.
          </p>
        </div>

        {/* 4 Case Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {CASE_STUDIES.map((item, idx) => {
            const isSelected = idx === selectedCase;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedCase(idx)}
                className={`p-4 text-left border-2 transition-all duration-150 flex flex-col justify-between ${
                  isSelected
                    ? "border-[#0082FC] bg-[#0082FC] text-white"
                    : "border-[#0082FC] bg-white text-[#0082FC] hover:border-[#5FD4FD]"
                }`}
              >
                <div>
                  <span
                    className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 inline-block mb-2 whitespace-nowrap ${
                      isSelected
                        ? "bg-white text-[#0082FC]"
                        : "bg-[#0082FC] text-white"
                    }`}
                  >
                    {item.sectorTag}
                  </span>
                  <div className="text-xs font-mono mb-1 truncate">
                    {item.diameterSpec}
                  </div>
                  <h4 className="text-sm font-bold line-clamp-2 leading-snug">
                    {item.projectTitle}
                  </h4>
                </div>
                <div
                  className={`text-[11px] font-mono mt-3 pt-2 border-t flex items-center justify-between whitespace-nowrap ${
                    isSelected
                      ? "border-white/40 text-[#5FD4FD]"
                      : "border-[#0082FC]/20 text-[#0082FC]"
                  }`}
                >
                  <span>VIEW FIELD REPORT</span>
                  <span>&rarr;</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Case Study Panel */}
        <div className="border-2 border-[#0082FC] bg-white grid grid-cols-1 lg:grid-cols-12">
          {/* Left Summary & Challenge Solved */}
          <div className="lg:col-span-8 p-6 sm:p-10 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-[#0082FC] tracking-wider whitespace-nowrap">
                LOCATION & AGENCY: {current.agencyLocation}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0082FC] leading-snug">
                {current.projectTitle}
              </h3>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0082FC]">
                Project Scope & Infrastructure Overview:
              </h4>
              <p className="text-base text-[#0082FC] leading-relaxed">
                {current.summary}
              </p>
            </div>

            <div className="border-l-4 border-[#0082FC] bg-white pl-4 py-2 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0082FC]">
                Engineering Challenge & Field Result:
              </h4>
              <p className="text-sm text-[#0082FC] leading-relaxed">
                {current.challengeSolved}
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#quote-builder"
                className="inline-flex items-center justify-center bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC] font-bold text-xs uppercase tracking-wider py-3 px-6 border-2 border-[#0082FC] transition-colors duration-150 whitespace-nowrap"
              >
                <span>Request Pricing For Similar Project</span>
              </a>

              <a
                href="#thrust-calculator"
                className="inline-flex items-center justify-center bg-white text-[#0082FC] hover:bg-[#0082FC] hover:text-white font-bold text-xs uppercase tracking-wider py-3 px-6 border-2 border-[#0082FC] transition-colors duration-150 whitespace-nowrap"
              >
                <span>Run Restraint Length Calculation</span>
              </a>
            </div>
          </div>

          {/* Right Verified Technical Matrix Panel */}
          <div className="lg:col-span-4 bg-[#0082FC] text-white p-6 sm:p-10 flex flex-col justify-between border-t-2 lg:border-t-0 lg:border-l-2 border-[#0082FC]">
            <div className="space-y-6">
              <div className="border-b border-[#5FD4FD] pb-3">
                <span className="text-[10px] font-mono uppercase text-[#5FD4FD] tracking-wider font-bold whitespace-nowrap">
                  FIELD VERIFICATION DOSSIER
                </span>
                <div className="text-base font-bold text-white mt-1 whitespace-nowrap">
                  Jobsite Metrics & Log
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#5FD4FD] whitespace-nowrap">
                    Nominal Diameters
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {current.diameterSpec}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#5FD4FD] whitespace-nowrap">
                    Field Pressure Test
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {current.pressureTest}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#5FD4FD] whitespace-nowrap">
                    Fittings & Components Supplied
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {current.materialsSupplied}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-[#5FD4FD] whitespace-nowrap">
                    Yard Freight Dispatch
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {current.freightTimeline}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#5FD4FD] mt-6">
              <div className="text-[10px] font-mono text-white/80">
                CERTIFIED COMPLIANCE: AWWA C153 / C110 / C111 • NSF 61 • ASTM
                A536
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
