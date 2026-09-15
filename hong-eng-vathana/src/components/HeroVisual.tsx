import React, { useState } from 'react';
import { TechIcon } from './TechIcon';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Layers,
  Server,
  Smartphone,
  Layout,
  Database,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Code2,
  Globe2,
} from 'lucide-react';

interface HeroVisualProps {
  darkMode: boolean;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<'dossier' | 'architecture'>('dossier');
  const [selectedLayer, setSelectedLayer] = useState<string>('api');

  const archLayers = [
    {
      id: 'clients',
      label: 'Client Tier',
      tech: 'Angular 17+ & Flutter',
      icon: Layout,
      desc: 'Modular Angular SPAs with RxJS reactive state and cross-platform Flutter with offline SQLite caching.',
      badge: 'Frontend & Mobile',
    },
    {
      id: 'api',
      label: 'API Gateway',
      tech: 'ASP.NET Core REST API',
      icon: Server,
      desc: 'C# .NET 8 Web APIs with Dependency Injection, Fluent Validation, and JWT Bearer security.',
      badge: 'C# / .NET 8',
    },
    {
      id: 'domain',
      label: 'Domain & Application',
      tech: 'Clean Architecture (SOLID)',
      icon: ShieldCheck,
      desc: 'Decoupled domain models, repository interfaces, CQRS-inspired service orchestration, and unit test coverage.',
      badge: 'Business Logic',
    },
    {
      id: 'persistence',
      label: 'Persistence Tier',
      tech: 'PostgreSQL & SQL Server',
      icon: Database,
      desc: 'Entity Framework Core ORM with migrations, relational indexing, and ACID transaction guarantees.',
      badge: 'EF Core & SQL',
    },
  ];

  return (
    <div
      className={`relative w-full rounded-2xl border p-5 sm:p-6 transition-all duration-200 ${
        darkMode
          ? 'bg-[#0f1013] border-slate-800'
          : 'bg-white border-slate-200/90 shadow-sm'
      }`}
      id="hero-tech-visualization"
    >
      {/* Header with Clean Segmented Control */}
      <div
        className={`flex items-center justify-between pb-4 border-b mb-5 ${
          darkMode ? 'border-slate-800' : 'border-slate-100'
        }`}
      >
        <div
          className={`inline-flex items-center p-1 rounded-xl border ${
            darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-slate-100/80 border-slate-200'
          }`}
        >
          <button
            onClick={() => setActiveTab('dossier')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'dossier'
                ? darkMode
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'bg-white text-slate-900 shadow-xs font-semibold'
                : darkMode
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineer Dossier</span>
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? darkMode
                  ? 'bg-slate-800 text-white font-semibold'
                  : 'bg-white text-slate-900 shadow-xs font-semibold'
                : darkMode
                ? 'text-slate-400 hover:text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Clean Architecture</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full font-medium border ${
              darkMode
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/50'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>US REMOTE READY</span>
          </span>
        </div>
      </div>

      {activeTab === 'dossier' ? (
        /* DOSSIER VIEW */
        <div className="space-y-4">
          {/* Identity & Core Info */}
          <div
            className={`p-4 rounded-xl border ${
              darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50/80 border-slate-200/70'
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="relative shrink-0 w-20 sm:w-24 aspect-[4/6] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs">
                <img
                  src={PERSONAL_INFO.profileImage || '/profile.jpg'}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <span
                  className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#141518]"
                  title="Available for Software Engineering roles"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-base font-bold truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {PERSONAL_INFO.name}
                    </h3>
                  </div>

                  <span className={`text-[11px] font-mono font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    3.67 GPA
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold ${
                      darkMode
                        ? 'bg-blue-950/60 text-blue-400 border border-blue-800/60'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    4 Yrs Remote Enterprise
                  </span>
                </div>

                <div className="mt-2 space-y-0.5">
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Software Engineer
                  </p>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Year 4 Computer Science
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-3">
              <div
                className={`p-2.5 rounded-lg border ${
                  darkMode ? 'bg-[#0f1013] border-slate-800' : 'bg-white border-slate-200/80'
                }`}
              >
                <span className="text-slate-400 block text-[10px] uppercase font-medium">Collaboration</span>
                <span className={`font-medium text-xs ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  US Client Timezones
                </span>
              </div>
              <div
                className={`p-2.5 rounded-lg border ${
                  darkMode ? 'bg-[#0f1013] border-slate-800' : 'bg-white border-slate-200/80'
                }`}
              >
                <span className="text-slate-400 block text-[10px] uppercase font-medium">Architecture</span>
                <span className={`font-medium text-xs ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Clean / SOLID / DI
                </span>
              </div>
            </div>

            {/* Verified Stack Badges */}
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium block mb-2">
                Production-Tested Core Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: 'angular', label: 'Angular' },
                  { name: '.net', label: 'C# / .NET Core' },
                  { name: 'flutter', label: 'Flutter' },
                  { name: 'typescript', label: 'TypeScript' },
                  { name: 'postgres', label: 'PostgreSQL' },
                  { name: 'firebase', label: 'Firebase' },
                  { name: 'docker', label: 'Docker' },
                ].map((item) => (
                  <span
                    key={item.name}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium ${
                      darkMode
                        ? 'bg-[#0f1013] border-slate-800 text-slate-300'
                        : 'bg-white border-slate-200 text-slate-700 shadow-2xs'
                    }`}
                  >
                    <TechIcon name={item.name} className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Checklist */}
          <div
            className={`p-3.5 rounded-xl border space-y-2 text-xs ${
              darkMode ? 'bg-[#141518] border-slate-800' : 'bg-slate-50/80 border-slate-200/70'
            }`}
          >
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                <strong>Full-Lifecycle Delivery:</strong> Requirements analysis, Figma wireframes, database schemas, and production deployment.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                <strong>Reliable Remote Autonomy:</strong> 4 years maintaining proactive communication, clear sprint commitments, and clean PRs.
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ARCHITECTURE VIEW */
        <div className="space-y-3">
          {archLayers.map((layer) => {
            const isSelected = selectedLayer === layer.id;
            const Icon = layer.icon;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? darkMode
                      ? 'border-blue-500 bg-blue-950/20'
                      : 'border-blue-500 bg-blue-50/50 shadow-xs'
                    : darkMode
                    ? 'bg-[#141518] border-slate-800 hover:border-slate-700'
                    : 'bg-slate-50/80 border-slate-200/70 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-blue-500" />
                    <span className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {layer.label}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">({layer.tech})</span>
                  </div>
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200/70 text-slate-700'
                    }`}
                  >
                    {layer.badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                  {layer.desc}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
