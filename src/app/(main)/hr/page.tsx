import React from 'react';
import Link from 'next/link';
import {
  Heart,
  TrendingUp,
  Shield,
  GraduationCap,
  Users,
  Clock,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const BENEFITS = [
  {
    icon: Heart,
    title: "Comprehensive Health",
    desc: "Top-tier medical, dental, and vision coverage for you and your family starting day one."
  },
  {
    icon: TrendingUp,
    title: "401(k) Matching",
    desc: "We match 100% of the first 6% of your contributions to help you build a secure future."
  },
  {
    icon: Shield,
    title: "Safety First Culture",
    desc: "Industry-leading safety protocols and equipment. We prioritize your well-being above production."
  },
  {
    icon: GraduationCap,
    title: "Tuition Reimbursement",
    desc: "We invest in our people. Get reimbursed for certifications and degrees relevant to your field."
  },
];

const DEPARTMENTS = [
  {
    title: "Production & Foundry",
    roleCount: 12,
    desc: "The heart of our operation. Casters, molders, and machine operators.",
    color: "bg-[#B31942]/5 text-[#B31942]"
  },
  {
    title: "Engineering & R&D",
    roleCount: 5,
    desc: "Metallurgists and systems engineers driving our next innovation.",
    color: "bg-blue-50 text-blue-700"
  },
  {
    title: "Logistics & Supply Chain",
    roleCount: 3,
    desc: "Keeping the raw materials moving and the finished products shipping.",
    color: "bg-amber-50 text-amber-700"
  },
  {
    title: "Corporate & Admin",
    roleCount: 4,
    desc: "HR, Finance, and Sales roles supporting the global mission.",
    color: "bg-[#0A3161]/5 text-white"
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white text-[#0A3161] font-sans">

      {/* === HERO SECTION === */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#0A3161] text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-[#0A3161]">
          {/* Replace with <Image> of workers in safety gear */}
          <div className="absolute inset-0 bg-[url('/assets/image14.jpeg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 bg-[#B31942] rounded text-white text-xs font-bold tracking-widest uppercase">
            Now Hiring
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Build a Career of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Steel</span>
          </h1>
          <p className="text-xl text-[#0A3161]/40 max-w-2xl mx-auto mb-8">
            Join the team that builds the infrastructure of the modern world. Stable jobs, competitive pay, and a legacy you can be proud of.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#B31942] hover:bg-[#B31942] text-white font-bold py-3 px-8 rounded transition-transform transform hover:-translate-y-1">
              View Open Positions
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded backdrop-blur-sm transition-colors">
              Employee Benefits
            </button>
          </div>
        </div>
      </section>

      {/* === VALUES / CULTURE === */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#0A3161] mb-4">Why Mega Foundries?</h2>
          <p className="text-[#0A3161]/80 max-w-2xl mx-auto mb-16">
            We don't just cast metal; we forge careers. Our culture is built on respect, safety, and the belief that every employee contributes to our success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#0A3161]/5 rounded-xl border border-[#0A3161]/10 hover:shadow-lg transition-shadow text-left">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-[#B31942]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0A3161] mb-2">{item.title}</h3>
                <p className="text-sm text-[#0A3161]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DEPARTMENTS / JOB CATEGORIES === */}
      <section className="py-20 bg-[#0A3161]/5 border-y border-[#0A3161]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0A3161]">Open Roles</h2>
              <p className="mt-2 text-[#0A3161]/80">Find where you fit in our organization.</p>
            </div>
            <Link href="/careers/all" className="hidden md:flex items-center gap-2 text-[#B31942] font-bold hover:text-[#B31942]">
              View All 24 Openings <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DEPARTMENTS.map((dept, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-6 rounded-xl border border-[#0A3161]/10 hover:border-red-200 hover:shadow-md transition-all cursor-pointer group">
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 ${dept.color} mb-4 sm:mb-0 sm:mr-6`}>
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#0A3161] group-hover:text-[#B31942] transition-colors">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-[#0A3161]/70 mt-1 mb-2">
                    {dept.desc}
                  </p>
                  <span className="inline-flex items-center text-xs font-bold text-[#0A3161]/60 bg-[#0A3161]/10 px-2 py-1 rounded">
                    {dept.roleCount} Positions Available
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all text-[#0A3161]/60">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/careers/all" className="text-[#B31942] font-bold hover:text-[#B31942]">
              View All 24 Openings &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* === EMPLOYEE TESTIMONIAL / SPOTLIGHT === */}
      <section className="py-20 bg-[#0A3161] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">

            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/3] bg-[#0A3161] rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center text-[#0A3161]/70">
                  <Image
                    src={'/assets/image8.jpg'}
                    alt="Case Study Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-2 text-yellow-500 mb-4">
                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
                <span className="text-[#0A3161]/60 text-sm ml-2">Employee since 2012</span>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-6">
                "I started as a shift operator 12 years ago. Mega Foundries paid for my engineering degree, and now I lead the Quality Control division. This is a place where hard work actually pays off."
              </blockquote>
              <div>
                <cite className="not-italic font-bold text-white text-lg block">David Miller</cite>
                <span className="text-red-400 text-sm">Director of Quality Control</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* === FOOTER CTA === */}
      <section className="py-24 bg-[#B31942] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Team?</h2>
          <p className="text-red-100 text-lg mb-8">
            Our application process is simple and transparent. Start by browsing our open roles today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#B31942] font-bold py-3 px-8 rounded hover:bg-[#0A3161]/10 transition-colors shadow-lg">
              Browse Openings
            </button>
            <button className="bg-[#B31942] border border-[#B31942] text-white font-bold py-3 px-8 rounded hover:bg-red-800 transition-colors">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}