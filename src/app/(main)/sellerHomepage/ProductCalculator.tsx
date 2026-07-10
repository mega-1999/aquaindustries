'use client';

import React from 'react';
import Image from 'next/image';
import { Calculator, Sliders, Zap, Factory } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Automated Weight & Cost Logic",
    description: "Handle complex casting weight calculations and yield ratios with ease. Input your CAD dimensions and get instant material requirements.",
    icon: Calculator
  },
  {
    id: 2,
    title: "Dynamic Surcharge Inputs",
    description: "Adjust parameters like ferroalloy costs, energy rates, and logistics fees to see real-time price updates on your quotes.",
    icon: Sliders
  },
  {
    id: 3,
    title: "Time-Saving Efficiency",
    description: "No more manual spreadsheet errors. Generate accurate per-kg or per-piece pricing for international buyers instantly.",
    icon: Zap
  },
  {
    id: 4,
    title: "Tailored for Foundries",
    description: "Designed specifically to meet the needs of sellers in the Sand Casting, Investment Casting, and Forging sectors.",
    icon: Factory
  }
];

export default function ProductCalculator() {
  return (
    <section className="relative py-24 bg-[#fffaf5] overflow-hidden">
       
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
            backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3161] mb-8 leading-tight">
              Simplify Complex Pricing with Our <br />
              <span className="text-[#B31942]">Built-in Product Calculator..</span>
            </h2>
            
            <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square"> 
              <Image 
                src="/assets/image9.jpeg" 
                alt="Pricing Calculator Illustration"
                fill
                className="object-contain"
              /> 
            </div>
          </div>
 
          <div className="space-y-10">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-5 group">
                 
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-white rounded-lg border border-red-100 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-[#B31942]" strokeWidth={1.5} />
                  </div>
                </div>
 
                <div>
                  <h3 className="text-xl font-bold text-[#0A3161] mb-2 group-hover:text-[#B31942] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[#0A3161]/80 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
