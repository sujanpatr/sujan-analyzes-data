import { GraduationCap, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-accent/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Education */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold font-poppins">Education</h3>
            </div>

            <div className="space-y-6">
              <div className="project-card">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">B.Tech in Information Technology</h4>
                  <span className="text-primary font-medium">2026</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  College of Engineering and Management, Kolaghat
                </p>
                <p className="text-sm font-medium">CGPA: 7.1 (till 6th semester)</p>
              </div>

              <div className="project-card">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Higher Secondary (XII)</h4>
                  <span className="text-primary font-medium">2022</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  Emma International Higher Secondary School
                </p>
                <p className="text-sm font-medium">Percentage: 75%</p>
              </div>

              <div className="project-card">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Secondary (X)</h4>
                  <span className="text-primary font-medium">2020</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  B.M Nodal High School
                </p>
                <p className="text-sm font-medium">Percentage: 61%</p>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-6 animate-slide-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold font-poppins">Career Objective</h3>
            </div>

            <div className="project-card">
              <p className="text-lg leading-relaxed text-muted-foreground">
                As an aspiring data analyst, I am passionate about{" "}
                <span className="text-primary font-semibold">transforming raw data into meaningful insights</span>{" "}
                that drive strategic decision-making. My goal is to leverage my skills in{" "}
                <span className="text-primary font-semibold">statistical analysis</span>,{" "}
                <span className="text-primary font-semibold">data visualization</span>, and{" "}
                <span className="text-primary font-semibold">programming</span>{" "}
                to help organizations uncover hidden patterns and trends.
              </p>
              <br />
              <p className="text-lg leading-relaxed text-muted-foreground">
                I thrive on solving complex problems through data-driven approaches and am committed to{" "}
                <span className="text-primary font-semibold">continuous learning</span>{" "}
                in this rapidly evolving field. My objective is to contribute to{" "}
                <span className="text-primary font-semibold">innovative projects</span>{" "}
                that make a real impact while growing my expertise in advanced analytics and machine learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}