import { AnimatedSection } from "../AnimatedSection";
import { Award } from "lucide-react";

const certs = [
  "AWS, Linux, DevOps & CCNA – Besant Technology",
  "SOAR AI Prompt Engineering – HCL / Skill India",
  "AI Bootcamp – Novi Tech",
  "ICSIE International Conference",
];

const achievements = [
  "Certified Yoga Trainer (Assistant professor) – WCSC Aliyar",
  "Overall Student Secretary in college fest – Flare Fest",
  "Organizer/Student Secretary – CEBROID'24 National level Technical Symposium",
  "SIH 2024 internal participant – Student Secretary for SIH 2024 in college",
];

export const Certifications = () => (
  <section id="certifications" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Certifications */}
        <AnimatedSection>
          <p className="font-mono text-sm text-primary mb-2">05. Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications</h2>
          <div className="space-y-4">
            {certs.map((c, i) => (
              <AnimatedSection key={c} delay={i * 0.08}>
                <div className="glass rounded-xl p-4 flex items-start gap-3 hover:glow-sm transition-all duration-300">
                  <div className="p-1.5 rounded-md bg-primary/10 mt-0.5">
                    <Award className="text-primary" size={16} />
                  </div>
                  <p className="text-sm leading-relaxed">{c}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Achievements */}
        <AnimatedSection delay={0.1}>
          <p className="font-mono text-sm text-accent mb-2">06. Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((a, i) => (
              <AnimatedSection key={a} delay={i * 0.08 + 0.1}>
                <div className="glass rounded-xl p-4 flex items-start gap-3 hover:glow-sm transition-all duration-300">
                  <div className="p-1.5 rounded-md bg-accent/10 mt-0.5">
                    <Award className="text-accent" size={16} />
                  </div>
                  <p className="text-sm leading-relaxed">{a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);
