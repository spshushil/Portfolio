import { AnimatedSection } from "../AnimatedSection";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const responsibilities = [
  "Assisted in deploying cloud-based applications",
  "Worked with Linux server configuration",
  "Learned infrastructure automation concepts",
  "Practiced monitoring and deployment workflows",
  "Supported DevOps pipelines and CI/CD processes",
];

const tech = ["Linux", "AWS", "Jenkins", "Maven", "Git"];
const courseTech = ["AWS", "Linux", "DevOps", "CCNA"];

export const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary mb-2">02. Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Internship & Learning Experience
        </h2>
      </AnimatedSection>

      <div className="relative pl-8 border-l-2 border-primary/30 space-y-10">

        {/* Internship Studio */}
        <AnimatedSection delay={0.15}>
          <div className="relative">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full gradient-bg glow-sm" />

            <div className="glass rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="text-primary" size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    DevOps / Cloud Internship
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Internship Studio
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> Mar 2026 – Present
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> Pune
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                Worked on cloud infrastructure and automation tasks while
                learning modern DevOps practices. Gained hands-on experience in
                configuring Linux servers, managing cloud resources, and
                automating system setups.
              </p>

              <div className="mb-5">
                <p className="text-sm font-semibold mb-3">
                  Key Responsibilities
                </p>

                <ul className="space-y-2">
                  {responsibilities.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Besant Technologies */}
        <AnimatedSection delay={0.25}>
          <div className="relative">
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full gradient-bg glow-sm" />

            <div className="glass rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="text-primary" size={20} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Cloud Computing Training
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono">
                    Besant Technologies
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> Feb 2025 – Feb 2026
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> Chennai
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-5 leading-relaxed">
                Completed professional training in Cloud Computing covering AWS,
                Linux administration, DevOps fundamentals, and networking
                concepts including CCNA. Gained practical knowledge in cloud
                services, server management, automation workflows, and
                infrastructure deployment.
              </p>

              <div className="flex flex-wrap gap-2">
                {courseTech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  </section>
);