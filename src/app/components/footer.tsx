'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { footerColumns } from '@/lib/menuData2';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const products = [
    { label: 'Molded Gratings', href: "/" },
    { label: 'Pultruded Grating', href: "/" },
    { label: 'Dynaform Structural Shapes', href: "/" },
    { label: 'Dynarail/DynaRound Guardrail & Handrail Products', href: "/" },
    { label: 'Dynarail Ladder Products', href: "/" },
    { label: 'Stair Solutions', href: "/" },
    { label: 'Fiberglass Plate', href: "/" },
    { label: 'Work Platforms', href: "/" },
    { label: 'Accessories / Complementary Products', href: "/" },
    { label: 'Custom Pultrusions', href: "/" },
    { label: 'Metering Pump Stands', href: "/" },
    { label: 'Rooftop Safety Products', href: "/" },
    { label: 'Unique Product Solutions', href: "/" }
  ]
  const market = [
    { label: 'Market Solutions', href: "/" },
    { label: 'Architectural & Commercial', href: "/" },
    { label: 'Chemical', href: "/" },
    { label: 'Data Center Solutions', href: "/" },
    { label: 'Docks & Decking', href: "/" },
    { label: 'Food & Beverage', href: "/" },
    { label: 'General Manufacturing', href: "/" },
    { label: 'Metals & Mining', href: "/" },
    { label: 'Oil & Gas', href: "/" },
    { label: 'Pharmaceutical', href: "/" },
    { label: 'Pulp & Paper', href: "/" },
    { label: 'Recreational', href: "/" },
    { label: 'Technology', href: "/" },
    { label: 'Telecommunications', href: "/" },
    { label: 'Transportation', href: "/" },
    { label: 'Utilities & Power', href: "/" },
    { label: 'Water & Wastewater', href: "/" },
  ]

  const resourceCenter = [
    { label: 'Product Brochures', href: "/" },
    { label: 'Market Overviews', href: "/" },
    { label: 'Case Studies', href: "/" },
    { label: 'Specifications', href: "/" },
    { label: 'Design Guides', href: "/" },
    { label: 'CAD Drawings/Details', href: "/" },
    { label: 'Installation Guides', href: "/" },
    { label: 'Other Technical Documents', href: "/" },
    { label: 'Certifications', href: "/" },
    { label: 'Videos', href: "/" },
    { label: 'SDS (formerly MSDS)', href: "/" },
    { label: 'Infographics', href: "/" },
    { label: 'FAQ', href: "/" },
    { label: 'Glossary', href: "/" },
    { label: 'Design Resources', href: "/" }
  ]

  return (
    <footer className="bg-[#0A3161] text-white/70 border-t border-white/10 font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 pt-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16 border-b border-white/10 pb-12">

          {/* --- COL 1: SALES OFFICE (Left) --- */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-6">


              {/* Logos */}
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MMO.png'} alt='Metalverse Industries' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MME.png'} alt='Metalverse METALS' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MFA.png'} alt='Fabricators' fill className="object-contain" />
                  </Link>
                </div>
              </div>
              {/* Category Badge */}
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#B31942] bg-white px-3 py-1 rounded-sm shadow-sm">
                Sales Office
              </span>
            </div>

            {/* Address Details */}
            <div>
              <div className="text-sm space-y-1 text-white/70 font-light">
                <p className="font-semibold text-white">105 MAXES ROAD</p>
                <p>MELVILLE, NY 11737, USA</p>
              </div>
              <div className="mt-4 flex flex-col gap-1 text-sm text-white/80 font-mono">
                <a
                  href="tel:6314581111"
                  className="hover:text-[#B31942] transition-colors duration-200"
                >
                  Ph: 631 458 1111
                </a>
                <a
                  href="sms:5162521111"
                  className="hover:text-[#B31942] transition-colors duration-200"
                >
                  Text: 516 252 1111
                </a>
              </div>
            </div>
          </div>

          {/* --- COL 2: CORPORATE HEADQUARTERS (Middle) --- */}
          <div className="flex flex-col items-center justify-between text-center gap-8 border-y lg:border-y-0 lg:border-x border-white/10 py-8 lg:py-0 px-4">
            <div className="space-y-6 flex flex-col items-center">


              {/* Main Corporate Logo */}
              <div className="bg-white p-3 rounded-lg w-72 h-32 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MIL.png'} alt='Metalverse Industries' fill className="object-contain" />
                </Link>
              </div>
              {/* Category Badge */}
              <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#B31942] bg-white px-3 py-1 rounded-sm shadow-sm">
                Corporate Headquarters
              </span>
            </div>

            {/* Address Details */}
            <div className="text-sm space-y-1 text-white/70 font-light">
              <p className="font-semibold text-white">GLOBAL OPERATIONS HUB</p>
              <p>105 MAXES ROAD, MELVILLE, NY 11737, USA</p>
              <p className="pt-2 text-xs text-white/50 font-mono">PRIMARY EXECUTIVE MANAGEMENT</p>
            </div>
          </div>

          {/* --- COL 3: INTERNATIONAL OFFICE (Right) --- */}
          <div className="flex flex-col justify-between items-start lg:items-end text-left lg:text-right gap-8">
            <div className="space-y-6 flex flex-col items-start lg:items-end">


              {/* Logos */}
              <div className="flex gap-4 justify-start lg:justify-end">
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MFO.png'} alt='MWA' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MCA.png'} alt='Metalverse Forge' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MWA.png'} alt='Metalverse Forge' fill className="object-contain" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Category Badge */}
            <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#B31942] bg-white px-3 py-1 rounded-sm shadow-sm">
              International Office
            </span>
            {/* Address Details */}
            <div>
              <div className="text-sm space-y-1 text-white/70 font-light">
                <p className="font-semibold text-white">18 KING ST E STE 1400</p>
                <p>TORONTO, ON M5C 1C4, CANADA</p>
              </div>
              <div className="mt-4 text-sm text-white/80 font-mono">
                <a
                  href="tel:7057105505"
                  className="hover:text-[#B31942] transition-colors duration-200"
                >
                  Ph: 705 710 5505
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3 pb-12  ">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-start">

          {footerColumns.map((col) => (
            <div key={col.id} className="flex flex-col gap-6">

              {/* Loop through Sections inside a Column */}
              {col.sections.map((section, index) => (
                <div key={section.title}>

                  {/* Section Title */}
                  <h5 className="text-white font-semibold mb-4 uppercase text-xs tracking-wider text-opacity-70">
                    {section.title}
                  </h5>

                  {/* Links List */}
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xs text-white/60 hover:text-[#B31942] transition-colors block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* Optional Divider if a column has multiple sections (like Support & Quality) */}
                  {index < col.sections.length - 1 && (
                    <hr className="border-t border-white/20 opacity-50 mt-6 mb-2" />
                  )}
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-10 py-2  bg-[#0A3161] border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/10 pb-8">


          {/* --- COL 2: NEWSLETTER (Centered) --- */}
          <div className="flex flex-col items-start w-full">
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide">Subscribe to Newsletter</h4>
            <div className="flex w-full max-w-sm">
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="rounded-r-none border-white/20 bg-white/10 text-white focus:border-[#B31942] h-10 text-sm"
              />
              <Button className="rounded-l-none bg-[#B31942] hover:bg-[#B31942] text-white font-bold h-10 px-6 transition-colors">
                Submit
              </Button>
            </div>
          </div>

          {/* --- COL 1: SOCIAL ICONS (Left Aligned) --- */}
          <div className="flex flex-col items-center md:justify-start">
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide">metalverseltd@gmail.com</h4>
            <div className="flex   justify-center   items-center md:justify-start gap-3 ">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  href={'/'}
                  className='p-2.5 border border-white/20 rounded-full text-white/60 hover:border-[#B31942] hover:text-white hover:bg-[#B31942] transition-all duration-300'
                >
                  <Icon className='w-4 h-4' />
                </Link>
              ))}</div>
          </div>


        </div>
      </div>
      <div className="border-t border-red-800 w-full px-4 sm:px-6 lg:px-10 py-6 pb-10 bg-[#B31942]">
        <div className="flex justify-center items-center">
          <p className="text-lg text-white font-medium">
            ©1999-2026 Copyright <strong>Metalverse Industries & Groups</strong> — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
