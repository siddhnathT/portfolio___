export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string[];
  techStack?: string[];
  link?: string;
  kpi?: string;
  architectureImage?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  period: string;
  description: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}