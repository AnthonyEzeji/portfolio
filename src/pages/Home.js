import { Button, Grid } from '@mui/material'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Contact from '../components/Contact'
import {Link } from 'react-router-dom'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Navbar from '../components/Navbar'
import FaceIcon from '@mui/icons-material/Face';

import '../css/Home.css'

function Home() {
  
  return (
    <div className = 'home'>
        
      
          <div id ='landing'  className="landing-container">
         
     
        <h1>Hello, I'm <span style={{color:'rgb(151, 64, 64)'}}>Anthony</span>.</h1>
        <h1>I'm a full stack web developer.</h1>
        <HashLink smooth to='#body'  id ='landing-container-btn'>View My Work <ArrowDownwardIcon/></HashLink>
          </div>  

          <div div id = 'body'></div>
          <Navbar id ="navbar"/>
          <h1 className = 'section-header'>About</h1>
          <div id ='block-1' className="block">

          </div>
          <div className="about-me">
       
    <div className="about-me-info-container">
    <FaceIcon style ={{fontSize:100, color:'rgb(151, 64, 64)'}}/>
    <div className="about-me-paragraph">
     
         
     Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit and playing guitar.
               </div>
    </div>
         
          <div className="skills-grid"> <h3 id = 'skills-header'>Skills</h3>
            <Grid container spacing={2} >
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt=""  />
                <p>HTML</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://www.kindpng.com/picc/m/23-237467_transparent-css3-logo-png-html5-css3-png-download.png" alt="" />
                  <p>CSS</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2}>
                  <div className="grid-option">
                  <img className = 'image'   src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt=""  />
                  <p>JavaScript</p>
                  </div>
              
                </Grid>
                <Grid item xs={4} md={2} lg={2}>
                  <div className="grid-option">
                  <img className='image'  src="https://www.jurisic.org/public/logos/node-logo.jpg" alt="" />
                  <p>NodeJS</p>
                  </div>
                
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
<img className = 'image'  src="data:image/png;base64,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" alt=""  />
                  
                  <p>MongoDB</p></div>
                  
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png" alt=""  />
                  <p>ReactJS</p>
                  </div>
               
                </Grid>
                <Grid item xs={4} md={2} lg={2}>
                  <div className="grid-option">  <img className = 'image'  src="https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg" alt="" />
                  <p>ExpressJS</p>
                  </div>
              
                </Grid>
                <Grid item xs={4} md={2} lg={2} >
                  <div className="grid-option">
                  <img className = 'image' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/r4wsu8rl4jvpjydbhooy" alt="" />
                  <p>AWS</p>
                  </div>
               
                </Grid>
                
            
           

                
                
          
           
           
           
               
            
            </Grid></div>
         
          </div>
          
          <div div id = 'projects'></div>
          <h1 className = 'section-header'>Projects</h1>
         

          <div className= 'projects'>

         
         <div className ='project' id = "project-1">
          
        
         <div className= 'project-info' >
          <div className="project-header-container">
          <h3 style ={{margin:0}}>Devly: Developer Jobs Finder Tool</h3>
          <div className="btn-container">
          <a className = 'project-btn' href="https://job-board-nodejs.vercel.app/all/all/all/all">Live App</a>
          <a className = 'project-btn' href="https://github.com/AnthonyEzeji/job-board-nodejs">View Code</a>
          </div>
          
          </div>
            
          
           <p>
            Full stack job finder tool for developers. Implements full CRUD functionality, such as creating an account, saving job listings, and deleting saved job listings. Listings are sourced through webscraping job boards with CheerioJS, a webscraping Javascript library. 
           </p>
           <p style ={{marginTop:10,marginBottom:10}}>TECH USED: <span style = {{backgroundColor:'rgb(151, 64, 64)'}}>ReactJS, NodeJS, ExpressJS, MongoDB, Vercel</span></p>
          </div>
           <img className ='project-image'  src="job-board pic 4.png" alt="" />
           </div>
    
          
           
          
           {

            //<img style={{width:'80%',margin:30, border:"20px solid black"}} src="job-board pic 2.png" alt="" />
           //<img style={{width:'80%', margin:30, border:"20px solid black"}} src="job-board pic 3.png" alt="" />
           }
<div className ='project' id = "project-2">
          
        
          <div  className="project-info">
           <div className="project-header-container">
           <h3 style ={{margin:0}}>E-Shop: Ecommerce Storefront for Electronics</h3>
           <div className="btn-container">
           <a className = 'project-btn' href="http://3.87.187.44:3000/">Live App</a>
           <a className = 'project-btn' href="https://github.com/AnthonyEzeji/ecom">View Code</a>
           </div>
           
           </div>
             
           
            <p>
             Full stack ecommerce storefront with Stripe integration. Similar to any other ecommerce storefront, E-Shop allows users to create an account, browse products, filter products by brand,  add/remove products to/from cart, and purchase cart items through a unique Stripe generated checkout session. Further implementation includes Stripe webhook integration allowing customers to view orders after they are placed.
             Products, users, and orders persist on a MongoDB database allowing for real time inventory check as well as admin functionality, such as managing orders or updating inventory.
            </p>
            <p style ={{marginTop:10,marginBottom:10}}>TECH USED: <span style = {{backgroundColor:'rgb(151, 64, 64)'}}>ReactJS, NodeJS, ExpressJS, MongoDB, AWS, Stripe</span></p>
           </div>
            <img className ='project-image'  src="econ image 3.png" alt="" />
            </div>
           </div>
      
         
          

    </div>
  )
}

export default Home