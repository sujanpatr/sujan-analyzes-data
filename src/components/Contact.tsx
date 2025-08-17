import { Mail, Phone, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sujanpatra854@gmail.com",
    href: "mailto:sujanpatra854@gmail.com",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9668788440",
    href: "tel:+919668788440",
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/sujanpatr",
    href: "https://github.com/sujanpatr",
    color: "bg-accent/10 text-accent-foreground"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "sujan-kumar-patra-456168299",
    href: "https://www.linkedin.com/in/sujan-kumar-patra-456168299/",
    color: "bg-primary/10 text-primary"
  }
];

export function Contact() {
  const handleQuickContact = () => {
    window.location.href = "mailto:sujanpatra854@gmail.com?subject=Portfolio Contact&body=Hi Sujan, I came across your portfolio and would like to discuss...";
  };

  return (
    <section id="contact" className="bg-accent/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss data analytics opportunities and potential collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="project-card hover:scale-105 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-4 rounded-xl ${contact.color} w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <contact.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-center">{contact.label}</h3>
                <p className="text-muted-foreground text-sm text-center break-all">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          {/* Quick Contact Section */}
          <div className="text-center">
            <div className="project-card max-w-2xl mx-auto animate-scale-in">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold font-poppins">Quick Contact</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in discussing new opportunities in data analytics, 
                potential collaborations, or simply connecting with fellow data enthusiasts. 
                Feel free to reach out!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={handleQuickContact} className="btn-hero">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                
                <Button 
                  onClick={() => window.open("https://www.linkedin.com/in/sujan-kumar-patra-456168299/", "_blank")}
                  className="btn-secondary"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Based in West Bengal, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}