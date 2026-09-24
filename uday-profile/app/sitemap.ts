import type { MetadataRoute } from "next";
import { defaultProjects } from "@/app/lib/portfolio";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://uday-profile.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...defaultProjects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
