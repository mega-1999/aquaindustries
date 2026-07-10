"use client";

import React, { useState } from "react";
import { Layers, Activity, ShieldAlert, ArrowRight } from "lucide-react";

interface MetalProfile {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  composition: string;
  properties: string[];
}

const OTHER_METALS_DATA: MetalProfile[] = [
  {
    id: "phosphor-bronze",
    name: "Phosphor Bronze",
    subtitle: "High-Fatigue Anti-Corrosive Alloy",
    description: "Superb alloy formulation renowned for its immense toughness, low coefficient of friction, and fine grain structure. Extensively cast for heavy-duty spring matrices, marine sleeve bushings, and high-wear components.",
    composition: "Cu + 0.5-11% Sn + 0.01-0.35% P",
    properties: ["Superb Fatigue Resistance", "Excellent Elasticity", "High Chemical Immunity"]
  },
  {
    id: "brass",
    name: "Brass Alloys",
    subtitle: "Low-Friction Acoustic Zinc Matrix",
    description: "An acoustic and highly machinable combination optimized for precision fluid dynamics. Used frequently in environments requiring sparks avoidance, low-friction valves, plumbing joints, and architectural casings.",
    composition: "60-70% Cu + 30-40% Zn",
    properties: ["Non-Sparking Nature", "Acoustically Resonant", "High Thermal Fluidity"]
  },
  {
    id: "lead-bronze",
    name: "Leaded Bronze",
    subtitle: "High-Velocity Self-Lubricating Metal",
    description: "Specially formulated casting bronze containing pockets of unalloyed lead. Under friction stress, the lead serves as an emergency dry lubricant film preventing total shaft seizure in high-speed machinery bearings.",
    composition: "Cu + Sn + 4-25% Pb Additive",
    properties: ["Emergency Self-Lubrication", "High Particle Embeddability", "Excellent Conformability"]
  },
  {
    id: "tool-steel",
    name: "Tool Steel",
    subtitle: "Extreme Carbon Matrix Hardened Shell",
    description: "An elite class of carbon and alloy steels engineered to hold sharp structural integrity under devastating abrasive impact forces. Essential for industrial dies, structural shears, stamping matrix templates, and cutting bits.",
    composition: "Fe + W + Mo + Cr + high C",
    properties: ["High Deformation Resistance", "Extreme Hardness", "Thermal Temper Stability"]
  },
  {
    id: "zinc-alloys",
    name: "Zinc Die Cast Alloys",
    subtitle: "Precision Dimensional Casting Base",
    description: "Favored globally for high-volume die-casting processes where tight structural tolerances are mandatory. Its exceptionally low melting temperature yields detailed, complex cast components with minimal shrinking contraction errors.",
    composition: "Zn + Al + Mg + Cu (Zamak Profile)",
    properties: ["High Precision Detail", "Low Energy Melting Point", "Exceptional Impact Strength"]
  }
];

export default function OtherMetalsDirectory() {
  const [selectedMetal, setSelectedMetal] = useState<MetalProfile>(OTHER_METALS_DATA[0]);

  return (
    <section className="bg-[#0A3161] text-white py-24 font-sans border-t border-zinc-950">
      {/* Absolute strict fluid bounds requested */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="border-b border-[#0A3161]/30 pb-10 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-black text-[#B31942] block mb-3">
            Secondary & Custom Castings
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Other Metals <span className="text-[#0A3161]/80">& Alloys</span>
          </h2>
        </div>

        {/* Asymmetrical Layout Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT INDEX SELECTOR PANEL */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {OTHER_METALS_DATA.map((metal) => {
              const isActive = selectedMetal.id === metal.id;
              return (
                <button
                  key={metal.id}
                  onClick={() => setSelectedMetal(metal)}
                  className={`
                    w-full text-left p-5 transition-all duration-300 rounded-xs border
                    flex items-center justify-between group
                    ${isActive 
                      ? "bg-[#0A3161] border-[#B31942] text-white shadow-xl" 
                      : "bg-[#0A3161] border-[#0A3161]/30 text-white/70 hover:border-[#0A3161] hover:text-white/40"
                    }
                  `}
                >
                  <div>
                    <p className={`text-lg font-bold tracking-tight transition-colors ${isActive ? 'text-[#B31942]' : 'text-[#0A3161]/60 group-hover:text-white'}`}>
                      {metal.name}
                    </p>
                    <p className="text-xs text-[#0A3161]/80 mt-0.5 uppercase tracking-wider font-medium">
                      {metal.subtitle}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'text-[#B31942] translate-x-1' : 'text-[#0A3161] group-hover:text-[#0A3161]/60'}`} />
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAILED SPECTRAL PREVIEW CONTAINER */}
          <div className="lg:col-span-7 bg-[#0A3161] border border-[#0A3161]/30 p-8 md:p-12 rounded-sm relative overflow-hidden min-h-[500px] flex flex-col justify-between shadow-2xl">
            
            {/* Structural Geometry Overlay Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B31942]/10 to-transparent pointer-events-none" />
            
            <div>
              {/* Active Sheet Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B31942]/10 border border-[#B31942]/20 rounded-full mb-6">
                <Layers className="w-3.5 h-3.5 text-[#B31942]" />
                <span className="text-[10px] uppercase tracking-widest font-black text-[#B31942]">
                  Secondary Spec Log
                </span>
              </div>

              {/* Title Header */}
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                {selectedMetal.name}
              </h3>
              <p className="text-sm font-mono text-[#0A3161]/70 uppercase tracking-widest border-b border-[#0A3161]/30 pb-6 mb-6">
                {selectedMetal.subtitle}
              </p>

              {/* Description Body */}
              <p className="text-[#0A3161]/60 text-base leading-relaxed mb-8 font-light">
                {selectedMetal.description}
              </p>
            </div>

            {/* Technical Analytical Footers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#0A3161]/30/80 pt-8 mt-auto">
              
              {/* Chemistry/Structure Element Ratio */}
              <div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#0A3161]/70 uppercase tracking-wider mb-3">
                  <Activity className="w-3.5 h-3.5 text-[#B31942]" /> Elemental Composition
                </span>
                <div className="font-mono text-sm bg-[#0A3161] border border-[#0A3161]/30 p-3 text-[#B31942] rounded-xs font-semibold">
                  {selectedMetal.composition}
                </div>
              </div>

              {/* Core Physical Application Properties */}
              <div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#0A3161]/70 uppercase tracking-wider mb-3">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#B31942]" /> Core Mechanical Traits
                </span>
                <ul className="space-y-1.5">
                  {selectedMetal.properties.map((prop, idx) => (
                    <li key={idx} className="text-xs text-[#0A3161]/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#B31942] rounded-full flex-shrink-0" />
                      {prop}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
