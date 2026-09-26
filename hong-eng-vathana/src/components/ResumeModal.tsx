import React from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import {
  X,
  Printer,
  Mail,
  Linkedin,
  Github,
  MapPin,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white text-slate-900 shadow-[0_0_50px_rgba(0,0,0,0.8)] p-6 sm:p-10 my-auto print:p-0 print:max-w-none print:shadow-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
        id="printable-resume-document"
      >
        {/* Top Control Bar (Hidden when printed) */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200 mb-8 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black px-3 py-1 rounded-full bg-slate-100 border border-slate-300">
              Verified ATS-Compatible Resume Format
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-black text-white hover:bg-slate-800 transition-all shadow-md cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RESUME HEADER */}
        <div className="border-b border-slate-300 pb-6 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-3">
              Software Engineer
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3.5 h-3.5 text-slate-500" />
                github.com/vathanahong
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                linkedin.com/in/vathanahong
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Remote (US Client Alignment)
              </span>
            </div>
          </div>

          <div className="shrink-0 flex items-center justify-start sm:justify-end">
            <div className="w-20 sm:w-24 aspect-[4/6] rounded-md border-2 border-slate-300 overflow-hidden shadow-xs relative">
              <img
                src={PERSONAL_INFO.profileImage || '/profile.jpg'}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-2.5">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-slate-700">
            Software Engineer and Year 4 Computer Science university student with 3 years of commercial remote experience with a US-based enterprise company — 2 years of structured training followed by 1 year as a full-time Software Engineer. Specializing in architecting modular Angular web applications, high-performance C#/.NET Core RESTful microservices, and cross-platform Flutter mobile applications with offline SQLite sync. Proven track record coordinating sprint execution, code quality, and cross-functional alignment.
          </p>
        </div>

        {/* CORE TECHNICAL COMPETENCIES */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-2.5">
            Technical Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs">
            <div>
              <span className="font-bold text-slate-900">Frontend: </span>
              <span className="text-slate-700">Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap, Responsive Design</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Backend & API: </span>
              <span className="text-slate-700">C#, .NET, ASP.NET Core, REST API, Entity Framework Core, PHP, Laravel</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Mobile Development: </span>
              <span className="text-slate-700">Flutter, Dart, Android Java, Swift, Firebase Authentication, Firestore, SQLite</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Databases: </span>
              <span className="text-slate-700">PostgreSQL, SQL Server, SQLite, Firebase Firestore</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Architecture: </span>
              <span className="text-slate-700">Clean Architecture, SOLID Principles, Repository Pattern, MVVM, MVC, DI</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Testing & QA: </span>
              <span className="text-slate-700">Selenium, Jasmine, Playwright, C# Testing (xUnit/NUnit), Unit & Integration Testing</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Project Management: </span>
              <span className="text-slate-700">Scrum Master, Agile, Sprint Planning, Daily Stand-up, Retrospectives, Team Leadership</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">UI/UX & Tools: </span>
              <span className="text-slate-700">Figma, Wireframing, User Flow, Miro, Git, GitHub, Docker, Visual Studio, VS Code</span>
            </div>
          </div>
        </div>

        {/* COMMERCIAL EXPERIENCE */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-3">
            Commercial Software Engineering Experience
          </h2>

          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
                <div>
                  <span className="font-bold text-slate-900 text-sm">{exp.role}</span>
                  <span className="text-slate-600 ml-1.5 font-medium">| {exp.companyType}</span>
                </div>
                <span className="font-mono text-slate-600 font-semibold">{exp.period}</span>
              </div>

              <div className="text-[11px] text-slate-500 font-mono mb-2">
                Location: {exp.location}
              </div>

              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-outside pl-4 leading-relaxed">
                <li>
                  <strong className="text-slate-900">Enterprise Applications:</strong> Developed and maintained multi-tier enterprise web systems in Angular and ASP.NET Core with Entity Framework, serving thousands of operational transactions daily.
                </li>
                <li>
                  <strong className="text-slate-900">Cross-Platform Mobile:</strong> Engineered offline-first Flutter mobile applications equipped with local SQLite caching and automated cloud synchronization with Firebase.
                </li>
                <li>
                  <strong className="text-slate-900">Relational Architecture:</strong> Designed schemas and wrote optimized queries for PostgreSQL and SQL Server with strict foreign key constraints and transactional integrity.
                </li>
                <li>
                  <strong className="text-slate-900">Team Leadership:</strong> Coordinated technical delivery across frontend and backend units, prioritized sprint backlogs, and conducted rigorous pull-request code reviews.
                </li>
                <li>
                  <strong className="text-slate-900">Scrum Master Ceremonies:</strong> Facilitated daily stand-ups, sprint planning, sprint reviews, and retrospectives, actively resolving blockers and maintaining high team velocity.
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* ACADEMIC EDUCATION */}
        <div className="mb-6">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200 mb-2.5">
            Education & Academic Honors
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-1">
            <span className="font-bold text-slate-900">
              Bachelor of Science in Computer Science (Year 4 - Final Year)
            </span>
            <span className="font-mono text-slate-600 font-semibold">2021 — Present</span>
          </div>

          <div className="text-xs text-slate-700 mb-2">
            Academic Performance: Year 1 GPA: 3.78 • Year 2 GPA: 3.67 • Year 3 GPA: 3.55 • Year 4 GPA: Not Yet Available • Cumulative (Yrs 1–3): 3.67 / 4.00
          </div>
          <div className="text-[11px] text-slate-600">
            Coursework: Data Structures & Algorithms, Object-Oriented Software Design, Distributed Systems, Database Management Systems, System Analysis, Software Quality & Testing.
          </div>
        </div>

        {/* FOOTER NOTE (Print safe) */}
        <div className="pt-4 border-t border-slate-200 text-center text-[10px] text-slate-500 font-mono">
          Hong Eng Vathana • Portfolio Resume • Available for Select Enterprise Engineering Roles
        </div>
      </div>
    </div>
  );
};
