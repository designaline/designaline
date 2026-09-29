import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileActionBar from "../components/MobileActionBar";

import type { Metadata } from "next";

// ---- GOOGLE IDS ----
const GA_MEASUREMENT_ID = "G-DH64WW77M5"; // Your GA ID
const GOOGLE_ADS_ID = "AW-17825264513"; // Your Ads Conversion ID

export const metadata: Metadata = {
  title: "Design A'Line | Architecture & Interior Design in Visakhapatnam",
  description:
    "Design A'Line creates site-responsive architecture and connected interior experiences, supported by construction supervision in Visakhapatnam.",
  keywords: [
    "architecture",
    "interior design",
    "sustainable design",
    "modern architecture",
    "architectural firm",
    "designALine",
    "residential design",
    "commercial architecture",
    "urban design",
  ],
  authors: [{ name: "designALine Architects", url: "https://designaline.com" }],
  openGraph: {
    title: "Design A'Line | Architecture & Interior Design in Visakhapatnam",
    description:
      "Site-responsive architecture and connected interior experiences, supported by construction supervision in Visakhapatnam.",
    url: "https://designaline.com",
    siteName: "designALine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "designALine | Architectural & Interior Design Studio",
    description:
      "Innovative architectural and interior design solutions by designALine. Explore our portfolio of modern and sustainable projects.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  metadataBase: new URL("https://designaline.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager (GA +   Ads) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />

        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              // Google Analytics
              gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });

              // Google Ads
              gtag('config', '${GOOGLE_ADS_ID}');
            `,
          }}
        />
      </head>

      <body className="antialiased">
          <div className="min-h-screen pb-20 md:pb-0">
            <Header />

            <main>{children}</main>

            <Footer />
            <MobileActionBar />
          </div>

        {/* GA Component (Next.js built-in) */}
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
