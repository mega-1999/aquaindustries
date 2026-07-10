'use client';

import React from 'react';
import Link from 'next/link';

interface RelatedSearchProps {
  tags: string[];
}

export default function RelatedSearch({ tags }: RelatedSearchProps) {
  // If no tags exist, don't render anything
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-[#0A3161]/10">
      <h3 className="text-xl font-bold text-[#0A3161] mb-4">
        Related Search
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Link 
            key={index} 
            // Creates a search URL or product link. 
            // You can change this to `/products/${slug}` if preferred.
            href={`/search?q=${encodeURIComponent(tag)}`}
            className="
              px-4 py-2 
              bg-white 
              border border-[#0A3161]/20 
              text-sm text-[#0A3161]/80 
              hover:text-[#B31942] hover:border-[#B31942] 
              transition-colors duration-200
              cursor-pointer
            "
          >
            {tag.toLowerCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
