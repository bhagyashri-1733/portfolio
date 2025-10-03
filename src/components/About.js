import React from 'react';
import './About.css';

function About() {
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'ReactJs', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Django', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'Node.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'Git & GitHub ', level: 85 },
    { name: 'SQL', level: 92 }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m a Junior Software Developer with experience in ReactJS, Django, and PostgreSQL. I focus on building responsive, pixel-perfect interfaces and integrating them with scalable backends.
          </p>
          <p className="about-text">
            I’ve also built projects like an E-commerce site, Real Estate platform, and Chat App, which strengthened my skills in creating full-stack applications that are functional and user-friendly.
            I enjoy solving real problems through clean code and collaborative teamwork, always aiming to build products that people love to use.
          </p>
        </div>
        <div className="experience-content">
          <h3 className="experience-title">Experience</h3>
          <div className="experience-item">
            <h4>Junior Software Developer</h4>
            <p className="experience-duration">Sep 2024 - Present</p>
            <p className="experience-company">
              <a href="https://www.siclarity.com" target="_blank" rel="noopener noreferrer">Siclarity Software Solutions Pvt Ltd</a>, Mumbai, India
            </p>
            <ul className="experience-description">
              <li>Developing and maintaining a high-performance Semiconductor Chip Designing Platform. Building dynamic, responsive UI components using ReactJS, Bootstrap, and JavaScript to enhance usability and user experience.</li>
              <li>Collaborating with backend and product teams to deliver features aligned with chip design workflows. Contributed to backend development using Python (Django), working on RESTful APIs, data models, and server-side logic.</li>
              <li>Worked with PostgreSQL and DBeaver for database design, queries, and data handling. Designing scalable and reusable frontend components with a focus on maintainability and cross-browser compatibility.</li>
            </ul>
          </div>
        </div>
        <div className="skills-content">
          <h3 className="skills-title">Skills & Expertise</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
