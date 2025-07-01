import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => (
  <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
    <motion.div
      className="max-w-2xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">📞 Contact Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        I’m open to freelance, internships, or full-time roles. Feel free to reach out!
        <br />
        <b>"Engineering is achieving function while avoiding failure." — Henry Petroski</b>
      </p>

      <div className="space-y-4 text-center">
        <p className="flex justify-center items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaEnvelope className="text-blue-600" />
          <a
            href="mailto:spshushil004@gmail.com"
            className="text-blue-600 hover:underline hover:drop-shadow"
          >
            spshushil004@gmail.com
          </a>
        </p>
        <p className="flex justify-center items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaPhone className="text-blue-600" />
          <a
            href="tel:+918144012223"
            className="text-blue-600 hover:underline hover:drop-shadow"
          >
            +91 8144012223
          </a>
        </p>
        <p className="flex justify-center items-center gap-3 text-gray-700 dark:text-gray-300">
          <FaMapMarkerAlt className="text-blue-600" /> Chennai, India
        </p>
      </div>
    </motion.div>
  </section>
);
