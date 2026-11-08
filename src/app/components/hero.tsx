import Picture from "./ui/picture";
import { useEffect, useState } from "react";

interface HeroProps {
  scrollToBottom: (timeout: number) => void;
}

export default function Hero({ scrollToBottom }: HeroProps) {
  // Mount the video only after the page has loaded, so its download doesn't
  // compete with the logo, fonts and scripts for bandwidth
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setShowVideo(true);
      return;
    }
    const onLoad = () => setShowVideo(true);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden text-justify">
      {/* First video frame, shown instantly until the video takes over. The
          video has no poster of its own (it would download a second copy);
          until it has a frame it's transparent and this shows through. */}
      <Picture
        src="/videos/piano-poster"
        alt="Barn som spelar piano"
        fill
        priority
        fetchPriority="high"
        className="object-cover"
      />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          {/* Smallest first; browsers skip codecs they can't decode (AV1, then
              VP9) and fall through to H.264 */}
          <source
            src="/videos/piano-av1.mp4"
            type='video/mp4; codecs="av01.0.01M.08"'
          />
          <source src="/videos/piano.webm" type='video/webm; codecs="vp9"' />
          <source src="/videos/piano.mp4" type="video/mp4" />
          <source src="/videos/piano.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      )}
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
      <div className="backdrop-blur-sm h-full w-full"></div>
      <div className="animate-fadeIn w-96 absolute [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] bottom-1/4 px-4 md:px-0 left-0 md:left-1/4 right-0 text-white z-30 grid items-start gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold">Nyfiken på piano?</h1>
        <p className="text-base font-semibold">
          Letar du också efter den bästa pianoundervisningen för ditt barn i
          Kalmar regionen? Då har du hittat helt rätt! På Pianotopia är
          ledorden: kreativitet, lekfullhet och gemenskap. Anmäl ditt barns
          intresse idag så återkommer jag med mer info.
        </p>
        <button
          className="font-bold rounded-lg border border-solid border-gray-200 border-black/[.08] transition-colors flex items-center justify-center hover:text-foreground bg-white bg-opacity-25 hover:bg-gray-200 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          onClick={() => scrollToBottom(800)}
        >
          Ja, tack, jag vill veta mer!
        </button>
      </div>
    </div>
  );
}
