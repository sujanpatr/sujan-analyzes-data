import { BarChart3, ExternalLink, Github, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sales Data Analysis and Dashboard",
    description: "Comprehensive analysis of historical sales data with interactive visualizations and key performance indicators.",
    technologies: ["Excel", "Power BI", "Data Analysis"],
    features: [
      "Analyzed and cleaned historical sales data",
      "Created PivotTables and charts for KPIs like Total Sales and Profit Margin",
      "Built interactive Power BI dashboard with slicers and drill-downs",
      "Identified monthly trends and seasonal patterns"
    ],
    icon: BarChart3,
    status: "Completed"
  }
];

const futureProjects = [
  {
    title: "Customer Segmentation Analysis",
    description: "Machine learning-based customer segmentation using Python and clustering algorithms.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    status: "Planned"
  },
  {
    title: "Financial Dashboard",
    description: "Interactive financial analytics dashboard with real-time data visualization.",
    technologies: ["Power BI", "SQL", "DAX"],
    status: "Planned"
  },
  {
    title: "Predictive Analytics Model",
    description: "Forecasting model for business metrics using statistical methods.",
    technologies: ["Python", "Statsmodels", "Matplotlib"],
    status: "Planned"
  }
];

export function Projects() {
  return (
    <section id="projects" className="bg-accent/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 gradient-text">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world data analysis projects showcasing my skills and expertise
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">
            Featured Project
          </h3>
          
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card max-w-4xl mx-auto animate-fade-in"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl flex-shrink-0">
                  <project.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h4 className="text-2xl font-semibold font-poppins">{project.title}</h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3">Key Features:</h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Projects */}
        <div>
          <h3 className="text-2xl font-semibold font-poppins mb-8 text-center">
            Upcoming Projects
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {futureProjects.map((project, index) => (
              <div 
                key={project.title} 
                className="project-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-muted rounded-lg">
                    <Plus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
                    {project.status}
                  </span>
                </div>
                
                <h4 className="font-semibold text-lg mb-3">{project.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}