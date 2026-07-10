import React from 'react'

const HeroSection = () => {
    // Note: The image URL is a placeholder. Replace it with your actual image path.
    const imageUrl = "/assets/image8.jpg";

    return (
        <div
            className="relative w-full overflow-hidden flex items-center justify-center py-20 md:py-32 lg:py-40"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // Mimic the image's rounded bottom edge if possible, otherwise use a subtle curve effect
                clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)',
            }}
        > 
            <div className="absolute inset-0 bg-[#0A3161]/40 backdrop-blur-[1px]"></div>
            <div className="relative z-10 text-center max-w-4xl px-4">

                <p className="text-xl   font-medium text-white/90 mb-3 tracking-widest uppercase">
                    From your desk to your dock complete undertaking by Team Mega
                </p>
                <h1 className="text-[30px]  font-extrabold text-white leading-tight mb-6 drop-shadow-lg">

                    The Largest group of Foundries & Forge Shops
                </h1>
                <p className="text-sm   text-white/90 leading-relaxed font-light mx-auto max-w-3xl">
                    METALSVERSE Foundries delivers a comprehensive portfolio of products, including turbines, oil & gas equipment, water management technologies, and power generation systems. We also enable seamless access to FPC services, empowering businesses to execute large-scale industrial projects with confidence.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
