
import { fallbackBlogPosts, fallbackProjects } from "@/app/_data/fallback";
import { BlogPost, Project, TimelineItem } from "@/types";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import BlogSection from "@/components/sections/BlogSection";
import Projects from "@/components/sections/Projects";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE}/projects`, { cache: "no-store", next: { revalidate: 0 } });
    // Fetching real projects from backend
    if (!res.ok) throw new Error("Failed to load projects");
    return res.json();
  } catch {
    return fallbackProjects;
  }
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE}/blog`, { cache: "no-store", next: { revalidate: 0 } });
    if (!res.ok) throw new Error("Failed to load blog posts");
    const data: BlogPost[] = await res.json();
    return data;
  } catch {
    return fallbackBlogPosts;
  }
}

async function fetchTimeline(): Promise<TimelineItem[]> {
  try {
    const res = await fetch(`${API_BASE}/timeline`, { cache: "no-store", next: { revalidate: 0 } });
    if (!res.ok) throw new Error("Failed to load timeline");
    return res.json();
  } catch {
    return [
      {
        id: "1",
        title: "Senior Engineer",
        place: "TechCorp Inc.",
        period: "Present",
        bullets: ["Leading migration to Next.js", "Mentoring juniors", "Improved build speed by 40%"],
      },
      {
        id: "2",
        title: "Frontend Developer",
        place: "StartUp Studio",
        period: "2020 - 2022",
        bullets: ["Developed responsive web apps for fintech clients"],
      },
      {
        id: "3",
        title: "BS Computer Science",
        place: "University of Tech",
        period: "2018",
        bullets: ["Graduated with Honors", "Specialized in HCI"],
      },
    ];
  }
}

export default async function Home() {
  const [projects, blogPosts, timeline] = await Promise.all([fetchProjects(), fetchBlogPosts(), fetchTimeline()]);

  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <Experience items={timeline.slice(0, 3)} />
      <BlogSection posts={blogPosts} />
      <Projects projects={projects} />


    </div>
  );
}
