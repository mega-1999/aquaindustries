"use client";

import { InfiniteWaterBackground } from "../common/InfiniteWaterBackground";

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
    <section className="relative w-full bg-[#3087ff] text-white py-20 border-b border-[#3087ff] overflow-hidden">
      {/* Infinite Seamless Looping Water Background Animation */}
      <InfiniteWaterBackground opacity="opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 border border-[#3087ff] bg-white px-3 py-1 mb-3 shadow-xs">
            <span className="w-2 h-2 bg-[#3087ff]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#3087ff] whitespace-nowrap">
              Domestic Standards &amp; Testing
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tight">
            Verified by Physical Testing. Backed by Verifiable Paperwork.
          </h2>

          <p className="mt-2 text-sm sm:text-base text-white/95 font-normal leading-relaxed">
            Municipal public works inspectors and utility engineers cannot
            afford fitting failures buried 10 feet under fresh asphalt. Every
            Aqua Industries production run undergoes rigid mechanical,
            metallurgical, and hydrostatic inspection before jobsite dispatch.
          </p>
        </div>

        {/* Main 2-Column Grid - Symmetrically Aligned Top & Bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Certifications Directory (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            {/* Synchronized Left Header Bar matching Right Header Height */}
            <div className="bg-white text-[#3087ff] px-4 py-2.5 border-2 border-[#3087ff] flex items-center justify-between min-h-[44px]">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#3087ff]" />
                <span>Enforced Industry Specifications</span>
              </div>
              <span className="text-[10px] font-bold bg-[#3087ff] text-white px-2 py-0.5 uppercase tracking-wider">
                6 Active Standards
              </span>
            </div>

            {/* Grid of 6 Certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3 flex-1">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.code}
                  className="border-2 border-[#3087ff] bg-white text-[#3087ff] p-4 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <span className="text-xs font-mono uppercase bg-[#3087ff] text-white font-bold px-2 py-0.5 inline-block mb-2">
                      {cert.code}
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-[#3087ff] mb-1 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#3087ff]/90 leading-relaxed font-normal">
                      {cert.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Symmetrical Left Bottom Action Strip */}
            <a
              href="#quote-form"
              className="w-full py-3 px-6 bg-white hover:bg-[#3087ff] text-[#3087ff] font-black text-xs sm:text-sm uppercase tracking-wider text-center border-2 border-white transition-colors duration-150 flex items-center justify-center gap-2 min-h-[48px] shadow-md cursor-pointer"
            >
              <span>Request Certified Mill Test Reports (MTR)</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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

          {/* Right Column: Physical Metallurgical Properties & Hydro Gauge Graphic (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            {/* Synchronized Right Header Bar matching Left Header Height */}
            <div className="bg-white text-[#3087ff] px-4 py-2.5 border-2 border-[#3087ff] flex items-center justify-between min-h-[44px]">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider">
                <span className="w-2 h-2 bg-[#3087ff]" />
                <span>Certified Metallurgical Test Report</span>
              </div>
              <span className="text-[10px] font-bold bg-[#3087ff] text-white px-2 py-0.5 uppercase tracking-wider">
                ASTM A536 Verified
              </span>
            </div>

            {/* Test Report Card Frame - Flex-1 stretches to match left column */}
            <div className="bg-white border-2 border-[#3087ff] p-5 sm:p-6 text-[#3087ff] flex-1 flex flex-col justify-between my-3 shadow-xl">
              <div>
                <div className="border-b border-[#3087ff]/30 pb-3 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#3087ff] font-bold tracking-wider block">
                      LABORATORY PHYSICAL PROPERTIES
                    </span>
                    <div className="text-sm sm:text-base font-extrabold text-[#3087ff]">
                      Ductile Iron Tensile &amp; Hydro Specs
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#3087ff] text-white font-bold">
                    PASS 100%
                  </span>
                </div>

                {/* Physical Properties Bar Visualizers */}
                <div className="space-y-3.5 my-4">
                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-mono font-bold mb-1">
                      <span className="text-[#3087ff] uppercase">
                        Tensile Strength
                      </span>
                      <span className="text-[#3087ff]">65,000 PSI MIN</span>
                    </div>
                    <div className="w-full h-3.5 bg-white border border-[#3087ff] p-0.5">
                      <div className="h-full bg-[#3087ff] w-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-mono font-bold mb-1">
                      <span className="text-[#3087ff] uppercase">
                        Yield Strength
                      </span>
                      <span className="text-[#3087ff]">45,000 PSI MIN</span>
                    </div>
                    <div className="w-full h-3.5 bg-white border border-[#3087ff] p-0.5">
                      <div className="h-full bg-[#3087ff] w-4/5" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-mono font-bold mb-1">
                      <span className="text-[#3087ff] uppercase">
                        Elongation Ductility
                      </span>
                      <span className="text-[#3087ff]">12% IN 2 INCHES</span>
                    </div>
                    <div className="w-full h-3.5 bg-white border border-[#3087ff] p-0.5">
                      <div className="h-full bg-[#3087ff] w-3/4" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs sm:text-sm font-mono font-bold mb-1">
                      <span className="text-[#3087ff] uppercase">
                        Hydrostatic Burst Proof
                      </span>
                      <span className="text-[#3087ff]">500 PSI PROOF</span>
                    </div>
                    <div className="w-full h-3.5 bg-white border border-[#3087ff] p-0.5">
                      <div className="h-full bg-[#3087ff] w-full" />
                    </div>
                  </div>
                </div>

                {/* Chemical Spectrometry Breakdown */}
                <div className="bg-[#3087ff]/5 border border-[#3087ff]/60 p-2.5 my-3">
                  <span className="text-[10px] font-black uppercase text-[#3087ff] tracking-wider block mb-1">
                    Induction Melt Chemistry Spectrometry:
                  </span>
                  <div className="grid grid-cols-3 gap-1 text-[11px] font-mono font-bold text-[#3087ff]">
                    <span>Carbon: 3.6%</span>
                    <span>Silicon: 2.4%</span>
                    <span>Magnesium: 0.04%</span>
                  </div>
                </div>
              </div>

              {/* Stamp of Quality Assurance */}
              <div className="border-t border-[#3087ff]/30 pt-3 flex items-center justify-between text-xs font-mono">
                <div className="space-y-0.5">
                  <div className="text-[10px] text-[#3087ff] uppercase font-bold">
                    TRACEABLE HEAT NO.
                  </div>
                  <div className="text-xs sm:text-sm font-black text-[#3087ff]">
                    AQ-2026-HT-8841B
                  </div>
                </div>
                <div className="px-2.5 py-1 bg-[#3087ff] text-white text-[11px] font-bold uppercase">
                  100% HYDRO TESTED
                </div>
              </div>
            </div>

            {/* Symmetrical Right Bottom Action Strip */}
            <div className="w-full py-3 px-4 bg-white text-[#3087ff] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#3087ff] flex items-center justify-between min-h-[48px]">
              <span>Quality Assurance</span>
              <span className="bg-[#3087ff]/30 px-2 py-0.5 text-[#3087ff] text-[11px] font-black">
                Permanent Heat Numbers Cast
              </span>
            </div>
          </div>
        </div>

        {/* Industry Associations Ribbon from SIP Industries */}
        <div className="mt-14 pt-8 border-t border-[#3087ff]">
          <div className="text-center mb-4">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#3087ff] whitespace-nowrap">
              Approved &amp; Certified Across North American Waterworks
              Infrastructure Organizations
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {INDUSTRY_ASSOCIATIONS.map((assoc) => (
              <span
                key={assoc}
                className="px-3.5 py-1.5 bg-white text-[#3087ff] text-sm font-bold whitespace-nowrap border-2 border-[#3087ff]"
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
