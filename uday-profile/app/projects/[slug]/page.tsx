"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  STORAGE_KEY_PROJECTS,
  defaultProjects,
  getProjectBySlug,
  getProjectCategoryLabel,
  getProjectGalleryTitle,
  type Project,
} from "../../lib/portfolio";

type Props = {
  params: {
    slug: string;
  };
};

type GalleryMedia = {
  type: "image" | "video";
  title: string;
  src?: string;
  url?: string;
  description?: string;
};

export default function ProjectDetailPage({ params }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<GalleryMedia | null>(null);

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
      <div className="min-h-screen bg-transparent text-slate-900">
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
          >
            ← Back to Portfolio
          </Link>
          <div className="mt-20 rounded-[2rem] border border-slate-200 bg-white/80 p-10 text-slate-700 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl">
            <h1 className="text-3xl font-semibold text-slate-950">
              Project not found
            </h1>
            <p className="mt-4 text-slate-600">
              This project page is not available yet. Return to the portfolio
              and choose a featured project.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const galleryTitle = getProjectGalleryTitle(project.category);
  const galleryItems: GalleryMedia[] = [
    ...project.gallery.map((image, index) => ({
      type: "image" as const,
      title: `${project.title} — image ${index + 1}`,
      src: image,
      description: "Tap to view the full image preview.",
    })),
    ...project.videoClips.map((clip) => ({
      type: "video" as const,
      title: clip.title,
      url: clip.url,
      description: "Tap to open the video link in a new tab.",
    })),
  ];

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition hover:text-indigo-900"
        >
          ← Back to Portfolio
        </Link>

        <header className="mt-10 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Album Gallery
            </p>
            <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                {project.category === "insta"
                  ? "Open Instagram Reels"
                  : "View Full Project"}
              </a>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                Album Type: {getProjectCategoryLabel(project.category)}
              </span>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
                    Media Gallery
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-950">
                    {galleryTitle}
                  </h2>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                  {galleryItems.length} items
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {galleryItems.map((item) => (
                  <button
                    key={`${item.type}-${item.title}`}
                    type="button"
                    onClick={() => setSelectedMedia(item)}
                    className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 text-left transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
                  >
                    {item.type === "image" && item.src ? (
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                      </div>
                    ) : (
                      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-teal-50">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.16),transparent_45%)]" />
                        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-indigo-200 bg-white/80 text-indigo-700 shadow-sm">
                          ▶
                        </div>
                      </div>
                    )}
                    <div className="space-y-2 p-4">
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Video Clips
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Event-specific video highlights to complement your gallery.
                  </p>
                </div>
                <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-teal-700">
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
                    className="block rounded-3xl border border-slate-200 bg-white px-5 py-4 text-slate-900 transition hover:border-indigo-200 hover:bg-slate-50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {clip.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          Open clip in a new tab.
                        </p>
                      </div>
                      <span className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-700">
                        Watch
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
                Project Snapshot
              </p>
              <div className="mt-4 space-y-3 text-slate-700">
                <p className="rounded-3xl border border-slate-200 bg-white px-4 py-3">
                  Category: {getProjectCategoryLabel(project.category)}
                </p>
                <p className="rounded-3xl border border-slate-200 bg-white px-4 py-3">
                  Gallery count: {project.gallery.length}
                </p>
                <p className="rounded-3xl border border-slate-200 bg-white px-4 py-3">
                  Video clips: {project.videoClips.length}
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-600">
              <p className="text-sm leading-7">
                Each portfolio item now opens with a polished gallery
                experience, allowing you to preview visuals and jump directly to
                the relevant video link.
              </p>
            </div>
          </aside>
        </section>
      </div>

      {selectedMedia && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedMedia(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Close
            </button>
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="bg-slate-100 p-4">
                {selectedMedia.type === "image" && selectedMedia.src ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
                  />
                ) : (
                  <div className="flex h-[320px] w-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-indigo-100 via-white to-teal-50 sm:h-[420px]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-indigo-200 bg-white text-3xl text-indigo-700 shadow-sm">
                      ▶
                    </div>
                  </div>
                )}
              </div>
              <div className="space-y-5 p-6 sm:p-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
                    Preview
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                    {selectedMedia.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-slate-600">
                  {selectedMedia.description}
                </p>
                {selectedMedia.type === "video" && selectedMedia.url ? (
                  <a
                    href={selectedMedia.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
                  >
                    Open video link
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedMedia(null)}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white"
                  >
                    Close preview
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
