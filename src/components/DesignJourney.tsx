"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Listen", text: "We begin with your routines, aspirations, priorities, and the life the space needs to support." },
  { number: "02", title: "Read the site", text: "Orientation, access, climate, light, ventilation, privacy, and context become the foundations of the design." },
  { number: "03", title: "Shape the architecture", text: "Planning, movement, proportion, openings, and form are resolved as one clear spatial idea." },
  { number: "04", title: "Develop every detail", text: "The concept is translated into coordinated drawings and design decisions ready for construction." },
  { number: "05", title: "Guide construction", text: "Through construction supervision, we help the built work remain aligned with the design intent." },
  { number: "06", title: "Complete the experience", text: "Interiors carry the same logic inward—connecting light, material, function, and atmosphere." },
];

export default function DesignJourney() {
  return (
    <section id="process" className="bg-[#173b2a] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#a9c5ae]">Our design journey</p>
            <h2 className="font-display text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">A building is not an object.<br /><em className="font-normal text-[#b8d1bc]">It is a sequence of decisions.</em></h2>
            <p className="mt-7 max-w-md leading-7 text-white/65">Each stage grows from the one before it, creating architecture that feels coherent from the first plan to the final room.</p>
          </div>

          <div className="border-t border-white/20">
            {steps.map((step, index) => (
              <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.03 }} className="grid gap-4 border-b border-white/20 py-8 sm:grid-cols-[5rem_1fr] sm:py-10">
                <span className="text-sm tracking-[0.18em] text-[#a9c5ae]">{step.number}</span>
                <div><h3 className="font-display text-3xl sm:text-4xl">{step.title}</h3><p className="mt-3 max-w-xl leading-7 text-white/65">{step.text}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
