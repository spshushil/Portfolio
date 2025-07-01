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
            title: "Cyberbullying Detection",
            description: "Built with Java and SVM, this model identifies harmful social media content. Real-world problem-solving with ML.",
            link: "https://github.com/spshushil?tab=repositories",
            image: "https://eduvationnet.co.za/wp-content/uploads/2017/06/cyber_bullying_wordcloud.jpg"
          },
          {
            title: "Doctor Booking Appointment App",
            description: "A full-stack application for scheduling doctor appointments. Built using MERN stack with responsive UI and authentication.",
            link: "https://github.com/sabarirajpazhani/Doctor_Appointment.git",
            image: "https://static.vecteezy.com/system/resources/previews/016/699/936/non_2x/book-doctor-appointment-online-flat-banner-template-making-visit-poster-leaflet-printable-color-designs-editable-flyer-page-with-text-space-vector.jpg"
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
