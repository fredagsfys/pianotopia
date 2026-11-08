import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Picture from "../components/ui/picture";

const title = "Allmänna villkor – Musikhjältarna";
const description =
  "Allmänna villkor för Musikhjältarna, en digital tjänst från Pianotopia AB där barn övar piano på ett lekfullt sätt.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/villkor" },
  openGraph: { title, description, url: "/villkor" },
};

const Mail = ({ to }: { to: string }) => (
  <a href={`mailto:${to}`} className="underline">
    {to}
  </a>
);

export default function Villkor() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-center pt-8">
        <Link href="/" className="w-24" aria-label="Pianotopia">
          <Picture
            src="/images/logo-alt"
            alt="Pianotopia"
            width={600}
            height={600}
            className="object-cover"
          />
        </Link>
      </header>
      <main className="container max-w-2xl mx-auto px-4 md:px-0 py-16 space-y-4 text-lg text-left md:text-justify [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:pt-8 [&_h2]:text-left">
        <h1 className="text-4xl font-display font-bold text-center text-primary">
          Allmänna villkor – Musikhjältarna
        </h1>
        <p className="text-center">
          <time dateTime="2026-11-08">Nov 8, 2026</time>
        </p>

        <h2>1. Inledning och avtalsparter</h2>
        <p>
          Dessa allmänna villkor gäller när du skapar konto i, prenumererar på
          eller på annat sätt använder Musikhjältarna (”Tjänsten”).
        </p>
        <p>
          Tjänsten tillhandahålls av Pianotopia AB, org.nr 559514-5425,
          Sidenvägen 1A, 393 55 Kalmar (”Pianotopia”, ”vi”, ”oss”). Du som
          skapar kontot och ingår avtalet med oss kallas ”du” eller
          ”Kontoinnehavaren”.
        </p>
        <p>
          Genom att skapa ett konto eller starta en prenumeration bekräftar du
          att du har läst och godkänner villkoren. Villkoren kompletteras av vår
          integritetspolicy och den information om pris och period som visas när
          du köper.
        </p>

        <h2>2. Om tjänsten Musikhjältarna</h2>
        <p>
          Musikhjältarna är en digital tjänst där barn övar piano på ett
          lekfullt sätt, med övningar, berättelser och belöningar som följer
          barnets utveckling. Tjänsten är tänkt som ett komplement till, inte en
          ersättning för, undervisning hos en pianolärare.
        </p>
        <p>
          För att använda Tjänsten behövs ett piano eller keyboard, en
          kompatibel enhet (surfplatta/telefon) och internetuppkoppling. Du står
          själv för kostnader för utrustning och datatrafik.
        </p>
        <p>
          Vi utvecklar Tjänsten löpande. Innehåll och funktioner kan därför
          läggas till, ändras eller tas bort, men Tjänstens huvudsakliga
          karaktär ska bestå under din prenumerationsperiod.
        </p>

        <h2>3. Konto, registrering och barnprofiler</h2>
        <p>
          Kontot skapas och ägs av en vuxen. Du måste vara minst 18 år och vara
          vårdnadshavare för, eller ha vårdnadshavarens tillstånd att
          registrera, de barn som ska använda Tjänsten.
        </p>
        <p>
          Du ansvarar för att uppgifterna du lämnar är korrekta och hålls
          uppdaterade.
        </p>
        <p>
          Inloggningsuppgifter är personliga. Du ansvarar för att de inte sprids
          och för all användning av kontot.
        </p>
        <p>
          Barn kan inte själva göra köp eller ändra prenumerationen. Köp och
          kontoinställningar sköts av dig.
        </p>
        <p>
          Misstänker du att någon obehörig har tillgång till kontot ska du byta
          lösenord och kontakta oss.
        </p>

        <h2>4. Prenumeration, provperiod och betalning</h2>
        <p>
          Tjänsten erbjuds som prenumeration per månad. Aktuella priser anges i
          kronor inklusive moms på{" "}
          <a href="https://www.musikhjaltarna.se" className="underline">
            www.musikhjaltarna.se
          </a>{" "}
          och visas alltid innan du bekräftar köpet.
        </p>
        <p>
          <strong>Förnyelse.</strong> Prenumerationen förnyas automatiskt för en
          ny period av samma längd tills du säger upp den. Betalning dras i
          förskott vid varje periods början.
        </p>
        <p>
          <strong>Betalning.</strong> Du kan betala med kort eller
          autogiro/faktura via din bank. Har du köpt via App Store eller Google
          Play gäller också deras villkor för betalning, förnyelse och
          återbetalning, och prenumerationen hanteras i respektive butik.
        </p>
        <p>
          <strong>Utebliven betalning.</strong> Om en betalning misslyckas
          försöker vi dra beloppet igen och meddelar dig. Går betalningen inte
          igenom inom 14 dagar kan vi pausa tillgången till Tjänsten tills
          betalning skett.
        </p>

        <h2>5. Ångerrätt</h2>
        <p>
          Som konsument har du 14 dagars ångerrätt enligt lagen (2005:59) om
          distansavtal och avtal utanför affärslokaler. Ångerfristen börjar den
          dag avtalet ingås, det vill säga när du skapar en prenumeration eller
          startar en provperiod.
        </p>
        <p>
          Använder du ångerrätten återbetalar vi det du betalat inom 14 dagar
          från att vi fått ditt meddelande, med samma betalsätt som du använde.
          Har du uttryckligen begärt att Tjänsten ska börja direkt under
          ångerfristen kan vi göra avdrag för den del av perioden du redan har
          använt.
        </p>
        <p>
          Du ångrar köpet genom att mejla <Mail to="kontakt@pianotopia.se" />.
          Ange ditt namn, den e-postadress som är kopplad till kontot och att du
          vill ångra köpet. Köp gjorda i App Store eller Google Play ångras
          enligt respektive butiks rutiner.
        </p>

        <h2>6. Uppsägning och avslut</h2>
        <p>
          Du kan säga upp prenumerationen när som helst under Mitt konto i
          appen. Uppsägningen gäller från slutet av den period du redan har
          betalat för, och du har tillgång till Tjänsten fram till dess. Betalda
          perioder återbetalas inte i efterhand, utom när ångerrätten eller
          tvingande lag ger dig rätt till det.
        </p>
        <p>
          Vi får säga upp eller stänga av ditt konto om du väsentligt bryter mot
          villkoren, till exempel vid missbruk eller utebliven betalning. Om det
          är möjligt varnar vi dig först och ger dig tid att rätta till det. Vi
          kan också upphöra med Tjänsten helt; då meddelar vi minst 30 dagar i
          förväg och återbetalar förskottsbetalning för tid efter upphörandet.
        </p>
        <p>
          När kontot avslutas raderas barnprofiler och övningshistorik enligt
          vår integritetspolicy.
        </p>

        <h2>7. Användning av tjänsten</h2>
        <p>
          Prenumerationen ger ditt hushåll en personlig, icke-överlåtbar rätt
          att använda Tjänsten för privat bruk. Det innebär att du inte får:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-left">
          <li>
            använda Tjänsten kommersiellt, till exempel i betald undervisning,
            utan skriftligt avtal med oss
          </li>
          <li>
            dela, sälja eller hyra ut ditt konto till personer utanför hushållet
          </li>
          <li>kopiera, spela in eller sprida Tjänstens innehåll</li>
          <li>
            försöka kringgå tekniska skydd eller på annat sätt störa Tjänsten
          </li>
        </ul>
        <p>
          Pianolärare och skolor som vill använda Musikhjältarna i undervisning
          är välkomna att kontakta oss om särskilt avtal på{" "}
          <Mail to="hej@pianotopia.se" />
        </p>

        <h2>8. Immateriella rättigheter</h2>
        <p>
          Allt innehåll i Musikhjältarna – bland annat musik, notbilder,
          figurer, berättelser, illustrationer, ljud, programvara och varumärken
          – ägs av Pianotopia eller av våra licensgivare och skyddas av
          upphovsrätt och annan lagstiftning. Du får ingen äganderätt till
          innehållet, endast den användningsrätt som anges i avsnitt 7.
        </p>
        <p>
          Inspelningar eller annat som barnet själv skapar i Tjänsten tillhör
          er. Vi använder sådant material bara för att kunna tillhandahålla
          Tjänsten till er.
        </p>

        <h2>9. Personuppgifter</h2>
        <p>
          Pianotopia är personuppgiftsansvarig för de uppgifter som behandlas i
          Tjänsten. Vi behandlar uppgifter om dig som kontoinnehavare, som namn,
          e-post och betalningsinformation, samt uppgifter om barnens
          användning, som förnamn eller alias, ålder och övningsresultat.
        </p>
        <p>
          Barnens uppgifter används bara för att anpassa övningarna och visa
          framsteg för dig. Vi säljer aldrig personuppgifter och visar ingen
          riktad reklam för barn i Tjänsten.
        </p>
        <p>
          Hur vi behandlar personuppgifter, vilka mottagare vi delar dem med och
          vilka rättigheter du har enligt dataskyddsförordningen (GDPR) beskrivs
          i vår integritetspolicy. Har du gett samtycke till nyhetsbrev och
          erbjudanden kan du när som helst återkalla det.
        </p>

        <h2>10. Ansvar och ansvarsbegränsning</h2>
        <p>
          Vi ansvarar inte för skador som beror på din utrustning, din
          internetuppkoppling eller omständigheter utanför vår kontroll, till
          exempel strömavbrott, myndighetsbeslut eller fel hos underleverantörer
          som vi inte rimligen kunnat förutse (force majeure). Vi ansvarar inte
          heller för indirekta skador.
        </p>
        <p>
          Ingenting i dessa villkor begränsar de rättigheter du har enligt
          tvingande konsumentlagstiftning.
        </p>

        <h2>11. Ändringar av villkor och priser</h2>
        <p>
          Vi kan ändra villkoren eller priset, till exempel vid nya funktioner,
          ändrade kostnader eller ny lagstiftning. Väsentliga ändringar och
          prishöjningar meddelar vi via e-post minst 30 dagar innan de börjar
          gälla.
        </p>
        <p>
          Om du inte godtar ändringen kan du säga upp prenumerationen innan den
          träder i kraft, utan extra kostnad. Fortsätter du använda Tjänsten
          efter att ändringen trätt i kraft anses du ha godkänt den. En
          prishöjning påverkar aldrig en period som du redan har betalat för.
        </p>

        <h2>12. Tillämplig lag och tvister</h2>
        <p>
          Svensk lag gäller för avtalet. Om du är missnöjd vill vi först att du
          kontaktar oss, så försöker vi hitta en lösning tillsammans.
        </p>
        <p>
          Kommer vi inte överens kan du som konsument vända dig till Allmänna
          reklamationsnämnden (ARN),{" "}
          <a href="https://www.arn.se" className="underline">
            www.arn.se
          </a>
          . Vi följer ARN:s rekommendationer. Tvister som inte löses på dessa
          sätt avgörs av allmän domstol i Sverige.
        </p>

        <h2>13. Kontakt</h2>
        <p>
          Har du frågor om villkoren, din prenumeration eller Tjänsten är du
          välkommen att kontakta oss:
        </p>
        <address className="not-italic text-left">
          Pianotopia AB
          <br />
          Org.nr: 559514-5425
          <br />
          Sidenvägen 1A
          <br />
          393 55 Kalmar
          <br />
          E-post: <Mail to="kontakt@pianotopia.se" />
        </address>
        <p>Villkoren gäller från och med 8e november 2026.</p>
      </main>
      <Footer />
    </div>
  );
}
