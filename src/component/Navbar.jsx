// import { IoMenu } from "react-icons/io5";
// import { ImCross } from "react-icons/im";
// import { IoMdSunny } from "react-icons/io";
// import { MdDarkMode } from "react-icons/md";






// import React, { useState } from "react";
// import "./Navbar.css";
// import { useTheme } from "../ThemeCotext";
// import { motion, AnimatePresence } from "framer-motion"; 


// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div>
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="Nav-overlay"
//         ></div>
//       )}

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="Navbar"
//             initial={{ x: "-20rem" }} 
//             animate={{ x: "0rem" }} 
//             exit={{ x: "-20rem" }} 
//             transition={{ type: "tween", duration: 0.3 }}
//           >
//             <div>
//             <button
//                 className="Nav-Close-btn"
//              onClick={() => setIsOpen(false)}><ImCross /></button>
//             <button onClick={toggleTheme} className="theme-btn">
//               {theme === "light" ? <MdDarkMode /> : <IoMdSunny />

//               }
//             </button>
//             </div>
//             <div className="nav-list">
                
//                     <div><p>Home</p></div>
//                     <div><p>Introduction</p></div>
//                     <div><p>Skills</p></div>
//                     <div><p>Projects</p></div>
//                     <div><p>Socials</p></div>
//                     <div><p>Forms</p></div>
                    
                
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>


        

//       {!isOpen && (
        
//             <button 
//             className="Nav-Open-btn"
            
//             onClick={() => setIsOpen(true)}><IoMenu /></button>
        
//       )}
//     </div>
//   );
// }

// export default Navbar;








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


            {/* <div className="nav-list">
              {["Home", "Introduction", "Skills", "Projects", "Socials", "Forms"].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <p>{item}</p>
                </motion.div>
              ))}
            </div> */}
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

