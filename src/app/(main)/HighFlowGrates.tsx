"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Droplet, Activity, ShieldCheck, ExternalLink } from "lucide-react";

export default function HighFlowGrates() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Video block:", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="bg-white text-[#0A3161] py-24 font-sans border-t border-[#0A3161]/10">
      {/* Strict Fluid Layout Bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        
        {/* Section Heading Banner */}
        <div className="border-b border-[#0A3161]/10 pb-8 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-black text-[#B31942] block mb-3">
              Hydraulic Performance Logs
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0A3161]">
              High Flow Grates
            </h2>
          </div>
        </div>

        {/* Top Split Block: Interactive Video Frame & Core Bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* IMAGE 1 slot: Dynamic Lab Demonstration Simulation */}
          <div className="lg:col-span-5 w-full">
            <div 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative group rounded-sm overflow-hidden border border-[#0A3161]/10 bg-slate-950 aspect-video flex flex-col justify-between shadow-lg p-4 cursor-pointer"
            >
              {/* Dynamic Video Element */}
              <video
                ref={videoRef}
                src="/video/trench/Trench 500 Animation.498.mp4"
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              />

              {/* Static Backdrop Cover Image */}
              <Image
                src="/assets/image2.jpeg" 
                alt="Hydraulic Interception Testing Simulation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-20 grayscale group-hover:grayscale-0"
              />
              
              {/* Dark Ambient Mask Layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A3161]/80 via-[#0A3161]/20 to-transparent pointer-events-none z-10" />

              {/* Floating Top Indicator */}
              <div className="relative z-20 self-start bg-[#B31942] text-white px-3 py-1 text-[10px] font-mono uppercase tracking-wider font-bold">
                Hover to Play Test
              </div>

              {/* Lab Outbound Anchor */}
              <a 
                href="https://youtu.be/-TLP3uBB55o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative z-20 self-start inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#B31942] transition-colors border-b border-dashed border-white pb-0.5 mt-auto"
              >
                Watch Lab Demonstration <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Side: Analytical Bullet Lists */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Feature 1 */}
            <div className="flex items-start gap-4 p-5 bg-[#0A3161]/5 border border-[#0A3161]/10 rounded-xs group hover:border-[#B31942] hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 bg-white border border-[#0A3161]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#B31942]/40 transition-colors">
                <Droplet className="w-5 h-5 text-[#B31942]" />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase tracking-wide text-[#0A3161] mb-1">
                  High Capacity Inlets for Extra Drainage
                </h4>
                <p className="text-sm text-[#0A3161]/70 font-light leading-relaxed">
                  Engineered to capture maximum runoff volume, clearing pooling surface water rapidly during critical peak downpour events.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 p-5 bg-[#0A3161]/5 border border-[#0A3161]/10 rounded-xs group hover:border-[#B31942] hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 bg-white border border-[#0A3161]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#B31942]/40 transition-colors">
                <Activity className="w-5 h-5 text-[#B31942]" />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase tracking-wide text-[#0A3161] mb-1">
                  Hydraulically Efficient
                </h4>
                <p className="text-sm text-[#0A3161]/70 font-light leading-relaxed">
                  Advanced casting geometry structures reduce fluid turbulence, driving water down into system infrastructure networks smoothly with minimized resistance.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 p-5 bg-[#0A3161]/5 border border-[#0A3161]/10 rounded-xs group hover:border-[#B31942] hover:bg-white transition-all duration-300 shadow-sm">
              <div className="w-10 h-10 bg-white border border-[#0A3161]/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#B31942]/40 transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#B31942]" />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase tracking-wide text-[#0A3161] mb-1">
                  100% Frontal-Flow Interception
                </h4>
                <p className="text-sm text-[#0A3161]/70 font-light leading-relaxed">
                  The complete horizontal casting matrix barrier alignment blocks bypass flow entirely, guaranteeing all surface water heading towards the grate is safely contained.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM ROW: Casting Specs Matrix showing remaining 4 product images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#0A3161]/10">
          
          {/* IMAGE 2 slot: Standard Flat Matrix */}
          <div className="bg-[#0A3161]/5 border border-[#0A3161]/10 p-6 flex flex-col justify-between group rounded-xs min-h-[280px] shadow-sm hover:bg-white hover:border-[#B31942] transition-all duration-300">
            <span className="text-[10px] font-mono tracking-widest text-[#0A3161]/60 uppercase font-bold block mb-4">
              Casting Spec 01 // Inline Profile
            </span>
            <div className="w-full h-32 relative bg-white border border-[#0A3161]/10 rounded-xs overflow-hidden mb-4 p-2">
              <Image 
                src="/assets/image5.jpeg" 
                alt="Standard Flat High Flow Grate"
                fill
                className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-[#0A3161]/70 uppercase tracking-wider group-hover:text-[#B31942] transition-colors">
              Standard Flat Grid Casting
            </p>
          </div>

          {/* IMAGE 3 slot: Single Rear Hood */}
          <div className="bg-[#0A3161]/5 border border-[#0A3161]/10 p-6 flex flex-col justify-between group rounded-xs min-h-[280px] shadow-sm hover:bg-white hover:border-[#B31942] transition-all duration-300">
            <span className="text-[10px] font-mono tracking-widest text-[#0A3161]/60 uppercase font-bold block mb-4">
              Casting Spec 02 // Rear Hood
            </span>
            <div className="w-full h-32 relative bg-white border border-[#0A3161]/10 rounded-xs overflow-hidden mb-4 p-2">
              <Image 
                src="/assets/image14.jpeg" 
                alt="Rear-Curb Deflection Casting"
                fill
                className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-[#0A3161]/70 uppercase tracking-wider group-hover:text-[#B31942] transition-colors">
              Rear-Curb Deflection Unit
            </p>
          </div>

          {/* IMAGE 4 slot: Multi-Window Curb Port */}
          <div className="bg-[#0A3161]/5 border border-[#0A3161]/10 p-6 flex flex-col justify-between group rounded-xs min-h-[280px] shadow-sm hover:bg-white hover:border-[#B31942] transition-all duration-300">
            <span className="text-[10px] font-mono tracking-widest text-[#0A3161]/60 uppercase font-bold block mb-4">
              Casting Spec 03 // Ported Curb
            </span>
            <div className="w-full h-32 relative bg-white border border-[#0A3161]/10 rounded-xs overflow-hidden mb-4 p-2">
              <Image 
                src="/assets/image18.jpeg" 
                alt="High-Velocity Integrated Weir Unit"
                fill
                className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-[#0A3161]/70 uppercase tracking-wider group-hover:text-[#B31942] transition-colors">
              Integrated Weir Configuration
            </p>
          </div>

          {/* IMAGE 5 slot: Heavy-Duty Structural Installation Assembly */}
          <div className="bg-[#0A3161]/5 border border-[#0A3161]/10 p-6 flex flex-col justify-between group rounded-xs min-h-[280px] shadow-sm hover:bg-white hover:border-[#B31942] transition-all duration-300">
            <span className="text-[10px] font-mono tracking-widest text-[#0A3161]/60 uppercase font-bold block mb-4">
              Casting Spec 04 // Complete Assembly
            </span>
            <div className="w-full h-32 relative bg-white border border-[#0A3161]/10 rounded-xs overflow-hidden mb-4 p-2">
              <Image 
                src="/assets/image2.jpeg" 
                alt="Complete High Flow Catch Basin Assembly Frame"
                fill
                className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xs font-bold text-[#0A3161]/70 uppercase tracking-wider group-hover:text-[#B31942] transition-colors">
              Heavy Duty Assembly Setup
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
