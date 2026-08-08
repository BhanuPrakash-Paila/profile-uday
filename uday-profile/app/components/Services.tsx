"use client";

import {
  serviceCategories,
  serviceOfferings,
  type ServiceCategory,
} from "../lib/portfolio";

export default function Services() {
  return (
    <section
      id="services"
      className="mt-20 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] sm:p-10"
    >
      <div className="space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Streamlined Photo & Video Services
          </h2>
          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            Professional offerings across wedding photography, baby shoots,
            event coverage, party shoots, promotional campaigns, photo editing,
            video editing, and video shoots.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-6 shadow-sm shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              What I offer
            </p>
            <div className="space-y-4">
              {serviceOfferings.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/90 p-4 text-slate-100"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-white">{service}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Professional delivery, polished editing, and high-impact
                      visual storytelling.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-6 shadow-sm shadow-slate-950/20">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Service focus areas
            </p>
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300">
                    {category.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
