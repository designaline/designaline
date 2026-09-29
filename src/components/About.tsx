import Image from "next/image";

const team = [
  { name: "Tarun Naik", role: "Principal Architect", image: "/team/tarun.jpg" },
  { name: "Lalitha Aishwarya", role: "Landscape Design Director", image: "/team/aishwarya.jpg" },
  { name: "Rajesh", role: "Operations Head", image: "/team/rajesh.jpg" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#dfe7df] py-24 text-[#17271e] sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#53705d]">The studio</p><h2 className="font-display text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl">Context first.<br /><em className="font-normal text-[#477058]">People always.</em></h2></div>
          <div className="max-w-2xl lg:pt-16"><p className="font-display text-2xl leading-9 sm:text-3xl sm:leading-[1.4]">Design A&apos;Line is an architecture and interior design studio in Visakhapatnam, creating spaces where environmental responsibility, everyday function, and enduring character meet.</p><p className="mt-7 leading-7 text-[#536158]">Founded in 2020, the studio approaches every project as a relationship between client, site, climate, architecture, and interior life. Construction supervision helps carry that design intent through the building process.</p></div>
        </div>

        <div className="mt-20 border-t border-[#173b2a]/20 pt-8">
          <div className="mb-10 flex items-end justify-between"><h3 className="font-display text-3xl sm:text-4xl">The people behind the work</h3><span className="hidden text-xs uppercase tracking-[0.18em] text-[#68766d] sm:block">Design · Detail · Delivery</span></div>
          <div className="grid gap-7 sm:grid-cols-3">
            {team.map((member) => (
              <article key={member.name}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#cbd4cb]"><Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover grayscale transition-all duration-500 hover:grayscale-0" /></div>
                <div className="mt-4 border-t border-[#173b2a]/20 pt-3"><h4 className="font-display text-2xl">{member.name}</h4><p className="mt-1 text-sm text-[#5c6a61]">{member.role}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
