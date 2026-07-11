'use client'

import { ChevronDown, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const topMenuItems = [
  { label: 'Government Affairs', href: '/government-affairs' },
  { label: 'Acquisitions', href: '/acquisitions' },
  { label: 'Ventures', href: '/products' },
  { label: 'HR', href: '/hr' },
  { label: 'Mega Foundation', href: '/mega-foundation' },
  { label: 'Metal Price Index', href: '/materials' },
  { label: 'New Technologies', href: '/new-technologies' },
];

const TopNavbarr = () => {
  return (
    <div className='w-full border-t border-[#0A3161]/10'>
      <nav className="bg-[#B31942] text-white w-full shadow-md">

        <div className="w-full px-2 sm:px-6 lg:px-10">

          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center min-h-[32px] sm:min-h-9 py-1 sm:py-0">

            <div className="hidden sm:flex items-center space-x-4">
            </div>

            <div className="
                flex flex-nowrap w-full sm:w-auto 
                justify-between sm:justify-end 
                items-center 
                gap-2 sm:gap-6 
                overflow-x-auto no-scrollbar
            ">
              {topMenuItems.map((item) => (
                <Link
                  className='
                    text-[9px] sm:text-xs 
                    hover:text-white transition-colors 
                    whitespace-nowrap font-medium
                    shrink-0
                  '
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbarr
