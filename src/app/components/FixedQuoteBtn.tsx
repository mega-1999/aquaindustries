"use client"; // Required in Next.js App Router for state & scroll listeners

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";

const FixedQuoteBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show scroll button when page is scrolled down past 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ========================================= */}
      {/* 1. SIDE FIXED: GET A QUOTE               */}
      {/* ========================================= */}
      <div className="fixed top-30 right-0 z-[9999]">
        <Link
          href="/quote"
          className="
            flex items-center gap-2
            bg-[#B31942] hover:bg-[#8f1435] text-white font-bold
            py-3 px-8 rounded-t-lg shadow-[0_0_10px_rgba(10,49,97,0.3)]
            transition-all duration-300 ease-in-out
            origin-bottom-right 
            rotate-[-90deg]
            translate-y-[50%] 
            translate-x-0
          "
        >
          <span>Connect with us</span>
        </Link>
      </div>

      {/* ========================================= */}
      {/* 2. BOTTOM RIGHT FIXED STACK              */}
      {/* ========================================= */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 items-center">
        


        {/* BOTTOM THREE: Social / Contact Icons */}
        {/* A. WhatsApp */}
        <Link
          href="https://wa.me/15127828880"
          target="_blank"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#B31942] hover:bg-[#8f1435] text-white 
            rounded-full shadow-lg shadow-[#B31942]/30
            transition-transform hover:scale-110
          "
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>

        {/* B. Phone Call */}
        <Link
          href="tel:3077887700"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#B31942] hover:bg-[#8f1435] text-white 
            rounded-full shadow-lg shadow-[#B31942]/30
            transition-transform hover:scale-110
          "
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </Link>

        {/* C. Email */}
        <Link
          href="mailto:sales@metalversefoundries.com"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#B31942] hover:bg-[#8f1435] text-white 
            rounded-full shadow-lg shadow-[#B31942]/30
            transition-transform hover:scale-110
          "
          title="Send Email"
        >
          <Mail className="w-5 h-5" />
        </Link>

        {/* TOP: Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`
            w-12 h-12 flex items-center justify-center 
            bg-[#0A3161] hover:bg-[#0A3161] text-white 
            rounded-full shadow-lg transition-all duration-300
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none h-0 w-0 !gap-0"}
          `}
          title="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

      </div>
    </>
  );
};

export default FixedQuoteBtn;
