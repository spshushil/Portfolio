import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";


export const Navbar = ({ toggleDarkMode, darkMode }) => (
  <motion.header
    className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300"
    initial={{ y: -60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <a className="text-xl font-bold text-gray-900 dark:text-white" href="./About,jsx" img="/logo.png">SP SHUSHIL</a>
      <ul className="flex items-center space-x-6 text-sm font-medium">
        {["about", "projects", "resume", "contact"].map((section) => (
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
    </nav>
  </motion.header>
);
