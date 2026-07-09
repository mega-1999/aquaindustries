'use client'

import { useState } from 'react';
import { ChevronDown, Facebook, Instagram, Linkedin, Twitter, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const topMenuItems = [
  { label: 'OUR VALUES', href: '/our-values' },
  { label: 'HOME', href: '/' },
  { label: 'HISTORY', href: '/history' },
  { label: 'TRANSFORMATION', href: '/transformation' },
  { label: 'INNOVATIONS', href: '/innovations' },
  { label: 'MAKING HISTORY', href: '/making-history' },
  { label: 'ALWAYS FIRST', href: '/always-first' },
  { label: 'CONTACT', href: '/contact' },
];
// 1. Define Options Data
const languageOptions = [
  { label: "English-USD", flag: "🇺🇸", id: "en" },
  { label: "Arabic-JOD", flag: "🇯🇴", id: "ar" },
  { label: "French-EUR", flag: "🇫🇷", id: "fr" },
]

const countryOptions = [
  { label: "USA", flag: "🇺🇸", id: "us" },
  { label: "Canada", flag: "🇨🇦", id: "ca" },
  { label: "Latin America", flag: "🇧🇷", id: "lat" }, // Used Brazil as a representative flag
  { label: "North America", flag: "🌎", id: "na" },  // Changed "America" to "North America" or use 🌎
  { label: "Caribbean", flag: "🇯🇲", id: "car" },    // Used Jamaica as a representative flag
  { label: "Europe", flag: "🇪🇺", id: "eu" },        // EU Flag
]
const TopNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languageOptions[0])
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0])
  return (
    <div className='w-full relative z-50'>
      <nav className="bg-neutral-800 text-neutral-200 w-full mx-auto shadow-md">

        {/* Corrected lg:px-30 to lg:px-8 or standard container usage */}
        <div className="w-full px-4 sm:px-6 lg:px-10  mx-auto">
          <div className="flex justify-between items-center h-9">

            {/* --- DESKTOP: Left Menu Items --- */}
            {/* Added 'hidden lg:flex' to hide this long list on mobile */}
            <div className="hidden lg:flex space-x-1 gap-6 items-center">
              {topMenuItems.map((item) => (
                <Link
                  className='text-xs hover:text-[#B31942] transition-colors whitespace-nowrap'
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* --- MOBILE: Hamburger Button --- */}
            {/* Visible only on mobile/tablet (lg:hidden) */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-200 hover:text-[#B31942] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <span className="ml-3 text-xs font-bold tracking-wider">MENU</span>
            </div>

            {/* --- DESKTOP: Right Side Icons --- */}
            <div className="hidden lg:flex items-center space-x-4">

              {/* --- LANGUAGE DROPDOWN --- */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center gap-1.5 text-xs hover:text-[#B31942] transition-colors outline-none">
                  {/* Shows the SELECTED flag and label */}
                  <span className="text-xs">{selectedLang.flag}</span>
                  {selectedLang.label}
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-[120px]">
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.id}
                      onClick={() => setSelectedLang(option)}
                      className="text-xs cursor-pointer gap-2"
                    >
                      <span className="text-xs">{option.flag}</span> {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* --- COUNTRY DROPDOWN --- */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center gap-1.5 text-xs hover:text-[#B31942] transition-colors outline-none">
                  <span className="text-xs">{selectedCountry.flag}</span>
                  {selectedCountry.label}
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="min-w-[120px]">
                  {countryOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.id}
                      onClick={() => setSelectedCountry(option)}
                      className="text-xs cursor-pointer gap-2"
                    >
                      <span className="text-xs">{option.flag}</span> {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

            </div>

          </div>
        </div>

        {/* --- MOBILE MENU DROPDOWN --- */}
        {/* Renders conditionally based on state */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-neutral-900 border-t border-neutral-700 absolute w-full left-0 top-9 shadow-xl py-4 px-4 flex flex-col gap-4">

            {/* Mobile Links Grid */}
            <div className="grid grid-cols-2 gap-3">
              {topMenuItems.map((item) => (
                <Link
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='text-xs text-neutral-300 hover:text-[#B31942] transition-colors'
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="h-[1px] bg-neutral-700 w-full my-1"></div>

            {/* Mobile Settings & Socials */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <Link href={''} className='flex items-center gap-1.5 text-xs hover:text-[#B31942]'>English-USD <ChevronDown className="w-3 h-3" /></Link>
                <Link href={''} className='flex items-center gap-1.5 text-xs hover:text-[#B31942]'>Country <ChevronDown className="w-3 h-3" /></Link>
              </div>

              <div className="flex gap-4 justify-start mt-2">
                <Link href={'/'}><Linkedin className='w-4 h-4 hover:text-[#B31942]' /></Link>
                <Link href={'/'}><Facebook className='w-4 h-4 hover:text-[#B31942]' /></Link>
                <Link href={'/'}><Instagram className='w-4 h-4 hover:text-[#B31942]' /></Link>
                <Link href={'/'}><Twitter className='w-4 h-4 hover:text-[#B31942]' /></Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default TopNavbar
