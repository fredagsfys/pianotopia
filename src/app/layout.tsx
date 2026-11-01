import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import { Toaster } from "react-hot-toast";
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
  title: "pianotopia.se",
  description: "Pianotopia.se - Privat pianoskola i Kalmar.",
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
    title: "Pianotopia",
    description: "Pianotopia.se - Privat pianoskola i Kalmar.",
    images: "/logo10.png",
    url: "/",
    type: "website",
  },
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
        {children}
        <Toaster
          toastOptions={{
            duration: 15000,
            className: "font-[family-name:var(--font-geist-sans)]",
          }}
        />
      </body>
    </html>
  );
}
