import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { CloudNetworkBackground } from "../CloudNetworkBackdroud";
import profileImg from "@/assets/profile.jpg";

const roles = ["Cloud Engineer", "DevOps Enthusiast", "AWS Specialist", "Business Associate"];

const useTypingAnimation = (
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1500
) => {
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
    <section className="pt-24 md:pt-32 min-h-screen flex items-center justify-center relative overflow-hidden">
      <CloudNetworkBackground />

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift"
          style={{ backgroundSize: "400% 400%" }}
        />

        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-80 md:h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] animate-float" />

        {/* Particles */}
        <div className="absolute top-[10%] right-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-accent/30 rounded-full animate-float" />
        <div className="absolute bottom-[20%] right-[30%] w-1 h-1 bg-primary/40 rounded-full animate-float" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top & Bottom fade */}
      <div className="absolute top-0 inset-x-0 h-24 md:h-32 bg-gradient-to-b from-background to-transparent -z-10" />
      <div className="absolute bottom-0 inset-x-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent -z-10" />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 flex justify-center"
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-primary/40 ring-offset-4 ring-offset-background hover:ring-primary/80 hover:scale-105 transition-all duration-500">
              <img
                src={profileImg}
                alt="SP Shushil"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Status */}
          <div className="mb-4 sm:mb-6">
            <span className="font-mono text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass border border-primary/30 text-primary">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="gradient-text">SP Shushil</span>
          </h1>

          {/* Typing */}
          <div className="font-mono text-sm sm:text-base md:text-lg text-muted-foreground mb-6 min-h-[32px]">
            <span className="text-primary">{typedText}</span>
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse align-middle" />
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
            Motivated Computer Science graduate with strong fundamentals in cloud computing,
            networking, and backend development. Passionate about building scalable systems,
            automating infrastructure, and continuously learning modern DevOps and cloud technologies.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            View Projects <ArrowDown size={16} />
          </a>

          <a
            href="https://drive.google.com/file/d/1kF56a0qdSJUcAMffOa-51kxKrmvHGorj/view?usp=sharing"
            className="glass px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <FileDown size={16} /> View Resume
          </a>

          <a
            href="#contact"
            className="border border-border px-6 py-3 rounded-lg font-medium text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Mail size={16} /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};