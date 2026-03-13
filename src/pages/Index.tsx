import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Global ambient background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-accent/[0.03]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-[20%] -left-32 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[160px] animate-float" />
        <div className="absolute top-[50%] -right-32 w-[400px] h-[400px] bg-accent/[0.06] rounded-full blur-[160px] animate-float [animation-delay:3s]" />
        <div className="absolute bottom-[10%] left-1/3 w-[350px] h-[350px] bg-primary/[0.04] rounded-full blur-[140px] animate-pulse-glow" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
