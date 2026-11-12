export type Experience = {
  id: string;
  role: string;
  organization: string;
  type: "employment" | "freelance" | "organization" | "team-project" | "personal-project";
  startDate?: string;
  endDate?: string;
  description: { en: string; id: string };
};

export const experienceData: Experience[] = [
  {
    id: "exp-01",
    role: "Intern — Archive and Library Staff",
    organization: "Dinas Kearsipan dan Perpustakaan Kabupaten Semarang",
    type: "organization",
    startDate: "2026-09",
    endDate: "2026-11",
    description: {
      en: "Assisted in producing informative abstracts, book annotation, reader guidance, and reporting for a social literacy outreach activity.",
      id: "Membantu dalam pembuatan abstrak informatif, anotasi buku, bimbingan pemustaka, dan pelaporan untuk kegiatan sosialisasi literasi.",
    },
  },
];
