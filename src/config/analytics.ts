export const GOOGLE_ADS_ID = "AW-17825264513";
export const WHATSAPP_HANDOFF_DESTINATION = `${GOOGLE_ADS_ID}/xivKCJvl2o0dEIHn37NC`;

/** Measures a prepared enquiry handoff, never message delivery or a qualified lead. */
export function trackWhatsAppEnquiryHandoff() {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as Window & {
    gtag?: (command: string, event: string, parameters: Record<string, unknown>) => void;
  };
  try {
    analyticsWindow.gtag?.("event", "conversion", {
      send_to: WHATSAPP_HANDOFF_DESTINATION,
      value: 0,
      currency: "INR",
    });
  } catch {
    // Analytics must never prevent an enquiry from opening WhatsApp.
  }
}
