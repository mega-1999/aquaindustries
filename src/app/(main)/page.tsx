'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { Button } from "@/components/ui/button";

// --- CRITICAL COMPONENTS (Load Immediately) ---
import { MegaProducts } from '../components/MegaProducts';

// --- DYNAMIC IMPORTS (Lazy Loaded for Speed) ---
const FactoryStories = dynamic(() => import('../private/dashboard/FactoryStories'), { ssr: false });
const LiveStreamCommandCenter = dynamic(() => import('../components/LiveStreamCommandCenter'), {
    loading: () => <div className="h-96 animate-pulse bg-[#0A3161]/10 rounded-lg" />
});
const ProductPage = dynamic(() => import('./videos/ProductPage'));
const HeroSection = dynamic(() => import('../components/hero'));
const Product3DShowcase = dynamic(() => import('./videos/Product3DShowcase'), { ssr: false });
const BusinessSolutions = dynamic(() => import('../components/busineesSolution'));
const CosmoBlog = dynamic(() => import('../components/cosmoBlog'));
const ChatBlog = dynamic(() => import('../components/chatBlog'));
const ProductCarousel = dynamic(() => import('../components/productCarousel'));
const SourcingRequest = dynamic(() => import('../components/SourcingRequest'));
const EngagementAnalytics = dynamic(() => import('./sellerHomepage/EngagementAnalytics'));
const IndustryNews = dynamic(() => import('./news/IndustryNews'));
const HotProductVideos = dynamic(() => import('./category/HotProductVideos'));
const InfiniteLiveFeed = dynamic(() => import('../components/InfiniteLiveFeed'));
const AssociationsCarousel = dynamic(() => import('../components/productCarousel2'));
const FloatingQuoteBtn = dynamic(() => import('../components/FloatingQuoteBtn'), { ssr: false });

import { newInnovationData } from "@/lib/newsData";
import { DesignCapabilities } from '../components/design-capabilities';
import { MegaStories } from '../components/mega-stories';
import { VerticalAccordion } from '../components/VerticalAccordion';
import AiRobotics from '../components/AiRobotics';
import MegaProduct from '../components/MegaProduct';
import CastingCarousel from '../components/CastingCarousel';
import MegaBlog from '../components/MegaBlog';  
import MegaMagazine from '../components/MegaMagazine';
import OtherMetalsDirectory from '../components/OtherMetalsDirectory';
import ProductCarouselo from '../components/productCarouselo';
import HighFlowGrates from './HighFlowGrates';
import IndustrialManifest from './IndustrialManifest';
import MegaQSeries from './MegaQSeries';
import MegaFoundationPage from './mega-foundation/page';
 import MegaFeaShowcase from './MegaFeaShowcase';
import { Hero } from './Hero';
import DotMatrixSlider from './DotMatrixSlider';
import { ResourceDirectory } from './ResourceDirectory';

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
            setUserName(localStorage.getItem('userName') || 'Member');
        }
    }, []);

    if (!isMounted) return null;

    return (
        <div className="bg-white">
            {/* 1. HERO VIDEO (LCP - Static/Fast) */}
            {/* <header className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px] md:min-h-[700px]">
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="/video/282244_small.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[#B31942]/20 z-0 pointer-events-none" />

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <div className="inline-block p-6 md:p-0">
                        <p className="text-[12px] md:text-[16px] font-bold uppercase tracking-widest text-[#B31942] mb-4 bg-white/90 px-4 py-2 rounded-full inline-block shadow-sm">
                            METALSVERSE FOUNDRIES | Global Industrial Hub
                        </p>
                        <h1 className="text-white font-bold leading-tight tracking-tight drop-shadow-lg">
                            <span className="block text-[24px] md:text-[50px]">The World's Advanced Consortium of</span>
                            <span className="block text-[14px] md:text-[30px] text-[#B31942] uppercase font-black bg-white/90 rounded px-4 py-1 my-2">
                                Foundries, Forge Shops & Fabricators
                            </span>
                            <span className="block text-[32px] md:text-[80px] font-light">Under One Universe</span>
                        </h1>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <Button className="w-full sm:w-auto bg-[#B31942] hover:bg-[#B31942] text-white md:px-12 md:py-8 md:text-xl rounded-full">
                                Explore Capabilities
                            </Button>
                            <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#B31942] md:px-12 md:py-8 md:text-xl rounded-full">
                                <Link href={'/sellerHomepage'}>Succeed With Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </header> */}
            <Hero />
            <ResourceDirectory/>
            <DotMatrixSlider/>
            <Product3DShowcase />
            {/* 2. CORE PRODUCTS (High Priority) */}
            <MegaQSeries/>
            <MegaProducts />
            <LiveStreamCommandCenter />
             <MegaFeaShowcase/>
            <IndustrialManifest/>
            <ProductPage />
            <MegaMagazine/>
            <HighFlowGrates/>
            <CastingCarousel />
            <OtherMetalsDirectory/>
            {/* <MetalDirectory /> */}
            <FactoryStories /> 
            <MegaBlog />
            <HeroSection />
            <AiRobotics />
            {/* Non-Critical Visuals */}
            <MegaStories />
            <BusinessSolutions />

            {/* Blogs & Feed */}
            <CosmoBlog />
            <ChatBlog />
            <MegaProduct />
            <DesignCapabilities />
            <ProductCarousel />
            <ProductCarouselo/>

            {/* Data-Heavy Footer Content */}
            <SourcingRequest />
            <EngagementAnalytics />
            <IndustryNews />

            <HotProductVideos
                title={newInnovationData.title}
                videos={newInnovationData.videos}
            />

            <VerticalAccordion />
            <InfiniteLiveFeed />
            <AssociationsCarousel />

            <FloatingQuoteBtn />
        </div>
    );
}
