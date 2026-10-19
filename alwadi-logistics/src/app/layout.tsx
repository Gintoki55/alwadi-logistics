import type { Metadata } from "next";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al-Wadi Logistics | Freight Brokerage & Logistics Services",
  description:
    "AL-WADI LOGISTICS LLC connects shippers with independent, authorized motor carriers to move freight reliably across the United States.",
  icons: { icon: "/images/app-icon.png", apple: "/images/app-icon.png" },
  openGraph: {
    title: "Al-Wadi Logistics",
    description: "Freight Brokerage & Logistics Services across the United States.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
