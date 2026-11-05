import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Projects from './pages/Projects'
import About from './pages/About'
import Education from './pages/Education'
import './App.css'

function App() {
 

  return (  
   <>
    <nav className='navbar'>
          <a className='logo' href="/">
          Alfons B-Son
          </a>
          <div className='nav-links'>
            <a href="#projects">Projects</a>
            <a href="#about">About me</a>  
            <a href="#education">Education</a>        
          </div>
        </nav>
   
   
      <LandingPage/>
      <Projects />
      <About/>
      <Education/>
      </> 
  )
}

export default App
