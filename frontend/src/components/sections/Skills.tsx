'use client';

import React from 'react';
import { SKILLS } from '@/lib/constants';
import Icon from '@/components/ui/Icon';

const Skills: React.FC = () => {
    return (
        <section className="py-12 bg-gray-50 dark:bg-background-dark relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-10 relative z-10">
                <div className="mb-16 md:text-center max-w-2xl mx-auto">
                    <h2 className="text-[#131118] dark:text-white text-3xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        A curated stack of technologies I use to build robust, scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                    {SKILLS.map((skill) => (
                        <div
                            key={skill.name}
                            className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`size-12 rounded-lg flex items-center justify-center mb-4 ${skill.bgClass} ${skill.colorClass} group-hover:scale-110 transition-transform`}>
                                <Icon name={skill.icon} className="text-2xl" />
                            </div>
                            <h3 className="font-bold text-[#131118] dark:text-white mb-1">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
