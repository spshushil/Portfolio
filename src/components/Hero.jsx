import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10 text-center md:text-left"
  >
    {/* Text Section */}
    <motion.div
      className="w-full md:w-5/2"
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
        className="text-xl md:text-2xl font-semibold items-center justify-center text-blue-600 mb-4"
      />

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        The visionary behind <strong>Cyberbeam 🌐</strong>, an exceptional website offering an
        in-depth look into my profile and an impressive showcase of my portfolio.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">
        📍 <b>Chennai, India</b>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="mailto:spshushil004@gmail.com"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          <FaEnvelope /> Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/sp-shushil-876149230"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/spshushil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          <FaGithub /> GitHub
        </a>
      </div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-1 shadow-xl rounded-xl overflow-hidden">
        <img
          src="/profile.jpg"
          alt="SP Shushil Profile"
          className="w-70 h-70 object-cover rounded-md"
        />
      </div>
    </motion.div>
  </section>
);
