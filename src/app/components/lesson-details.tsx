"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Picture from "./ui/picture";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  lesson: Lesson;
  onEnrol: () => void;
}

export interface Lesson {
  name: string;
  image: string;
  description: string;
  descriptionHTML: string;
}

const FADE_MS = 300;

// A modal dialog with what Headless UI's Dialog used to provide: fade in/out,
// scroll lock, the rest of the page made inert, Esc and click outside to
// close, and focus returned on close. Not a native <dialog>: its top layer
// would cover the sticky logo, which stays above this dialog (z-10).
export default function Modal({ open, setOpen, lesson, onEnrol }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (open) {
      setMounted(true);
      // Start the fade once the closed state has been painted (also when
      // reopened mid fade-out)
      let frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => setClosed(false));
      });
      return () => cancelAnimationFrame(frame);
    }
    setClosed(true);
    const timer = setTimeout(() => setMounted(false), FADE_MS);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!mounted || !dialog) return;
    const root = document.documentElement;
    const opener = document.activeElement as HTMLElement | null;
    const others = [...document.body.children].filter(
      (el): el is HTMLElement =>
        el instanceof HTMLElement && !el.contains(dialog) && !el.inert,
    );

    // Keep the scrollbar's width so the page doesn't shift
    root.style.paddingRight = `${window.innerWidth - root.clientWidth}px`;
    root.style.overflow = "hidden";
    others.forEach((el) => (el.inert = true));
    dialog.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      others.forEach((el) => (el.inert = false));
      root.style.overflow = "";
      root.style.paddingRight = "";
      opener?.focus({ preventScroll: true });
    };
  }, [mounted, setOpen]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={lesson.name}
      tabIndex={-1}
      data-closed={closed || undefined}
      onClick={(e) => {
        if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
      }}
      className="relative z-10 outline-none transition duration-300 ease-out data-[closed]:opacity-0 font-[family-name:var(--font-geist-sans)]"
    >
      <div className="fixed inset-0 bg-gray-800/50" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            ref={panelRef}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="rounded-lg border text-card-foreground shadow-sm overflow-hidden animate-on-scroll group transition-all duration-300 bg-white/80">
                <div className="flex flex-col space-y-1.5 p-0">
                  <div className="overflow-hidden h-56 bg-primary">
                    <Picture
                      src={lesson.image}
                      alt=""
                      width={800}
                      height={800}
                      sizes="(min-width: 640px) 512px, 100vw"
                      className="opacity-85 w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6 space-y-4 text-gray-600 text-justify">
                  <h3 className="text-2xl mb-4 font-bold">{lesson.name}</h3>

                  <div
                    className="space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: lesson.descriptionHTML,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onEnrol();
                }}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-bold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
              >
                Till anmälan
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                }}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Stäng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
