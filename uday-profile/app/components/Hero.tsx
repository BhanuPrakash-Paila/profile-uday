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
      className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 px-6 py-16 shadow-[0_24px_70px_-30px_rgba(17,24,39,0.24)] backdrop-blur-xl sm:px-8 lg:px-10"
    >
      <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-teal-400/15 blur-3xl" />
      <div className="absolute -right-12 bottom-[-2rem] h-56 w-56 rounded-full bg-indigo-400/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center text-slate-900 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
        <div className="fade-in flex-1 space-y-6 md:max-w-xl">
          <p className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-indigo-700">
            Freelancer | Photo & Video Editing
          </p>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Uday Gulla
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              Freelancer | Photo & Video Editing | Creative Storytelling
            </p>
          </div>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Frontend developer with React and Next.js experience, crafting
            modern visual portfolios and immersive digital experiences.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-slate-50 hover:text-slate-900"
            >
              See Projects
            </a>
          </div>
        </div>

        <div className="fade-in-up flex-1 md:max-w-[420px]">
          <div className="relative mx-auto w-full max-w-[360px] rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_70px_-30px_rgba(17,24,39,0.24)]">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100">
              <img
                src={profileImage}
                alt="Profile"
                className="h-[360px] w-full object-cover transition duration-700 ease-out"
              />
            </div>
            <div className="mt-6 space-y-3">
              <label className="group flex cursor-pointer items-center justify-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-white hover:text-slate-900">
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
                  className="inline-flex w-full items-center justify-center rounded-full border border-rose-200 bg-rose-50 px-5 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
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
