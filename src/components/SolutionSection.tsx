import { CheckCircle, Bot, MessageCircle, Calendar, Globe } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI-chatten tar över",
    description: "När ni inte hinner svara tar AI-chatten över automatiskt."
  },
  {
    icon: MessageCircle,
    title: "Direkt svar och guidning",
    description: "Besökare får svar direkt, guidning och möjlighet att boka behandling/konsultation."
  },
  {
    icon: Calendar,
    title: "Inga förlorade kunder",
    description: "Potentiella kunder går inte förlorade oavsett tid på dygnet."
  },
  {
    icon: Globe,
    title: "Baserat på er hemsida",
    description: "AI-chatten utgår från innehållet på er hemsida. Ytterligare information kan enkelt läggas till."
  }
];

const SolutionSection = () => {
  return (
    <section id="losning" className="py-20 lg:py-32 relative bg-card/30">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] gradient-glow opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 tracking-wide uppercase">
            Lösningen
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Så löser vi ert problem
          </h2>
          <p className="text-lg text-muted-foreground">
            En AI-chatt som aldrig missar en kund.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group gradient-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3 glass px-6 py-4 rounded-full border border-primary/30">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-foreground text-sm font-medium">
              Fler bokningar utan mer personal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
