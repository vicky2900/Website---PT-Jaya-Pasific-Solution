export interface TrainingCourse {
  id: string;
  code: string;
  title: string;
  category: 'kemnaker' | 'bnsp' | 'minerba' | 'maritim' | 'k3rs';
  badge: string;
  badgeColor?: string;
  duration: string;
  description: string;
  location: string;
  dates: string;
  instructor?: string;
  personalPrice?: string;
  corporatePrice?: string;
  facilities: string[];
  syllabus?: string[];
  requirements?: string[];
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  category: string;
  categoryLabel: string;
  description: string;
  imageUrl: string;
  tag: string;
  highlightMetric: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  organization: string;
  badge: string;
  location: string;
  imageUrl: string;
  description: string;
  tag: string;
  statusBadge: string;
}

export interface ServicePillar {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  actionLabel: string;
  actionHref: string;
}

export interface LegalityBlock {
  id: string;
  authority: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}
