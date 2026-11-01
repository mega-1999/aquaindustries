"use client";

import {
  CheckCircle2,
  Factory,
  Flame,
  Gauge,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import type React from "react";
import { FOUNDRY_WALKTHROUGH } from "../../data/waterworks-data";

export const FoundryWalkthrough: React.FC = () => {
  const getWalkthroughIcon = (id: string) => {
    switch (id) {
      case "sand-molding":
        return Factory;
      case "cnc-machining":
        return Gauge;
      case "metallurgy-lab":
        return ShieldCheck;
      case "flatbed-yard":
        return Truck;
      default:
        return Flame;
    }
  };

  return (
    <section
      id="foundry-walkthrough"
      aria-label="Real Foundry & Yard Walkthrough"
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#5FD4FD]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
            <Factory className="w-3.5 h-3.5 text-[#0082FC]" />
            <span className="whitespace-nowrap">
              Domestic Foundry &amp; Distribution Operations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0082FC] tracking-tight leading-tight">
            Real Foundry &amp; Yard Walkthrough
          </h2>
          <p className="mt-2 text-[#0082FC]/90 text-sm sm:text-base leading-relaxed font-normal">
            Take a look inside our manufacturing and yard operations. See how
            clean molds, sharp machining, and tested metallurgy produce
            consistent waterworks fittings ready for immediate flatbed delivery.
          </p>
        </div>

        {/* 4-Item Photo/Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDRY_WALKTHROUGH.map((item) => {
            const Icon = getWalkthroughIcon(item.id);
            return (
              <div
                key={item.id}
                className="bg-white border-2 border-[#5FD4FD] rounded-none p-6 lg:p-8 shadow-sm hover:border-[#0082FC] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#5FD4FD]/30">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-sm font-bold text-[#0082FC] shadow-sm">
                      <Icon className="w-4 h-4 text-[#0082FC]" />
                      <span>{item.tagline}</span>
                    </span>
                    <span className="text-sm font-bold text-[#0082FC] bg-white px-3 py-1 rounded-none border-2 border-[#5FD4FD]">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0082FC] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#0082FC] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verified Spec Pill */}
                <div className="mt-4 pt-4 border-t-2 border-[#5FD4FD]/30 flex items-center justify-between text-sm sm:text-base text-[#0082FC]">
                  <span className="font-bold text-[#0082FC] flex items-center gap-2 whitespace-nowrap">
                    <CheckCircle2 className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                    <span>Quality Benchmark:</span>
                  </span>
                  <span className="font-bold text-[#0082FC] bg-white px-2.5 py-1 rounded-none border-2 border-[#5FD4FD] whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plant Overview Callout */}
        <div className="mt-12 bg-[#0082FC] border-2 border-[#5FD4FD] text-white rounded-none p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-none bg-white flex items-center justify-center text-[#0082FC] shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6 text-[#0082FC]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Certified Mill Test Reports (MTRs) for Every Heat
              </h4>
              <p className="text-sm sm:text-base text-white/95 mt-1 leading-relaxed">
                Chemical composition and tensile pull documentation are stored
                under every stamped heat code. Available immediately for your
                project inspection file.
              </p>
            </div>
          </div>

          <a
            href="#quality-standards"
            className="shrink-0 px-6 py-3.5 bg-white text-[#0082FC] hover:bg-[#5FD4FD] rounded-none text-sm sm:text-base font-extrabold transition-colors whitespace-nowrap shadow-sm"
          >
            Review Quality Standards
          </a>
        </div>

        {/* Domestic Facilities & Direct Foundry Contact */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-[#5FD4FD] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#0082FC] text-white text-xs font-extrabold uppercase tracking-wider whitespace-nowrap">
                  Corporate HQ &amp; Primary Foundry
                </span>
                <span className="text-xs font-bold text-[#0082FC] border border-[#5FD4FD] px-2.5 py-0.5 whitespace-nowrap">
                  Melville, NY
                </span>
              </div>
              <h4 className="text-xl font-black text-[#0082FC] mb-2">
                New York Foundry
              </h4>
              <p className="text-sm sm:text-base text-[#0082FC] font-medium leading-relaxed mb-4">
                105 Maxes Road
                <br />
                Melville, NY 11747, USA
              </p>
            </div>
            <div className="pt-4 border-t-2 border-[#5FD4FD]/30 flex items-center justify-between">
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#0082FC] hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-[#0082FC]" />
                <span>+1 (516) 252-1111</span>
              </a>
              <span className="text-xs font-bold text-[#0082FC] bg-[#5FD4FD]/20 px-2.5 py-1 whitespace-nowrap">
                Direct Dispatch &amp; QA
              </span>
            </div>
          </div>

          <div className="bg-white border-2 border-[#5FD4FD] p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-[#0082FC] text-white text-xs font-extrabold uppercase tracking-wider whitespace-nowrap">
                  Southeast Logistics Hub
                </span>
                <span className="text-xs font-bold text-[#0082FC] border border-[#5FD4FD] px-2.5 py-0.5 whitespace-nowrap">
                  Orlando, FL
                </span>
              </div>
              <h4 className="text-xl font-black text-[#0082FC] mb-2">
                Florida Operations
              </h4>
              <p className="text-sm sm:text-base text-[#0082FC] font-medium leading-relaxed mb-4">
                Florida Operations &amp; Distribution Terminal
                <br />
                Orlando, FL 32824, USA
              </p>
            </div>
            <div className="pt-4 border-t-2 border-[#5FD4FD]/30 flex items-center justify-between">
              <a
                href="tel:+15162521111"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#0082FC] hover:text-[#5FD4FD] transition-colors whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-[#0082FC]" />
                <span>+1 (516) 252-1111</span>
              </a>
              <span className="text-xs font-bold text-[#0082FC] bg-[#5FD4FD]/20 px-2.5 py-1 whitespace-nowrap">
                Next-Day Jobsite Fleet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
