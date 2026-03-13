import { motion } from "framer-motion";

export const CloudNetworkBackground = () => {
  const nodes = [
    { top: "20%", left: "15%" },
    { top: "40%", left: "70%" },
    { top: "65%", left: "25%" },
    { top: "30%", left: "50%" },
    { top: "75%", left: "80%" }
  ];

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />

      {/* Network nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary rounded-full"
          style={{ top: node.top, left: node.left }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <line x1="15%" y1="20%" x2="50%" y2="30%" stroke="white" strokeWidth="1" />
        <line x1="50%" y1="30%" x2="70%" y2="40%" stroke="white" strokeWidth="1" />
        <line x1="25%" y1="65%" x2="15%" y2="20%" stroke="white" strokeWidth="1" />
        <line x1="80%" y1="75%" x2="70%" y2="40%" stroke="white" strokeWidth="1" />
      </svg>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            y: [0, -30, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity
          }}
        />
      ))}
    </div>
  );
};