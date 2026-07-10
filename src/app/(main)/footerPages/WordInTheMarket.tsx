'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Adapted content for METALSVERSE Foundries
const marketUpdates = [
  {
    id: 1,
    title: "METALSVERSE Foundries Quality Tests",
    description: "We test every casting batch for excellent tensile strength and durability to keep components and personnel safe under extreme conditions.",
    image: "/assets/image9.jpeg"
  },
  {
    id: 2,
    title: "Production Efficiency",
    description: "Our automated molding lines increase lifetime output and reduce lead times, ensuring your project stays on schedule.",
    image: "/assets/image10.jpeg"
  },
  {
    id: 3,
    title: "Enhancing Safety Standards",
    description: "Our foundry safety protocols are composed to have higher flash point protection, enhancing the safety of the component and surrounding workforce.",
    image: "/assets/image11.jpg"
  },
  {
    id: 4,
    title: "Diverse Product Range",
    description: "With our unique and entire product range, specific properties like heat resistance, superior finish, and longevity can be given priority.",
    image: "/assets/image12.jpg"
  },
  {
    id: 5,
    title: "Corrosion Resistance",
    description: "Specialized alloy coatings reduce the rate of corrosion, giving our municipal and marine castings a much longer lifespan.",
    image: "/assets/image13.jpg"
  },
  {
    id: 6,
    title: "Thermal Conductivity",
    description: "Industry best cooling properties are contained in our Aluminum blocks to improve powering and temperature parameters.",
    image: "/assets/image14.jpeg"
  }
];

export default function WordInTheMarket() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* === HEADER === */}
        {/* Red vertical line + Title */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-[#B31942]"></div>
          <h2 className="text-xl md:text-2xl font-normal text-[#B31942] uppercase tracking-wide">
            WORD IN THE MARKET
          </h2>
        </div>

        {/* === HORIZONTAL SCROLL LIST === */}
        <div className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
          {marketUpdates.map((item) => (
            <div 
              key={item.id} 
              className="min-w-[280px] md:min-w-[320px] w-[320px] shrink-0 bg-white rounded-lg snap-start group cursor-pointer"
            >
              
              {/* IMAGE WITH CURVED BOTTOM */}
              <div className="relative h-48 w-full overflow-hidden">
                <div 
                  className="w-full h-full relative overflow-hidden transition-transform duration-500 group-hover:scale-105"
                  // This inline style creates the specific "convex" curve at the bottom
                  style={{ borderRadius: '0 0 50% 50% / 0 0 30px 30px' }} 
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Dark overlay for contrast if needed */}
                  <div className="absolute inset-0 bg-[#0A3161]/10 group-hover:bg-[#0A3161]/0 transition-colors"></div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-6 pr-4">
                <h3 className="text-[#B31942] font-medium text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#0A3161]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
