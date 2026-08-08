"use client";

const highlights = [
  {
    title: "Instagram Highlights",
    description:
      "Short-form reels and behind-the-scenes previews for audiences that love motion and mood.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "YouTube Recaps",
    description:
      "Event recaps and cinematic reels that wrap the story in a polished, cinematic finish.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function SocialFeed() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_60px_-30px_rgba(17,24,39,0.2)] backdrop-blur-xl sm:p-10">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Social Highlights
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          A live view of recent creative momentum
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
