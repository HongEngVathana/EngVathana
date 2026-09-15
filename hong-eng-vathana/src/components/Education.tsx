import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import {
  GraduationCap,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section
      id="education"
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
            <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
            <span>Academic Distinction</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Computer Science Degree & GPA Progression
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl text-sm sm:text-base">
            Year 4 Computer Science student maintaining high academic distinction while concurrently working remotely in commercial enterprise software.
          </p>
        </div>

        {/* GPA Progression Visualizer & Coursework Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual GPA Progression Chart */}
          <div
            className={`lg:col-span-5 p-6 sm:p-7 rounded-3xl border transition-all ${
              darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-slate-50/70 border-slate-200 shadow-xs'
            }`}
          >
            <div
              className={`flex items-center justify-between pb-4 border-b mb-6 ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}
            >
              <div>
                <h3
                  className={`text-base font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  GPA Progression Over Time
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">
                  4.00 Academic Grading Scale
                </span>
              </div>
              <div
                className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                  darkMode
                    ? 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                    : 'bg-blue-50 text-blue-700 border-blue-200'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>3.67 Cumulative</span>
              </div>
            </div>

            {/* Visual Progress Bars */}
            <div className="space-y-4">
              {EDUCATION_DATA.map((milestone, idx) => {
                const isNumeric = typeof milestone.gpa === 'number';
                const percentage = isNumeric ? ((milestone.gpa as number) / 4.0) * 100 : 92;

                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {milestone.year}
                      </span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400 font-mono">
                        {isNumeric ? `${milestone.gpa} / 4.00` : milestone.gpa}
                      </span>
                    </div>

                    <div
                      className={`w-full h-2.5 rounded-full overflow-hidden relative border ${
                        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-200 border-slate-300'
                      }`}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          idx === 3
                            ? 'bg-emerald-500'
                            : 'bg-blue-600'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{milestone.status}</span>
                      {isNumeric && (
                        <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold uppercase">
                          Dean's Honor Roll
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Highlights Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EDUCATION_DATA.map((milestone, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-[#0d0d0f] border-slate-800'
                    : 'bg-white border-slate-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {milestone.year}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      idx === 3
                        ? darkMode
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60'
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : darkMode
                        ? 'bg-blue-950/60 text-blue-300 border-blue-800/60'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                    }`}
                  >
                    {milestone.gpa}
                  </span>
                </div>

                <h4
                  className={`text-sm font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {milestone.status}
                </h4>

                <ul className="space-y-1.5 text-xs text-slate-500">
                  {milestone.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
