import dynamic from "next/dynamic";
import { RefObject, useState } from "react";
import { createPortal } from "react-dom";

// Toasts are only shown after a submit, so load them then
const loadToast = () => import("react-hot-toast");
const Toaster = dynamic(() => loadToast().then((m) => m.Toaster), {
  ssr: false,
});

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
  const [showToaster, setShowToaster] = useState(false);

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
    if (loading) return; // ignore double submits while sending
    setLoading(true); // ✅ Start loading
    setShowToaster(true);

    // Loaded on submit only, they aren't needed to render the page
    const toastLoaded = loadToast().then((m) => m.default);
    import("@emailjs/browser")
      .then(({ default: emailjs }) =>
        emailjs.send(
          "service_dcxeqrv",
          "template_mxcq4bn",
          formData,
          "3f9GhNS-krYicIcaG",
        ),
      )
      .then(async () => {
        const toast = await toastLoaded;
        setFormData({ name: "", email: "", message: "" });
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
      .catch(async () => {
        const toast = await toastLoaded;
        toast(
          (t) => (
            <div>
              <div className="mb-1 text-sm font-semibold text-red-800">
                Oj då!
              </div>
              <p className="mb-2 text-sm font-normal">
                Vi kunde tyvärr inte skicka iväg ditt meddelande pga tekniskt
                fel. Kontakta oss gärna direkt på{" "}
                <a href="mailto:hej@pianotopia.se" className="font-bold">
                  hej@pianotopia.se.
                </a>
              </p>
            </div>
          ),
          { position: "bottom-center" },
        );
      })
      .finally(() => {
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
          <input
            aria-label="Namn"
            placeholder="Namn"
            name="name"
            required
            className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
            ref={nameInputRef}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            aria-label="Email för kontakt"
            type="email"
            name="email"
            required
            placeholder="Email för kontakt"
            className="flex h-10 w-full rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/10 border-white/20 text-white placeholder:text-white/60"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            aria-label="Meddelande"
            name="message"
            required
            placeholder="Beskriv barnets ålder och nivå (nybörjare, grundläggande, avancerad)"
            rows={4}
            className="flex min-h-[80px] w-full rounded-md border px-3 py-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-white/10 border-white/20 text-white placeholder:text-white/60 text-md"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            aria-busy={loading}
            className="gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 py-2 w-full font-bold rounded-full border border-solid border-white/20 transition-colors flex items-center justify-center hover:text-foreground bg-transparent text-white/60 hover:bg-white/80 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          >
            {loading ? <AccordionLoader /> : "Skicka"}
          </button>
        </form>
        <address className="mt-12 rounded-2xl bg-white/10 p-8 text-left not-italic text-white/80">
          PIANOTOPIA AB
          <br />
          Sidenvägen 1A
          <br />
          393 55 Kalmar
          <br />
          Org.nr. 559514-5425
          <br />
          <a href="mailto:hej@pianotopia.se" className="underline">
            hej@pianotopia.se
          </a>
        </address>
      </div>
      {showToaster &&
        createPortal(
          <Toaster
            toastOptions={{
              duration: 15000,
              className: "font-[family-name:var(--font-geist-sans)]",
            }}
          />,
          document.body,
        )}
    </section>
  );
};
