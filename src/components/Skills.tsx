import { Code, Database, BarChart3, Award, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    skills: ["C", "Python", "Java", "SQL"],
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Tools & Software",
    icon: BarChart3,
    skills: ["MS Excel", "Power BI", "Google Sheets"],
    color: "bg-secondary/10 text-secondary"
  },
  {
    title: "Languages",
    icon: Globe,
    skills: ["English", "Hindi", "Bengali"],
    color: "bg-accent/10 text-accent-foreground"
  }
];

const certificates = [
  {
    title: "IBM Skill Build",
    subtitle: "Decoding Data: Insights & Impact through Analytics",
    icon: Award
  }
];

export function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis and visualization
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="project-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold font-poppins">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold font-poppins mb-6 text-center">
            Certifications
          </h3>
          
          {certificates.map((cert, index) => (
            <div 
              key={cert.title} 
              className="project-card animate-scale-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{cert.title}</h4>
                  <p className="text-muted-foreground">{cert.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-accent/5 rounded-xl border border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Analytics Tools</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}