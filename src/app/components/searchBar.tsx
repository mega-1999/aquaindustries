'use client'
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menuData } from '@/lib/menuData2';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const SearchBar = () => {
    // State to track the selected category ID
    const [selectedId, setSelectedId] = useState("all");

    // Helper function to get the label of the selected category
    const getSelectedLabel = () => {
        if (selectedId === "all") return "All";
        const category = Object.values(menuData).find((item) => item.id === selectedId);
        return category ? category.label : "All";
    };

    return (
        <div className="hidden md:flex max-w-xl w-full mx-4 h-10 items-center border border-red-200 rounded-md overflow-hidden bg-white">

            {/* === 1. CUSTOM DROPDOWN === */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button
                        className="
        relative h-full shrink-0 
        pl-3 pr-7 
        text-xs font-semibold 
        transition-colors duration-200
        w-[200px] text-left
        cursor-pointer focus:outline-none

        /* === NORMAL STATE === */
        bg-white 
        text-[#0A3161] 
        border-r border-[#CCCCCC]

        /* === HOVER STATE === */
        hover:bg-[#B31942] 
        hover:text-white
        hover:border-[#B31942]
    "
                    >
                        <span className="block w-full truncate">
                            {getSelectedLabel()}
                        </span>

                        {/* Chevron Icon: Black normally, turns White on hover via group logic */}
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-[#0A3161] pointer-events-none transition-colors duration-200" />

                        {/* Note: The icon won't change color automatically unless you add a CSS rule or 
       use the 'group' class on the button and 'group-hover:text-white' on the icon.
       See updated Icon line below for the fix:
    */}
                    </button>
                </DropdownMenuTrigger>

                {/* Dropdown Content - Square Borders */}
                <DropdownMenuContent
                    align="start"
                    className="
                        w-[200px] max-h-[300px] overflow-y-auto 
                        bg-white p-0 shadow-lg border border-[#0A3161]/10 z-[60]
                        rounded-none 
                    "
                >
                    {/* "All" Option */}
                    <DropdownMenuItem
                        onClick={() => setSelectedId("all")}
                        className="
                            cursor-pointer text-xs font-semibold px-3 py-2 text-[#0A3161]
                            rounded-none
                            focus:bg-[#B31942] focus:text-white
                        "
                    >
                        All
                    </DropdownMenuItem>

                    {/* Menu Items */}
                    {Object.values(menuData).map((section) => (
                        <DropdownMenuItem
                            key={section.id}
                            onClick={() => setSelectedId(section.id)}
                            className="
                                cursor-pointer text-xs font-semibold px-3 py-2 text-[#0A3161]
                                rounded-none
                                focus:bg-[#B31942] focus:text-white
                            "
                        >
                            {section.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* === 2. INPUT === */}
            <input
                type="text"
                placeholder="Search products..."
                className="w-full h-full pl-3 pr-4 text-sm text-[#0A3161] focus:outline-none placeholder:text-[#0A3161]/60"
            />

            {/* === 3. BUTTON === */}
            <Button className="h-full rounded-none px-6 bg-[#B31942] hover:bg-[#B31942] text-white font-semibold text-xs uppercase tracking-wide">
                Search
            </Button>
        </div>
    )
}

export default SearchBar
