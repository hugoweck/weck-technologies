import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Användarvillkor
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Allmänt</h2>
                  <p>
                    Dessa användarvillkor gäller för användning av Weck Technologies AI-baserade tjänster. Tjänsten riktar sig uteslutande till företag (B2B). Genom att använda tjänsten accepterar kunden dessa villkor.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Tjänsten</h2>
                  <p>
                    Weck Technologies tillhandahåller en AI-baserad receptionist/chattlösning som svarar på frågor och guidar webbplatsbesökare.
                  </p>
                  <p className="mt-4">
                    Tjänsten är ett stödverktyg och innebär ingen garanti för affärsresultat, leads, konverteringar eller försäljning. AI-svar är automatiserade och ska inte ses som juridisk, finansiell eller annan professionell rådgivning.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Gratis testperiod</h2>
                  <p>
                    Kunden erbjuds en kostnadsfri testperiod om 14 dagar. Under testperioden kan tjänsten användas fullt ut. Efter testperioden fortsätter tjänsten endast om kunden aktivt bekräftar att den ska aktiveras som abonnemang.
                  </p>
                  <p className="mt-4">
                    Om ingen bekräftelse sker avslutas tjänsten automatiskt utan kostnad.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Abonnemang och betalning</h2>
                  <p>
                    Vid aktiv bekräftelse efter testperioden aktiveras ett löpande abonnemang.
                  </p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li><strong className="text-foreground">Pris:</strong> 2 995 kr per månad exkl. moms</li>
                    <li>Fakturering sker månadsvis via bokförings-/faktureringstjänst (t.ex. Bokio)</li>
                    <li><strong className="text-foreground">Betalningsvillkor:</strong> 14 dagar</li>
                    <li>Ingen bindningstid. Kunden kan avsluta abonnemanget när som helst</li>
                  </ul>
                  <p className="mt-4">
                    Vid utebliven betalning har Weck Technologies rätt att pausa eller avsluta tjänsten.
                  </p>
                  <p className="mt-4">
                    Weck Technologies förbehåller sig rätten att justera pris eller villkor med skäligt varsel. Kunden har då rätt att avsluta tjänsten innan ändringen träder i kraft.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Kundens ansvar</h2>
                  <p>Kunden ansvarar för:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Innehåll, information och instruktioner som tillhandahålls till tjänsten</li>
                    <li>Att nödvändiga rättigheter finns för den data som behandlas</li>
                    <li>Att informera sina slutkunder om att AI-baserad kommunikation används</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Drift och tillgänglighet</h2>
                  <p>
                    Weck Technologies strävar efter hög tillgänglighet men garanterar inte oavbruten drift. Tillfälliga avbrott kan förekomma vid underhåll, uppdateringar eller tekniska problem.
                  </p>
                  <p className="mt-4">
                    Weck Technologies ansvarar inte för avbrott som orsakas av omständigheter utanför vår kontroll (force majeure).
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Ansvarsbegränsning</h2>
                  <p>
                    Weck Technologies ansvarar inte för indirekta skador, utebliven vinst eller affärsförluster.
                  </p>
                  <p className="mt-4">
                    Eventuellt skadeståndsansvar är begränsat till det belopp kunden betalat för tjänsten under den senaste månaden.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Avslut av avtal</h2>
                  <p>
                    Kunden kan avsluta tjänsten när som helst.
                  </p>
                  <p className="mt-4">
                    Weck Technologies har rätt att avsluta avtalet med omedelbar verkan om fortsatt tillhandahållande av tjänsten inte är rimligt, eller vid brott mot dessa villkor, missbruk av tjänsten eller utebliven betalning.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Personuppgiftsbiträdesavtal (DPA)</h2>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">9.1 Roller</h3>
                  <p>Kunden är personuppgiftsansvarig. Weck Technologies är personuppgiftsbiträde.</p>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">9.2 Behandling av personuppgifter</h3>
                  <p>
                    Weck Technologies behandlar personuppgifter endast för att tillhandahålla tjänsten och enligt kundens instruktioner. Personuppgifter kan avse både kundens representanter och kundens slutkunder som interagerar via chatt.
                  </p>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">9.3 Säkerhet</h3>
                  <p>
                    Weck Technologies vidtar rimliga tekniska och organisatoriska åtgärder för att skydda personuppgifter.
                  </p>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">9.4 Underbiträden</h3>
                  <p>
                    Personuppgifter kan behandlas av underbiträden (t.ex. AI-leverantörer, hosting, bokföring) i den utsträckning som krävs för tjänstens funktion.
                  </p>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">9.5 Avslut</h3>
                  <p>
                    Vid avslutat avtal raderas eller anonymiseras personuppgifter inom rimlig tid, om inte lag kräver fortsatt lagring.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Tillämplig lag</h2>
                  <p>
                    Dessa villkor regleras av svensk lag. Tvister ska avgöras av svensk domstol.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">11. Kontakt</h2>
                  <p>
                    <strong className="text-foreground">Weck Technologies</strong><br />
                    Enskild näringsverksamhet<br />
                    E-post: <a href="mailto:kontakt@wecktechnologies.com" className="text-primary hover:underline">kontakt@wecktechnologies.com</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
