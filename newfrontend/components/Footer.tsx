import React from 'react';
import Icon from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-white/10 rounded-lg flex items-center justify-center text-primary">
                <Icon name="terminal" className="text-xl" />
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
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Socials */}
          <div>
            <h3 className="font-bold text-lg mb-4">Socials</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Icon name="code" className="text-sm" /> GitHub</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Icon name="alternate_email" className="text-sm" /> LinkedIn</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-primary transition-colors"><Icon name="public" className="text-sm" /> Twitter / X</a></li>
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