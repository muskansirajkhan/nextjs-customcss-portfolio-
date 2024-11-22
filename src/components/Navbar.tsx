import React from 'react'
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import { useState } from 'react';
import "../app/styles/navbar.css"
const Navbar = () => {
  const [isMenuopen, setisMenuopen] = useState (false)
  const toggleMenu = () =>{
    setisMenuopen (!isMenuopen)
  }
  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='navbar-brand'>Muskan Siraj</div>
      <ul className={`navbar-links ${isMenuopen ? 'open' : ''}`}>
        <li className='navbar-links'><a href='#home'>Home</a></li>
        <li className='navbar-links'><a href='#about'>About</a></li>
        <li className='navbar-links'><a href='#projects'>Projects</a></li>
        <li className='navbar-links'><a href='#skills'>Skills</a></li>
        <li className='navbar-links'><a href='#contact'>Contact</a></li>
      </ul>
<div className='navbar-menu-icon' onClick={toggleMenu}>
  {isMenuopen ? <AiOutlineClose size={30} />: 
  <AiOutlineMenu size={30} />} 
  </div>

  {
    isMenuopen && (
      <ul className='navbar-menu '>
        <li className='navbar-links'>
          <a href='#hero' onClick={toggleMenu}>Home</a>
        </li>

        <li className='navbar-links'>
          <a href='#about' onClick={toggleMenu}>About</a>
        </li>

        <li className='navbar-links'>
          <a href='#projects' onClick={toggleMenu}>Projects</a>
        </li>

        <li className='navbar-links'>
          <a href='#skills' onClick={toggleMenu}>Skills</a>
        </li>

        <li className='navbar-links'>
          <a href='#contact' onClick={toggleMenu}>Contact</a>
        </li>
      </ul>

    )
  }   
    </div>
    </div>
  )
}

export default Navbar;
