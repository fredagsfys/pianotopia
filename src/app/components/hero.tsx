import { RefObject } from "react";

interface HeroProps {
  viewRef: RefObject<HTMLInputElement | null>;
  scrollToBottom: () => void;
}

export default function Hero({ viewRef, scrollToBottom }: HeroProps) {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          // src="https://github.com/fredagsfys/pianotopia/blob/main/public/piano.mp4"
          src="/piano.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div
        className="
            z-10
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-black
            before:to-black
            before:opacity-25
            before:z-[-5]"
      ></div>

      <div className="w-96 absolute [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] bottom-1/4 px-4 md:px-0 left-0 md:left-1/4 right-0 text-white z-30 grid items-start gap-4">
        <h1 className="text-5xl font-bold">
          Begin Your Musical Journey Today.
        </h1>
        <p className="text-base font-medium">
          Unlock your potential and explore the world of music like never
          before. Whether you&apos;re a beginner or looking to refine your
          skills, our programs are designed to guide you every step of the way.
        </p>
        <button
          className=" font-bold rounded-full border border-solid border-gray-200 border-black/[.08] transition-colors flex items-center justify-center hover:text-foreground bg-white bg-opacity-25 hover:bg-gray-200 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          onClick={scrollToBottom}
        >
          Enrollment
        </button>
      </div>
    </div>
  );
}
