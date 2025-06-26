import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </motion.div>
  );
}