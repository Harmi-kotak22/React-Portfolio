import React from 'react';
import './Hero.css';
import Harmi_image2 from "../../assets/Harmi_image2.jpg";

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-image-container">
      <img src={Harmi_image2} alt="Harmi Kotak" /></div>
      <h1><span>I am Harmi Kotak,</span> Aspiring Software Engineer!</h1>
     
      <div className="hero-action">
        <a href="#contact" className="hero-connect">
            Connect With Me
        </a>
        <a
          href="https://drive.google.com/file/d/15NJEWErE0oUilWrLYQIaen2-nsHXvdv7/view?usp=sharing" // Replace with your actual link
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
