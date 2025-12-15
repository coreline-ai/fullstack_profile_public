import React from 'react';
import { SKILLS } from '../constants';
import Icon from './Icon';

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-[#1a1625] border-y border-[#f1f0f4] dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col max-w-[960px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[#131118] dark:text-white text-3xl font-bold leading-tight tracking-tight mb-4">
              Technical Proficiency
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My tech stack is built on modern, scalable technologies. I focus on performance, type safety, and maintainable codebases.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-[#dedbe6] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className={`p-3 rounded-full ${skill.bgClass} ${skill.colorClass} group-hover:scale-110 transition-transform`}>
                  <Icon name={skill.icon} className="text-3xl" />
                </div>
                <h3 className="text-[#131118] dark:text-white text-base font-bold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;