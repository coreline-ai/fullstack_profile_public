import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-background-dark py-12 text-white dark:border-gray-800">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-primary">
                <Icon name="terminal" className="text-xl" />
              </div>
              <h2 className="text-xl font-bold">AlexDev</h2>
            </div>
            <p className="max-w-sm text-gray-400">
              디지털 제품과 브랜드, 경험을 만듭니다. 프리랜스·프로젝트 협업을 언제나 환영합니다.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">내비게이션</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <a href="#top" className="transition-colors hover:text-primary">
                  홈
                </a>
              </li>
              <li>
                <a href="#hero" className="transition-colors hover:text-primary">
                  소개
                </a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-primary">
                  프로젝트
                </a>
              </li>
              <li>
                <a href="#blog" className="transition-colors hover:text-primary">
                  블로그
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">소셜</h3>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <a href="https://github.com" className="flex items-center gap-2 transition-colors hover:text-primary">
                  <Icon name="code" className="text-sm" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="flex items-center gap-2 transition-colors hover:text-primary">
                  <Icon name="alternate_email" className="text-sm" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com" className="flex items-center gap-2 transition-colors hover:text-primary">
                  <Icon name="public" className="text-sm" /> X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 sm:flex-row">
          <p>© 2024 AlexDev. 모든 권리 보유.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              개인정보 처리방침
            </a>
            <a href="#" className="transition-colors hover:text-white">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
