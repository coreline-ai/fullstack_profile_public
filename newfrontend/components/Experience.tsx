import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import Icon from './Icon';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Section Header */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Career Path</span>
            <h2 className="text-[#131118] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
              Experience &amp; Education
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              A timeline of my professional journey and academic background.
            </p>
            <div className="mt-4">
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                <span>Download Resume</span>
                <Icon name="arrow_forward" className="text-sm" />
              </button>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="lg:col-span-8">
            <div className="relative flex flex-col gap-8 pl-6 border-l-2 border-gray-100 dark:border-gray-800">
              {EXPERIENCE_DATA.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Dot */}
                  <div className={`absolute -left-[31px] top-2 size-4 rounded-full border-4 border-white dark:border-background-dark shadow-sm transition-colors ${index === 0 ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-primary'}`}></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <h3 className="text-xl font-bold text-[#131118] dark:text-white">{item.role}</h3>
                    <span className={`text-sm font-semibold px-2 py-1 rounded ${index === 0 ? 'text-primary bg-primary/10' : 'text-gray-500 bg-gray-100 dark:bg-gray-800'}`}>
                      {item.period}
                    </span>
                  </div>
                  
                  <h4 className="text-base font-medium text-gray-800 dark:text-gray-200 mb-3">{item.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Experience;