'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {  Handshake, ListPlus, Globe, MapPinCheckInsideIcon } from 'lucide-react';

const features = [
  {
    icon: MapPinCheckInsideIcon,
    title: "Connect with Verified Buyers",
    description: "Engage only with authenticated, serious buyers. We filter out the noise so you focus on real opportunities."
  },
  {
    icon: Handshake,
    title: "Personal Support",
    description: "Get a dedicated partner to guide you through the platform. We're here to help you succeed—every step of the way."
  },
  {
    icon: ListPlus,
    title: "Free Listing",
    description: "Upload your products at no cost. Create and preview your listings—no payment needed."
  },
  {
    icon: Globe,
    title: "Reach Buyers Globally",
    description: "Gain exposure to thousands of industrial buyers worldwide. Your machines get discovered by the right audience, everywhere."
  }
];

export default function StartSelling() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A3161]">
            Start Selling Smarter with <span className="text-[#B31942]">Mega Foundries?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* === LEFT: IMAGE === */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/image18.jpeg" // Replace with your image
              alt="Two business men shaking hands in a warehouse"
              fill
              className="object-cover"
              priority
            />
            {/* Optional subtle overlay */}
            <div className="absolute inset-0 bg-[#0A3161]/10"></div>
          </div>

          {/* === RIGHT: FEATURES GRID === */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start">
                  {/* Icon */}
                  <feature.icon className="w-10 h-10 text-[#B31942] mb-4" strokeWidth={2} />
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0A3161] mb-3">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#0A3161]/80 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center lg:text-right">
              <Link href="/seller-registration">
                <Button className="bg-[#B31942] hover:bg-[#B31942] text-white font-bold px-8 py-6 text-lg rounded-md shadow-md transition-transform hover:-translate-y-1">
                  Join As Supplier
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
