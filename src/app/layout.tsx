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
  title: "pianotopia.se",
  description: "Pianotopia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
