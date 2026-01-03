import { XCircle, Clock, MessageSquareX, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Besökare lämnar när svar dröjer",
    description: "Varje minut utan svar ökar risken att kunden väljer en konkurrent."
  },
  {
    icon: MessageSquareX,
    title: "Kvällar och helger går obesvarade",
    description: "Förfrågningar vid hög belastning eller utanför kontorstid blir ofta liggande."
  },
  {
    icon: XCircle,
    title: "Negativa omdömen",
    description: "Uteblivna svar leder ofta till frustration och negativa recensioner online."
  },
  {
    icon: Users,
    title: "Kräver löpande bemanning",
    description: "Att hantera kundförfrågningar kräver konstant personal och resurser."
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm mb-4 tracking-wide uppercase">
            Problemet
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Det som kostar er pengar
          </h2>
          <p className="text-lg text-muted-foreground">
            Resultatet är tappade kunder och bokningar trots att trafiken finns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group glass rounded-2xl p-6 lg:p-8 hover:bg-muted/30 transition-all duration-500 hover:shadow-elevated"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual element */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3 glass px-6 py-4 rounded-full">
            <TrendingDown className="w-5 h-5 text-destructive" />
            <span className="text-muted-foreground text-sm font-medium">
              Tappade kunder och bokningar trots att trafiken finns
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
