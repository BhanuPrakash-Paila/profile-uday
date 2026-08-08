"use client";

import { useEffect, useState, type ChangeEvent } from "react";

const DEFAULT_PROFILE = "/profile.svg";

export default function Hero() {
  const [profileImage, setProfileImage] = useState<string>(DEFAULT_PROFILE);
  const [isCustomImage, setIsCustomImage] = useState(false);

  useEffect(() => {
    const savedImage = window.localStorage.getItem("portfolio_profile_image");
    if (savedImage) {
      setProfileImage(savedImage);
      setIsCustomImage(true);
    }
  }, []);

  const handleProfileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setProfileImage(result);
        setIsCustomImage(true);
        window.localStorage.setItem("portfolio_profile_image", result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setProfileImage(DEFAULT_PROFILE);
    setIsCustomImage(false);
    window.localStorage.removeItem("portfolio_profile_image");
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6 py-16 shadow-[0_40px_120px_-40px_rgba(14,165,233,0.18)]"
    >
      <div className="absolute -left-20 top-10 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute -right-16 bottom-[-4rem] h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center text-slate-100 sm:px-10 md:flex-row md:items-center md:justify-between md:text-left">
        <div className="fade-in flex-1 space-y-6 md:max-w-xl">
          <p className="inline-flex rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-sky-300">
            Freelancer | Photo & Video Editing
          </p>
          <div className="space-y-5">
            <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Uday Gulla
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Freelancer | Photo & Video Editing | Creative Storytelling
            </p>
          </div>
          <p className="text-base leading-7 text-slate-400 sm:text-lg">
            Frontend developer with React and Next.js experience, crafting
            modern visual portfolios and immersive digital experiences.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-3 text-sm text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              See Projects
            </a>
          </div>
        </div>

        <div className="fade-in-up flex-1 md:max-w-[420px]">
          <div className="relative mx-auto w-full max-w-[360px] rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)]">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-900">
              <img
                src={profileImage}
                alt="Profile"
                className="h-[360px] w-full object-cover transition duration-700 ease-out"
              />
            </div>
            <div className="mt-6 space-y-3">
              <label className="group flex cursor-pointer items-center justify-center gap-3 rounded-full border border-slate-800/90 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-500/40 hover:text-white">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileUpload}
                />
                Upload profile picture
              </label>
              {isCustomImage && (
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="inline-flex w-full items-center justify-center rounded-full border border-rose-500/20 bg-rose-500/10 px-5 py-3 text-sm font-semibold text-rose-100 transition hover:bg-rose-500/20 hover:text-white"
                >
                  Remove profile picture
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
