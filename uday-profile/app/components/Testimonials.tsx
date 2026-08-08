"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Alicia & Daniel",
    role: "Wedding Clients",
    quote:
      "Every frame felt cinematic and intimate. The album was stunning and the delivery was effortless.",
    rating: 5,
  },
  {
    name: "Mina Rao",
    role: "Event Organizer",
    quote:
      "The energy and pace of the recap were perfect. We used the highlights across our social channels instantly.",
    rating: 5,
  },
  {
    name: "Liam Carter",
    role: "Portrait Session",
    quote:
      "The edits made the whole session feel elevated and editorial. The experience was smooth from start to finish.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10"
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Client love in motion
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-600">
          A few of the reactions from recent weddings, events, and portrait
          sessions.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <div className="transition-all duration-500" key={activeIndex}>
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: testimonials[activeIndex].rating }).map(
                (_, index) => (
                  <span key={index}>★</span>
                ),
              )}
            </div>
            <p className="mt-6 text-xl leading-8 text-slate-800">
              “{testimonials[activeIndex].quote}”
            </p>
            <div className="mt-6">
              <p className="text-lg font-semibold text-slate-950">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-sm text-slate-600">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-[1.5rem] border p-5 text-left transition ${
                activeIndex === index
                  ? "border-indigo-200 bg-indigo-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: item.rating }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                “{item.quote}”
              </p>
              <p className="mt-4 font-semibold text-slate-950">{item.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
