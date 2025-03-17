import React from 'react'
import './Certificate.css'
import Typescript from '../assets/Certificates/TypeScript.jpg'
import JavaScript from '../assets/Certificates/JavaScript.jpg'
import WebDesign from '../assets/Certificates/WebDesign.jpg'
import Frontend from '../assets/Certificates/Frontend.jpg'
import { motion } from "framer-motion";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

function Certificates() {

    const data = [
        {
            image: Typescript,
            name: Typescript,
            CName: "TypeScript",
            url: "https://scrimba.com/certificate-cert2uNje7frykZbmrGRHSUNzoYPMvkP7NrFEHG"
        },
        {
            image: JavaScript,
            name: JavaScript,
            CName: "DSA in JavaScript",
            url: "https://www.freecodecamp.org/certification/tariquemdhasan/javascript-algorithms-and-data-structures"
        },
        {
            image: WebDesign,
            name: WebDesign,
            CName: 'Responsive Web Design',
            url: "https://www.freecodecamp.org/certification/tariquemdhasan/responsive-web-design"
            
        },
        {
            image: Frontend,
            name: Frontend,
            CName: "FrontEnd",
            url: "https://www.linkedin.com/in/tariquemdhasan/details/certifications/1733668211457/single-media-viewer/?profileId=ACoAAEYGB3ABO7TPRbD78AQVPuc3LIrqNzTYIcI"
        },
    ]


  return (
    <div className='Certificates'>
        <div className="certificate-container">
            <h2>Certificates</h2>
            <div className="certificate-container-card">
            {
                data.map((data, index)=> (
                    <motion.div
                        className="Certificate-div"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img src={data.image} alt={data.name} />
                        <h3>{data.CName}</h3>
                        <a href={data.url} target='_blank'>
                            <p>
                                Credential
                                
                            </p>
                            <BsFillArrowUpRightSquareFill />
                        </a>
                    </motion.div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Certificates