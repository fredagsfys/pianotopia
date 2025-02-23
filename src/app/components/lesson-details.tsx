"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  lesson: Lesson | null;
}

export interface Lesson {
  name: string;
  image: string;
  description: string;
}

export default function Modal({ open, setOpen, lesson }: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={setOpen}
      transition
      className="relative z-10 transition duration-300 ease-out data-[closed]:opacity-0 font-[family-name:var(--font-geist-sans)]"
    >
      <DialogBackdrop transition className="fixed inset-0 bg-gray-800/50" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {lesson ? (
                <Card className="overflow-hidden animate-on-scroll group transition-all duration-300 bg-white/80">
                  <CardHeader className="p-0">
                    <div className="overflow-hidden h-56 bg-primary">
                      <Image
                        src={lesson.image}
                        alt=""
                        width={800}
                        height={800}
                        className="opacity-85 w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4 text-gray-600">
                    <h3 className="text-2xl mb-4 font-bold">{lesson.name}</h3>
                    <p>{lesson.description}</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="p-6 text-center text-gray-600">
                  <h3 className="text-2xl font-bold mb-4">
                    Ingen lektion vald
                  </h3>
                  <p>Vänligen välj en lektion för att visa detaljer.</p>
                </div>
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-bold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto"
              >
                Anmälan
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Stäng
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
