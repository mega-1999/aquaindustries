"use client";

import {
  AlertTriangle,
  CalendarCheck,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import type React from "react";

export const ClearJobsitePolicies: React.FC = () => {
  return (
    <section
      aria-label="Aqua Industries Order & Jobsite Policies"
      className="py-16 bg-white border-t-2 border-[#3087ff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-[#3087ff] bg-white rounded-none p-6 sm:p-10 shadow-sm relative overflow-hidden text-[#3087ff]">
          {/* Top Blue Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#3087ff]" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-[#3087ff]/30">
            <div className="flex items-center gap-3.5">
              <span className="p-3 rounded-none bg-white border-2 border-[#3087ff] text-[#3087ff] shrink-0 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-[#3087ff]" />
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#3087ff] tracking-tight">
                  Clear Jobsite &amp; Order Policies
                </h3>
                <span className="text-sm sm:text-base text-[#3087ff] font-bold">
                  Direct, Honest Terms &bull; Pricing Validity &bull; AWWA C600
                  Field Installation
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-white border-2 border-[#3087ff] text-[#3087ff] text-sm font-bold shadow-sm whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-[#3087ff] shrink-0" />
                Plain English Terms
              </span>
            </div>
          </div>

          {/* 3 Safeguard Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Pricing & Quotes */}
            <div className="bg-white p-6 rounded-none border-2 border-[#3087ff] shadow-sm space-y-3.5">
              <div className="flex items-center gap-2 text-[#3087ff] font-extrabold text-base">
                <CalendarCheck className="w-5 h-5 text-[#3087ff] shrink-0" />
                <span className="whitespace-nowrap">
                  1. Pricing &amp; Quotes
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#3087ff] leading-relaxed">
                All written quotations from Aqua Industries are{" "}
                <strong>valid for 30 calendar days</strong> from issuance, based
                on prevailing pig iron and scrap metal costs. Once your purchase
                order is acknowledged, your price is locked through scheduled
                shipment.
              </p>
            </div>

            {/* 2. Jobsite Deliveries & Offloading */}
            <div className="bg-white p-6 rounded-none border-2 border-[#3087ff] shadow-sm space-y-3.5">
              <div className="flex items-center gap-2 text-[#3087ff] font-extrabold text-base">
                <Truck className="w-5 h-5 text-[#3087ff] shrink-0" />
                <span className="whitespace-nowrap">
                  2. Flatbed Deliveries &amp; Offload
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#3087ff] leading-relaxed">
                Our flatbed shipments include standard transit cargo insurance
                until the truck arrives on accessible public roads at your
                designated jobsite.{" "}
                <strong>
                  Jobsite unloading equipment (forklifts, cranes, certified
                  riggers) is the sole responsibility of the receiving utility
                  contractor.
                </strong>
              </p>
            </div>

            {/* 3. Proper Field Installation */}
            <div className="bg-white p-6 rounded-none border-2 border-[#3087ff] shadow-sm space-y-3.5">
              <div className="flex items-center gap-2 text-[#3087ff] font-extrabold text-base">
                <Wrench className="w-5 h-5 text-[#3087ff] shrink-0" />
                <span className="whitespace-nowrap">
                  3. AWWA C600 Field Installation
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#3087ff] leading-relaxed">
                Catalog working pressure ratings apply when pipe and fittings
                are installed according to <strong>AWWA C600 guidelines</strong>
                . Bolts must be torqued in a cross-star pattern to 75–90 ft-lbs
                with clean gaskets and proper trench bedding gravel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
