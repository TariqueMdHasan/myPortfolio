import React from "react";
import "./Bottom.css";
import { motion } from "framer-motion";

function Bottom() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut"  } },
  };

  return (
    <motion.div
      className="Bottom"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p variants={itemVariants}>
        "I’m currently looking for opportunities in Frontend Development / MERN
        Stack Development. If you think I’d be a good fit for your team, let’s
        connect"
      </motion.p>
      <motion.p variants={itemVariants}>
        This website is open-source. Feel free to check out the code on
        <a
          href="https://github.com/TariqueMdHasan/myPortfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </motion.p>
      <motion.p variants={itemVariants}>
        © 2025 Tarique | Designed & Developed with ❤️ | All Rights Reserved.
      </motion.p>
    </motion.div>
  );
}

export default Bottom;
