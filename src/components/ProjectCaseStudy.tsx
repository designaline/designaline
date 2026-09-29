import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Project } from "@/data/projects";
import { contact, createWhatsAppUrl } from "@/config/contact";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const whatsappUrl = createWhatsAppUrl(
    `Hi Design A'Line, I viewed your ${project.title} project and would like to discuss a similar ${project.category.toLowerCase()} project.\n\nProject location: \nApproximate size: `,
  );

  return (
    <article className="bg-[#f5f1e8] text-[#17271e]">
      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-28 sm:px-8 lg:px-12">
        <Link href="/#portfolio" className="mb-10 inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#536158] hover:text-[#173b2a]">
          <ArrowLeft size={18} aria-hidden="true" /> Back to projects
        </Link>

        <header className="mb-12 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#53705d]">{project.category}</p>
            <h1 className="font-display text-5xl leading-none tracking-[-0.045em] sm:text-7xl lg:text-8xl">{project.title}</h1>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-[#5b685f]"><MapPin size={17} className="text-[#477058]" aria-hidden="true" />{project.location}</p>
            <p className="text-lg leading-8 text-[#5b685f]">{project.description}</p>
          </div>
        </header>

        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#d9d8ce] sm:aspect-[16/9]">
          <Image src={project.images[0]} alt={`${project.title} project`} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
        </div>

        {project.caseStudy?.length ? (
          <section aria-label="Project details" className="mx-auto grid max-w-5xl gap-8 py-16 md:grid-cols-2">
            {project.caseStudy.map((section) => (
              <div key={section.title} className="border-t border-[#173b2a]/20 py-7">
                <h2 className="font-display mb-3 text-3xl">{section.title}</h2>
                <p className="leading-7 text-[#5b685f]">{section.body}</p>
              </div>
            ))}
          </section>
        ) : (
          <div className="py-8" />
        )}

        {project.images.length > 1 && (
          <section aria-labelledby="project-gallery-title" className="pb-16">
            <h2 id="project-gallery-title" className="font-display mb-8 text-4xl">Project Gallery</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.images.slice(1).map((image, index) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#d9d8ce]">
                  <Image src={image} alt={`${project.title} project view ${index + 2}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-2xl bg-[#173b2a] px-6 py-14 text-center text-white sm:px-10 lg:py-20">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-200">Start a conversation</p>
          <h2 className="font-display mx-auto mb-4 max-w-2xl text-4xl sm:text-5xl">Planning a Project Like This?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-green-50">Discuss your site, priorities, and project timeline with the Design A&apos;Line team.</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-[#123d22] hover:bg-green-50"><CalendarDays className="mr-2" size={19} aria-hidden="true" />Book Consultation</Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10"><MessageCircle className="mr-2" size={19} aria-hidden="true" />WhatsApp</a>
            <a href={contact.phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10"><Phone className="mr-2" size={19} aria-hidden="true" />Call</a>
          </div>
        </section>
      </div>
    </article>
  );
}
