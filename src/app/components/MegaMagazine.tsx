"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Article {
  tabId: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  link: string;
  rightCategories: string[];
}

const MAGAZINE_DATA: Record<string, Article> = {
  "cast-iron": {
    tabId: "cast-iron",
    title: "The Fluid Foundry Bed: Embracing the Compressive Power of Gray Cast Iron",
    author: "Dr. Marcus Vance",
    date: "May 19, 2026",
    excerpt: "Traditional Gray Cast Iron remains an engineering masterpiece for massive industrial machine bases and heavy frames. Its high carbon content delivers unmatched fluid run properties during pouring and exceptional vibration dampening capabilities that protect high-precision machinery.",
    link: "/magazine/gray-cast-iron-fluidity",
    rightCategories: ["Graphite Flakes", "Vibration Dampening", "Compressive Strengths", "Thermal Capacity", "Foundry Shrinkage Logs", "Machine Bed Castings"]
  },
  "ductile-iron": {
    tabId: "ductile-iron",
    title: "Nodular Graphite Supremacy: Why Ductile Iron Casting Dominates Infrastructure",
    author: "Chief Engineer Ben",
    date: "June 24, 2026",
    excerpt: "By introducing precise magnesium traces into the molten base, we transform brittle graphite flakes into high-strength spheroidal nodules. The result is an elite casting that offers massive yield strength, exceptional elongation, and absolute structural integrity under severe municipal loads.",
    link: "/magazine/ductile-iron-specifications",
    rightCategories: ["Fe 50007 Matrix", "Nodular Microstructures", "Tensile Performance", "Impact Absorption", "Municipal Infrastructure", "Foundry Load Classes"]
  },
  "aluminium": {
    tabId: "aluminium",
    title: "Aerospace Efficiency: Optimizing High Strength-to-Weight Non-Ferrous Castings",
    author: "Sarah Jenkins, PE",
    date: "April 12, 2026",
    excerpt: "Aluminium casting unlocks extreme geometric freedom for high-velocity components where weight minimization is critical. By balancing magnesium and silicon alloy additives, we achieve stellar thermal conductivity alongside a natural self-protecting oxide layer.",
    link: "/magazine/aluminium-weight-ratios",
    rightCategories: ["Density Optimization", "Thermal Conductivity", "Oxide Shielding", "Silicon Fluidity", "Non-Magnetic Castings", "Lightweight Structuring"]
  },
  "mild-steel": {
    tabId: "mild-steel",
    title: "The Construction Workhorse: Stress-Testing Low-Carbon Ductility Profiles",
    author: "Dr. Marcus Vance",
    date: "March 30, 2026",
    excerpt: "With a carbon concentration carefully tuned below 0.25%, mild steel remains the cornerstone of modern industrial fabrication. Its structural compliance provides immense weldability and structural ductility, serving as the benchmark core for massive load frames.",
    link: "/magazine/mild-steel-ductility",
    rightCategories: ["Low-Carbon Balance", "Structural Yielding", "Weldability Logs", "Cyclic Stress Profile", "Ductile Toughness", "Frame Fabrication"]
  },
  "stainless-steel": {
    tabId: "stainless-steel",
    title: "Corrosion Defiance: Forging Self-Healing Chromium Alloy Matrices",
    author: "Chief Engineer Ben",
    date: "February 15, 2026",
    excerpt: "When environments turn hostile with acidic moisture exposure, our premium stainless alloys introduce a minimum of 10.5% chromium. This triggers an immediate, self-cleaning passive surface matrix that isolates oxygen atoms and prevents deep structural oxidation.",
    link: "/magazine/stainless-steel-alloys",
    rightCategories: ["Chromium Passivation", "Austenitic Formations", "Acid Resistance Matrix", "Industrial Enclosures", "Marine Grade Pouring", "Pristine Finish Clean"]
  },
  "gun-metal": {
    tabId: "gun-metal",
    title: "Red Brass Architecture: Minimizing Friction in High-Velocity Steam Environments",
    author: "Sarah Jenkins, PE",
    date: "January 04, 2026",
    excerpt: "This legendary copper-tin-zinc alloy excels under extreme hydraulic pressures and constant friction contact. Its natural lubricity and resistance to steam-induced cavitation make it the definitive foundry standard for marine impellers and heavy valve body designs.",
    link: "/magazine/gunmetal-friction-specs",
    rightCategories: ["88-10-2 Composition", "Cavitation Defense", "Anti-Frictional Wear", "Marine Impellers", "Heavy Valve Castings", "Bronze Bushing Logs"]
  },
  "angle-iron": {
    tabId: "angle-iron",
    title: "Geometric Structural Deflection: Managing High Shear Stress on 90° Framing Elements",
    author: "Chief Engineer Ben",
    date: "May 02, 2026",
    excerpt: "By hot-rolling high-tensile structural steel into an absolute 90-degree right angle, we maximize the cross-sectional moment of inertia. This geometry counteracts severe flexural torque along construction seams, making it critical for corner structural support.",
    link: "/magazine/angle-iron-geometry",
    rightCategories: ["90-Degree Moment", "Flexural Rigidity", "Shear Resistance", "Corner Bracing Profiles", "Load Distribution", "Structural Seaming"]
  }
};

const SIDEBAR_TABS = [
  { id: "cast-iron", label: "Cast Iron Specs" },
  { id: "ductile-iron", label: "Ductile Iron Engineering" },
  { id: "aluminium", label: "Aluminium Casting Logs" },
  { id: "mild-steel", label: "Mild Steel Fabrication" },
  { id: "stainless-steel", label: "Stainless Steel Shield" },
  { id: "gun-metal", label: "Gun Metal Bearings" },
  { id: "angle-iron", label: "Angle Iron Geometry" }
];

export default function MegaMagazine() {
  const [activeTab, setActiveTab] = useState("ductile-iron");

  // Pulls data specific ONLY to the clicked metal tab ID, defaults safely to ductile-iron if missing
  const currentContent = MAGAZINE_DATA[activeTab] || MAGAZINE_DATA["ductile-iron"];

  return (
    <section className="bg-[#0A3161] text-white/70 py-10 font-sans border-t border-white/10">
      {/* Absolute strict fluid full width padding */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* TOP ROW: METALSVERSE Foundries Custom Header Banner */}
        <div className="w-full bg-[#0A3161] border border-white/10 p-6 mb-8 flex flex-col md:flex-row items-center justify-between rounded-xs gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-black tracking-tighter text-white">
              METALSVERSE <span className="text-[#B31942]">FOUNDRIES</span>
            </div>
            <div className="h-6 w-[1px] bg-[#0A3161] hidden md:block" />
            <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
              Primary Metals Spec Index
            </span>
          </div>
          <div className="text-center md:text-right text-xs text-white font-mono">
            CALL: (307) 788-7700 <span className="mx-2 text-white">•</span> VISIT: WWW.MEGAFOUNDRIES.COM
          </div>
        </div>

        {/* MAIN 3-COLUMN STRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: LEFT SIDEBAR TABS INDEX (Metals Selectors) */}
          <div className="md:col-span-3 bg-[#0A3161] border border-white/10 rounded-xs overflow-hidden shadow-xl">
            <div className="bg-[#0A3161] p-4 border-b border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white leading-tight">
                Casting Source <br />
                <span className="text-[#B31942]">Magazine</span>
              </h3>
            </div>
            <nav className="flex flex-col">
              {SIDEBAR_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-medium border-l-2 transition-all duration-200
                      ${isActive 
                        ? "bg-white/10 text-[#B31942] border-[#B31942] font-bold" 
                        : "bg-transparent text-white/60 border-transparent hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* COLUMN 2: CENTER READING PANEL (Metallurgy Log Content) */}
          <div className="md:col-span-6 space-y-6">
            <div className="border-b border-[#0A3161]/30 pb-3">
              <h2 className="text-3xl font-black tracking-tight text-white uppercase inline-block relative whitespace-nowrap">
                {activeTab.replace("-", " ")}
                <span className="absolute bottom-[-13px] left-0 w-12 h-[3px] bg-[#B31942]" />
              </h2>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug hover:text-[#B31942] transition-colors duration-200">
                {currentContent.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 text-xs font-mono text-white/70">
                <span className="text-[#B31942] font-bold italic">{currentContent.author}</span>
                <span>•</span>
                <span>{currentContent.date}</span>
              </div>

              <p className="text-white/80 text-sm leading-relaxed font-light">
                {currentContent.excerpt}
              </p>

              <div className="pt-2">
                <Link 
                  href={currentContent.link} 
                  className="text-xs font-bold uppercase tracking-wider text-[#B31942] hover:text-white transition-colors duration-200 inline-block border-b border-dashed border-[#B31942] pb-0.5"
                >
                  Read Technical Spec
                </Link>
              </div>
            </div>
          </div>

          {/* COLUMN 3: RIGHT SUB-CATEGORIES DIRECTORY PANEL */}
          <div className="md:col-span-3 bg-white/5 border border-white/10 p-5 rounded-xs shadow-inner">
            <h4 className="text-xs font-black uppercase tracking-widest text-white border-b border-white/10 pb-3 mb-4">
              Technical Matrix
            </h4>
            <ul className="space-y-2">
              {currentContent.rightCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    href={`/magazine/matrix/${category.toLowerCase().replace(/ /g, "-")}`}
                    className="text-xs text-white/70 hover:text-white transition-colors duration-150 block py-0.5"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
