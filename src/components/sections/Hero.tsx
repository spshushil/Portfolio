import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { CloudNetworkBackground } from "../CloudNetworkBackdroud";
import profileImg from "@/assets/profile.jpg";

  
const roles = ["Cloud Engineer", "DevOps Enthusiast", "AWS Specialist", "Business Associate"];

const useTypingAnimation = (words: string[], typingSpeed = 100, deletingSpeed = 60, pauseTime = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

export const Hero = () => {
  const typedText = useTypingAnimation(roles);

  return (
    <section className="pt-32 min-h-screen flex items-center justify-center">
      <CloudNetworkBackground />
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift" style={{ backgroundSize: "400% 400%" }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] animate-float" />
        {/* Subtle moving particles */}
        <div className="absolute top-[10%] right-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float [animation-delay:0.5s]" />
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-accent/30 rounded-full animate-float [animation-delay:2s]" />
        <div className="absolute bottom-[20%] right-[30%] w-1 h-1 bg-primary/40 rounded-full animate-float [animation-delay:3s]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top gradient fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent -z-10" />
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent -z-10" />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-primary/40 ring-offset-4 ring-offset-background transition-all duration-500 hover:ring-primary/80 hover:ring-4 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <img src={profileImg} alt="SP Shushil" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="font-mono text-sm px-4 py-2 rounded-full glass border border-primary/30 text-primary">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="gradient-text">SP Shushil</span>
          </h1>

          <div className="font-mono text-base md:text-lg text-muted-foreground mb-6 h-8">
            <span className="text-primary">{typedText}</span>
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse align-middle" />
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-10">
            Motivated Computer Science graduate with strong fundamentals in cloud computing,
            networking, and backend development. Passionate about building scalable systems,
            automating infrastructure, and continuously learning modern DevOps and cloud technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-opacity glow-sm"
          >
            View Projects <ArrowDown size={16} />
          </a>
          <a
            href="/Profile_Shushil.pdf"
            download
            className="glass px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-surface-hover transition-colors"
          >
            <FileDown size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-surface transition-colors"
          >
            <Mail size={16} /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};
