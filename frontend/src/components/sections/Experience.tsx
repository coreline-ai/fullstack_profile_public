'use client';

import React from 'react';
import Link from 'next/link';
import { TimelineItem } from '@/types';

interface ExperienceProps {
    items: TimelineItem[];
}

const Experience: React.FC<ExperienceProps> = ({ items }) => {
    return (
        <section id="experience" className="py-12 bg-white dark:bg-[#1a1625] scroll-mt-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Header */}
                    <div className="lg:col-span-4 self-start sticky top-24">
                        <span className="text-[#6366f1] font-bold tracking-widest uppercase text-sm mb-4 block">
                            Career Path
                        </span>
                        <h2 className="text-[#131118] dark:text-white text-3xl font-bold mb-6 leading-tight">
                            Experience &<br />Education
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-sm text-lg">
                            A timeline of my professional journey and academic background.
                        </p>

                        <Link href="/experience" className="inline-flex items-center text-[#6366f1] font-bold hover:text-[#5558e6] transition-colors group">
                            View All Experiences
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Timeline */}
                    <div className="lg:col-span-8 space-y-12 pl-4 border-l border-gray-100 dark:border-gray-800 relative">
                        {items.map((item, index) => (
                            <div key={item.id || index} className="relative pl-8 group">
                                {/* Dot */}
                                <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-[#6366f1] transition-colors border-2 border-white dark:border-[#1a1625]"></div>

                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-[#131118] dark:text-white">
                                        {item.title}
                                    </h3>
                                    <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${item.period.toLowerCase().includes('present')
                                        ? 'bg-[#6366f1]/10 text-[#6366f1]'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                                        }`}>
                                        {item.period}
                                    </span>
                                </div>

                                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                                    {item.place}
                                </p>

                                <div className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    <ul className="list-disc pl-5 space-y-2">
                                        {item.bullets.map((bullet, idx) => (
                                            <li key={idx}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
