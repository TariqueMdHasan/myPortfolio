import React from 'react'
import './Landing.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'

function Landing() {
  return (
    <div className='Landing'>
      {/* <button className='nav-btn'>=</button> */}
      <Navbar />
      <Home />
      <Skills />
      {/* hii */}
    </div>
  )
}

export default Landing