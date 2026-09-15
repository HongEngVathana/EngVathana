import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Architecture } from './components/Architecture';
import { LeadershipScrum } from './components/LeadershipScrum';
import { UiUxSystemAnalysis } from './components/UiUxSystemAnalysis';
import { Education } from './components/Education';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? 'bg-[#0a0a0b] text-slate-100' : 'bg-white text-slate-900'
      }`}
      id="portfolio-root-container"
    >
      {/* Sticky Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          darkMode={darkMode}
          openResume={() => setResumeModalOpen(true)}
        />

        {/* 2. About Me Section */}
        <About darkMode={darkMode} />

        {/* 3. Experience Section */}
        <Experience darkMode={darkMode} />

        {/* 4. Technical Skills Section */}
        <Skills darkMode={darkMode} />

        {/* 5. Software Architecture Section */}
        <Architecture darkMode={darkMode} />

        {/* 7. Leadership & Scrum (Beyond Code) */}
        <LeadershipScrum darkMode={darkMode} />

        {/* 8. UI/UX & System Analysis Process */}
        <UiUxSystemAnalysis darkMode={darkMode} />

        {/* 9. Education & Academic Progression */}
        <Education darkMode={darkMode} />

        {/* 10. Development Journey Timeline */}
        <DevelopmentJourney darkMode={darkMode} />

        {/* 11. Contact Section */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        openResume={() => setResumeModalOpen(true)}
      />

      {/* Printable & ATS-Compatible Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
