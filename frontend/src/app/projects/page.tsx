import { fallbackProjects } from "../_data/fallback";
import { Project } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE}/projects`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load projects");
    return res.json();
  } catch {
    return fallbackProjects;
  }
}

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className="min-h-screen bg-background-light text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 pb-16">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Portfolio</p>
            <h1 className="text-3xl font-extrabold tracking-tight">Projects</h1>
          </div>
          <a href="/" className="text-sm font-semibold text-[#6467f2] hover:text-[#514fdf]">
            ← Back home
          </a>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl bg-white/90 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-[#6467f2]/30 dark:bg-[#0c1327]/90 dark:ring-slate-800"
            >
              <div
                className="relative h-52 w-full overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('${project.thumbnail ?? project.image ?? ""}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                {project.tags?.[0] && (
                  <div className="absolute top-3 right-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:text-slate-100">
                    {project.tags[0]}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
                  </div>
                  <a
                    href={`/projects${project.slug ? `/${project.slug}` : ""}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-[#6467f2]/40 hover:text-[#6467f2] dark:border-slate-700"
                  >
                    <img src="/icons/link.svg" alt="" className="h-4 w-4" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#6467f2]/10 px-3 py-1 text-xs font-semibold text-[#6467f2]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
