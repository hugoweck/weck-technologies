import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <TargetAudienceSection />
        <ContactSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
