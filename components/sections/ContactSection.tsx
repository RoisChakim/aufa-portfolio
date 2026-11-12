"use client";

import { Section } from "@/components/ui/Section";
import { profileData } from "@/data/profile";
import { Mail, Github, Instagram } from "lucide-react";

type ContactProps = {
  dict: any;
  locale: "en" | "id";
};

export function ContactSection({ dict, locale }: ContactProps) {
  return (
    <Section id="contact" className="border-t border-line">
      <div data-reveal="fade-up" data-reveal-y="32" className="flex flex-col gap-3">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
          {dict.contact.eyebrow}
        </p>
        <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.2rem]">
          {dict.contact.heading}
        </h2>
        <p className="text-sm text-muted md:text-base">
          {dict.contact.subtitle}
        </p>
      </div>

      <div
        data-reveal-group
        data-reveal-y="32"
        data-reveal-stagger="0.12"
        className="flex flex-col gap-4"
      >
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex h-11 items-center justify-center rounded-full border border-foreground px-6 text-sm transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {dict.contact.emailCta}
        </a>

        <div
          data-reveal-item
          className="flex flex-wrap items-center gap-4 text-sm text-muted"
        >
          <span className="text-xs uppercase tracking-[0.18em]">
            {dict.contact.socials}
          </span>
          <span className="h-px w-6 bg-line" />
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profileData.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}
