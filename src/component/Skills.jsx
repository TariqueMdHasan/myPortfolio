
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";


import Bootstrap from "../assets/skills/frontend/bootstrap.png";
import Css from "../assets/skills/frontend/css-3.png";
import html from "../assets/skills/frontend/html.png";
import javascript from "../assets/skills/frontend/java-script.png";
import nextjs from "../assets/skills/frontend/nextjs.png";
import react from "../assets/skills/frontend/react.png";
import tailwind from "../assets/skills/frontend/tailwind.png";
import typescript from "../assets/skills/frontend/typescript.png";

import nodejs from "../assets/skills/backend/nodejs.png";
import express from "../assets/skills/backend/expressjs.png";
import jwt from "../assets/skills/backend/jwt.png";
import mongodb from "../assets/skills/backend/mongodb.png";
import postgre from "../assets/skills/backend/postgreSQL.png";
import api from "../assets/skills/backend/cloud-api.png";

import cloudinary from "../assets/skills/tools/cloudinary.png";
import git from "../assets/skills/tools/git.png";
import github from "../assets/skills/tools/github-sign.png";
import gitlab from "../assets/skills/tools/gitlab.png";
import postman from "../assets/skills/tools/postman.png";
import vscode from "../assets/skills/tools/vscode.png";

import c from "../assets/skills/languages/C.png";
import Cpp from "../assets/skills/languages/c++.png";
import python from "../assets/skills/languages/python.png";

import a11y from "../assets/skills/others/a11y.png";
import dsa from "../assets/skills/others/dsa.png";
import redux from "../assets/skills/others/redux.png";

import ai from "../assets/skills/learning/ai.png";
import angular from "../assets/skills/learning/angular.png";
import ml from "../assets/skills/learning/ml.png";
import reactNative from "../assets/skills/learning/reactNative.png";

function Skills() {
  

  const skills = [
    {
      title: "Frontend 🎨",
      images: [
        { src: html, name: "HTML" },
        { src: Css, name: "CSS" },
        { src: javascript, name: "JavaScript" },
        { src: Bootstrap, name: "Bootstrap" },
        { src: nextjs, name: "Next.js" },
        { src: react, name: "React.js" },
        { src: tailwind, name: "Tailwind CSS" },
        { src: typescript, name: "TypeScript" },
      ],
    },
    {
      title: "Backend ⚙️",
      images: [
        { src: nodejs, name: "Node.js" },
        { src: express, name: "Express.js" },
        { src: mongodb, name: "MongoDB" },
        { src: jwt, name: "JWT" },
        { src: postgre, name: "PostgreSQL" },
        { src: api, name: "REST API" },
      ],
    },
    {
      title: "Tools & DevOps 🛠️",
      images: [
        { src: git, name: "Git" },
        { src: github, name: "GitHub" },
        { src: cloudinary, name: "Cloudinary" },
        { src: gitlab, name: "GitLab" },
        { src: postman, name: "Postman" },
        { src: vscode, name: "VS Code" },
      ],
    },
    {
      title: "Languages 👨🏻‍💻",
      images: [
        { src: c, name: "C" },
        { src: Cpp, name: "C++" },
        { src: python, name: "Python" },
        { src: javascript, name: "JavaScript" },
      ],
    },
    {
      title: "Other Skills 🚀",
      images: [
        { src: a11y, name: "Accessibility (a11y)" },
        { src: dsa, name: "Data Structures & Algorithms" },
        { src: redux, name: "Redux" },
      ],
    },
    {
      title: "Learning",
      images: [
        { src: ai, name: "Artificial Intelligence" },
        { src: angular, name: "Angular" },
        { src: ml, name: "Machine Learning" },
        { src: reactNative, name: "React Native" },
      ],
    },
  ];
  

  return (
    <div className="Skills" id="Skills">
      <div className="Skills-container">
        <h2>My Skills</h2>
        <div className="Skills-container-kid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skills-container-boxes"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{skill.title}</h3>
              <div>
                {skill.images.map((img, i) => (
                  <figure>
                    <img key={i} src={img.src} alt={img.name} />
                    <figcaption>{img.name}</figcaption>
                  </figure>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
