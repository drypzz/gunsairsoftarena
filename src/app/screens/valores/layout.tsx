import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-gunsairsoftarena.netlify.app/valores"),
  title: "Guns Airsoft Arena - Valores",
  applicationName: "Guns Airsoft Arena",
  description: "Sua arena de Airsoft em Joinville - SC",
  creator: "DRYPZZ",
  authors: [{ name: "DRYPZZ", url: "https://drypzz.netlify.app" }],
  generator: "NextJS",
  keywords: [
    "Drypzz",
    "Drypzz Dev",
    "Drypzz Developer",
    "Drypzz Dev Portfolio",
    "Guns Airsoft Arena",
    "Guns Airsoft Arena - Valores",
    "airsoft",
    "gunsairsoftarena",
    "guns airsoft",
    "arena joinville",
    "airsoft joinville",
    "joinville airsoft",
    "SC Airsoft",
    "Airsoft",
    "Guns Arena",
    "Sua Arena de Airsoft em Joinville"
  ],
  twitter: {
    site: "@gunsairsoftarena",
    card: "summary_large_image",
    images: "/logo/transparent.png",
    creator: "@drypzz",
  },
  openGraph: {
    title: "Guns Airsoft Arena - Valores",
    description: "Sua arena de Airsoft em Joinville - SC",
    siteName: "@gunsairsoftarena",
    type: "website",
    url: "https://dev-gunsairsoftarena.netlify.app/valores",
    images: [{ url: "/logo/transparent.png" }],
    countryName: "Brazil",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}