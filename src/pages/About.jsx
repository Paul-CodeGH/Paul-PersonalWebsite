import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import profilePhoto from '../assets/photo.jfif';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <div className="navigation-buttons">
            <Link to="/" className="nav-button">
              ← Back Home
            </Link>
            <Link to="/projects" className="nav-button">
              Projects
            </Link>
            <Link to="/contact" className="nav-button">
              Contact
            </Link>
          </div>
          <h1>About Me</h1>
        </div>

        <div className="about-grid">
          <div className="image-section">
            <div className="profile-image-container">
              <div className="profile-image">
                <img 
                  src={profilePhoto} 
                  alt="Paul-Adrian Moldovan" 
                  className="profile-photo"
                />
              </div>
              <div className="image-background-shape"></div>
            </div>
          </div>

          <div className="text-section">
            <div className="bio-content">
              <h2>Paul-Adrian Moldovan</h2>
              <p className="title">3rd semester Creative Computing student</p>
              
              <div className="bio-text">
                <p>
                  I'm Paul, a passionate 25-year-old Creative Computing student dedicated to building digital solutions that make a meaningful impact. I specialize in web development with React and Node.js, software engineering, and have a strong foundation in data analytics and machine learning using Python and R.                </p>
                
                <p>
                  My journey started at the age of 14, when I started exploring programming through game scripting and modding. Since then, I've honed my skills in both front-end and back-end development, always striving to create intuitive user experiences and efficient code.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or enjoying the outdoors. 
                  I'm always excited to take on new challenges and collaborate on 
                  innovative projects.
                </p>
              </div>

              <div className="skills-section">
                <h3>Skills & Technologies</h3>
                <div className="skills-grid">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML5 & CSS3</span>
                  <span className="skill-tag">Linux</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Kotlin</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">R Programming</span>
                  <span className="skill-tag">Data Analytics and Statistics</span>
                  <span className="skill-tag">UI/UX Design</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">MySQL, MongoDB, PostgreSQL & SQLite </span>
                  <span className="skill-tag">RESTful APIs</span>
                  <span className="skill-tag">Office 365</span>
                </div>
              </div>

              <div className="skills-section">
                <h3>Passions</h3>
                <div className="skills-grid">
                  <span className="skill-tag">Developing New Projects</span>
                  <span className="skill-tag">Analysing Datasets</span>
                  <span className="skill-tag">Learning New Technologies</span>
                  <span className="skill-tag">Driving & Sim-Racing</span>
                  <span className="skill-tag">Traveling & Hiking</span>
                  <span className="skill-tag">Socializing</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Background floating shapes */}
      <div className="floating-shapes">
        <div className="floating-shape shape4"></div>
        <div className="floating-shape shape5"></div>
        <div className="floating-shape shape6"></div>
      </div>
    </div>
  );
};

export default About;
