import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useToast } from "@/app/components/ui/use-toast";
import { RefObject } from "react";
interface ContactFormProps {
  nameInputRef: RefObject<HTMLInputElement | null>;
}

export const ContactForm = ({ nameInputRef }: ContactFormProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your interest!",
      description:
        "We'll get back to you shortly about starting your musical journey.",
    });
  };

  return (
    <section className="bg-primary text-white py-16">
      <div className="px-4 max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-6">
          Börja din musikaliska resa idag
        </h2>
        <p className="mb-8">
          Fyll i formuläret nedan för att få mer info om pianolektionerna på
          Pianotopia. (ej bindande)
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder="Namn"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            ref={nameInputRef}
          />
          <Input
            type="email"
            placeholder="Email för kontakt"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />
          <Textarea
            placeholder="Beskriv barnets ålder och nivå (nybörjare, grundläggande, avancerad)"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
          />

          <Button
            type="submit"
            className="w-full font-bold rounded-full border border-solid border-white/20 transition-colors flex items-center justify-center hover:text-foreground bg-transparent text-white/60 hover:bg-white/80 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            Skicka
          </Button>
        </form>
      </div>
    </section>
  );
};
