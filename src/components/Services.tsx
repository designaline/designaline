import { ArrowUpRight } from "lucide-react";

const services = [
  { number: "01", title: "Architecture", text: "Site-responsive planning, spatial design, façade development, and detailed architectural documentation." },
  { number: "02", title: "Interior Design", text: "Interior environments developed as an extension of the architecture, with focus on function, material, light, and atmosphere." },
  { number: "03", title: "Construction Supervision", text: "Periodic design supervision and coordination that helps the work on site remain faithful to the approved design intent." },
  { number: "04", title: "Landscape Design", text: "Outdoor spaces considered alongside the building to create a more connected relationship between architecture and nature." },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f5f1e8] py-24 text-[#17271e] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#53705d]">Scope of practice</p><h2 className="font-display text-5xl leading-none tracking-[-0.04em] sm:text-7xl">Designed as a whole.</h2></div>
          <p className="max-w-xl self-end text-lg leading-8 text-[#56635b]">We design architecture and interiors, then support the construction process through supervision—keeping the original spatial idea visible in the built result.</p>
        </div>

        <div className="border-t border-[#173b2a]/20">
          {services.map((service) => (
            <article key={service.number} className="group grid gap-5 border-b border-[#173b2a]/20 py-8 transition-colors hover:bg-white/45 sm:grid-cols-[5rem_0.8fr_1.2fr_3rem] sm:items-center sm:px-4 lg:py-10">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#718077]">{service.number}</span>
              <h3 className="font-display text-3xl sm:text-4xl">{service.title}</h3>
              <p className="max-w-xl leading-7 text-[#5b685f]">{service.text}</p>
              <ArrowUpRight className="hidden text-[#477058] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
