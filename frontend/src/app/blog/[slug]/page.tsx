import { fallbackBlogPosts } from "../../_data/fallback";
import { BlogPost } from "@/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000/api";

async function fetchBlog(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_BASE}/blog/${slug}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load blog post");
    return res.json();
  } catch {
    return fallbackBlogPosts.find((p) => p.slug === slug) ?? null;
  }
}

import MarkdownViewer from "@/components/common/MarkdownViewer";

// ... (API_BASE, fetchBlog 등 유지)

type Props = { params: Promise<{ slug: string }> };

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlog(slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] text-slate-900 dark:bg-[#0f172a] dark:text-slate-100">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">글을 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light text-slate-900 antialiased dark:bg-background-dark dark:text-slate-100">
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-10 pb-16">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Article</p>
            <h1 className="text-3xl font-extrabold tracking-tight">{post.title}</h1>
            <div className="mt-2 flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span className="rounded-full bg-[#ec4899]/10 px-2 py-1 text-[#ec4899]">{post.tags?.[0] ?? "General"}</span>
              <span className="text-slate-400">{post.publishedAt ?? post.date ?? "날짜 미정"}</span>
            </div>
          </div>
          <a href="/blog" className="text-sm font-semibold text-[#6467f2] hover:text-[#514fdf]">
            ← Back to blog
          </a>
        </header>

        <article className="overflow-hidden rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-slate-200 dark:bg-[#0c1327]/90 dark:ring-slate-800">
          <p className="text-base text-slate-700 dark:text-slate-200">{post.summary}</p>
          <div
            className="prose mt-6 max-w-none prose-slate dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed"
          >
            <MarkdownViewer source={post.content ?? post.summary} />
          </div>
        </article>
      </main>
    </div>
  );
}
