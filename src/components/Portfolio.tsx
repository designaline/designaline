import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#fcfaf5] py-24 text-[#17271e] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#53705d]">Selected work</p><h2 className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-7xl">Built stories.</h2></div>
          <p className="max-w-md leading-7 text-[#5b685f]">Homes, shared spaces, and interiors shaped by their context and the lives unfolding within them.</p>
        </div>

        <div className="grid gap-x-7 gap-y-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.slug}`} key={project.slug} className={`group block ${index % 3 === 1 ? "md:pt-20" : ""} ${index === 2 ? "md:col-span-2 md:grid md:grid-cols-[1.45fr_0.55fr] md:items-end md:gap-8" : ""}`}>
              <div className={`relative overflow-hidden rounded-xl bg-[#d9d8ce] ${index === 2 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image src={project.images[0]} alt={`${project.title}, ${project.location}`} fill sizes={index === 2 ? "100vw" : "(max-width: 768px) 100vw, 50vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-5 border-t border-[#173b2a]/15 pt-4">
                <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#718077]">{project.category} · {project.location}</p><h3 className="mt-2 font-display text-3xl">{project.title}</h3></div>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#173b2a]/20 transition-colors group-hover:bg-[#173b2a] group-hover:text-white"><ArrowUpRight size={18} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
