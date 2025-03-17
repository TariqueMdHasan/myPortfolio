

import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";

import React, { useState } from "react";
import "./Navbar.css";
import { useTheme } from "../ThemeCotext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = {
    Home: '/',
    Introduction: '/Introduction',
    Skills: '/Skills',
    Projects: '/Projects',
    Contact: '/contact',
    Connect: '/Connect',
    Certificates: '/Certificates'
  }


  const navbarVariants = {
    hidden: { x: "-20rem" },
    visible: { x: "0rem", 
    transition: { type: "tween", duration: 0.3, staggerChildren: 0.2 } },
    exit: { x: "-20rem" },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <div>
      {isOpen && <div onClick={() => setIsOpen(false)} className="Nav-overlay"></div>}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="Navbar"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >

            <motion.div variants={itemVariants}>
              <button className="Nav-Close-btn" onClick={() => setIsOpen(false)}>
                <ImCross />
              </button>
              <button onClick={toggleTheme} className="theme-btn">
                {theme === "light" ? <MdDarkMode /> : <IoMdSunny />}
              </button>
            </motion.div>


            <div className="nav-list">
              {["Home", "Introduction","Skills", "Projects", "Certificates", "Contact", "Connect"].map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  onClick={()=> navigate(navLinks[item])}
                >
                  <p>{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {!isOpen && (
        <button className="Nav-Open-btn" onClick={() => setIsOpen(true)}>
          <IoMenu />
        </button>
      )}
    </div>
  );
}

export default Navbar;

