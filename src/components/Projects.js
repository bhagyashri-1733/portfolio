import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce website [ReactJs]',
      description: 'Created a website where people can shop online easily. Using ReactJS, HTML, CSS, and JavaScript, made it responsible that make sure the website works well on computers, phones, and tablets.',
      link: 'https://e-commerce1-lime.vercel.app/',
      color: '#FFE66D'
    },
    {
      id: 2,
      title: 'Real-State website [ReactJs]',
      description: 'I led the creation of a modern real estate website to make finding properties online easier. Using ReactJS, HTML,CSS, and JavaScript, I made a website that looks great and is easy to use.',
      link: 'https://real-estate-web.pages.dev/#residencies//',
      color: '#6B5B3D'
    },
    {
      id: 3,
      title: 'Chat-app [ ReactJs, MongoDB, ExpressJS, NodeJS ]',
      description: 'Chat-app website made with ReactJS for the front part, and NodeJS with ExpressJS for the back. We use MongoDB to keep user details and chat messages. It lets people talk to each other instantly.I made sure the website is easy to use, secure, and runs smoothly. This project shows my skills in making websites from start to finish, and how I can use different tools to create useful things online.',
      link: 'https://github.com/bhagyashri-1733/chat-app-yt//',
      color: '#FFE66D'
    }
  ];

  return (
    <section className="projects" id="work">
      <div className="projects-container">
        <h2 className="projects-title">PROJECTS</h2>
        <p className="projects-subtitle">
          A collection of recent projects showcasing my skills in full-stack development
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" style={{ backgroundColor: project.color }}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a className="project-btn" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
