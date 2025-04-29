import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import { ThemeProvider } from './context/ThemeContext';

import BlobCursor from './components/ui/BlobCursor';

import SplashCursor from '../src/components/ui/SplashCursor';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        <div 
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 z-50 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
        <SplashCursor/>
        <Header />
        <main>
          <Home />
          <About />
          <Projects />
          <Resume />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;