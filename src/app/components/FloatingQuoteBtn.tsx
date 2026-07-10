'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';

export default function FloatingQuoteBtn() {
  
  // Function to handle smooth scroll if on the same page
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.getElementById('get-quote');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-20 right-24 z-50">
      <Link 
        href="#get-quote"
        onClick={handleClick}
        className="group flex items-center gap-3 bg-[#B31942] text-white px-6 py-4 rounded-full shadow-[0_4px_14px_0_rgba(204,34,33,0.39)] hover:shadow-[0_6px_20px_rgba(204,34,33,0.23)] hover:bg-[#B31942] transition-all duration-300 transform hover:-translate-y-1"
      >
        <MessageSquareText className="w-5 h-5 animate-pulse" />
        <span className="font-bold text-lg tracking-wide">Meet your dedicated Foundryman</span>
      </Link>
    </div>
  );
}
