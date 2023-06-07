import React from 'react';
import { useNavigate } from "react-router-dom";
import './GuidanceSection.css';

const GuidanceSection = () => {


  return (
    <section className="guidance-section">
      <h2>Explore Your Career Options</h2>
      <div className="career-options">
        <div className="career-option">
          <h3>Civil Engineering</h3>
          <p>Design and construct infrastructure projects.</p>
          <ul>
            <li>Roads and bridges</li>
            <li>Buildings</li>
            <li>Water and waste management</li>
          </ul>
        </div>
        <div className="career-option">
          <h3>Software Engineering</h3>
          <p>Create and develop software applications.</p>
          <ul>
            <li>Web development</li>
            <li>Mobile app development</li>
            <li>Data analysis</li>
          </ul>
        </div>
        <div className="career-option">
          <h3>Electrical Engineering</h3>
          <p>Design and develop electrical systems and equipment.</p>
          <ul>
            <li>Power generation and distribution</li>
            <li>Electronic devices</li>
            <li>Renewable energy</li>
          </ul>
        </div>
      </div>
      <div className="roadmaps-resources">
        <h3>Roadmaps & Resources</h3>
        <ul>
          <li>Civil Engineering roadmap</li>
          <li>Software Engineering roadmap</li>
          <li>Electrical Engineering roadmap</li>
        </ul>
      </div>
    </section>
  );
};

export default GuidanceSection;
