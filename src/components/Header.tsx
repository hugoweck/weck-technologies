import { Link } from "react-router-dom";
import weckLogo from "@/assets/weck-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={weckLogo} 
              alt="Weck Technologies" 
              className="h-10 w-10 rounded-xl group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display font-semibold text-lg text-foreground">
              Weck Technologies
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#problem" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
            >
              Problem
            </a>
            <a 
              href="#losning" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
            >
              Lösning
            </a>
            <a 
              href="#hur-det-fungerar" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
            >
              Hur det fungerar
            </a>
            <a 
              href="#kontakt" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
            >
              Kontakt
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="#kontakt" 
              className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm shadow-glow hover:shadow-elevated hover:scale-[1.02] transition-all duration-300"
            >
              Boka demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
