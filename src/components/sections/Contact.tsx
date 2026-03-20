import { AnimatedSection } from "../AnimatedSection";
import { Mail, Phone, Github, Linkedin, FileDown } from "lucide-react";

export const Contact = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-2xl mx-auto text-center">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary mb-2">07. Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to
          say hi, feel free to reach out!
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="glass rounded-xl p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:spshushil004@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} /> spshushil004@gmail.com
            </a>
            <a
              href="tel:+918144012223"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} /> +91 8144012223
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/spshushil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:bg-surface-hover hover:text-primary transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/spshushil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:bg-surface-hover hover:text-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1kF56a0qdSJUcAMffOa-51kxKrmvHGorj/view?usp=sharing"
              download
              className="p-3 glass rounded-lg hover:bg-surface-hover hover:text-primary transition-all"
              aria-label="Download Resume"
            >
              <FileDown size={20} />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
