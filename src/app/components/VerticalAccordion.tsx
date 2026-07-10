'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { 
  Zap, Settings, Cuboid, Sun, Droplets, Cog, Wrench, 
  Anchor, Flame, Building, Bolt, Shield, Hammer 
} from 'lucide-react';

// --- DATA MODEL ---
interface AccordionItem {
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    color: string; 
    icon?: React.ElementType;
}

// 16 Items based on your Mega Products / Industrial Data
const items: AccordionItem[] = [
    {
        id: "1",
        category: "Irrigation",
        title: "Water Control Systems",
        description: "Smart water flow management components designed for precise control and regulation.",
        image: "/assets/image10.jpeg",
        color: "bg-[#B31942]", // Active Red
        icon: Zap
    },
    {
        id: "2",
        category: "Earth Moving",
        title: "Bucket Teeth & Adaptors",
        description: "High-strength bucket teeth engineered for superior digging performance.",
        image: "/assets/image1.jpeg",
        color: "bg-[#B31942]",
        icon: Settings
    },
    {
        id: "3",
        category: "Cathodic",
        title: "Zinc Anodes Protection",
        description: "High-purity zinc and aluminium cast anodes for corrosion prevention.",
        image: "/assets/image18.jpeg",
        color: "bg-[#B31942]",
        icon: Shield
    },
    // {
    //     id: "4",
    //     category: "Precast",
    //     title: "Concrete Molds",
    //     description: "High-precision molds for producing durable infrastructure elements.",
    //     image: "/assets/image15.jpeg",
    //     color: "bg-[#B31942]",
    //     icon: Cuboid
    // },
    {
        id: "5",
        category: "Mining",
        title: "Crusher Wear Parts",
        description: "Heavy-duty components designed for high-impact crushing environments.",
        image: "/assets/image16.jpg",
        color: "bg-[#B31942]",
        icon: Sun
    },
    {
        id: "6",
        category: "Alloys",
        title: "Metals & Castings",
        description: "Engineered metal and alloy products for industrial applications.",
        image: "/assets/image14.jpeg",
        color: "bg-[#B31942]",
        icon: Droplets
    },
    {
        id: "7",
        category: "Paving",
        title: "Adjustable Risers",
        description: "Height-adjustable pedestal risers for outdoor paving applications.",
        image: "/assets/image12.jpg",
        color: "bg-[#B31942]",
        icon: Cog
    },
    {
        id: "8",
        category: "Water Works",
        title: "Joint Fittings",
        description: "Mechanical joint fittings for secure water distribution networks.",
        image: "/assets/image13.jpg",
        color: "bg-[#B31942]",
        icon: Droplets
    },
    {
        id: "9",
        category: "Fabrication",
        title: "Custom Metal Works",
        description: "High-precision machining and fabrication services engineered for accuracy.",
        image: "/assets/image10.jpeg",
        color: "bg-[#B31942]",
        icon: Wrench
    },
    {
        id: "10",
        category: "Foundry",
        title: "Equipment & Tools",
        description: "State-of-the-art tools ensuring micron-level tolerance for components.",
        image: "/assets/image12.jpg",
        color: "bg-[#B31942]",
        icon: Flame
    },
    {
        id: "11",
        category: "Oil & Gas",
        title: "High Pressure Valves",
        description: "Components built for harsh marine and high-pressure environments.",
        image: "/assets/image16.jpg",
        color: "bg-[#B31942]",
        icon: Flame
    },
    {
        id: "12",
        category: "Infrastructure",
        title: "Construction Parts",
        description: "Heavy-duty scaffolding and infrastructure support components.",
        image: "/assets/image15.jpeg",
        color: "bg-[#B31942]",
        icon: Building
    },
    {
        id: "13",
        category: "Utility",
        title: "Power Energy",
        description: "Reliable components for power transmission and energy sectors.",
        image: "/assets/image14.jpeg",
        color: "bg-[#B31942]",
        icon: Bolt
    },
    {
        id: "14",
        category: "Defence",
        title: "Aerospace Grade",
        description: "Certified high-grade materials for defence and aerospace contracts.",
        image: "/assets/image18.jpeg",
        color: "bg-[#B31942]",
        icon: Shield
    },
    {
        id: "15",
        category: "Manufacturing",
        title: "Custom OEM",
        description: "Tailor-made casting solutions to meet unique project requirements.",
        image: "/assets/image1.jpeg",
        color: "bg-[#B31942]",
        icon: Hammer
    },
    {
        id: "16",
        category: "Snow Plough",
        title: "Winter Equipment",
        description: "Industrial grade snow clearing attachments and machinery parts.",
        image: "/assets/image9.jpeg",
        color: "bg-[#B31942]",
        icon: Cog
    }
];

export function VerticalAccordion() {
    // Open the first item by default
    const [activeId, setActiveId] = useState<string | null>("1");

    return (
        <div className="w-full flex justify-center items-center py-10 bg-white">
            {/* w-full: Full Width
                h-[600px]: Fixed height for the bookshelf effect
            */}
            <div className="flex w-full h-[700px] overflow-hidden border-y border-[#0A3161]/10">

                {items.map((item) => {
                    const isActive = activeId === item.id;
                    const Icon = item.icon || Zap;

                    return (
                        <div
                            key={item.id}
                            onMouseEnter={() => setActiveId(item.id)}
                            className={cn(
                                "relative transition-all duration-500 ease-in-out border-r border-[#0A3161] last:border-r-0 cursor-pointer overflow-hidden",
                                // Active: Grow to flex-5 (takes up 5x space) with RED background
                                // Inactive: Shrink to flex-1 (takes up 1x space) with BLACK background (No Blue)
                                isActive 
                                    ? `flex-[5] ${item.color}` 
                                    : "flex-[1] bg-[#0A3161] hover:bg-[#0A3161]"
                            )}
                        >
                            {/* --- CONTENT WHEN EXPANDED (VISIBLE ONLY ON ACTIVE) --- */}
                            <div
                                className={cn(
                                    "absolute inset-0 flex flex-col justify-between transition-opacity duration-300 delay-75",
                                    isActive ? "opacity-100 visible" : "opacity-0 invisible"
                                )}
                            >
                                {/* Top Image Section */}
                                <div className="relative h-[55%] w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-[#0A3161]/20 z-10" />
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-6 left-6 z-20 bg-[#0A3161]/50 backdrop-blur-md p-2 rounded-lg text-white">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>

                                {/* Text Content Section */}
                                <div className="flex flex-col px-6 py-6 text-white h-[45%] bg-gradient-to-t from-[#0A3161]/20 to-transparent">
                                    <div className="flex items-center gap-2 mb-2 opacity-80">
                                        <span className="text-xs font-bold tracking-widest uppercase border border-white/30 px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed opacity-90 line-clamp-3">
                                        {item.description}
                                    </p>
                                    
                                    <div className="mt-auto pt-4 flex items-center text-xs font-bold uppercase tracking-wider gap-2">
                                        View Products <span className="text-lg">→</span>
                                    </div>
                                </div>
                            </div>

                            {/* --- VERTICAL TEXT (VISIBLE ONLY WHEN COLLAPSED) --- */}
                            <div
                                className={cn(
                                    "absolute inset-0 flex items-center justify-center transition-all duration-300",
                                    isActive ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
                                )}
                            >
                                <h3
                                    className="text-white/60 hover:text-white whitespace-nowrap text-sm font-bold tracking-[0.2em] uppercase transition-colors"
                                    style={{ 
                                        writingMode: 'vertical-rl', 
                                        transform: 'rotate(180deg)',
                                        textShadow: '0px 0px 10px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    {item.category}
                                </h3>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}
