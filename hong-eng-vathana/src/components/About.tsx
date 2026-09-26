import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import {
  Code,
  Smartphone,
  Server,
  Globe,
  Users,
  Compass,
  GraduationCap,
  Layers,
  Sparkles,
} from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      title: '3 Years Remote Experience',
      desc: 'Collaborating continuously with a US-based enterprise company across distributed timezones with high autonomy and communication clarity.',
      icon: Globe,
      tech: 'git',
    },
    {
      title: 'Enterprise Architecture',
      desc: 'Building mission-critical business portals, transaction workflows, and multi-tenant architectures engineered for high availability.',
      icon: Layers,
      tech: 'clean architecture',
    },
    {
      title: 'Angular Frontend (3 Years)',
      desc: 'Architecting modular single-page web applications utilizing TypeScript, RxJS reactive state, and reusable enterprise design systems.',
      icon: Code,
      tech: 'angular',
    },
    {
      title: 'C# / .NET Backend (2 Years)',
      desc: 'Developing high-throughput REST APIs with ASP.NET Core, Entity Framework Core, Clean Architecture, and relational databases.',
      icon: Server,
      tech: '.net',
    },
    {
      title: 'Flutter Mobile (4 Years)',
      desc: 'Engineering cross-platform mobile apps for Android and iOS with Flutter, offline SQLite caching, and bidirectional Firebase sync.',
      icon: Smartphone,
      tech: 'flutter',
    },
    {
      title: 'UI/UX & System Analysis',
      desc: 'Conducting comprehensive user journey mapping, low-to-high fidelity Figma prototyping, database normalization, and system design.',
      icon: Sparkles,
      tech: 'figma',
    },
    {
      title: 'Technical Team Leadership',
      desc: 'Guiding engineering discussions, orchestrating task distributions, executing thorough pull-request code reviews, and mentoring peers.',
      icon: Users,
      tech: 'scrum',
    },
    {
      title: 'Scrum Master Responsibilities',
      desc: 'Facilitating sprint planning, daily stand-ups, sprint retrospectives, backlog grooming, and eliminating blockers to protect velocity.',
      icon: Compass,
      tech: 'jira',
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-slate-50/50 border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
            <span>Academic Excellence & Commercial Rigor</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering Foundation & Story
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl text-sm sm:text-base">
            Bridging senior academic computer science rigor with three years of commercial remote software engineering for a US enterprise.
          </p>
        </div>

        {/* Executive Overview & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Verified Engineering Credentials */}
          <div className="lg:col-span-4 flex flex-col">
            <div
              className={`h-full p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                darkMode
                  ? 'bg-[#0f1013] border-slate-800'
                  : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Candidate Dossier
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                      darkMode ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    ● Available Now
                  </span>
                </div>

                {/* 4x6 Profile Photo & Info */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-4 mb-6">
                  <div className="relative shrink-0 w-36 sm:w-40 aspect-[4/6] rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 shadow-md">
                    <img
                      src={PERSONAL_INFO.profileImage || '/profile.jpg'}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                    />
                    <span
                      className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0f1013]"
                      title="Available for Software Engineering Roles"
                    />
                  </div>

                  <div className="text-center sm:text-left lg:text-center">
                    <h3 className={`text-xl font-bold tracking-tight mb-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                      Software Engineer
                    </p>
                    <span className="text-[11px] text-slate-500 font-mono block mt-0.5">
                      3 Years Remote • US Enterprise
                    </span>
                  </div>
                </div>

                {/* Key Spec Rows */}
                <div className="space-y-2.5 text-xs">
                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <span className="text-slate-400 text-[11px] font-medium">Commercial Tenure</span>
                    <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      3 Years Remote
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <span className="text-slate-400 text-[11px] font-medium">Enterprise Client</span>
                    <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      US-Based Tech Company
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <span className="text-slate-400 text-[11px] font-medium">Academic Standing</span>
                    <span className="text-blue-600 font-semibold">
                      Year 4 CS • Cum. GPA 3.67
                    </span>
                  </div>

                  <div
                    className={`p-3 rounded-xl border flex items-center justify-between ${
                      darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200/80'
                    }`}
                  >
                    <span className="text-slate-400 text-[11px] font-medium">Timezone Alignment</span>
                    <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      US EST / PST Compatible
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Core Stack */}
              <div className={`pt-4 mt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-2.5 font-medium">
                  Verified Core Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['angular', '.net', 'flutter', 'typescript', 'postgres', 'docker'].map((t) => (
                    <span
                      key={t}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${
                        darkMode
                          ? 'bg-[#141518] border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <TechIcon name={t} className="w-3.5 h-3.5" />
                      <span className="capitalize">{t === '.net' ? 'C# / .NET' : t === 'postgres' ? 'PostgreSQL' : t}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div
            className={`lg:col-span-8 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all ${
              darkMode
                ? 'bg-[#0f1013] border-slate-800'
                : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div>
              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${
                  darkMode ? 'bg-blue-950/60 text-blue-300 border border-blue-800/60' : 'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                <span>Engineering Philosophy</span>
              </div>

              <h3
                className={`text-xl sm:text-2xl font-bold tracking-tight mb-4 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Enterprise-Tested Software Engineer with Academic Rigor
              </h3>

              <div
                className={`space-y-4 text-sm leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                <p>
                  I am a Year 4 Computer Science student with three years of commercial remote software engineering experience collaborating with a US-based enterprise company — 2 years of structured training followed by 1 year as a full-time Software Engineer. While many engineers encounter enterprise production environments after graduating, I have been actively designing, building, and maintaining production systems since 2022.
                </p>

                <p>
                  My core technical stack centers on <strong>Angular (17+)</strong> for responsive web applications, <strong>C# / ASP.NET Core</strong> for robust RESTful services and Clean Architecture, and <strong>Flutter</strong> for offline-first cross-platform mobile apps with SQLite caching and cloud sync.
                </p>

                <p>
                  In addition to hands-on coding, I regularly drive engineering alignment—leading sprint planning, conducting structured code reviews, identifying architectural bottlenecks, and ensuring adherence to SOLID design principles and production SLAs.
                </p>
              </div>
            </div>

            {/* Academic Standing Sub-block */}
            <div
              className={`pt-5 mt-6 border-t ${
                darkMode ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div
                  className={`p-3 rounded-xl border ${
                    darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-slate-400 text-[10px] uppercase font-medium block">Year 1 GPA</span>
                  <span className="font-bold text-sm text-blue-600">3.78</span>
                </div>
                <div
                  className={`p-3 rounded-xl border ${
                    darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-slate-400 text-[10px] uppercase font-medium block">Year 2 GPA</span>
                  <span className="font-bold text-sm text-blue-600">3.67</span>
                </div>
                <div
                  className={`p-3 rounded-xl border ${
                    darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-slate-400 text-[10px] uppercase font-medium block">Year 3 GPA</span>
                  <span className="font-bold text-sm text-blue-600">3.55</span>
                </div>
                <div
                  className={`p-3 rounded-xl border ${
                    darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="text-slate-400 text-[10px] uppercase font-medium block">Cumulative</span>
                  <span className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    3.67 / 4.00
                  </span>
                </div>
              </div>
              <p className="mt-3 text-[11px] text-slate-400 italic">
                Year 4 GPA not yet released — cumulative average reflects Years 1–3.
              </p>
            </div>
          </div>
        </div>

        {/* 8 Core Competency Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                darkMode
                  ? 'bg-[#0d0d0f] border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div
                  className={`p-2 rounded-xl border ${
                    darkMode ? 'bg-[#121214] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <TechIcon name={item.tech} className="w-4 h-4" />
                </div>
                <h4
                  className={`text-xs sm:text-sm font-bold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
