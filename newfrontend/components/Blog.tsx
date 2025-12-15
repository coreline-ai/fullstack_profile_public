import React from 'react';
import { BLOG_POSTS } from '../constants';
import Icon from './Icon';

const Blog: React.FC = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-[#1a1625]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-[#131118] dark:text-white text-3xl font-bold mb-2">Latest Articles</h2>
            <p className="text-gray-600 dark:text-gray-400">Thoughts on development, design, and productivity.</p>
          </div>
          <a href="#" className="hidden sm:flex items-center text-primary font-bold hover:underline">
            View all posts
            <Icon name="arrow_forward" className="text-sm ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article 
              key={index}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div 
                className="h-48 w-full bg-cover bg-center" 
                style={{ backgroundImage: `url('${post.imageUrl}')` }}
                aria-label={post.altText}
              ></div>
              
              <div className="flex flex-col flex-1 p-6">
                <div className="flex gap-2 mb-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${post.categoryBg} ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <span className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-gray-700 rounded">
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-[#131118] dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                
                <a href="#" className="text-primary font-bold text-sm flex items-center gap-1 group">
                  Read Article
                  <Icon name="arrow_forward" className="text-sm transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden text-center">
          <a href="#" className="inline-flex items-center text-primary font-bold hover:underline">
            View all posts
            <Icon name="arrow_forward" className="text-sm ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;