import React from 'react'
import './Contacts.css'
import x from '../assets/socials/x.png'
import linkedin from '../assets/socials/linkedin.png'
import github from '../assets/socials/github.png'

const Contacts = () => {
    
  return (
    <div className='Contacts'>
        <div className='Contacts-container'> 
            <a href="https://github.com/TariqueMdHasan">
                <img src={x} alt="x" />
            </a>
            <a href="https://www.linkedin.com/in/tariquemdhasan/">
                <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/TariqueMdHasan">
                <img src={github} alt="github" />
            </a>
            
            
            
        </div>
    </div>
  )
}

export default Contacts