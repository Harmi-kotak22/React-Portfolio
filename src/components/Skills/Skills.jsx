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
            Programming Languages:  C, C++, Java, Python , Javasscript , PHP
          </h2>
          <h2>
            Scripting Languages: HTML , CSS 
          </h2>
          <h2>
            Frameworks : SpringBoot, Hibernate , Django
          </h2>
          <h2>
            Core CS: DBMS 
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