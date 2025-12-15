'use client';

import React from 'react';
import Icon from '@/components/ui/Icon';

const Hero: React.FC = () => {
    return (
        <section className="relative w-full bg-white dark:bg-background-dark overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-6 lg:py-12">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 flex flex-col items-start gap-6 text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eeeaff] text-[#5b2bee] text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-[#5b2bee]"></span>
                            Available for work
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#131118] dark:text-white leading-[1.1] tracking-tight">
                            Hi, I'm Alex. <br />
                            I build <span className="text-gradient">accessible, pixel-perfect</span> web experiences.
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                            Full Stack Developer specializing in React, Node.js, and modern UI design. I transform complex problems into beautiful, intuitive digital solutions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-[#6366f1] text-white text-base font-bold shadow-lg shadow-indigo-500/25 hover:bg-[#5558dd] hover:-translate-y-0.5 transition-all cursor-pointer">
                                View Projects
                            </button>
                            <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-[#131118] dark:text-white text-base font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-transparent dark:border-gray-700 cursor-pointer">
                                Contact Me
                            </button>
                        </div>

                        <div className="flex items-center gap-6 pt-6 text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">5+ Years Exp.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center justify-center p-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-medium">50+ Clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative z-10">
                        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 ease-out border-4 border-white dark:border-gray-800 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDReMvFIGk9PA56ars8m5UIaPhmGYdPuDTEHav-YvEX4WAoz5Zpio5lcZ4jhm-FnF_AITBcCBO-Ly7r2YiIZmt3u6ZUUDp2scnmEQrTTNy-nDsUbq-mbtRIqxpxwDaZuR0UohQerJ-I6AECCbHW01by1UCBiF1iXPixg_hBQVcQmRXVRqTBRhHrNjQdwDGUwibLv3N1oaPjbgdYQdHf-_00SfVhfApdbgBWRXnSXIzC_2wlQm8l8pZ6--g-oIaDW5PvEVm8VKof6X0')" }}
                                aria-label="Professional portrait of a male developer smiling in a modern office workspace"
                            ></div>

                            {/* Floater Card */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur rounded-xl shadow-lg z-20 flex items-center justify-between border border-gray-100 dark:border-gray-700">
                                <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Current Focus</p>
                                    <p className="text-sm font-bold text-[#131118] dark:text-white">Building SaaS Platforms</p>
                                </div>
                                <div className="size-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                                    <Icon name="code" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
