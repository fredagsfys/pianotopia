import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const instruments = [
  {
    name: "Grupplektioner",
    image:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1475275166152-f1e8005f9854?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-in">
          {instruments.map((instrument) => (
            <Card
              key={instrument.name}
              className="overflow-hidden animate-on-scroll group transition-all duration-300 hover:shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden h-56 bg-primary">
                  <Image
                    src={instrument.image}
                    alt={instrument.name}
                    width={800}
                    height={800}
                    className="opacity-85 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-piano-primary mb-4">
                  {instrument.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {instrument.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link href={`/lesson/${instrument.name}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full bg-piano-primary hover:bg-piano-secondary transition-colors duration-300"
                  >
                    Läs mer
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
