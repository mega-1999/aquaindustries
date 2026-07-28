"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ArrowRight, Layers, Cpu, Wrench, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MetalProduct {
  id: string;
  title: string;
  category: string;
  spec: string;
  description: string;
  image: string;
  tags: string[];
}

const OTHER_PRODUCTS: MetalProduct[] = [
  {
    id: "structural-beams",
    title: "Heavy Structural Steel Beams & Columns",
    category: "Structural Fabrication",
    spec: "ASTM A992 / A572 Grade 50",
    description: "Wide-flange W-shapes and custom welded plate girders built for high-load commercial infrastructure, bridges, and industrial framing.",
    image: "/assets/image1.jpeg",
    tags: ["AASHTO Certified", "Custom Lengths", "Galvanized Finish"]
  },
  {
    id: "stainless-tubing",
    title: "Precision Stainless & Alloy Tubing",
    category: "Specialty Alloys",
    spec: "304L / 316L / Duplex 2205",
    description: "Seamless and welded high-pressure corrosion-resistant piping matrices for chemical, marine, and municipal water processing.",
    image: "/assets/image3.jpeg",
    tags: ["Seamless", "Corrosion Resistant", "High Temp"]
  },
  {
    id: "custom-forgings",
    title: "Heavy Industrial Open-Die Forgings",
    category: "Custom Foundry",
    spec: "Carbon & Alloy Steel / Titanium",
    description: "Forged rings, shafts, and custom discs subjected to intense thermal treatment for extreme fatigue and impact strength.",
    image: "/assets/image4.jpg",
    tags: ["High Impact", "Custom Dies", "NDT Tested"]
  },
  {
    id: "architectural-mesh",
    title: "Expanded & Perforated Metal Panels",
    category: "Architectural & Safety",
    spec: "Aluminum / Stainless Steel",
    description: "Laser-cut perforated cladding and heavy-gauge security mesh designed for ventilation, security screens, and modern facades.",
    image: "/assets/image5.jpeg",
    tags: ["Laser Cut", "Custom Pattern", "ADA Compliant"]
  }
];

export default function OtherMetalProducts() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", "Structural Fabrication", "Specialty Alloys", "Custom Foundry", "Architectural & Safety"];

  const filteredProducts = selectedCategory === "ALL" 
    ? OTHER_PRODUCTS 
    : OTHER_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section className="bg-white text-[#0A3161] py-20 font-sans border-b border-[#0A3161]/10 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-10 space-y-12">

        {/* --- HEADER --- */}
        <div className="border-b border-[#0A3161]/20 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 w-full">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-[0.4em] font-black text-[#B31942] block">
                Extended Metallurgy Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0A3161] leading-none">
              Other Metal <span className="text-[#B31942]">Products & Solutions</span>
            </h2>
          </div>
          <p className="text-[#0A3161]/70 text-base font-light leading-relaxed max-w-xl">
            Beyond standard infrastructure castings, Metalverse delivers precision-engineered structural alloys, custom forgings, and specialized fabrication components built to strict ASTM standards.
          </p>
        </div>

        {/* --- CATEGORY FILTER TABS --- */}
        <div className="flex flex-wrap gap-2 border-b border-[#0A3161]/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-[#0A3161] text-white border-[#0A3161]"
                  : "bg-gray-50 text-[#0A3161]/70 border-[#0A3161]/15 hover:border-[#B31942] hover:text-[#B31942]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-[#0A3161]/5 border border-[#0A3161]/15 overflow-hidden group hover:border-[#B31942] hover:bg-white transition-all duration-300 shadow-sm"
            >
              {/* Product Image Window */}
              <div className="relative w-full aspect-[4/3] bg-[#0A3161] overflow-hidden border-b border-[#0A3161]/10">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0A3161]/90 text-white text-[9px] font-mono uppercase font-bold tracking-wider px-2 py-1 backdrop-blur-sm border border-white/10">
                  {product.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-[#B31942] font-bold uppercase tracking-wider">
                    SPEC: {product.spec}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#0A3161] group-hover:text-[#B31942] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#0A3161]/70 font-light leading-relaxed pt-1">
                    {product.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-[9px] font-mono uppercase tracking-wider border-[#0A3161]/20 text-[#0A3161]/80 rounded-none bg-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="pt-4 border-t border-[#0A3161]/10">
                  <Button className="w-full bg-[#0A3161] hover:bg-[#B31942] text-white font-black uppercase tracking-widest text-[11px] h-10 rounded-none transition-colors duration-200 flex items-center justify-center gap-2">
                    Request Custom Spec <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- CUSTOM METALLURGY CAPABILITIES BANNER --- */}
        <div className="bg-[#0A3161] text-white p-8 md:p-12 border border-[#0A3161] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-[#B31942]">
              <Factory className="w-5 h-5" />
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-white">
                Bespoke Alloy & Casting Engineering
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Need Non-Standard Alloys or Custom Metallurgy?
            </h3>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              Our engineering team works directly from your CAD/BIM specifications to create specialized molds, heat treatments, and custom structural profiles tailored to your project.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
            <Button className="bg-[#B31942] hover:bg-white hover:text-[#0A3161] text-white font-black uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-colors duration-200">
              Submit CAD / Spec Sheets
            </Button>
            <Button variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white hover:text-[#0A3161] font-black uppercase tracking-widest text-xs h-12 px-8 rounded-none transition-colors duration-200">
              Talk to a Metallurgist
            </Button>
          </div>
        </div>

        {/* --- FOOTER TRUST METRICS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#0A3161]/15 w-full text-center md:text-left">
          <div className="p-4 bg-[#0A3161]/5 border border-[#0A3161]/10 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#B31942] shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-[#0A3161]/50 block">Quality Standard</span>
              <span className="text-xs font-bold text-[#0A3161] uppercase">ISO 9001 & ASTM Compliant</span>
            </div>
          </div>
          <div className="p-4 bg-[#0A3161]/5 border border-[#0A3161]/10 flex items-center gap-3">
            <Cpu className="w-6 h-6 text-[#B31942] shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-[#0A3161]/50 block">Testing Protocol</span>
              <span className="text-xs font-bold text-[#0A3161] uppercase">100% FEA & Ultrasonic NDT Checked</span>
            </div>
          </div>
          <div className="p-4 bg-[#0A3161]/5 border border-[#0A3161]/10 flex items-center gap-3">
            <Wrench className="w-6 h-6 text-[#B31942] shrink-0" />
            <div>
              <span className="text-[10px] font-mono uppercase text-[#0A3161]/50 block">Delivery Network</span>
              <span className="text-xs font-bold text-[#0A3161] uppercase">US & Canada Direct Shipping</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}