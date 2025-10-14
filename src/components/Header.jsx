import React from "react";

export default function Header() {
  return (
    <header className="tj-header-area style-2 header-absolute">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center">
            {/* Logo */}
            <div className="logo-box">
              <a href="index.html">
                <img src="assets/img/logo/logo-dark.png" alt="Logo" />
              </a>
            </div>

            {/* Email Info */}
            <div className="header-info-list d-none d-md-inline-block">
              <ul className="ul-reset">
                <li>
                  <a href="mailto:mail@gerolddesign.com">
                    mail@gerolddesign.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Menu */}
            <div className="header-menu">
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

  
            {/* Mobile Menu Toggle */}
            <div className="menu-bar d-lg-none">
              <button>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
