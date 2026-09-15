export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'backend' | 'enterprise' | 'desktop' | 'uiux';
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  architecture: string;
  keyFeatures: string[];
  githubUrl: string;
  demoUrl?: string;
  isPlaceholder: boolean;
  image: string;
  badge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Intermediate';
  years: string;
  highlight?: boolean;
  details?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  companyType: string;
  location: string;
  summary: string;
  developmentResponsibilities: string[];
  leadershipResponsibilities: string[];
  scrumMasterResponsibilities: string[];
  technologies: string[];
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  responsibilities: string[];
  icon: string;
}

export interface ArchitecturePattern {
  name: string;
  fullName: string;
  description: string;
  application: string;
  exampleSnippet: string;
}

export interface EducationMilestone {
  year: string;
  gpa: number | string;
  status: string;
  highlights: string[];
}

export interface JourneyStage {
  step: number;
  title: string;
  timeframe: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  isPlaceholder: boolean;
  url: string;
  topics: string[];
}
