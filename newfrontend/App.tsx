import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-display">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;