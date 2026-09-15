import React, { useState } from 'react';
import { UI_UX_STEPS } from '../data/portfolioData';
import {
  Palette,
  Search,
  FileText,
  GitFork,
  LayoutGrid,
  Play,
  Code,
  CheckCircle,
  Rocket,
  ArrowRight,
} from 'lucide-react';

interface UiUxProps {
  darkMode: boolean;
}

export const UiUxSystemAnalysis: React.FC<UiUxProps> = ({ darkMode }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // Wireframe by default

  const stepIcons = [
    <Search className="w-3.5 h-3.5" />,
    <FileText className="w-3.5 h-3.5" />,
    <GitFork className="w-3.5 h-3.5" />,
    <LayoutGrid className="w-3.5 h-3.5" />,
    <Palette className="w-3.5 h-3.5" />,
    <Play className="w-3.5 h-3.5" />,
    <Code className="w-3.5 h-3.5" />,
    <CheckCircle className="w-3.5 h-3.5" />,
    <Rocket className="w-3.5 h-3.5" />,
  ];

  return (
    <section
      id="process"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-slate-50/50 border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-blue-500" />
            <span>Product Lifecycle & Design System</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            UI/UX Design Process & System Analysis
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl text-sm sm:text-base">
            From initial research and user flow mapping in Miro, to Figma wireframing, component tokens, and robust system architecture diagrams.
          </p>
        </div>

        {/* 9-STEP PROCESS PIPELINE */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <h3
              className={`text-xs uppercase tracking-wider font-semibold ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              The 9-Step Engineering & Design Workflow
            </h3>
            <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
              Step {activeStepIndex + 1} of 9
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2">
            {UI_UX_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[90px] ${
                    isActive
                      ? darkMode
                        ? 'bg-white text-black font-semibold shadow-xs'
                        : 'bg-slate-900 text-white font-semibold shadow-xs'
                      : darkMode
                      ? 'bg-[#121214] border-slate-800 text-slate-400 hover:text-white'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-2xs hover:bg-slate-50'
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono opacity-70">0{step.step}</span>
                  <div className={`my-1 ${isActive ? (darkMode ? 'text-blue-600' : 'text-blue-400') : 'text-blue-500'}`}>
                    {stepIcons[idx]}
                  </div>
                  <span className="text-[11px] font-semibold leading-tight line-clamp-1">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Banner */}
          <div
            className={`mt-4 p-5 rounded-2xl border flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all ${
              darkMode ? 'bg-[#121214] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  Step 0{UI_UX_STEPS[activeStepIndex].step}: {UI_UX_STEPS[activeStepIndex].title}
                </span>
              </div>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {UI_UX_STEPS[activeStepIndex].description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] text-slate-400 font-medium">Tools:</span>
              <div className="flex flex-wrap gap-1.5">
                {UI_UX_STEPS[activeStepIndex].tools.map((tool, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-0.5 rounded-full border ${
                      darkMode
                        ? 'bg-slate-900 text-slate-300 border-slate-800'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
