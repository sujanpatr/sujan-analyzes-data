import { Briefcase, Users, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Analytics Intern",
    company: "Infotact Solutions",
    period: "July 2025",
    type: "Internship",
    description: "Gained hands-on experience in data analytics processes and methodologies.",
    responsibilities: [
      "Data cleaning and transformation using Excel and Python",
      "Created data visualizations to identify trends and patterns", 
      "Performed statistical analysis on large datasets",
      "Collaborated with team members on analytical projects"
    ],
    icon: Briefcase,
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Web Development Intern", 
    company: "OctaNet Services Pvt Ltd",
    period: "February 2024",
    type: "Internship",
    description: "Developed technical skills and gained valuable industry experience.",
    responsibilities: [
      "Learned modern web development technologies",
      "Participated in team-based project development",
      "Improved problem-solving and debugging skills",
      "Enhanced understanding of software development lifecycle"
    ],
    icon: Briefcase,
    color: "bg-secondary/10 text-secondary"
  }
];

const responsibilities = [
  {
    period: "2024–2025",
    roles: [
      "Hostel Mess Committee Member",
      "Sports Cricket Coordinator", 
      "Cricket Team Player (IT Department)",
      "Photography Team Member"
    ]
  },
  {
    period: "2019–2020", 
    roles: [
      "School Ganesh & Saraswati Puja Coordinator",
      "Assistant Sports Member"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and leadership roles
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold font-poppins mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-primary" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title} 
                className="project-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-3 rounded-lg ${exp.color} flex-shrink-0`}>
                    <exp.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h4 className="text-xl font-semibold font-poppins">{exp.title}</h4>
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div>
                      <h5 className="font-semibold mb-3">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Responsibilities */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-8 flex items-center gap-3">
            <Users className="w-6 h-6 text-secondary" />
            Leadership & Responsibilities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {responsibilities.map((period, index) => (
              <div 
                key={period.period} 
                className="project-card animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <h4 className="font-semibold text-lg">{period.period}</h4>
                </div>
                
                <ul className="space-y-3">
                  {period.roles.map((role, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">
            Hobbies & Interests
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Playing Cricket", "Traveling", "Online Games", "Photography"].map((hobby) => (
              <span key={hobby} className="skill-badge text-lg px-4 py-2">
                {hobby}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}