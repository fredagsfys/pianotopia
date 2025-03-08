import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import emailjs from "emailjs-com";
import { RefObject, useState } from "react";
import toast from "react-hot-toast";

interface ContactFormProps {
  nameInputRef: RefObject<HTMLInputElement | null>;
}

const AccordionLoader = () => {
  return (
    <svg
      width="40"
      height="20"
      viewBox="0 0 40 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse"
    >
      <rect x="0" y="5" width="10" height="10" fill="white">
        <animate
          attributeName="x"
          values="0; 5; 0"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="15" y="5" width="10" height="10" fill="white">
        <animate
          attributeName="x"
          values="15; 10; 15"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="30" y="5" width="10" height="10" fill="white">
        <animate
          attributeName="x"
          values="30; 25; 30"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};

export default AccordionLoader;

export const ContactForm = ({ nameInputRef }: ContactFormProps) => {
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading

    emailjs
      .send(
        "service_dcxeqrv",
        "template_mxcq4bn",
        formData,
        "3f9GhNS-krYicIcaG",
      )
      .then(() => {
        toast(
          (t) => (
            <div>
              <div className="mb-1 text-sm font-semibold text-gray-900">
                Tack för ditt meddelande!
              </div>
              <p className="mb-2 text-sm font-normal">
                Vi återkommer så snart vi kan och ser fram emot att påbörja er
                musikaliska resa tillsammans med oss.
              </p>
            </div>
          ),
          { position: "bottom-center" },
        );
      })
      .catch(() =>
        toast(
          (t) => (
            <div>
              <div className="mb-1 text-sm font-semibold text-red-800">
                Oj då!
              </div>
              <p className="mb-2 text-sm font-normal">
                Vi kunde tyvärr inte skicka iväg ditt meddelande pga tekniskt
                fel. Kontakta oss gärna direkt på{" "}
                <span className="font-bold">info@pianotopia.se.</span>
              </p>
            </div>
          ),
          { position: "bottom-center" },
        ),
      )
      .finally(() => {
        setFormData({ name: "", email: "", message: "" });
        setLoading(false); // ✅ Stop loading
      });
  };

  return (
    <section className="bg-primary text-white py-16">
      <div className="px-4 max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-6">
          Börja din musikaliska resa idag
        </h2>
        <p className="mb-8 text-justify">
          Fyll i formuläret nedan för att få mer info om pianolektionerna på
          Pianotopia. (ej bindande)
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder="Namn"
            name="name"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            ref={nameInputRef}
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            required
            placeholder="Email för kontakt"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            value={formData.email}
            onChange={handleChange}
          />
          <Textarea
            name="message"
            required
            placeholder="Beskriv barnets ålder och nivå (nybörjare, grundläggande, avancerad)"
            rows={4}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 text-md"
            value={formData.message}
            onChange={handleChange}
          />

          <Button
            type="submit"
            className="w-full font-bold rounded-full border border-solid border-white/20 transition-colors flex items-center justify-center hover:text-foreground bg-transparent text-white/60 hover:bg-white/80 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            {loading ? <AccordionLoader /> : "Skicka"}
          </Button>
        </form>
      </div>
    </section>
  );
};
