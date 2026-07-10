"use client";

import React, { useState, useEffect } from "react";
import { Amphora, ChevronsRight, Droplets, Factory, TowerControl } from 'lucide-react';
import Link from 'next/link';
import localFont from 'next/font/local'
import { services } from '@/lib/newsData';

const apricotsFont = localFont({
    src: '../../lib/fonts/Horizon.otf',
    display: 'swap',
})

const POPULAR_METALS = [
    "Cast Iron",
    "Ductile Iron",
    "Aluminium",
    "Mild Steel",
    "Stainless Steel",
    "Gun Metal",
    "Angle Iron"
];

const BusinessSolutions = () => {
    // Typewriter state hooks
    const [metalIndex, setMetalIndex] = useState(0);
    const [currentSubText, setCurrentSubText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const fullText = POPULAR_METALS[metalIndex];
        
        const handleType = () => {
            if (!isDeleting) {
                // Typing out letters
                setCurrentSubText(fullText.substring(0, currentSubText.length + 1));
                setTypingSpeed(100);

                if (currentSubText === fullText) {
                    // Pause at full word before starting to delete
                    setTypingSpeed(2000); 
                    setIsDeleting(true);
                }
            } else {
                // Deleting letters
                setCurrentSubText(fullText.substring(0, currentSubText.length - 1));
                setTypingSpeed(50);

                if (currentSubText === "") {
                    setIsDeleting(false);
                    // Move onto next metal in array index loop
                    setMetalIndex((prev) => (prev + 1) % POPULAR_METALS.length);
                    setTypingSpeed(500);
                }
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentSubText, isDeleting, metalIndex, typingSpeed]);

    return (
        <section className="py-2 bg-white">
            {/* Main World of Metals Heading */}
            {/* <h2 className={`
                text-[60px] lg:text-[90px] text-center mx-auto leading-none 
                bg-[linear-gradient(to_bottom,#B31942_44%,#ffffff_44%,#ffffff_46%,black_46%)]
                bg-clip-text text-transparent
                ${apricotsFont.className}
            `}>
                World of Metals
            </h2> */}

            {/* Dynamic Typewriter Showcase Block */}
            <div className="text-left px-10 mb-12">
                <p className="text-7xl md:text-5xl font-sans uppercase tracking-[0.1em] text-[#0A3161]/70 font-bold inline-block">
                  All Metals Popular:{" "}
                  <span className="text-[#B31942] border-r-2 border-[#B31942] pr-1 animate-pulse font-black">
                     {currentSubText}
                  </span>
                </p>
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 text-start border border-[#B31942] rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex justify-center lg:justify-start mb-4">
                                <div className="relative p-2 rounded-full">
                                    <div className="w-8 h-8 text-[#B31942]">
                                        <service.icon size={32} />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-sm font-bold text-[#B31942] mb-3">{service.title}</h3>
                            <p className="text-sm text-[#0A3161] mb-4 h-20 overflow-hidden leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                href="#"
                                className="inline-flex text-sm items-center font-semibold text-[#0A3161] hover:text-[#B31942] transition-colors group"
                            >
                                Learn More
                                <ChevronsRight className='h-3 w-3 ml-2 transform group-hover:translate-x-1 transition-transform' />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;
