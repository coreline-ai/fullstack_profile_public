'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f1f0f4] dark:border-gray-800">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo (Currently Hidden or specific icon) */}
                    <div className="flex items-center gap-2">
                        {/* Keeping existing Logo logic but simplifying based on request context if needed, 
                            but for now preserving the logo code as it wasn't explicitly asked to be changed, 
                            only the menu text. */}
                        <Link href="/" className="flex items-center gap-2 text-[#131118] dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="size-6 sm:size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V9.75A.75.75 0 0112 9zm-2.43 3.324a.75.75 0 111.05-1.06l1.313 1.313a.75.75 0 010 1.06l-1.313 1.313a.75.75 0 01-1.05-1.06l.783-.783-.783-.783zM17 14h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-lg sm:text-xl font-bold tracking-tight">AlexDev</h2>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-8">
                            {/* Home: Black/Dark and Semibold */}
                            <Link href="/" className="text-sm font-bold text-[#131118] dark:text-white transition-colors">
                                Home
                            </Link>

                            {/* Others: Gray and Medium, hover primary */}
                            <Link href="/#experience" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#6366f1] transition-colors">
                                About
                            </Link>

                            <Link href="/#projects" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#6366f1] transition-colors">
                                Projects
                            </Link>

                            <Link href="/#blog" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#6366f1] transition-colors">
                                Blog
                            </Link>
                        </div>

                        {/* Contact Me Button */}
                        <div className="flex items-center gap-4">
                            <Link href="/contact" className="flex h-10 px-6 items-center justify-center rounded-lg bg-[#6366f1] text-white text-sm font-bold shadow-lg shadow-[#6366f1]/20 hover:bg-[#5558e6] hover:-translate-y-0.5 transition-all cursor-pointer">
                                Contact Me
                            </Link>

                            <Link href="/admin" className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden border border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-[#6366f1] transition-all cursor-pointer">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDReMvFIGk9PA56ars8m5UIaPhmGYdPuDTEHav-YvEX4WAoz5Zpio5lcZ4jhm-FnF_AITBcCBO-Ly7r2YiIZmt3u6ZUUDp2scnmEQrTTNy-nDsUbq-mbtRIqxpxwDaZuR0UohQerJ-I6AECCbHW01by1UCBiF1iXPixg_hBQVcQmRXVRqTBRhHrNjQdwDGUwibLv3N1oaPjbgdYQdHf-_00SfVhfApdbgBWRXnSXIzC_2wlQm8l8pZ6--g-oIaDW5PvEVm8VKof6X0"
                                    alt="Admin Profile"
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden text-gray-800 dark:text-white cursor-pointer" onClick={toggleMobileMenu}>
                        <Icon name="menu" className="text-3xl" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 shadow-xl p-4 flex flex-col gap-4">
                    <Link href="/" className="text-sm font-bold text-[#131118] dark:text-white transition-colors">Home</Link>
                    <Link href="/#experience" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#6366f1] transition-colors">About</Link>
                    <Link href="/#projects" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#6366f1] transition-colors">Projects</Link>
                    <Link href="/#blog" className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#6366f1] transition-colors">Blog</Link>
                    <Link href="/contact" className="flex h-10 px-5 items-center justify-center rounded-lg bg-[#6366f1] text-white text-sm font-bold shadow-lg shadow-[#6366f1]/20 hover:bg-[#5558e6] transition-all w-full cursor-pointer">
                        Contact Me
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;
