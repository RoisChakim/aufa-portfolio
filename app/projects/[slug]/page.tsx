import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectDetail } from "@/components/projects/ProjectDetail";

/**
 * Detail routes exist only for curated (featured) projects — the ones whose
 * repository data is substantive enough to fill a page with facts alone.
 * Projects with thin data stay in the Works list and get no detail page.
 */
export function generateStaticParams() {
  return projectsData
    .filter((project) => project.featured)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — AUFA ROISUL CHAKIM`,
    description: project.summary.en,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
