import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import Portfolio from '../assets/ProjectsPhoto/portfolioweb.jpg'
import blogweb from '../assets/ProjectsPhoto/blogweb.jpg'
import taskify from '../assets/ProjectsPhoto/taskify.jpg'

import mongodb from "../assets/skills/backend/mongodb.png";
import nodejs from "../assets/skills/backend/nodejs.png";
import express from "../assets/skills/backend/expressjs.png";
import react from "../assets/skills/frontend/react.png";

import cloudinary from "../assets/skills/tools/cloudinary.png";
import jwt from "../assets/skills/backend/jwt.png";

import git from "../assets/skills/tools/git.png";
import github from "../assets/skills/tools/github-sign.png";
import Css from "../assets/skills/frontend/css-3.png";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    tech: [react, git, github, Css],
    image: Portfolio,
    description: "A personal portfolio built with React.js and CSS, featuring smooth animations, dark mode toggle, and responsive design to showcase projects and skills.",
    link: "https://tariquehasan.vercel.app/",
  },
  {
    id: 2,
    name: "Task Manager App",
    tech: [mongodb, nodejs, express, react, jwt, git, github, Css],
    image:  taskify,
    description: "A full-stack MERN Task Manager app that allows users to create, update, and delete tasks with authentication, JWT-based security, and a modern UI for better task management.",
    link: "https://taskify-delta-three.vercel.app/",
  },
  {
    id: 3,
    name: "Blogging Platform",
    tech: [mongodb, nodejs, express, react, cloudinary, jwt, git, github, Css],
    image: blogweb,
    description: "A feature-rich blogging website built using the MERN stack, supporting user authentication, post creation with Cloudinary image uploads, comments, and a clean, responsive UI.",
    link: "https://bloggedd.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            onClick={() => window.open(project.link, "_blank")}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Project Name */}
            {/* <h3 className="project-name">{project.name}</h3> */}

            {/* Project Image */}
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-name">{project.name}</h3>

            {/* Technology Used */}
            <div className="project-tech-container">
                {project.tech.map((image, index) => (
                    <div className="project-tech" key={index}>
                    <img src={image} alt="Technology Used" />
                    </div>
                ))}
            </div>


            {/* Overlay for description */}
            <motion.div
              className="project-overlay"
              initial={{ opacity: 0, y: 16 }} // Start 1rem (16px) below
              whileHover={{ opacity: 1, y: 0 }} // Slide up smoothly
              transition={{ duration: 0.3 }}
            >
              <p className="project-description">{project.description}</p>
              <p className="project-description"><strong>Click any where to to go to the project</strong></p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



