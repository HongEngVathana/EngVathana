import React, { useState } from 'react';
import { JOURNEY_STAGES } from '../data/portfolioData';
import {
  Milestone,
  ArrowDown,
  GraduationCap,
  Code,
  Smartphone,
  Globe,
  Server,
  Briefcase,
  Users,
  Compass,
  Award,
} from 'lucide-react';

interface JourneyProps {
  darkMode: boolean;
}

export const DevelopmentJourney: React.FC<JourneyProps> = ({ darkMode }) => {
  const [selectedStage, setSelectedStage] = useState<number>(9);

  const stageIcons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-4 h-4 text-blue-500" />,
    Code: <Code className="w-4 h-4 text-blue-500" />,
    Smartphone: <Smartphone className="w-4 h-4 text-blue-500" />,
    Globe: <Globe className="w-4 h-4 text-indigo-500" />,
    Server: <Server className="w-4 h-4 text-indigo-500" />,
    Briefcase: <Briefcase className="w-4 h-4 text-blue-500" />,
    Users: <Users className="w-4 h-4 text-indigo-500" />,
    Compass: <Compass className="w-4 h-4 text-blue-500" />,
    Award: <Award className="w-4 h-4 text-indigo-500" />,
  };

  const activeStageData = JOURNEY_STAGES.find((s) => s.step === selectedStage) || JOURNEY_STAGES[8];

  return (
    <section
      id="journey"
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
            <Milestone className="w-3.5 h-3.5 text-blue-500" />
            <span>Evolution & Career Trajectory</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering Development Journey
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl text-sm sm:text-base">
            Tracing the technical trajectory from computer science academic foundations to multi-platform engineering, enterprise remote collaboration, and team leadership.
          </p>
        </div>

        {/* Interactive Milestone Path */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Timeline Nodes Grid */}
          <div className="lg:col-span-7 space-y-2.5">
            {JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = selectedStage === stage.step;
              return (
                <div key={stage.step}>
                  <button
                    onClick={() => setSelectedStage(stage.step)}
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
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-semibold text-xs border ${
                          isSelected
                            ? darkMode
                              ? 'bg-white text-black border-white font-bold'
                              : 'bg-slate-900 text-white border-slate-900 font-bold'
                            : darkMode
                            ? 'bg-slate-900 border-slate-800 text-slate-400'
                            : 'bg-slate-100 border-slate-200 text-slate-600'
                        }`}
                      >
                        0{stage.step}
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
                          {stage.title}
                        </div>
                        <div className="text-xs text-slate-400 font-medium">{stage.timeframe}</div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1.5">
                      {stageIcons[stage.icon]}
                    </div>
                  </button>

                  {idx < JOURNEY_STAGES.length - 1 && (
                    <div className="flex justify-center my-0.5">
                      <ArrowDown className="w-3.5 h-3.5 text-blue-500/70" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Stage Inspector Showcase Card */}
          <div className="lg:col-span-5 sticky top-24">
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
                    className={`p-2.5 rounded-2xl border ${
                      darkMode ? 'bg-blue-950/60 text-blue-400 border-blue-800/60' : 'bg-blue-50 text-blue-600 border-blue-100'
                    }`}
                  >
                    {stageIcons[activeStageData.icon]}
                  </div>
                  <div>
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider block">
                      Milestone 0{activeStageData.step} of 09
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-bold ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {activeStageData.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Timeframe: {activeStageData.timeframe}
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {activeStageData.description}
              </p>

              <h4 className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
                Technologies & Focus Areas
              </h4>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {activeStageData.technologies.map((t, idx) => (
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

              <div
                className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                  darkMode ? 'bg-[#0d0d0f] border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                <span className="font-semibold text-blue-600 dark:text-blue-400 block mb-1 text-[11px] uppercase tracking-wider">
                  Enterprise Significance
                </span>
                Demonstrates continuous learning, technical adaptability, and the capacity to step into leadership without abandoning engineering excellence.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
