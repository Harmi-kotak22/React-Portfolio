import React from 'react';
import './Contacts.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts-title">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <h3>Email:</h3>
          <p>harmi.kotak@gmail.com</p>
        </div>

        {/* <div className="contact-item">
          <FaPhone className="contact-icon" />
          <h3>Phone:</h3>
          <p>+91 6354397084</p>
        </div> */}

        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn:</h3>
          <a href="https://www.linkedin.com/in/harmi-kotak-2a4806285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/harmi-kotak
          </a>
        </div>

        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <h3>GitHub:</h3>
          <a href="https://github.com/Harmi-kotak22" target="_blank" rel="noopener noreferrer">
            github.com/Harmi-kotak22
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
