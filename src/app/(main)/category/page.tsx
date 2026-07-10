'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { menuData } from '@/lib/menuData2';

export default function CategoryList() {

    const categories = Object.values(menuData);
    // console.log('Categories:-wise', categories);

    return (
        <div className="min-h-screen bg-white py-8">
 
            <div className="w-full px-4 sm:px-6 lg:px-10 mx-auto">
                <p className="text-sm font-bold text-[#0A3161]">
                    <Link href={'/'} className="hover:text-[#B31942]">Home</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[#0A3161]/70 font-normal">All Categories</span>
                </p>
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-10  mx-auto">

                {categories.map((category) => (
                    <div key={category.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(10,49,97,0.04)] border border-[#0A3161]/10 flex flex-col lg:flex-row h-auto lg:h-[600px]">
 
                        <div className="relative w-full lg:w-[320px] h-64 lg:h-full shrink-0 group">
                            <Image 
                                src={category.bannerImage || '/assets/placeholder.jpg'}
                                alt={category.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A3161]/60 via-[#0A3161]/20 to-transparent"></div>
 
                            <div className={`absolute top-6 left-0 px-6 py-2 rounded-r-full font-bold text-lg shadow-sm ${category.color || 'bg-[#0A3161]/10 text-white'}`}>
                                {category.label}
                            </div>
                        </div>
 
                        <div className="flex-1 p-6 lg:p-8 flex flex-col">

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 overflow-y-auto pr-2 custom-scrollbar">
                                {category.categories.map((sub, idx) => (
                                    <Link 
                                        href={`/category/${(sub as any).slug || sub.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
                                        key={idx}
                                        className="group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg mb-3 border border-[#0A3161]/10 shadow-sm">
                                            <Image
                                                src={sub.image || '/assets/placeholder.jpg'}
                                                alt={sub.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col grow">
                                            <h3 className="font-bold text-[#0A3161] text-lg mb-2 group-hover:text-[#B31942] transition-colors">
                                                {sub.name}
                                            </h3>
                                            <p className="text-sm text-[#0A3161]/70 leading-relaxed line-clamp-3">
                                                {sub.description || `Explore our ${sub.name} solutions.`}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* View More Button (Links to Main Category Page e.g. /category/energy) */}
                            <div className="mt-auto pt-6 flex justify-end border-t border-[#0A3161]/10">
                                <Link href={`/category/${category.id}`}>
                                    <Button
                                        variant="ghost"
                                        className="text-[#B31942] hover:text-[#a01b1b] hover:bg-[#B31942]/5 font-semibold flex items-center gap-2 px-4"
                                    >
                                        View More <ChevronDown className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}
