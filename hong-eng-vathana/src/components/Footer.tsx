import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  openResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, openResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t transition-colors ${
        darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-white border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
            darkMode ? 'border-slate-800' : 'border-slate-100'
          }`}
        >
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-xs ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-900'
              }`}
            >
              HEV
            </div>
            <div>
              <span
                className={`font-bold text-sm tracking-tight block ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-slate-500">
                Software Engineer • Year 4 CS
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500 font-medium">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#architecture" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Architecture
            </a>
            <a href="#leadership" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Leadership
            </a>
            <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Education
            </a>
            <button
              onClick={openResume}
              className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
            >
              Resume
            </button>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-[#121214] border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-[#121214] border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-[#121214] border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className={`p-2 rounded-xl border transition-all ml-1 cursor-pointer ${
                darkMode
                  ? 'bg-white text-black hover:bg-slate-200'
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xs'
              }`}
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Hong Eng Vathana. Designed & engineered with Clean Architecture.
          </div>
          <div>
            3 Years Remote Experience • US-Based Company • Year 4 CS Student
          </div>
        </div>
      </div>
    </footer>
  );
};
