'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

// 1. Sample Data (Replace with real product videos/data)
const products = [
    {
        id: 1,
        title: "Industrial Valve Castings",
        description: "Experience the precision of our high-pressure valve castings. Manufactured using advanced sand casting techniques, these valves are tested for zero-leakage performance in oil & gas applications. Available in Stainless Steel and Duplex Alloys.",
        features: ["Pressure tested to 5000 PSI", "Corrosion-resistant coating", "ASME certified"],
        video: "/video/video1.mp4", // Replace with real video path
        poster: "/assets/image1.jpeg" // Optional thumbnail
    },
    {
        id: 2,
        title: "Automotive Engine Blocks",
        description: "Our automated molding line produces engine blocks with superior dimensional accuracy. See how we maintain consistent wall thickness and optimal heat dissipation properties for high-performance vehicles.",
        features: ["Grey Iron & Aluminum options", "Robotic core assembly", "Just-in-time delivery"],
        video: "/video/video2.mp4",
        poster: "/assets/image2.jpeg"
    },
    {
        id: 3,
        title: "Aerospace Turbine Blades",
        description: "Investment casting at its finest. Watch the intricate process of creating turbine blades that withstand extreme temperatures. Our vacuum casting furnace ensures defect-free metallurgical structure.",
        features: ["Superalloy composition", "X-Ray inspection verified", "Micron-level tolerance"],
        video: "/video/video3.mp4",
        poster: "/assets/image3.jpeg"
    },
    {
        id: 4,
        title: "Industrial Valve Castings",
        description: "Experience the precision of our high-pressure valve castings. Manufactured using advanced sand casting techniques, these valves are tested for zero-leakage performance in oil & gas applications. Available in Stainless Steel and Duplex Alloys.",
        features: ["Pressure tested to 5000 PSI", "Corrosion-resistant coating", "ASME certified"],
        video: "/video/video4.mp4", // Replace with real video path
        poster: "/assets/image4.jpg" // Optional thumbnail
    },
    {
        id: 5,
        title: "Automotive Engine Blocks",
        description: "Our automated molding line produces engine blocks with superior dimensional accuracy. See how we maintain consistent wall thickness and optimal heat dissipation properties for high-performance vehicles.",
        features: ["Grey Iron & Aluminum options", "Robotic core assembly", "Just-in-time delivery"],
        video: "/video/video5.mp4",
        poster: "/assets/image5.jpeg"
    },
    {
        id: 6,
        title: "Aerospace Turbine Blades",
        description: "Investment casting at its finest. Watch the intricate process of creating turbine blades that withstand extreme temperatures. Our vacuum casting furnace ensures defect-free metallurgical structure.",
        features: ["Superalloy composition", "X-Ray inspection verified", "Micron-level tolerance"],
        video: "/video/video6.mp4",
        poster: "/assets/image6.jpg"
    },
];

export default function ProductVideoShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                    Featured <span className="text-[#B31942]">Products</span>
                </h2>

                {/* === Carousel Container === */}
                <div className="relative">

                    {/* Sliding Track */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {products.map((product) => (
                            <div key={product.id} className="w-full shrink-0 px-4">

                                {/* === CARD LAYOUT: Video Left, Text Right === */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                                    {/* LEFT: Video Section */}
                                    <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-[#0A3161]">
                                        <video
                                            className="w-full h-full object-cover"
                                            controls
                                            poster={product.poster}
                                            src={product.video}
                                        >
                                            Your browser does not support the video tag.
                                        </video>

                                        {/* Optional: Overlay if video isn't playing (handled by native controls mostly) */}
                                    </div>

                                    {/* RIGHT: Text Content */}
                                    <div className="flex flex-col justify-center space-y-6">
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {product.title}
                                        </h3>

                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            {product.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-3">
                                            {product.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                    <CheckCircle2 className="w-5 h-5 text-[#B31942]" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-4">
                                            <Button className="bg-[#B31942] hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full">
                                                View Specifications
                                            </Button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* === Controls === */}

                    {/* Arrows */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg items-center justify-center hover:bg-[#B31942] hover:text-white transition-all z-20 border border-gray-100"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg items-center justify-center hover:bg-[#B31942] hover:text-white transition-all z-20 border border-gray-100"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                </div>

                {/* === Navigation Dots === */}
                <div className="flex justify-center mt-12 space-x-3">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'w-8 bg-[#B31942]'
                                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to product ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
