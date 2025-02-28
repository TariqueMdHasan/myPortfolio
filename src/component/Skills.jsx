import React from 'react'
import './Skills.css'

import Bootstrap from '../assets/skills/frontend/bootstrap.png'
import Css from '../assets/skills/frontend/css-3.png'
import html from '../assets/skills/frontend/html.png'
import javascript from '../assets/skills/frontend/java-script.png'
import nextjs from '../assets/skills/frontend/nextjs.png'
import react from '../assets/skills/frontend/react.png'
import tailwind from '../assets/skills/frontend/tailwind.png'
import typescript from '../assets/skills/frontend/typescript.png'

import nodejs from '../assets/skills/backend/nodejs.png'
import express from '../assets/skills/backend/expressjs.png'
import jwt from '../assets/skills/backend/jwt.png'
import mongodb from '../assets/skills/backend/mongodb.png'
import postgre from '../assets/skills/backend/postgreSQL.png'
import api from '../assets/skills/backend/cloud-api.png'

import cloudinary from '../assets/skills/tools/cloudinary.png'
import git from '../assets/skills/tools/git.png'
import github from '../assets/skills/tools/github-sign.png'
import gitlab from '../assets/skills/tools/gitlab.png'
import postman from '../assets/skills/tools/postman.png'
import vscode from '../assets/skills/tools/vscode.png'

import c from '../assets/skills/languages/C.png'
import Cpp from '../assets/skills/languages/c++.png'
import python from '../assets/skills/languages/python.png'

import a11y from '../assets/skills/others/a11y.png'
import dsa from '../assets/skills/others/dsa.png'
import redux from '../assets/skills/others/redux.png'

import ai from '../assets/skills/learning/ai.png'
import angular from '../assets/skills/learning/angular.png'
import ml from '../assets/skills/learning/ml.png'
import reactNative from '../assets/skills/learning/reactNative.png'



function Skills() {
  return (
    <div className='Skills' id='Skills'>
        <div className="Skills-container">
            <h2>My Skills</h2>
            <div className="Skills-container-kid">
            
            
                <div className="Skills-container-frontend skills-container-boxes">
                    <h3>Frontend 🎨</h3>
                    <div>
                        <img src={html} alt="dgsa" />
                        <img src={Css} alt="dgsa" />
                        <img src={javascript} alt="dgsa" />
                        <img src={Bootstrap} alt="dgsa" />
                        <img src={nextjs} alt="dgsa" />
                        <img src={react} alt="dgsa" />
                        <img src={tailwind} alt="dgsa" />
                        <img src={typescript} alt="dgsa" />
                    </div>
                </div>
                <div className="Skills-container-backend skills-container-boxes">
                    <h3>Backend ⚙️</h3>
                    <div>
                        <img src={nodejs} alt="dgsa" />
                        <img src={express} alt="dgsa" />
                        <img src={mongodb} alt="dgsa" />
                        <img src={jwt} alt="dgsa" />
                        <img src={postgre} alt="dgsa" />
                        <img src={api} alt="dgsa" />
                    </div>
                </div>
                <div className="Skills-container-language skills-container-boxes">
                    <h3>Tools & DevOps 🛠️</h3>
                    <div>
                        <img src={git} alt="dgsa" />
                        <img src={github} alt="dgsa" />
                        <img src={cloudinary} alt="dgsa" />
                        <img src={gitlab} alt="dgsa" />
                        <img src={postman} alt="dgsa" />
                        <img src={vscode} alt="dgsa" />
                    </div>
                </div>
                <div className="Skills-container-tools skills-container-boxes">
                    <h3>Languages 👨🏻‍💻 </h3>
                    <div>
                        <img src={c} alt="dgsa" />
                        <img src={Cpp} alt="dgsa" />
                        <img src={python} alt="dgsa" />
                        <img src={javascript} alt="dgsa" />
                    </div>
                </div>
                <div className="Skills-container-others skills-container-boxes">
                    <h3>Other Skills 🚀</h3>
                    <div>
                        <img src={a11y} alt="dgsa" />
                        <img src={dsa} alt="dgsa" />
                        <img src={redux} alt="dgsa" />
                    </div>
                </div>
                <div className="Skills-container-learning skills-container-boxes">
                    <h3>Learning </h3>
                    <div>
                        <img src={ai} alt="dgsa" />
                        <img src={angular} alt="dgsa" />
                        <img src={ml} alt="dgsa" />
                        <img src={reactNative} alt="dgsa" />
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills