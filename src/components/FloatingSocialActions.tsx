import { MessageCircle } from "lucide-react";
import { contact, createWhatsAppUrl } from "@/config/contact";
import InstagramBrandIcon from "@/components/InstagramBrandIcon";

const actions = [
  {
    label: "Chat on WhatsApp",
    href: createWhatsAppUrl(),
    icon: MessageCircle,
    className: "bg-[#1f6b45] text-white hover:bg-[#185638]",
    trackingName: "whatsapp-float",
  },
  {
    label: "Follow on Instagram",
    href: contact.instagramHref,
    icon: InstagramBrandIcon,
    className:
      "border border-[#173b2a]/15 bg-[#f5f1e8] text-[#173b2a] hover:bg-white",
    trackingName: "instagram-float",
  },
];

export default function FloatingSocialActions() {
  return (
    <nav
      aria-label="Social contact actions"
      className="fixed bottom-7 right-7 z-40 hidden flex-col gap-3 md:flex"
    >
      {actions.map(
        ({ label, href, icon: Icon, className, trackingName }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            data-contact-action={trackingName}
            className={`group relative grid h-14 w-14 place-items-center rounded-full shadow-[0_12px_35px_rgba(16,41,28,0.18)] transition-all duration-300 hover:-translate-y-1 ${className}`}
          >
            <Icon size={23} aria-hidden="true" />
            <span className="pointer-events-none absolute right-[calc(100%+0.75rem)] whitespace-nowrap rounded-full bg-[#10291c] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              {label}
            </span>
          </a>
        ),
      )}
    </nav>
  );
}
