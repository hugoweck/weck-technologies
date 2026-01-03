import { Link } from "react-router-dom";
import weckLogo from "@/assets/weck-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={weckLogo} 
                alt="Weck Technologies" 
                className="h-10 w-10 rounded-xl"
              />
              <span className="font-display font-semibold text-lg text-foreground">
                Weck Technologies
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Vi hjälper företag att använda AI på ett praktiskt och enkelt sätt.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Juridiskt</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/integritetspolicy" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                >
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link 
                  to="/anvandarvillkor" 
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                >
                  Användarvillkor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:kontakt@wecktechnologies.com" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                >
                  kontakt@wecktechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 Weck Technologies
          </p>
          <div className="flex items-center gap-6">
            <Link 
              to="/integritetspolicy" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Integritetspolicy
            </Link>
            <Link 
              to="/anvandarvillkor" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
            >
              Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
