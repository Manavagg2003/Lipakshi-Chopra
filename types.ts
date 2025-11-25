export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education';
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'UI/UX' | 'Digital Art' | 'Branding' | 'Illustrations' | 'Art Collection';
  imageUrl: string;
  description?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  location: string;
}