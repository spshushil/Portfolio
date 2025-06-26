import React, { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Resume } from "./components/Resume";
import { motion } from "framer-motion";
import useSound from 'use-sound';
import clickSound from './assets/click.mp3';
import Loader from "./components/Loader";
import Particles from "react-tsparticles";
import { Footer } from "./components/Footer";



export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [play] = useSound(clickSound, { volume: 0.3 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <motion.main
      className="font-sans scroll-smooth bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Navbar toggleDarkMode={() => { setDarkMode(!darkMode); play(); }} darkMode={darkMode} />
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6 }}>
        <Hero />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.2 }}>
        <About />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.4 }}>
        <Projects />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.6 }}>
        <Resume />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.8 }}>
        <Contact />
      </motion.div>
      <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.8 }}>
        <Footer />
      </motion.div>
      <Particles
  options={{
    fullScreen: { enable: true },
    particles: {
      color: { value: "#00bfff" },
      links: { enable: true, color: "#00bfff" },
      move: { enable: true },
      number: { value: 40 },
    },
  }}
/>
    </motion.main>
  );
}
