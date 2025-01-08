import Image from "next/image";
import { useEffect, useState } from "react";

export default function Menu() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    const threshold = header ? header.offsetHeight : 100;

    const handleScroll = () => {
      setShowSticky(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className="mt-12 w-32 h-32 mx-auto container rounded-full border-2 bg-gray-900/80 flex items-center justify-center">
    //   <p className="uppercase font-bold text-2xl">Logo</p>
    // </div>
    <div className="mx-auto container rounded-full flex items-center justify-center text-5xl font-bold w-64 xl:w-96">
      <Image
        src={`/pianotopia/logo10.png`}
        alt="logotype"
        width={600}
        height={600}
        className="object-cover"
      />

      <div
        className={`fixed top-0 end-0 z-50 m-4 flex justify-end rounded-full transform transition-transform ${
          showSticky ? "visible translate-y-0" : "invisible -translate-y-full"
        }`}
      >
        <div className="flex items-start w-24 container">
          <Image
            src={`/pianotopia/logoalt10.png`}
            alt="logotype"
            width={600}
            height={600}
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
}
