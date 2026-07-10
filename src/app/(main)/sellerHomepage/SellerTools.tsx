'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// --- CUSTOM CONTENT FOR METALSVERSE FOUNDRIES (Zero Plagiarism) ---
const tools = [
  {
    id: 1,
    number: "01",
    title: "Digital Foundry Profile",
    description: "Showcase your casting capabilities, certifications (ISO/AS9100), and furnace capacities. Let OEMs filter you by casting method—Sand, Investment, or Die Casting.",
    image: "/assets/dashboard-store.jpg"
  },
  {
    id: 2,
    number: "02",
    title: "Live Metal Indexing",
    description: "Link your pricing directly to global metal exchange rates (LME). Automatically adjust quotes based on fluctuating costs of Iron, Aluminum, or Steel raw materials.",
    image: "/assets/dashboard-pricing.jpg"
  },
  {
    id: 3,
    number: "03",
    title: "Smart RFQ Management",
    description: "Streamline the Request for Quote process. View CAD files, estimate casting weights, and submit technical proposals 70% faster than traditional email threads.",
    image: "/assets/dashboard-quoting.jpg"
  },
  {
    id: 4,
    number: "04",
    title: "Capacity Planning Engine",
    description: "Balance your production lines efficiently. Our system helps you track mold availability, pour schedules, and cooling times to give buyers accurate lead times.",
    image: "/assets/dashboard-engine.jpg"
  },
  {
    id: 5,
    number: "05",
    title: "Global Procurement Network",
    description: "Gain visibility with international infrastructure contractors. Our algorithm matches your foundry's specific alloy expertise with relevant large-scale tenders.",
    image: "/assets/dashboard-buyers.jpg"
  }
];

export default function SellerTools() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3">

        <div className="text-center mb-16 space-y-4">
          <span className="text-[#B31942] font-bold text-sm uppercase tracking-widest">
            METALSVERSE Foundries | PARTNER SUITE
          </span>
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#0A3161]">
            Engineered for <span className="text-[#B31942]">Modern Foundries</span>
          </h2>
          <p className="text-[#0A3161]/70 max-w-2xl mx-auto text-xl">
            Transition from traditional job-work to a digitally integrated manufacturing hub.
            Utilize our specialized tools to optimize your production workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-4 flex flex-col space-y-2">
            {tools.map((tool, index) => {
              const isActive = index === activeTab;
              return (
                <div
                  key={tool.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    cursor-pointer group transition-all duration-300 border-l-4 pl-6 py-4
                    ${isActive ? 'border-[#B31942] bg-[#B31942]/5/30 rounded-r-lg' : 'border-transparent hover:border-red-100'}
                  `}
                >
                  <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-[#B31942]' : 'text-white/80 group-hover:text-[#0A3161]'}`}>
                    {tool.number} {tool.title}
                  </h3>

                  <div
                    className={`
                      overflow-hidden transition-all duration-500 ease-in-out
                      ${isActive ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <p className="text-sm text-[#0A3161]/70 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-8">
            <div className="relative bg-[#0A3161] rounded-xl overflow-hidden shadow-2xl border border-[#0A3161] aspect-[16/10]">

              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0A3161] flex items-center px-4 space-x-2 z-10 border-b border-[#0A3161]/50">
                <div className="w-3 h-3 rounded-full bg-[#B31942]/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="relative w-full h-full pt-8 bg-white">
                <Image
                  src={tools[activeTab].image}
                  alt={tools[activeTab].title}
                  fill
                  className="object-cover object-top transition-opacity duration-500"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
