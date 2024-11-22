import React from "react";
import Navbar from "./Navbar";
import Heading from '../components/Heading';
import "../app/styles/hero.css"
const Hero = () => {
    return(
        <div id="hero" className="hero-container">
      
<Navbar />
<div className="hero-content">
<div className="hidden lg:block"></div>
<div className="hero-text">
<div className="hero-msin">
    <p data-aos="zoom-in-up">I'm</p>
    <p data-aos="zoom-in-up">Muskan</p>
    <p data-aos="zoom-in-up">Siraj</p>
</div>
</div>
</div>
        </div>
    )
}

export default Hero;