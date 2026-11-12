"use client";

import { Section } from "@/components/ui/Section";
import { skillsData } from "@/data/skills";

type SkillsProps = {
  dict: any;
  locale: "en" | "id";
};

export function SkillsSection({ dict, locale }: SkillsProps) {
  return (
    <Section id="skills" className="border-t border-line">
      <div className="flex flex-col gap-10">
        <div data-reveal="fade-up" className="flex flex-col gap-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            {dict.skills.eyebrow}
          </p>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.2rem]">
            {dict.skills.heading}
          </h2>
        </div>

        <div
          data-reveal-group
          data-reveal-stagger="0.08"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillsData.map((group) => (
            <div
              data-reveal-item
              key={group.category.en}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-foreground/40 hover:bg-surface-raised"
            >
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
                {locale === "id" ? group.category.id : group.category.en}
              </p>
              <ul className="flex flex-col gap-2 text-sm text-muted">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="transition-colors hover:text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
