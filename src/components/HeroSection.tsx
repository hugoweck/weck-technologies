import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Clock, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] gradient-glow animate-pulse-glow" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up opacity-0 mb-8">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 text-primary" />
              Tillgängligt för nya kliniker just nu
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up opacity-0 animation-delay-200 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Undvik att missa kunder{" "}
            <span className="text-gradient">när ni inte hinner svara</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up opacity-0 animation-delay-400 text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Vi hjälper skönhetskliniker och salonger att få fler bokningar utan mer personal – 
            med en AI-receptionist som svarar, guidar och bokar 24/7.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up opacity-0 animation-delay-600 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">
                Boka gratis demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#hur-det-fungerar">
                Se hur det fungerar
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in opacity-0 animation-delay-600 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Live samma dag</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Ingen bindning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>14 dagar kostnadsfritt</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
