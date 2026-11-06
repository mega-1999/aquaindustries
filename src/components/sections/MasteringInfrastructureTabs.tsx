"use client";

import React, { useState } from "react";
import { InfiniteWaterBackground } from "../common/InfiniteWaterBackground";

interface SectorDetail {
  id: string;
  tabLabel: string;
  headline: string;
  subhead: string;
  description: string;
  bulletSpecs: string[];
  awwaStandard: string;
  pressureRating: string;
  materialGrade: string;
  coatingSystem: string;
  diagramTitle: string;
  diagramBadge: string;
  svgType: "watermain" | "stormwater" | "treatment" | "industrial";
}

const SECTORS: SectorDetail[] = [
  {
    id: "potable",
    tabLabel: "Potable Water Transmission",
    headline: "Municipal Water Transmission & Distribution Mains",
    subhead: "AWWA C153 & C110 Compact Ductile Iron Mechanical Joint Systems",
    description:
      "Engineered for municipal underground potable water distribution grids, feeder loops, and rural water transmission pipelines. High-strength ductile iron casting allows thinner, lighter walls with greater impact resistance and higher internal pressure ratings than legacy gray iron.",
    bulletSpecs: [
      "Standard nominal sizes from 3-inch through 48-inch diameter inventory",
      "Full compliance with AWWA C153 compact and AWWA C110 full-body specifications",
      "Supplied with standard double-thick cement mortar lining per AWWA C104 / ANSI A21.4",
      "Certified drinking water safe under NSF/ANSI 61 and NSF/ANSI 372 low-lead mandates",
    ],
    awwaStandard: "AWWA C153 / C110 / C111",
    pressureRating: "350 PSI Working Pressure",
    materialGrade: "ASTM A536 Grade 65-45-12",
    coatingSystem: "Cement Mortar / Seal Coat",
    diagramTitle: "MECHANICAL JOINT CROSS-SECTION",
    diagramBadge: "AWWA C111 / C153",
    svgType: "watermain",
  },
  {
    id: "stormwater",
    tabLabel: "Stormwater Sewer & Drainage",
    headline: "Civil Stormwater Runoff & Highway Infrastructure Castings",
    subhead:
      "AASHTO M306 Heavy Highway Traffic-Rated Castings and Drainage Grates",
    description:
      "Manufactured to withstand relentless heavy vehicular loading on interstate highways, municipal arterial roadways, and airport aprons. Precision machined bearing surfaces prevent lid rattle and street noise while ensuring complete structural integrity under dynamic traffic impacts.",
    bulletSpecs: [
      "Proof-load tested to exceed AASHTO M306 standards (40,000+ lb wheel loading)",
      "Machined metal-to-metal seating surfaces eliminate rocking and vibration wear",
      "Available with custom municipal lettering, pickholes, and self-sealing neoprene gaskets",
      "Complete inventory of standard DOT curb inlets, catch basin frames, and trench grates",
    ],
    awwaStandard: "AASHTO M306 / ASTM A48",
    pressureRating: "40,000+ LB Proof Load",
    materialGrade: "ASTM A48 Class 35B / DI",
    coatingSystem: "Bare Cast / Bituminous Dip",
    diagramTitle: "TRAFFIC MANHOLE & FRAME DETAIL",
    diagramBadge: "AASHTO M306 LOAD TEST",
    svgType: "stormwater",
  },
  {
    id: "treatment",
    tabLabel: "Wastewater Treatment Plant",
    headline: "Wastewater Treatment Plant & Pumping Station Manifolds",
    subhead:
      "Flanged Spools, Wall Pipes, and Specialized Chemical-Resistant Linings",
    description:
      "Designed for above-ground plant galleries, pump discharge headers, and below-grade digester piping. Rigid flanged joints ensure exact pipe alignment, while high-build protective linings shield the iron substrate from hydrogen sulfide corrosion, abrasive slurries, and biological wastewater attack.",
    bulletSpecs: [
      "Precision fabricated flanged ductile iron pipe fabricated to AWWA C115 standards",
      "Wall pipes with integral waterstop puddles for concrete foundation penetrations",
      "Available with Protecto 401 ceramic epoxy or high-build glass linings for severe sewer service",
      "Tested with 100% air-under-water and hydrostatic pressure verification prior to dispatch",
    ],
    awwaStandard: "AWWA C115 / C110 Flanged",
    pressureRating: "250 - 350 PSI Flange Rated",
    materialGrade: "ASTM A536 Ductile Iron",
    coatingSystem: "Protecto 401 / Fusion Epoxy",
    diagramTitle: "FLANGED WALL PIPE & PUDDLE DETAIL",
    diagramBadge: "AWWA C115 FLANGED",
    svgType: "treatment",
  },
  {
    id: "industrial",
    tabLabel: "Industrial & Fire Mains",
    headline: "Industrial High-Pressure Fluid Lines & Dedicated Fire Mains",
    subhead:
      "UL-Listed and FM-Approved Restraint Fittings for Critical Facilities",
    description:
      "Dedicated infrastructure fittings engineered for high-risk industrial facilities, military installations, power generation plants, and commercial fire protection loops. Built to maintain pressure integrity during seismic events, water hammer surges, and rapid valve closures.",
    bulletSpecs: [
      "UL-listed and FM-approved wedge-action joint restraints for PVC and ductile iron mains",
      "Stainless steel heavy-duty tapping sleeves for live hot-taps under continuous pressure",
      "High deflection capability on push-on joints allowing natural ground settling without joint leaks",
      "Complete traceability with permanent foundry heat numbers cast onto every fitting body",
    ],
    awwaStandard: "UL 194 / FM 1380 / C153",
    pressureRating: "350 PSI Continuous Service",
    materialGrade: "ASTM A536 Grade 65-45-12",
    coatingSystem: "NSF 61 Fusion-Bonded Epoxy",
    diagramTitle: "WEDGE RESTRAINT GLAND ASSEMBLY",
    diagramBadge: "UL LISTED / FM APPROVED",
    svgType: "industrial",
  },
];

export function MasteringInfrastructureTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const current = SECTORS[activeTab];

  return (
    <section className="relative w-full bg-white text-[#3087ff] py-20 border-b border-[#3087ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 border-2 border-[#3087ff] bg-white px-3 py-1 mb-3">
            <span className="w-2 h-2 bg-[#3087ff]"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3087ff] whitespace-nowrap">
              Sector Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3087ff] tracking-tight">
            Building America's Water Solutions Today
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#3087ff]/90 font-normal leading-relaxed">
            From deep municipal water transmission corridors to high-velocity
            stormwater collection, Aqua Industries provides utility contractors
            with certified ductile iron fittings and castings tailored to every
            civil infrastructure sector.
          </p>
        </div>

        {/* Tab Navigation Ribbon (Single Line Buttons, Sharp Corners) */}
        <div className="flex flex-wrap border-2 border-[#3087ff] bg-white p-1 mb-8 gap-1">
          {SECTORS.map((sector, idx) => {
            const isActive = idx === activeTab;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2.5 px-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-150 whitespace-nowrap cursor-pointer ${isActive
                    ? "bg-[#3087ff] text-white"
                    : "bg-white text-[#3087ff] hover:bg-[#3087ff] hover:text-white"
                  }`}
              >
                {sector.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Active Content Showcase (Split Layout: Technical Specs on Left, Schematic on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details & Technical Specifications */}
          <div className="lg:col-span-7 border-2 border-[#3087ff] bg-white p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-white bg-[#3087ff] px-2.5 py-0.5 uppercase tracking-wider whitespace-nowrap inline-block">
                  {current.subhead}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#3087ff] leading-snug">
                  {current.headline}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#3087ff]/90 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Bullet points */}
              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#3087ff]">
                  Civil Engineering &amp; Contractor Standards:
                </h4>
                <ul className="space-y-2">
                  {current.bulletSpecs.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#3087ff]"
                    >
                      <span className="w-1.5 h-1.5 mt-1.5 bg-[#3087ff] flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4 Technical Indicators Matrix (No Overflow, Self-Wrapping Grid) */}
            <div className="mt-6 pt-5 border-t-2 border-[#3087ff] grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 text-center">
              <div className="border-2 border-[#3087ff] p-2.5 sm:p-3 bg-white flex flex-col justify-between min-h-[76px] shadow-xs">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase text-[#3087ff]/75 font-bold tracking-wider">
                  Standard
                </div>
                <div className="text-xs sm:text-[13px] font-extrabold text-[#3087ff] mt-1 leading-snug break-words">
                  {current.awwaStandard}
                </div>
              </div>

              <div className="border-2 border-[#3087ff] p-2.5 sm:p-3 bg-white flex flex-col justify-between min-h-[76px] shadow-xs">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase text-[#3087ff]/75 font-bold tracking-wider">
                  Rating
                </div>
                <div className="text-xs sm:text-[13px] font-extrabold text-[#3087ff] mt-1 leading-snug break-words">
                  {current.pressureRating}
                </div>
              </div>

              <div className="border-2 border-[#3087ff] p-2.5 sm:p-3 bg-white flex flex-col justify-between min-h-[76px] shadow-xs">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase text-[#3087ff]/75 font-bold tracking-wider">
                  Metallurgy
                </div>
                <div className="text-xs sm:text-[13px] font-extrabold text-[#3087ff] mt-1 leading-snug break-words">
                  {current.materialGrade}
                </div>
              </div>

              <div className="border-2 border-[#3087ff] p-2.5 sm:p-3 bg-white flex flex-col justify-between min-h-[76px] shadow-xs">
                <div className="text-[10px] sm:text-[11px] font-mono uppercase text-[#3087ff]/75 font-bold tracking-wider">
                  Lining
                </div>
                <div className="text-xs sm:text-[13px] font-extrabold text-[#3087ff] mt-1 leading-snug break-words">
                  {current.coatingSystem}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Contrast Technical Vector Schematic */}
          <div className="lg:col-span-5 border-2 border-[#3087ff] bg-[#3087ff] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Infinite Seamless Looping Water Background Animation */}
            <InfiniteWaterBackground opacity="opacity-20" />

            <div className="relative z-10">
              {/* Schematic Header */}
              <div className="flex items-center justify-between border-b border-[#3087ff] pb-3 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase text-[#3087ff] tracking-wider font-bold whitespace-nowrap">
                    TECHNICAL SCHEMATIC
                  </div>
                  <div className="text-base font-bold text-white whitespace-nowrap">
                    {current.diagramTitle}
                  </div>
                </div>
                <span className="text-xs font-mono uppercase px-2.5 py-1 bg-white text-[#3087ff] font-bold whitespace-nowrap">
                  {current.diagramBadge}
                </span>
              </div>

              {/* Dynamic SVG Schematic Based on Active Tab */}
              <div className="bg-white border-2 border-[#3087ff] p-4 text-[#3087ff] my-4 flex items-center justify-center min-h-[260px]">
                {current.svgType === "watermain" && (
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-label="Mechanical joint detail"
                  >
                    {/* Pipe Bell */}
                    <path
                      d="M 20 40 L 140 40 L 140 25 L 180 25 L 180 40 L 220 40 L 220 140 L 180 140 L 180 155 L 140 155 L 140 140 L 20 140 Z"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    {/* Spigot End entering Bell */}
                    <rect
                      x="140"
                      y="50"
                      width="160"
                      height="80"
                      fill="#FFFFFF"
                      stroke="#3087ff"
                      strokeWidth="3"
                    />
                    {/* Interior Cement Lining */}
                    <rect x="22" y="42" width="116" height="8" fill="#3087ff" />
                    <rect
                      x="22"
                      y="130"
                      width="116"
                      height="8"
                      fill="#3087ff"
                    />
                    {/* Gasket Socket Pocket */}
                    <rect
                      x="145"
                      y="42"
                      width="20"
                      height="16"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="145"
                      y="122"
                      width="20"
                      height="16"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="1.5"
                    />
                    {/* MJ Follower Gland */}
                    <rect
                      x="170"
                      y="20"
                      width="25"
                      height="35"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    <rect
                      x="170"
                      y="125"
                      width="25"
                      height="35"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    {/* T-Head Bolt */}
                    <line
                      x1="120"
                      y1="32"
                      x2="210"
                      y2="32"
                      stroke="#3087ff"
                      strokeWidth="4"
                    />
                    <line
                      x1="120"
                      y1="148"
                      x2="210"
                      y2="148"
                      stroke="#3087ff"
                      strokeWidth="4"
                    />
                    <circle cx="210" cy="32" r="6" fill="#3087ff" />
                    <circle cx="210" cy="148" r="6" fill="#3087ff" />
                    {/* Flow text annotation */}
                    <text
                      x="50"
                      y="95"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      WATER FLOW &gt;&gt;
                    </text>
                  </svg>
                )}

                {current.svgType === "stormwater" && (
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-label="Manhole frame and cover cross-section"
                  >
                    {/* Road surface level */}
                    <line
                      x1="10"
                      y1="50"
                      x2="310"
                      y2="50"
                      stroke="#3087ff"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                    />
                    {/* Cast Iron Frame Left */}
                    <path
                      d="M 30 150 L 30 110 L 70 110 L 70 50 L 100 50 L 100 80 L 120 80 L 120 150 Z"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    {/* Cast Iron Frame Right */}
                    <path
                      d="M 290 150 L 290 110 L 250 110 L 250 50 L 220 50 L 220 80 L 200 80 L 200 150 Z"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    {/* Heavy Duty Cover Lid */}
                    <rect
                      x="105"
                      y="52"
                      width="110"
                      height="26"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="2"
                    />
                    {/* Machined Bearing Seat */}
                    <rect x="100" y="78" width="20" height="4" fill="#3087ff" />
                    <rect x="200" y="78" width="20" height="4" fill="#3087ff" />
                    {/* Label on lid */}
                    <text
                      x="128"
                      y="69"
                      fill="#FFFFFF"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      STORM SEWER
                    </text>
                    {/* Wheel load arrow */}
                    <path
                      d="M 160 10 L 160 40 M 150 30 L 160 42 L 170 30"
                      stroke="#3087ff"
                      strokeWidth="3"
                    />
                    <text
                      x="105"
                      y="25"
                      fill="#3087ff"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      40,000 LB PROOF LOAD
                    </text>
                  </svg>
                )}

                {current.svgType === "treatment" && (
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-label="Flanged wall pipe with waterstop puddle"
                  >
                    {/* Concrete Foundation Wall */}
                    <rect
                      x="120"
                      y="20"
                      width="80"
                      height="140"
                      fill="#FFFFFF"
                      stroke="#3087ff"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                    />
                    {/* Ductile Iron Barrel */}
                    <rect
                      x="30"
                      y="65"
                      width="260"
                      height="50"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    {/* Left Flange */}
                    <rect
                      x="20"
                      y="45"
                      width="20"
                      height="90"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="2"
                    />
                    <circle cx="30" cy="55" r="4" fill="#FFFFFF" />
                    <circle cx="30" cy="125" r="4" fill="#FFFFFF" />
                    {/* Right Flange */}
                    <rect
                      x="280"
                      y="45"
                      width="20"
                      height="90"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="2"
                    />
                    <circle cx="290" cy="55" r="4" fill="#FFFFFF" />
                    <circle cx="290" cy="125" r="4" fill="#FFFFFF" />
                    {/* Center Integral Puddle Waterstop Ring */}
                    <rect
                      x="150"
                      y="40"
                      width="20"
                      height="100"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="2"
                    />
                    <text
                      x="135"
                      y="155"
                      fill="#3087ff"
                      fontSize="9"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      WATERSTOP
                    </text>
                  </svg>
                )}

                {current.svgType === "industrial" && (
                  <svg
                    viewBox="0 0 320 180"
                    className="w-full h-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-label="Wedge action restraint gland assembly"
                  >
                    {/* Pipe Barrel */}
                    <rect
                      x="40"
                      y="60"
                      width="240"
                      height="60"
                      fill="#FFFFFF"
                      stroke="#3087ff"
                      strokeWidth="3"
                    />
                    {/* Wedge Restraint Ring */}
                    <rect
                      x="180"
                      y="40"
                      width="35"
                      height="100"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    {/* Mechanical Actuating Wedges */}
                    <polygon
                      points="175,60 185,60 180,72"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points="175,120 185,120 180,108"
                      fill="#3087ff"
                      stroke="#3087ff"
                      strokeWidth="1.5"
                    />
                    {/* Torque-off Breakaway Hex Head Bolts */}
                    <rect
                      x="190"
                      y="25"
                      width="15"
                      height="15"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    <rect
                      x="190"
                      y="140"
                      width="15"
                      height="15"
                      fill="#3087ff"
                      stroke="#3087ff"
                    />
                    {/* Tie Rod to Fitting Bell */}
                    <line
                      x1="70"
                      y1="48"
                      x2="185"
                      y2="48"
                      stroke="#3087ff"
                      strokeWidth="3"
                    />
                    <line
                      x1="70"
                      y1="132"
                      x2="185"
                      y2="132"
                      stroke="#3087ff"
                      strokeWidth="3"
                    />
                    {/* Mechanical Joint Fitting Bell at Left */}
                    <path
                      d="M 40 40 L 70 40 L 70 140 L 40 140 Z"
                      fill="#3087ff"
                    />
                    <text
                      x="65"
                      y="95"
                      fill="#3087ff"
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      BREAKAWAY NUT (65-75 FT-LBS)
                    </text>
                  </svg>
                )}
              </div>

              {/* Schematic Note */}
              <p className="text-xs text-white leading-relaxed font-mono">
                CAD drawing details and engineering submittal packages available
                with complete dimensional tolerancing and mechanical joint
                gasket tables.
              </p>
            </div>

            {/* Single-Line Action Button */}
            <div className="pt-6 border-t border-[#3087ff] relative z-10">
              <a
                href="#quote-builder"
                className="w-full inline-flex items-center justify-center bg-white text-[#3087ff] hover:bg-[#3087ff] hover:text-white font-bold text-sm px-6 py-3 border-2 border-white transition-colors duration-150 whitespace-nowrap"
              >
                <span>Request Submittal for {current.tabLabel}</span>
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
        </div>
      </div>
    </section>
  );
}
