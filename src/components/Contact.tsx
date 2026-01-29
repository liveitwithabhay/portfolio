import { Mail, Phone, MapPin, Github, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm uppercase tracking-widest mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Work <span className="italic text-gradient">Together</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="mailto:gaurabhay010@gmail.com"
            className="group bg-background border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all hover-lift"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Email</h3>
            <p className="font-body text-sm text-muted-foreground">
              gaurabhay010@gmail.com
            </p>
          </a>

          <a
            href="tel:+917470674448"
            className="group bg-background border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all hover-lift"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Phone</h3>
            <p className="font-body text-sm text-muted-foreground">
              +91-7470674448
            </p>
          </a>

          <div className="bg-background border border-border rounded-lg p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">Location</h3>
            <p className="font-body text-sm text-muted-foreground">
              Indore, India
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="mailto:gaurabhay010@gmail.com"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded font-body font-medium text-lg hover:bg-primary/90 transition-all glow-accent"
          >
            Say Hello
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Social links */}
        <div className="mt-16 pt-8 border-t border-border flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Github className="w-5 h-5" />
            <span className="font-body text-sm">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
