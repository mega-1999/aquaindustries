'use client';
import Image from 'next/image';
import React from 'react';

// Sample Data - Replace 'src' with your actual logo paths
const row1 = [
  { name: "NPCA", src: "/ProductCarousels/ASSOCIATION SIZED/aia copy.jpg" }, 
  { name: "LICA", src: "/ProductCarousels/ASSOCIATION SIZED/APWA.JPG" },
  { name: "PCANY", src: "/ProductCarousels/ASSOCIATION SIZED/AWWA.JPG" },
  { name: "NUCANY", src: "/ProductCarousels/ASSOCIATION SIZED/ccmpa copy.jpg" },
  { name: "DOT", src: "/ProductCarousels/ASSOCIATION SIZED/CMHA copy.JPG" },
  { name: "Suffolk", src: "/ProductCarousels/ASSOCIATION SIZED/NEPCA.JPG" },
  { name: "Suffolk", src: "/ProductCarousels/ASSOCIATION SIZED/NHE.jpg" },
  { name: "Suffolk", src: "/ProductCarousels/ASSOCIATION SIZED/NPCA-Logo.JPG" },
  { name: "Suffolk", src: "/ProductCarousels/ASSOCIATION SIZED/NY-CMA.jpg" },
  { name: "Suffolk", src: "/ProductCarousels/ASSOCIATION SIZED/pcany.jpg" },
  { name: "Suffolk", src: "/ProductCarousels/ASSOCIATION SIZED/PEI.JPG" },
  { name: "Suffolk", src: "/ProductCarousels/ASSOCIATION SIZED/ppa.JPG" },
];

const row2 = [
  { name: "Nassau", src: "/ProductCarousels/sized/canada-ccppa.JPG" },
  { name: "State NJ", src: "/ProductCarousels/sized/conn copy.JPG" },
  { name: "NYC DOT", src: "/ProductCarousels/sized/maine.JPG" },
  { name: "County", src: "/ProductCarousels/sized/MassDOt.JPG" },
  { name: "Association", src: "/ProductCarousels/sized/Nassau+Logo copy.JPG" },
  { name: "Standard", src: "/ProductCarousels/sized/NHDOTlogo.JPG" },
  { name: "Standard", src: "/ProductCarousels/sized/nj copy.JPG" },
  { name: "Standard", src: "/ProductCarousels/sized/ny state copy.JPG"},
  { name: "Standard", src: "/ProductCarousels/sized/ny.JPG" },
  { name: "Standard", src: "/ProductCarousels/sized/PennDOT-Logo.png" },
  { name: "Standard", src: "/ProductCarousels/sized/RIDOT.jpg" },
  { name: "Standard", src: "/ProductCarousels/sized/suffolk copy.JPG" },
  { name: "Standard", src: "/ProductCarousels/sized/vt copy.JPG" },
];

export default function AssociationsCarousel() {
  return (
    <section className="w-full py-2 bg-[#0A3161]/5 text-[#0A3161] overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold   uppercase tracking-wide">
          Associations & Standards
        </h2>
        {/* <div className="w-24 h-1 bg-[#B31942] mx-auto mt-4 rounded-full"></div> */}
      </div>

      {/* === CAROUSEL WRAPPER === */}
      {/* Mask fade effect on edges */}
      <div className="flex flex-col gap-2 relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* === ROW 1: SCROLL LEFT === */}
        {/* width-max ensures the inner container can stretch as wide as needed */}
        <div className="flex overflow-hidden group py-2">
          <div className="flex gap-8 animate-infinite-scroll-left group-hover:paused w-max pl-4">
             {/* Duplicate list ONCE. The CSS handles the loop by moving 50% */}
             {[...row1, ...row1].map((item, index) => (
                <LogoCard key={index} item={item} />
             ))}
          </div>
        </div>

        {/* === ROW 2: SCROLL RIGHT === */}
        <div className="flex overflow-hidden group py-2">
          <div className="flex gap-8 animate-infinite-scroll-right group-hover:paused w-max pl-4">
             {[...row2, ...row2].map((item, index) => (
                <LogoCard key={index} item={item} />
             ))}
          </div>
        </div>

      </div>

      {/* === ANIMATION CONFIG === */}
      {/* 100s duration = Slower speed */}
      {/* Translate -50% = Perfect seamless loop for duplicated lists */}
      <style jsx global>{`
        @keyframes infinite-scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes infinite-scroll-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-infinite-scroll-left {
          animation: infinite-scroll-left 100s linear infinite;
        }
        .animate-infinite-scroll-right {
          animation: infinite-scroll-right 100s linear infinite;
        }
        .group-hover\\:paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// Helper Component: Card with Shadow
function LogoCard({ item }: { item: { name: string; src: string } }) {
  return (
    <div className="
       flex items-center justify-center 
       w-[180px] h-[90px] md:w-[220px] md:h-[110px] 
       bg-white 
       border border-[#0A3161]/10 
       rounded-xl 
       shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
       hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] 
       shrink-0 
       transition-all duration-300 ease-in-out
       hover:scale-105
       cursor-pointer
    ">
       <Image 
            src={item.src} 
            alt={item.name} 
            width={200} 
            height={120} 
            className="object-contain max-h-[120px] max-w-[200px] p-2" 
        />
    </div>
  );
}
