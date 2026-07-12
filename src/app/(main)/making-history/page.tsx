import React from 'react';
import { ArrowDownCircle, Trophy, Users, Globe, Building } from 'lucide-react';
import Image from 'next/image';

// --- DATA: Mock Data for Metalverse  Industries History ---
const HISTORY_DATA = [
  {
    year: "1985",
    title: " The Foundation",
    description: "Metalverse  Industries was established in Pittsburgh, PA, with a single blast furnace and a mission to forge the highest quality steel components for the American automotive industry.",
    image: "/assets/image1.jpeg" // Replace with real image path
  },
  {
    year: "1992",
    title: "Expansion to Aerospace",
    description: "After achieving ISO 9001 certification, we expanded our operations to supply critical alloy parts to major aerospace contractors, marking our entry into high-precision manufacturing.",
    image: "/assets/image2.jpeg"
  },
  {
    year: "2005",
    title: "Going Global",
    description: "We opened our first international facility in Germany, allowing us to serve the European market directly and increasing our global production capacity by 200%.",
    image: "/assets/image3.jpeg"
  },
  {
    year: "2018",
    title: "Sustainable Steel",
    description: "Metalverse  Industries committed to a greener future by retrofitting all plants with electric arc furnaces, reducing carbon emissions by 40% and setting a new industry standard.",
    image: "/assets/image4.jpeg"
  },
  {
    year: "2025",
    title: "The Next Era",
    description: "Today, we are pioneering AI-driven metallurgy and 3D metal printing, ensuring Metalverse  Industries remains the backbone of modern infrastructure.",
    image: "/assets/image5.jpeg"
  }
];

const STATS = [
  { label: "Years of Legacy", value: "40+", icon: Trophy },
  { label: "Global Facilities", value: "12", icon: Building },
  { label: "Team Members", value: "2,500", icon: Users },
  { label: "Countries Served", value: "35", icon: Globe },
];

export default function MakingHistoryPage() {
  return (
    <div className="min-h-screen bg-[#0A3161]/5 text-white font-sans">

      {/* === HERO SECTION === */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0A3161] text-white overflow-hidden">
        {/* Background Overlay (Simulating industrial dark mode) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-[#0A3161] opacity-90 z-0"></div>

        {/* Decorative 'Sparks' or Graphic (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/assets/image2.jpeg')]"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 border border-[#B31942] rounded text-[#B31942] text-xs font-bold tracking-widest uppercase">
            Since 1985
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            Making <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">History</span>
          </h1>
          <p className="text-lg md:text-xl text-[#0A3161]/60 max-w-2xl mx-auto leading-relaxed">
            From a single furnace in Pennsylvania to a global manufacturing powerhouse. Explore the milestones that forged Metalverse  Industries.
          </p>

          <div className="mt-10 animate-bounce">
            <ArrowDownCircle className="w-10 h-10 mx-auto text-[#0A3161]/80" />
          </div>
        </div>
      </section>

      {/* === STATS BAR === */}
      <section className="py-12 bg-white border-b border-[#0A3161]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="mb-3 p-3 bg-[#0A3161]/10 rounded-full group-hover:bg-[#B31942]/5 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#0A3161] group-hover:text-[#B31942]" />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-[#0A3161]">{stat.value}</span>
                <span className="text-xs uppercase tracking-wider text-[#0A3161]/70 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TIMELINE SECTION === */}
      <section className="py-20 bg-[#0A3161]/5 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Vertical Line (Hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-300 top-0"></div>

          <div className="space-y-16 md:space-y-24">
            {HISTORY_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>

                  {/* Timeline Dot (Center) */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[#B31942] border-4 border-white rounded-full shadow-lg z-10 mt-1.5 md:mt-0"></div>

                  {/* Date Badge (Mobile: Top Left, Desktop: Center Axis) */}
                  <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 -mt-12 md:-mt-0 md:items-center md:justify-center w-16 h-8 bg-[#0A3161] text-white text-xs font-bold rounded px-2 z-20 ${isEven ? 'md:-translate-x-[140%]' : 'md:translate-x-[40%]'}`}>
                    {item.year}
                  </div>

                  {/* Content Half */}
                  <div className="w-full md:w-1/2 md:px-12 pl-12 pr-0">
                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-[#0A3161]/10 hover:shadow-md transition-shadow">
                      {/* Mobile Year Badge */}
                      <span className="md:hidden inline-block bg-[#0A3161] text-white text-xs font-bold px-2 py-1 rounded mb-3">
                        {item.year}
                      </span>

                      <h3 className="text-xl md:text-2xl font-bold text-[#0A3161] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#0A3161]/80 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Image/Visual Half */}
                  <div className="w-full md:w-1/2 md:px-12 mt-6 md:mt-0 pl-12 md:pl-12">
                    <div className="aspect-video w-full bg-slate-200 rounded-xl overflow-hidden shadow-inner relative group">
                      {/* Placeholder for Image */}
                      <div className="absolute inset-0 flex items-center justify-center text-[#0A3161]/60 font-medium bg-[#0A3161]/10">

                        <Image
                          src={item.image}
                          alt={item.title}
                          fill />
                      </div>
                      {/* Overlay effect */}
                      <div className="absolute inset-0 bg-[#0A3161]/0 group-hover:bg-[#0A3161]/10 transition-all duration-300"></div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-[#0A3161] mb-4">Be Part of Our Future</h3>
            <p className="text-[#0A3161]/70 mb-8 max-w-lg mx-auto">
              We are constantly evolving. Join us as we forge the next chapter of Metalverse  Industries.
            </p>
            <button className="bg-[#B31942] hover:bg-[#B31942] text-white font-bold py-3 px-8 rounded shadow-lg transition-transform transform hover:-translate-y-1">
              View Careers
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
