'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Paperclip, CheckCircle2 } from 'lucide-react';

const benefits = [
    "One-click request, multiple quotes – Instantly get offers from a wide range of suppliers.",
    "Verified suppliers matched to you – Only connect with verified, trustworthy suppliers.",
    "Compare and save – Compare offers and pricing at a glance.",
    "Easy sample requests – Request product samples directly from suppliers.",
    "Boost efficiency – Simplify your entire sourcing process and cut down decision time."
];

export default function SourcingRequest() {
    return (
        <section id="get-quote" className="relative w-full py-16 md:py-24 overflow-hidden">
            {/* === BACKGROUND IMAGE === */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/image11.jpg" // Replace with your actual background image
                    alt="Office Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0A3161]/70"></div>
            </div>

            {/* === CONTENT CONTAINER === */}
            <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* === LEFT COLUMN: THE FORM === */}
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-2xl">
                        <div className="mb-6">
                            <span className="text-[#B31942] font-bold uppercase tracking-wider text-sm">
                                SEND US A MESSAGE
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#0A3161] mt-1">
                                Let’s commence <span className="text-[#B31942]">your projects</span>
                            </h3>
                        </div>

                        <form className="space-y-4">
                            {/* Product Name */}
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Product Name"
                                    className="bg-white border-[#0A3161]/20 h-12"
                                />
                            </div>

                            {/* Quantity & Unit Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <Input
                                    type="number"
                                    placeholder="Purchase Quantity"
                                    className="bg-white border-[#0A3161]/20 h-12"
                                />

                                <Select>
                                    <SelectTrigger className="h-12 border-[#0A3161]/20 text-[#0A3161]/70">
                                        <SelectValue placeholder="Unit/Sets" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="pieces">Pieces</SelectItem>
                                        <SelectItem value="sets">Sets</SelectItem>
                                        <SelectItem value="tons">Tons</SelectItem>
                                        <SelectItem value="kg">Kilograms</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Description */}
                            <div>
                                <Textarea
                                    placeholder="Please describe your specific sourcing requirements for product attributes, desired quantity, and any additional services you expect from suppliers"
                                    className="bg-white border-[#0A3161]/20 min-h-[120px] resize-none"
                                />
                            </div>

                            {/* Attachment Link */}
                            <div className="flex items-center gap-2 text-[#B31942] cursor-pointer hover:underline w-fit">
                                <Paperclip className="w-4 h-4" />
                                <span className="text-sm font-medium">Add Attachment</span>
                            </div>

                            {/* Submit Button */}
                            <Button className="w-full sm:w-auto bg-[#B31942] hover:bg-[#B31942] text-white font-bold py-6 px-8 text-base rounded-md mt-2">
                                Post Your Request
                            </Button>
                        </form>
                    </div>

                    {/* === RIGHT COLUMN: TEXT CONTENT === */}
                    <div className="text-white space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Seamless and smart production on your own terms
                            </h2>
                            <p className="text-[#0A3161]/40 text-lg">
                                Easily submit your sourcing inquiries and receive competitive quotes.
                            </p>
                        </div>

                        <ul className="space-y-5">
                            {benefits.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                                    <span className="text-gray-100 text-base leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>



        </section>
    );
}
