import React from "react";
import './About.css';
import Harmi_img from "../../assets/Harmi_img.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Harmi_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
I'm a second-year undergraduate student at Dharmsinh Desai University, currently serving as a President at the Computer Society of India (CSI). With a strong foundation in computer science and a passion for problem-solving, I'm actively working toward becoming a skilled software engineer. Alongside my core studies, I'm enthusiastically exploring the fields of Artificial Intelligence and Machine Learning, driven by curiosity and a desire to build impactful, intelligent systems. I'm always eager to learn, collaborate, and grow through hands-on projects and meaningful experiences.            </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>
            C++ : NPTEL CERTIFIED
          </h1>
        </div>
        <hr />
        <div className="about-achievement">

          <h1>
            DBMS : NPTEL CERTIFIED
          </h1>
        </div>
        <hr />
        <div className="about-achievement">

          <h1>
            DUHacks 3.0: Hackathon Participation 2025
          </h1>
        </div>
        <hr />
        <div className="about-achievement">

          <h1>
            Robofest 4.0 : Qualified for POC Level out of 160+ teams
          </h1>
        </div>
        <hr />


      </div>
    </div>


  )
}
export default About;
