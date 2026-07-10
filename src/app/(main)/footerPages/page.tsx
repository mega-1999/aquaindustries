import React from 'react';
import { Settings, ArrowRight, Phone, Mail } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
interface FooterHeroPageProps {
    title?: string;
}
export default function FooterHero({
    title,
}: FooterHeroPageProps) {
    return (
        <section className="relative w-full py-16 sm:py-24 bg-white">
            <div className="absolute inset-0 z-0 h-[325px] w-full">
                <Image
                    src={'/assets/image8.jpg'}
                    alt="Industrial background image"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0A3161]/60"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-white mb-6">
                    {title}
                </h1>
                <p className="pb-4 text-xl item-center text-[#0A3161]/40  leading-relaxed">
                    We have a never-ending drive to stay committed to the industry by giving the best efficient <span className="text-[#B31942] font-semibold">products to our Valued Clients</span>.
                </p>
            </div>

            <section className="relative z-20 container mx-auto px-4 pb-20">
                <Card className="shadow-2xl border-none overflow-hidden rounded-xl">
                    <div className="flex flex-col lg:flex-row">

                        {/* LEFT COLUMN: Detailed Content */}
                        <div className="lg:w-7/12 p-8 lg:p-12 space-y-8">

                            {/* Custom Header with Red Line */}
                            <div className="flex items-center gap-4">
                                <div className="h-8 w-1.5 bg-[#B31942] rounded-full" />
                                <h2 className="text-sm font-bold tracking-[0.2em] text-[#0A3161]/70 uppercase">
                                    Overview
                                </h2>
                            </div>

                            <div className="space-y-6 text-[#0A3161]/80 leading-7">
                                <p>
                                    <span className="font-bold text-[#0A3161]">Foundry-Grade Casting Solutions</span> are engineered with precise metallurgical compositions to ensure superior tensile strength and thermal stability. As a critical component in heavy machinery, our castings are utilized in <span className="font-bold text-[#0A3161]">automotive, aerospace, and energy sectors</span> to withstand extreme operational stresses and high-temperature environments.
                                </p>
                                <p>
                                    Beyond standard casting, our capabilities extend to high-precision <span className="font-bold text-[#0A3161]">forging and fabrication for critical infrastructure</span> such as turbine housings, pipeline valves, and structural supports. Our material science expertise allows us to customize alloy blends—from ductile iron to high-grade steel—ensuring every component meets rigorous international safety standards.
                                </p>
                                <p>
                                    Within the manufacturing lifecycle, our <span className="font-bold text-[#0A3161]">integrated quality assurance process</span> prevents common defects like porosity and shrinkage. Each casting undergoes extensive non-destructive testing (NDT) to guarantee structural integrity before it ever leaves the foundry floor, providing our clients with reliable, long-lasting industrial components.
                                </p>
                            </div>

                            {/* Mobile CTA (visible only on small screens) */}
                            <div className="lg:hidden pt-4">
                                <Button variant="outline" className="w-full border-red-200 text-[#B31942] hover:text-[#B31942] hover:bg-[#B31942]/5">
                                    Contact Us
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Sidebar / Product Highlight */}
                        <div className="lg:w-5/12 bg-[#0A3161]/5/80 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-[#0A3161]/10 relative">

                            {/* Decorative Background Icon */}
                            <Settings className="absolute bottom-[-20px] right-[-20px] w-64 h-64 text-slate-200/40 animate-spin-slow pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full space-y-8">

                                {/* Quote Box */}
                                <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4">
                                    <p className="text-[#0A3161] font-medium italic">
                                        "Mega Foundries delivers precision-engineered components for hydraulic systems, power transmission, and heavy earth-moving machinery, setting the benchmark for industrial durability."
                                    </p>
                                </div>

                                {/* Image Caption */}
                                <p className="text-xs text-[#0A3161]/70 max-w-[250px]">
                                    Explore Mega Foundries' comprehensive range of Castings, Forgings, and Fabricated assemblies.
                                </p>

                                {/* Product Image Card */}
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-[#0A3161]/10 flex flex-col items-center text-center space-y-4 transition-transform hover:scale-[1.02] duration-300">
                                    <div className="w-full aspect-[4/3] relative flex items-center justify-center">
                                        <Image
                                            width={1200}
                                            height={600}
                                            src="/assets/image12.jpg"
                                            alt="Industrial Transformer Unit"
                                            className="max-h-full max-w-full object-contain drop-shadow-lg"
                                        />
                                    </div>
                                    <p className="text-xs text-[#0A3161]/70 max-w-[250px]">
                                        Find out Power Mega's Foundries Transmission and Distribution product range.
                                    </p>
                                </div>

                                {/* Desktop CTA */}
                                <div className="mt-auto hidden lg:block">
                                    <Button variant="outline" className="group border-red-200 text-[#B31942] hover:bg-[#B31942]/5 hover:text-[#B31942] px-8">
                                        Contact us
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
        </section>
    );
}
