import { Button } from "@/components/ui/button";
import { Mail, Calendar, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-primary font-medium text-sm mb-4 tracking-wide uppercase">
            Kom igång
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kontakta oss
          </h2>
          <p className="text-lg text-muted-foreground">
            Maila oss eller boka ett kort samtal så hjälper vi er komma igång.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <a 
            href="https://calendar.app.google/damhNcdv6Fghhndr7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-500 text-center"
          >
            <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
              <Calendar className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-2">
              Boka 15 min samtal
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              enkelt via google calender
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
              Boka nu <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a 
            href="mailto:kontakt@wecktechnologies.com"
            className="group gradient-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-500 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="font-display font-semibold text-xl text-foreground mb-2">
              Maila oss
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              kontakt@wecktechnologies.com
            </p>
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
              Skicka mail <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* CTA Box */}
        <div className="max-w-2xl mx-auto">
          <div className="gradient-card rounded-3xl p-8 lg:p-12 border border-primary/30 text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-glow opacity-20" />
            
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Prova kostnadsfritt i 14 dagar
              </h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Mejla oss så sätter vi upp allt och gör er live samma dag vi ser er förfrågan.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="mailto:kontakt@wecktechnologies.com">
                  Prova kostnadsfritt i 14 dagar
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
