import React from 'react';
import './Skills.css';


const Skills = () =>
{
  return(
     <div className="skills">
      <div className="skills-title">
        <h1>
          Skills
        </h1>
        <div className="technical-skills">
          <h4>
            Technical Skills
          </h4>
          <h2>
            Core Technologies:DBMS, DSA, OOP, OS, Software Engineering, Problem Solving,Machine Learning  
          </h2>
          <h2>
            Languages:C++, Java, C, JavaScript,Flutter,Python
          </h2>
          <h2>
            Database :  MySQL, Firebase, MongoDB
          </h2>
          <h2>
            Web/Software Dev: Spring Boot, Hibernate, MERN,REST APIs,Dotnet 
          </h2>
          <h2>
            Tools:Git, Postman, GitHub,AI Tools,Docker
          </h2>
          <h2>
            Non-Tech: Leadership, Communication, Team Coordination, Management, Public Speaking
          </h2>
        </div>
        <div className="non-technical">
          <h4>
            Non-Technical Skills
          </h4>
          <h2>
            Communication
          </h2>
          <h2>
            Public Speaking
          </h2>
          <h2>
            Team Management
          </h2>
          <h2>
            Event Planning
          </h2>
          <h2>
            Leadership
          </h2>
          <h2>
            Time Management
          </h2>
        </div>
      </div>
     </div>
  );
}
export default Skills