import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-19 text-center md:text-left"
  >
    <motion.div
      className="md:w-4/2"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        👋 Hi, I'm <span className="text-blue-600">SP SHUSHIL</span>
      </h1>

      <TypeAnimation
        sequence={[
          "Computer Science Engineer",
          2000,
          "CCNA Architect",
          2000,
          "DevOps Enthusiast",
          2000,
        ]}
        wrapper="p"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl font-semibold text-blue-600 mb-4"
      />

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
       The visionary behind Cyberbeam 🌐, an exceptional website offering an in-depth look into my profile and an impressive showcase of my portfolio.
      </p>

      <p className="text-sm text-black-500 dark:text-black-400 mb-10"><b>📍 Chennai, India</b></p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="https://spshushil004@gmail.com"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 hover:drop-shadow-lg"
        >
          <FaEnvelope /> Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/sp-shushil-876149230"
          target="_blank"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 hover:drop-shadow-lg"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/spshushil"
          target="_blank"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 hover:drop-shadow-lg"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </motion.div>

    <motion.div
  className="md:w-1/2 flex justify-center"
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div className="relative w-56 h-65 md:w-72 md:h-76 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 shadow-xl overflow-hidden rounded-xl">
    <img
      src="/profile.jpg"
      alt="SP Shushil Profile"
      className="w-full h-70 object-cover rounded-md"
    />
  </div>
</motion.div>

<div className="relative">
  <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24" viewBox="0 0 140 320">
    <path
      fill="#e0f2fe"
      fillOpacity="1"
      d="M0,64L60,80C120,96,240,128,360,128C480,128,600,96,720,85.3C840,75,960,85,1080,96C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
</div>

  </section>
);
