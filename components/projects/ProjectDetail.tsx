"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { dictionaries } from "@/i18n/translations";
import { projectsData, type Project } from "@/data/projects";

type Locale = "en" | "id";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "id") {
      setLocale(stored);
    }
  }, []);

  const dict = dictionaries[locale];
  const summary = locale === "id" ? project.summary.id : project.summary.en;
  const moreProjects = projectsData.filter(
    (p) => p.featured && p.slug !== project.slug
  );

  return (
    <>
      <Section id="project" className="pt-32 md:pt-44">
        <div className="flex flex-col gap-12">
          <div data-reveal="fade-up" className="flex flex-col gap-8">
            <Link
              href="/#work"
              className="inline-flex w-fit items-center gap-2 text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {dict.project.back}
            </Link>

            <div className="flex flex-col gap-3">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
                {dict.project.eyebrow}
              </p>
              <h1 className="max-w-[24ch] text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.02em] md:text-[4rem]">
                {project.name}
              </h1>
            </div>

            <p className="max-w-[62ch] text-base leading-relaxed text-muted md:text-lg">
              {summary}
            </p>
          </div>

          <div
            data-reveal-group
            data-reveal-stagger="0.08"
            className="grid grid-cols-1 gap-4 border-t border-line pt-8 md:grid-cols-[140px_1fr] md:gap-8"
          >
            <p
              data-reveal-item
              className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted"
            >
              {dict.project.stack}
            </p>
            <div data-reveal-item className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p
              data-reveal-item
              className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted"
            >
              {dict.labels.repository}
            </p>
            <div data-reveal-item>
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-foreground px-6 text-sm transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Github className="h-4 w-4" />
                {dict.labels.repository}
              </a>
            </div>
          </div>

          {moreProjects.length > 0 && (
            <div className="flex flex-col gap-6 border-t border-line pt-10">
              <h2
                data-reveal="fade-up"
                className="text-sm font-medium text-muted"
              >
                {dict.project.more}
              </h2>
              <ul
                data-reveal-group
                data-reveal-stagger="0.08"
                className="flex flex-col"
              >
                {moreProjects.map((p) => (
                  <li
                    key={p.slug}
                    data-reveal-item
                    className="border-b border-line py-5"
                  >
                    <Link
                      href={`/projects/${p.slug}`}
                      className="group flex flex-col gap-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    >
                      <span className="inline-flex w-fit items-center gap-2 text-base font-semibold">
                        {p.name}
                        <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-foreground" />
                      </span>
                      <span className="max-w-[62ch] text-sm leading-relaxed text-muted">
                        {locale === "id" ? p.summary.id : p.summary.en}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>

      <ScrollReveal />
      <SiteFooter dict={dict} />
    </>
  );
}
