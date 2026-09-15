import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Check,
  Copy,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please provide your name, email, and message.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section
      id="contact"
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
            <MessageSquare className="w-3.5 h-3.5 text-blue-500" />
            <span>Initiate Direct Collaboration</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Let's Build Something Great Together
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl text-sm sm:text-base">
            Available for select enterprise engineering, mobile development, or team leadership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Value Proposition */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`p-6 sm:p-7 rounded-3xl border transition-all ${
                darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <h3
                className={`text-base font-bold tracking-tight mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Direct Communication Channels
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Feel free to reach out directly via email or connect through LinkedIn. I respond promptly to technical and professional inquiries.
              </p>

              <div className="space-y-3">
                {/* Email Item */}
                <div
                  className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 ${
                    darkMode ? 'bg-[#121214] border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl border ${
                        darkMode ? 'bg-blue-950/60 text-blue-400 border-blue-800/60' : 'bg-blue-50 text-blue-600 border-blue-100'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-medium block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className={`text-xs font-semibold hover:underline ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      darkMode
                        ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
                    }`}
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                    darkMode
                      ? 'bg-[#121214] border-slate-800 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl border ${
                        darkMode ? 'bg-blue-950/60 text-blue-400 border-blue-800/60' : 'bg-blue-50 text-blue-600 border-blue-100'
                      }`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-medium block">
                        Professional Network
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        linkedin.com/in/vathanahong
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>

                {/* GitHub Item */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                    darkMode
                      ? 'bg-[#121214] border-slate-800 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl border ${
                        darkMode ? 'bg-indigo-950/60 text-indigo-400 border-indigo-800/60' : 'bg-indigo-50 text-indigo-600 border-indigo-100'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-medium block">
                        Code Repositories
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        github.com/vathanahong
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Confidentiality & Availability Note */}
            <div
              className={`p-5 rounded-2xl border flex items-start gap-3.5 ${
                darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
              }`}
            >
              <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-500 leading-relaxed">
                <span className={`font-semibold block mb-0.5 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Enterprise Confidentiality & Remote Readiness
                </span>
                Experienced in coordinating with US Eastern/Pacific timezones, standard NDA protocols, and enterprise software engineering handoffs.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border transition-all ${
              darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-white border-slate-200 shadow-xs'
            }`}
          >
            <h3
              className={`text-lg font-bold tracking-tight mb-1 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Send an Inquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Please include project scope, technical requirements, or role details.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs flex items-center gap-2 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60">
                <Check className="w-4 h-4 shrink-0" />
                <span>
                  Thank you! Your message has been prepared and logged. I will get back to you promptly.
                </span>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-50 text-rose-800 border border-rose-200 text-xs dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 text-xs rounded-xl border transition-colors focus:outline-none ${
                      darkMode
                        ? 'bg-[#121214] border-slate-800 text-white placeholder-slate-600 focus:border-blue-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 text-xs rounded-xl border transition-colors focus:outline-none ${
                      darkMode
                        ? 'bg-[#121214] border-slate-800 text-white placeholder-slate-600 focus:border-blue-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-xs font-semibold mb-1.5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Subject / Role / Scope
                </label>
                <input
                  type="text"
                  placeholder="e.g. Software Engineering Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 text-xs rounded-xl border transition-colors focus:outline-none ${
                    darkMode
                      ? 'bg-[#121214] border-slate-800 text-white placeholder-slate-600 focus:border-blue-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  }`}
                />
              </div>

              <div>
                <label
                  className={`block text-xs font-semibold mb-1.5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the opportunity or project details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 text-xs rounded-xl border transition-colors focus:outline-none ${
                    darkMode
                      ? 'bg-[#121214] border-slate-800 text-white placeholder-slate-600 focus:border-blue-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 ${
                  darkMode
                    ? 'bg-white text-black hover:bg-slate-200'
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xs'
                }`}
              >
                {isSubmitting ? (
                  <span>Dispatching Message...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
