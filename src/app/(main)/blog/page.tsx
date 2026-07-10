'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { blogPosts } from '@/lib/newsData';

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Red Accent */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-[#B31942] font-bold text-xs uppercase tracking-widest block mb-2">
              Knowledge Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3161]">
              Latest <span className="text-[#B31942]">Insights</span>
            </h2>
          </div>
          <Link href="/blog" className="hidden md:block text-sm font-semibold text-[#0A3161]/80 hover:text-[#B31942] transition-colors">
            View All Articles &rarr;
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.slug}`} // Link to the dynamic blog page
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-transparent hover:border-[#0A3161]/10 hover:shadow-lg transition-all duration-300"
            >
              
              {/* Image with Zoom Effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A3161]/10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Date Badge over Image */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#B31942] shadow-sm">
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col grow p-5">
                
                {/* Author Meta */}
                <div className="flex items-center text-xs text-[#0A3161]/60 mb-3">
                  <User className="w-3 h-3 mr-1" />
                  {post.author}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0A3161] mb-3 line-clamp-2 group-hover:text-[#B31942] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#0A3161]/80 leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#B31942] group-hover:underline">
                    Read Article
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
