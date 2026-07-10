'use client';

import React from 'react';

const steps = [
  {
    id: 1,
    title: "Global OEM Access",
    highlight: "Global",
    description: "Upload your capabilities and certifications. We digitize your profile for infrastructure giants worldwide.",
    position: "top"
  },
  {
    id: 2,
    title: "RFQ Smart Matching",
    highlight: "RFQ",
    description: "Our algorithm matches incoming technical blueprints directly to your machinery specs and metal grades.",
    position: "bottom"
  },
  {
    id: 3,
    title: "Digital Contracting",
    highlight: "Close",
    description: "Submit tooling fees and lead times via our portal. Sign secure digital contracts with international buyers.",
    position: "top"
  },
  {
    id: 4,
    title: "Production Tracking",
    highlight: "Manage",
    description: "Update casting stages virtually. Buyers track progress from pattern making to finishing, reducing email overhead.",
    position: "bottom"
  }
];

export default function HowItWorks() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
      <div className="text-center mb-24">
        <span className="text-[#B31942] font-bold text-xs uppercase tracking-widest">
          Mega Foundries Process
        </span>
        <h2 className="text-[30px] md:text-[40px] font-bold text-[#0A3161] mt-2">
          How It <span className="text-[#B31942]">Works</span>
        </h2>
      </div>
      <div className="hidden lg:block relative h-[500px] w-full max-w-6xl mx-auto">

        {/* <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" 
            viewBox="0 0 1200 500" 
            preserveAspectRatio="none"
          > 
            <path 
              d="
                M -50,400        
                L 100,400        
                Q 150,400 150,350  
                L 150,150        
                Q 150,100 200,100  
                L 350,100        
                Q 400,100 400,150  
                L 400,350        
                Q 400,400 450,400  
                L 650,400        
                Q 700,400 700,350  
                L 700,150        
                Q 700,100 750,100  
                L 900,100        
                Q 950,100 950,150  
                L 950,350        
                Q 950,400 1000,400 
                L 1250,400
              "
              fill="none"
              stroke="#e5e7eb"  
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}

        <div className="grid grid-cols-4 h-full w-full relative z-10">
          {steps.map((step) => (
            <div key={step.id} className="relative h-full flex justify-center">

              {step.position === 'top' ? (
                <>
                  <div className="absolute top-[60px] text-7xl font-black text-[#B31942] bg-white/80 px-4 rounded-xl backdrop-blur-sm z-20">
                    {step.id}
                  </div>

                  <div className="absolute top-[280px] px-4 text-center max-w-[280px]">
                    <h3 className="text-xl font-bold text-[#0A3161] mb-3">
                      <span className="text-[#B31942]">{step.highlight}</span> {step.title.replace(step.highlight, "")}
                    </h3>
                    <p className="text-sm text-[#0A3161]/80 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-0 px-4 text-center max-w-[280px]">
                    <h3 className="text-xl font-bold text-[#0A3161] mb-3">
                      <span className="text-[#B31942]">{step.highlight}</span> {step.title.replace(step.highlight, "")}
                    </h3>
                    <p className="text-sm text-[#0A3161]/80 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  {/* Number sits INSIDE the bottom bend */}
                  <div className="absolute top-[320px] text-7xl font-black text-[#0A3161] bg-white/80 px-4 rounded-xl backdrop-blur-sm z-20">
                    {step.id}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Start/End Caps */}
        <div className="absolute left-[-20px] bottom-[80px] w-10 h-10 bg-[#0A3161]/10 rounded-full border-4 border-white"></div>
        <div className="absolute right-[-20px] bottom-[80px] w-10 h-10 bg-[#0A3161]/10 rounded-full border-4 border-white"></div>

      </div>
      <div className="lg:hidden space-y-8 relative pl-4">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#0A3161]/10 -z-10"></div>
        {steps.map((step) => (
          <div key={step.id} className="relative pl-12">
            <div className="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-[#0A3161]/10 rounded-2xl flex items-center justify-center text-3xl font-black text-[#B31942] shadow-sm z-10">
              {step.id}
            </div>
            <div className="bg-[#0A3161]/5 p-6 rounded-xl border border-[#0A3161]/10 shadow-sm">
              <h3 className="text-lg font-bold text-[#0A3161] mb-2">
                {step.title}
              </h3>
              <p className="text-[#0A3161]/80 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
