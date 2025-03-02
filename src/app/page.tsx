"use client";
import { createRef } from "react";
import Biography from "./components/biography";
import { ContactForm } from "./components/contact-form";
import Footer from "./components/footer";
import Hero from "./components/hero";
import { Introduction } from "./components/introduction";
import { Lessons } from "./components/lessons";
import Menu from "./components/menu";

export default function Home() {
  const formNameInputRef = createRef<HTMLInputElement>();
  const lessonsTitleRef = createRef<HTMLHeadingElement>();

  const scrollToBottom = (timeout: number) => {
    formNameInputRef.current?.scrollIntoView();
    setTimeout(() => formNameInputRef.current?.focus(), timeout);
  };

  const scrollToLessons = () => {
    lessonsTitleRef.current?.scrollIntoView();
  };

  return (
    <div className="flex flex-col items-center justify-items-center gap-40 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="relative w-full">
        <Hero scrollToBottom={scrollToBottom} />
        <div className="w-full absolute top-0 left-0 text-center portrait:mt-10 text-white z-30">
          <Menu />
        </div>
      </header>
      <main className="w-full grid grid-cols-1 gap-40">
        <Introduction
          scrollToBottom={scrollToBottom}
          scrollToLessons={scrollToLessons}
        />
        <Biography />
        <Lessons titleRef={lessonsTitleRef} scrollToBottom={scrollToBottom} />
      </main>
      <footer className="w-full">
        <ContactForm nameInputRef={formNameInputRef} />
        <Footer />
      </footer>
    </div>
  );
}
