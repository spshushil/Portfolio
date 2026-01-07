import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => (
  <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">🚀 Projects</h2>
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: "CCNA Network Topologies",
            description: "Designed and configured networks using RIP, OSPF, NAT, and BGP in Cisco Packet Tracer. Strong foundation in routing protocols.",
            link: "https://github.com/spshushil?tab=repositories",
            image: "https://www.cloudcomputingtraininginchennai.in/wp-content/uploads/2024/03/CCNA.jpg"
          },
          {
            title: "Trust app",
            description: "Bulid with javaScript, HTML, and CSS. Aimed to assign program and display to all the trust members.",
            link: "https://github.com/spshushil?tab=repositories",
            image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/60/33/67/6033672e-ade7-8008-c690-930aae72a73f/AppIconPROD-0-0-1x_U007ephone-0-85-220.png/1200x630wa.png"},
          {
            title: "Ansible Apache Web Server Automation on AWS EC2",
            description: "Automated Apache web server setup on AWS EC2 using Ansible. Showcases skills in infrastructure as code and cloud deployment.",
            link: "https://github.com/spshushil?tab=repositories",
            image: "https://miro.medium.com/v2/resize:fit:1200/1*LaozQKQr0RP0-r9A4brC3w.png"
          },
          {
            title: "Face Recognition using CNN",
            description: "Used Convolutional Neural Networks to recognize and classify facial features. Demonstrates deep learning application skills.",
            link: "https://github.com/spshushil?tab=repositories",
            image: "https://wallpaperaccess.com/full/13369788.png"
          },
          
        ].map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-2xl transition duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-40 object-cover"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline mt-2 inline-block">View on GitHub</a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
