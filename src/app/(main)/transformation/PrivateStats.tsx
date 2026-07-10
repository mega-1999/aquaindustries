'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  FileBadge, // For Patents
  Factory,   // For Foundries
  Hammer,    // For Forging
  Wrench,    // For Fabricators
  Settings,  // For Machine Shops
  Layers,    // For Assembly
  PenTool,   // For Mold Design
  Grid       // For Pattern Shops
} from 'lucide-react';

const statsData = [
  { id: 1, label: "Patents", count: "0", icon: FileBadge }, // Patents FIRST
  { id: 2, label: "Foundries", count: "0", icon: Factory },
  { id: 3, label: "Forging Units", count: "0", icon: Hammer },
  { id: 4, label: "Fabricators", count: "0", icon: Wrench },
  { id: 5, label: "Machine Shops", count: "0", icon: Settings },
  { id: 6, label: "Assembly Units", count: "0", icon: Layers },
  { id: 7, label: "Mold Designs", count: "0", icon: PenTool },
  { id: 8, label: "Pattern Shops", count: "0", icon: Grid },
];

export default function PrivateStats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A3161] mb-4">
            Our <span className="text-[#B31942]">Stats</span>
          </h2> 
          <p className="text-[#0A3161]/60 text-sm italic uppercase tracking-wide">
            Stats & Facts... Not for public display. Available to members only.
          </p>
        </div>
 
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center p-6 bg-[#0A3161]/5 rounded-xl border border-[#0A3161]/10 hover:shadow-md transition-shadow">
        
              <div className="mb-4 p-3 bg-[#B31942]/5 rounded-full">
                <stat.icon className="w-8 h-8 text-[#B31942]" strokeWidth={1.5} />
              </div>
               
              <h3 className="text-4xl font-extrabold text-[#0A3161] mb-2">
                {stat.count}
              </h3>
               
              <p className="text-[#0A3161]/80 font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
 
        <div className="max-w-2xl mx-auto text-center bg-[#0A3161] text-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl font-bold mb-2">Be the first to know.</h3>
          <p className="text-[#0A3161]/60 mb-8">Subscribe to get full access to our network stats.</p>
          
          <form className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-[#0A3161]/70 h-12"
            />
            <Button className="bg-[#B31942] hover:bg-[#B31942] h-12 px-8 font-bold">
              Subscribe
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}
