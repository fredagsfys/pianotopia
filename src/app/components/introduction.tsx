import { RefObject } from "react";

interface IntroProps {
  viewRef: RefObject<HTMLInputElement | null>;
  scrollToBottom: () => void;
}

export const Introduction = ({ viewRef, scrollToBottom }: IntroProps) => {
  return (
    <section className="bg-white container max-w-2xl mx-auto px-4 md:px-0 space-y-4">
      <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
        Välkommen till Pianotopia – där pianodrömmar blir verklighet
      </h2>
      <p className="text-lg">
        Pianotopia är en plats (med en egen lokal inom snar framtid) för alla
        pianointresserade barn och ungdomar. Oavsett om ditt barn är nybörjare
        eller spelat piano ett tag så hjälper jag ditt barn utveckla sina
        pianofärdigheter på en passande nivå.
      </p>
      <p className="text-lg">
        Min vision på Pianotopia är att alla barn och ungdomar ska utveckla både
        musikaliska och livsviktiga egenskaper. Därför erbjuder jag
        pianoundervisning i olika former. För nybörjaren mellan ca 7-12 år
        rekommenderas grupplektioner och för den erfarna och målmedvetna
        rekommenderas individuella pianolektioner. Min filosofi är att musiken
        är en väg till personlig, intellektuell och social utveckling. Därför
        försöker jag skapa en miljö där barn och ungdomar kan utforska sin
        kreativitet, få nya vänner och växa som individer-allt med musiken som
        drivkraft. Läs mer om undervisningsformerna här. (länk till avsnitt om
        olika lektionsformer)
      </p>
      <p className="text-lg">
        Osäker om vilken undervisningsform som passar just ditt barn? Inga
        problem, skicka in en intresseanmälan så tar vi det därifrån.
      </p>
      <p className="text-lg">Välkommen att anmäla ditt intresse!</p>
      <button
        className="font-bold rounded-full border border-solid border-gray-200 border-black/[.08] transition-colors flex items-center justify-center hover:text-foreground bg-white bg-opacity-25 hover:bg-primary/5 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        onClick={scrollToBottom}
      >
        Till anmälan
      </button>
    </section>
  );
};
