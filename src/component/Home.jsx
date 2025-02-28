import React from 'react'
import './Home.css'
import MyImage from '../assets/MyPhoto.png'

function Home() {
  return (
    <div className='Home'>
        <div className='Home-card'>
            <div className='Home-card-photo'>
                <div className='Home-card-photo-container'>
                    <img src={MyImage} alt="My Image" />
                </div>
            </div>
            <div className='Home-card-mybio'>
                <h2><strong>Hi, I'm Tarique!</strong> 👋</h2>
                <p>I'm a <strong>MERN Stack Developer</strong> passionate about building web applications that are 
                    fast, user-friendly, and scalable. I love working with <strong>React, Node.js, Express,
                    and MongoDB,</strong> and I'm always eager to learn new technologies like 
                    <strong>Next.js, TypeScript, and AI/ML</strong>.
                </p>
                <p>🔹 <strong>Frontend</strong>: React.js, Next.js, TypeScript, Tailwind CSS</p>
                <p>🔹 <strong>Backend</strong>: Node.js, Express.js, MongoDB</p>
                <p>🔹 <strong>Languages</strong>: C, C++, JavaScript, Python</p>
                <p>🔹 <strong>Other Skills</strong>: REST APIs, Redux Toolkit, Cloudinary, DSA</p>
                <p>🚀 Currently, I'm working on <strong>building standout projects</strong> that 
                showcase my skills and help me grow as a developer. Looking for 
                opportunities where I can contribute, learn, and make an impact!
                </p>
                <p>📩 <strong>Let's connect!</strong> [Add your email or social links here]</p>
                <button className='Home-Download-btn'>Download</button>
            </div>
        </div>
    </div>
  )
}

export default Home