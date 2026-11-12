"use client";

import { Section } from "@/components/ui/Section";
import { Lanyard } from "@/components/hero/Lanyard";

type HeroProps = {
  dict: any;
  locale: "en" | "id";
};

export function Hero({ dict, locale }: HeroProps) {
  return (
    <Section id="hero" className="min-h-screen pt-28 md:pt-36">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {dict.hero.eyebrow}
            </p>
            <h1 className="mt-3 text-balance">
              <span className="block text-[0.95rem] font-normal tracking-tight text-muted md:text-base">
                {dict.hero.intro}
              </span>
              <span className="block text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[5.6rem]">
                AUFA
              </span>
              <span className="block text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[5.6rem]">
                ROISUL
              </span>
              <span className="block text-[3.2rem] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[5.6rem]">
                CHAKIM<span className="text-muted">.</span>
              </span>
            </h1>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p className="text-lg font-medium text-muted md:text-xl">
              {dict.hero.role}
            </p>
            <p className="max-w-[52ch] text-sm leading-relaxed text-muted md:text-base">
              {locale === "id"
                ? "Membangun pengalaman digital dengan tujuan, presisi, dan kesederhanaan."
                : "Building digital experiences with purpose, precision, and simplicity."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex h-11 items-center rounded-full border border-foreground px-6 text-sm transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {dict.hero.ctaWork}
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-line px-6 text-sm transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {dict.hero.ctaContact}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:items-end">
          <Lanyard />
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
            {dict.hero.metadata}
          </p>
        </div>
      </div>
    </Section>
  );
}
