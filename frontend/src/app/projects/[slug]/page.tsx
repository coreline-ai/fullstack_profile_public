import { fallbackProjects } from "../../_data/fallback";
import { Project } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

async function fetchProject(slug: string): Promise<Project | null> {
  try {
    const res = await fetch(`${API_BASE}/projects/${slug}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load project");
    return res.json();
  } catch {
    return fallbackProjects.find((p) => p.slug === slug) ?? null;
  }
}

import MarkdownViewer from "@/components/common/MarkdownViewer";

// ... (API_BASE, fetchProject 등 유지)

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await fetchProject(slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] text-slate-900 dark:bg-[#0f172a] dark:text-slate-100">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">프로젝트를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-10 pb-16">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Project detail</p>
            <h1 className="text-3xl font-extrabold tracking-tight">{project.title}</h1>
          </div>
          <a href="/projects" className="text-sm font-semibold text-[#6467f2] hover:text-[#514fdf]">
            ← Back to projects
          </a>
        </header>

        <div className="overflow-hidden rounded-3xl bg-white/90 shadow-xl ring-1 ring-slate-200 dark:bg-[#0c1327]/90 dark:ring-slate-800">
          {project.thumbnail && (
            <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url('${project.thumbnail}')` }} />
          )}
          <div className="grid gap-6 p-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <p className="text-base text-slate-700 dark:text-slate-200">{project.summary}</p>
              <div
                className="prose max-w-none prose-slate prose-headings:font-bold prose-p:leading-relaxed dark:prose-invert"
              >
                <MarkdownViewer source={project.content ?? project.summary} />
              </div>
            </div>
            <div className="space-y-4 rounded-2xl bg-slate-50/80 p-5 ring-1 ring-slate-200 dark:bg-[#0f172a] dark:ring-slate-700">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Tech</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#6467f2]/10 px-3 py-1 text-xs font-semibold text-[#6467f2]">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">기간, 역할, 성과 등은 요청 시 상세 공유 가능합니다.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
