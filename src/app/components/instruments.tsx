import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const instruments = [
  {
    name: "Grupplektioner",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: `
      På Pianotopia erbjuder jag grupplektioner för yngre barn (ca 7-12 år), där fokus ligger på att barn ska få möjlighet att upptäcka musikens värld på ett roligt och engagerande sätt. Men det handlar inte bara om att lära sig spela piano- här utvecklar barnen även andra viktiga färdigheter som de har nytta av långt utanför musikens område. 

      Vilka fördelar finns med grupplektioner?

      Tidig vana för att uppträda inför andra: Att spela för sina kamrater regelbundet i en trygg miljö hjälper barnen att bygga självförtroende och vänja sig vid att framträda vilket minskar prestationsångest i det långa loppet.

      Turtagning och tålamod: När barnen turas om att spela och lyssna, lär de sig att respektera andras tid och ansträngningar.

      Socialt samspel och kamratskap: 
      Musik är ett fantastiskt verktyg för att stärka relationer och i gruppen skapas en gemenskap där barnen uppmuntrar och stöttar varandra.

      Samarbetsförmåga:
      Genom enkla samspelande övningar som duetter, kompspel, improvisation och gruppspel får barnen träna på att lyssna på varandra, lära av varandra och skapa tillsammans. Och mycket mycket mer. 

      Välkommen att anmäla ditt barns intresse för grupplektioner (anmälan knapp)
    `,
  },
  {
    name: "Individuella pianolektioner",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: `
      De individuella pianolektionerna är helt anpassade efter elevens mål, ambitioner och förutsättningar. Vill ditt barn lära sig kompa en kompis som spelar ett annat instrument eller rent av vill lära sig spela episk filmmusik så är det helt upp till eleven. Min breda musikaliska bakgrund gör att jag kan anpassa undervisningen och kan hjälpa eleverna att utveckla sitt pianospel inom de flesta genrer och musikstilar. I dessa lektioner inkluderas gärna även teknikträning, musikteori och improvisation. 
      Välkommen att anmäla ditt barns intresse för en kostnadsfri första träff med mig, Suzana. (anmälan knapp)
    `,
  },
];

export const InstrumentsShowcase = () => {
  return (
    <section>
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          Lär dig spela piano på ditt sätt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {instruments.map((instrument) => (
            <Card
              key={instrument.name}
              className="overflow-hidden animate-on-scroll"
            >
              <CardContent className="p-0">
                <div className="relative h-96">
                  <Image
                    src={instrument.image}
                    alt={instrument.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white h-full">
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {instrument.name}
                    </h3>
                    <p className="mb-4 ">{instrument.description}</p>
                    <Button variant="secondary" size="sm">
                      Läs mer
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
