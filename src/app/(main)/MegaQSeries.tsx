"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Cpu, Zap, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QProductVariant {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metric: string;
  metricLabel: string;
  image: string;
}

const Q_SERIES_VARIANTS: QProductVariant[] = [
  {
    id: "q-500",
    name: "Mega Q-500",
    tagline: "High-Velocity Linear Interception Matrix",
    description: "Engineered for intense transit hubs demanding continuous surface drainage. Features a self-locking monolithic seating geometry that drops into existing concrete channels instantly.",
    metric: "F900+",
    metricLabel: "Load Rating Class",
    image: "/assets/image2.jpeg" // Uses your available image path
  },
  {
    id: "q-700",
    name: "Mega Q-700",
    tagline: "Seismic-Rated Municipal Distribution Hub",
    description: "Specially formulated from premium nodular ductile iron to withstand unpredictable lateral shifting forces. Optimized for heavy airport taxiways and industrial container shipping ports.",
    metric: "90-Ton",
    metricLabel: "Proof Load Capacity",
    image: "/assets/image2.jpeg"
  },
  {
    id: "q-alpha",
    name: "Mega Q-Alpha",
    tagline: "Smart IoT-Ready Inspection System",
    description: "Our most advanced foundry design yet. Features integrated low-frequency structural health sensors embedded directly within the iron casting frame to track load cycles in real-time.",
    metric: "0.01mm",
    metricLabel: "Machined Tolerance",
    image: "/assets/image2.jpeg"
  }
];

export default function MegaQSeries() {
  const [activeVariant, setActiveVariant] = useState<QProductVariant>(Q_SERIES_VARIANTS[0]);

  return (
    <section className="bg-white text-[#0A3161] py-24 font-sans border-b border-[#0A3161]/10 w-full">
      {/* Absolute strict fluid full width padding bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-16">
        
        {/* --- MAIN HEADER MATRIX --- */}
        <div className="border-b border-[#0A3161]/10 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#B31942] block mb-3">
              Next-Gen Foundry Lineup
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0A3161] leading-none">
              The New <span className="text-[#B31942]">Q Series</span>
            </h2>
          </div>
          <p className="text-[#0A3161]/70 text-base font-light leading-relaxed max-w-xl">
            Conception to inception all in one go. The Q Series represents Mega’s peak metallurgical engineering—forging high-performance casting systems built for devastating modern surface stress.
          </p>
        </div>

        {/* --- INTERACTIVE 3-COLUMN / SPLIT VIEWPORT ARCHITECTURE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          
          {/* COLUMN 1: VERTICAL CONTROLLER INDEX (3 Columns Wide) */}
          <div className="lg:col-span-3 flex flex-col gap-3 w-full">
            <span className="text-[10px] font-mono tracking-widest text-[#0A3161]/60 uppercase font-bold mb-1 block">
              Select Series Variant:
            </span>
            {Q_SERIES_VARIANTS.map((variant) => {
              const isActive = activeVariant.id === variant.id;
              return (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariant(variant)}
                  className={`w-full text-left p-5 border transition-all duration-300 rounded-none flex items-center justify-between group
                    ${isActive 
                      ? "bg-[#0A3161]/5 border-[#B31942] shadow-md" 
                      : "bg-white border-[#0A3161]/10 text-[#0A3161]/60 hover:border-[#0A3161]/20 hover:text-[#0A3161]"
                    }
                  `}
                >
                  <div>
                    <p className={`text-lg font-black uppercase tracking-tight transition-colors ${isActive ? 'text-[#B31942]' : 'text-[#0A3161]'}`}>
                      {variant.name}
                    </p>
                    <p className="text-[10px] text-[#0A3161]/60 font-mono uppercase tracking-wider mt-0.5">
                      {variant.metric} Rating
                    </p>
                  </div>
                  <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#B31942] rotate-45' : 'text-[#0A3161]/40 group-hover:text-[#0A3161]/80'}`} />
                </button>
              );
            })}
          </div>

          {/* COLUMN 2: PRIMARY SPECIFICATION FOCUS SHEET (5 Columns Wide) */}
          <div className="lg:col-span-5 space-y-8 w-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A3161]/5 border border-[#0A3161]/10 text-[#0A3161]/80 text-xs font-mono uppercase tracking-wider mb-6">
                <Sliders className="w-3.5 h-3.5 text-[#B31942]" /> Dynamic Configuration Unit
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-[#0A3161] tracking-tight uppercase mb-1">
                {activeVariant.name}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#B31942] font-bold border-b border-[#0A3161]/10 pb-4 mb-4">
                {activeVariant.tagline}
              </p>

              <p className="text-[#0A3161]/80 text-sm leading-relaxed font-light">
                {activeVariant.description}
              </p>
            </div>

            {/* Technical Analytical Metric Block */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#0A3161]/10 pt-6">
              <div className="bg-[#0A3161]/5 p-4 border border-[#0A3161]/10">
                <span className="text-[10px] font-mono uppercase text-[#0A3161]/60 block mb-1">
                  {activeVariant.metricLabel}
                </span>
                <span className="text-2xl font-black text-[#0A3161] font-mono tracking-tight">
                  {activeVariant.metric}
                </span>
              </div>
              
              <div className="bg-[#0A3161]/5 p-4 border border-[#0A3161]/10 flex flex-col justify-center">
                <span className="text-[10px] font-mono uppercase text-[#0A3161]/60 block mb-1">
                  Material Matrix
                </span>
                <span className="text-xs font-bold text-[#0A3161] uppercase tracking-wide">
                  Nodular Ductile Iron
                </span>
              </div>
            </div>

            <Button className="w-full bg-[#B31942] hover:bg-[#8f1435] text-white font-black uppercase tracking-widest text-xs h-12 rounded-none transition-all duration-200 flex items-center justify-center gap-2">
              Request Q-Series Blueprint Specs <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* COLUMN 3: CRISP HIGH-CONTRAST CAD PREVIEW VISUAL (4 Columns Wide) */}
          <div className="lg:col-span-4 w-full flex justify-end">
            <div className="relative w-full max-w-[400px] aspect-square bg-[#0A3161]/5 border border-[#0A3161]/10 rounded-none overflow-hidden p-6 flex items-center justify-center group shadow-inner hover:border-[#B31942] transition-colors duration-300">
              
              {/* Product Visual */}
              <div className="relative w-full h-full">
                <Image 
                  src={activeVariant.image} 
                  alt={`${activeVariant.name} Cast Matrix Layout`}
                  fill
                  className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>

              {/* Technical Geometric Crosshair Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#0A3161]/20" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#0A3161]/20" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#0A3161]/20" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#0A3161]/20" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#0A3161]/95 text-[9px] font-mono uppercase font-bold tracking-wider text-white/60 text-center py-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                Component Focal Frame // Active Spec
              </div>
            </div>
          </div>

        </div>

        {/* --- PERFORMANCE ASSURANCE MATRIX FLOOR --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-[#0A3161]/10 w-full">
          <div className="flex items-center gap-3 p-4">
            <ShieldCheck className="w-6 h-6 text-[#B31942] shrink-0" />
            <p className="text-xs uppercase tracking-wider font-bold text-[#0A3161]">
              AASHTO H-20 & F900 Proof Tested
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <Cpu className="w-6 h-6 text-[#B31942] shrink-0" />
            <p className="text-xs uppercase tracking-wider font-bold text-[#0A3161]">
              Integrated IoT Sensor Seating Channels
            </p>
          </div>
          <div className="flex items-center gap-3 p-4">
            <Zap className="w-6 h-6 text-[#B31942] shrink-0" />
            <p className="text-xs uppercase tracking-wider font-bold text-[#0A3161]">
              Parallel Flash-Mold Precision Assembly
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
