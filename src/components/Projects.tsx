import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Web Application",
      subtitle: "Freelance Project",
      description:
        "Developed and deployed responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Managed end-to-end deployment, version control, and client delivery using Git and cloud hosting platforms.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
      type: "Web Development",
    },
    {
      title: "Sales Performance & Revenue Optimization",
      subtitle: "Data Analytics Project",
      description:
        "Built an end-to-end sales analytics solution using SQL, Python, and Power BI to identify multi-year sales data, uncover region-wise revenue leakage and margin inefficiencies. Developed interactive dashboards tracking YoY growth, CLV, and contribution margins.",
      tags: ["SQL", "Python", "Power BI", "Data Analysis", "Dashboards"],
      type: "Data Analytics",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="italic text-gradient">Projects</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative bg-background border border-border rounded-lg p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover-lift"
            >
              {/* Project type badge */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <span className="text-xs font-body uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>

              {/* Project number */}
              <span className="font-display text-6xl md:text-7xl font-bold text-muted/20 absolute -top-4 -left-2">
                0{index + 1}
              </span>

              <div className="relative">
                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-body bg-secondary text-foreground rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action */}
                <div className="flex items-center gap-4">
                  <button className="inline-flex items-center gap-2 text-foreground font-body text-sm hover:text-primary transition-colors group/btn">
                    View Details
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
