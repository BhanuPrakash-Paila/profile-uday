"use client";

const awards = [
  {
    title: "Creative Excellence Award",
    subtitle: "2024 International Photography Forum",
    badge: "🏅",
  },
  {
    title: "Certified Adobe Expert",
    subtitle: "Photoshop & Lightroom Professional",
    badge: "🎓",
  },
  {
    title: "Best Event Recap",
    subtitle: "Regional Media Awards",
    badge: "✨",
  },
];

export default function Awards() {
  return (
    <section
      id="awards"
      className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10"
    >
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Awards & Certifications
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Recognized for craft and consistency
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          Professional milestones and credentials that reflect years of
          delivery, refinement, and creative growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {awards.map((award) => (
          <div
            key={award.title}
            className="group rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-3xl shadow-sm">
              {award.badge}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-950">
              {award.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {award.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
