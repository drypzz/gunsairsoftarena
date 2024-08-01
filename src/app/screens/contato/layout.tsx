import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://dev-gunsairsoftarena.netlify.app/contato"),
    title: "@gunsairsoftarena",
    applicationName: "Guns Airsoft Arena - Contato",
    description: "Sua arena de Airsoft em Joinville - SC",
    creator: "DRYPZZ",
    authors: [{ name: "DRYPZZ", url: "https://drypzz.netlify.app" }],
    generator: "NextJS",
    keywords: ["Guns Airsoft Arena - Contato", "airsoft", "gunsairsoftarena", "guns airsoft", "arena joinville", "airsoft joinville", "joinville airsoft", "SC Airsoft", "Airsoft", "Guns Arena", "Sua Arena de Airsoft em Joinville"],
    twitter: {
        site: "@gunsairsoftarena",
        card: "summary",
        images: "/logo/transparent.png",
    },
    openGraph: {
        title: "Guns Airsoft Arena - Contato",
        description: "Sua arena de Airsoft em Joinville - SC",
        siteName: "Guns Airsoft Arena - Contato",
        type: "website",
        url: "https://dev-gunsairsoftarena.netlify.app/contato",
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
    return ({children});
};