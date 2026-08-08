export type ProjectCategory =
  | "wedding"
  | "baby"
  | "personal"
  | "couple"
  | "video"
  | "promo"
  | "insta";

export type VideoClip = {
  title: string;
  url: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  link: string;
  category: ProjectCategory;
  gallery: string[];
  videoClips: VideoClip[];
};

export const STORAGE_KEY_PROJECTS = "portfolio_projects";

export const serviceOfferings = [
  "Wedding photography",
  "Baby photo shoots",
  "Event coverage",
  "Party shoots",
  "Promotional photos",
  "Photo editing",
  "Video editing",
  "Video shoots",
];

export type ServiceCategory = {
  id: "wedding" | "baby" | "event" | "party" | "promo";
  title: string;
  description: string;
  images: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "wedding",
    title: "Wedding Shoots",
    description:
      "Cinematic coverage from first look to last dance, with curated portraits and emotional video clips.",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1502663656924-1db2b4c0d3f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "baby",
    title: "Baby Shoots",
    description:
      "Soft, intimate portraits that capture newborn milestones and tender family moments.",
    images: [
      "https://images.unsplash.com/photo-1500251897-7ed5c5e4d253?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "event",
    title: "Event Coverage",
    description:
      "Live events captured with energy and clarity, from product launches to VIP celebrations.",
    images: [
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "party",
    title: "Party Shoots",
    description:
      "Vibrant party photography with bold color, movement, and atmosphere in every frame.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "promo",
    title: "Promotional Photos",
    description:
      "Marketing-ready visuals for brands, campaigns, and social media launches.",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
    ],
  },
];

export const defaultProjects: Project[] = [
  {
    id: "wedding-album-highlights",
    slug: "wedding-album-highlights",
    title: "Wedding Album Highlights",
    description:
      "Premium wedding photography and cinematic wedding recap with elegant storytelling.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
    link: "#contact",
    category: "wedding",
    gallery: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    ],
    videoClips: [
      {
        title: "Golden Hour Wedding Reel",
        url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ",
      },
    ],
  },
  {
    id: "baby-portrait-session",
    slug: "baby-portrait-session",
    title: "Baby Portrait Session",
    description:
      "Soft newborn and baby photo shoots with warm, timeless mood and family-first storytelling.",
    image:
      "https://images.unsplash.com/photo-1500251897-7ed5c5e4d253?auto=format&fit=crop&w=1000&q=80",
    link: "#contact",
    category: "baby",
    gallery: [
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
    ],
    videoClips: [
      {
        title: "Newborn Story Reel",
        url: "https://www.youtube.com/watch?v=2X6D9u3_R-4",
      },
    ],
  },
  {
    id: "personal-style-shoot",
    slug: "personal-style-shoot",
    title: "Personal Style Shoot",
    description:
      "Creative portrait sessions for personal branding, lifestyle, and polished editorial visuals.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
    link: "#contact",
    category: "personal",
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
    ],
    videoClips: [
      {
        title: "Personal Brand Reel",
        url: "https://www.youtube.com/watch?v=Z6uX4a2Jdzg",
      },
    ],
  },
  {
    id: "couple-portrait-story",
    slug: "couple-portrait-story",
    title: "Couple Portrait Story",
    description:
      "Romantic couple photography with cinematic portraits and soft-motion highlights.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
    link: "#contact",
    category: "couple",
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
    ],
    videoClips: [
      {
        title: "Romantic Highlights",
        url: "https://www.youtube.com/watch?v=QsV-9I9b2q8",
      },
    ],
  },
  {
    id: "promo-campaign-showcase",
    slug: "promo-campaign-showcase",
    title: "Promotional Campaign Showcase",
    description:
      "Branded promotional photos and video teasers that elevate launches, campaigns, and social storytelling.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
    link: "#contact",
    category: "promo",
    gallery: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80",
    ],
    videoClips: [
      {
        title: "Promotional Launch Teaser",
        url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ",
      },
    ],
  },
  {
    id: "insta-viral-clips",
    slug: "insta-viral-clips",
    title: "Insta Viral Clips",
    description:
      "High-energy reels crafted for engagement, shares, and viral reach on Instagram.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=80",
    link: "https://www.instagram.com/_chandu4u/reels/?hl=en",
    category: "insta",
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=1000&q=80",
    ],
    videoClips: [
      {
        title: "Instagram Reels Showcase",
        url: "https://www.instagram.com/_chandu4u/reels/?hl=en",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | null {
  return defaultProjects.find((project) => project.slug === slug) ?? null;
}

export function createProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

export function getGalleryForCategory(category: ProjectCategory): string[] {
  switch (category) {
    case "wedding":
      return [
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
      ];
    case "baby":
      return [
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      ];
    case "personal":
      return [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80",
      ];
    case "couple":
      return [
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
      ];
    case "promo":
      return [
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80",
      ];
    case "insta":
      return [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1543128639-4cb7d1cabc88?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=1000&q=80",
      ];
    default:
      return [];
  }
}

export function getVideoClipsForCategory(
  category: ProjectCategory,
): VideoClip[] {
  switch (category) {
    case "wedding":
      return [
        {
          title: "Golden Hour Wedding Reel",
          url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ",
        },
      ];
    case "baby":
      return [
        {
          title: "Newborn Story Reel",
          url: "https://www.youtube.com/watch?v=2X6D9u3_R-4",
        },
      ];
    case "personal":
      return [
        {
          title: "Personal Brand Reel",
          url: "https://www.youtube.com/watch?v=Z6uX4a2Jdzg",
        },
      ];
    case "couple":
      return [
        {
          title: "Romantic Highlights",
          url: "https://www.youtube.com/watch?v=QsV-9I9b2q8",
        },
      ];
    case "promo":
      return [
        {
          title: "Promotion Launch Highlight",
          url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ",
        },
      ];
    case "insta":
      return [
        {
          title: "Instagram Reels Showcase",
          url: "https://www.instagram.com/_chandu4u/reels/?hl=en",
        },
      ];
    case "video":
      return [
        {
          title: "Edited Video Highlight",
          url: "https://www.youtube.com/watch?v=V8ArfVmv1KQ",
        },
      ];
    default:
      return [];
  }
}
