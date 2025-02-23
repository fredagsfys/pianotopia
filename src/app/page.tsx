"use client";
import { createRef } from "react";
import Biography from "./components/biography";
import { ContactForm } from "./components/contact-form";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { InstrumentsShowcase } from "./components/instruments";
import { Introduction } from "./components/introduction";
import Menu from "./components/menu";

export default function Home() {
  const formNameInputRef = createRef<HTMLInputElement>();

  const scrollToBottom = () => {
    formNameInputRef.current?.scrollIntoView();
    setTimeout(() => formNameInputRef.current?.focus(), 500);
  };

  return (
    <div className="flex flex-col items-center justify-items-center gap-40 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="relative w-full">
        <Hero viewRef={formNameInputRef} scrollToBottom={scrollToBottom} />
        <div className="w-full absolute top-0 left-0 text-center mt-10 text-white z-30">
          <Menu />
        </div>
      </header>
      <main className="w-full grid grid-cols-1 gap-40">
        <Introduction />
        <Biography />
        <InstrumentsShowcase />
        {/* <Testimonials /> */}
      </main>
      <footer className="w-full">
        <ContactForm nameInputRef={formNameInputRef} />

        <Footer />
      </footer>
    </div>
  );
}
