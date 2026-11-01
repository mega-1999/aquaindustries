"use client";

import {
  CheckCircle2,
  FileCheck,
  Gauge,
  Layers,
  ShieldCheck,
} from "lucide-react";
import type React from "react";

export const CertifiedMetricsBar: React.FC = () => {
  const metrics = [
    {
      metric: "65-45-12 Grade",
      sublabel: "High-Strength Ductile Iron",
      standard: "ASTM A536 Standard",
      description:
        "High-strength ductile iron delivering reliable tensile strength, impact absorption, and verified nodularity under cyclical water hammer shocks.",
      icon: Layers,
    },
    {
      metric: "3-Inch to 48-Inch",
      sublabel: "Full Sizing Coverage",
      standard: "AWWA C153 & C110",
      description:
        "Full range of inventory for municipal and commercial lines, from compact subdivision distribution mains to large plant headers.",
      icon: Gauge,
    },
    {
      metric: "100% Hydro-Tested",
      sublabel: "Pressure-Checked at Plant",
      standard: "500 PSI Proof Test",
      description:
        "Every fitting is pressure-checked before leaving the facility. Water seals and metal walls are verified under pressure with zero weepage.",
      icon: ShieldCheck,
    },
    {
      metric: "Fully Insured",
      sublabel: "Commercial Coverage",
      standard: "Comprehensive Cargo & Product",
      description:
        "Complete commercial liability coverage on every shipment. All shipments are accompanied by certified foundry test reports.",
      icon: FileCheck,
    },
  ];

  return (
    <section
      aria-label="Aqua Industries Certified Metrics"
      className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.metric}
              className="bg-white border-2 border-[#5FD4FD] rounded-none p-5 sm:p-6 shadow-md hover:border-[#0082FC] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD]">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0082FC] bg-white px-2.5 py-0.5 rounded-none border border-[#5FD4FD] whitespace-nowrap">
                    {item.standard}
                  </span>
                </div>

                <div className="mb-2">
                  <div className="text-xl sm:text-2xl lg:text-[1.4rem] xl:text-2xl font-black text-[#0082FC] tracking-tight font-sans leading-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082FC] mt-1.5 leading-snug">
                    {item.sublabel}
                  </div>
                </div>

                <p className="text-sm text-[#0082FC] leading-relaxed mt-2.5 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#5FD4FD] flex items-center justify-between text-xs sm:text-sm text-[#0082FC]">
                <span className="font-bold text-[#0082FC] whitespace-nowrap">
                  Aqua Verified
                </span>
                <span className="text-[#0082FC] font-bold flex items-center gap-1 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4FD]" />
                  100% Passed
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
