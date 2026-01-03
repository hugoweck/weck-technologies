import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Integritetspolicy
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Inledning</h2>
                  <p>
                    Weck Technologies värnar om din personliga integritet. Denna integritetspolicy beskriver hur vi behandlar personuppgifter när du besöker vår webbplats, använder vår AI-baserade chatt eller kontaktar oss i egenskap av företagsrepresentant.
                  </p>
                  <p className="mt-4">
                    Tjänsten riktar sig till företag (B2B). De personuppgifter som behandlas avser främst kontaktpersoner hos företag.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Vilka personuppgifter samlas in</h2>
                  <p>Vi kan behandla följande uppgifter:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Namn och e-postadress när du kontaktar oss</li>
                    <li>Meddelanden och frågor som skickas via kontaktformulär eller AI-chatt</li>
                    <li>Teknisk information såsom IP-adress, webbläsartyp och anonymiserad besöksstatistik för att säkerställa funktion och förbättra webbplatsen</li>
                  </ul>
                  <p className="mt-4">Vi samlar inte in känsliga personuppgifter.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. Ändamål med behandlingen</h2>
                  <p>Personuppgifter behandlas för att:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Besvara förfrågningar och kommunicera med företag</li>
                    <li>Ge support och information om våra tjänster</li>
                    <li>Säkerställa, analysera och förbättra webbplatsens funktionalitet</li>
                  </ul>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">3.1 Rättslig grund</h3>
                  <p>
                    Behandlingen sker med stöd av berättigat intresse eller för att kunna fullgöra kommunikation och besvara förfrågningar från företag.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. AI och automatiserad kommunikation</h2>
                  <p>
                    När du använder vår AI-baserade chatt kan meddelanden behandlas automatiserat för att kunna ge relevanta svar och vägledning. Uppgifterna används endast för kommunikation, support och förbättring av tjänstens funktion.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Delning av uppgifter och personuppgiftsbiträden</h2>
                  <p>
                    Weck Technologies delar inte personuppgifter med tredje part i marknadsföringssyfte.
                  </p>
                  <p className="mt-4">
                    Uppgifter kan behandlas av tekniska leverantörer, såsom hosting- eller AI-tjänster, som agerar som personuppgiftsbiträden och endast behandlar uppgifterna enligt våra instruktioner och gällande dataskyddsavtal (DPA).
                  </p>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">5.1 Cookies</h3>
                  <p>
                    Weck Technologies använder endast tekniskt nödvändiga cookies som krävs för att webbplatsen och den AI-baserade chatten ska fungera korrekt. Dessa cookies används inte för marknadsföring eller spårning av användare.
                  </p>
                  <p className="mt-4">
                    Om vi i framtiden börjar använda analys- eller marknadsföringscookies kommer denna policy att uppdateras och, vid behov, samtycke att inhämtas.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Lagring och säkerhet</h2>
                  <p>
                    Personuppgifter lagras endast så länge det är nödvändigt för sitt ändamål. Vi vidtar rimliga tekniska och organisatoriska åtgärder för att skydda uppgifterna mot obehörig åtkomst, förlust eller missbruk.
                  </p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Dina rättigheter</h2>
                  <p>Du har rätt att:</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>Begära information om vilka personuppgifter vi behandlar</li>
                    <li>Begära rättelse eller radering av uppgifter</li>
                    <li>Invända mot viss behandling</li>
                  </ul>
                  <p className="mt-4">För sådana förfrågningar, kontakta oss via e-post.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Personuppgiftsansvarig och kontakt</h2>
                  <p>
                    Weck Technologies är personuppgiftsansvarig för behandlingen av personuppgifter.
                  </p>
                  <p className="mt-4">
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

export default PrivacyPolicy;
