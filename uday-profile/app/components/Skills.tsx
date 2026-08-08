"use client";

import { useEffect, useState } from "react";

type Skill = {
  id: string;
  name: string;
  category: "editing" | "coding";
};

const STORAGE_KEY = "portfolio_skills";

const defaultSkills: Skill[] = [
  { id: "1", name: "Photoshop", category: "editing" },
  { id: "2", name: "Lightroom", category: "editing" },
  { id: "3", name: "Premiere Pro", category: "editing" },
  { id: "4", name: "After Effects", category: "editing" },
  { id: "5", name: "React", category: "coding" },
  { id: "6", name: "Next.js", category: "coding" },
  { id: "7", name: "GitHub", category: "coding" },
];

type SkillForm = {
  name: string;
  category: Skill["category"];
};

const emptySkill: SkillForm = {
  name: "",
  category: "editing",
};

function badgeStyles(category: "editing" | "coding") {
  return `rounded-full px-4 py-2 text-sm font-semibold transition ${
    category === "editing"
      ? "border border-sky-500/30 bg-sky-500/10 text-sky-200 hover:border-sky-400/40 hover:bg-sky-500/15"
      : "border border-emerald-500/30 bg-emerald-500/10 text-emerald-200 hover:border-emerald-400/40 hover:bg-emerald-500/15"
  }`;
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState<SkillForm>({ ...emptySkill });
  const [editId, setEditId] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSkills(JSON.parse(stored));
        return;
      } catch {
        // ignore invalid JSON
      }
    }
    setSkills(defaultSkills);
  }, []);

  useEffect(() => {
    if (!skills.length) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skills));
  }, [skills]);

  const openAddModal = () => {
    setEditId(null);
    setFormState({ ...emptySkill });
    setErrors({});
    setIsModalOpen(true);
  };

  const openEditModal = (skill: Skill) => {
    setEditId(skill.id);
    setFormState({ name: skill.name, category: skill.category });
    setErrors({});
    setIsModalOpen(true);
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};
    if (!formState.name.trim()) nextErrors.name = "Skill name is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    const skill: Skill = {
      id: editId ?? Date.now().toString(),
      name: formState.name.trim(),
      category: formState.category,
    };

    if (editId) {
      setSkills((current) =>
        current.map((item) => (item.id === editId ? skill : item)),
      );
    } else {
      setSkills((current) => [skill, ...current]);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Delete this skill?")) return;
    setSkills((current) => current.filter((skill) => skill.id !== id));
  };

  const editingSkills = skills.filter((skill) => skill.category === "editing");
  const codingSkills = skills.filter((skill) => skill.category === "coding");

  return (
    <section
      id="skills"
      className="mt-20 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.9)] sm:p-10"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Manage Skill Badges
          </h2>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          Add Skill
        </button>
      </div>

      <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
        Add new skills, choose categories, and remove or update the badges that
        show on your portfolio.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Editing Tools
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Blue badges for creative suites.
              </p>
            </div>
            <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
              {editingSkills.length}
            </span>
          </div>
          <div className="space-y-3">
            {editingSkills.length === 0 ? (
              <p className="text-sm text-slate-500">No editing skills yet.</p>
            ) : (
              editingSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-800/70 bg-slate-900/90 p-4 transition hover:border-sky-500/30"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={badgeStyles(skill.category)}>
                      {skill.name}
                    </span>
                    <div className="ml-auto flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openEditModal(skill)}
                        className="rounded-full border border-slate-700 bg-slate-950/90 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:bg-slate-800"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(skill.id)}
                        className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/20"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="space-y-4 rounded-[2rem] border border-slate-800/90 bg-slate-950/80 p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                Coding Tools
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Green badges for frontend skills.
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
              {codingSkills.length}
            </span>
          </div>
          <div className="space-y-3">
            {codingSkills.length === 0 ? (
              <p className="text-sm text-slate-500">No coding skills yet.</p>
            ) : (
              codingSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col gap-3 rounded-3xl border border-slate-800/70 bg-slate-900/90 p-4 transition hover:border-emerald-500/30"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={badgeStyles(skill.category)}>
                      {skill.name}
                    </span>
                    <div className="ml-auto flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => openEditModal(skill)}
                        className="rounded-full border border-slate-700 bg-slate-950/90 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:bg-slate-800"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(skill.id)}
                        className="rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/20"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-800/90 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/40">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">
                  Skill Settings
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {editId ? "Edit Skill" : "Add Skill"}
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
                  htmlFor="skill-name"
                >
                  Skill name
                </label>
                <input
                  id="skill-name"
                  type="text"
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-rose-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-300"
                  htmlFor="skill-category"
                >
                  Category
                </label>
                <select
                  id="skill-category"
                  value={formState.category}
                  onChange={(event) =>
                    setFormState((prev) => ({
                      ...prev,
                      category: event.target.value as "editing" | "coding",
                    }))
                  }
                  className="w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                >
                  <option value="editing">Editing</option>
                  <option value="coding">Coding</option>
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
                  Save Skill
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
