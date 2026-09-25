import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

type Params = { slug: string };

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params; // ✅ required in Next 15
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectCaseStudy project={project} />;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
