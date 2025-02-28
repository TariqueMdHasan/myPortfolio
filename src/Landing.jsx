import React from 'react'
import './Landing.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'
import Projects from './component/Projects'

function Landing() {
  return (
    <div className='Landing'>
      {/* <button className='nav-btn'>=</button> */}
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      {/* hii */}
    </div>
  )
}

export default Landing