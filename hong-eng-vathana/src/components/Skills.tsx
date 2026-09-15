import React, { useState, useRef, useEffect } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Pause,
  Play,
  Layers,
  Code,
  Server,
  Smartphone,
  Database,
  CheckCircle2,
  Users,
  Terminal,
  Palette,
  Monitor,
  Sparkles,
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const carouselRef = useRef<HTMLDivElement>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code className="w-3.5 h-3.5" />,
    backend: <Server className="w-3.5 h-3.5" />,
    mobile: <Smartphone className="w-3.5 h-3.5" />,
    database: <Database className="w-3.5 h-3.5" />,
    desktop: <Monitor className="w-3.5 h-3.5" />,
    architecture: <Layers className="w-3.5 h-3.5" />,
    testing: <CheckCircle2 className="w-3.5 h-3.5" />,
    agile: <Users className="w-3.5 h-3.5" />,
    devops: <Terminal className="w-3.5 h-3.5" />,
    design: <Palette className="w-3.5 h-3.5" />,
  };

  const allSkills = SKILL_CATEGORIES.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryName: cat.name }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.categoryId === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.details && skill.details.toLowerCase().includes(searchQuery.toLowerCase())) ||
      skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Check scroll position to enable/disable arrow buttons
  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const current = carouselRef.current;
    if (current) {
      current.addEventListener('scroll', checkScroll, { passive: true });
      return () => current.removeEventListener('scroll', checkScroll);
    }
  }, [filteredSkills]);

  // Handle scroll buttons
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 320;
      const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-scroll loop when enabled
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredSkills.length]);

  return (
    <section
      id="skills"
      className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-[#0d0d0f] border-slate-800' : 'bg-white border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Clean Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
              darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            <span>Core Engineering Stack</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical Stack & Core Capabilities
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl text-sm sm:text-base">
            Browse verified enterprise technologies across frontend, backend, mobile sync engines, and agile practices with official logos.
          </p>
        </div>

        {/* Categories Bar & Live Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            <button
              onClick={() => {
                setSelectedCategory('all');
                carouselRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? darkMode
                    ? 'bg-white text-black font-semibold'
                    : 'bg-slate-900 text-white font-semibold'
                  : darkMode
                  ? 'bg-[#161619] text-slate-400 hover:text-white border border-slate-800'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              All Tech ({allSkills.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  carouselRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                  selectedCategory === cat.id
                    ? darkMode
                      ? 'bg-white text-black font-semibold'
                      : 'bg-slate-900 text-white font-semibold'
                    : darkMode
                    ? 'bg-[#161619] text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {categoryIcons[cat.id]}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill or tool..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                carouselRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
              }}
              className={`w-full pl-9 pr-3.5 py-1.5 text-xs rounded-full border focus:outline-none focus:ring-1 transition-colors ${
                darkMode
                  ? 'bg-[#161619] border-slate-800 text-white placeholder-slate-500 focus:border-slate-600'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Carousel Navigation Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">
              Showing <strong className={darkMode ? 'text-white' : 'text-slate-900'}>{filteredSkills.length}</strong> technologies
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto Play / Pause Toggle */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`p-1.5 rounded-full text-xs font-medium border flex items-center gap-1 transition-colors ${
                darkMode
                  ? 'bg-[#161619] border-slate-800 text-slate-400 hover:text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title={isAutoPlaying ? 'Pause Auto Scroll' : 'Start Auto Scroll'}
            >
              {isAutoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="text-[11px] pr-1">{isAutoPlaying ? 'Pause' : 'Auto'}</span>
            </button>

            {/* Previous Arrow */}
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border transition-all ${
                canScrollLeft
                  ? darkMode
                    ? 'bg-[#161619] border-slate-700 text-white hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 shadow-xs'
                  : 'opacity-40 cursor-not-allowed border-transparent text-slate-400'
              }`}
              aria-label="Previous technologies"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border transition-all ${
                canScrollRight
                  ? darkMode
                    ? 'bg-[#161619] border-slate-700 text-white hover:bg-slate-800'
                    : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50 shadow-xs'
                  : 'opacity-40 cursor-not-allowed border-transparent text-slate-400'
              }`}
              aria-label="Next technologies"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* SKILLS CAROUSEL TRACK */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className={`shrink-0 w-[270px] sm:w-[300px] snap-start rounded-2xl border p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-[#121214] border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {/* Top: Logo & Category / Level */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors ${
                      darkMode ? 'bg-[#0a0a0b] border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <TechIcon name={skill.name} className="w-6 h-6" />
                  </div>

                  <div className="flex flex-col items-end">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        skill.level === 'Advanced'
                          ? darkMode
                            ? 'bg-blue-950/80 text-blue-300 border border-blue-800/60'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {skill.level}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono mt-1">
                      {skill.categoryName}
                    </span>
                  </div>
                </div>

                {/* Skill Name */}
                <h3
                  className={`text-base font-bold tracking-tight mb-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {skill.name}
                </h3>

                {/* Skill Details */}
                {skill.details && (
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                    {skill.details}
                  </p>
                )}
              </div>

              {/* Bottom: Commercial Experience Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">Experience</span>
                <span
                  className={`font-semibold text-xs ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {skill.years}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm">
            No technologies found matching "{searchQuery}".
          </div>
        )}

        {/* CONTINUOUS LOGO MARQUEE / TAPE */}
        <div className="mt-14 pt-8 border-t border-slate-100 dark:border-slate-800 overflow-hidden relative">
          {/* Subtle gradient edges for smooth fade */}
          <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-[#0d0d0f] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-[#0d0d0f] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center justify-center mb-4">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
              Verified Production Technologies & Tooling
            </span>
          </div>

          <div className="flex animate-marquee gap-6 py-2">
            {[...allSkills.slice(0, 18), ...allSkills.slice(0, 18)].map((skill, idx) => (
              <div
                key={idx}
                className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-colors ${
                  darkMode
                    ? 'bg-[#121214] border-slate-800 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-700 shadow-2xs hover:border-slate-300'
                }`}
              >
                <TechIcon name={skill.name} className="w-4 h-4" />
                <span>{skill.name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({skill.years})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
