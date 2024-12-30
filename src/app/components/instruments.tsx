import { Card, CardContent } from "@/app/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

const instruments = [
  {
    name: "Piano",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "From 500kr/hour",
  },
  {
    name: "Guitar",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "From 350kr/hour",
  },
  {
    name: "Violin",
    image:
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: "From 450kr/hour",
  },
];

export const InstrumentsShowcase = () => {
  return (
    <section>
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          Learn the Instrument You Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instruments.map((instrument) => (
            <Card
              key={instrument.name}
              className="overflow-hidden animate-on-scroll"
            >
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src={instrument.image}
                    alt={instrument.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-display text-2xl font-bold mb-2">
                      {instrument.name}
                    </h3>
                    <p className="mb-4">{instrument.price}</p>
                    <Button variant="secondary" size="sm">
                      Learn More
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
