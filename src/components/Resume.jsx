import React from "react";
import "../resume.css";

export default function GlassResumeSection() {
  return (
    <section className="glass-resume-section" id="resume">
      <div className="glass-container">
        <h2 className="glass-section-title"
            style={{
              fontFamily: '"Clash Display", sans-serif',
              fontWeight: 600,
              fontSize: "2.5rem",
              color: "#5ffff7ff",
            }}
        >Resume</h2>

        <div className="glass-row">

          {/* Education */}
          <div className="glass-card">
            <h3 className="glass-card-title">Education</h3>
            <div className="glass-item">
         <div className="glass-item">
  <h4>Associate Degree in IT</h4>
  <p>Arak university</p>
  <span>2025</span>
</div>

<div className="glass-item">
  <h4>Bachelor's Degree in IT </h4>
  <p>Arak university</p>
  <span>2025</span>
</div>

            </div>
          </div>

          {/* Experience */}
          <div className="glass-card">
            <h3 className="glass-card-title">Experience</h3>
            <div className="glass-item">
              <h4>webnegar Company</h4>
              <p>Backend developer</p>
         
            </div>
            <div className="glass-item">
              <h4>    Freelance/ Teamwork.</h4>
              <p>Backend developer</p>
         
            </div>
            <div className="glass-item">
              <h4>sitedar  Company</h4>
              <p>Backend developer</p>
           
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="glass-card">
            <h3 className="glass-card-title">Django framework</h3>
            <div className="skills-wrapper">
              <span>python</span>
              <span>Django</span>
              <span>FastAPI</span>
              <span>Celery</span>
              <span>Django Channels</span>
              <span>ORM</span>
              <span>Signals</span>
              <span>Testing</span>
              <span>Deployment</span>
              <span>APIs</span>
              <span>Git</span>

              
            </div>
          </div>

        </div>

        {/* Download Button */}
        <div className="download-wrapper">
          <a href="/resume.pdf" download className="download-btn">
            <i className="fa-solid fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
