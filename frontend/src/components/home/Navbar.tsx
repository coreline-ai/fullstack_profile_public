'use client';

import { useState } from "react";
import { Icon } from "./Icon";

const links = [
  { label: "홈", href: "#top" },
  { label: "소개", href: "#hero" },
  { label: "프로젝트", href: "#projects" },
  { label: "블로그", href: "#blog" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#f1f0f4] bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-background-dark/90">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-10">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a
            href="#top"
            className="flex cursor-pointer items-center gap-2 text-[#131118] transition-opacity hover:opacity-80 dark:text-white"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon name="terminal" className="text-2xl" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">AlexDev</h2>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-8">
              {links.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    idx === 0 ? "font-semibold hover:text-primary" : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:translate-y-[-1px] hover:bg-primary/90"
            >
              문의하기
            </a>
          </div>

          <button
            type="button"
            className="cursor-pointer text-gray-800 dark:text-white md:hidden"
            onClick={toggleMobileMenu}
            aria-label="모바일 메뉴 토글"
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} className="text-3xl" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-background-dark md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${
                  idx === 0 ? "font-semibold hover:text-primary" : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex h-10 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              문의하기
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
