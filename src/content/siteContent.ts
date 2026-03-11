export type SectionId =
  | "introduction"
  | "photography"
  | "work"
  | "freelance";

export interface SiteIdentity {
  displayName: string;
  tagline: string;
}

export interface NavItem {
  id: SectionId;
  label: string;
  shortLabel: string;
}

export const sectionOrder: SectionId[] = [
  "introduction",
  "photography",
  "work",
  "freelance",
];

export const sectionIndexById: Record<SectionId, number> = Object.fromEntries(
  sectionOrder.map((id, index) => [id, index]),
) as Record<SectionId, number>;

export interface HeroContent {
  titleLines: string[];
  introParagraphs: string[];
  backgroundImages: {
    left: {
      src: string;
      alt: string;
    };
    right: {
      src: string;
      alt: string;
    };
  };
  loopPhrases: string[];
  sideLabel: string;
  sideTitle: string;
  sideNote: string;
  sideTags: string[];
}

export interface PhotographySlide {
  src: string;
  alt: string;
  caption: string;
}

export interface SectionContent {
  id: SectionId;
  title: string;
  eyebrow: string;
  paragraphs: string[];
}

export const siteIdentity: SiteIdentity = {
  displayName: "LAURENT",
  tagline: "Builder. Creator. Freelance-ready.",
};

export const navItems: NavItem[] = [
  { id: "introduction", label: "Introduction", shortLabel: "Intro" },
  { id: "photography", label: "Photography", shortLabel: "Photo" },
  { id: "work", label: "Work", shortLabel: "Work" },
  { id: "freelance", label: "Freelance", shortLabel: "Freelance" },
];

export const heroContent: HeroContent = {
  titleLines: ["Developer.", "Photographer.", "Builder."],
  introParagraphs: [
    "I build with taste, instinct, and curiosity.",
    "Photography, products, and ideas all feed the same impulse: make something that feels sharp, useful, and alive.",
    "Right now I am learning how strong visuals, clear systems, and AI can turn small sparks into real momentum.",
  ],
  backgroundImages: {
    left: {
      src: "/DSC06431-1.jpg",
      alt: "Neon city lights reflected across a wet urban surface",
    },
    right: {
      src: "/DSC05410.jpg",
      alt: "Black and white style view of The Shard with a silhouetted foreground figure",
    },
  },
  loopPhrases: [
    "compile quiet sites with nerve",
    "frame light, products, and atmosphere",
    "trace clean layouts from instinct",
    "ship restrained visuals with bite",
  ],
  sideLabel: "THROUGH CODE AND CAMERA",
  sideTitle: "Framing.",
  sideNote: "<- product eye, light sense, restraint",
  sideTags: ["Photography", "Minimal", "Sharp", "Intentional"],
};

export const photographyContent: SectionContent = {
  id: "photography",
  title: "Photography",
  eyebrow: "Serious hobby",
  paragraphs: [
    "Photography is one of my most serious hobbies.",
    "It sharpens how I read light, tension, and silence inside a frame.",
    "That eye carries back into the things I build.",
  ],
};

export const photographySlides: PhotographySlide[] = [
  {
    src: "/012A1423.jpg",
    alt: "A lone student framed by a bright stairwell window",
    caption: "Frame I  -  Stairwell hush",
  },
  {
    src: "/012A1435.jpg",
    alt: "Students gathering in a sunlit corridor framed by shadow",
    caption: "Frame II  -  Midday corridor",
  },
  {
    src: "/DSC03729-2.jpg",
    alt: "A figure in an orange jacket walking a dog through snowfall",
    caption: "Frame III  -  Orange in snowfall",
  },
  {
    src: "/DSC03950.jpg",
    alt: "A narrow alley with warm timber walls and two small figures in the distance",
    caption: "Frame IV  -  Alley compression",
  },
  {
    src: "/DSC05387.jpg",
    alt: "A couple crossing a street under a shaft of warm evening light",
    caption: "Frame V  -  Passing spotlight",
  },
  {
    src: "/DSC03819.jpg",
    alt: "Small flowers lit against a near-black background",
    caption: "Frame VI  -  Lantern bloom",
  },
];

export const workContent: SectionContent = {
  id: "work",
  title: "Work",
  eyebrow: "Biggest project",
  paragraphs: [
    "Synthnote is my biggest project: an AI-powered learning platform that connects notes, flashcards, study kits, and analytics into one system.",
    "Built with Next.js, TypeScript, tRPC, Prisma, Supabase, Tailwind, and the OpenAI API, it goes well beyond a landing page into a real product with auth, state, data, and learning workflows.",
    "The part I care about most is how product thinking, interface rhythm, and technical systems meet in one place.",
  ],
};

export const freelanceContent: SectionContent = {
  id: "freelance",
  title: "Freelance",
  eyebrow: "Style and fit",
  paragraphs: [
    "Minimal, clean websites with a calm surface and sharp rhythm.",
    "Best fit: portfolios, landing pages, and small brand sites that need presence without noise.",
    "I keep the scope tight and the visual language deliberate. The deeper breakdown will live on Fiverr.",
  ],
};
