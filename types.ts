export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
}

export interface Project {
  title: string;
  date: string;
  description: string[];
  techStack?: string[]; // Optional inferred tech stack
}

export interface Certification {
  name: string;
  date: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string;
  level: number; // 0-100 for visualization
}

export interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  socials: SocialLink[];
  objective: string;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: Certification[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
