"use client";

import React from "react";
import { Youtube, ExternalLink, Activity, Layers } from "lucide-react";

interface MediaAsset {
  id: string;
  title: string;
  source: string;
  badge: string;
  description: string;
  embedUrl: string;
}

const VIDEO_RESOURCES: MediaAsset[] = [
  {
    id: "hydraulic-grates",
    title: "Grate Inlets: Hydraulic Interception Lab Test",
    source: "Federal Highway Administration (FHWA)",
    badge: "Hydraulic Performance Model",
    description: "Full fluid dynamic test showcasing parallel, curved, and cross-bar casting matrices under localized street section flows. Highlights frontal interception capability versus bypass side flow rates.",
    embedUrl: "https://www.youtube.com/embed/-TLP3uBB55o?autoplay=1&mute=1&loop=1&playlist=-TLP3uBB55o&start=785"
  },
  {
    id: "fdm-foundry",
    title: "Fused Deposition Modeling (FDM) Technology",
    source: "Industrial Grade Additive Manufacturing",
    badge: "Additive Tooling Matrix",
    description: "Layer additive manufacturing breakdown utilizing high-grade thermoplastic matrices to construct precision patterns, low-volume components, and casting mold mockups directly from CAD layers.",
    embedUrl: "https://www.youtube.com/embed/WHO6G67GJbM?autoplay=1&mute=1&loop=1&playlist=WHO6G67GJbM"
  }
];

export default function MegaMediaHub() {
  return (
    <section className="bg-white text-[#0A3161] py-24 font-sans border-b border-gray-100 w-full">
      {/* Strict Fluid Layout Bounds */}
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-16">
        
        {/* --- HEADER LOGISTICS SECTION --- */}
        <div className="border-b border-gray-200 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] font-black text-[#B31942] block mb-3">
              Technical Streaming Terminal
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0A3161] leading-none">
              Simulation <span className="text-[#B31942]">& Lab Feeds</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base font-light leading-relaxed max-w-xl">
            Live infrastructure benchmarks. Real-time rendering streams visualizing hydraulic grate flow intercept dynamics alongside micro-layered thermoplastic production tooling cycles.
          </p>
        </div>

        {/* --- DUAL SPLIT MEDIA GRID (100% Clarity Visuals) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {VIDEO_RESOURCES.map((video) => (
            <div 
              key={video.id} 
              className="flex flex-col bg-gray-50 border border-gray-200 rounded-none overflow-hidden p-6 group hover:border-[#B31942] hover:bg-white transition-all duration-300 shadow-sm"
            >
              
              {/* Top Analytical Banner Strip */}
              <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#B31942] font-bold uppercase flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" /> {video.badge}
                </span>
                <span className="text-[9px] font-mono tracking-wider text-gray-400 uppercase">
                  Feed // Active
                </span>
              </div>

              {/* HIGH DEFINITION VIDEO VIEWPORT BOX */}
              <div className="relative w-full aspect-video bg-[#0A3161] border border-gray-200 overflow-hidden shadow-inner mb-6">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover border-none"
                />
              </div>

              {/* CORE METADATA SPEC DATA BLOCK */}
              <div className="flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-black uppercase tracking-tight text-[#0A3161] group-hover:text-[#B31942] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-mono uppercase tracking-wide">
                    Origin Authority: {video.source}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed pt-2">
                    {video.description}
                  </p>
                </div>

                {/* Direct Reference Technical Anchors */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Youtube className="w-4 h-4 text-[#B31942]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold">HD Network Source</span>
                  </div>
                  
                  <a
                    href={video.id === "hydraulic-grates" ? "https://www.youtube.com/watch?v=-TLP3uBB55o&t=785s" : "https://www.youtube.com/watch?v=WHO6G67GJbM"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#B31942] hover:text-[#0A3161] border-b border-dashed border-[#B31942] pb-0.5 transition-colors uppercase tracking-wider"
                  >
                    Launch Native Player <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* --- PERFORMANCE COMPLIANCE Matrix FOOTER --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-gray-200 w-full bg-white text-center md:text-left">
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#B31942] shrink-0" />
            <p className="text-xs uppercase tracking-wider font-bold text-gray-700">
              AASHTO H-20 & FHWA Lab Certified Data Feeds
            </p>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-100 rounded-none flex items-center justify-center md:justify-end">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Terminal Node Status: Synchronization Completed
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}