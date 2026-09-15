import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import {
  Briefcase,
  Calendar,
  Globe,
  Code2,
  Users,
  Compass,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'dev' | 'lead' | 'scrum'>('all');

  return (
    <section
      id="experience"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-white border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-blue-500" />
            <span>Commercial Enterprise Timeline</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Professional Remote Experience
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl text-sm sm:text-base">
            Four consecutive years delivering production enterprise software with a US-based company, blending hands-on engineering with team leadership and Scrum mastery.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div
            className={`inline-flex p-1 rounded-full border ${
              darkMode ? 'bg-[#121214] border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeTab === 'all'
                  ? darkMode
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white text-slate-900 shadow-xs font-semibold'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Focus Areas
            </button>
            <button
              onClick={() => setActiveTab('dev')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'dev'
                  ? darkMode
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white text-slate-900 shadow-xs font-semibold'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Development
            </button>
            <button
              onClick={() => setActiveTab('lead')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'lead'
                  ? darkMode
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white text-slate-900 shadow-xs font-semibold'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Leadership
            </button>
            <button
              onClick={() => setActiveTab('scrum')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'scrum'
                  ? darkMode
                    ? 'bg-white text-black font-semibold'
                    : 'bg-white text-slate-900 shadow-xs font-semibold'
                  : darkMode
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Scrum Master
            </button>
          </div>
        </div>

        {/* Experience Timeline Item */}
        {EXPERIENCE_DATA.map((exp, index) => (
          <div
            key={index}
            className={`rounded-3xl border p-6 sm:p-8 md:p-10 transition-all ${
              darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            {/* Header / Role & Metadata */}
            <div
              className={`flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b gap-4 ${
                darkMode ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 border ${
                      darkMode
                        ? 'bg-blue-950/50 text-blue-300 border-blue-800/60'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 border ${
                      darkMode
                        ? 'bg-slate-900 text-slate-300 border-slate-800'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    <Globe className="w-3 h-3 text-blue-500" />
                    {exp.location}
                  </span>
                  <span className="text-xs text-slate-400 px-2 py-0.5 font-mono">
                    {exp.companyType}
                  </span>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {exp.role}
                </h3>
              </div>

              <div className="text-xs text-slate-500 max-w-md leading-relaxed">
                {exp.summary}
              </div>
            </div>

            {/* 3 Distinct Functional Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {/* 1. Development Responsibilities */}
              {(activeTab === 'all' || activeTab === 'dev') && (
                <div
                  className={`p-6 rounded-2xl border flex flex-col ${
                    darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 pb-3 border-b ${
                      darkMode ? 'border-slate-800' : 'border-slate-200'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-700'
                      }`}
                    >
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Core Engineering
                      </h4>
                      <p className="text-[11px] text-slate-400">Software & Architecture</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs leading-relaxed flex-1">
                    {exp.developmentResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 2. Team Leadership Responsibilities */}
              {(activeTab === 'all' || activeTab === 'lead') && (
                <div
                  className={`p-6 rounded-2xl border flex flex-col ${
                    darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 pb-3 border-b ${
                      darkMode ? 'border-slate-800' : 'border-slate-200'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-indigo-400' : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      }`}
                    >
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Technical Alignment
                      </h4>
                      <p className="text-[11px] text-slate-400">Code Reviews & Quality</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs leading-relaxed flex-1">
                    {exp.leadershipResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. Scrum Master Responsibilities */}
              {(activeTab === 'all' || activeTab === 'scrum') && (
                <div
                  className={`p-6 rounded-2xl border flex flex-col ${
                    darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50/70 border-slate-200'
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 pb-3 border-b ${
                      darkMode ? 'border-slate-800' : 'border-slate-200'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      }`}
                    >
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Agile Ownership
                      </h4>
                      <p className="text-[11px] text-slate-400">Sprint Delivery & SMR</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs leading-relaxed flex-1">
                    {exp.scrumMasterResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Enterprise Tech Stack Badges with Official Logos */}
            <div
              className={`mt-8 pt-6 border-t ${
                darkMode ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <div className="text-[11px] uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-medium">
                <Terminal className="w-3.5 h-3.5 text-blue-500" />
                <span>Primary Technologies Deployed in Enterprise Production</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs rounded-xl border font-medium inline-flex items-center gap-1.5 transition-colors ${
                      darkMode
                        ? 'bg-[#121214] text-slate-300 border-slate-800 hover:border-slate-700'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <TechIcon name={tech} className="w-3.5 h-3.5" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
