// src/components/FeatureBlockItem.tsx

import React from 'react';
import Image from 'next/image';
import { FeatureBlockContent } from '../(main)/our-values/content';

interface FeatureBlockItemProps {
  data: FeatureBlockContent;
  /** If true, the image will be on the left and the text on the right. */
  imageOnLeft?: boolean;
  className?: string;
}

export function FeatureBlockItem({ data, imageOnLeft = false, className }: FeatureBlockItemProps) {

  // Determine the order for desktop view based on the imageOnLeft prop
  const imageOrderClass = imageOnLeft ? 'md:order-1' : 'md:order-2';
  const textOrderClass = imageOnLeft ? 'md:order-2' : 'md:order-1';

  return (
    // Outer section wrapper with responsive padding
    <section className={`w-full px-4 sm:px-6 lg:px-10 py-8 md:py-12 ${className}`}>

      {/* Grid Container: gap-8 on mobile, gap-20 on desktop */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center mx-auto'>

        {/* 1. Text Content Column */}
        <div className={`order-2 ${textOrderClass}`}>

          {/* Main Heading and Subtitle */}
          <div className='mb-6 md:mb-10'>
            {/* Mobile: text-2xl | Tablet: text-3xl | Desktop: text-4xl */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A3161] leading-tight'>
              {data.headline}
            </h2>
            {/* Mobile: text-sm | Desktop: text-base */}
            <p className='mt-3 md:mt-4 text-sm sm:text-base text-[#0A3161]/80'>
              {data.tagline}
            </p>
          </div>

          {/* Features List */}
          <div className='space-y-6 md:space-y-8'>
            {data.features.map((item, index) => (
              <div key={index} className='flex gap-3 md:gap-4'>

                {/* Icon Container */}
                <div className='shrink-0 pt-1'>
                  {/* Mobile: 5x5 (20px) | Desktop: 6x6 (24px) */}
                  <item.icon className='h-5 w-5 md:h-6 md:w-6 text-[#0A3161]' />
                </div>

                {/* Text Container */}
                <div>
                  {/* Mobile: text-base (16px) | Desktop: text-lg (18px) */}
                  <h3 className='text-base sm:text-lg font-bold text-[#0A3161]'>
                    {item.title}
                  </h3>
                  {/* Mobile: text-sm (14px) */}
                  <p className='mt-1 text-sm text-[#0A3161]/80 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Image Column */}
        <div className={`order-1 ${imageOrderClass}`}>
          <div className="relative w-full aspect-[4/3] rounded-lg shadow-2xl overflow-hidden">
            <Image
              src={data.imgSrc}
              alt={data.headline}
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-lg'
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}