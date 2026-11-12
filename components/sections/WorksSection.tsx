"use client";

import { Section } from "@/components/ui/Section";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

type WorksProps = {
  dict: any;
  locale: "en" | "id";
};

export function WorksSection({ dict, locale }: WorksProps) {
  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);
  const hasProjects = projectsData.length > 0;

  return (
    <Section id="work" className="border-t border-line">
      <div className="flex flex-col gap-10">
        <div data-reveal="fade-up" className="flex flex-col gap-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            {dict.works.eyebrow}
          </p>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.2rem]">
            {dict.works.heading}
          </h2>
        </div>

        {hasProjects ? (
          <>
            <div
              data-reveal-group
              data-reveal-stagger="0.1"
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {featured.map((project) => (
                <article
                  key={project.slug}
                  data-reveal-item
                  className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-surface-raised focus-within:border-foreground/40"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base font-semibold leading-snug">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted line-clamp-2">
                        {locale === "id"
                          ? project.summary.id
                          : project.summary.en}
                      </p>
                    </div>
                    <span className="whitespace-nowrap rounded-full border border-line px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                      {dict.works.featured}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-line pt-4 text-xs">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-sm text-foreground transition-colors hover:text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    >
                      {dict.works.viewDetails}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                    >
                      <Github className="h-4 w-4" />
                      {dict.works.viewRepo}
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {dict.works.viewLive}
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {others.length > 0 && (
              <div className="flex flex-col gap-6 border-t border-line pt-10">
                <h3
                  data-reveal="fade-up"
                  className="text-sm font-medium text-muted"
                >
                  {dict.works.moreHeading}
                </h3>
                <ul
                  data-reveal-group
                  data-reveal-stagger="0.08"
                  className="flex flex-col"
                >
                  {others.map((project) => (
                    <li
                      key={project.slug}
                      data-reveal-item
                      className="flex flex-col gap-3 border-b border-line py-6 md:flex-row md:items-start md:justify-between md:gap-10"
                    >
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold">
                          {project.name}
                        </h4>
                        <p className="max-w-[62ch] text-sm leading-relaxed text-muted">
                          {locale === "id"
                            ? project.summary.id
                            : project.summary.en}
                        </p>
                      </div>
                      <div className="flex flex-col items-start gap-3 md:items-end">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-sm text-xs text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
                        >
                          <Github className="h-4 w-4" />
                          {dict.works.viewRepo}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ) : (
          <p className="text-sm text-muted">{dict.works.noProjects}</p>
        )}
      </div>
    </Section>
  );
}
