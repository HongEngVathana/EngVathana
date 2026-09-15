import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS, ARCHITECTURE_PATTERNS } from '../data/portfolioData';
import {
  Boxes,
  ArrowDown,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Database,
  Layout,
  Network,
} from 'lucide-react';

interface ArchitectureProps {
  darkMode: boolean;
}

export const Architecture: React.FC<ArchitectureProps> = ({ darkMode }) => {
  const [selectedLayer, setSelectedLayer] = useState<string>('backend-core');
  const [selectedPatternIndex, setSelectedPatternIndex] = useState<number>(0);

  const layerIcons: Record<string, React.ReactNode> = {
    presentation: <Layout className="w-4 h-4 text-blue-500" />,
    'api-gateway': <Network className="w-4 h-4 text-indigo-500" />,
    'backend-core': <Cpu className="w-4 h-4 text-blue-500" />,
    'service-layer': <ShieldCheck className="w-4 h-4 text-indigo-500" />,
    'repository-layer': <Layers className="w-4 h-4 text-blue-500" />,
    'persistence-layer': <Database className="w-4 h-4 text-indigo-500" />,
  };

  const currentLayer =
    ARCHITECTURE_LAYERS.find((l) => l.id === selectedLayer) || ARCHITECTURE_LAYERS[2];
  const currentPattern = ARCHITECTURE_PATTERNS[selectedPatternIndex];

  return (
    <section
      id="architecture"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-slate-50/50 border-slate-100'
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
            <Boxes className="w-3.5 h-3.5 text-blue-500" />
            <span>Systems & Software Architecture</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Enterprise Architecture & Clean Code
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl text-sm sm:text-base">
            Systematic decoupling from user interface to physical persistence: clean data flow, strict contract boundaries, and maintainable object-oriented design.
          </p>
        </div>

        {/* 1. VISUALIZED MULTI-TIER DATA PIPELINE */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3
              className={`text-lg font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              End-to-End Enterprise Tier Pipeline
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select any tier to inspect its architectural contracts, boundaries, and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Flow Stack */}
            <div className="lg:col-span-6 space-y-2.5">
              {ARCHITECTURE_LAYERS.map((layer, index) => {
                const isSelected = selectedLayer === layer.id;
                return (
                  <React.Fragment key={layer.id}>
                    <button
                      onClick={() => setSelectedLayer(layer.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? darkMode
                            ? 'bg-[#121214] border-blue-500 ring-1 ring-blue-500/30'
                            : 'bg-white border-blue-500 ring-2 ring-blue-100 shadow-sm'
                          : darkMode
                          ? 'bg-[#121214] border-slate-800 hover:border-slate-700'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl border ${
                            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          {layerIcons[layer.id]}
                        </div>
                        <div>
                          <div
                            className={`text-sm font-semibold ${
                              isSelected
                                ? 'text-blue-600 dark:text-blue-400'
                                : darkMode
                                ? 'text-white'
                                : 'text-slate-900'
                            }`}
                          >
                            {layer.title}
                          </div>
                          <div className="text-xs text-slate-400">{layer.subtitle}</div>
                        </div>
                      </div>

                      <div className="hidden sm:flex flex-wrap gap-1 max-w-[180px] justify-end">
                        {layer.tech.slice(0, 2).map((t, idx) => (
                          <span
                            key={idx}
                            className={`text-[10px] px-2 py-0.5 rounded-full border uppercase ${
                              darkMode
                                ? 'bg-slate-900 text-slate-300 border-slate-800'
                                : 'bg-slate-50 text-slate-600 border-slate-200'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </button>

                    {index < ARCHITECTURE_LAYERS.length - 1 && (
                      <div className="flex justify-center my-0.5">
                        <ArrowDown className="w-3.5 h-3.5 text-blue-500" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Right Detailed Inspector */}
            <div className="lg:col-span-6 sticky top-24">
              <div
                className={`p-6 sm:p-7 rounded-3xl border transition-all ${
                  darkMode ? 'bg-[#121214] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div
                  className={`flex items-center justify-between pb-4 border-b mb-5 ${
                    darkMode ? 'border-slate-800' : 'border-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-blue-50 border-blue-100'
                      }`}
                    >
                      {layerIcons[currentLayer.id]}
                    </div>
                    <div>
                      <h4
                        className={`text-base font-bold ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {currentLayer.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">
                        {currentLayer.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase ${
                      darkMode ? 'bg-blue-950/60 text-blue-300' : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    Tier Active
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {currentLayer.description}
                </p>

                <h5 className="text-[11px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  Core Engineering Responsibilities
                </h5>
                <ul className="space-y-2.5 text-xs mb-6">
                  {currentLayer.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{r}</span>
                    </li>
                  ))}
                </ul>

                <h5 className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                  Technologies Deployed in This Layer
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {currentLayer.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        darkMode
                          ? 'bg-slate-900 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CORE ARCHITECTURAL PATTERNS */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all ${
            darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <div
            className={`flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b ${
              darkMode ? 'border-slate-800' : 'border-slate-100'
            }`}
          >
            <div>
              <h3
                className={`text-xl font-bold tracking-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Design Patterns & Principles in Practice
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Concrete patterns applied to eliminate technical debt and enforce separation of concerns.
              </p>
            </div>

            {/* Pattern Switcher */}
            <div className="flex flex-wrap gap-1.5">
              {ARCHITECTURE_PATTERNS.map((pattern, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPatternIndex(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedPatternIndex === idx
                      ? darkMode
                        ? 'bg-white text-black font-semibold'
                        : 'bg-slate-900 text-white font-semibold'
                      : darkMode
                      ? 'bg-[#121214] text-slate-400 hover:text-white border border-slate-800'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {pattern.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div>
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Pattern Rationale
                </span>
                <h4
                  className={`text-lg font-bold tracking-tight mt-1 mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {currentPattern.fullName}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {currentPattern.description}
                </p>
              </div>

              <div
                className={`p-4 rounded-2xl border ${
                  darkMode ? 'bg-[#121214] border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-[10px] uppercase font-semibold text-blue-600 dark:text-blue-400 block mb-1">
                  How I Apply This
                </span>
                <p
                  className={`text-xs leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {currentPattern.application}
                </p>
              </div>
            </div>

            {/* Code Snippet Demonstration */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border overflow-hidden font-mono text-xs bg-slate-900 text-slate-200 border-slate-800 shadow-sm">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[11px] text-slate-400 ml-2">
                      {currentPattern.name.toLowerCase().replace(/\s+/g, '-')}-spec.cs
                    </span>
                  </div>
                  <span className="text-[10px] text-blue-400 uppercase tracking-wider font-semibold">
                    Clean Arch Spec
                  </span>
                </div>
                <pre className="p-4 overflow-x-auto text-slate-300 leading-relaxed">
                  <code>{currentPattern.exampleSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
