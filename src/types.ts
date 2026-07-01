export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  avatarLetter: string;
}

export interface PortfolioSample {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string; // HTML-like or formatted preview content
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface IndustryItem {
  name: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: string;
}
