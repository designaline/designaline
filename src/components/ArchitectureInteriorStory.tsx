import Image from "next/image";

export default function ArchitectureInteriorStory() {
  return (
    <section id="approach" className="overflow-hidden bg-[#e8e1d3] py-24 text-[#17271e] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#53705d]">One continuous design language</p>
          <h2 className="font-display text-5xl leading-[0.98] tracking-[-0.045em] sm:text-7xl">Architecture creates the framework.<br /><em className="font-normal text-[#477058]">Interiors bring it closer to life.</em></h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="group relative min-h-[34rem] overflow-hidden rounded-2xl">
            <Image src="/projects/luxury_villas_1.png" alt="Design A'Line architecture project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10261a]/85 via-[#10261a]/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10"><span className="text-xs uppercase tracking-[0.2em] text-white/65">01 · Architecture</span><h3 className="mt-3 font-display text-4xl">Formed by place</h3><p className="mt-3 max-w-lg leading-7 text-white/75">The site, climate, movement, natural light, and your way of living shape the building from the outside in.</p></div>
          </article>
          <article className="group relative min-h-[34rem] overflow-hidden rounded-2xl lg:translate-y-16">
            <Image src="/projects/cafeint/1.png" alt="Design A'Line interior design project" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2118]/85 via-[#2b2118]/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10"><span className="text-xs uppercase tracking-[0.2em] text-white/65">02 · Interiors</span><h3 className="mt-3 font-display text-4xl">Completed from within</h3><p className="mt-3 max-w-lg leading-7 text-white/75">Spatial proportions, openings, material character, lighting, and everyday function continue as one interior experience.</p></div>
          </article>
        </div>

        <p className="ml-auto mt-24 max-w-2xl border-l border-[#173b2a]/30 pl-6 text-xl leading-8 text-[#46564c] sm:text-2xl">When architecture and interiors are designed together, the result does not feel assembled. It feels inevitable.</p>
      </div>
    </section>
  );
}
