"use client";

import { useMemo, useState } from "react";

type Example = {
  id: string;
  title: string;
  description: string;
  before: string;
  after: string;
};

const examples: Example[] = [
  {
    id: "wedding",
    title: "Wedding Storytelling",
    description:
      "A warm lift and cinematic color grade for a romantic wedding gallery.",
    before:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "events",
    title: "Event Recap",
    description:
      "A brighter, cleaner edit that keeps the energy lively and polished.",
    before:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "portraits",
    title: "Portrait Retouch",
    description:
      "Soft skin refinement, richer tones, and a finer editorial finish.",
    before:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80",
    after:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function BeforeAfterSlider() {
  const [activeExample, setActiveExample] = useState(examples[0]);
  const [sliderPosition, setSliderPosition] = useState(50);

  const imageStyles = useMemo(
    () => ({
      before: {
        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
      },
      after: {
        clipPath: `inset(0 0 0 ${sliderPosition}%)`,
      },
    }),
    [sliderPosition],
  );

  return (
    <section className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
            Before & After
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Interactive edit comparisons
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600">
          Drag the slider to reveal how raw frames become polished, high-impact
          edits.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-3">
        {examples.map((example) => (
          <button
            key={example.id}
            type="button"
            onClick={() => {
              setActiveExample(example);
              setSliderPosition(50);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeExample.id === example.id
                ? "bg-indigo-600 text-white"
                : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-indigo-200 hover:bg-white"
            }`}
          >
            {example.title}
          </button>
        ))}
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-4 shadow-2xl">
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img
            src={activeExample.before}
            alt={`${activeExample.title} before`}
            className="h-[320px] w-full object-cover sm:h-[420px]"
            style={imageStyles.before}
          />
          <img
            src={activeExample.after}
            alt={`${activeExample.title} after`}
            className="absolute inset-0 h-[320px] w-full object-cover sm:h-[420px]"
            style={imageStyles.after}
          />
          <div
            className="absolute inset-y-0 w-1 bg-white/90"
            style={{ left: `${sliderPosition}%` }}
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900">
            Drag to compare
          </div>
        </div>
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPosition}
          onChange={(event) => setSliderPosition(Number(event.target.value))}
          className="mt-4 h-2 w-full cursor-ew-resize appearance-none rounded-full bg-slate-700 accent-indigo-500"
        />
        <p className="mt-4 text-sm leading-7 text-slate-600">
          {activeExample.description}
        </p>
      </div>
    </section>
  );
}
