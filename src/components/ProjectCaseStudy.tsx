"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Project } from "@/data/projects";
import { contact, createWhatsAppUrl } from "@/config/contact";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const { isDark } = useTheme();
  const whatsappUrl = createWhatsAppUrl(
    `Hi Design A'Line, I viewed your ${project.title} project and would like to discuss a similar ${project.category.toLowerCase()} project.\n\nProject location: \nApproximate size: `,
  );

  return (
    <article className={isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="container mx-auto px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <Link href="/#portfolio" className={`mb-8 inline-flex min-h-12 items-center gap-2 text-sm font-semibold hover:text-[#1B6B36] ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          <ArrowLeft size={18} aria-hidden="true" /> Back to projects
        </Link>

        <header className="mb-12 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#1B6B36]">{project.category}</p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{project.title}</h1>
          </div>
          <div>
            <p className={`mb-4 flex items-center gap-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}><MapPin size={17} className="text-[#1B6B36]" aria-hidden="true" />{project.location}</p>
            <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
          </div>
        </header>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 shadow-xl sm:aspect-[16/9]">
          <Image src={project.images[0]} alt={`${project.title} project`} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
        </div>

        {project.caseStudy?.length ? (
          <section aria-label="Project details" className="mx-auto grid max-w-5xl gap-8 py-16 md:grid-cols-2">
            {project.caseStudy.map((section) => (
              <div key={section.title} className={`rounded-2xl border p-7 ${isDark ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"}`}>
                <h2 className="mb-3 text-2xl font-semibold">{section.title}</h2>
                <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>{section.body}</p>
              </div>
            ))}
          </section>
        ) : (
          <div className="py-8" />
        )}

        {project.images.length > 1 && (
          <section aria-labelledby="project-gallery-title" className="pb-16">
            <h2 id="project-gallery-title" className="mb-8 text-3xl font-bold">Project Gallery</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.images.slice(1).map((image, index) => (
                <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                  <Image src={image} alt={`${project.title} project view ${index + 2}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-3xl bg-[#123d22] px-6 py-12 text-center text-white sm:px-10 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-green-200">Start a conversation</p>
          <h2 className="mx-auto mb-4 max-w-2xl text-3xl font-bold sm:text-4xl">Planning a Project Like This?</h2>
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
