import { AnimatedSection } from "../AnimatedSection";
import { GraduationCap, Cloud, Server, Code2 } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "CSE Graduate", desc: "Adhi College of Engineering" },
  { icon: Cloud, label: "Cloud Computing", desc: "AWS, Infrastructure" },
  { icon: Server, label: "DevOps", desc: "Docker, K8s, CI/CD" },
  { icon: Code2, label: "Backend Dev", desc: "APIs, Automation" },
];

export const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary mb-2">01. About</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Computer Science Engineering graduate from Adhi College of Engineering and Technology
              with strong knowledge in Cloud Computing, DevOps tools, Linux, and Networking.
            </p>
            <p>
              Experienced in building backend APIs and implementing automation solutions. Skilled in
              working with cloud platforms and infrastructure tools while continuously learning modern
              technologies like AWS, Docker, Kubernetes, and Infrastructure as Code.
            </p>
            <p>
              Passionate about designing scalable systems, improving deployment pipelines, and
              building reliable cloud-native applications.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="glass rounded-xl p-5 hover:glow-sm transition-all duration-300 group"
              >
                <h.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={24} />
                <p className="font-semibold text-sm mb-1">{h.label}</p>
                <p className="text-xs text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);
