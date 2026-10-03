export const contact = {
  phoneDisplay: "+91 83338 57444",
  phoneE164: "+918333857444",
  phoneHref: "tel:+918333857444",
  email: "info@designaline.com",
  emailHref: "mailto:info@designaline.com",
  address:
    "50-104-3/4, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Studio%20Design%20A%27Line&query_place_id=ChIJochIlDZDOToREiNZERZ7F38",
  mapsEmbedHref:
    "https://www.google.com/maps?cid=9157923701991744274&output=embed",
  whatsappNumber: "918333857444",
  instagramHref: "https://www.instagram.com/designaline.in/",
} as const;

export const defaultWhatsAppMessage =
  "Hi Design A'Line, I'm planning a project and would like to discuss architecture/interior design services.\n\nProject location: \nProject type: \nApproximate size: ";

export function createWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
