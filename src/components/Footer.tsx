import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Name */}
          <h3 className="font-poppins font-bold text-2xl gradient-text mb-4">
            Sujan Kumar Patra
          </h3>
          
          {/* Tagline */}
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Aspiring Data Analyst passionate about transforming data into actionable insights
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:sujanpatra854@gmail.com"
              className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            
            <a
              href="https://github.com/sujanpatr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent/10 text-accent-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/sujan-kumar-patra-456168299/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Sujan Kumar Patra. Built with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}