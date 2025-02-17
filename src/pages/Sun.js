import React from "react";
import { motion } from "framer-motion";

const Sun = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-content">
        <h1>The Sun</h1>
        <p>Learn about the star at the center of our solar system.</p>
      </div>
    </motion.div>
  );
};

export default Sun;