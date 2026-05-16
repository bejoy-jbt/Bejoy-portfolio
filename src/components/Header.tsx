import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../data/profile';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'XP', href: '#resume' },
    { name: 'School', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all ${
        isScrolled ? 'py-2 bg-surface/95 border-b-4 border-border' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="font-pixel text-[10px] sm:text-xs text-foreground hover:text-accent"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
        >
          BEJOY<span className="text-accent">.JBT</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={profile.resume.href}
            download={profile.resume.downloadName}
            className="btn-retro !py-2 !px-4 !text-[8px]"
          >
            <Download size={14} />
            CV
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 retro-card-sm bg-surface"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button type="button" onClick={toggleTheme} className="p-2 retro-card-sm" aria-label="Theme">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 retro-card-sm" aria-label="Menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mx-4 mt-2 retro-card p-4 animate-fadeIn">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-pixel text-[9px] py-2 px-2 hover:bg-accent/20"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href={profile.resume.href}
              download={profile.resume.downloadName}
              className="btn-retro mt-2 justify-center !text-[8px]"
            >
              DOWNLOAD CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
