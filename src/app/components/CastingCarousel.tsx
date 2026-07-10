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

const METALS_DATA: MetalProfile[] = [
  {
    id: "cast-iron",
    name: "Cast Iron",
    subtitle: "High Carbon Structural Foundry Base",
    description: "Famous for its superb fluidity in liquid form, exceptional wear resistance, and high compressive strength. Perfect for heavy machine beds and classic architectural ironworks.",
    composition: "Fe + 2.1-4% C + 1-3% Si",
    properties: ["High Dampening Capacity", "Exceptional Castability", "Brittle Failure Profile"]
  },
  {
    id: "ductile-iron",
    name: "Ductile Iron",
    subtitle: "Nodular Graphite Engineering Superiority",
    description: "Engineered specifically by introducing magnesium to change graphite flakes into impact-absorbing spheres. Delivers immense tensile strength, elongation, and impact resistance for heavy infrastructure.",
    composition: "Fe + 3.2-4% C + 2-3% Si + Mg Tracer",
    properties: ["High Tensile Strength", "Shock Absorption", "Superb Machinability"]
  },
  {
    id: "aluminium",
    name: "Aluminium",
    subtitle: "Lightweight Aerospace Non-Ferrous Element",
    description: "An incredibly versatile metal valued for its exceptional strength-to-weight ratio, high electrical conductivity, and natural resistance to corrosion via a protective oxide layer.",
    composition: "Al (Pure or Alloyed with Mg/Si/Cu)",
    properties: ["Low Density (Lightweight)", "Non-Magnetic", "Highly Malleable"]
  },
  {
    id: "mild-steel",
    name: "Mild Steel",
    subtitle: "Low Carbon Structural Core Workhorse",
    description: "The structural foundation of global construction. Its low carbon content makes it exceptionally ductile and weldable, optimized for beams, frames, and general fabrication.",
    composition: "Fe + 0.05-0.25% C",
    properties: ["High Weldability", "Great Ductility", "Cost-Efficient Production"]
  },
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    subtitle: "Chromium-Alloyed Corrosion Shield",
    description: "An elite alloy designed to withstand harsh chemicals, moisture, and high temperatures. Chromium creates a self-healing surface layer that prevents rust and preserves pristine surface integrity.",
    composition: "Fe + 10.5%+ Cr + Ni + C",
    properties: ["Corrosion Immunity", "High Tensile Toughness", "Hygienic Surface Matrix"]
  },
  {
    id: "gun-metal",
    name: "Gun Metal",
    subtitle: "Premium Red Brass Heavy Bronze Alloy",
    description: "A historic, high-strength alloy refined for casting components subjected to severe friction and marine exposure. Highly valued for valve bodies, gears, and heavy-duty industrial bush bearings.",
    composition: "88% Cu + 10% Sn + 2% Zn",
    properties: ["Low Friction Coefficient", "Marine Anti-Fouling", "Excellent Steam Resistance"]
  },
  {
    id: "angle-iron",
    name: "Angle Iron",
    subtitle: "L-Shaped Structural Framework Geometry",
    description: "Structural mild steel hot-rolled into a sharp 90-degree angle profile. Engineered to provide maximum structural rigidity and load support along structural edges and load-bearing framing lines.",
    composition: "Structural Mild Steel Base Profile",
    properties: ["90° High Moment Rigidity", "Excellent Framing Adaptability", "High Shear Resistance"]
  }
];

export default function MetalDirectory() {
  const [selectedMetal, setSelectedMetal] = useState<MetalProfile>(METALS_DATA[0]);

  return (
    <section className="bg-[#0A3161] text-white py-24 font-sans border-t border-zinc-950">
      {/* Dynamic Fluid Full Width Layout Container */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* Dynamic Header */}
        <div className="border-b border-zinc-900 pb-10 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-black text-[#B31942] block mb-3">
            Material Specifications
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Primary Metals <span className="text-[#0A3161]/80">& Alloys</span>
          </h2>
        </div>

        {/* Asymmetrical Split Screen Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Industrial Selector Index */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {METALS_DATA.map((metal) => {
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
                      : "bg-[#0f0f0f] border-zinc-900 text-[#0A3161]/70 hover:border-[#0A3161] hover:text-[#0A3161]/40"
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

          {/* RIGHT COLUMN: The Interactive Focal Blast Window */}
          <div className="lg:col-span-7 bg-[#0A3161] border border-zinc-900 p-8 md:p-12 rounded-sm relative overflow-hidden min-h-[500px] flex flex-col justify-between shadow-2xl">
            
            {/* Structural Geometric Backing Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B31942]/10 to-transparent pointer-events-none" />
            
            <div>
              {/* Active Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B31942]/10 border border-[#B31942]/20 rounded-full mb-6">
                <Layers className="w-3.5 h-3.5 text-[#B31942]" />
                <span className="text-[10px] uppercase tracking-widest font-black text-[#B31942]">
                  Selected Spec Sheet
                </span>
              </div>

              {/* Title Block */}
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                {selectedMetal.name}
              </h3>
              <p className="text-sm font-mono text-[#0A3161]/70 uppercase tracking-widest border-b border-zinc-900 pb-6 mb-6">
                {selectedMetal.subtitle}
              </p>

              {/* Comprehensive Summary Narrative */}
              <p className="text-[#0A3161]/60 text-base leading-relaxed mb-8 font-light">
                {selectedMetal.description}
              </p>
            </div>

            {/* Technical Analytical Footers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900/80 pt-8 mt-auto">
              
              {/* Formula & Chemical Composition */}
              <div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#0A3161]/70 uppercase tracking-wider mb-3">
                  <Activity className="w-3.5 h-3.5 text-[#B31942]" /> Elemental Composition
                </span>
                <div className="font-mono text-sm bg-[#0A3161] border border-zinc-900 p-3 text-[#B31942] rounded-xs font-semibold">
                  {selectedMetal.composition}
                </div>
              </div>

              {/* Structural Mechanical Characteristics */}
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
