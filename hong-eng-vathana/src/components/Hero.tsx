import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroVisual } from './HeroVisual';
import { TechIcon } from './TechIcon';
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Check,
  Copy,
} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  openResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, openResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const coreTech = [
    { name: 'Angular', label: 'Angular (3Y)' },
    { name: 'Flutter', label: 'Flutter (4Y)' },
    { name: 'C#', label: 'C# / .NET (2Y)' },
    { name: 'TypeScript', label: 'TypeScript' },
    { name: 'PostgreSQL', label: 'PostgreSQL' },
    { name: 'Firebase', label: 'Firebase' },
    { name: 'Docker', label: 'Docker' },
    { name: 'Figma', label: 'Figma' },
  ];

  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card */}
        <div
          className={`rounded-3xl border p-6 sm:p-10 md:p-12 transition-all mb-10 ${
            darkMode
              ? 'bg-[#0d0d0f] border-slate-800'
              : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Profile Pill & Status Badge */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <div
                  className={`inline-flex items-center gap-2.5 pl-1.5 pr-3 py-1 rounded-full text-xs font-medium border ${
                    darkMode
                      ? 'bg-[#141518] border-slate-800 text-slate-200'
                      : 'bg-slate-50 border-slate-200/90 text-slate-800'
                  }`}
                >
                  <img
                    src={PERSONAL_INFO.profileImage || '/profile.jpg'}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-5 h-5 rounded-full object-cover object-top"
                  />
                  <span className="font-semibold">
                    {PERSONAL_INFO.name}
                  </span>
                </div>

                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border ${
                    darkMode
                      ? 'bg-[#141518] border-slate-800 text-slate-300'
                      : 'bg-slate-50 border-slate-200/90 text-slate-700'
                  }`}
                >
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
                    Software Engineer • 4 Years Remote Enterprise
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12] mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Hong Eng Vathana
                <span className="block text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
                  Building Scalable, Resilient Enterprise Software.
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className={`text-sm sm:text-base leading-relaxed max-w-2xl mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Software Engineer with 4 years of continuous remote enterprise experience collaborating with a US-based company. Specializing in modular Angular web applications, robust C# / .NET Core backends, and offline-first Flutter mobile applications backed by Clean Architecture.
              </p>

              {/* Core Production Tech Stack Strip */}
              <div className="w-full mb-8">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5 font-medium">
                  Production-Tested Core Technologies:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {coreTech.map((tech, idx) => (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors ${
                        darkMode
                          ? 'bg-[#141518] border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      <TechIcon name={tech.name} className="w-4 h-4" />
                      <span className="text-xs">{tech.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clean Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
                {/* View Experience Button (Primary) */}
                <a
                  href="#experience"
                  className={`px-5 py-2.5 font-medium rounded-full text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
                    darkMode
                      ? 'bg-white text-black hover:bg-slate-200'
                      : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xs'
                  }`}
                  id="hero-cta-experience"
                >
                  <span>Work Experience</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                {/* View Architecture Button */}
                <a
                  href="#architecture"
                  className={`px-5 py-2.5 font-medium rounded-full text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer border ${
                    darkMode
                      ? 'bg-[#141518] border-slate-700 text-slate-200 hover:bg-slate-800'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 shadow-xs'
                  }`}
                  id="hero-cta-architecture"
                >
                  <span>Architecture</span>
                </a>

                {/* Download Resume Button */}
                <button
                  onClick={openResume}
                  className={`px-4 py-2.5 border font-medium rounded-full text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
                    darkMode
                      ? 'bg-transparent border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  id="hero-cta-resume"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>
              </div>

              {/* Social Links & Verified Direct Email */}
              <div
                className={`flex flex-wrap items-center gap-3 pt-4 border-t w-full text-xs ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors border ${
                    darkMode
                      ? 'text-slate-400 hover:text-white bg-[#121214] border-slate-800'
                      : 'text-slate-600 hover:text-slate-900 bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  <TechIcon name="github" className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors border ${
                    darkMode
                      ? 'text-slate-400 hover:text-blue-400 bg-[#121214] border-slate-800'
                      : 'text-slate-600 hover:text-slate-900 bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors border cursor-pointer ${
                    darkMode
                      ? 'text-slate-400 hover:text-white bg-[#121214] border-slate-800'
                      : 'text-slate-600 hover:text-slate-900 bg-white border-slate-200 shadow-2xs'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 font-medium">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{PERSONAL_INFO.email}</span>
                      <Copy className="w-3 h-3 text-slate-400 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Hero Visualizer */}
            <div className="lg:col-span-5 w-full">
              <HeroVisual darkMode={darkMode} />
            </div>
          </div>
        </div>

        {/* Core Pillars / Stats Strip - Clean White Style */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 p-4 rounded-2xl border transition-colors ${
            darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`}
          id="hero-pillars-stats"
        >
          {PERSONAL_INFO.corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-3 rounded-xl border ${
                darkMode ? 'bg-[#121214] border-slate-800/60' : 'bg-slate-50/70 border-slate-200/70'
              }`}
            >
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                {pillar.label}
              </span>
              <span
                className={`text-base sm:text-lg font-bold tracking-tight mt-1 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {pillar.value}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{pillar.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
