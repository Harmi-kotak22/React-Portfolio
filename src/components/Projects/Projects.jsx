import React from 'react';
import './Projects.css';

const Projects = () =>
{
  return(
    <div>
      <div className="projects">
        <div className="projects-title">
          <h1>
            Projects
          </h1>
        </div>
        <div className="projects-sections">
                <li>
                    <h3>
                        HostelMate
                    </h3>
                    <div className="project-info">
                        <ul>

                            <li>Tech-Stack: HTML,CSS,DJANGO FRAMEWORK</li>
                            <li>A comprehensive Hostel Management System with powerful features such as gatepass generation,feedback analysis,student info management and much more!</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h3>
                        EventEase
                    </h3>
                    <div className="project-info">
                        <ul>
                            <li>TechStack: Java Springboot,React</li>
                            <li>A college club event management system that manages the basic crud operations along with spring security implementation.</li>
                        </ul>
                    </div>
                </li>    
                <li>
                    <h3>
                        Codalyze
                    </h3>
                    <div className="project-info">
                        <ul>
                            <li>TechStack: Flask</li>
                            <li>A role based code analyzer that analyzes codes based on role frontend,backend,project manager,etc. Suppports ER diagram and UML  diagram generation.</li>
                        </ul>
                    </div>
                </li> 
                <li>
                    <h3>
                        Attendance Management System
                    </h3>
                    <div className="project-info">
                        <ul>
                            <li>TechStack: HTML, CSS, PHP</li>
                            <li>A simple student attendance management system implementing basic crud operations</li>
                        </ul>
                    </div>
                </li>       
            </div>
      </div>
    </div>
  )
}

export default Projects