"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  MapPin,
  Layers,
  FileCode2,
  ExternalLink,
  Search,
  Building2,
  Globe,
  ArrowUpRight,
  Filter,
  Sparkles,
  Info,
  CheckCircle,
  HelpCircle,
  FileText
} from "lucide-react";
import { stateData, type StateData } from "@/lib/stateData";

// Define regional / engineering categories
const tierMap: Record<string, { tier: "Seismic+" | "Freeze-Thaw" | "Coastal" | "Heavy Load" | "Standard"; spec: string }> = {
  Alabama: { tier: "Coastal", spec: "ALDOT Standard Spec Sec 501" },
  Alaska: { tier: "Seismic+", spec: "AKDOT Bridge Design Manual Sec 4" },
  Arizona: { tier: "Standard", spec: "ADOT Roadway Design Guidelines" },
  Arkansas: { tier: "Standard", spec: "ARDOT Class S(AE) Concrete Spec" },
  California: { tier: "Seismic+", spec: "Caltrans Seismic Design Criteria v2.0" },
  Colorado: { tier: "Freeze-Thaw", spec: "CDOT Class G Concrete Provisions" },
  Connecticut: { tier: "Coastal", spec: "CTDOT Form 818 Specification" },
  Delaware: { tier: "Coastal", spec: "DelDOT Class A Silica Fume Spec" },
  "District of Columbia": { tier: "Standard", spec: "DDOT Highways & Structures Code" },
  Florida: { tier: "Coastal", spec: "FDOT Structural Design Guidelines" },
  Georgia: { tier: "Coastal", spec: "GDOT Section 500 Concrete Spec" },
  Guam: { tier: "Coastal", spec: "Guam DPW Standard Specifications" },
  Hawaii: { tier: "Seismic+", spec: "HDOT Structural Design Manual" },
  Idaho: { tier: "Freeze-Thaw", spec: "ITD Standard Drawings & Specs" },
  Illinois: { tier: "Heavy Load", spec: "IDOT Bridge Manual Provisions" },
  Indiana: { tier: "Heavy Load", spec: "INDOT Structural Concrete Specs" },
  Iowa: { tier: "Freeze-Thaw", spec: "Iowa DOT Class C Structural Concrete" },
  Kansas: { tier: "Freeze-Thaw", spec: "KDOT Commercial Grade Concrete Specs" },
  Kentucky: { tier: "Heavy Load", spec: "KYTC Standard Drawings Division" },
  Louisiana: { tier: "Coastal", spec: "LaDOTD Corrosion-Protection Specs" },
  Maine: { tier: "Freeze-Thaw", spec: "MaineDOT Bridge Design Guide" },
  Maryland: { tier: "Coastal", spec: "MDOT SHA Standard Specifications" },
  Massachusetts: { tier: "Coastal", spec: "MassDOT Bridge Manual Section 9" },
  Michigan: { tier: "Freeze-Thaw", spec: "MDOT Structural Silica Fume Concrete" },
  Minnesota: { tier: "Freeze-Thaw", spec: "MnDOT High Performance Concrete Specs" },
  Mississippi: { tier: "Coastal", spec: "MDOT Roadway Design Manual" },
  Missouri: { tier: "Standard", spec: "MoDOT Section 703 Structural Concrete" },
  Montana: { tier: "Freeze-Thaw", spec: "MDT Bridge Design Specs" },
  Nebraska: { tier: "Freeze-Thaw", spec: "NDOT Specification Section 700" },
  Nevada: { tier: "Seismic+", spec: "NDOT Structures Manual Section 8" },
  "New Hampshire": { tier: "Freeze-Thaw", spec: "NHDOT Standard Specifications" },
  "New Jersey": { tier: "Coastal", spec: "NJDOT High-Performance Concrete Specs" },
  "New Mexico": { tier: "Standard", spec: "NMDOT Class A / AA Concrete Spec" },
  "New York": { tier: "Coastal", spec: "NYSDOT Standard Sheet Set 500" },
  "North Carolina": { tier: "Coastal", spec: "NCDOT Substructure Concrete Specs" },
  "North Dakota": { tier: "Freeze-Thaw", spec: "NDDOT Structural Concrete Guide" },
  Ohio: { tier: "Heavy Load", spec: "ODOT Item 511 Structural Concrete" },
  Oklahoma: { tier: "Standard", spec: "ODOT Section 509 Bridges Specs" },
  Oregon: { tier: "Seismic+", spec: "ODOT Bridge Design Manual Sec 1" },
  Pennsylvania: { tier: "Heavy Load", spec: "PennDOT Pub 408 Specifications" },
  "Puerto Rico": { tier: "Coastal", spec: "PRHTA Model Drawings & Details" },
  "Rhode Island": { tier: "Coastal", spec: "RIDOT Standard Specifications" },
  "South Carolina": { tier: "Coastal", spec: "SCDOT Structural Concrete Design" },
  "South Dakota": { tier: "Freeze-Thaw", spec: "SDDOT Bridge Construction Specs" },
  Tennessee: { tier: "Heavy Load", spec: "TDOT Bridge Design Standards" },
  Texas: { tier: "Heavy Load", spec: "TxDOT Bridge Design Manual LRFD" },
  Utah: { tier: "Freeze-Thaw", spec: "UDOT Structural Concrete 03310" },
  Vermont: { tier: "Freeze-Thaw", spec: "VTrans Bridge Design Manual" },
  Virginia: { tier: "Coastal", spec: "VDOT Road & Bridge Specifications" },
  Washington: { tier: "Seismic+", spec: "WSDOT Bridge Design Manual Sec 5" },
  "West Virginia": { tier: "Standard", spec: "WVDOT Bridge Design Specs" },
  Wisconsin: { tier: "Freeze-Thaw", spec: "WisDOT Standard Specifications" },
  Wyoming: { tier: "Freeze-Thaw", spec: "WYDOT LRFD Bridge Design Manual" },
  "FLH Divisions (FHWA)": { tier: "Standard", spec: "FHWA FLH-18 Standard Drawings" }
};

const stateAbbrs: Record<string, string> = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA",
  Colorado: "CO", Connecticut: "CT", Delaware: "DE", "District of Columbia": "DC",
  Florida: "FL", Georgia: "GA", Guam: "GU", Hawaii: "HI", Idaho: "ID",
  Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS", Kentucky: "KY",
  Louisiana: "LA", Maine: "ME", Maryland: "MD", Massachusetts: "MA", Michigan: "MI",
  Minnesota: "MN", Mississippi: "MS", Missouri: "MO", Montana: "MT", Nebraska: "NE",
  Nevada: "NV", "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM",
  "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", Ohio: "OH",
  Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA", "Puerto Rico": "PR",
  "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD", Tennessee: "TN",
  Texas: "TX", Utah: "UT", Vermont: "VT", Virginia: "VA", Washington: "WA",
  "West Virginia": "WV", Wisconsin: "WI", Wyoming: "WY", "FLH Divisions (FHWA)": "FHWA"
};

// Design system colors based on Tier classification
const tierColors = {
  "Seismic+": {
    bg: "bg-red-50/80 dark:bg-red-950/20",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-200/60 dark:border-red-900/40",
    accent: "#DC2626"
  },
  "Freeze-Thaw": {
    bg: "bg-blue-50/80 dark:bg-blue-950/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200/60 dark:border-blue-900/40",
    accent: "#2563EB"
  },
  Coastal: {
    bg: "bg-teal-50/80 dark:bg-teal-950/20",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-200/60 dark:border-teal-900/40",
    accent: "#0D9488"
  },
  "Heavy Load": {
    bg: "bg-purple-50/80 dark:bg-purple-950/20",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200/60 dark:border-purple-900/40",
    accent: "#9333EA"
  },
  Standard: {
    bg: "bg-slate-50 dark:bg-slate-900/40",
    text: "text-slate-600 dark:text-slate-400",
    border: "border-slate-200 dark:border-slate-800/80",
    accent: "#64748B"
  }
};

export default function DotMatrixSlider() {
  const [activeState, setActiveState] = useState<StateData>(stateData[4] || stateData[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<string>("All");

  // Dynamic enrichment of stateData with Tier & Abbreviation info
  const enrichedStates = useMemo(() => {
    return stateData.map((item) => {
      const info = tierMap[item.state] || { tier: "Standard", spec: "AASHTO LRFD 9th Ed." };
      const abbr = stateAbbrs[item.state] || item.state.slice(0, 2).toUpperCase();
      
      // Determine state primary logo favicon (use the logo of the first link if available)
      const primaryLogo = item.links[0]?.logo || `https://www.google.com/s2/favicons?domain=dot.state.${abbr.toLowerCase()}.us&sz=64`;
      
      return {
        ...item,
        abbr,
        tier: info.tier,
        spec: info.spec,
        primaryLogo
      };
    });
  }, []);

  // Filter & Search Logic
  const filteredStates = useMemo(() => {
    return enrichedStates.filter((item) => {
      const matchesSearch = 
        item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.abbr.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTier = selectedTier === "All" || item.tier === selectedTier;
      
      return matchesSearch && matchesTier;
    });
  }, [enrichedStates, searchQuery, selectedTier]);

  // Distribute filtered items across 3 sliding tracks
  const track1 = useMemo(() => {
    const items = filteredStates.slice(0, Math.ceil(filteredStates.length / 3));
    return [...items, ...items, ...items]; // Triple for smooth continuous slider
  }, [filteredStates]);

  const track2 = useMemo(() => {
    const items = filteredStates.slice(Math.ceil(filteredStates.length / 3), Math.ceil(filteredStates.length / 3) * 2);
    return [...items, ...items, ...items];
  }, [filteredStates]);

  const track3 = useMemo(() => {
    const items = filteredStates.slice(Math.ceil(filteredStates.length / 3) * 2);
    return [...items, ...items, ...items];
  }, [filteredStates]);

  // Current active item tier style details
  const activeEnriched = useMemo(() => {
    return enrichedStates.find(s => s.state === activeState.state) || enrichedStates[0];
  }, [enrichedStates, activeState]);

  const activeColors = tierColors[activeEnriched.tier] || tierColors.Standard;

  return (
    <section className="w-full bg-[#F8FAFC] border-t-2 border-slate-100 overflow-hidden relative">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B79EE]/5 rounded-full filter blur-3xl pointer-events-none opacity-40 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004aad]/5 rounded-full filter blur-3xl pointer-events-none opacity-40 -translate-x-1/3 translate-y-1/3" />

      <div className="w-full px-10 md:px-20 py-16  relative z-10">
        
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12 border-b border-slate-200 pb-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#004aad] tracking-tight leading-none uppercase">
              State DOT Drawings <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004aad] to-[#1B79EE]">Compliance Databank</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base max-w-2xl leading-relaxed">
              Verify precast concrete standard drawings, roadway plans, and bridge structural details across all 50+ United States jurisdictions in real-time.
            </p>
          </div>
 
        </div>

        {/* INTERACTIVE WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT INSPECT PANEL (4 Columns) */}
          <div className="lg:col-span-5 xl:col-span-4 h-full flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEnriched.state}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-between h-full border-t-4"
                style={{ borderTopColor: activeColors.accent }}
              >
                {/* Background watermark badge */}
                <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                  <ShieldCheck className="w-36 h-36" style={{ color: activeColors.accent }} />
                </div>

                <div className="space-y-6 relative z-10">
                  {/* State Title & DOT Icon */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-black tracking-widest border uppercase ${activeColors.bg} ${activeColors.text} ${activeColors.border}`}>
                          {activeEnriched.abbr}
                        </span>
                        <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                          DOT Jurisdiction
                        </span>
                      </div>
                      <h3 className="text-3xl font-black text-[#004aad] tracking-tight mt-1">
                        {activeEnriched.state}
                      </h3>
                      <p className="text-[#1B79EE] font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" /> Regional DOT Portal
                      </p>
                    </div>

                    {/* DOT Logo Container */}
                    <div className="relative w-14 h-14 bg-white border border-slate-100 rounded-xl p-1.5 shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={activeEnriched.primaryLogo}
                        alt={`${activeEnriched.state} DOT Favicon`}
                        className="w-10 h-10 object-contain rounded-md"
                        onError={(e) => {
                          // Fallback to building icon if domain favicon fails
                          e.currentTarget.style.display = 'none';
                          const sibling = e.currentTarget.nextElementSibling;
                          if (sibling) sibling.classList.remove('hidden');
                        }}
                      />
                      <Building2 className="w-7 h-7 text-slate-300 hidden" />
                    </div>
                  </div>

                  {/* Core Matrix Metadata */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    
                    <div className="bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                      <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest mb-1.5 flex items-center gap-1">
                        <FileCode2 className="w-3.5 h-3.5" /> Specification
                      </p>
                      <p className="font-extrabold text-xs text-slate-600 truncate uppercase" title={activeEnriched.spec}>
                        {activeEnriched.spec.split(" ")[0]} Series
                      </p>
                    </div>
                  </div>

                  {/* Specifications and provisions details */}
                  <div className="bg-[#1B79EE]/5 rounded-xl p-4 border border-[#1B79EE]/10 flex gap-3">
                    <Info className="w-5 h-5 text-[#1B79EE] flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#1b79ee] font-black">Spec Provision</p>
                      <p className="text-xs text-slate-600 font-semibold leading-relaxed">
                        {activeEnriched.spec}. All precast structural components must satisfy regional requirements.
                      </p>
                    </div>
                  </div>

                  {/* Links / Resources List */}
                  <div className="space-y-3 pt-2">
                    <p className="text-slate-400 font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" /> Compiled Resources ({activeEnriched.links.length})
                    </p>
                    
                    {activeEnriched.links.length === 0 ? (
                      <div className="flex items-center gap-2 p-3 text-xs bg-slate-50 border border-slate-100 text-slate-400 rounded-xl font-bold">
                        <HelpCircle className="w-4 h-4" /> No specific drawing links registered
                      </div>
                    ) : (
                      <div className="space-y-2 max-h-[190px] overflow-y-auto pr-1">
                        {activeEnriched.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-white border border-slate-100 hover:border-[#1B79EE] hover:bg-[#1B79EE]/5 rounded-xl group transition-all duration-150"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              {/* Link-specific logo favicon */}
                              <div className="w-8 h-8 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center p-1.5 border border-slate-100/50 flex-shrink-0 transition-colors">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={link.logo || activeEnriched.primaryLogo}
                                  alt="Source Favicon"
                                  className="w-5 h-5 object-contain"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const sibling = e.currentTarget.nextElementSibling;
                                    if (sibling) sibling.classList.remove('hidden');
                                  }}
                                />
                                <Globe className="w-4 h-4 text-slate-400 hidden" />
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-black text-[#004aad] truncate" title={link.label}>
                                  {link.label}
                                </p>
                                <p className="text-[10px] text-slate-400 font-semibold truncate">
                                  {link.tooltip || "Click to open official drawing portal"}
                                </p>
                              </div>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#1B79EE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 flex-shrink-0 ml-2" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Verification Checkmark */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    PEG VERIFIED
                  </span>
                  <span>REF ID: {activeEnriched.abbr}-DOT</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT MULTI-TRACK COMPLIANCE SLIDERS (8 Columns) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between">
            <div className="relative py-2 space-y-4">
              
              {/* Fade gradients over slider edges */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

              {filteredStates.length === 0 ? (
                <div className="h-[280px] bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-8">
                  <Building2 className="w-12 h-12 text-slate-300 mb-3" />
                  <p className="text-slate-600 font-extrabold">No state DOT portals match search criteria</p>
                  <p className="text-slate-400 text-xs mt-1">Try resetting the filter tier or search string.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedTier("All"); }}
                    className="mt-4 px-4 py-2 bg-[#004aad] text-white text-xs font-black rounded-lg uppercase tracking-wider hover:bg-[#1B79EE] transition-all cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  
                  {/* Sliding Row 1 */}
                  {track1.length > 0 && (
                    <div className="flex whitespace-nowrap overflow-hidden">
                      <motion.div
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                        className="flex gap-4 w-max"
                        style={{ willChange: "transform" }}
                      >
                        {track1.map((item, idx) => {
                          const isActive = activeState.state === item.state;
                          const colors = tierColors[item.tier] || tierColors.Standard;
                          return (
                            <div
                              key={`${item.state}-r1-${idx}`}
                              onMouseEnter={() => setActiveState(item)}
                              onClick={() => setActiveState(item)}
                              className={`cursor-pointer px-6 py-4 border rounded-xl flex items-center gap-3 transition-all duration-200 select-none min-w-[210px] max-w-[250px] ${
                                isActive
                                  ? "bg-[#004aad] border-[#004aad] text-white shadow-lg shadow-blue-900/10 scale-105"
                                  : "bg-white border-slate-200 hover:border-[#1B79EE] text-[#004aad] shadow-sm hover:shadow"
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1.5 flex-shrink-0 border border-slate-100 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={item.primaryLogo}
                                  alt="DOT logo"
                                  className="w-5 h-5 object-contain"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const sibling = e.currentTarget.nextElementSibling;
                                    if (sibling) sibling.classList.remove('hidden');
                                  }}
                                />
                                <Building2 className="w-4 h-4 text-slate-400 hidden" />
                              </div>
                              <div className="min-w-0">
                                <p className={`text-sm font-black truncate ${isActive ? "text-white" : "text-[#004aad]"}`}>
                                  {item.state}
                                </p>
                                <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${isActive ? "text-blue-200" : colors.text}`}>
                                  {item.abbr} • {item.tier}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    </div>
                  )}

                  {/* Sliding Row 2 (Moves in Reverse) */}
                  {track2.length > 0 && (
                    <div className="flex whitespace-nowrap overflow-hidden">
                      <motion.div
                        animate={{ x: ["-33.33%", "0%"] }}
                        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
                        className="flex gap-4 w-max"
                        style={{ willChange: "transform" }}
                      >
                        {track2.map((item, idx) => {
                          const isActive = activeState.state === item.state;
                          const colors = tierColors[item.tier] || tierColors.Standard;
                          return (
                            <div
                              key={`${item.state}-r2-${idx}`}
                              onMouseEnter={() => setActiveState(item)}
                              onClick={() => setActiveState(item)}
                              className={`cursor-pointer px-6 py-4 border rounded-xl flex items-center gap-3 transition-all duration-200 select-none min-w-[210px] max-w-[250px] ${
                                isActive
                                  ? "bg-[#004aad] border-[#004aad] text-white shadow-lg shadow-blue-900/10 scale-105"
                                  : "bg-white border-slate-200 hover:border-[#1B79EE] text-[#004aad] shadow-sm hover:shadow"
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1.5 flex-shrink-0 border border-slate-100 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={item.primaryLogo}
                                  alt="DOT logo"
                                  className="w-5 h-5 object-contain"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const sibling = e.currentTarget.nextElementSibling;
                                    if (sibling) sibling.classList.remove('hidden');
                                  }}
                                />
                                <Building2 className="w-4 h-4 text-slate-400 hidden" />
                              </div>
                              <div className="min-w-0">
                                <p className={`text-sm font-black truncate ${isActive ? "text-white" : "text-[#004aad]"}`}>
                                  {item.state}
                                </p>
                                <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${isActive ? "text-blue-200" : colors.text}`}>
                                  {item.abbr} • {item.tier}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    </div>
                  )}

                  {/* Sliding Row 3 */}
                  {track3.length > 0 && (
                    <div className="flex whitespace-nowrap overflow-hidden">
                      <motion.div
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                        className="flex gap-4 w-max"
                        style={{ willChange: "transform" }}
                      >
                        {track3.map((item, idx) => {
                          const isActive = activeState.state === item.state;
                          const colors = tierColors[item.tier] || tierColors.Standard;
                          return (
                            <div
                              key={`${item.state}-r3-${idx}`}
                              onMouseEnter={() => setActiveState(item)}
                              onClick={() => setActiveState(item)}
                              className={`cursor-pointer px-6 py-4 border rounded-xl flex items-center gap-3 transition-all duration-200 select-none min-w-[210px] max-w-[250px] ${
                                isActive
                                  ? "bg-[#004aad] border-[#004aad] text-white shadow-lg shadow-blue-900/10 scale-105"
                                  : "bg-white border-slate-200 hover:border-[#1B79EE] text-[#004aad] shadow-sm hover:shadow"
                              }`}
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1.5 flex-shrink-0 border border-slate-100 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={item.primaryLogo}
                                  alt="DOT logo"
                                  className="w-5 h-5 object-contain"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const sibling = e.currentTarget.nextElementSibling;
                                    if (sibling) sibling.classList.remove('hidden');
                                  }}
                                />
                                <Building2 className="w-4 h-4 text-slate-400 hidden" />
                              </div>
                              <div className="min-w-0">
                                <p className={`text-sm font-black truncate ${isActive ? "text-white" : "text-[#004aad]"}`}>
                                  {item.state}
                                </p>
                                <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${isActive ? "text-blue-200" : colors.text}`}>
                                  {item.abbr} • {item.tier}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                    </div>
                  )}

                </div>
              )}
            </div>

            {/* QUICK LEGEND & INSTRUCTIONS */}
            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-3">
                <div className="bg-slate-100 p-2 rounded-lg flex items-center justify-center">
                  <Layers className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#004aad] uppercase tracking-wider">Design Standards Legend</p>
                  <p className="text-[11px] text-slate-400 font-semibold">Tiers indicate specific environmental hazards or structural classifications.</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                {Object.entries(tierColors).map(([name, val]) => (
                  <div key={name} className="flex items-center gap-1.5">
                    <span className={`w-3 h-3 rounded border ${val.bg} ${val.border}`} />
                    <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-wider">{name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}