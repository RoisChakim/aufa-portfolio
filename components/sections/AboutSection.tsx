"use client";

import { Section } from "@/components/ui/Section";

type AboutProps = {
  dict: any;
  locale: "en" | "id";
};

export function AboutSection({ dict, locale }: AboutProps) {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[140px_1fr]">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            {dict.about.eyebrow}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2
            data-reveal="fade-up"
            className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.2rem]"
          >
            {dict.about.heading}
          </h2>
          <div
            data-reveal-group
            data-reveal-y="16"
            className="flex max-w-[62ch] flex-col gap-4 text-sm leading-relaxed text-muted md:text-base"
          >
            <p data-reveal-item>{dict.about.p1}</p>
            <p data-reveal-item>{dict.about.p2}</p>
            <p data-reveal-item>{dict.about.p3}</p>
          </div>

          <div
            data-reveal-group
            data-reveal-stagger="0.08"
            className="grid grid-cols-1 gap-4 border-t border-line pt-8 sm:grid-cols-3"
          >
            {[
              dict.about.principleOne,
              dict.about.principleTwo,
              dict.about.principleThree,
            ].map((item, index) => (
              <div data-reveal-item key={index} className="flex flex-col gap-1">
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                  {dict.about.principles}
                </span>
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
