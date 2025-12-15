import { SKILLS } from "@/app/_data/home";
import { Icon } from "./Icon";

export function Skills() {
  return (
    <section className="border-y border-[#f1f0f4] bg-background-light py-20 dark:border-gray-800 dark:bg-[#1a1625]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
        <div className="mx-auto flex max-w-[960px] flex-col">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#131118] dark:text-white">
              기술 역량
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              성능·타입 안정성을 중시하는 현대적 스택으로 제품을 만듭니다. 재사용 가능한 컴포넌트와 유지보수성 높은 코드베이스를 지향합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-[#dedbe6] bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50 dark:border-gray-700 dark:bg-gray-800"
              >
                <div className={`rounded-full p-3 ${skill.bgClass} ${skill.colorClass} transition-transform group-hover:scale-110`}>
                  <Icon name={skill.icon} className="text-3xl" />
                </div>
                <h3 className="text-base font-bold text-[#131118] dark:text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
