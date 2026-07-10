import React from 'react';
import { Heart, BookOpen, Sprout, Users, ArrowRight, HandHeart, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PILLARS = [
  {
    icon: BookOpen,
    title: "STEM Education",
    desc: "We invest in the next generation of engineers. The METALSVERSE Foundation provides robotics grants and welding scholarships to 50+ high schools across the Rust Belt.",
    color: "bg-blue-50 text-blue-700"
  },
  {
    icon: Sprout,
    title: "Environmental Stewardship",
    desc: "Beyond our factories, we fund local reforestation projects and watershed cleanup initiatives to ensure our communities remain green and healthy.",
    color: "bg-green-50 text-green-700"
  },
  {
    icon: Users,
    title: "Veteran Reintegration",
    desc: "We partner with 'Helmets to Hardhats' to provide training, mental health support, and career placement for returning service members.",
    color: "bg-[#B31942]/5 text-[#B31942]"
  }
];

const IMPACT_STATS = [
  { label: "Scholarships Awarded", value: "$2.5M+" },
  { label: "Volunteer Hours", value: "15,000" },
  { label: "Non-Profits Supported", value: "120+" },
  { label: "Trees Planted", value: "50k" },
];

export default function MegaFoundationPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A3161] font-sans">

      {/* === HERO SECTION === */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0A3161] text-white overflow-hidden">
        {/* Background: Warm, community focused image overlay */}
        <div className="absolute inset-0 bg-[url('/assets/image4.jpg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-red-900/40"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <Heart className="w-3 h-3 text-red-400" />
            The Philanthropic Arm of METALSVERSE Foundries
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Forging Stronger <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">Communities</span>
          </h1>
          <p className="text-xl text-[#0A3161]/40 max-w-2xl mx-auto leading-relaxed mb-8">
            We believe that a strong company relies on a strong community. Since 2005, the METALSVERSE Foundation has been dedicated to giving back to the towns and cities that build our products.
          </p>
          <button className="bg-[#B31942] hover:bg-[#B31942] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
            Apply for a Grant
          </button>
        </div>
      </section>

      {/* === IMPACT COUNTER === */}
      <section className="bg-white border-b border-[#0A3161]/10 relative -mt-10 z-20 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="p-8 text-center bg-white group hover:bg-[#0A3161]/5 transition-colors">
              <div className="text-3xl md:text-4xl font-extrabold text-[#0A3161] mb-2 group-hover:text-[#B31942] transition-colors">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-[#0A3161]/70 font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === OUR PILLARS === */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A3161]">Our Mission Pillars</h2>
          <p className="mt-4 text-[#0A3161]/80 max-w-2xl mx-auto">
            Our giving is focused on three core areas where we believe we can make the most significant, long-term impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-[#0A3161]/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${pillar.color} mb-6`}>
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#0A3161] mb-4">{pillar.title}</h3>
              <p className="text-[#0A3161]/80 leading-relaxed text-sm">
                {pillar.desc}
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#0A3161] mt-6 hover:text-[#B31942] group">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* === FEATURED STORY === */}
      <section className="bg-[#0A3161]/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Image Box */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-[#0A3161]/70 font-bold">
                  <Image
                    src={'/assets/image8.jpg'}
                    alt="Case Study Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-[#0A3161]/10 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Calendar className="w-5 h-5 text-yellow-700" />
                  </div>
                  <div>
                    <p className="text-xs text-[#0A3161]/70 uppercase font-bold">Next Event</p>
                    <p className="text-sm font-bold text-[#0A3161]">Robotics Final: Dec 12</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Box */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded mb-4">
                Success Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A3161] mb-6">
                The "Iron Minds" Initiative
              </h2>
              <p className="text-[#0A3161]/80 mb-6 leading-relaxed">
                Last year, METALSVERSE Foundation launched a pilot program in Detroit high schools to teach advanced CAD design and metallurgy.
              </p>
              <p className="text-[#0A3161]/80 mb-8 leading-relaxed">
                The result? 12 graduating seniors received full-ride engineering scholarships, and another 20 secured apprenticeships within our facilities. We are proving that American manufacturing has a bright, high-tech future.
              </p>
              <button className="text-[#B31942] font-bold border-b-2 border-[#B31942] pb-1 hover:text-red-800 hover:border-red-800 transition-colors">
                Read Full Story
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* === GRANT APPLICATION / CTA === */}
      <section className="py-24 bg-[#0A3161] text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B31942] opacity-10 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <HandHeart className="w-16 h-16 mx-auto text-[#B31942] mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Funding for a Local Project?</h2>
          <p className="text-xl text-[#0A3161]/40 mb-10 leading-relaxed">
            We review grant applications quarterly. If your non-profit aligns with our pillars of Education, Environment, or Veteran Support, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B31942] hover:bg-[#B31942] text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">
              Download Grant Guidelines
            </button>
            <button className="bg-transparent border border-white text-white font-bold py-4 px-10 rounded-lg hover:bg-white hover:text-[#0A3161] transition-colors">
              Contact Foundation Director
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}