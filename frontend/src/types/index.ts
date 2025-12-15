export interface Project {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    content: string;
    thumbnail?: string;
    image?: string;
    period?: string;
    metrics?: { label: string; value: string }[];
    gallery?: string[];
    createdAt: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    content?: string;
    publishedAt?: string;
    thumbnail?: string;
    image?: string;
    imageUrl?: string;
    tag?: string;
    date?: string;
    categoryBg?: string;
    categoryColor?: string;
}

export interface TimelineItem {
    id: string;
    title: string;
    place: string;
    period: string;
    bullets: string[];
}
