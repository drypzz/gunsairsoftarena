import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#54a727",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drypzz.netlify.app/"),
  title: "Guns Airsoft Arena - Início",
  applicationName: "Guns Airsoft Arena - Início",
  description: "Sua arena de Airsoft em Joinville - SC",
  creator: "DRYPZZ",
  authors: [{ name: "DRYPZZ", url: "https://drypzz.netlify.app" }],
  generator: "NextJS",
  keywords: ["Guns Airsoft Arena - Início", "airsoft", "gunsairsoftarena", "guns airsoft", "arena joinville", "airsoft joinville", "joinville airsoft", "SC Airsoft", "Airsoft", "Guns Arena", "Sua Arena de Airsoft em Joinville"],
  twitter: {
    site: "@gunsairsoftarena",
    card: "summary",
    images: "/logo/transparent.png",
  },
  openGraph: {
    title: "Guns Airsoft Arena - Início",
    description: "Sua arena de Airsoft em Joinville - SC",
    siteName: "Guns Airsoft Arena - Início",
    type: "website",
    url: "https://drypzz.netlify.app/",
    images: [{ url: "/logo/transparent.png" }],
    countryName: "Brazil",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};