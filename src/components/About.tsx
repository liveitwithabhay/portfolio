const About = () => {
  const skills = [
    { category: "Languages", items: ["Python", "JavaScript", "Java", "SQL", "HTML", "CSS"] },
    { category: "Full-Stack", items: ["React.js", "Node.js", "Express.js", "MongoDB", "Django"] },
    { category: "Data & BI", items: ["Power BI", "Excel", "Data Analysis", "SQL"] },
    { category: "Cloud & DevOps", items: ["AWS (EC2)", "Git", "GoDaddy Hosting"] },
    { category: "AI/ML", items: ["Generative AI", "ML Concepts", "AI Deployment"] },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Who I <span className="italic text-gradient">Am</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-6">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm an entry-level Software Engineer with a passion for building practical 
              and user-friendly applications. Currently pursuing my B.Tech in Computer Engineering 
              at SAGE University, Indore, graduating in 2026.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              My expertise spans full-stack development, data analysis, and cloud technologies. 
              I'm comfortable working on real-world projects, collaborating with teams, and 
              constantly learning new technologies to deliver efficient and scalable solutions.
            </p>
            
            {/* Education */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-display text-xl font-semibold mb-4">Education</h3>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-medium">SAGE University, Indore</h4>
                  <p className="text-muted-foreground text-sm">
                    Bachelor of Technology (Computer Engineering)
                  </p>
                  <p className="text-muted-foreground text-sm">2022 – 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="group">
                  <h4 className="font-body text-sm uppercase tracking-wider text-primary mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-secondary text-foreground text-sm font-body rounded border border-border hover:border-primary hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft skills */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="font-display text-xl font-semibold mb-6">What I Bring</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Problem Solving", "Communication", "Teamwork", "Leadership", "Adaptability", "Time Management", "Project Coordination", "Learning Mindset"].map((trait, index) => (
              <div
                key={index}
                className="p-4 bg-card border border-border rounded hover:border-primary/50 transition-colors group"
              >
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {trait}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
