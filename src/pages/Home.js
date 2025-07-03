import { Grid } from '@mui/material'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Contact from '../components/Contact'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Navbar from '../components/Navbar'
import FaceIcon from '@mui/icons-material/Face';
import ProjectCarousel from '../components/ProjectCarousel';

import '../css/Home.css'

function Home() {
  
  return (
    <div className = 'home'>
        
      
          <div id ='landing'  className="landing-container">
         
     
        <h1>Hello, I'm <span style={{color:'rgb(151, 64, 64)'}}>Anthony</span>.</h1>
        <h1>I'm a full stack software engineer.</h1>
        <HashLink smooth to='#projects'  id ='landing-container-btn'>View My Work <ArrowDownwardIcon/></HashLink>
          </div>  

          <div id='body'></div>
          <Navbar id ="navbar"/>
          <h1 className = 'section-header'>About</h1>
          <div id ='block-1' className="block">

          </div>
          <div className="about-me">
            <div className="about-me-info-container">
              <FaceIcon style={{ fontSize: 100, color: 'rgb(151, 64, 64)' }} />
              <div className="about-me-paragraph">
                As a seasoned Full Stack Engineer, I thrive in building scalable, efficient, and user-friendly applications that bridge the gap between frontend precision and backend robustness. My expertise in JavaScript, React, and modern web technologies allows me to craft intuitive digital experiences while ensuring seamless functionality behind the scenes. I’m passionate about solving complex problems, optimizing performance, and continuously refining my skills in an ever-evolving tech landscape. Outside of coding, I enjoy expanding my knowledge through reading, staying active, and diving into creative pursuits like playing guitar.
              </div>
            </div>
          </div>
         
          <h1 className = 'section-header' id="projects">Projects</h1>
          <ProjectCarousel />
      
         <div id="contact"></div>
         <h1 className="section-header">Contact</h1>
         <Contact />
    </div>
  )
}

export default Home