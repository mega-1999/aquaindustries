'use client'

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from '@/components/ui/menubar';
import { menuData } from '@/lib/menuData2';
import {
    BookAIcon,
    ChevronDownIcon,
    ChevronRight,
    Menu,
    Search,
    SquareChevronDownIcon,
    User,
    UserCheck2Icon,
    X,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ScrollableMenu from './scrollableMenus';
import SearchBar from './searchBar';

const loginOptions = [
    {
        id: 1,
        title: "Corporate & Operations",
        links: [
            { label: "Team Metalverse Login", href: "/login/team" },
            { label: "Customer Login", href: "/login/customer" },
            { label: "Logistics Login", href: "/login/logistics" },
            { label: "Foundries Login", href: "/login/foundry" },
            { label: "Forge Shops Login", href: "/login/forge" },
            { label: "Fabricators Login", href: "/login/fabricator" },
            { label: "Other Vendors Login", href: "/login/vendor" }
        ]
    },
    {
        id: 2,
        title: "Professionals",
        links: [
            { label: "Engineers / Architects Login", href: "/login/engineer" }
        ]
    }
];

const topMenuItems = [
    { label: 'New Factories', href: '/sellerHomepage', content: 'Supplier', icon: UserCheck2Icon },
    { label: 'Request for', href: '#', content: 'Quotations', icon: BookAIcon },
    { label: 'Welcome', href: '#', content: 'Sign In/Register', icon: User, isLogin: true }
];

const countryOptions = [
    { label: "USA", flag: "🇺🇸", id: "us" },
    { label: "Canada", flag: "🇨🇦", id: "ca" },
    { label: "Latin America", flag: "🇧🇷", id: "lat" },
    { label: "North America", flag: "🌎", id: "na" },
    { label: "Caribbean", flag: "🇯🇲", id: "car" },
    { label: "Europe", flag: "🇪🇺", id: "eu" },
]

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showSticky, setShowSticky] = useState(false);
    // === 1. SCROLL LISTENER ===
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowSticky(true);
            } else {
                setShowSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // === 2. REUSABLE USER MENU (Login/Icons) ===
    // We use this in both the Main Navbar and the Sticky Navbar
    const UserMenu = () => (
        <div className="flex items-center space-x-6">
            {topMenuItems.map((item) => {
                if (item.isLogin) {
                    return (
                        <DropdownMenu key={item.label}>
                            <DropdownMenuTrigger className="flex items-center gap-2 group outline-none cursor-pointer">
                                <div className='text-[#0A3161] group-hover:text-[#B31942] transition-colors'>
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col justify-center text-left">
                                    <p className='text-sm text-[#0A3161]/70 leading-tight'>{item.label}</p>
                                    <p className='text-xs font-bold text-[#0A3161] group-hover:text-[#B31942] transition-colors'>{item.content}</p>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[420px] p-3 bg-white border border-[#0A3161]/10 shadow-lg rounded-md">
                                <div className="grid grid-cols-2 gap-2">
                                    {loginOptions.map((group) => (
                                        <div key={group.id} className="space-y-1">
                                            <h4 className="text-[13px] font-semibold text-[#0A3161]/70 px-2">{group.title}</h4>
                                            {group.links.map((item) => (
                                                <DropdownMenuItem key={item.href} asChild>
                                                    <Link href={item.href} className="cursor-pointer flex items-center gap-2 py-2 hover:bg-[#B31942]/5 rounded px-2 group">
                                                        <ChevronRight className="w-4 h-4 text-[#B31942] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        <span className="font-medium text-[13px] text-[#0A3161] group-hover:text-[#B31942]">{item.label}</span>
                                                    </Link>
                                                </DropdownMenuItem>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )
                }
                return (
                    <Link className='flex items-center gap-2 group' key={item.label} href={item.href}>
                        <div className='text-[#0A3161] group-hover:text-[#B31942] transition-colors'>
                            <item.icon size={28} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className='text-sm text-[#0A3161]/70 leading-tight'>{item.label}</p>
                            <p className='text-xs font-bold text-[#0A3161] group-hover:text-[#B31942] transition-colors'>{item.content}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );

    return (
        <>
            <header className="bg-white shadow-md z-40 relative">



                <div className="w-full px-4 sm:px-6 lg:px-10 "> {/* Added py-4 for spacing */}

                    {/* Changed items-center to items-start to align logos at the top */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-2">

                        {/* === LEFT SECTION (Logo) === */}
                        <div className="w-full lg:w-auto flex justify-between items-center shrink-0">
                            <Link href={'/'} className="shrink-0 flex items-center">
                                <Image
                                    src={'/MIL.png'}
                                    alt='Metalverse Industries'
                                    width={400}
                                    height={120}
                                    className="object-contain h-16 w-auto lg:h-20"
                                    priority
                                />
                            </Link>
                            
                            {/* Mobile Menu Button */}
                            <div className="flex items-center gap-2 lg:hidden">
                                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-[#0A3161] hover:text-[#B31942] transition-colors">
                                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>

                        {/* === CENTER SECTION (Search) === */}
                        <div className="hidden lg:flex flex-col items-center justify-center w-full max-w-2xl">
                            <div className="w-full">
                                <SearchBar />
                            </div>
                        </div>

                        {/* === RIGHT SECTION (User Menu) === */}
                        <div className="hidden lg:flex flex-col justify-center items-end shrink-0">
                            <UserMenu />
                        </div>
                    </div>
                </div>


                {/* === MOBILE MENU DRAWER === */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-[#0A3161]/10 px-4 py-4 shadow-inner space-y-4 h-[calc(100vh-80px)] overflow-y-auto">
                        {topMenuItems.map((item) => (
                            <div key={item.label}>
                                {item.isLogin ? (
                                    <div className="space-y-2 bg-white p-3 rounded-lg border border-[#0A3161]/10">
                                        <div className='flex items-center gap-4 text-[#B31942] mb-3'>
                                            <item.icon size={24} />
                                            <div>
                                                <p className='text-xs text-[#0A3161]/60'>{item.label}</p>
                                                <p className='text-sm font-bold'>Select Login Type</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 px-1">
                                            {loginOptions.map((group) => (
                                                <div key={group.id} className="space-y-1">
                                                    <h4 className="text-[12px] font-semibold text-[#0A3161]/70 pl-1">{group.title}</h4>
                                                    {group.links.map((link) => (
                                                        <Link key={link.href} href={link.href} className="flex items-center gap-2 p-2 rounded text-[13px] text-[#0A3161] hover:bg-[#B31942]/5 hover:text-[#B31942]">
                                                            <ChevronRight className="w-3 h-3" />
                                                            {link.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link className='flex items-center gap-4 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all' href={item.href}>
                                        <div className='text-[#B31942]'><item.icon size={24} /></div>
                                        <div>
                                            <p className='text-xs text-[#0A3161]/60'>{item.label}</p>
                                            <p className='text-sm font-bold text-[#0A3161]'>{item.content}</p>
                                        </div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
                <ScrollableMenu />
            </header>

            <div
                className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-41 transition-transform duration-300 ease-in-out ${showSticky ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <div className="w-full px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between gap-4 -pb-4">
                        {/* Sticky Logo */}
                        <Link href={'/'} className="shrink-0">
                            <Image src={'/MIL.png'} alt='Metalverse Industries' height={70} width={130} className=" object-contain py-2 h-16 w-auto" />
                        </Link>

                        <SearchBar />

                        <div className="hidden lg:block ">
                            <UserMenu />
                        </div>

                        <div className="flex items-center gap-2 lg:hidden ml-auto">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-[#0A3161]">
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
                <ScrollableMenu />
            </div>
        </>
    )
}

export default Navbar
