"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      const visibleSection = navItems.reduce((current, item) => {
        const section = document.getElementById(item.id);
        if (!section) return current;
        if (section.offsetTop <= scrollPosition) {
          return item.id;
        }
        return current;
      }, navItems[0].id);
      setActiveSection(visibleSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_-24px_rgba(17,24,39,0.35)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 shadow-sm">
            UD
          </div>
          <span>Uday Portfolio</span>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`rounded-full px-3 py-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  activeSection === item.id
                    ? "bg-indigo-50 text-indigo-700"
                    : "hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700 md:hidden"
        >
          <span className="relative block h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform ${
                menuOpen ? "-translate-y-1.5 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-0.5 w-full bg-current transition-transform ${
                menuOpen ? "translate-y-1.5 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`${menuOpen ? "block" : "hidden"} border-t border-slate-200/80 bg-white/95 md:hidden`}
      >
        <nav className="space-y-1 px-4 py-4 text-sm font-medium text-slate-700 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-2xl px-4 py-3 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                activeSection === item.id
                  ? "bg-indigo-50 text-indigo-700"
                  : "hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
