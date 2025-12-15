import { Skill, ExperienceItem, BlogPost } from './types';

export const SKILLS: Skill[] = [
  { name: 'React', icon: 'code_blocks', colorClass: 'text-blue-500', bgClass: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'TypeScript', icon: 'integration_instructions', colorClass: 'text-blue-700', bgClass: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'Node.js', icon: 'dns', colorClass: 'text-green-600', bgClass: 'bg-green-50 dark:bg-green-900/20' },
  { name: 'Python', icon: 'terminal', colorClass: 'text-yellow-600', bgClass: 'bg-yellow-50 dark:bg-yellow-900/20' },
  { name: 'Docker', icon: 'deployed_code', colorClass: 'text-cyan-600', bgClass: 'bg-cyan-50 dark:bg-cyan-900/20' },
  { name: 'AWS', icon: 'cloud', colorClass: 'text-orange-500', bgClass: 'bg-orange-50 dark:bg-orange-900/20' },
  { name: 'UI/UX Design', icon: 'brush', colorClass: 'text-purple-500', bgClass: 'bg-purple-50 dark:bg-purple-900/20' },
  { name: 'PostgreSQL', icon: 'database', colorClass: 'text-slate-500', bgClass: 'bg-slate-50 dark:bg-slate-800' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Senior Frontend Developer',
    period: '2020 - Present',
    company: 'TechCorp Solutions',
    description: 'Leading a team of 5 developers building a SaaS analytics platform. Improved load times by 40% using Next.js and implemented a comprehensive design system using Tailwind CSS.',
  },
  {
    role: 'Full Stack Engineer',
    period: '2018 - 2020',
    company: 'StartUp Inc.',
    description: 'Developed RESTful APIs with Node.js and Express. Integrated Stripe payments and built a real-time notification system using Socket.io.',
  },
  {
    role: 'BS Computer Science',
    period: '2014 - 2018',
    company: 'University of Technology',
    description: 'Graduated with Honors. Specialized in Software Engineering and Human-Computer Interaction.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Mastering Server Components in Next.js 14',
    excerpt: 'A deep dive into how server components work, when to use them, and how they improve performance in modern web apps.',
    category: 'React',
    categoryColor: 'text-blue-600',
    categoryBg: 'bg-blue-50 dark:bg-blue-900/30',
    readTime: '5 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3-WBc2HJLax16k7ZwujDpCE5sbwrcNXal10ch-dFzREOKbkVj2CxGFBMjE6fq8BPw5htZng2q1k2uMjdC91irH6Ew6mG8PGp9iRVcAhDxVh3SsMdfYxqYdrzpIVPp1UZRKAB23hgL2ApAzouJ_6X5Kv1q3YrXdrtXV9H7OIJIEeEUOi0kVbuywgr7WsZq2RNY4veecNwW1GeUx-GJMarcazOaqGILLrfQHhrK3BA_B5H13ACsF1Sm-UeU8PIqN5JhjN9fk2p2M4c',
    altText: 'Abstract gradient background with react logo overlay',
  },
  {
    title: 'Why I Switched to Tailwind CSS',
    excerpt: "The utility-first approach seemed messy at first, but here's how it accelerated my workflow and enforced design consistency.",
    category: 'CSS',
    categoryColor: 'text-purple-600',
    categoryBg: 'bg-purple-50 dark:bg-purple-900/30',
    readTime: '3 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpPzu6RuYSdWDlIiGY7W5Z7sD0jPD9LFLftqwIRrCHcbA1AOLEex4874HWN_pw_sQnqnj9OVFCsVZjXveGIBSs1JUo4sx47pY5cCIMKCp94KRRf7eppvZekFomUKz8I4-KSZq5NgqZXs_8NTzeZ-PDcl5NruQWpnsm_rrBcdSkc_g5ztwzEvg8qOU9NDhGe6jhUEuxMASQIcG_jNjpfglgPTfAlBU2SoMJy6gyjRvnuHGLDInMJssknr4ba5AGyItD4BYssO8rmZo',
    altText: 'Close up of computer code on a dark screen',
  },
  {
    title: 'From Junior to Senior: Lessons Learned',
    excerpt: 'Soft skills, communication, and architectural thinking are just as important as writing clean code.',
    category: 'Career',
    categoryColor: 'text-green-600',
    categoryBg: 'bg-green-50 dark:bg-green-900/30',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdpoScvNrsZR6Ew_yWl6KHCa8_77u-h8xUCvoMH4TISipohqheGBNF2kDDxd2cBeyiSLnNkrDvpt5lWpb5Wx3Kp-_TUsCaMIyAUV34x8bA-dNjap2aQx4_5J6NEQaCQ_TnoHZNQ5yhwr7aa0HdR-UeYtRyy1z0AKVbbRyF4myfdnBPpPsWuaOjLEhGxBlSVjIcxHF8dTDqiAFxP49IuEnkBJSoO2zJ2W0g2ldVyBE1Au1vF-4bUMIhzrp_OfxSih6ypcI5tzZifIo',
    altText: 'Team of people working together in a modern office',
  },
];
