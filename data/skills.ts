export type SkillGroup = {
  category: { en: string; id: string };
  skills: string[];
};

export const skillsData: SkillGroup[] = [
  {
    category: { en: "Frontend Development", id: "Pengembangan Frontend" },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Three.js", "GSAP"],
  },
  {
    category: { en: "Backend Development", id: "Pengembangan Backend" },
    skills: ["Java", "PHP", "C", "Node.js"],
  },
  {
    category: { en: "Database & Storage", id: "Basis Data & Penyimpanan" },
    skills: ["MySQL"],
  },
  {
    category: { en: "Design, Tools & Motion", id: "Desain, Alat & Motion" },
    skills: ["Figma", "UI/UX Design", "Typography", "After Effects", "Blender"],
  },
];
