import React from 'react'
import './Landing.css'
// import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Form from './component/Form'
import Contacts from './component/Contacts'
import GitHubContributions from './component/GitHubContributions'
import Certificates from './component/Certificates'
import Bottom from './component/Bottom'

function Landing() {
  return (
    <div className='Landing'>
      {/* <button className='nav-btn'>=</button> */}
      {/* <Navbar /> */}
      <Home />
      <Skills />
      <Projects />
      <GitHubContributions />
      <Certificates />
      <Form />
      <Contacts />
      <Bottom />
      
      
      {/* hii */}
    </div>
  )
}

export default Landing