export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade?: string;
  status?: string;
  modules?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Network' | 'Security' | 'Tools' | 'OS';
}

export interface ResearchItem {
  title: string;
  description: string;
  tags: string[];
}

export interface Certificate {
  name: string;
  issuer?: string;
  year?: string;
  image?: string;
  details?: string;
}