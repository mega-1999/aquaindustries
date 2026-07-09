'use client'

import { Button } from '@/components/ui/button';
import {
  Hammer,
  Anvil,
  Layers,
  Cog,
  Beaker,
  ArrowRight,
  Construction
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // <--- Added Image import
import React from 'react';
import SearchWithSuggestions from './SearchWithSuggestions';

const metalCategories = [
  {
    title: "Cast Iron",
    description: "Durable and compressive strength for heavy-duty applications.",
    icon: Anvil,
    href: "/materials/cast-iron"
  },
  {
    title: "Ductile Iron",
    description: "High elasticity and impact resistance for critical components.",
    icon: Hammer,
    href: "/materials/ductile-iron"
  },
  {
    title: "Steel",
    description: "Versatile carbon and alloy steels for structural integrity.",
    icon: Construction,
    href: "/materials/steel"
  },
  {
    title: "Aluminum",
    description: "Lightweight and corrosion-resistant solutions.",
    icon: Layers,
    href: "/materials/aluminum"
  },
  {
    title: "Stainless Steel",
    description: "Superior corrosion resistance and hygiene standards.",
    icon: Beaker,
    href: "/materials/stainless"
  },
  {
    title: "Custom Projects",
    description: "No limits on metal selections. Tailored to your specs.",
    icon: Cog,
    href: "/custom-projects"
  }
];

const MaterialsHelpCenter = () => {
  return (
    <div className="min-h-screen bg-[#F9F9FB]">

      <section className="relative text-white py-24 md:py-32 px-4 text-center overflow-hidden">

        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src={'/assets/image16.jpg'}
            alt="Industrial background image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A3161]/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Leading Edge & Advanced Technologies
          </h1>
          <p className="text-gray-100 text-lg md:text-xl">
            Join the futuristic metal industries. Search our capabilities below.
          </p>

          <div className="mt-8 text-left">
            <SearchWithSuggestions />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metalCategories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 flex flex-col items-start"
            >
              <div className="mb-6 p-3 bg-red-50 rounded-lg group-hover:bg-[#B31942] transition-colors duration-300">
                <item.icon className="w-8 h-8 text-[#B31942] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B31942] text-xl transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mb-6 leading-relaxed grow">
                {item.description}
              </p>

              <div className="flex items-center text-[#B31942] font-semibold mt-auto  text-xl group-hover:translate-x-1 transition-transform">
                Explore Specs <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center py-12 pb-24">
        <p className="text-gray-600 mb-4">Can't find what you are looking for?</p>
        <Button className="bg-[#B31942] hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full">
          Contact Our Engineering Team
        </Button>
      </section>

    </div>
  );
};

export default MaterialsHelpCenter;
