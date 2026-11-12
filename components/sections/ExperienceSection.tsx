"use client";

import { Section } from "@/components/ui/Section";
import { experienceData } from "@/data/experience";

type ExperienceProps = {
  dict: any;
  locale: "en" | "id";
};

function formatDate(locale: "en" | "id", value?: string) {
  if (!value) return "";
  const d = new Date(`${value}-01`);
  return d.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    month: "short",
    year: "numeric",
  });
}

export function ExperienceSection({ dict, locale }: ExperienceProps) {
  const localeRef = locale;
  return (
    <Section id="experience" className="border-t border-line">
      <div className="flex flex-col gap-10">
        <div data-reveal="fade-up" className="flex flex-col gap-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            {dict.experience.eyebrow}
          </p>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.2rem]">
            {dict.experience.heading}
          </h2>
        </div>

        <div className="relative">
          <div
            data-reveal-line
            className="absolute left-3 top-2 bottom-2 w-px bg-line md:left-4"
          />
          <ul
            data-reveal-group
            data-reveal-stagger="0.12"
            className="flex flex-col gap-8"
          >
            {experienceData.map((item) => (
              <li
                data-reveal-item
                key={item.id}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-accent md:left-3" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold">{item.role}</h3>
                    <p className="text-sm text-muted">{item.organization}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    {formatDate(localeRef, item.startDate)} — {formatDate(localeRef, item.endDate) || "Present"}
                  </p>
                  <p className="max-w-[62ch] text-sm leading-relaxed text-muted">
                    {locale === "id" ? item.description.id : item.description.en}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
