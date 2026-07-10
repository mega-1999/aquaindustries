'use client';
import { Play } from 'lucide-react';
import React from 'react';
import InfiniteLiveFeed from './InfiniteLiveFeed'; // Your existing center feed
import FixedQuoteBtn from './FixedQuoteBtn';

// --- HELPER COMPONENT: Side Video Player ---
const SideStreamPlayer = ({
  title,
  videoSrc1,
  videoSrc2,
  color
}: {
  title: string,
  videoSrc1: string,
  videoSrc2: string,
  color: string
}) => (
  <div className="w-[200px] h-[calc(100vh-100px)] sticky top-24 flex flex-col gap-4">

    {/* === Video Container 1 (Top) === */}
    <div className={`relative w-full h-1/2 bg-[#0A3161] rounded-xl overflow-hidden border-2 border-${color}-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>

      {/* Live Badge */}
      <div className="absolute top-2 left-2 z-10 flex items-center gap-1.5 bg-[#0A3161]/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white">
        <span className="w-1.5 h-1.5 bg-[#B31942]/50 rounded-full animate-pulse"></span> LIVE
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-90"
        src={videoSrc1}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A3161]/80 to-transparent"></div>
      <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
        {title} - Unit A
      </div>
    </div>

    {/* === Video Container 2 (Bottom) === */}
    {/* UPDATED: Added border-2, dynamic color border, and shadow to match the top video */}
    <div className={`relative w-full h-1/2 bg-[#0A3161] rounded-xl overflow-hidden border-2 border-${color}-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-80 hover:opacity-100 transition-opacity`}>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src={videoSrc2}
      />

      {/* Overlay info */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A3161]/80 to-transparent"></div>
      <div className="absolute bottom-3 left-3 text-white text-xs font-bold">
        {title} - Unit B
      </div>
    </div>

  </div>
);


export default function LiveStreamCommandCenter() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">

      {/* MAIN LAYOUT GRID */}
      <div className="w-full mx-auto px-2 md:px-6 py-6 flex justify-between gap-4 md:gap-8 relative">

        {/* === LEFT COLUMN: USA LIVE STREAMS === */}
        <aside className="hidden lg:block shrink-0">
          <SideStreamPlayer
            title="USA Ops"
            color="blue"
            videoSrc1="/video/video1.mp4"  // <--- Add your specific video paths here
            videoSrc2="/video/video2.mp4"
          />
        </aside>
        <FixedQuoteBtn />
        {/* === CENTER COLUMN: MEGA FOUNDRIES FEED === */}
        <main className="flex-1 min-w-0 flex flex-col items-center">

          {/* Header / Stats */}
          <div className="w-full text-center mb-8 border-b border-white/10 pb-6">
            <h1 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2 uppercase tracking-tight">
              MEGA GLOBAL MANUFACTURING NETWORK
            </h1>

            <div className="flex justify-center gap-6 text-xs text-[#0A3161]/60 font-mono mt-4">
              <span className="flex items-center gap-1 "><span className="text-[#B31942]">●</span> 54,201 FACTORIES <div className="text-[#B31942]">ONLINE</div> </span>
              <span className="flex items-center gap-1"><span className="text-green-500">●</span> 98.4% UPTIME</span>
            </div>
            <div className="flex justify-center gap-6 text-xs text-[#0A3161]/60 mt-4">
            </div>
            <span className="text-xl md:text-2xl font-bold  bg-clip-text text-[#B31942] mb-2 uppercase tracking-tight">FOLLOW YOUR PRODUCT BEING BORN & DELIVERED TO YOU LIVE <span className="text-sm "> (PRE-REGISTRATION REQUIRED) </span> </span>
          </div>

          {/* THE INFINITE SCROLL FEED (Your main content) */}
          <div className="w-full ">
            <InfiniteLiveFeed />
          </div>

          {/* === DASHBOARD WIDGETS === */}
          <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* 1. ANALYTICS GRAPH (Simulated Line Chart) */}
            <div className="h-40 bg-[#0A3161]/50 border border-[#B31942] rounded-lg p-5 relative overflow-hidden group hover:border-[#B31942]/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-[#0A3161]/60 text-xs font-bold uppercase tracking-wider">Overall Efficiency</h3>
                  <p className="text-2xl font-bold text-white mt-1">94.2% <span className="text-green-500 text-xs">▲ 2.4%</span></p>
                </div>
                <div className="p-1.5 bg-green-500/10 rounded text-green-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
              </div>
              {/* CSS/SVG Line Chart */}
              <div className="absolute bottom-0 left-0 right-0 h-16 opacity-50">
                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 10 5, 20 12 T 40 10 T 60 5 T 80 12 T 100 8 L 100 20 L 0 20 Z" fill="url(#gradient)" />
                  <path d="M0 15 Q 10 5, 20 12 T 40 10 T 60 5 T 80 12 T 100 8" fill="none" stroke="#B31942" strokeWidth="0.5" />
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#B31942" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#B31942" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* 2. PRODUCTION OUTPUT (Progress Bars) */}
            <div className="h-40 bg-[#0A3161]/50 border border-[#B31942] rounded-lg p-5 flex flex-col justify-between hover:border-[#B31942]/50 transition-colors">
              <h3 className="text-[#0A3161]/60 text-xs font-bold uppercase tracking-wider">Daily Production</h3>

              <div className="space-y-3">
                {/* Item 1 */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#0A3161]/40">Steel Castings</span>
                    <span className="text-white font-mono">1,240 / 1,500</span>
                  </div>
                  <div className="w-full bg-[#0A3161] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#B31942] h-full rounded-full w-[82%]"></div>
                  </div>
                </div>
                {/* Item 2 */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#0A3161]/40">Iron Forgings</span>
                    <span className="text-white font-mono">850 / 900</span>
                  </div>
                  <div className="w-full bg-[#0A3161] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full w-[94%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. ENERGY CONSUMPTION (Gauge/Stats) */}
            <div className="h-40 bg-[#0A3161]/50 border border-[#B31942] rounded-lg p-5 hover:border-[#B31942]/50 transition-colors">
              <h3 className="text-[#0A3161]/60 text-xs font-bold uppercase tracking-wider mb-4">Grid Load</h3>
              <div className="flex items-center gap-4">
                {/* Circular "Gauge" using CSS borders */}
                <div className="relative w-16 h-16 rounded-full border-4 border-[#0A3161] flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#B31942] rounded-full border-l-transparent border-b-transparent rotate-45"></div>
                  <span className="text-xs font-bold text-white">78%</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-[#0A3161]/40">Current Usage</p>
                  <p className="text-xl font-bold text-white">42.5 <span className="text-sm font-normal text-[#0A3161]/70">MW</span></p>
                  <p className="text-[10px] text-green-500">● Optimal Range</p>
                </div>
              </div>
            </div>

            {/* 4. LOGISTICS MAP (Dot Simulation) */}
            <div className="h-40 bg-[#0A3161]/50 border border-[#B31942] rounded-lg p-5 relative overflow-hidden hover:border-[#B31942]/50 transition-colors">
              <h3 className="text-[#0A3161]/60 text-xs font-bold uppercase tracking-wider relative z-10">Active Shipments</h3>

              {/* Fake Map Dots */}
              <div className="absolute inset-0 opacity-30">
                {/* Grid Pattern Background */}
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0A3161 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              </div>

              {/* Pulsing Dots (Ships/Trucks) */}
              <div className="absolute top-1/2 left-1/4">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </div>
              <div className="absolute top-1/3 right-1/4">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping delay-700"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </div>
              <div className="absolute bottom-1/3 left-1/2">
                <span className="absolute inline-flex h-3 w-3 rounded-full bg-blue-500 opacity-75 animate-ping delay-300"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </div>

              <div className="absolute bottom-4 left-5 z-10">
                <p className="text-2xl font-bold text-white">1,892</p>
                <p className="text-[10px] text-[#0A3161]/60">In Transit Global</p>
              </div>
            </div>

          </div>

        </main>

        {/* === RIGHT COLUMN: ASIA LIVE STREAMS === */}
        <aside className="hidden lg:block shrink-0">
          <SideStreamPlayer
            title="Asia Ops"
            color="blue"
            videoSrc1="/video/video3.mp4" // <--- Add your specific video paths here
            videoSrc2="/video/video4.mp4"
          />
        </aside>

      </div>
    </div>
  );
}
