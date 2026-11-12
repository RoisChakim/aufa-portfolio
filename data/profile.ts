export type Profile = {
  name: string;
  role: string;
  location: string;
  tagline: { en: string; id: string };
  bio: { en: string; id: string };
  portrait: string;
  email: string;
  github: string;
  instagram: string;
  linkedin?: string;
};

export const profileData: Profile = {
  name: "AUFA ROISUL CHAKIM",
  role: "WEB DEVELOPER",
  location: "Indonesia",
  tagline: {
    en: "Building digital experiences with purpose, precision, and simplicity.",
    id: "Membangun pengalaman digital dengan tujuan, presisi, dan kesederhanaan.",
  },
  bio: {
    en: "Web Developer focused on building functional, accessible, and refined web applications. Passionate about software architecture, clean user interfaces, and technical precision.",
    id: "Web Developer yang berfokus pada pembangunan aplikasi web yang fungsional, aksesibel, dan terstruktur. Memiliki ketertarikan pada arsitektur perangkat lunak, antarmuka pengguna yang bersih, dan presisi teknis.",
  },
  portrait: "/images/portrait.jpg",
  email: "roischakim86@gmail.com",
  github: "https://github.com/RoisChakim",
  instagram: "https://instagram.com/rois_chakim",
};
