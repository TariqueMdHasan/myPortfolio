import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './component/Navbar'
// import Home from './component/Home'
import Landing from './Landing'


import Navbar from './component/Navbar'
import Home from './component/Home'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Form from './component/Form'
import Connect from './component/Contacts'
import GitHubContributions from './component/GitHubContributions'
import Certificates from './component/Certificates'

function App() {
  return (
    <Router>
      < Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Introduction' element={<Home />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/contact' element={<Form />} />
        <Route path='/Connect' element={<Connect />} />
        <Route path='/GitHubContributions' element={<GitHubContributions />} />
        <Route path='/Certificates' element={<Certificates />} />
      </Routes>
    </Router>
  )
}

export default App