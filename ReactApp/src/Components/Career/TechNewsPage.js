import React from 'react';
import './TechNewsPage.css';

const News = () => {
  return (
    <section className="tech-news-section">
      <h2>Latest Tech News</h2>
      <div className="news">
        <div className="news-item">
          <h3>AI Breakthrough: New Algorithm Achieves Human-Level Performance in Image Recognition</h3>
          <p>Researchers have developed an AI algorithm that matches human-level performance in image recognition tasks.</p>
        </div>
        <div className="news-item">
          <h3>SpaceX Successfully Launches Falcon Heavy Rocket, Carrying Satellites into Orbit</h3>
          <p>SpaceX's Falcon Heavy rocket successfully launched and deployed multiple satellites into orbit.</p>
        </div>
        <div className="news-item">
          <h3>5G Revolution: New Wireless Network Technology Promises Faster Speeds and Lower Latency</h3>
          <p>5G technology is set to revolutionize wireless communication with its faster speeds and lower latency.</p>
        </div>
      </div>
    </section>
  );
};

export default News;
