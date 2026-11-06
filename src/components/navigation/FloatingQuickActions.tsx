"use client";

import {
  ArrowDown,
  ArrowUp,
  ChevronsDown,
  ChevronsUp,
  Mail,
  PhoneCall,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

export const FloatingQuickActions: React.FC = () => {
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setScrolledPastThreshold(scrollY > 300);
      setIsNearBottom(scrollY + windowHeight >= fullHeight - 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <aside
      aria-label="Floating Quick Contact & Navigation Actions"
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-2.5 select-none print:hidden"
    >
      {/* 1. Direct Hotline Call Button */}
      <div className="relative flex items-center group">
        {/* Tooltip Label (Senior-Readable High Contrast) */}
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-white text-[#3087ff] border-2 border-[#3087ff] shadow-lg rounded-none text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          Direct Dispatch: +1 (516) 252-1111
        </div>

        <a
          href="tel:+15162521111"
          aria-label="Call Direct Dispatch at +1 (516) 252-1111"
          className="w-12 h-12 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white border-2 border-white shadow-xl rounded-none flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <PhoneCall className="w-5 h-5 shrink-0" />
        </a>
      </div>

      {/* 2. Direct Material Quote Email Button */}
      <div className="relative flex items-center group">
        {/* Tooltip Label */}
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-white text-[#3087ff] border-2 border-[#3087ff] shadow-lg rounded-none text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          Email Engineering: dispatch.ny@aquaindustries.com
        </div>

        <a
          href="mailto:dispatch.ny@aquaindustries.com?subject=Material%20Quote%20Request%20-%20Aqua%20Industries"
          aria-label="Email Aqua Industries Engineering & Dispatch"
          className="w-12 h-12 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white border-2 border-white shadow-xl rounded-none flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Mail className="w-5 h-5 shrink-0" />
        </a>
      </div>

      {/* 3. YouTube Foundry & Manufacturing Tour Button */}
      <div className="relative flex items-center group">
        {/* Tooltip Label */}
        <div className="absolute right-full mr-3 px-3 py-1.5 bg-white text-[#3087ff] border-2 border-[#3087ff] shadow-lg rounded-none text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          Watch Foundry &amp; Hydro-Testing Video Tour
        </div>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch Aqua Industries YouTube Foundry Video Tour"
          className="w-12 h-12 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white border-2 border-white shadow-xl rounded-none flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* YouTube Brand Icon strictly adhering to #3087ff / #3087ff / #FFFFFF */}
          <svg
            className="w-5 h-5 fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        </a>
      </div>

      {/* 4. Top & Bottom Scroll Action ("topbtm ion") */}
      <div className="relative flex flex-col bg-white border-2 border-[#3087ff] shadow-2xl rounded-none overflow-hidden">
        {/* Scroll to Top */}
        <button
          type="button"
          onClick={handleScrollToTop}
          title="Scroll to Top of Page"
          aria-label="Scroll to Top of Page"
          className="w-12 h-11 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white flex items-center justify-center transition-colors border-b border-[#3087ff]/30 cursor-pointer group/top"
        >
          <ChevronsUp className="w-5 h-5 group-hover/top:-translate-y-0.5 transition-transform" />
        </button>

        {/* Scroll to Bottom */}
        <button
          type="button"
          onClick={handleScrollToBottom}
          title="Scroll to Bottom of Page"
          aria-label="Scroll to Bottom of Page"
          className="w-12 h-11 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white flex items-center justify-center transition-colors cursor-pointer group/bottom"
        >
          <ChevronsDown className="w-5 h-5 group-hover/bottom:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </aside>
  );
};
