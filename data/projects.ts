export type Project = {
  slug: string;
  name: string;
  summary: { en: string; id: string };
  stack: string[];
  thumbnail?: string;
  repositoryUrl: string;
  liveUrl?: string;
  featured: boolean;
  year?: string;
};

// Single source of truth for published project facts.
// Summaries paraphrase the official GitHub repository descriptions only;
// repositories without an official description are listed by name + stack.
// No roles, metrics, clients, or outcomes are claimed beyond this data.
export const projectsData: Project[] = [
  {
    slug: "roi-ai-metadata-pro",
    name: "roi-ai-metadata-pro",
    summary: {
      en: "AI-powered Adobe Stock metadata generator with Gemini Vision, SEO optimization, niche targeting, and automated keyword generation for stock contributors.",
      id: "Generator metadata Adobe Stock berbasis AI dengan Gemini Vision, optimasi SEO, penargetan ceruk, dan pembuatan kata kunci otomatis untuk kontributor stok.",
    },
    stack: ["TypeScript", "Gemini Vision API", "SEO"],
    repositoryUrl: "https://github.com/RoisChakim/roi-ai-metadata-pro",
    featured: true,
  },
  {
    slug: "remotion-4k-adobestock",
    name: "Remotion-4K-AdobeStock",
    summary: {
      en: "Automated 4K video rendering and composition workflow built with Remotion and TypeScript for stock video asset creation.",
      id: "Alat pembuatan dan alur kerja komposisi video 4K otomatis menggunakan Remotion dan TypeScript untuk aset video stok.",
    },
    stack: ["TypeScript", "Remotion", "Node.js"],
    repositoryUrl: "https://github.com/RoisChakim/Remotion-4K-AdobeStock",
    featured: true,
  },
  {
    slug: "microservices-order-inventory",
    name: "microservices-order-inventory",
    summary: {
      en: "Backend microservices architecture implementation for order and inventory management systems.",
      id: "Implementasi arsitektur microservices backend untuk sistem manajemen pesanan dan inventaris.",
    },
    stack: ["Java", "Microservices", "REST API"],
    repositoryUrl: "https://github.com/RoisChakim/microservices-order-inventory",
    featured: true,
  },
  {
    slug: "backend-pos-moka",
    name: "Backend_POS_MOKA",
    summary: {
      en: "Backend system for mobile and platform programming assignment. Café point-of-sale system modeled after MOKA POS.",
      id: "Sistem backend untuk Tugas Rancang pemrograman mobile dan berbasis platform. Aplikasi POS mirip MOKA POS untuk kafe.",
    },
    stack: ["Java", "Mobile Backend", "POS System"],
    repositoryUrl: "https://github.com/RoisChakim/Backend_POS_MOKA",
    featured: false,
  },
  {
    slug: "keywoard-finder",
    name: "Keywoard-finder-",
    summary: {
      en: "Keyword search and analysis utility script for SEO optimization and content research.",
      id: "Skrip utilitas pencarian dan analisis kata kunci untuk optimasi SEO dan riset konten.",
    },
    stack: ["JavaScript", "SEO Utility"],
    repositoryUrl: "https://github.com/RoisChakim/Keywoard-finder-",
    featured: false,
  },
  {
    slug: "biodata-laravel",
    name: "Biodata-laravel",
    summary: {
      en: "Web-based personal biodata application built for TTS project requirement.",
      id: "Aplikasi web biodata pribadi yang dibangun untuk kebutuhan tugas TTS.",
    },
    stack: ["Blade", "PHP", "Laravel"],
    repositoryUrl: "https://github.com/RoisChakim/Biodata-laravel",
    featured: false,
  },
];
