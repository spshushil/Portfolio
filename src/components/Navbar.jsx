import { useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["about", "projects", "resume", "contact"];

  return (
    <motion.header
      className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          className="text-xl font-bold text-gray-900 dark:text-white"
          href="#hero"
        >
          SP SHUSHIL
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 transition duration-300 hover:drop-shadow-sm"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white transition duration-300"
              title="Toggle theme"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
            title="Toggle theme"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-800 dark:text-white"
            title="Menu"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 transition duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
};
