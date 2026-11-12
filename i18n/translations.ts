const en = {
  nav: {
    about: "About",
    work: "Work",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    eyebrow: "Indonesia · Personal Portfolio",
    intro: "Hello, I'm",
    role: "Web Developer",
    ctaWork: "Explore My Work",
    ctaContact: "Get In Touch",
    scrollHint: "Scroll to explore",
    metadata: "Personal Identity",
  },
  about: {
    eyebrow: "About",
    heading: "Professional introduction",
    p1: "Web Developer focused on building functional, accessible, and refined web applications.",
    p2: "Passionate about software architecture, clean user interfaces, and technical precision.",
    p3: "Open to collaboration on real-world web projects and thoughtful digital products.",
    principles: "Working principles",
    principleOne: "Clarity before decoration",
    principleTwo: "Evidence over claims",
    principleThree: "Maintainable and tested code",
  },
  works: {
    eyebrow: "Selected Works",
    heading: "Featured projects",
    viewRepo: "Repository",
    viewLive: "Live",
    viewDetails: "Details",
    featured: "Featured",
    moreHeading: "More projects",
    noProjects: "Projects are being curated; selected works will appear here once verified.",
  },
  project: {
    eyebrow: "Project",
    back: "All projects",
    stack: "Stack",
    more: "More projects",
  },
  skills: {
    eyebrow: "Skills",
    heading: "Technologies and tools",
  },
  experience: {
    eyebrow: "Experience",
    heading: "Professional background",
  },
  education: {
    eyebrow: "Education",
    heading: "Academic background",
    pending: "Program details and dates are pending confirmation.",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Get in touch",
    subtitle: "Have a project or opportunity? Reach out directly.",
    emailCta: "Send Email",
    socials: "Social",
  },
  footer: {
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
  theme: {
    dark: "Dark",
    light: "Light",
    system: "System",
  },
  lang: {
    en: "EN",
    id: "ID",
  },
  labels: {
    location: "Location",
    email: "Email",
    role: "Role",
    repository: "Repository",
    live: "Live",
  },
};

const id = {
  nav: {
    about: "Tentang",
    work: "Karya",
    skills: "Keahlian",
    experience: "Pengalaman",
    education: "Pendidikan",
    contact: "Kontak",
  },
  hero: {
    eyebrow: "Indonesia · Portofolio Pribadi",
    intro: "Halo, saya",
    role: "Web Developer",
    ctaWork: "Lihat Karya",
    ctaContact: "Hubungi Saya",
    scrollHint: "Gulir untuk menjelajah",
    metadata: "Identitas Pribadi",
  },
  about: {
    eyebrow: "Tentang",
    heading: "Perkenalan profesional",
    p1: "Web Developer yang berfokus pada pembangunan aplikasi web yang fungsional, aksesibel, dan terstruktur.",
    p2: "Memiliki ketertarikan pada arsitektur perangkat lunak, antarmuka pengguna yang bersih, dan presisi teknis.",
    p3: "Terbuka untuk kolaborasi pada proyek web nyata dan produk digital yang matang.",
    principles: "Prinsip kerja",
    principleOne: "Kejelasan sebelum dekorasi",
    principleTwo: "Bukti, bukan klaim",
    principleThree: "Kode yang bisa dirawat dan diuji",
  },
  works: {
    eyebrow: "Karya Terpilih",
    heading: "Proyek unggulan",
    viewRepo: "Repositori",
    viewLive: "Live",
    viewDetails: "Detail",
    featured: "Unggulan",
    moreHeading: "Proyek lainnya",
    noProjects: "Karya sedang dikurasi; Karya terpilih akan ditampilkan setelah verifikasi.",
  },
  project: {
    eyebrow: "Proyek",
    back: "Semua proyek",
    stack: "Teknologi",
    more: "Proyek lainnya",
  },
  skills: {
    eyebrow: "Keahlian",
    heading: "Teknologi dan alat",
  },
  experience: {
    eyebrow: "Pengalaman",
    heading: "Latar belakang profesional",
  },
  education: {
    eyebrow: "Pendidikan",
    heading: "Latar belakang akademis",
    pending: "Detail program dan tanggal masih menunggu konfirmasi.",
  },
  contact: {
    eyebrow: "Kontak",
    heading: "Hubungi saya",
    subtitle: "Memiliki proyek atau kesempatan? Hubungi langsung.",
    emailCta: "Kirim Email",
    socials: "Media Sosial",
  },
  footer: {
    rights: "Hak cipta dilindungi.",
    backToTop: "Kembali ke atas",
  },
  theme: {
    dark: "Gelap",
    light: "Terang",
    system: "Sistem",
  },
  lang: {
    en: "EN",
    id: "ID",
  },
  labels: {
    location: "Lokasi",
    email: "Email",
    role: "Peran",
    repository: "Repositori",
    live: "Live",
  },
};

export type Dictionary = typeof en;

export const dictionaries = {
  en,
  id,
} as const;
