const expertiseItems = [
  "Photo Editing",
  "Video Editing",
  "Marriage Albums",
  "Event Photography",
  "Party Shoots",
  "Creative Storytelling",
];

export default function About() {
  return (
    <section
      id="about"
      className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10"
    >
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            About Me
          </p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Professional Visual & Frontend Expertise
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
            I blend polished photography and cinematic video editing with modern
            frontend development using React and Next.js. My work is built
            around emotion, clarity, and memorable storytelling for weddings,
            events, and premium brand experiences.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-6 text-slate-700">
            <p className="text-base leading-8">
              I specialize in crafting marriage albums, event highlights, party
              shoots, and professional photoshoots that feel cinematic and full
              of life. Each project is handled with attention to detail, elegant
              storytelling, and a refined editing workflow.
            </p>
            <p className="text-base leading-8">
              Alongside visual production, I build polished digital experiences
              with React, Next.js, and modern UI design principles to help
              brands showcase their story with confidence.
            </p>
          </div>

          <div className="space-y-4">
            {expertiseItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 shadow-sm"
              >
                <p className="text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
