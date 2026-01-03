import weckLogo from "@/assets/weck-logo.png";

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="gradient-card rounded-3xl p-8 lg:p-12 border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src={weckLogo} 
                alt="Weck Technologies" 
                className="w-14 h-14 rounded-xl"
              />
              <div>
                <span className="text-primary font-medium text-sm tracking-wide uppercase">
                  Om oss
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Weck Technologies
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Weck Technologies är ett nystartat företag som hjälper företag att använda AI på ett praktiskt och enkelt sätt.
              </p>
              <p>
                Vårt fokus är att automatisera kunddialog och minska tappade förfrågningar – utan krångliga system eller långa implementationer.
              </p>
              <p>
                Vi bygger lösningar som fungerar direkt i befintliga hemsidor och anpassas efter varje verksamhet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
