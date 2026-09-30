import Image from "next/image";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { contact } from "@/config/contact";

const links = [
  { label: "Approach", href: "/#approach" },
  { label: "Process", href: "/#process" },
  { label: "Projects", href: "/#portfolio" },
  { label: "Studio", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1e14] pb-10 pt-16 text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div><div className="flex items-center gap-3"><Image src="/logo.png" alt="Design A'Line logo" width={48} height={48} className="brightness-0 invert" /><div><p className="text-xl font-semibold">Design A&apos;Line</p><p className="text-xs uppercase tracking-[0.16em] text-white/45">Architecture · Interiors</p></div></div><p className="font-display mt-8 max-w-xl text-3xl leading-tight text-white/90 sm:text-4xl">Architecture rooted in place.<br /><em className="font-normal text-[#a9c5ae]">Interiors shaped around life.</em></p></div>
          <div className="grid grid-cols-2 gap-8">
            <div><p className="mb-5 text-xs uppercase tracking-[0.18em] text-white/40">Navigate</p><nav className="space-y-3">{links.map((link) => <a key={link.label} href={link.href} className="block text-white/70 hover:text-white">{link.label}</a>)}</nav></div>
            <div><p className="mb-5 text-xs uppercase tracking-[0.18em] text-white/40">Follow</p><div className="space-y-3"><a href={contact.instagramHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white"><Instagram size={17} />Instagram <ArrowUpRight size={14} /></a><a href="https://www.linkedin.com/company/designa-line" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white"><Linkedin size={17} />LinkedIn <ArrowUpRight size={14} /></a></div></div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Design A&apos;Line. All rights reserved.</p><div className="flex flex-wrap gap-5"><a href="/privacy-policy" className="hover:text-white">Privacy</a><a href="/terms-of-service" className="hover:text-white">Terms</a><a href="/cookie-policy" className="hover:text-white">Cookies</a></div></div>
      </div>
    </footer>
  );
}
