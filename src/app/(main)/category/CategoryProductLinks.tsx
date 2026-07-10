'use client';

import React from 'react';
import Link from 'next/link';

interface CategoryProductLinksProps {
  items: string[];
}

export default function CategoryProductLinks({ items }: CategoryProductLinksProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-[#0A3161]/10">
      <h3 className="text-xl font-bold text-[#0A3161] mb-6">
        All Products in this Category
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => {
          // Generate the slug: "Hydro Power Control Systems" -> "hydro-power-control-systems"
          const slug = item.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w-]+/g, '');
          
          return (
            <Link 
              key={index} 
              // Direct link to the product page
              href={`/products/${slug}`}
              className="
                px-4 py-2 
                bg-white 
                border border-[#0A3161]/10 
                text-sm text-[#0A3161]/80 
                hover:text-[#B31942] hover:border-[#B31942] hover:shadow-sm
                transition-all duration-200
                cursor-pointer
                rounded-md
              "
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
