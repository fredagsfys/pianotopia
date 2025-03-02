import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import Head from "next/head";
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
  title: "pianotopia.se",
  description: "Pianotopia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="!scroll-smooth">
      <Head>
        <title>pianotopia.se</title>
        <meta
          name="description"
          content="Pianotopia.se - Privat pianoskola i Kalmar."
        />
        <meta
          name="keywords"
          content="pianolärare i Kalmar, piano, pianolärare, pianolektioner, pianolektioner barn, spela piano i Nybro, spela piano på Öland"
        />
        <meta name="author" content="Suzana Spasevska Hermansen" />

        {/* Open Graph Meta Tags (For Social Sharing) */}
        <meta property="og:title" content="Pianotopia" />
        <meta
          property="og:description"
          content="Pianotopia.se - Privat pianoskola i Kalmar."
        />
        <meta
          property="og:image"
          content="https://pianotopia.se/_next/image?url=/logo10.png"
        />
        <meta property="og:url" content="https://pianotopia.se" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
