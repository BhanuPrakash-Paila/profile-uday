"use client";

import Link from "next/link";
import { useEffect, useState, type ChangeEvent } from "react";
import {
  type Project,
  defaultProjects,
  STORAGE_KEY_PROJECTS,
  createProjectSlug,
  getGalleryForCategory,
  getVideoClipsForCategory,
} from "../lib/portfolio";

type ProjectForm = {
  title: string;
  description: string;
  image: string;
  link: string;
  category: Project["category"];
};

const emptyProject: ProjectForm = {
  title: "",
  description: "",
  image: "",
  link: "",
  category: "wedding",
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<ProjectForm>({ ...emptyProject });
  const [editId, setEditId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (stored) {
      try {
        setProjects(JSON.parse(stored));
        return;
      } catch {
        // ignore invalid JSON
      }
    }
    setProjects(defaultProjects);
  }, []);

  useEffect(() => {
    if (!projects.length) return;
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
  }, [projects]);

  const openAddModal = () => {
    setEditId(null);
    setFormState({ ...emptyProject });
    setErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setEditId(project.id);
    setFormState({
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      category: project.category,
    });
    setErrors({});
    setIsModalOpen(true);
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!formState.title.trim())
      nextErrors.title = "Project title is required.";
    if (!formState.description.trim())
      nextErrors.description = "Description is required.";
    if (!formState.image.trim())
      nextErrors.image = "Image URL or uploaded image is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setFormState((prev) => ({ ...prev, image: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    const slug = createProjectSlug(formState.title);

    const project: Project = {
      id: editId ?? Date.now().toString(),
      slug,
      title: formState.title,
      description: formState.description,
      image: formState.image,
      link: formState.link || "#contact",
      category: formState.category,
      gallery: getGalleryForCategory(formState.category),
      videoClips: getVideoClipsForCategory(formState.category),
    };

    if (editId) {
      setProjects((current) =>
        current.map((item) => (item.id === editId ? project : item)),
      );
    } else {
      setProjects((current) => [project, ...current]);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Delete this project?")) return;
    setProjects((current) => current.filter((project) => project.id !== id));
  };

  return (
    <section id="projects" className="mt-20">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Manage Your Portfolio
          </h2>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Add Project
        </button>
      </div>

      <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
        Add, edit, and remove projects with responsive cards that update
        instantly and persist in your browser.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/90 shadow-[0_30px_50px_-30px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-sky-500/30"
          >
            <div className="absolute right-4 top-4 z-10 flex items-center gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  openEditModal(project);
                }}
                className="rounded-full border border-slate-700 bg-slate-950/90 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleDelete(project.id);
                }}
                className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/20"
              >
                Delete
              </button>
            </div>
            <div className="relative h-72 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  {project.category}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-400">
                {project.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-white">
                View details
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}

        {projects.length === 0 && (
          <div className="col-span-full rounded-[2rem] border border-dashed border-slate-700/70 bg-slate-900/80 p-10 text-center text-slate-400">
            No projects yet. Start by adding a new project above.
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                  Project Details
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {editId ? "Edit Project" : "Add New Project"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="space-y-5">
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-title"
                >
                  Title
                </label>
                <input
                  id="project-title"
                  type="text"
                  value={formState.title}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
                {errors.title && (
                  <p className="mt-2 text-sm text-rose-400">{errors.title}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-description"
                >
                  Description
                </label>
                <textarea
                  id="project-description"
                  rows={4}
                  value={formState.description}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      description: event.target.value,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
                {errors.description && (
                  <p className="mt-2 text-sm text-rose-400">
                    {errors.description}
                  </p>
                )}
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-image"
                >
                  Image / Thumbnail URL
                </label>
                <input
                  id="project-image"
                  type="text"
                  value={formState.image}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      image: event.target.value,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
                <label className="mt-3 flex cursor-pointer items-center gap-3 rounded-3xl border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-300 transition hover:border-sky-500/40 hover:text-white">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-sky-300">
                    +
                  </span>
                  Upload Image
                </label>
                {errors.image && (
                  <p className="mt-2 text-sm text-rose-400">{errors.image}</p>
                )}
              </div>
              {formState.image && (
                <div className="rounded-[1.5rem] border border-slate-800/80 bg-slate-950/90 p-3">
                  <p className="mb-2 text-sm text-slate-400">Preview</p>
                  <img
                    src={formState.image}
                    alt="Project preview"
                    className="h-64 w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              )}
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-link"
                >
                  Link
                </label>
                <input
                  id="project-link"
                  type="text"
                  value={formState.link}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      link: event.target.value,
                    }))
                  }
                  placeholder="#contact"
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="project-category"
                >
                  Category
                </label>
                <select
                  id="project-category"
                  value={formState.category}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      category: event.target.value as typeof prev.category,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="wedding">Wedding</option>
                  <option value="baby">Baby</option>
                  <option value="personal">Personal</option>
                  <option value="couple">Couple</option>
                  <option value="promo">Promotional</option>
                  <option value="video">Video</option>
                  <option value="insta">Insta Clips</option>
                </select>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-900 px-5 py-3 text-sm text-slate-200 transition hover:border-slate-700 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Save Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
