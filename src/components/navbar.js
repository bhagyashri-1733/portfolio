import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon"></div>
        </div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link active" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li className="nav-item">
            <a href="#work" className="nav-link" onClick={() => setIsOpen(false)}>Work</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
