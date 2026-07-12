import React from 'react';
import { ShieldCheck, Flag, HardHat, FileText, Building2, Gavel, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GovernmentAffairsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A3161] font-sans">
      
      {/* === HERO SECTION === */}
      <section className="relative h-[55vh] flex items-center bg-[#0A3161]">
        {/* Abstract Background: Subtle map or architectural lines */}
        <div className="absolute inset-0 bg-[url('/assets/image4.jpg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 text-blue-200 text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-6">
              <Flag className="w-3 h-3" />
              Public Sector & Policy
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Forging the Nation's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Backbone</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0A3161]/40 leading-relaxed mb-8">
              Metalverse  Industries is a trusted partner to local, state, and federal agencies. We provide the critical infrastructure and defense components that keep America secure and moving forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#B31942] hover:bg-[#B31942] text-white font-bold py-3 px-6 rounded transition-colors">
                <Download className="w-5 h-5" />
                Capabilities Statement
              </button>
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded backdrop-blur-sm transition-colors">
                Contact Liaison
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* === COMPLIANCE BAR === */}
      <div className="bg-[#0A3161]/10 border-b border-[#0A3161]/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-[#0A3161]/70 text-sm font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#0A3161]" /> ITAR Registered</span>
            <span className="hidden md:inline text-[#0A3161]/40">|</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#0A3161]" /> ISO 9001:2015</span>
            <span className="hidden md:inline text-[#0A3161]/40">|</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#0A3161]" /> CAGE Code: 7X892</span>
            <span className="hidden md:inline text-[#0A3161]/40">|</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#0A3161]" /> Buy American Compliant</span>
          </div>
        </div>
      </div>

      {/* === CORE PILLARS === */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-[#0A3161]">Strategic Focus Areas</h2>
          <p className="mt-4 text-[#0A3161]/80 max-w-2xl mx-auto">
            Our government affairs division works tirelessly to align our manufacturing capabilities with national priorities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#0A3161]/5 border border-[#0A3161]/10 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-[#0A3161] mb-3">Infrastructure Revitalization</h3>
            <p className="text-[#0A3161]/80 text-sm leading-relaxed">
              Supporting the Bipartisan Infrastructure Law by supplying American-made steel for bridges, railways, and grid modernization projects.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0A3161]/5 border border-[#0A3161]/10 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#B31942]/10 rounded-lg flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-[#B31942]" />
            </div>
            <h3 className="text-xl font-bold text-[#0A3161] mb-3">National Defense</h3>
            <p className="text-[#0A3161]/80 text-sm leading-relaxed">
              Providing high-strength armor and structural components for land, sea, and air systems. We are a reliable tier-1 supplier to prime defense contractors.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0A3161]/5 border border-[#0A3161]/10 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Gavel className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-bold text-[#0A3161] mb-3">Trade Policy Advocacy</h3>
            <p className="text-[#0A3161]/80 text-sm leading-relaxed">
              Active engagement with policymakers to ensure fair trade practices, level playing fields for US manufacturers, and supply chain resilience.
            </p>
          </div>
        </div>
      </section>

      {/* === CASE STUDY / IMPACT SECTION === */}
      <section className="bg-[#0A3161] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             {/* Placeholder for an image of a bridge or tank */}
            <div className="aspect-[4/3] bg-[#0A3161] rounded-xl overflow-hidden relative border border-slate-700">
               <div className="absolute inset-0 flex items-center justify-center text-[#0A3161]/70 font-bold">
                 <Image
                   src={'/assets/image6.jpeg'}
                   alt="Case Study Image"
                   fill
                   className="object-cover"
                   priority
                 />
               </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-[#B31942] text-xs font-bold uppercase rounded mb-4">
              Case Study
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Securing the Supply Chain</h2>
            <p className="text-[#0A3161]/60 mb-6 leading-relaxed">
              When international supply chains faltered, Metalverse  Industries stepped up to produce critical turbine housings for the Department of Energy's hydroelectric expansion project. By reshoring this production, we reduced lead times by 40% and ensured 100% domestic compliance.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <HardHat className="w-5 h-5 text-[#B31942]" />
                <span className="text-sm font-medium">100% Union Labor utilized</span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#B31942]" />
                <span className="text-sm font-medium">Full Material Traceability Reports</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === CONTACT / FOOTER CTA === */}
      <section className="py-20 bg-[#0A3161]/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0A3161] mb-4">Government Liaison Office</h2>
          <p className="text-[#0A3161]/80 mb-8">
            For inquiries regarding RFPs, capabilities briefings, or legislative tours, please contact our Government Affairs team directly.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#0A3161]/10 inline-block w-full md:w-auto text-left">
            <div className="space-y-2">
               <p className="text-sm text-[#0A3161]/70 uppercase font-bold tracking-wide">Primary Point of Contact</p>
               <p className="text-xl font-bold text-[#0A3161]">Ben</p>
               <p className="text-[#0A3161]/80">Director of Government Relations</p>
               <div className="h-px bg-[#0A3161]/10 my-4"></div>
               <p className="text-[#0A3161] font-medium">govt.relations@metalversefoundries.com</p>
               <p className="text-[#0A3161] font-medium">705 710 5505</p>
               <p className="text-xs text-[#0A3161]/60 mt-4">UEI: XJ9283KLS82</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}