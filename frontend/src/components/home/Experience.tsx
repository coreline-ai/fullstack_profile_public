import { TimelineItem } from "@/types";
import { Icon } from "./Icon";

type ExperienceProps = {
  items: TimelineItem[];
};

export function Experience({ items }: ExperienceProps) {
  return (
    <section className="bg-white py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-4">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">커리어 여정</span>
            <h2 className="text-3xl font-bold leading-tight text-[#131118] dark:text-white md:text-4xl">
              경력 &amp; 학력
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">프로젝트 성장을 이끈 경험과 학습 기록입니다.</p>
            <div className="mt-4">
              <a href="#contact" className="flex items-center gap-2 font-bold text-primary transition-all hover:gap-3">
                <span>이력서 요청</span>
                <Icon name="arrow_forward" className="text-sm" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative flex flex-col gap-8 border-l-2 border-gray-100 pl-6 dark:border-gray-800">
              {items.map((item, index) => (
                <div key={item.id || item.title} className="group relative">
                  <div
                    className={`absolute -left-[31px] top-2 size-4 rounded-full border-4 border-white shadow-sm transition-colors dark:border-background-dark ${
                      index === 0 ? "bg-primary" : "bg-gray-300 dark:bg-gray-600 group-hover:bg-primary"
                    }`}
                  />

                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                    <h3 className="text-xl font-bold text-[#131118] dark:text-white">{item.title}</h3>
                    <span
                      className={`rounded px-2 py-1 text-sm font-semibold ${
                        index === 0 ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-500 dark:bg-gray-800"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  <h4 className="mb-3 text-base font-medium text-gray-800 dark:text-gray-200">{item.place}</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
