"use client";

import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import { contact, createWhatsAppUrl } from "@/config/contact";

const actions = [
  { label: "Call", href: contact.phoneHref, icon: Phone },
  {
    label: "WhatsApp",
    href: createWhatsAppUrl(),
    icon: MessageCircle,
    external: true,
  },
  { label: "Consult", href: "/#contact", icon: CalendarDays },
];

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-3 overflow-hidden rounded-xl border border-white/20 bg-[#123d22]/95 p-1 shadow-2xl backdrop-blur md:hidden"
    >
      {actions.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="flex min-h-12 items-center justify-center gap-1.5 rounded-lg px-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:bg-white/15"
        >
          <Icon size={17} aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  );
}
