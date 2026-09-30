export const contact = {
  phoneDisplay: "+91 83338 57444",
  phoneE164: "+918333857444",
  phoneHref: "tel:+918333857444",
  email: "info@designaline.com",
  emailHref: "mailto:info@designaline.com",
  address:
    "50-24-11, TPT Colony, Balayyasasthri Layout, Seethammadhara, Visakhapatnam, Andhra Pradesh",
  mapsHref: "https://maps.app.goo.gl/wnzMPmKgdSEvptSQA",
  whatsappNumber: "918333857444",
  instagramHref: "https://www.instagram.com/designaline.in/",
} as const;

export const defaultWhatsAppMessage =
  "Hi Design A'Line, I'm planning a project and would like to discuss architecture/interior design services.\n\nProject location: \nProject type: \nApproximate size: ";

export function createWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
