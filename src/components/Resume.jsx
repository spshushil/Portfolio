import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export const Resume = () => (
  <section id="resume" className="max-w-4xl mx-auto px-6 py-16 text-center">
    <motion.h2
      className="text-3xl font-bold mb-4"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      📄 Resume
    </motion.h2>

    <motion.p
      className="text-gray-700 dark:text-gray-300 mb-6 text-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      Here’s a view of my experience — tailored for Software Development, AWS, Devops and Networking roles.
      <br />
      
    </motion.p>

    {/* Skill Tags */}
    <motion.div
      className="flex flex-wrap justify-center gap-2 mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        "💻 Linux / DevOps Enthusiast",
        "☁️ AWS (EC2, VPC, S3, Load balancer, Lambda)",
        "🌐 CCNA: BGP | OSPF | NAT",
        "🤖 Python + SVM (ML)",
        "🏆 Technical Secretary - CEBROID'24",
        "🏆 Non-Technical Secretary - Flare Fest'23 & '24",
      ].map((tag, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="px-4 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm shadow-sm"
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>

    {/* Experience Summary */}
    <motion.div
      className="text-left text-gray-700 dark:text-gray-300 space-y-4 mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-semibold text-center mb-2">⚙️ Highlights</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Built <b>Cyberbullying Detection</b> system using Java & SVM, modernized with React & Flask.</li>
        <li>Hands-on experience in <b>AWS services including EC2, VPC, Auto Scaling, Load Balancer, IAM, S3, and Lambda</b> with skills in deploying scalable web servers, automating resource creation, managing secure networks, and optimizing cloud costs through monitoring and configuration.</li>
        <li>Designed and simulated <b>CCNA Topologies</b> using Packet Tracer with BGP, OSPF, and RIP protocols.</li>
        <li>Leadership experience as <b>Technical Secretary</b> for multiple college tech fests and events.</li>
      </ul>
    </motion.div>

    {/* Resume Button */}
    <motion.a
      href="https://drive.google.com/file/d/13BZ9HBxsflo0PrO_t-OInCoZwwnwB9zU/view?usp=sharing"
      target="_blank"
      download
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.4 }}
    >
      <FaDownload /> Resume 
    </motion.a>
  </section>
);
