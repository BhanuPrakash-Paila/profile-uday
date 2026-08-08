export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Let&apos;s create something unforgettable.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            Reach out with a few details about your project and I&apos;ll
            respond with a tailored plan for photography, video editing, or
            frontend development.
          </p>

          <div className="grid gap-4 grid-cols-1 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                label: "Instagram",
                url: "https://www.instagram.com/_chandu4u/?hl=en",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.55 2.55a.75.75 0 0 1 .75.75v1.4a.75.75 0 0 1-1.5 0V6.8a.75.75 0 0 1 .75-.75Zm-4.3 1.2a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z" />
                  </svg>
                ),
              },
              {
                label: "Twitter",
                url: "https://twitter.com/_chandu4u",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M22.162 5.656c-.793.352-1.645.588-2.538.694a4.44 4.44 0 0 0 1.948-2.45 8.91 8.91 0 0 1-2.82 1.08 4.44 4.44 0 0 0-7.564 4.044A12.6 12.6 0 0 1 3.15 4.894a4.44 4.44 0 0 0 1.375 5.93 4.43 4.43 0 0 1-2.01-.556v.056a4.44 4.44 0 0 0 3.56 4.35 4.45 4.45 0 0 1-1.139.153 4.14 4.14 0 0 1-.834-.08 4.44 4.44 0 0 0 4.15 3.08 8.9 8.9 0 0 1-5.51 1.9c-.358 0-.71-.021-1.056-.062a12.56 12.56 0 0 0 6.795 1.992c8.153 0 12.607-6.75 12.607-12.607 0-.192-.005-.383-.014-.573a9.01 9.01 0 0 0 2.214-2.294Z" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                url: "https://www.facebook.com/_chandu4u",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.483 21.5V13.41h2.99l.45-3.49h-3.44V7.83c0-.98.273-1.65 1.69-1.65h1.8V3.01a24.13 24.13 0 0 0-2.62-.136c-2.59 0-4.36 1.58-4.36 4.49v2.5H7.87v3.49h2.97V21.5h2.64Z" />
                  </svg>
                ),
              },
              {
                label: "WhatsApp",
                url: "https://wa.me/9876545678",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.002C6.486 2.002 2 6.488 2 12.002c0 1.974.516 3.82 1.413 5.397L2 22l4.78-1.4A9.955 9.955 0 0 0 12 22.002c5.514 0 10-4.486 10-10 0-5.514-4.486-9.999-10-9.999Zm0 1.5c4.69 0 8.5 3.81 8.5 8.499 0 4.093-2.87 7.572-6.785 8.346l-.401.1-.256-.265A8.47 8.47 0 0 1 5.5 12.001c0-4.688 3.81-8.499 8.5-8.499Zm-1.08 3.353a.75.75 0 0 0-1.252.675c.022.314.082.707.18 1.168.103.489.708 1.363 1.454 2.108.744.744 1.618 1.351 2.107 1.453.48.1.875.158 1.188.18a.75.75 0 0 0 .675-1.252l-.611-.61a.75.75 0 0 0-.716-.186c-.454.098-.965.112-1.355.025a6.05 6.05 0 0 1-1.34-.42 2.193 2.193 0 0 1-.923-.92 6.008 6.008 0 0 1-.42-1.34c-.087-.39-.073-.901.025-1.355a.75.75 0 0 0-.185-.716l-.61-.61Z" />
                  </svg>
                ),
              },
              {
                label: "Call",
                url: "tel:9876545678",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1.002 1.002 0 0 1 1.11-.21 11.56 11.56 0 0 0 3.64.58 1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C8.63 21.5 2.5 15.37 2.5 8a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.58 3.64.11.27.04.59-.21.8l-2.25 2.35Z" />
                  </svg>
                ),
              },
            ].map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target={label === "Call" ? "_self" : "_blank"}
                rel={label === "Call" ? undefined : "noreferrer"}
                className="inline-flex items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 transition hover:border-indigo-300 hover:bg-white hover:text-slate-900"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  {icon}
                </span>
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)]">
          <div>
            <label
              className="mb-2 block text-sm font-medium text-slate-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-slate-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-medium text-slate-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project"
              className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
