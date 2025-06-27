import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-6 py-8 mt-20 border-t border-gray-300 dark:border-gray-700">
    <motion.div
      className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Left side */}
      <div >
        <h4 className="text-lg font-semibold" >Cyber Beam</h4>
        <p className="text-sm">Crafted by SP SHUSHIL • Chennai, India</p>
      </div>

      {/* Social icons */}
      <div className="flex gap-4 text-xl">
        <a
          href="mailto:spshushil004@gmail.com"
          className="hover:text-blue-600 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/sp-shushil-876149230"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/spshushil"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </motion.div>

    {/* Bottom line */}
    <motion.p
      className="text-center text-sm mt-6 text-gray-500 dark:text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <b>&copy; {new Date().getFullYear()} SP SHUSHIL. All rights reserved.</b>
    </motion.p>
  </footer>
);
