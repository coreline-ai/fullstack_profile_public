import { Project, BlogPost } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api';

export async function getProjects(): Promise<Project[]> {
    const res = await fetch(`${API_BASE_URL}/projects`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
}

export async function getProject(slug: string): Promise<Project> {
    const res = await fetch(`${API_BASE_URL}/projects/${slug}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch project');
    return res.json();
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    const res = await fetch(`${API_BASE_URL}/blog`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch blog posts');
    return res.json();
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
    const res = await fetch(`${API_BASE_URL}/blog/${slug}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch blog post');
    return res.json();
}
