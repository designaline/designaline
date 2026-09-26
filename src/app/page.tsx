"use client";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import DesignJourney from "../components/DesignJourney";
import ArchitectureInteriorStory from "../components/ArchitectureInteriorStory";

export default function Home() {
  return (
    <>
      <Hero />
      <ArchitectureInteriorStory />
      <DesignJourney />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}
