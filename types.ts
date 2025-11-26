export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  image: string; // URL or path to image
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  subcategories?: {
    name: string;
    skills: string[];
  }[];
}