import { Project } from "@/types";
import { Icon } from "./Icon";

type Props = {
  projects: Project[];
};

export function Projects({ projects }: Props) {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#131118] dark:text-white">프로젝트</h2>
            <p className="text-gray-600 dark:text-gray-400">선별된 작업을 통해 문제 해결 방식과 결과를 확인하세요.</p>
          </div>
          <a href="/projects" className="hidden items-center text-sm font-bold text-primary transition hover:underline sm:flex">
            전체 보기
            <Icon name="arrow_forward" className="ml-1 text-sm" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={`${project.slug ?? project.title}-${index}`}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${project.thumbnail ?? project.image ?? "https://placehold.co/600x400"}')` }}
                aria-label={project.title}
              />

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#131118] dark:text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{project.summary}</p>
                  </div>
                  <a
                    href={`/projects${project.slug ? `/${project.slug}` : ""}`}
                    className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-primary/40 hover:text-primary dark:border-gray-700"
                    aria-label={`${project.title} 상세 보기`}
                  >
                    <Icon name="arrow_outward" className="text-lg" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <a href="/projects" className="inline-flex items-center text-sm font-bold text-primary hover:underline">
            전체 보기
            <Icon name="arrow_forward" className="ml-1 text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
