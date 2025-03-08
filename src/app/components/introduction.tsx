interface IntroProps {
  scrollToBottom: (timeout: number) => void;
  scrollToLessons: () => void;
}

export const Introduction = ({
  scrollToBottom,
  scrollToLessons,
}: IntroProps) => {
  return (
    <section className="bg-white container max-w-2xl mx-auto px-4 md:px-0 space-y-4  text-justify">
      <h2 className="text-4xl font-display font-bold text-center mb-12 text-primary">
        Välkommen till Pianotopia – där pianodrömmar blir verklighet
      </h2>
      <p className="text-lg">
        Pianotopia är en plats för alla pianointresserade barn och ungdomar.
        Oavsett om ditt barn är nybörjare eller spelat piano ett tag så hjälper
        jag ditt barn utveckla sina pianofärdigheter på en passande nivå.
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
        drivkraft. Läs mer om undervisningsformerna nedan.
      </p>
      <p className="text-lg">
        Osäker om vilken undervisningsform som passar just ditt barn? Inga
        problem, skicka in en intresseanmälan så tar vi det därifrån.
      </p>
      <p className="text-lg">Välkommen att anmäla ditt intresse!</p>
      <div className="flex space-x-4">
        <button
          className="font-bold rounded-lg border border-solid border-gray-200 border-black/[.08] transition-colors flex items-center justify-center hover:text-foreground bg-white bg-opacity-25 hover:bg-primary/5 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          onClick={() => {
            scrollToLessons();
          }}
        >
          Våra lektioner
        </button>
        <button
          className="font-bold rounded-lg border border-solid border-gray-200 border-black/[.08] transition-colors flex items-center justify-center hover:text-foreground bg-white bg-opacity-25 hover:bg-primary/5 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          onClick={() => scrollToBottom(800)}
        >
          Till anmälan
        </button>
      </div>

      <p className="text-lg">
        Frågor? Maila gärna direkt till{" "}
        <span className="font-semibold">hej@pianotopia.se</span>
      </p>
    </section>
  );
};
