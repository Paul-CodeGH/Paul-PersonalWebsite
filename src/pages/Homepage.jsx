import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="text-content">
          <div className="greeting">Hi, I'm</div>
          <h1 className="name">Paul-Adrian Moldovan</h1>
          <p className="description">
            Welcome to my personal website where I share my journey in design 
            and development. Let's build something amazing together.
          </p>
          <Link to="/about">
            <button className="cta-button">
              Discover My Story
              <span className="arrow">→</span>
            </button>
          </Link>
        </div>
        <div className="visual-element">
          <div className="floating-shape shape1"></div>
          <div className="floating-shape shape2"></div>
          <div className="floating-shape shape3"></div>
        </div>
      </div>
    </div>
  );
};
