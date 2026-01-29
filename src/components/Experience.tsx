const Experience = () => {
  const experiences = [
    {
      title: "Freelancer",
      role: "Full Stack Developer",
      location: "Remote",
      period: "Sep 2025 – Present",
      description: [
        "Developed and deployed responsive full-stack web applications for clients using React.js, Node.js, Express.js, and MongoDB.",
        "Built RESTful APIs, integrated databases, and ensured seamless frontend–backend communication.",
        "Managed end-to-end project delivery, including deployment, version control, and client handover.",
      ],
      current: true,
    },
    {
      title: "INFOTACT Solutions",
      role: "Associate L1 (Data Analytics)",
      location: "Bengaluru, Karnataka",
      period: "July 2025 – September 2025",
      description: [
        "Collaborated with analytics and project teams to collect, clean and analyze data from various sources.",
        "Performed exploratory data analysis using Python, R, SQL, and Excel to uncover patterns and trends.",
        "Ensured data integrity, security, and compliance by following data governance policies throughout analytics tasks.",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            Career
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work <span className="italic text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    exp.current
                      ? "bg-primary border-primary"
                      : "bg-background border-muted-foreground"
                  }`}
                />

                {/* Content card */}
                <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/30 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold">
                        {exp.title}
                      </h3>
                      <p className="font-body text-primary font-medium">{exp.role}</p>
                      <p className="font-body text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.current && (
                        <span className="px-2 py-0.5 text-xs font-body bg-primary/20 text-primary rounded-full">
                          Current
                        </span>
                      )}
                      <span className="font-body text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 font-body text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
