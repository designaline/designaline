import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectSlider from "@/components/ProjectSlider";

type Params = { slug: string };

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params; // ✅ required in Next 15
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <ProjectSlider project={project} />
    </div>
  );
}
