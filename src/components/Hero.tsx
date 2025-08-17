import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleViewResume = () => {
    // You can replace this with actual resume link
    window.open("#", "_blank");
  };

  const handleContact = () => {
    window.location.href = "mailto:sujanpatra854@gmail.com";
  };

  const handleGithub = () => {
    window.open("https://github.com/sujanpatr", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/sujan-kumar-patra-456168299/", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6">
              <span className="gradient-text">Sujan Kumar</span>
              <br />
              <span className="text-foreground">Patra</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter leading-relaxed animate-slide-in">
              I am an aspiring data analyst skilled in{" "}
              <span className="text-primary font-semibold">statistics</span>,{" "}
              <span className="text-primary font-semibold">data visualization</span>,{" "}
              <span className="text-primary font-semibold">Excel</span>,{" "}
              <span className="text-primary font-semibold">SQL</span>,{" "}
              <span className="text-primary font-semibold">Python</span>, and{" "}
              <span className="text-primary font-semibold">Power BI</span>.
              <br />
              I love finding insights from data to solve problems and make better decisions.
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
              <Button onClick={handleViewResume} className="btn-hero">
                <FileText className="mr-2 h-5 w-5" />
                View Resume
              </Button>
              
              <Button onClick={handleContact} className="btn-secondary">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              
              <Button onClick={handleGithub} className="btn-secondary">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              
              <Button onClick={handleLinkedIn} className="btn-secondary">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>

            <div className="animate-bounce-in">
              <div className="inline-block p-2 rounded-full bg-accent/20">
                <div className="w-6 h-6 rounded-full bg-primary animate-pulse"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}