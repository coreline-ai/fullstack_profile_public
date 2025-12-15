'use client';

import React from 'react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import { Project } from '@/types';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section id="projects" className="py-12 dark:bg-background-dark scroll-mt-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                <div className="flex justify-between items-end mb-10">
                    <div className="max-w-2xl">
                        <h2 className="text-[#131118] dark:text-white text-3xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            A selection of projects that showcase my technical skills and problem-solving abilities.
                        </p>
                    </div>
                    <Link href="/projects" className="hidden sm:flex items-center text-primary font-bold hover:underline">
                        View all projects
                        <Icon name="arrow_forward" className="text-sm ml-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.slug || index}
                            className="group relative rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View ${project.title}`}>
                                <span className="sr-only">View {project.title}</span>
                            </Link>

                            {/* Image */}
                            <div className="aspect-video w-full bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${project.thumbnail || "https://placehold.co/600x400/png"}')` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full relative z-20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-[#131118] dark:text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                                    {project.summary}
                                </p>

                                <div className="flex items-center gap-4">
                                    <span className="inline-flex items-center font-bold text-sm text-[#131118] dark:text-white hover:text-primary transition-colors">
                                        View Case Study
                                        <Icon name="arrow_forward" className="ml-1 text-lg" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
