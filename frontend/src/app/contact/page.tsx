'use client';

import React from 'react';
import { ContactForm } from "@/app/_components/contact-form";

export default function ContactPage() {
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

    const socialLinks = [
        {
            name: "LinkedIn",
            sub: "Professional Profile",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-1.27-1-1.27-.77 0-1.18.55-1.18 1.38V19h-3v-9h3v1.23c.36-.67 1.18-1 2.13-1 2 0 3.05 1.25 3.05 3.73V19z" />
                </svg>
            ),
            href: "#"
        },
        {
            name: "GitHub",
            sub: "Code Repositories",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            ),
            href: "#"
        },
        {
            name: "Email",
            sub: "hello@example.com",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            ),
            href: "mailto:hello@example.com"
        },
    ];

    return (
        <main className="min-h-screen pt-24 pb-24 bg-gray-50 dark:bg-background-dark flex items-center justify-center">
            <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content */}
                    <div className="pt-8">
                        <h1 className="text-5xl sm:text-6xl font-black text-[#131118] dark:text-white leading-tight mb-8">
                            Let's Build <br />
                            Something <br />
                            <span className="text-[#6366f1]">Together</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-lg">
                            I am currently open to full-time opportunities and freelance projects. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-12 font-medium">
                            Feel free to reach out using the form, or connect with me directly through these platforms:
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 pr-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow group min-w-[200px]"
                                >
                                    <div className="size-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-[#131118] dark:text-white group-hover:scale-110 transition-transform">
                                        {link.icon}
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#131118] dark:text-white">{link.name}</p>
                                        <p className="text-xs text-gray-500 font-medium">{link.sub}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Content (Form) */}
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
                        <ContactForm apiBase={API_BASE} />
                    </div>

                </div>
            </div>
        </main>
    );
}
