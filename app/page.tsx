"use client";

import { useState, useEffect } from "react";
import { Hero } from "@/components/hero/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { dictionaries } from "@/i18n/translations";

export default function Home() {
  const [locale, setLocale] = useState<"en" | "id">("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "id") {
      setLocale(stored);
    }
  }, []);

  const dict = dictionaries[locale];

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <AboutSection dict={dict} locale={locale} />
      <WorksSection dict={dict} locale={locale} />
      <SkillsSection dict={dict} locale={locale} />
      <ExperienceSection dict={dict} locale={locale} />
      <EducationSection dict={dict} locale={locale} />
      <ContactSection dict={dict} locale={locale} />

      {/* GSAP-owned section scroll reveals (single controller, fail-visible). */}
      <ScrollReveal />

      <SiteFooter dict={dict} />
    </>
  );
}
