"use client";

import React from "react";

const CERTIFICATIONS = [
  {
    code: "AWWA C153 & C110",
    title: "American Water Works Association",
    detail:
      "Standard for ductile-iron compact and full-body fittings for water service.",
  },
  {
    code: "ASTM A536 (65-45-12)",
    title: "American Society for Testing and Materials",
    detail:
      "Guarantees 65,000 PSI tensile strength, 45,000 PSI yield, and 12% elongation.",
  },
  {
    code: "NSF/ANSI 61 & 372",
    title: "National Sanitation Foundation",
    detail:
      "Drinking water system components health effects and low-lead compliance.",
  },
  {
    code: "AIS & BABA COMPLIANT",
    title: "American Iron and Steel / BABA Acts",
    detail:
      "Approved for federally funded EPA clean water and state revolving loan projects.",
  },
  {
    code: "AASHTO M306 (H-20 / HS-20)",
    title: "Highway Drainage Proof-Load Testing",
    detail:
      "Guaranteed 40,000 lb proof load on airport and interstate highway manhole lids.",
  },
  {
    code: "ISO 9001:2015 REGISTERED",
    title: "International Quality Management",
    detail:
      "Rigorous quality inspection from raw pig iron charge to final pallet shrink-wrap.",
  },
];

const INDUSTRY_ASSOCIATIONS = [
  "AWWA (American Water Works Association)",
  "ANSI (American National Standards Institute)",
  "WASDA (Water & Sewer Distributors)",
  "NUCA (National Utility Contractors)",
  "APWA (American Public Works)",
  "WEFTEC (Water Environment Federation)",
  "NAPF (Pipe Fabricators)",
  "NPCA (Precast Concrete)",
  "FM APPROVALS",
  "UL LISTED",
  "NSF INTERNATIONAL",
  "NRWA (Rural Water)",
];

export function DomesticStandards() {
  return (
    <section className="relative w-full bg-[#0082FC] text-white py-20 border-b border-[#0082FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Certifications Directory */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 border border-[#5FD4FD] bg-white px-3 py-1">
              <span className="w-2 h-2 bg-[#0082FC]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0082FC] whitespace-nowrap">
                Domestic Standards &amp; Testing
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Verified by Physical Testing. Backed by Verifiable Paperwork.
            </h2>

            <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
              Municipal public works inspectors and utility engineers cannot
              afford fitting failures buried 10 feet under fresh asphalt. Every
              Aqua Industries production run undergoes rigid mechanical,
              metallurgical, and hydrostatic inspection before jobsite dispatch.
            </p>

            {/* Grid of Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.code}
                  className="border-2 border-[#5FD4FD] bg-white text-[#0082FC] p-4 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-[#0082FC] text-white font-bold px-2 py-0.5 whitespace-nowrap">
                      {cert.code}
                    </span>
                    <h4 className="text-sm font-bold text-[#0082FC] mt-2 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#0082FC] leading-relaxed font-normal">
                      {cert.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Single-line button */}
            <div className="pt-4">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center bg-white text-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] font-bold text-xs uppercase tracking-wider py-3.5 px-6 border-2 border-white transition-colors duration-150 whitespace-nowrap"
              >
                <span>Request Certified Mill Test Reports (MTR)</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Physical Metallurgical Properties & Hydro Gauge Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border-2 border-[#5FD4FD] p-6 text-[#0082FC] shadow-2xl">
              <div className="border-b border-[#0082FC] pb-3 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#0082FC] font-bold tracking-wider whitespace-nowrap">
                    METALLURGICAL TEST REPORT
                  </span>
                  <div className="text-sm font-bold text-[#0082FC] whitespace-nowrap">
                    ASTM A536 Tensile Physicals
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#0082FC] text-white font-bold whitespace-nowrap">
                  VERIFIED
                </span>
              </div>

              {/* Physical Properties Bar Visualizers */}
              <div className="space-y-4 my-6">
                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#0082FC] uppercase whitespace-nowrap">
                      Tensile Strength
                    </span>
                    <span className="text-[#0082FC] whitespace-nowrap">
                      65,000 PSI MIN
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white border border-[#0082FC] p-0.5">
                    <div className="h-full bg-[#0082FC] w-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#0082FC] uppercase whitespace-nowrap">
                      Yield Strength
                    </span>
                    <span className="text-[#0082FC] whitespace-nowrap">
                      45,000 PSI MIN
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white border border-[#0082FC] p-0.5">
                    <div className="h-full bg-[#0082FC] w-4/5" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#0082FC] uppercase whitespace-nowrap">
                      Elongation Ductility
                    </span>
                    <span className="text-[#0082FC] whitespace-nowrap">
                      12% IN 2 INCHES
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white border border-[#0082FC] p-0.5">
                    <div className="h-full bg-[#5FD4FD] w-3/4" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-[#0082FC] uppercase whitespace-nowrap">
                      Hydrostatic Burst Safety
                    </span>
                    <span className="text-[#0082FC] whitespace-nowrap">
                      500 PSI PROOF
                    </span>
                  </div>
                  <div className="w-full h-4 bg-white border border-[#0082FC] p-0.5">
                    <div className="h-full bg-[#0082FC] w-full" />
                  </div>
                </div>
              </div>

              {/* Stamp of Quality Assurance */}
              <div className="border-t border-[#0082FC] pt-4 flex items-center justify-between text-xs font-mono">
                <div className="space-y-0.5">
                  <div className="text-[10px] text-[#0082FC] uppercase font-bold whitespace-nowrap">
                    TRACEABLE HEAT NO.
                  </div>
                  <div className="text-xs font-bold text-[#0082FC] whitespace-nowrap">
                    AQ-2026-HT-8841B
                  </div>
                </div>
                <div className="px-2 py-1 bg-[#0082FC] text-white text-[10px] font-bold uppercase whitespace-nowrap">
                  100% HYDRO TESTED
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Associations Ribbon from SIP Industries */}
        <div className="mt-14 pt-8 border-t border-[#5FD4FD]">
          <div className="text-center mb-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#5FD4FD] whitespace-nowrap">
              Approved &amp; Certified Across North American Waterworks
              Infrastructure Organizations
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {INDUSTRY_ASSOCIATIONS.map((assoc) => (
              <span
                key={assoc}
                className="px-3 py-1 bg-white text-[#0082FC] text-xs font-bold whitespace-nowrap border border-[#5FD4FD]"
              >
                {assoc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
