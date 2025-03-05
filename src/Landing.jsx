import React from 'react'
import './Landing.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Form from './component/Form'
import Contacts from './component/Contacts'
import GitHubContributions from './component/GitHubContributions'

function Landing() {
  return (
    <div className='Landing'>
      {/* <button className='nav-btn'>=</button> */}
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Form />
      <Contacts />
      <GitHubContributions />
      {/* hii */}
    </div>
  )
}

export default Landing