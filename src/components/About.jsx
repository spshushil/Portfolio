import { motion } from "framer-motion";

const skillVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export const About = () => (
  <section id="about" className="max-w-4xl mx-auto px-6 py-16">
    <motion.h2
      className="text-3xl font-bold mb-6 text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      👨‍💻 About Me
    </motion.h2>

    <motion.p
      className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      I’m <b>SP SHUSHIL</b>, a passionate Computer Science Engineering student from Chennai, India,
      with a deep interest in Cloud Development, DevOps practices, and Networking fundamentals.
    </motion.p>

    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">🎓 Education & Certifications</h3>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>B.E. Computer Science Engineering – Adhi College of Engineering and Technology (2021–2025)</li>
        <li>B.A. Hindi Lit – Dhakshin Bharath Hindi Prachar Sabha (2018–2021)</li>
        <li>CCNA Networking Projects – Topologies, RIP, OSPF, NAT, BGP</li>
        <li>MongoDB Basics – Course Completion (Naan Mudhalvan)</li>
        <li>Artificial Intelligence Bootcamp – NoviTech</li>
        
      </ul>
    </div>

    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">🛠️ Tech Stack</h3>
      <motion.ul
        className="flex flex-wrap gap-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { icon: "💻", label: "Java, Python Basics" },
          { icon: "🎨", label: "React.js, Tailwind CSS, JSX" },
          { icon: "☁️", label: "Linux, AWS, Azure (learning)" },
          { icon: "⚙️", label: "Git, GitHub, GitHub Actions" },
          { icon: "🌐", label: "CCNA: BGP, RIP, OSPF, NAT" },
          { icon: "🤖", label: "SVM, CNN (AI & ML Projects)" },
        ].map((skill, index) => (
          <motion.li
            key={index}
            variants={skillVariants}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow text-sm hover:scale-105 transition-transform"
          >
            {skill.icon} {skill.label}
          </motion.li>
        ))}
      </motion.ul>
    </div>

    <div className="mt-10 text-gray-700 dark:text-gray-300">
      <h3 className="text-2xl font-semibold mb-4">🧠 Interests</h3>
      <p>
        I’m currently diving deeper into <b>Cloud Computing</b> and <b>DevOps automation</b>.
        I also love participating in hackathons, college fests, and <b>leading tech teams as a coordinator and mentor.</b>
        My ultimate goal is to build impactful solutions that blend AI, automation, and clean UX.
      </p>
    </div>
  </section>
);
