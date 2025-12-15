import { Icon } from "./Icon";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white dark:bg-background-dark">
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-[1280px] px-4 sm:px-10 py-12 lg:py-24">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
          <div className="z-10 flex flex-1 flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              신규 프로젝트 협업 가능
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#131118] dark:text-white sm:text-5xl lg:text-6xl">
              안녕하세요, Alex입니다. <br />
              <span className="text-gradient">접근성 높은 픽셀 퍼펙트</span> 웹 경험을 만듭니다.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              React·Node 기반의 풀스택 개발자로, 복잡한 문제를 직관적인 제품 경험으로 바꿉니다. 속도, 접근성, 유지보수를 모두 잡는 UI를 설계합니다.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                프로젝트 보기
              </a>
              <a
                href="#contact"
                className="flex h-12 items-center justify-center rounded-lg border border-transparent bg-gray-100 px-6 text-base font-bold text-[#131118] transition-all hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                문의하기
              </a>
            </div>

            <div className="flex items-center gap-6 pt-6 text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Icon name="check_circle" className="text-xl" />
                <span className="text-sm font-medium">경력 5년+</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="group" className="text-xl" />
                <span className="text-sm font-medium">협업 50+ 팀</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex w-full flex-1 items-center justify-center lg:max-w-none">
            <div className="group relative w-full max-w-[500px] rotate-2 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transition-all duration-500 ease-out hover:rotate-0 dark:border-gray-800">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent" />
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDReMvFIGk9PA56ars8m5UIaPhmGYdPuDTEHav-YvEX4WAoz5Zpio5lcZ4jhm-FnF_AITBcCBO-Ly7r2YiIZmt3u6ZUUDp2scnmEQrTTNy-nDsUbq-mbtRIqxpxwDaZuR0UohQerJ-I6AECCbHW01by1UCBiF1iXPixg_hBQVcQmRXVRqTBRhHrNjQdwDGUwibLv3N1oaPjbgdYQdHf-_00SfVhfApdbgBWRXnSXIzC_2wlQm8l8pZ6--g-oIaDW5PvEVm8VKof6X0')",
                }}
                aria-label="개발자 프로필 사진"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between rounded-xl border border-gray-100 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-gray-700 dark:bg-gray-900/95">
                <div>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400">현재 집중 분야</p>
                  <p className="text-sm font-bold text-[#131118] dark:text-white">SaaS 플랫폼 설계</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <Icon name="code" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
