"use client";

import {
  Award,
  CheckCircle2,
  FileText,
  FlaskConical,
  Gauge,
  ShieldCheck,
} from "lucide-react";
import type React from "react";
import { QUALITY_STANDARDS_PLAIN } from "../../data/waterworks-data";

export const PlainQualityStandards: React.FC = () => {
  const getQualityIcon = (step: string) => {
    switch (step) {
      case "1":
        return FlaskConical;
      case "2":
        return Gauge;
      case "3":
        return ShieldCheck;
      case "4":
        return FileText;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section
      id="quality-standards"
      aria-label="Plain-English Quality Standards"
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#0565d6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white border-2 border-[#0565d6] text-[#0082FC] text-sm font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Award className="w-4 h-4 text-[#0082FC]" />
            <span className="whitespace-nowrap">Straightforward Testing</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0082FC] tracking-tight leading-tight">
            Plain-English Quality Standards
          </h2>
          <p className="mt-3 text-[#0082FC] text-base sm:text-lg leading-relaxed font-normal">
            No jargon or confusing claims. Here is exactly how Aqua Industries
            verifies that every fitting leaving our plant performs as promised
            in the trench.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {QUALITY_STANDARDS_PLAIN.map((item) => {
            const Icon = getQualityIcon(item.step);
            return (
              <div
                key={item.step}
                className="bg-white border-2 border-[#0565d6] rounded-none p-6 lg:p-8 shadow-sm hover:border-[#0082FC] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-11 h-11 rounded-none bg-white text-[#0082FC] border-2 border-[#0565d6] flex items-center justify-center font-bold text-sm">
                      <Icon className="w-6 h-6 text-[#0082FC]" />
                    </span>
                    <span className="text-sm font-bold text-[#0082FC] bg-white px-3 py-1 rounded-none border-2 border-[#0565d6] whitespace-nowrap">
                      {item.standard}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0082FC] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#0082FC] leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-[#0565d6]/30 flex items-center gap-2 text-sm sm:text-base font-bold text-[#0082FC]">
                  <CheckCircle2 className="w-4 h-4 text-[#0565d6] shrink-0" />
                  <span>Standard Foundry Checkpoint Passed</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
