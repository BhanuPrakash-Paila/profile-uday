"use client";

type ThemeToggleProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
        isDark
          ? "border-slate-700 bg-slate-800 text-slate-100 hover:border-slate-500 hover:bg-slate-700"
          : "border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:text-indigo-700"
      }`}
    >
      <span>{isDark ? "☀️" : "🌙"}</span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
