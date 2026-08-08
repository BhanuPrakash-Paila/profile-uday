"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  STORAGE_KEY_PROJECTS,
  defaultProjects,
  getProjectBySlug,
  type Project,
} from "../../lib/portfolio";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailPage({ params }: Props) {
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Project[];
        const active = parsed.find((item) => item.slug === params.slug);
        if (active) {
          setProject(active);
          return;
        }
      } catch {
        // ignore invalid JSON
      }
    }
    setProject(getProjectBySlug(params.slug));
  }, [params.slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sky-300 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>
          <div className="mt-20 rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 text-slate-300 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)]">
            <h1 className="text-3xl font-semibold text-white">Project not found</h1>
            <p className="mt-4 text-slate-400">
              This project page is not available yet. Return to the portfolio and choose a featured project.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-sky-300 transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <header className="mt-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/95 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] sm:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Project Details</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Open Project Link
              </a>
              <span className="inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/90 px-4 py-3 text-sm text-slate-300">
                Category: {project.category}
              </span>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image) => (
                <div key={image} className="overflow-hidden rounded-[1.75rem] border border-slate-800/90 bg-slate-900/80 shadow-sm shadow-slate-950/20">
                  <img src={image} alt={project.title} className="h-64 w-full object-cover" />
                </div>
              ))}
            </div>

            <div className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Video Clips</p>
                  <p className="mt-1 text-sm text-slate-500">Event-specific video highlights to complement your gallery.</p>
                </div>
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
                  {project.videoClips.length} Clips
                </span>
              </div>
              <div className="space-y-4">
                {project.videoClips.map((clip) => (
                  <a
                    key={clip.title}
                    href={clip.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-slate-800/80 bg-slate-900/90 px-5 py-4 text-slate-100 transition hover:border-sky-500/40 hover:bg-slate-950/90"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{clip.title}</p>
                        <p className="mt-1 text-sm text-slate-400">Open clip in a new tab.</p>
                      </div>
                      <span className="rounded-full bg-sky-500/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200">
                        Watch
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-slate-800/90 bg-slate-950/90 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.8)]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Project Snapshot</p>
              <div className="mt-4 space-y-3 text-slate-300">
                <p className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3">Event Type: {project.category}</p>
                <p className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3">Gallery count: {project.gallery.length}</p>
                <p className="rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3">Video clips: {project.videoClips.length}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/90 p-5 text-slate-400">
              <p className="text-sm leading-7">
                This page highlights gallery imagery and video clips tailored for each project category. Use the project link above to explore the full collection.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
