import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/sujan-profile.jpg";

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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Photo */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative animate-scale-in">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                    <img 
                      src={profileImage} 
                      alt="Sujan Kumar Patra - Data Analyst"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-bounce-in" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full animate-bounce-in" style={{ animationDelay: '0.7s' }}></div>
                  <div className="absolute top-1/2 -right-8 w-12 h-12 bg-accent/10 rounded-full animate-bounce-in" style={{ animationDelay: '0.9s' }}></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -z-10 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6">
                  <span className="gradient-text">Sujan Kumar</span>
                  <br />
                  <span className="text-foreground">Patra</span>
                </h1>
                
                <div className="text-lg md:text-xl text-muted-foreground mb-8 font-inter leading-relaxed animate-slide-in">
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

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-scale-in">
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
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16 animate-bounce-in">
            <div className="inline-block p-2 rounded-full bg-accent/20">
              <div className="w-6 h-6 rounded-full bg-primary animate-pulse"></div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
}