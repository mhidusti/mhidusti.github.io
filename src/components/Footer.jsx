import React from "react";

export default function Footer() {
  return (
    <footer className="tj-footer-area style-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-logo-box">
              <a href="#"><img src="assets/img/logo/logo-dark.png" alt="Logo" /></a>
            </div>
            <div className="footer-menu">
              <nav>
                <ul>
                  <li><a href="#services-section">Services</a></li>
                  <li><a href="#works-section">Portfolio</a></li>
                  <li><a href="#resume-section">Resume</a></li>
                  <li><a href="#skills-section">Skills</a></li>
                  <li><a href="#testimonials-section">Testimonials</a></li>
                  <li><a href="#contact-section">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="copy-text style-2">
              <p>© All rights reserved <a href="#" target="_blank" rel="noreferrer">Gerold Design</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
