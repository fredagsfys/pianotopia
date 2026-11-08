import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "./globals.css";

const geistSans = Cormorant({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Cormorant({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pianotopia.se"),
  title: "Pianotopia – Pianolektioner för barn i Kalmar",
  description:
    "Pianolektioner för barn i Kalmar med Suzana Spasevska Hermansen. Ledorden är kreativitet, lekfullhet och gemenskap – anmäl ditt barns intresse idag!",
  // The site is also reachable on its workers.dev address; point search
  // engines at the real domain
  alternates: { canonical: "/" },
  keywords: [
    "pianolärare i Kalmar",
    "piano",
    "pianolärare",
    "pianolektioner",
    "pianolektioner barn",
    "spela piano i Nybro",
    "spela piano på Öland",
  ],
  authors: [{ name: "Suzana Spasevska Hermansen" }],
  openGraph: {
    title: "Pianotopia – Pianolektioner för barn i Kalmar",
    description:
      "Pianolektioner för barn i Kalmar med Suzana Spasevska Hermansen. Ledorden är kreativitet, lekfullhet och gemenskap – anmäl ditt barns intresse idag!",
    images: "/logo10.png",
    url: "/",
    type: "website",
  },
};

// schema.org data so search engines understand the business behind the site
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Pianotopia",
  legalName: "Pianotopia AB",
  taxID: "559514-5425",
  description: "Privat pianoskola i Kalmar.",
  url: "https://pianotopia.se",
  email: "hej@pianotopia.se",
  logo: "https://pianotopia.se/logo10.png",
  founder: { "@type": "Person", name: "Suzana Spasevska Hermansen" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sidenvägen 1A",
    postalCode: "393 55",
    addressLocality: "Kalmar",
    addressCountry: "SE",
  },
  areaServed: ["Kalmar", "Nybro", "Öland"],
  sameAs: [
    "https://facebook.com/profile.php?id=61572401620065",
    "https://www.instagram.com/pianotopia_kalmar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
