import { Download, Settings, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Vi installerar på er hemsida",
    description: "Utan att störa befintliga system."
  },
  {
    number: "02",
    icon: Settings,
    title: "Vi anpassar efter er verksamhet",
    description: "Med era svar och rutiner."
  },
  {
    number: "03",
    icon: Zap,
    title: "Live samma dag",
    description: "Med uppföljning under testperioden."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="hur-det-fungerar" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 tracking-wide uppercase">
            Processen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Så fungerar det
          </h2>
          <p className="text-lg text-muted-foreground">
            Tre enkla steg till fler bokningar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent -translate-y-1/2 z-0" />
              )}
              
              <div className="relative z-10 text-center">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-32 h-32 rounded-3xl gradient-card border border-border/50 mb-6 group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-500">
                  <div className="text-center">
                    <span className="block text-primary font-display text-2xl font-bold mb-1">
                      {step.number}
                    </span>
                    <step.icon className="w-8 h-8 text-foreground mx-auto" />
                  </div>
                </div>
                
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
