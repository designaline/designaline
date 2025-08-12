"use client";

import About from "../components/About";
import AnimatedCursor from "../components/AnimatedCursor";
import Contact from "../components/Contact";
import FloatingElements from "../components/FloatingElements";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import { ThemeProvider } from "../contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen ">
        <AnimatedCursor />
        <FloatingElements />
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
