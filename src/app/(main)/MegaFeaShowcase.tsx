"use client";

import React from "react";
import Image from "next/image";
import { Hammer, ShieldAlert, Lock, Activity } from "lucide-react";

export default function MegaFeaShowcase() {
  return (
    <section className="bg-white text-[#0A3161] py-24 font-sans border-b border-[#0A3161]/10 w-full">
      {/* Absolute strict fluid full width padding bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-24">
        
        {/* --- TOP ROW: FINITE ELEMENT ANALYSIS SPLIT MESH --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Text Column (7 Columns Wide) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-[#B31942]">
              <Activity className="w-5 h-5 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] font-black">
                Advanced Predictive Modeling
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none text-[#0A3161]">
              Finite Element Analysis <br />
              <span className="text-[#B31942]">& Stress Simulation</span>
            </h2>
            
            <div className="space-y-4 text-[#0A3161]/80 text-sm md:text-base font-light leading-relaxed">
              <p>
                To ensure Metalverse casting systems deliver the structural strength and fatigue stability required for heavy modern municipal networks, we utilize advanced Finite Element Analysis (FEA) deep within our pipeline prototyping cycles. This modeling allowing us to map exactly how the physical cover behaves under devastating continuous tire pounding.
              </p>
              <p>
                Our high-fidelity FEA heat maps illustrate how the internal geometric support ribs manage and disperse downward point forces evenly across both the cover and seating frame. By evaluating this strain behavior pattern down to the micron level, we actively refine our structural walls to reduce shifting movement and guarantee long-term wear resistance long before actual metallic pouring begins.
              </p>
            </div>
          </div>

          {/* Right Visual FEA Heat Map Column (5 Columns Wide) */}
          <div className="lg:col-span-5 w-full flex justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] bg-[#0A3161]/5 border border-[#0A3161]/10 p-4 shadow-md rounded-xs group hover:border-[#B31942] transition-colors duration-300">
              <Image
                src="/assets/image2.jpeg" // Replace with your FEA color heat map simulation image
                alt="Finite Element Analysis Structural Heat Map Simulation"
                fill
                className="object-cover p-2 transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-3 left-3 bg-[#0A3161] text-white text-[9px] font-mono uppercase tracking-widest px-2 py-1">
                Stress Map // Active Strain
              </div>
            </div>
          </div>

        </div>

        {/* --- BOTTOM ROW: KEY FEATURES & BENEFITS WITH GRAPHIC --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-16 border-t border-[#0A3161]/10 w-full">
          
          {/* Left Features List Stack (7 Columns Wide) */}
          <div className="lg:col-span-7 space-y-10 w-full">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#0A3161] mb-1">
                Metalverse Q-Series
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-[#B31942] font-bold">
                Key Features & Benefits
              </p>
            </div>

            <div className="space-y-8 w-full">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A3161]/5 border border-[#0A3161]/10 flex items-center justify-center text-[#B31942] shrink-0 rounded-xs">
                  <Hammer className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-wide text-[#0A3161]">
                    Inverted T-Flange Seating Frame
                  </h4>
                  <p className="text-xs text-[#0A3161]/70 leading-relaxed font-light">
                    The mechanical core of Metalverse systems is its wide structural baseline flange, specifically optimized to anchor secure vault chamber block paths and balance continuous overhead shear stresses safely.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A3161]/5 border border-[#0A3161]/10 flex items-center justify-center text-[#B31942] shrink-0 rounded-xs">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-wide text-[#0A3161]">
                    Non-Welded, Monolithic Casting Construction
                  </h4>
                  <p className="text-xs text-[#0A3161]/70 leading-relaxed font-light">
                    Our high-capacity heavy frameworks are molded completely as an unbroken, solid iron casting unit. This entirely isolates and eliminates structural heat weld fatigue boundaries common to inferior builds.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#0A3161]/5 border border-[#0A3161]/10 flex items-center justify-center text-[#B31942] shrink-0 rounded-xs">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase tracking-wide text-[#0A3161]">
                    Inboard Tamper-Proof Locking System
                  </h4>
                  <p className="text-xs text-[#0A3161]/70 leading-relaxed font-light">
                    Heavy internal compression locking bolts sit protected flush within the surface pattern matrix. This provides comprehensive safety against high-velocity road suction, theft, and unauthorized access entries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Close-up Image Column (5 Columns Wide) */}
          <div className="lg:col-span-5 w-full flex justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] bg-[#0A3161]/5 border border-[#0A3161]/10 p-4 shadow-md rounded-xs group hover:border-[#B31942] transition-colors duration-300">
              <Image
                src="/assets/image2.jpeg" // Replace with your close-up product casting macro image
                alt="Metalverse High-Precision Iron Casting Surface View"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute top-3 right-3 bg-[#B31942] text-white text-[9px] font-mono uppercase tracking-widest px-2 py-1 font-bold">
                Heavy Duty Close-Up Spec
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
