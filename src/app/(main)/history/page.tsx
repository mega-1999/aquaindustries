import React from 'react';
import Image from 'next/image'; // Ensure you have images or remove this and use divs
import { Clock, Hammer, Globe2, Leaf, ArrowRight } from 'lucide-react';

const ERAS = [
  {
    period: "The Early Years (1985-1995)",
    title: "Forging the Foundation",
    icon: Hammer,
    content: "Founded by Robert Sterling in a defunct rail yard in Pittsburgh, Mega Foundries began with a single mission: to produce American steel that could outlast the competition. In these early days, the company focused exclusively on heavy rail components, establishing a reputation for unbreakable durability.",
    stat: "1 Plant Opened"
  },
  {
    period: "The Expansion (1996-2010)",
    title: "Crossing Oceans",
    icon: Globe2,
    content: "Recognizing the shift in global manufacturing, Mega Foundries made the bold decision to acquire facilities in Germany and Japan. This era marked our transition from a domestic supplier to a global logistics partner, allowing us to serve automotive giants on three continents.",
    stat: "Expanded to 4 Countries"
  },
  {
    period: "The Modern Era (2011-Present)",
    title: "Sustainable Innovation",
    icon: Leaf,
    content: "The definition of strength changed. It wasn't just about hardness anymore; it was about efficiency. We invested $500M into electric arc furnaces and AI-driven metallurgy, becoming the first foundry in our sector to achieve carbon-neutral production for specific alloy lines.",
    stat: "40% Carbon Reduction"
  }
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A3161] font-sans">

      {/* === HERO SECTION === */}
      <section className="relative py-24 bg-[#0A3161] text-white overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('/assets/image13.jpg')]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Our <span className="text-[#B31942]">Legacy</span>
            </h1>
            <p className="text-xl text-[#0A3161]/40 leading-relaxed">
              For four decades, Mega Foundries has been the silent backbone of modern infrastructure. This is the story of how we built trust, one pour at a time.
            </p>
          </div>

          {/* Quick Stat Box */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 min-w-[200px]">
            <div className="text-sm text-[#0A3161]/40 uppercase tracking-widest mb-1">Established</div>
            <div className="text-4xl font-mono font-bold text-white">1985</div>
          </div>
        </div>
      </section>

      {/* === NARRATIVE SECTION === */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Introduction Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A3161] mb-6">From Rust Belt to High Tech</h2>
            <p className="text-[#0A3161]/80 mb-6 leading-relaxed">
              The story of Mega Foundries is the story of American manufacturing resilience. When others shut down blast furnaces in the late 80s, we doubled down on quality. When the market demanded cheaper materials, we invested in stronger alloys.
            </p>
            <p className="text-[#0A3161]/80 mb-8 leading-relaxed">
              We believe that history isn't just about looking back—it's about understanding the foundation we stand on today. Every beam, every bolt, and every chassis we cast carries the DNA of 40 years of expertise.
            </p>

            <div className="flex items-center gap-4 text-sm font-bold text-[#0A3161]">
              <div className="w-12 h-1 bg-[#B31942]"></div>
              <span>READ THE CHAPTERS BELOW</span>
            </div>
          </div>

          {/* Right: Vintage Image Placeholder */}
          <div className="relative aspect-[4/3] bg-[#0A3161]/10 rounded-lg overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Grayscale filter for "History" look */}
            <div className="absolute inset-0 bg-[#0A3161]/10 mix-blend-multiply z-10"></div>
            <div className="w-full h-full bg-slate-300 flex items-center justify-center text-[#0A3161]/70 font-bold">
              <Image
                src={'/assets/image3.jpeg'}
                alt="Case Study Image"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Caption Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold text-[#0A3161] z-20 shadow-sm">
              The Original Pittsburgh Yard
            </div>
          </div>

        </div>
      </section>

      {/* === ERAS / CHAPTERS === */}
      <section className="py-20 bg-[#0A3161]/5 border-t border-[#0A3161]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {ERAS.map((era, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#0A3161]/10 hover:shadow-xl hover:border-red-100 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8">

                {/* Left: Icon & Date */}
                <div className="md:w-1/4 flex flex-col items-start border-b md:border-b-0 md:border-r border-[#0A3161]/10 pb-6 md:pb-0 md:pr-6">
                  <div className="w-12 h-12 bg-[#B31942]/5 text-[#B31942] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#B31942] group-hover:text-white transition-colors">
                    <era.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-bold text-[#0A3161]/60 uppercase tracking-wide">{era.period}</span>
                </div>

                {/* Right: Content */}
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-[#0A3161] mb-4 group-hover:text-[#B31942] transition-colors">
                    {era.title}
                  </h3>
                  <p className="text-[#0A3161]/80 leading-relaxed mb-6">
                    {era.content}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-bold bg-[#0A3161]/10 px-3 py-1.5 rounded text-[#0A3161]">
                    <TrendingUp className="w-3 h-3" />
                    Key Stat: {era.stat}
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* === FUTURE TEASER === */}
      <section className="py-20 bg-[#0A3161] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Clock className="w-12 h-12 mx-auto text-[#B31942] mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The History of Tomorrow</h2>
          <p className="text-[#0A3161]/60 text-lg mb-8">
            We aren't done writing our story. Join us as we pioneer the next generation of aerospace composites.
          </p>
          <button className="bg-[#B31942] hover:bg-[#B31942] text-white font-bold py-3 px-8 rounded transition-all">
            See Our Future Vision
          </button>
        </div>
      </section>

    </div>
  );
}

// Icon helper for the stats
function TrendingUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24"
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className={className}
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );
}