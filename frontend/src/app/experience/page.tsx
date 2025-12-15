import React from 'react';
import { TimelineItem } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

async function fetchTimeline(): Promise<TimelineItem[]> {
    try {
        const res = await fetch(`${API_BASE}/timeline`, { cache: "no-store", next: { revalidate: 0 } });
        if (!res.ok) throw new Error("Failed to load timeline");
        return res.json();
    } catch {
        return [
            {
                id: "1",
                title: "Senior Engineer",
                place: "TechCorp Inc.",
                period: "Present",
                bullets: ["Leading migration to Next.js", "Mentoring juniors", "Improved build speed by 40%"],
            },
            {
                id: "2",
                title: "Frontend Developer",
                place: "StartUp Studio",
                period: "2020 - 2022",
                bullets: ["Developed responsive web apps for fintech clients"],
            },
            {
                id: "3",
                title: "BS Computer Science",
                place: "University of Tech",
                period: "2018",
                bullets: ["Graduated with Honors", "Specialized in HCI"],
            },
        ];
    }
}

export default async function ExperiencePage() {
    const items = await fetchTimeline();

    return (
        <main className="min-h-screen pt-24 pb-24 bg-white dark:bg-[#1a1625]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                <div className="max-w-3xl mx-auto mb-16">
                    <h1 className="text-[#131118] dark:text-white text-5xl font-black mb-6 leading-tight">
                        Professional<br />Experience
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        A detailed timeline of my career journey, education, and key milestones.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto relative border-l border-gray-100 dark:border-gray-800 space-y-12 pl-4 sm:pl-8">
                    {items.map((item, index) => (
                        <div key={item.id || index} className="relative pl-8 group">
                            {/* Dot */}
                            <div className="absolute left-[-5px] sm:left-[-1px] top-2 w-[10px] h-[10px] rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-[#6366f1] transition-colors border-2 border-white dark:border-[#1a1625] translate-x-[-50%]"></div>

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
        </main>
    );
}
