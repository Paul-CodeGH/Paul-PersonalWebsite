import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
// Import project images - adjust paths as needed
import project1 from '../assets/vibestream.png';
import project2 from '../assets/hamster.png';
import project3 from '../assets/todo.png';
import project4 from '../assets/robot.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VibeStream",
      description: "A full-stack video streaming platform built with React, Node.js, and MySQL. Features include user authentication, video uploads, and real-time chat and much more.",
      image: project1,
      technologies: ["React", "Node.js", "MySQL", "JavaScript"],
      liveLink: "",
      codeLink: "https://github.com/Paul-CodeGH/PortfolioProjects/tree/main/JavaScript%20Projects/VibeStream%20-%20Your%20VideoSharing%20Platform%20(Creative%20Code%20Lab%202%20FInal%20Project)"
    },
    {
      id: 2,
      title: "Hamster Quest 2D",
      description: "A 2D platformer game where players play as hamsters, trying navigate through challenging levels, collect items, and escaping various obstacles.",
      image: project2,
      technologies: ["Vanilla JavaScript", "HTML5 Canvas", "CSS3"],
      liveLink: "https://paul-codegh.github.io/HamsterQuestUpdate/",
      codeLink: "https://github.com/Paul-CodeGH/PortfolioProjects/tree/main/JavaScript%20Projects/HamsterQuest%20JavaScript%202D%20Final%20Project%20for%20the%20Creative%20Code%20Lab"
    },
    {
      id: 3,
      title: "To Do Desktop App",
      description: "A responsive desktop to-do application built with Python and Tkinter, helping users manage tasks efficiently with a clean interface and local data storage.",
      image: project3,
      technologies: ["Python", "Tkinter", "SQLite", "Desktop"],
      liveLink: "",
      codeLink: "https://github.com/Paul-CodeGH/PortfolioProjects/tree/main/Python%20Projects/ToDo%20Desktop%20Application%20-%20Python%20TKINTER"
    },
    {
      id: 4,
      title: "2D Console Game",
      description: "First ever 2D JavaScript game I developed for the university. It features multiple levels, a console and keyboard control.",
      image: project4,
      technologies: ["Vanilla JavaScript", "HTML5", "CSS3"],
      liveLink: "https://paul-codegh.github.io/2D-Robot-Console-Robot-Game/",
      codeLink: "https://github.com/Paul-CodeGH/PortfolioProjects/tree/main/JavaScript%20Projects/Client%20Side%20Coding%202D%20Robot%20Console%20Game"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <div className="navigation-buttons">
            <Link to="/" className="nav-button">
              ← Back Home
            </Link>
            <Link to="/about" className="nav-button">
              About
            </Link>
            <Link to="/contact" className="nav-button">
              Contact
            </Link>
          </div>
          <h1>My Projects</h1>
          <p className="projects-subtitle">
            Here are some of my recent works that showcase my skills in web development and design.
          </p>
          <p>Please note that most projects aren't hosted at the moment.</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveLink ? (
                      <a
                        href={project.liveLink}
                        className="project-link live-demo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="project-link disabled" aria-disabled="true">
                        Live Demo Not Available yet
                      </span>
                    )}

                    <a
                      href={project.codeLink}
                      className="project-link source-code"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="want-more-section">
          <h3>Want more?</h3>
          <a className="cta-button" href="https://github.com/Paul-CodeGH/PortfolioProjects/tree/main" >See my complete project portfolio on GitHub
          <span className="arrow">→</span>
          </a>
        </div>

        <div className="projects-cta">
          <h2>Interested in working together?</h2>
          <p>I'm always open to discussing new opportunities and creative projects.</p>
          <Link to="/contact" className="cta-button">
            Get In Touch
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      {/* Background floating shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape10"></div>
        <div className="floating-shape shape11"></div>
        <div className="floating-shape shape12"></div>
      </div>
    </div>
  );
};

export default Projects;