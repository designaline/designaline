export const contact = {
  phoneDisplay: "+91 83338 57444",
  phoneE164: "+918333857444",
  phoneHref: "tel:+918333857444",
  email: "info@designaline.com",
  emailHref: "mailto:info@designaline.com",
  address:
    "50-104-3/4, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Design%20A%27Line%2C%2050-104-3%2F4%2C%20Balayya%20Sastri%20Layout%2C%20Seethammadara%2C%20Visakhapatnam%2C%20Andhra%20Pradesh",
  whatsappNumber: "918333857444",
  instagramHref: "https://www.instagram.com/designaline.in/",
} as const;

export const defaultWhatsAppMessage =
  "Hi Design A'Line, I'm planning a project and would like to discuss architecture/interior design services.\n\nProject location: \nProject type: \nApproximate size: ";

export function createWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
