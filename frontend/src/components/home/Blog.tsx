import { BlogPost } from "@/types";
import { Icon } from "./Icon";

type Props = {
  posts: BlogPost[];
};

export function Blog({ posts }: Props) {
  return (
    <section id="blog" className="bg-background-light py-24 dark:bg-[#1a1625]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#131118] dark:text-white">최근 글</h2>
            <p className="text-gray-600 dark:text-gray-400">개발·디자인·생산성에 대한 생각을 기록합니다.</p>
          </div>
          <a href="/blog" className="hidden items-center text-sm font-bold text-primary transition hover:underline sm:flex">
            전체 글 보기
            <Icon name="arrow_forward" className="ml-1 text-sm" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={`${post.slug ?? post.title}-${index}`}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image ?? post.thumbnail ?? "https://placehold.co/600x400"}')` }}
                aria-label={post.title}
              />

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex gap-2">
                  <span className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">{post.tag ?? post.tags?.[0] ?? "General"}</span>
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 dark:bg-gray-700">
                    {post.date ?? post.publishedAt ?? "날짜 미정"}
                  </span>
                </div>

                <h3 className="mb-3 line-clamp-2 text-xl font-bold text-[#131118] dark:text-white">{post.title}</h3>

                <p className="mb-4 flex-1 text-sm text-gray-600 line-clamp-3 dark:text-gray-400">{post.summary}</p>

                <a
                  href={`/blog${post.slug ? `/${post.slug}` : ""}`}
                  className="group flex items-center gap-1 text-sm font-bold text-primary"
                >
                  글 읽기
                  <Icon name="arrow_forward" className="text-sm transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a href="/blog" className="inline-flex items-center text-sm font-bold text-primary hover:underline">
            전체 글 보기
            <Icon name="arrow_forward" className="ml-1 text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
