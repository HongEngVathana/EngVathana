import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Menu,
  X,
  Sun,
  Moon,
  FileText,
  Mail,
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  openResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, openResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'hero',
        'about',
        'experience',
        'architecture',
        'skills',
        'contact',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? darkMode
            ? 'bg-[#0a0a0b]/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-sm'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs'
          : darkMode
          ? 'bg-[#0a0a0b]/80 backdrop-blur-xs py-4 border-b border-transparent'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Simple & Clean Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          id="nav-brand-logo"
        >
          <div
            className={`w-9 h-9 rounded-xl border overflow-hidden transition-transform group-hover:scale-105 shrink-0 ${
              darkMode
                ? 'bg-slate-900 border-slate-800'
                : 'bg-slate-100 border-slate-200 shadow-2xs'
            }`}
          >
            <img
              src={PERSONAL_INFO.profileImage || '/profile.jpg'}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold text-sm tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-500 font-normal">
              Software Engineer • US Remote
            </span>
          </div>
        </a>

        {/* Clean, Simple UI Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isTargetActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isTargetActive
                    ? darkMode
                      ? 'text-white bg-slate-800 font-semibold'
                      : 'text-slate-900 bg-slate-100 font-semibold'
                    : darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls - Simple and Clean */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-colors border ${
              darkMode
                ? 'bg-[#121214] text-slate-300 border-slate-800 hover:bg-slate-800'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
            id="theme-toggle-btn"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Simple Resume Button */}
          <button
            onClick={openResume}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors border ${
              darkMode
                ? 'bg-[#121214] text-slate-200 border-slate-700 hover:bg-slate-800'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
            id="nav-resume-btn"
          >
            <FileText className="w-3.5 h-3.5 text-slate-500" />
            <span>Resume</span>
          </button>

          {/* Simple Contact Link */}
          <a
            href="#contact"
            className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              darkMode
                ? 'bg-white text-black hover:bg-slate-200'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
            id="nav-contact-cta"
          >
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg border ${
              darkMode
                ? 'bg-[#121214] text-slate-300 border-slate-800'
                : 'bg-white text-slate-700 border-slate-200'
            }`}
            aria-label="Toggle Navigation"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-5 space-y-1.5 shadow-md ${
            darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-white border-slate-200'
          }`}
          id="mobile-drawer-content"
        >
          <div className="grid grid-cols-2 gap-1 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? darkMode
                      ? 'bg-slate-800 text-white font-semibold'
                      : 'bg-slate-100 text-slate-900 font-semibold'
                    : darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openResume();
              }}
              className={`flex-1 py-2 px-3 rounded-full text-xs font-medium flex items-center justify-center gap-1.5 border ${
                darkMode
                  ? 'bg-[#121214] text-slate-200 border-slate-800'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
