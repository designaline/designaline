"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Approach", href: "/#approach" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#portfolio" },
  { label: "Studio", href: "/#about" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled ? "border-b border-[#173b2a]/10 bg-[#f5f1e8]/95 shadow-[0_8px_30px_rgba(20,45,32,0.06)] backdrop-blur-xl" : "bg-[#f5f1e8]/80 backdrop-blur-md"}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Design A'Line home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={44} height={44} priority />
          <div className="leading-none">
            <span className="block text-lg font-semibold tracking-[-0.02em] text-[#173b2a]">Design A&apos;Line</span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#55665a]">Architecture · Interiors</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.label} href={item.href} className="text-sm font-medium text-[#314238] transition-colors hover:text-[#173b2a]">{item.label}</Link>)}
          <Link href="/#contact" className="inline-flex min-h-11 items-center rounded-full bg-[#173b2a] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Begin a Project</Link>
        </nav>

        <button type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} className="grid h-12 w-12 place-items-center rounded-full border border-[#173b2a]/15 text-[#173b2a] lg:hidden">
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-[#173b2a]/10 bg-[#f5f1e8] px-5 py-6 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => <Link key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-4 py-3 text-lg font-medium text-[#20352a] hover:bg-white/70">{item.label}</Link>)}
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-xl bg-[#173b2a] px-4 py-4 text-center font-semibold text-white">Begin a Project</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
