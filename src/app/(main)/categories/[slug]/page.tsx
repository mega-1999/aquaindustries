
'use client'
import { notFound, useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { categories } from '@/lib/materialsData';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface PageProps {
    params: {
        slug: string;
    };
}

// src/app/(main)/categories/[slug]/page.tsx

export default async function CategoryPage() {
    const params = useParams();
    const router = useRouter();
    const { slug } = params;
    const data = categories.find((c) => c.slug === slug);

    if (!data) return notFound();
    return (
        <main className="w-full py-24 min-h-screen  relative pb-24">

            {/* ISOLATED TACTICAL BACKGROUNDS */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-[1200px] mx-auto p-6 md:p-12">

                {/* TOP NAVIGATION */}
                <button
                    onClick={() => router.back()}
                    className="text-[#0A3161]/60 hover:text-[#B31942] mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors group bg-[#B31942]/5 px-4 py-2 rounded border border-[#B31942]/10 hover:border-[#B31942]/30"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Return to Intelligence Center
                </button>

                <div className="relative h-[60vh] flex items-center justify-center bg-[#0A3161]">
                    <Image
                        src={data.image || '/assets/image15.jpeg'}
                        width={1200}
                        height={600}
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                        alt="Banner"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />

                    <div className="relative z-10 text-center px-6">
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#B31942] font-black tracking-widest uppercase">
                            Industrial Excellence
                        </motion.span>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-6xl md:text-8xl font-black text-[#0A3161] mt-4 tracking-tighter"
                        >
                            {data.title.toUpperCase()}
                        </motion.h1>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-[#0A3161]/10">
                                <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
                                <p className="text-xl text-[#0A3161]/80 leading-relaxed">
                                    {data.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {['ASTM Standards', 'Ductile Iron', 'ISO Certified', 'USA Made'].map((badge) => (
                                    <div key={badge} className="bg-[#0A3161]/5 p-6 rounded-2xl border border-[#0A3161]/10 flex items-center gap-4">
                                        <div className="w-2 h-2 bg-[#B31942] rounded-full" />
                                        <span className="font-bold text-[#0A3161]">{badge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="space-y-6">
                            <div className="bg-[#B31942] p-8 rounded-[2rem] text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-4">Need a Quote?</h3>
                                <p className="mb-8 opacity-90">Custom dimensions and volume pricing available for major projects.</p>
                                <button className="w-full py-4 bg-white text-[#B31942] font-black rounded-xl uppercase tracking-tighter hover:scale-105 transition-transform">
                                    Request RFQ
                                </button>
                            </div>

                            <div className="p-8 border-2 border-dashed border-[#0A3161]/10 rounded-[2rem]">
                                <h4 className="font-bold mb-2">Technical Support</h4>
                                <p className="text-sm text-[#0A3161]/70 italic">"Our engineers are available 24/7 for specification assistance."</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}