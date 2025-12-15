import React, { useState } from 'react';
import Icon from './Icon';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-[#f1f0f4] dark:border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 text-[#131118] dark:text-white cursor-pointer hover:opacity-80 transition-opacity">
            <div className="size-6 sm:size-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
              <Icon name="terminal" className="text-lg sm:text-2xl" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight">AlexDev</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">About</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Blog</a>
            </div>
            <button className="flex h-10 px-5 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 hover:translate-y-[-1px] transition-all">
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-gray-800 dark:text-white cursor-pointer" onClick={toggleMobileMenu}>
            <Icon name="menu" className="text-3xl" />
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800 shadow-xl p-4 flex flex-col gap-4">
             <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">About</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Projects</a>
              <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">Blog</a>
              <button className="flex h-10 px-5 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all w-full">
              Contact Me
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;