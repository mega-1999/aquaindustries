'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function VideoHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/video/video2.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-[#0A3161]/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-6">

        <p className="text-[#B31942] font-bold tracking-widest uppercase text-sm md:text-base animate-in fade-in slide-in-from-bottom-4 duration-1000">
          For Greener Landscapes & Golf Courses
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
          The World's Largest <br />
          Consortium of <br />
          <span className="text-[#B31942]">Foundries & Fabricators</span>
        </h1>

        <p className="text-xl text-[#B31942] font-light max-w-2xl mx-auto">
          "Think Fast and Succeed Faster"
        </p>

        <div className="pt-8">
          <Button className="bg-[#B31942] hover:bg-red-700 text-white px-10 py-7 text-xl rounded-md font-bold shadow-[0_0_20px_rgba(204,34,33,0.4)]">
            View Our Products <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

      </div>
    </section>
  );
}
