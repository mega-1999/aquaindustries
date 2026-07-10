"use client";

import React from "react";
import { Zap, ShieldCheck, Flame, Cpu, ArrowUpRight } from "lucide-react";

interface ManifestPhase {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
}

const MANIFEST_STEPS: ManifestPhase[] = [
  {
    icon: <Cpu className="w-5 h-5 text-[#B31942]" />,
    label: "Phase 01 / Design Architecture",
    title: "Metallurgical CAD Engine",
    description: "Instant 3D rendering and structural finite element load simulation. Your custom casting concepts are parameterized and locked for production within hours, bypassing weeks of drafting backlog."
  },
  {
    icon: <Flame className="w-5 h-5 text-[#B31942]" />,
    label: "Phase 02 / Advanced Melting",
    title: "Electric Arc Smart Burn",
    description: "Pure nodular graphite nodularization via real-time spectrometer verification. We adjust molecular carbon chains during liquid state transfer to ensure flawless consistency before pouring."
  },
  {
    icon: <Zap className="w-5 h-5 text-[#B31942]" />,
    label: "Phase 03 / High Velocity Mold",
    title: "Automated Flaskless Casting",
    description: "High-pressure sand molding machines compress and cycle multi-ton forms instantly. Zero bottleneck pouring means your volume runs are pressed and chilled concurrently."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#B31942]" />,
    label: "Phase 04 / Destructive Stress Test",
    title: "Proof Load Verification",
    description: "Hydraulic crush beds subject product samples up to 90 tons of raw shear stress. Every deployment leaves our foundry stamped with verifiable Fe 50007 compliance."
  }
];

export default function IndustrialManifest() {
  return (
    <section className="bg-[#0A3161] text-white py-28 font-sans border-t border-zinc-950 overflow-hidden">
      {/* Strict Fluid Layout Bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* Core Tagline Manifesto Header */}
        <div className="border-b border-[#0A3161]/30 pb-12 mb-20 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#B31942] block">
              The METALSVERSE Foundries Speed-Matrix
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              NOT ONE STEP BUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B31942] to-white">
                ALL THE STEPS ON A FLASH
              </span>
            </h2>
          </div>
          
          <div className="max-w-md bg-[#0A3161] border-l-2 border-[#B31942] p-6 rounded-xs">
            <p className="text-xs font-mono uppercase tracking-widest text-[#B31942] mb-2 font-bold">
              Operational Paradigm
            </p>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              We eliminated the sequential lag of traditional manufacturing. By unifying pattern design, alloy formulation, and automated molding, we process the entire lifecycle in parallel.
            </p>
          </div>
        </div>

        {/* Big Banner Callout: Conception to Inception */}
        <div className="w-full bg-[#0A3161] border border-[#0A3161]/30 p-8 sm:p-12 mb-16 relative overflow-hidden group rounded-sm shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#B31942]/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-white/70 block mb-2">
              Foundry Velocity Architecture
            </span>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              CONCEPTION TO INCEPTION <br className="hidden sm:inline" /> 
              <span className="text-[#B31942]">ALL IN ONE GO</span>
            </h3>
            <p className="text-white/70 text-base max-w-2xl font-light leading-relaxed mb-8">
              No intermediary standard hand-offs. METALSVERSE Foundries integrates rapid metallurgical prototyping straight into heavy industrial mass production lines, flashing raw blueprints into solid iron castings flawlessly.
            </p>
            
            <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#B31942] hover:bg-[#8f1435] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-xs">
              Initiate Direct Blast Build <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Synchronous Manifest Display Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {MANIFEST_STEPS.map((step, index) => (
            <div 
              key={index}
              className="bg-[#0A3161] border border-[#0A3161]/30 p-6 flex flex-col justify-between hover:border-[#0A3161] transition-all duration-300 relative group min-h-[260px] rounded-xs"
            >
              {/* Highlight bar on card hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-[#B31942] transition-colors duration-300" />
              
              <div>
                {/* Meta Phase Numbering */}
                <div className="flex items-center justify-between mb-6 border-b border-[#0A3161]/30/50 pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A3161]/70 font-bold">
                    {step.label}
                  </span>
                  <div className="w-8 h-8 bg-[#0A3161] border border-[#0A3161] flex items-center justify-center rounded-xs group-hover:border-[#B31942]/50 transition-colors">
                    {step.icon}
                  </div>
                </div>

                {/* Content Block */}
                <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#B31942] transition-colors duration-200">
                  {step.title}
                </h4>
                <p className="text-[#0A3161]/70 text-xs leading-relaxed font-light group-hover:text-[#0A3161]/60 transition-colors duration-300">
                  {step.description}
                </p>
              </div>

              {/* Seamless Sync Status Light */}
              <div className="mt-6 pt-4 border-t border-[#0A3161]/30/50 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#B31942] rounded-full animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#0A3161]/80 font-bold">
                  Synchronous Thread
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
