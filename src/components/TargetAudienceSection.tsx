import { CheckCircle } from "lucide-react";

const audiences = [
  "Estetiska kliniker och salonger",
  "Team som missar bokningar kvällar och helger",
  "Verksamheter med onlinebokning (t.ex. BokaDirekt)",
  "Företag som vill få fler bokningar utan mer personal"
];

const TargetAudienceSection = () => {
  return (
    <section className="py-20 lg:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block text-primary font-medium text-sm mb-4 tracking-wide uppercase">
                För er
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Vem passar det för?
              </h2>
              
              <ul className="space-y-4">
                {audiences.map((audience, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                      {audience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="gradient-card rounded-3xl p-8 lg:p-12 border border-border/50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 gradient-glow opacity-50" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-glow">
                    <span className="text-2xl font-display font-bold text-primary-foreground">24/7</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Alltid tillgänglig
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Er AI-receptionist är alltid redo att svara, guida och boka – oavsett tid på dygnet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
