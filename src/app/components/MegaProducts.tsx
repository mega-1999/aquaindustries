"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/materialsData';

export const MegaProducts = () => {
  return (
    <section className="py-24 bg-white overflow-hidden w-full px-4 sm:px-6 lg:px-10">
      <div className="w-full">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-l-4 border-[#B31942] pl-6"
        >
          <h2 className="text-5xl font-black text-[#0A3161] tracking-tighter uppercase">
            New products <span className="text-[#B31942]">Innovation's</span>
          </h2>
          <p className="text-[#0A3161]/70 mt-4 text-lg max-w-xl">
            Precision-engineered casting solutions for the world's most demanding infrastructure.
          </p>
        </motion.div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((item, index) => {
            const IconComponent = item.icon;
            const videoRef = useRef<HTMLVideoElement>(null);

            // Conditional hover play only activates if element is a video asset
            const handleMouseEnter = () => {
              if (!item.image && videoRef.current) {
                videoRef.current.play().catch((err) => console.log("Video track blocked:", err));
              }
            };

            const handleMouseLeave = () => {
              if (!item.image && videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
              }
            };

            return (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(10,49,97,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(204,34,33,0.2)] transition-all duration-500"
              >
                {/* Media Container Box */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  
                  {item.image ? (
                    /* STATIC IMAGE MODE */
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      priority={index < 3}
                    />
                  ) : (
                    /* INTERACTIVE HOVER VIDEO MODE */
                    <video
                      ref={videoRef}
                      src={item.video}
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105"
                    />
                  )}

                  {/* Dark Gradient Mask Overlay Shield */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A3161]/80 via-[#0A3161]/20 to-transparent pointer-events-none" />
                  
                  {/* Category Status Badge */}
                  <div className={`absolute bottom-4 left-4 p-3 rounded-xl text-white shadow-lg ${item.color}`}>
                    <IconComponent size={24} />
                  </div>
                </div>

                {/* Main Content Info Block */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#0A3161] mb-3 group-hover:text-[#B31942] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#0A3161]/80 mb-8 flex-grow leading-relaxed font-light">
                    {item.description}
                  </p>
                  
                  <Link
                    href={`/categories/${item.slug}`}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-[#0A3161]/5 rounded-2xl text-[#B31942] font-black uppercase tracking-widest text-xs hover:bg-[#B31942] hover:text-white transition-all duration-300"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
