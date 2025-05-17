// import React, { useState } from 'react';
// import './Navbar.css';
// import menu_open from '../../assets/menu_open.jpeg';
// import menu_close from '../../assets/menu_close.png';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className='navbar'>
//       {/* <div className="logo">MyPortfolio</div> */}

//       <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
//         <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
//         <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
//         <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
//         <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
//         <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
//       </ul>

//       {/* Conditionally render only one icon */}
//       {!menuOpen && (
//         <img
//           src={menu_open}
//           alt="Open menu"
//           className="nav-mob-toggle"
//           onClick={() => setMenuOpen(true)}
//         />
//       )}

//       {menuOpen && (
//         <img
//           src={menu_close}
//           alt="Close menu"
//           className="nav-mob-toggle"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Navbar;


// import React from 'react';
// import './Navbar.css';


// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       {/* <img src={menu_open} className="nav-mob-open"/> */}
//       <ul className='nav-menu'>
//         {/* <img src="" alt="" className="nav-mob-close" /> */}
//         <li><a href="#about">About Me</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#projects">Projects</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       {/* <div className='nav-connect'>Connect With Me</div> */}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';
import menu_open from '../../assets/menu_open.jpeg';  // your open icon
import menu_close from '../../assets/menu_close.png'; // your close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {!menuOpen && (
        <img
          src={menu_open}
          alt="Open menu"
          className="nav-mob-toggle"
          onClick={() => setMenuOpen(true)}
        />
      )}

      {menuOpen && (
        <img
          src={menu_close}
          alt="Close menu"
          className="nav-mob-toggle"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
