"use client";

import { useEffect, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: string;
};

const stats: Stat[] = [
  { label: "Events Covered", value: 200, suffix: "+", icon: "📸" },
  { label: "Photos Edited", value: 5000, suffix: "+", icon: "🖼️" },
  { label: "Weddings Shot", value: 75, suffix: "+", icon: "💍" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplayValue(Math.round(progress * value));
      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
          Achievements
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Numbers that speak for the craft
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
              {stat.icon}
            </div>
            <p className="mt-5 text-4xl font-semibold text-slate-950">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-slate-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
