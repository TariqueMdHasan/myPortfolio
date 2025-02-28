import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { IoMdSunny } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";






import React, { useState } from "react";
import "./Navbar.css";
import { useTheme } from "../ThemeCotext";
import { motion, AnimatePresence } from "framer-motion"; 


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="Nav-overlay"
        ></div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="Navbar"
            initial={{ x: "-20rem" }} 
            animate={{ x: "0rem" }} 
            exit={{ x: "-20rem" }} 
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div>
            <button
                className="Nav-Close-btn"
             onClick={() => setIsOpen(false)}><ImCross /></button>
            <button onClick={toggleTheme} className="theme-btn">
              {theme === "light" ? <MdDarkMode /> : <IoMdSunny />

              }
            </button>
            </div>
            <div className="nav-list">
                
                    <div><p>Home</p></div>
                    <div><p>Introduction</p></div>
                    <div><p>Skills</p></div>
                    <div><p>Projects</p></div>
                    <div><p>Socials</p></div>
                    <div><p>Forms</p></div>
                    
                
            </div>
          </motion.div>
        )}
      </AnimatePresence>


        

      {!isOpen && (
        
            <button 
            className="Nav-Open-btn"
            
            onClick={() => setIsOpen(true)}><IoMenu /></button>
        
      )}
    </div>
  );
}

export default Navbar;

