import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => (
  <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4">📞 Contact Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        I’m open to freelance, internships, or full-time roles. Leave a message below and I’ll get back to you soon!<br/>
        <b>"Engineering is achieving function while avoiding failure." — Henry Petroski</b>
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 text-left">
        <div className="space-y-4 w-full md:w-1/2">
          <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:spshushil004@gmail.com" className="text-blue-600 hover:underline hover:drop-shadow">
              spshushil004@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaPhone className="text-blue-600" />
            <a href="tel:+918144012223" className="text-blue-600 hover:underline hover:drop-shadow">
              +91 8144012223
            </a>
          </p>
          <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="text-blue-600" /> Chennai, India
          </p>
        </div>

        <form className="w-full md:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
          ></textarea>
          <button
            type="submit"
            href="mailto:spshushil004@gmail.com"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 hover:shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  </section>
);