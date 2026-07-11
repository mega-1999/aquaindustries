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

          <div className="flex flex-col justify-evenly gap-16 space-y-6">
            <div>
              <h3 className="text-[#B31942] font-bold uppercase tracking-wider text-sm border-b border-[#B31942]/30 pb-2 w-fit">
                USA Operations
              </h3>

              {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MMO.png'} alt='METALSVERSE Foundries' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MME.png'} alt='METALSVERSE METALS' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MFA.png'} alt='Fabricators' fill className="object-contain" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm space-y-1 text-white/70">
                <p>105 MAXES ROAD</p>
                <p>MELVILLE, NY 11737, USA</p>

              </div>
              {/* Added Mobile Number with Link */}
              <p className='mt-4'>
                <a
                  href="tel:3077887700"
                  className="hover:text-white transition-colors duration-200"
                >
                  307 788 7700
                </a>
              </p>
            </div>

          </div>

          <div className="flex flex-col items-center justify-start">
            {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
            <div className="flex  ">
              <div className="bg-white p-2 rounded-lg w-80 h-36 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <Link href={'/'} className="w-full h-full relative">
                  <Image src={'/MIL.png'} alt='METALSVERSE Industries' fill className="object-contain" />
                </Link>
              </div>
            </div>
          </div>

          {/* --- COL 5: CANADA OPERATIONS (Logos + Info + Subscribe) --- */}
          <div className="flex items-end justify-evenly gap-16 flex-col space-y-6">
            <div>
              <h3 className="text-[#B31942] text-left font-bold uppercase tracking-wider text-sm border-b border-[#B31942]/30 pb-2 w-fit">
                Canada Operations
              </h3>

              {/* OPTIMIZED LOGO PLACEMENT: Side by Side */}
              <div className="flex gap-4  justify-end">
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MFO.png'} alt='MWA' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MCA.png'} alt='METALSVERSE Forge' fill className="object-contain" />
                  </Link>
                </div>
                <div className="bg-white p-2 rounded-lg w-28 h-24 flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <Link href={'/'} className="w-full h-full relative">
                    <Image src={'/MWA.png'} alt='METALSVERSE Forge' fill className="object-contain" />
                  </Link>
                </div>
              </div>
            </div>


            <div>
              <div className="text-sm space-y-1 text-white/70">
                <p>18 King St E Ste 1400</p>
                <p>Toronto, ON M5C IC4, CANADA</p>

              </div>
              {/* Added Mobile Number with Link */}
              <p className='mt-4'>
                <a
                  href="tel:7057105505"
                  className="hover:text-white transition-colors duration-200"
                >
                  705 710 5505
                </a>
              </p>
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
            <h4 className="text-white text-sm font-semibold mb-3 tracking-wide">info@megafoundries.com</h4>
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
            ©1999-2026 Copyright <strong>METALSVERSE Industries & Groups</strong> — All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
