import { fallbackBlogPosts } from "../_data/fallback";
import { BlogPost } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${API_BASE}/blog`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load blog posts");
    const data: BlogPost[] = await res.json();
    return data.map((p) => ({
      ...p,
      tag: p.tags?.[0] ?? "General",
      date: p.publishedAt ?? p.date,
    }));
  } catch {
    return fallbackBlogPosts;
  }
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  return (
    <div className="min-h-screen bg-background-light text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
      <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-10 pb-16">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Articles</p>
            <h1 className="text-3xl font-extrabold tracking-tight">Blog</h1>
          </div>
          <a href="/" className="text-sm font-semibold text-[#6467f2] hover:text-[#514fdf]">
            ← Back home
          </a>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col gap-3 rounded-2xl bg-white/90 p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg hover:ring-[#6467f2]/30 dark:bg-[#0c1327]/90 dark:ring-slate-800"
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span className="rounded-full bg-[#ec4899]/10 px-2 py-1 text-[#ec4899]">
                  {post.tag ?? post.tags?.[0] ?? "General"}
                </span>
                <span className="text-slate-400">{post.date ?? post.publishedAt ?? "날짜 미정"}</span>
              </div>
              <h3 className="text-lg font-bold leading-tight text-slate-900 dark:text-white">{post.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{post.summary}</p>
              <a
                href={`/blog${post.slug ? `/${post.slug}` : ""}`}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#6467f2] transition hover:text-[#514fdf]"
              >
                Read article <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
