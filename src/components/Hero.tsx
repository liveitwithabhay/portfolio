import { ArrowDown, Github, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl">
        {/* Greeting */}
        <p className="text-muted-foreground font-body text-lg md:text-xl mb-4 opacity-0 animate-fade-up">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up stagger-1">
          <span className="scribble-underline">Abhay</span>{" "}
          <span className="text-gradient italic">Gaur</span>
        </h1>

        {/* Title */}
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 opacity-0 animate-fade-up stagger-2">
          Software Engineer & <span className="text-primary">Full-Stack Developer</span>
        </h2>

        {/* Description */}
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-up stagger-3">
          Passionate about building practical and user-friendly applications. 
          Specialized in full-stack development, data analysis, and cloud technologies.
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-12 opacity-0 animate-fade-up stagger-4">
          <a
            href="mailto:gaurabhay010@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-body text-sm md:text-base">gaurabhay010@gmail.com</span>
          </a>
          <a
            href="tel:+917470674448"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-body text-sm md:text-base">+91-7470674448</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm md:text-base">Indore, India</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-5">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded font-body font-medium hover:bg-primary/90 transition-all glow-accent"
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded font-body font-medium hover:border-primary hover:text-primary transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-body uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
