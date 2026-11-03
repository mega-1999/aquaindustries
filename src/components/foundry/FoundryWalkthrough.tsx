"use client";

import {
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Copy,
  ExternalLink,
  Factory,
  Flame,
  Gauge,
  MapPin,
  Navigation,
  PhoneCall,
  ShieldCheck,
  Train,
  Truck,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import {
  DISTRIBUTION_YARDS,
  FOUNDRY_WALKTHROUGH,
} from "../../data/waterworks-data";
import type { YardLocation } from "../../types";

interface ExtendedYardData {
  gps: string;
  classification: string;
  role: string;
  furnaceOrSiding: string;
  operatingHours: string;
  mapX: number; // percentage in SVG map (0-100)
  mapY: number; // percentage in SVG map (0-100)
}

const YARD_EXTENDED_INFO: Record<string, ExtendedYardData> = {
  "new-york-foundry": {
    gps: "40.7934° N, 73.4151° W",
    classification: "Primary Induction Melt Foundry & Corporate HQ",
    role: "Electric Induction Melt Deck, Tensile QA Lab & Northeast Yard",
    furnaceOrSiding: "2,500°F Dual Induction Melters • Spectrometry Lab",
    operatingHours: "24/7 Foundry Ops • Emergency Watermain Dispatch Available",
    mapX: 86,
    mapY: 31,
  },
  "florida-operations": {
    gps: "28.4239° N, 81.3653° W",
    classification: "Southeast Logistics Hub & Rapid Transit Fleet",
    role: "Deepwater Port Logistics, Storm Surge Reserve & Florida Fleet",
    furnaceOrSiding: "Class-1 Direct Rail Spur • 6-Car Industrial Siding",
    operatingHours: "6:00 AM - 8:00 PM EST • 24/7 Hurricane Emergency Dispatch",
    mapX: 77,
    mapY: 79,
  },
  "chicago-hub": {
    gps: "41.8173° N, 87.7423° W",
    classification: "Midwest Distribution Hub & Rail Intermodal Yard",
    role: "Great Lakes Watermain Corridor & Heavy Mechanical Restraints Hub",
    furnaceOrSiding: "Class-1 BNSF / UP Rail Connection • 4-Car Siding",
    operatingHours: "6:00 AM - 7:00 PM CST • Immediate Jobsite Flatbeds",
    mapX: 62,
    mapY: 35,
  },
  "dallas-hub": {
    gps: "32.8122° N, 97.1645° W",
    classification: "Southern Waterworks Logistics & Pipeline Center",
    role: "Texas, Gulf Coast & Municipal Transmission Fitting Reserve",
    furnaceOrSiding: "Class-1 Rail Spur • Dual Overhead Gantry Cranes",
    operatingHours: "6:00 AM - 7:00 PM CST • Direct Interstate 35/30 Access",
    mapX: 47,
    mapY: 67,
  },
};

export const FoundryWalkthrough: React.FC = () => {
  const [selectedYardId, setSelectedYardId] =
    useState<string>("new-york-foundry");
  const [mapMode, setMapMode] = useState<"network" | "street">("network");
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);

  const activeYard: YardLocation =
    DISTRIBUTION_YARDS.find((y) => y.id === selectedYardId) ||
    DISTRIBUTION_YARDS[0];
  const activeExtended =
    YARD_EXTENDED_INFO[activeYard.id] || YARD_EXTENDED_INFO["new-york-foundry"];

  const handleCopyAddress = (address: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2200);
    }
  };

  const getWalkthroughIcon = (id: string) => {
    switch (id) {
      case "sand-molding":
        return Factory;
      case "cnc-machining":
        return Gauge;
      case "metallurgy-lab":
        return ShieldCheck;
      case "flatbed-yard":
        return Truck;
      default:
        return Flame;
    }
  };

  return (
    <section
      id="foundry-walkthrough"
      aria-label="Real Foundry & Yard Walkthrough"
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#5FD4FD] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
            <Factory className="w-3.5 h-3.5 text-[#0082FC]" />
            <span className="whitespace-nowrap">
              Domestic Foundry &amp; Distribution Operations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0082FC] tracking-tight leading-tight uppercase">
            Real Foundry &amp; Yard Walkthrough
          </h2>
          <p className="mt-2 text-[#0082FC]/90 text-sm sm:text-base leading-relaxed font-normal">
            Take a look inside our manufacturing and yard operations. See how
            clean molds, sharp machining, and tested metallurgy produce
            consistent waterworks fittings ready for immediate flatbed delivery.
          </p>
        </div>

        {/* 4-Item Manufacturing Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FOUNDRY_WALKTHROUGH.map((item) => {
            const Icon = getWalkthroughIcon(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border-2 border-[#5FD4FD] rounded-none p-6 lg:p-8 shadow-sm hover:border-[#0082FC] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#5FD4FD]/30">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-sm font-bold text-[#0082FC] shadow-sm">
                      <Icon className="w-4 h-4 text-[#0082FC]" />
                      <span>{item.tagline}</span>
                    </span>
                    <span className="text-sm font-bold text-[#0082FC] bg-white px-3 py-1 rounded-none border-2 border-[#5FD4FD]">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0082FC] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#0082FC] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verified Spec Pill */}
                <div className="mt-4 pt-4 border-t-2 border-[#5FD4FD]/30 flex items-center justify-between text-sm sm:text-base text-[#0082FC]">
                  <span className="font-bold text-[#0082FC] flex items-center gap-2 whitespace-nowrap">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                    <span>Quality Benchmark:</span>
                  </span>
                  <span className="font-bold text-[#0082FC] bg-white px-2.5 py-1 rounded-none border-2 border-[#5FD4FD] whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plant Overview Callout */}
        <div className="mb-20 bg-[#0082FC] border-2 border-[#5FD4FD] text-white rounded-none p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center text-[#0082FC] shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-[#0082FC]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Certified Mill Test Reports (MTRs) for Every Heat
              </h4>
              <p className="text-sm sm:text-base text-white/95 mt-1 leading-relaxed">
                Chemical composition and tensile pull documentation are stored
                under every stamped heat code. Available immediately for your
                project inspection file.
              </p>
            </div>
          </div>

          <a
            href="#quality-standards"
            className="shrink-0 px-6 py-3.5 bg-white text-[#0082FC] hover:bg-[#5FD4FD] rounded-none text-sm sm:text-base font-extrabold transition-colors whitespace-nowrap shadow-sm"
          >
            Review Quality Standards
          </a>
        </div>

        {/* ========================================================
            REDESIGNED LOCATION & INTERACTIVE MAP ARCHITECTURE
            ======================================================== */}
        <div
          id="facilities-network"
          className="border-4 border-[#0082FC] bg-white text-[#0082FC] p-6 sm:p-8 lg:p-10 shadow-2xl relative"
        >
          {/* Top Industrial Network Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 pb-6 border-b-2 border-[#0082FC]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0082FC] text-white text-xs font-black uppercase tracking-wider mb-2 border border-[#5FD4FD]">
                <Building2 className="w-3.5 h-3.5 text-[#5FD4FD]" />
                <span>Domestic Manufacturing &amp; Logistics Network</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0082FC] uppercase tracking-tight">
                Strategic Foundries &amp; Rail Terminals
              </h3>
              <p className="text-sm sm:text-base text-[#0082FC]/90 font-medium mt-1 max-w-2xl">
                Direct manufacturer fulfillment from 4 regional hubs —
                eliminating distributor markups and delivering certified ductile
                iron fittings and pipe restraints directly to municipal
                waterworks jobsites.
              </p>
            </div>

            {/* Live National Capacity Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
              <div className="bg-white border-2 border-[#5FD4FD] p-2.5 text-center">
                <span className="block text-[10px] font-bold text-[#0082FC]/75 uppercase">
                  Total Staged Iron
                </span>
                <span className="text-base sm:text-lg font-black text-[#0082FC]">
                  6,100+ Tons
                </span>
              </div>
              <div className="bg-white border-2 border-[#5FD4FD] p-2.5 text-center">
                <span className="block text-[10px] font-bold text-[#0082FC]/75 uppercase">
                  Class-1 Rail Spurs
                </span>
                <span className="text-base sm:text-lg font-black text-[#0082FC]">
                  4 Active Sidings
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 bg-[#0082FC] text-white border-2 border-[#0082FC] p-2.5 text-center">
                <span className="block text-[10px] font-bold text-[#5FD4FD] uppercase">
                  Fleet Fulfillment
                </span>
                <span className="text-base sm:text-lg font-black text-white">
                  24 - 48 Hr
                </span>
              </div>
            </div>
          </div>

          {/* Main 2-Column Split: Facility Switcher (Left) & Interactive Map Stage (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
            {/* Left Column: 4 Regional Hub Selectors (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs font-black uppercase text-[#0082FC] tracking-wider mb-1 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0082FC]" />
                Select Facility Hub for Live Yard Dossier:
              </span>

              {DISTRIBUTION_YARDS.map((yard) => {
                const isSelected = selectedYardId === yard.id;
                const ext =
                  YARD_EXTENDED_INFO[yard.id] ||
                  YARD_EXTENDED_INFO["new-york-foundry"];

                return (
                  <button
                    key={yard.id}
                    type="button"
                    onClick={() => setSelectedYardId(yard.id)}
                    className={`text-left p-4 rounded-none border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#0082FC] text-white border-[#0082FC] shadow-lg -translate-y-0.5"
                        : "bg-white text-[#0082FC] border-[#5FD4FD] hover:border-[#0082FC] hover:bg-[#5FD4FD]/10"
                    }`}
                  >
                    {/* Top Row: City & State + Classification Tag */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 ${
                            isSelected
                              ? "bg-[#5FD4FD] animate-ping"
                              : "bg-[#0082FC]"
                          }`}
                        />
                        <span
                          className={`font-black text-sm uppercase tracking-tight ${
                            isSelected ? "text-white" : "text-[#0082FC]"
                          }`}
                        >
                          {yard.city}, {yard.state}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-black px-2 py-0.5 border ${
                          isSelected
                            ? "bg-white text-[#0082FC] border-white"
                            : "bg-white text-[#0082FC] border-[#5FD4FD]"
                        }`}
                      >
                        {yard.id === "new-york-foundry"
                          ? "FOUNDRY & HQ"
                          : yard.id === "florida-operations"
                            ? "SOUTHEAST HUB"
                            : yard.id === "chicago-hub"
                              ? "MIDWEST HUB"
                              : "SOUTHERN HUB"}
                      </span>
                    </div>

                    {/* Facility Name & Brief Role */}
                    <h4
                      className={`font-black text-base uppercase leading-tight mb-1 ${
                        isSelected ? "text-[#5FD4FD]" : "text-[#0082FC]"
                      }`}
                    >
                      {yard.name}
                    </h4>

                    <p
                      className={`text-xs line-clamp-1 mb-3 ${
                        isSelected ? "text-white/90" : "text-[#0082FC]/80"
                      }`}
                    >
                      {ext.role}
                    </p>

                    {/* Bottom Quick Specs Strip */}
                    <div
                      className={`pt-2 border-t flex items-center justify-between text-[11px] font-bold ${
                        isSelected
                          ? "border-white/20 text-white/95"
                          : "border-[#5FD4FD]/30 text-[#0082FC]"
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Truck className="w-3.5 h-3.5 shrink-0" />
                        <span>{yard.inventoryFittingsTons} Tons Staged</span>
                      </span>

                      <span className="flex items-center gap-1">
                        <Train className="w-3.5 h-3.5 shrink-0" />
                        <span>Rail Connected</span>
                      </span>

                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? "translate-x-1 text-[#5FD4FD]" : ""
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Interactive Map & Satellite Viewport (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Map Viewport Controls Bar */}
              <div className="bg-[#0082FC] text-white p-3 flex flex-wrap items-center justify-between gap-3 border-2 border-[#0082FC]">
                {/* View Mode Toggle: Blueprint Network vs Satellite Embed */}
                <div className="flex items-center gap-1 bg-white/10 p-0.5 border border-white/20">
                  <button
                    type="button"
                    onClick={() => setMapMode("network")}
                    className={`px-3 py-1 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                      mapMode === "network"
                        ? "bg-white text-[#0082FC]"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    🗺️ Freight Network Corridors
                  </button>
                  <button
                    type="button"
                    onClick={() => setMapMode("street")}
                    className={`px-3 py-1 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer ${
                      mapMode === "street"
                        ? "bg-white text-[#0082FC]"
                        : "text-white hover:bg-white/20"
                    }`}
                  >
                    📍 Live Satellite &amp; Street Map
                  </button>
                </div>

                {/* GPS Reticle & External Google Maps Link */}
                <div className="flex items-center gap-3 text-xs">
                  <span className="hidden sm:inline font-mono font-bold text-[#5FD4FD] text-[11px]">
                    {activeExtended.gps}
                  </span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      activeYard.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-[#0082FC] hover:bg-[#5FD4FD] text-xs font-black uppercase tracking-wider transition-colors whitespace-nowrap"
                    title="Open address in Google Maps"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Map Canvas Frame */}
              <div className="relative w-full h-[360px] sm:h-[420px] bg-[#0082FC]/5 border-2 border-[#0082FC] border-t-0 overflow-hidden flex items-center justify-center">
                {/* CORNER RETICLES FOR INDUSTRIAL HUD FEEL */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0082FC] pointer-events-none z-20" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#0082FC] pointer-events-none z-20" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#0082FC] pointer-events-none z-20" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0082FC] pointer-events-none z-20" />

                {/* MODE A: INTERACTIVE SVG US FREIGHT NETWORK BLUEPRINT */}
                {mapMode === "network" ? (
                  <div className="relative w-full h-full bg-[#0082FC] p-4 select-none overflow-hidden flex flex-col justify-between">
                    {/* Architectural Coordinate Grid Lines */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                      }}
                    />

                    {/* Top Status Strip */}
                    <div className="relative z-10 flex items-center justify-between text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1.5 bg-white/20 px-2 py-0.5 border border-white/30">
                        <span className="w-2 h-2 rounded-full bg-[#5FD4FD] animate-ping" />
                        <span>US Intermodal Corridor Map</span>
                      </span>
                      <span className="text-white/80">
                        Active Hub: {activeYard.city}, {activeYard.state}
                      </span>
                    </div>

                    {/* SVG Map Canvas: Continental Coastlines & Supply Corridors */}
                    <div className="relative w-full h-full max-h-[310px]">
                      <svg
                        viewBox="0 0 800 480"
                        className="w-full h-full drop-shadow-xl"
                        fill="none"
                        aria-hidden="true"
                      >
                        {/* Stylized US Continental Coastline Schematic */}
                        <path
                          d="M 120 110 L 220 100 L 320 105 L 430 95 L 540 100 L 610 85 L 680 90 L 730 110 L 760 140 L 730 180 L 710 240 L 690 300 L 660 370 L 620 400 L 590 360 L 540 340 L 460 360 L 410 420 L 350 410 L 300 370 L 220 370 L 160 340 L 120 280 L 110 210 Z"
                          stroke="#5FD4FD"
                          strokeWidth="2.5"
                          fill="rgba(95, 212, 253, 0.08)"
                          strokeDasharray="6 3"
                        />

                        {/* State Internal Crossway Grid Schematic */}
                        <path
                          d="M 220 100 L 220 370 M 350 105 L 350 410 M 540 100 L 540 340 M 120 210 L 730 180 M 120 280 L 710 240"
                          stroke="#ffffff"
                          strokeWidth="0.8"
                          strokeOpacity="0.25"
                        />

                        {/* Animated High-Capacity Freight Corridors */}
                        <line
                          x1="680"
                          y1="150"
                          x2="500"
                          y2="170"
                          stroke="#5FD4FD"
                          strokeWidth="3"
                          strokeDasharray="8 6"
                          className="animate-hydro-flow"
                        />
                        <line
                          x1="500"
                          y1="170"
                          x2="380"
                          y2="320"
                          stroke="#ffffff"
                          strokeWidth="3"
                          strokeDasharray="8 6"
                          className="animate-hydro-flow-fast"
                        />
                        <line
                          x1="380"
                          y1="320"
                          x2="620"
                          y2="380"
                          stroke="#5FD4FD"
                          strokeWidth="3"
                          strokeDasharray="8 6"
                          className="animate-hydro-flow"
                        />
                        <line
                          x1="680"
                          y1="150"
                          x2="620"
                          y2="380"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          strokeDasharray="8 6"
                          className="animate-hydro-flow"
                        />
                      </svg>

                      {/* Interactive HTML Pin Buttons Overlaid on Map Coordinates */}
                      {DISTRIBUTION_YARDS.map((yard) => {
                        const ext =
                          YARD_EXTENDED_INFO[yard.id] ||
                          YARD_EXTENDED_INFO["new-york-foundry"];
                        const isSelected = selectedYardId === yard.id;

                        return (
                          <button
                            key={yard.id}
                            type="button"
                            onClick={() => setSelectedYardId(yard.id)}
                            style={{
                              left: `${ext.mapX}%`,
                              top: `${ext.mapY}%`,
                            }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none z-20 flex flex-col items-center"
                            aria-label={`Select ${yard.name}`}
                          >
                            {/* Pulsing Radar Ring on Selected Pin */}
                            {isSelected && (
                              <span className="absolute w-10 h-10 -top-1 -left-1 rounded-full border-2 border-[#5FD4FD] animate-ping pointer-events-none" />
                            )}

                            {/* Center Pin Marker */}
                            <div
                              className={`w-5 h-5 flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-125 shadow-lg ${
                                isSelected
                                  ? "bg-[#5FD4FD] border-white scale-110"
                                  : "bg-white border-[#0082FC]"
                              }`}
                            >
                              <span
                                className={`w-2 h-2 ${
                                  isSelected ? "bg-[#0082FC]" : "bg-[#0082FC]"
                                }`}
                              />
                            </div>

                            {/* Permanent Clear City Tag */}
                            <span
                              className={`mt-1 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider whitespace-nowrap shadow-md transition-colors ${
                                isSelected
                                  ? "bg-white text-[#0082FC] border border-[#5FD4FD]"
                                  : "bg-[#0082FC] text-white border border-white/40 group-hover:bg-[#5FD4FD] group-hover:text-[#0082FC]"
                              }`}
                            >
                              {yard.city}, {yard.state}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom Blueprint Legend */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between text-[10px] text-white/90 pt-2 border-t border-white/20">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 bg-[#5FD4FD] border border-white" />
                          <span>Primary Heavy Foundry</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2.5 h-2.5 bg-white border border-[#0082FC]" />
                          <span>Stocking Rail Yards</span>
                        </span>
                      </div>
                      <span className="text-[#5FD4FD] font-mono">
                        INTERACTIVE: CLICK ANY HUB PIN TO INSPECT
                      </span>
                    </div>
                  </div>
                ) : (
                  /* MODE B: LIVE SATELLITE & STREET MAP (EMBEDDED GOOGLE MAPS) */
                  <div className="relative w-full h-full bg-[#0082FC]/10">
                    <iframe
                      title={`Interactive Location Map for ${activeYard.name}`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        activeYard.address,
                      )}&t=m&z=14&output=embed`}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="w-full h-full border-0 filter contrast-105"
                      aria-label={`Map of ${activeYard.name} at ${activeYard.address}`}
                    />

                    {/* Float Pin Overlay */}
                    <div className="absolute bottom-3 left-3 bg-[#0082FC] text-white px-3 py-1.5 text-xs font-black uppercase tracking-wider border-2 border-white shadow-xl flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#5FD4FD]" />
                      <span>
                        {activeYard.city}, {activeYard.state} Terminal
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================
              COMPREHENSIVE FACILITY INTELLIGENCE DOSSIER (4-GRID)
              ======================================================== */}
          <div className="bg-[#0082FC]/5 border-2 border-[#0082FC] p-6 lg:p-8">
            {/* Header of Dossier */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b-2 border-[#0082FC]">
              <div>
                <span className="text-xs font-black text-[#0082FC] uppercase tracking-wider block">
                  Designated Facility Dossier &bull; {activeYard.stockStatus}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-[#0082FC] uppercase tracking-tight">
                  {activeYard.name}
                </h4>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleCopyAddress(activeYard.address)}
                  className="px-3.5 py-2 bg-white text-[#0082FC] hover:bg-[#5FD4FD]/30 border-2 border-[#0082FC] font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                      <span className="text-green-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    activeYard.address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC] border-2 border-[#0082FC] font-black text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* 4 Technical Facility Detail Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1. Physical Location & Coordinates */}
              <div className="bg-white border-2 border-[#5FD4FD] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#0082FC] mb-2 pb-1.5 border-b border-[#5FD4FD]/30">
                    <MapPin className="w-4 h-4 text-[#0082FC]" />
                    <span>Physical Yard Address</span>
                  </div>
                  <p className="text-sm font-bold text-[#0082FC] leading-relaxed mb-3">
                    {activeYard.address}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#5FD4FD]/30">
                  <span className="text-[11px] font-mono text-[#0082FC]/80 block">
                    Coordinates: {activeExtended.gps}
                  </span>
                </div>
              </div>

              {/* 2. Direct Communications & Dispatch Desk */}
              <div className="bg-white border-2 border-[#5FD4FD] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#0082FC] mb-2 pb-1.5 border-b border-[#5FD4FD]/30">
                    <PhoneCall className="w-4 h-4 text-[#0082FC]" />
                    <span>Direct Dispatch Line</span>
                  </div>
                  <a
                    href={`tel:${activeYard.phone.replace(/[^+\d]/g, "")}`}
                    className="text-base font-black text-[#0082FC] hover:text-[#5FD4FD] transition-colors block mb-1"
                  >
                    {activeYard.phone}
                  </a>
                  <a
                    href={`mailto:${activeYard.dispatchEmail}`}
                    className="text-xs font-bold text-[#0082FC] hover:underline block truncate mb-2"
                  >
                    {activeYard.dispatchEmail}
                  </a>
                </div>
                <div className="pt-2 border-t border-[#5FD4FD]/30">
                  <span className="text-[11px] font-bold text-[#0082FC] block leading-tight">
                    {activeExtended.operatingHours}
                  </span>
                </div>
              </div>

              {/* 3. Rail Spur & Logistics Capability */}
              <div className="bg-white border-2 border-[#5FD4FD] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#0082FC] mb-2 pb-1.5 border-b border-[#5FD4FD]/30">
                    <Train className="w-4 h-4 text-[#0082FC]" />
                    <span>Intermodal Rail Siding</span>
                  </div>
                  <p className="text-xs font-bold text-[#0082FC] leading-snug mb-2">
                    {activeExtended.furnaceOrSiding}
                  </p>
                  <span className="text-xs text-[#0082FC]/90 block">
                    Coverage: {activeYard.coverageRadius}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#5FD4FD]/30 flex items-center justify-between text-xs font-black">
                  <span className="text-[#0082FC]">Fulfillment:</span>
                  <span className="text-[#0082FC] bg-[#5FD4FD]/20 px-2 py-0.5">
                    {activeYard.transitHours}
                  </span>
                </div>
              </div>

              {/* 4. Staged Inventory & Jobsite Allocation */}
              <div className="bg-white border-2 border-[#5FD4FD] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#0082FC] mb-2 pb-1.5 border-b border-[#5FD4FD]/30">
                    <Truck className="w-4 h-4 text-[#0082FC]" />
                    <span>Staged Yard Inventory</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center mb-3">
                    <div className="bg-[#0082FC]/5 p-1.5 border border-[#5FD4FD]/40">
                      <span className="text-lg font-black text-[#0082FC] block">
                        {activeYard.inventoryFittingsTons} T
                      </span>
                      <span className="text-[9px] font-bold text-[#0082FC]/75 uppercase">
                        Fittings
                      </span>
                    </div>
                    <div className="bg-[#0082FC]/5 p-1.5 border border-[#5FD4FD]/40">
                      <span className="text-lg font-black text-[#0082FC] block">
                        {activeYard.inventoryRestraintsUnits.toLocaleString()}
                      </span>
                      <span className="text-[9px] font-bold text-[#0082FC]/75 uppercase">
                        Restraints
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href="#quote-calculator"
                  className="w-full py-2 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-[11px] uppercase tracking-wider text-center transition-all block border border-[#0082FC]"
                >
                  Allocate Freight Here &rsaquo;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
