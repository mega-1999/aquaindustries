"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button'; 
import localFont from 'next/font/local';
import { motion } from "framer-motion";

interface HeroProps {
  videoSrc?: string;
}

const apricotsFont = localFont({
  src: '../../lib/fonts/Horizon.otf', 
  display: 'swap',
  fallback: ['sans-serif']
});

const words = ["Water Works.", "Precast Molds", "Minerals & Metals."]; 
   
export const Hero = ({
  videoSrc = "/video/282244_small.mp4"
}: HeroProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <header className="relative w-full overflow-hidden flex items-center justify-center min-h-[600px] md:min-h-[800px] bg-[#0A3161]">

      {/* 1. HERO VIDEO BACKGROUND - FIXED TO 100% OPACITY */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 filter contrast-125"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A3161]/80 via-[#0A3161]/20 to-[#0A3161]/50 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[#B31942]/5 z-0 pointer-events-none mix-blend-color" />

      {/* 2. FLUID EDGES CONTAINER - SHIFTED CONTENT UP via pb-24 md:pb-36 */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-48 md:pb-60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">

          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-8 text-left space-y-6">
 
            {/* Meta Tag Block */}
            <div className="inline-block text-xs text-white tracking-[0.25em] font-black bg-[#B31942] border border-[#B31942] shadow-[0_0_20px_rgba(204,34,33,0.4)] px-4 py-2 uppercase">
              METALSVERSE | Global Metals & Minerals Hub
            </div>

            {/* Main Title Heading */}
            <h1 className="text-white font-black uppercase tracking-tighter leading-none">
              <span className="block text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white drop-shadow-[0_5px_15px_rgba(10,49,97,0.95)]">
                The World's Advanced <br />
                Consortium of{" "}
                <span className="block min-h-[1.2em] relative mt-2 lg:mt-4 flex items-center">
                  
                  {/* Transparent Outline Text Effect */}
                  <span 
                    className="text-transparent drop-shadow-[0_0_20px_rgba(204,34,33,0.4)] font-black select-none"
                    style={{ 
                      WebkitTextStroke: "2px #ffffff",
                    }}
                  >
                    {words[index].substring(0, subIndex)}
                  </span>

                  {/* Typing Cursor Accent Indicator */}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-1.5 h-10 sm:h-14 md:h-16 bg-[#B31942] ml-3 shadow-[0_0_15px_#B31942] shrink-0 inline-block"
                  />
                </span>
              </span>
            </h1>

          </div>

          {/* RIGHT SIDE ACTION PANEL - SHIFTED UP via lg:mt-4 */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end pr-12 justify-center text-center lg:text-right space-y-6 lg:mt-4 w-full">

            <div className="w-full">
              <span className="block text-2xl sm:text-3xl font-black tracking-tighter uppercase italic text-white drop-shadow-[0_4px_12px_rgba(204,34,33,0.5)]">
                Under One Universe
              </span>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Button className="w-full bg-[#B31942] hover:bg-[#8f1435] text-white font-black uppercase tracking-widest h-12 text-xs rounded-none shadow-[0_4px_20px_rgba(204,34,33,0.3)] transition-all duration-200 border-none">
                Explore Capabilities
              </Button>

              <Button variant="outline" asChild className="w-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0A3161] font-black uppercase tracking-widest h-12 text-xs rounded-none transition-all duration-200">
                <Link href="/sellerHomepage">Succeed With Us</Link>
              </Button>
            </div>

          </div>

        </div>
      </div>

      {/* Base Identity Accent Bar */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#B31942] via-[#0A3161] to-[#B31942] z-20"></div>
    </header>
  );
};
