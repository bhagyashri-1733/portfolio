import React from 'react';
import './Hero.css';


function Hero() {
  const handleViewWork = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Software<br />Developer
          </h1>
          <p className="hero-description">
            Software Developer with experience in ReactJS and Django, proficient in building responsive, pixel-perfect
            UIs from Figma designs.Skilled in collaborating with backend teams, writing clean code, and delivering scalable,
            high-performance web applications.

          </p>
          <button className="hero-btn" onClick={handleViewWork}>View My Work</button>
        </div>
        <div className="hero-image">
          <img src="/imgg.jpeg" alt="Software Developer" className="placeholder-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
