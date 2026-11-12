"use client";

import { Section } from "@/components/ui/Section";
import { educationData } from "@/data/education";

type EducationProps = {
  dict: any;
  locale: "en" | "id";
};

export function EducationSection({ dict, locale }: EducationProps) {
  return (
    <Section id="education" className="border-t border-line">
      <div className="flex flex-col gap-10">
        <div data-reveal="fade-up" className="flex flex-col gap-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            {dict.education.eyebrow}
          </p>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.2rem]">
            {dict.education.heading}
          </h2>
        </div>

        <ul
          data-reveal-group
          data-reveal-y="16"
          data-reveal-stagger="0.08"
          className="flex flex-col gap-6"
        >
          {educationData.map((item, index) => (
            <li data-reveal-item key={index} className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">{item.institution}</h3>
              <p className="text-sm text-muted">{item.program}</p>
              <p className="text-xs text-muted">{dict.education.pending}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
