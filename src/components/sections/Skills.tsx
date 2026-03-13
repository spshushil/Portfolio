import { AnimatedSection } from "../AnimatedSection";
import { Cloud, Container, Network, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: Cloud,
    title: "Cloud",
    skills: [
      { name: "AWS EC2", level: 80 },
      { name: "S3", level: 75 },
      { name: "VPC", level: 70 },
      { name: "Lambda", level: 65 },
      { name: "CloudTrail", level: 60 },
    ],
  },
  {
    icon: Container,
    title: "DevOps",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 65 },
      { name: "Ansible", level: 70 },
      { name: "CI/CD", level: 72 },
      { name: "Nagios", level: 60 },
    ],
  },
  {
    icon: Network,
    title: "Networking",
    skills: [
      { name: "CCNA", level: 80 },
      { name: "BGP", level: 70 },
      { name: "OSPF", level: 72 },
      { name: "RIP", level: 75 },
      { name: "NAT / DHCP", level: 78 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Linux", level: 85 },
      { name: "Git", level: 80 },
    ],
  },
];

export const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary mb-2">03. Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Technical Skills</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <AnimatedSection key={cat.title} delay={ci * 0.1}>
            <div className="glass rounded-xl p-6 h-full hover:glow-sm transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-bold text-lg">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-mono text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full gradient-bg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
