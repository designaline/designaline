import { ThemeProvider } from "../contexts/ThemeContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AnimatedCursor from "../components/AnimatedCursor";
import FloatingElements from "../components/FloatingElements";
import Header from "../components/Header";
import Footer from "../components/Footer";

import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "designAline | Architectural & Interior Design Studio",
  description:
    "designALine is an innovative architectural and interior design firm creating modern, sustainable, and timeless spaces tailored to your vision.",
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
    title: "designALine | Architectural & Interior Design Studio",
    description:
      "Shaping spaces that inspire. designALine delivers architectural and interior design solutions blending creativity, functionality, and sustainability.",
    url: "https://designaline.com",
    siteName: "designALine",
    images: [
      {
        url: "https://designaline.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "designALine Architectural Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "designALine | Architectural & Interior Design Studio",
    description:
      "Innovative architectural and interior design solutions by designALine. Explore our portfolio of modern and sustainable projects.",
    images: ["https://designaline.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen">
            <AnimatedCursor />
            <FloatingElements />
            <Header />

            <main>{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
