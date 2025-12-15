export interface Skill {
  name: string;
  icon: string;
  colorClass: string;
  bgClass: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
  company: string;
  description: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  categoryBg: string;
  readTime: string;
  imageUrl: string;
  altText: string;
}
