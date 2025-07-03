import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

function Navbar() {

    const [className, setClassName] = useState('nav');

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 760 ? setClassName('sticky') : setClassName('nav');
      }
    };
   
  return (
    <div id='navbar' className = {className}>
        <div className="nav-option" >
            <HashLink className = 'hash-link' style={{ textDecoration:'none'}} smooth to= '#landing'>#Home</HashLink>
        </div>
        <div className="nav-option" >
            <HashLink className = 'hash-link' style={{ textDecoration:'none'}} smooth to= '#body'>#About</HashLink>
        </div>
        <div className="nav-option" >
            <HashLink className = 'hash-link' style={{ textDecoration:'none'}} smooth to= '#projects'>#Projects</HashLink>
        </div>
        <div className="nav-option" >
            <HashLink className = 'hash-link' style={{ textDecoration:'none'}} smooth to= '#contact'>#Contact</HashLink>
        </div>
       
    </div>
  )
}

export default Navbar