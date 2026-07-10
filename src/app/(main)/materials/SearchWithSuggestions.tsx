'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight, FileText } from 'lucide-react';
import Link from 'next/link';

const searchData = [
  { title: "Cast Iron Specifications", category: "Materials > Cast Iron", href: "/materials/cast-iron" },
  { title: "Ductile Iron Benefits", category: "Materials > Ductile Iron", href: "/materials/ductile-iron" },
  { title: "1000 Series Curb Boxes", category: "Products > 1000 Series", href: "/products/1000-series" },
  { title: "How to Request a Quote", category: "Support > Quotations", href: "/request-quote" },
  { title: "Team Mega Login Portal", category: "Login > Team", href: "/login/team" },
  { title: "Customer Login Portal", category: "Login > Customer", href: "/login/customer" },
  { title: "Logistics & Shipping Info", category: "Corporate > Logistics", href: "/logistics" },
  { title: "Warranties & Return Policy", category: "Policies > Warranties", href: "/policies" },
  { title: "Stainless Steel Custom Projects", category: "Materials > Stainless", href: "/materials/stainless" },
  { title: "Download Product Catalog (PDF)", category: "Resources > Downloads", href: "/downloads" },
];

const SearchWithSuggestions = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState(searchData);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length > 0) {
      const results = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(results);
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto z-50 text-left">
      
      {/* === INPUT FIELD === */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {/* Icon turns red when focused */}
          <Search className="h-5 w-5 text-[#0A3161]/60 group-focus-within:text-[#B31942] transition-colors" />
        </div>
        <input
          type="text"
          // Added 'bg-white' here explicitly
          className="w-full pl-12 pr-4 py-4 bg-white rounded-lg border-0 shadow-lg text-[#0A3161] focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-[#0A3161]/60 text-lg transition-all"
          placeholder="Search for materials, products, or help..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => { if(query) setIsOpen(true) }}
        />
      </div>

      {/* === DROPDOWN RESULTS === */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-xl border border-[#0A3161]/10 overflow-hidden max-h-[400px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          
          <div className="bg-[#0A3161]/5 px-4 py-2 text-xs font-semibold text-[#0A3161]/70 uppercase tracking-wider border-b border-[#0A3161]/10">
            {filteredItems.length > 0 ? "Recommended Results" : "No results found"}
          </div>

          {filteredItems.length > 0 ? (
            <div className="divide-y divide-gray-50">
              {filteredItems.map((item, index) => (
                <Link 
                  key={index} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-[#0A3161]/5 transition-colors border-l-4 border-transparent hover:border-[#B31942]"
                >
                  <div className="flex items-start">
                    <FileText className="w-4 h-4 text-[#0A3161]/60 mt-1 mr-3 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#B31942]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#0A3161]/60 mt-0.5 flex items-center gap-1">
                        {item.category.split(' > ').map((part, i, arr) => (
                          <span key={i} className="flex items-center">
                            {part}
                            {i < arr.length - 1 && <ChevronRight className="w-3 h-3 mx-0.5" />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-[#0A3161]/70 text-sm">
              No matches found for "{query}". <br /> Try searching for "Iron" or "Login".
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWithSuggestions;
