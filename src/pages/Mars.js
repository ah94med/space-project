import React from "react";
import { motion } from "framer-motion";

const Mars = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-content">
        <h1>Mars</h1>
        <p>Explore the Red Planet and its mysteries.</p>
      </div>
    </motion.div>
  );
};

export default Mars;