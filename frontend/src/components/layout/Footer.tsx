'use client';

import React from 'react';
import Link from 'next/link';
// Icon component removed as it is no longer used in this file
// import Icon from '@/components/ui/Icon'; 

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#151022] text-white py-12 border-t border-gray-800">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="size-8 bg-white/10 rounded-lg flex items-center justify-center text-primary">
                                {/* SVG Logo from Header */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 01.75.75v.008a.75.75 0 01-1.5 0V9.75A.75.75 0 0112 9zm-2.43 3.324a.75.75 0 111.05-1.06l1.313 1.313a.75.75 0 010 1.06l-1.313 1.313a.75.75 0 01-1.05-1.06l.783-.783-.783-.783zM17 14h-3a.75.75 0 010-1.5h3a.75.75 0 010 1.5z" clipRule="evenodd" />
                                    <path d="M12.22 7.78a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L15.94 12l-3.72-3.72a.75.75 0 010-1.06z" opacity="0" />
                                    <path d="M2.5 5.5a3 3 0 013-3h13a3 3 0 013 3v13a3 3 0 01-3 3h-13a3 3 0 01-3-3v-13zm5.03 4.47a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 011.06-1.06l2.25 2.25zm4.47 5.28a.75.75 0 010-1.5h4a.75.75 0 010 1.5h-4z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-bold">AlexDev</h2>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            Building digital products, brands, and experiences. Open to freelance opportunities and interesting projects.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Navigation</h3>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/experience" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Socials</h3>
                        <ul className="flex flex-col gap-2 text-gray-400">
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-1.27-1-1.27-.77 0-1.18.55-1.18 1.38V19h-3v-9h3v1.23c.36-.67 1.18-1 2.13-1 2 0 3.05 1.25 3.05 3.73V19z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                                    {/* X Icon (Twitter) */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                                    </svg>
                                    Twitter / X
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2024 AlexDev. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
