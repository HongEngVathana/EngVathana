import React, { useState } from 'react';
import {
  Users,
  Compass,
  CheckCircle2,
} from 'lucide-react';

interface LeadershipScrumProps {
  darkMode: boolean;
}

export const LeadershipScrum: React.FC<LeadershipScrumProps> = ({ darkMode }) => {
  const [activeSprintPhase, setActiveSprintPhase] = useState<number>(1);

  const teamLeaderItems = [
    { title: 'Technical Coordination', desc: 'Aligning frontend, backend, and mobile engineers on API schemas, data models, and dependency timelines.' },
    { title: 'Task Distribution', desc: 'Evaluating story complexity and distributing sprint tasks to match developer strengths and growth goals.' },
    { title: 'Code Review', desc: 'Enforcing clean code, architectural consistency, test coverage, and security standards before merging to main.' },
    { title: 'Problem Solving', desc: 'Stepping in to debug intricate race conditions, offline sync anomalies, and backend performance bottlenecks.' },
    { title: 'Technical Discussion', desc: 'Leading design reviews, evaluating architectural trade-offs, and documenting Architecture Decision Records (ADRs).' },
    { title: 'Mentoring Teammates', desc: 'Guiding junior peers through TypeScript nuances, Entity Framework migrations, and debugging best practices.' },
  ];

  const scrumMasterItems = [
    { title: 'Daily Scrum', desc: 'Conducting focused, timeboxed 15-minute daily stand-ups to inspect progress and synchronize commitments.' },
    { title: 'Sprint Planning', desc: 'Facilitating estimation, story pointing, capacity planning, and defining clear Sprint Goals with stakeholders.' },
    { title: 'Sprint Review', desc: 'Coordinating live product demonstrations of completed increments to cross-functional stakeholders for feedback.' },
    { title: 'Retrospective', desc: 'Running blameless retrospectives to identify process friction and turn insights into concrete action items.' },
    { title: 'Removing Blockers', desc: 'Proactively identifying and dismantling technical dependencies, environment issues, and requirements ambiguities.' },
    { title: 'Team Communication', desc: 'Fostering asynchronous clarity and psychological safety across distributed timezones and remote setups.' },
    { title: 'Agile Improvement', desc: 'Continuously refining definition of ready (DoR) and definition of done (DoD) to elevate delivery velocity.' },
  ];

  const sprintPhases = [
    {
      step: 1,
      name: 'Sprint Planning',
      timeframe: 'Day 1 of Sprint',
      leadRole: 'Software Engineer • Sprint Lead',
      action: 'Decompose user stories, clarify acceptance criteria with stakeholders, assess team velocity, and lock in sprint goals.',
    },
    {
      step: 2,
      name: 'Daily Scrum',
      timeframe: 'Daily (15 mins)',
      leadRole: 'Software Engineer • Agile Facilitator',
      action: 'Uncover emerging blockers early, ensure cross-timezone sync between US stakeholders and engineers, and track burndown.',
    },
    {
      step: 3,
      name: 'Technical Reviews',
      timeframe: 'Continuous Cycle',
      leadRole: 'Software Engineer • Code Review Lead',
      action: 'Conduct structured PR reviews, verify architectural compliance with Clean Architecture, and assist peers with complex logic.',
    },
    {
      step: 4,
      name: 'Sprint Demo',
      timeframe: 'Final Day of Sprint',
      leadRole: 'Software Engineer • Tech Lead',
      action: 'Present working software increments to product managers, validate outcomes against acceptance criteria, and gather critique.',
    },
    {
      step: 5,
      name: 'Retrospective',
      timeframe: 'Sprint Completion',
      leadRole: 'Software Engineer • Process Lead',
      action: 'Host collaborative retrospective: What went well, what created friction, and 2 concrete process fixes committed for next sprint.',
    },
  ];

  return (
    <section
      id="leadership"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-white border-slate-100'
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
            <Compass className="w-3.5 h-3.5 text-blue-500" />
            <span>Collaboration & Engineering Discipline</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Engineering Leadership & Agile Ownership
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl text-sm sm:text-base">
            Writing resilient code is essential; driving cross-timezone alignment, eliminating blockers, and mentoring teammates transforms individual engineering into consistent team delivery.
          </p>
        </div>

        {/* Dual Cards: Technical Coordination & Agile Facilitation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14">
          {/* Technical Coordination Card */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all ${
              darkMode ? 'bg-[#0f1013] border-slate-800' : 'bg-slate-50/60 border-slate-200'
            }`}
          >
            <div>
              <div
                className={`flex items-center gap-3 mb-4 pb-4 border-b ${
                  darkMode ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl border ${
                    darkMode ? 'bg-indigo-950/50 text-indigo-400 border-indigo-800/60' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Technical Coordination & Reviews
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Software Engineer • Architectural Discipline & Quality
                  </p>
                </div>
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Leading without ego: focusing on architectural clarity, unblocking teammates through pair debugging, and establishing pull-request standards that elevate the entire codebase.
              </p>

              <div className="space-y-3">
                {teamLeaderItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                    <div>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-200' : 'text-slate-900'
                        }`}
                      >
                        {item.title}:{' '}
                      </span>
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`mt-6 pt-4 border-t text-xs font-medium text-indigo-600 dark:text-indigo-400 flex items-center justify-between ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}
            >
              <span>PR Reviews • Task Distribution • Mentorship</span>
              <span className="text-slate-400 text-[11px]">Software Engineer Focus</span>
            </div>
          </div>

          {/* Agile Facilitation Card */}
          <div
            className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all ${
              darkMode ? 'bg-[#0f1013] border-slate-800' : 'bg-slate-50/60 border-slate-200'
            }`}
          >
            <div>
              <div
                className={`flex items-center gap-3 mb-4 pb-4 border-b ${
                  darkMode ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl border ${
                    darkMode ? 'bg-emerald-950/50 text-emerald-400 border-emerald-800/60' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}
                >
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Agile Facilitation & Delivery
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    Software Engineer • Scrum & Sprint Velocity
                  </p>
                </div>
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Guiding agile ceremonies, removing blockers for remote cross-timezone teammates, and protecting sprint goals so the engineering organization delivers with high predictability.
              </p>

              <div className="space-y-3">
                {scrumMasterItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <div>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-200' : 'text-slate-900'
                        }`}
                      >
                        {item.title}:{' '}
                      </span>
                      <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`mt-6 pt-4 border-t text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center justify-between ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}
            >
              <span>Daily Stand-ups • Sprint Demos • Retrospectives</span>
              <span className="text-slate-400 text-[11px]">Software Engineer Focus</span>
            </div>
          </div>
        </div>

        {/* Interactive Sprint Cycle Visualizer */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border transition-all ${
            darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
          }`}
        >
          <div className="text-center mb-6">
            <h3
              className={`text-lg font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              How I Facilitate an Agile Sprint Cadence
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select any stage of the two-week sprint to review how leadership and Scrum facilitation are executed
            </p>
          </div>

          {/* Phase Steps Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-5">
            {sprintPhases.map((phase) => (
              <button
                key={phase.step}
                onClick={() => setActiveSprintPhase(phase.step)}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  activeSprintPhase === phase.step
                    ? darkMode
                      ? 'bg-white text-black font-semibold'
                      : 'bg-slate-900 text-white font-semibold shadow-xs'
                    : darkMode
                    ? 'bg-[#121214] border-slate-800 text-slate-400 hover:text-white'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="block text-[10px] uppercase font-medium opacity-70">
                  Phase 0{phase.step}
                </span>
                <span className="block text-xs font-semibold mt-0.5 truncate">
                  {phase.name}
                </span>
              </button>
            ))}
          </div>

          {/* Active Phase Details Box */}
          {sprintPhases.find((p) => p.step === activeSprintPhase) && (
            <div
              className={`p-4 rounded-2xl border text-xs flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                darkMode ? 'bg-[#121214] border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">
                    {sprintPhases[activeSprintPhase - 1].name}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">
                    {sprintPhases[activeSprintPhase - 1].timeframe}
                  </span>
                </div>
                <p
                  className={`text-xs sm:text-sm ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  {sprintPhases[activeSprintPhase - 1].action}
                </p>
              </div>

              <div className="shrink-0 text-left md:text-right">
                <span className="text-[10px] uppercase text-slate-400 block font-medium">Primary Capacity</span>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                  {sprintPhases[activeSprintPhase - 1].leadRole}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
