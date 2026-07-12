import React from 'react';
import { Cpu, Zap, Box, Layers, BarChart3, Microscope, ArrowRight, Atom } from 'lucide-react';
import Link from 'next/link';

const TECH_HIGHLIGHTS = [
  {
    id: "additive",
    icon: Box,
    title: "Additive Manufacturing",
    subtitle: "Industrial 3D Metal Printing",
    description: "We utilize laser powder bed fusion (LPBF) to create complex geometries that traditional casting cannot achieve. This reduces part weight by up to 40% while maintaining structural integrity.",
    specs: ["Titanium & Nickel Alloys", "Micron-level precision", "Zero-waste process"]
  },
  {
    id: "digital-twins",
    icon: Cpu,
    title: "Digital Twins",
    subtitle: "Real-time Process Simulation",
    description: "Every physical part we cast has a digital counterpart. Sensors feed data into our AI models to predict stress fractures and thermal variances before the metal is even poured.",
    specs: ["Predictive Maintenance", "100% Traceability", "AI Quality Control"]
  },
  {
    id: "green-steel",
    icon: Zap,
    title: "Green Steel",
    subtitle: "Electric Arc Furnaces (EAF)",
    description: "Moving away from coal. Our new EAF facilities run on 100% renewable energy, melting scrap steel with electric arcs to produce virgin-quality alloy with a near-zero carbon footprint.",
    specs: ["Carbon Neutral", "95% Recycled Input", "High-Efficiency Flux"]
  }
];

export default function NewTechnologiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-[#0A3161]">
      
      {/* === HERO SECTION === */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-[#0A3161]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/image9.jpeg')] opacity-10"></div>
        
        {/* Glowing Orb/Graphic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B31942]/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-[80px] rounded-full mix-blend-screen"></div>

        <div className="relative z-10 text-center max-w-5xl px-4">
          <div className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
            <Atom className="w-3 h-3 animate-spin-slow" />
            Metalverse Research Labs
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
            THE FUTURE IS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-cyan-400">FORGED</span>
          </h1>
          <p className="text-xl text-[#0A3161]/60 max-w-2xl mx-auto leading-relaxed">
            We are bridging the gap between heavy industry and high technology. Explore the innovations defining the next era of metallurgy.
          </p>
        </div>
      </section>

      {/* === TECH SPECS GRID === */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TECH_HIGHLIGHTS.map((tech) => (
              <div key={tech.id} className="group relative bg-[#0A3161]/50 border border-slate-800 p-8 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-red-500/0 group-hover:from-cyan-500/5 group-hover:to-red-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#0A3161] rounded-lg flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform group-hover:border-cyan-500 group-hover:text-cyan-400">
                    <tech.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{tech.title}</h3>
                  <p className="text-xs font-bold text-[#B31942] uppercase tracking-widest mb-4">{tech.subtitle}</p>
                  
                  <p className="text-[#0A3161]/60 leading-relaxed mb-6 text-sm">
                    {tech.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-800 pt-6">
                    {tech.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#0A3161]/40">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_5px_cyan]"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === THE LAB (R&D) SECTION === */}
      <section className="py-24 bg-[#0A3161] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Inside <span className="text-[#B31942]">Site-X</span></h2>
            <p className="text-[#0A3161]/60 mb-8 text-lg">
              Site-X is our dedicated R&D facility located in Austin, TX. Here, 50+ PhD metallurgists and data scientists work in secrecy to develop alloys that can withstand the temperatures of Mars entry and the pressure of the ocean floor.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-[#0A3161] rounded border border-slate-800">
                <Microscope className="w-6 h-6 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-xs text-[#0A3161]/70 uppercase">Active Patents</div>
              </div>
              <div className="p-4 bg-[#0A3161] rounded border border-slate-800">
                <BarChart3 className="w-6 h-6 text-cyan-400 mb-2" />
                <div className="text-2xl font-bold text-white">$120M</div>
                <div className="text-xs text-[#0A3161]/70 uppercase">Annual R&D Budget</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            {/* Holographic Image Frame */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-700 bg-[#0A3161]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center">
                   <Atom className="w-16 h-16 text-cyan-500/50 mx-auto mb-4 animate-spin-slow" />
                   <p className="text-cyan-500/50 font-mono text-sm">[ PROPRIETARY ALLOY RENDERING ]</p>
                 </div>
              </div>

              {/* Scanline effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[10px] w-full animate-scan"></div>
            </div>
          </div>

        </div>
      </section>

      {/* === PARTNERSHIPS === */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#0A3161]/70 font-bold uppercase tracking-widest mb-10">Innovation Partners</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock Logos - Replace with <Image> */}
            <div className="text-xl font-black text-white">MIT <span className="font-light">MATSCI</span></div>
            <div className="text-xl font-black text-white">NASA <span className="font-light">JPL</span></div>
            <div className="text-xl font-black text-white">DARPA</div>
            <div className="text-xl font-black text-white">SIEMENS <span className="font-light">ENERGY</span></div>
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-slate-900 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a Challenge for Us?</h2>
          <p className="text-[#0A3161]/40 text-lg mb-10">
            If it can't be made with traditional methods, it belongs in our lab. Collaborate with our engineering team on your next breakthrough.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all transform hover:scale-105">
            Contact Engineering Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
