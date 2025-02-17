import React from "react";
import { motion } from "framer-motion";

const Moon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-content">
        <h1>The Moon</h1>
        <p>Discover Earth's natural satellite.</p>
      </div>
    </motion.div>
  );
};

export default Moon;