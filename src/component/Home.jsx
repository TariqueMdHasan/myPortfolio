import React from "react";
import "./Home.css";
import MyImage from "../assets/MyPhoto.png";
import { motion } from "framer-motion";
import Resume from '../assets/Resume/MdTariqueHasan_SDE1.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Home() {
  return (
    <motion.div
      className="Home"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="Home-card" variants={containerVariants}>
        <motion.div className="Home-card-photo" variants={itemVariants}>
          <div className="Home-card-photo-container">
            <motion.img src={MyImage} alt="My Image" variants={itemVariants} />
          </div>
        </motion.div>

        <motion.div className="Home-card-mybio" variants={containerVariants}>
          <motion.h2 variants={itemVariants}>
            <strong>Hi, I'm Tarique!</strong> 👋
          </motion.h2>
          <motion.p variants={itemVariants}>
            I'm a <strong>MERN Stack Developer</strong> passionate about
            building web applications that are fast, user-friendly, and
            scalable. I love working with{" "}
            <strong>React, Node.js, Express, and MongoDB,</strong> and I'm
            always eager to learn new technologies like
            <strong> Next.js, TypeScript, and AI/ML</strong>.
          </motion.p>
          <motion.p variants={itemVariants}>
            🔹 <strong>Frontend</strong>: React.js, Next.js, TypeScript,
            Tailwind CSS
          </motion.p>
          <motion.p variants={itemVariants}>
            🔹 <strong>Backend</strong>: Node.js, Express.js, MongoDB
          </motion.p>
          <motion.p variants={itemVariants}>
            🔹 <strong>Languages</strong>: C, C++, JavaScript, Python
          </motion.p>
          <motion.p variants={itemVariants}>
            🔹 <strong>Other Skills</strong>: REST APIs, Redux Toolkit,
            Cloudinary, DSA
          </motion.p>
          <motion.p variants={itemVariants}>
            🚀 Currently, I'm working on
            <strong>building standout projects</strong> that showcase my skills
            and help me grow as a developer. Looking for opportunities where I
            can contribute, learn, and make an impact!
          </motion.p>
          <motion.p variants={itemVariants}>
            📩 <strong>Let's connect!</strong>
            <a className="Linkedin-home" href="https://www.linkedin.com/in/tariquemdhasan/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a className="Linkedin-home" href="mailto:md.th.abdi@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a className="Linkedin-home" href="tel:+917300370818" target="_blank" rel="noopener noreferrer">📞 Call Me</a>
          </motion.p>
          <motion.button
            className="Home-Download-btn"
            variants={itemVariants}
            onClick={() => {
              const link = document.createElement("a");
              link.href = Resume;
              link.download = "MdTariqueHasan.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
