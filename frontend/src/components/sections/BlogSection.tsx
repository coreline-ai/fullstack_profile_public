'use client';

import React from 'react';
import Icon from '@/components/ui/Icon';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogSectionProps {
    posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
    return (
        <section id="blog" className="py-12 bg-gray-50 dark:bg-[#1a1625] scroll-mt-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-[#131118] dark:text-white text-3xl font-bold mb-2">Latest Articles</h2>
                        <p className="text-gray-600 dark:text-gray-400">Thoughts on development, design, and productivity.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/blog" className="hidden sm:inline-flex items-center text-[#6366f1] font-bold hover:text-[#5558e6] transition-colors group">
                            View all posts
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                            aria-label="Scroll to top"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.5a.75.75 0 010 1.08l-5.5 5.5a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => {
                        // Defaults for dynamic data
                        const category = post.tags?.[0] || 'General';
                        const imageUrl = post.imageUrl || "https://placehold.co/600x400/png";
                        const categoryBg = post.categoryBg || 'bg-primary/10';
                        const categoryColor = post.categoryColor || 'text-primary';

                        return (
                            <article
                                key={post.slug || index}
                                className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full relative"
                            >
                                <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`}>
                                    <span className="sr-only">Read {post.title}</span>
                                </Link>

                                <div
                                    className="h-48 w-full bg-cover bg-center"
                                    style={{ backgroundImage: `url('${imageUrl}')` }}
                                    aria-label={post.title}
                                ></div>

                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex gap-2 mb-3 relative z-20 pointer-events-none">
                                        <span className={`px-2 py-1 text-xs font-semibold rounded ${categoryBg} ${categoryColor}`}>
                                            {category}
                                        </span>
                                        {post.publishedAt && (
                                            <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-gray-700 rounded">
                                                {new Date(post.publishedAt).toLocaleDateString('en-US')}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-[#131118] dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                        {post.summary}
                                    </p>

                                    <span className="text-[#6366f1] font-bold text-sm flex items-center gap-1 mt-auto group-hover:underline">
                                        Read Article
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.5a.75.75 0 010 1.08l-5.5 5.5a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-8 sm:hidden flex justify-center items-center gap-4">
                    <Link href="/blog" className="inline-flex items-center text-[#6366f1] font-bold hover:text-[#5558e6] transition-colors group">
                        View all posts
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        aria-label="Scroll to top"
                    >
                        <Icon name="arrow_forward" className="text-sm" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
