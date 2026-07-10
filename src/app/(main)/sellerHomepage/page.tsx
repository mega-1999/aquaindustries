import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Anvil, Globe2, BarChart3, Factory } from 'lucide-react';
import AnimatedCounter from '@/components/ui/animated-counter';
import SellerTools from './SellerTools';
import HowItWorks from './HowItWorks';
import ProductCalculator from './ProductCalculator';
import EngagementAnalytics from './EngagementAnalytics';
import CommonQuestions from './CommonQuestions';
import SellerHeroSection from './RealTimeSupport';
import RealTimeSupport from './RealTimeSupport';
import VideoHero from '../transformation/VideoHero';
import PrivateStats from '../transformation/PrivateStats';

export default function PartnerProgramPage() {
  return (
    <div className="min-h-screen bg-white">

      <section className="w-full px-4 sm:px-6 lg:px-10 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">

          <div className="flex flex-col justify-center  py-16   z-10">
            <span className="text-[#0A3161]/70 font-bold tracking-widest uppercase text-sm">
              MEGA FOUNDRIES PARTNER PROGRAM
            </span>
            <span className="text-[#B31942] font-bold tracking-widest uppercase text-sm mb-4">
              Generations ahead with the next generation active
            </span>
            <h1 className="text-[30px] md:text-[32px] lg:text-[40px] font-extrabold text-[#0A3161] mb-6 leading-tight">
              Scale Your <br />
              <span className="text-[#B31942]">Manufacturing Reach</span> <br />
              Globally
            </h1>
            <p className="text-[#0A3161] text-xl mb-8 max-w-lg leading-relaxed">
              Join our integrated supply chain network. Leverage our advanced digital infrastructure to distribute high-grade castings to infrastructure projects across continents.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#B31942] hover:bg-red-800 text-white px-8 py-6 text-lg shadow-lg">
                Become a Partner
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg border-[#0A3161]/20">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-full w-full">
            <div className="absolute inset-0 bg-white">
              <Image
                src="/assets/image8.jpg"
                alt="Global Industrial Logistics"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-50 via-slate-50/20 to-transparent md:bg-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 bg-[#B31942]/5 rounded-full mb-2 group-hover:scale-110 transition-transform">
                <Anvil className="w-8 h-8 text-[#B31942]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[30px] font-extrabold text-[#0A3161]">
                <AnimatedCounter end={2500} suffix="+" />
              </h3>
              <p className="text-[#0A3161]/70 font-medium text-sm uppercase tracking-wide">Alloy Grades</p>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 bg-[#B31942]/5 rounded-full mb-2 group-hover:scale-110 transition-transform">
                <Factory className="w-8 h-8 text-[#B31942]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[30px] font-extrabold text-[#0A3161]">
                <AnimatedCounter end={850} />
              </h3>
              <p className="text-[#0A3161]/70 font-medium text-sm uppercase tracking-wide">Partner Foundries</p>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 bg-[#B31942]/5 rounded-full mb-2 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-[#B31942]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[30px] font-extrabold text-[#0A3161]">
                <AnimatedCounter end={12} suffix="M+" />
              </h3>
              <p className="text-[#0A3161]/70 font-medium text-sm uppercase tracking-wide">Tons Shipped</p>
            </div>

            <div className="flex flex-col items-center space-y-2 group">
              <div className="p-4 bg-[#B31942]/5 rounded-full mb-2 group-hover:scale-110 transition-transform">
                <Globe2 className="w-8 h-8 text-[#B31942]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[30px] font-extrabold text-[#0A3161]">
                <AnimatedCounter end={45} />
              </h3>
              <p className="text-[#0A3161]/70 font-medium text-sm uppercase tracking-wide">Export Countries</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 pb-32 bg-white border-t border-[#0A3161]/10">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h4 className="text-[#B31942] font-bold text-sm uppercase tracking-wider mb-3">
            Mega Foundries Digital Portal
          </h4>
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#0A3161] mb-6">
            Digitize Your Inventory & Streamline Procurement
          </h2>
          <p className="text-[#0A3161]/70 mb-16 max-w-2xl mx-auto text-xl">
            Manage multiple alloy specifications, track CAD revisions, and monitor global shipments in real-time with our integrated foundry management tool.
          </p>

          <div className="relative mx-auto max-w-5xl group cursor-pointer">

            <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-red-400 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition duration-500"></div>

            <div className="relative bg-[#0A3161] rounded-t-3xl p-[3%] shadow-2xl border-b border-[#0A3161]">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0A3161]/80 rounded-full z-20 shadow-inner"></div>

              <div className="relative bg-white rounded-md overflow-hidden aspect-16/10 border border-[#0A3161]">
                <Image
                  src="/assets/dashboard-screenshot.jpg"
                  alt="Foundry Management Dashboard"
                  fill
                  className="object-cover object-top"
                />

                <div className="absolute inset-0 bg-[#0A3161]/5/50 flex items-center justify-center">
                  <Button variant="secondary" className="shadow-lg">
                    View Live Demo
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative bg-neutral-300 h-6 md:h-4 w-full rounded-b-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] mx-auto border-t border-[#0A3161]/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-2 bg-neutral-400 rounded-b-md"></div>
            </div>

          </div>

        </div>
      </section>
      <SellerTools />
      <HowItWorks />
      <ProductCalculator />
      <EngagementAnalytics />
      <CommonQuestions />
      <RealTimeSupport />
    </div>
  );
}
