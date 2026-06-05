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
  I'm Harmi Kotak — a final-year Computer Engineering student at Dharmsinh Desai University (DDU) and the former President of the CSI DDU Chapter. I build full-stack web applications, AI/ML models, and mobile apps, and I enjoy leading teams, speaking at events, and launching projects under tight deadlines. My hands-on work has earned Top 6 at the GDG Rajkot Hackathon (65+ teams) and selection among the Top 150 teams at Robofest, where I advanced to the prototyping round. I also led technical initiatives, workshops, and collaborations during my CSI tenure. I maintain a CPI of 9.10, love learning through projects and hackathons, and I'm open to freelancing, collaborations, and SDE roles — always excited to connect and build things that matter.
              </p>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>C++ — NPTEL Certified</h3>
            <p>Completed certification to strengthen core programming skills.</p>
          </div>

          <div className="achievement-card">
            <h3>DBMS — NPTEL Certified</h3>
            <p>Focused on database design, SQL, and normalization concepts.</p>
          </div>

          <div className="achievement-card">
            <h3>GDG Rajkot — Agentic Premier League</h3>
            <p>Secured Top 6 spot among 65+ teams.</p>
          </div>

          <div className="achievement-card">
            <h3>DUHacks 3.0</h3>
            <p>Hackathon participant — 2025 edition.</p>
          </div>

          <div className="achievement-card">
            <h3>Robofest 4.0</h3>
            <p>Qualified for POC level out of 160+ teams; advanced to prototyping.</p>
          </div>
        </div>
      </div>
    </div>


  )
}
export default About;
