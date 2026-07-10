"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, User, MessageSquare } from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "ductile-iron-vs-cast-iron",
    category: "Metallurgy",
    title: "The Molecular Shift: Why Ductile Iron is Replacing Traditional Castings",
    excerpt: "An in-depth structural analysis of nodular graphite formation and how Fe 50007 classification provides exceptional yield strength under extreme seismic stress profiles.",
    date: "June 18, 2026",
    author: "Dr. Marcus Vance",
    readTime: "6 min read",
    image: "/assets/image1.jpeg"
  },
  {
    id: "2",
    slug: "heavy-traffic-infrastructure-standards",
    category: "Infrastructure",
    title: "90-Ton Load Requirements in High-Velocity Transportation Hubs",
    excerpt: "Breaking down class F900 testing parameters. How modern airport dockyards deploy heavy industrial castings to manage stress distribution from aircraft taxiways.",
    date: "May 24, 2026",
    author: "Sarah Jenkins, PE",
    readTime: "8 min read",
    image: "/assets/image2.jpeg"
  },
  {
    id: "3",
    slug: "foundry-sustainability-carbon-reduction",
    category: "Engineering",
    title: "The Green Hearth: Precision Melting & Zero-Waste Mold Castings",
    excerpt: "How automated sand-reclamation technologies and electric arc furnace upgrades are reshaping structural iron production without sacrificing tensile rating profiles.",
    date: "May 02, 2026",
    author: "Chief Engineer Ben",
    readTime: "5 min read",
    image: "/assets/image3.jpeg"
  }
];

export default function MegaBlog() {
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <section className="bg-[#0A3161] text-white py-24 px-4 md:px-8 font-sans border-t border-zinc-900 overflow-hidden">
      <div className="">
        
        {/* Unconventional Header: Massive Side-by-Side Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#0A3161] pb-12 mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-black text-[#B31942] block mb-4">
              Foundry Insights & Engineering
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              The Melt <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-700">
                Logistics
              </span>
            </h2>
          </div>
          <p className="text-[#0A3161]/70 text-sm max-w-sm font-medium leading-relaxed">
            Raw industrial perspectives, deep metallurgical studies, and infrastructure updates directly from the manufacturing floor of Mega Foundries.
          </p>
        </div>

        {/* The Asymmetrical Timeline Stream */}
        <div className="relative flex flex-col">
          {BLOG_POSTS.map((post, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={post.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 pt-10 pb-12 border-b border-zinc-900 last:border-0 transition-all duration-500"
                onMouseEnter={() => setActiveHover(post.id)}
                onMouseLeave={() => setActiveHover(null)}
              >
                {/* 1. Large Index Indicator + Category Accent */}
                <div className="lg:col-span-2 mb-4 lg:mb-0 flex flex-row lg:flex-col justify-between lg:justify-start gap-2">
                  <span className="text-4xl font-black tracking-tighter text-[#0A3161] group-hover:text-[#B31942] transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#B31942] self-center lg:self-start bg-[#B31942]/10 px-2 py-1 rounded-sm lg:mt-2">
                    {post.category}
                  </span>
                </div>

                {/* 2. Main Textual Segment */}
                <div className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-10">
                  {/* Meta Details Row */}
                  <div className="flex flex-wrap gap-4 text-xs text-[#0A3161]/70 mb-3 font-mono">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#B31942]" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.slug}`} className="inline-block group-hover:text-[#B31942] transition-colors duration-200">
                    <h3 className="text-xl md:text-3xl font-bold tracking-tight leading-snug text-white mb-4">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-[#0A3161]/60 text-sm leading-relaxed max-w-xl font-light">
                    {post.excerpt}
                  </p>
                </div>

                {/* 3. Dynamic Interactive Preview Window */}
                <div className="lg:col-span-4 mt-6 lg:mt-0 flex items-center justify-end relative h-48 lg:h-auto">
                  <div className="w-full h-full max-h-[160px] lg:max-h-none lg:w-4/5 rounded-sm overflow-hidden bg-[#0A3161] border border-[#0A3161] relative shadow-2xl transition-all duration-500 group-hover:border-[#B31942] group-hover:scale-[1.02]">
                    {/* Dark gradient overlay matching layout colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3161] via-transparent to-transparent z-10 opacity-70" />
                    
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700 ease-in-out"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/400x250/141414/cc2221?text=Mega+Foundry+Log";
                      }}
                    />

                    {/* Industrial Action Button Floating in Corner */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-[#B31942] text-white rounded-full flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
