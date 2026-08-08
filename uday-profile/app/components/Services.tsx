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
      className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10"
    >
      <div className="space-y-10">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Streamlined Photo & Video Services
          </h2>
          <p className="text-sm leading-7 text-slate-600 sm:text-base">
            Professional offerings across wedding photography, baby shoots,
            event coverage, party shoots, promotional campaigns, photo editing,
            video editing, and video shoots.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              What I offer
            </p>
            <div className="space-y-4">
              {serviceOfferings.map((service) => (
                <div
                  key={service}
                  className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-4 text-slate-900"
                >
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{service}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Professional delivery, polished editing, and high-impact
                      visual storytelling.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Service focus areas
            </p>
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-3xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-indigo-600">
                    {category.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
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
