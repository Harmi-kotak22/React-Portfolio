import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Harmi Kotak</h2>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="footer-center">
          <p>Built with 💙 using React</p>
        </div>

        <div className="footer-right">
          <a href="harmi.kotak@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="footer-icon" />
          </a>
          <a href="https://github.com/Harmi-kotak22" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/harmi-kotak-2a4806285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
