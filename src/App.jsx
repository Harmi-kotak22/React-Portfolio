import './index.css';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contacts /></div>
      <Footer />
    </div>
  );
};

export default App;
