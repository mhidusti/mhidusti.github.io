import React from "react";

export default function Header() {
  return (
    <header className="tj-header-area style-2 header-absolute">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center">
     

            {/* Email Info */}
            <div className="header-info-list d-none d-md-inline-block">
              <ul className="ul-reset">
                <li>
                  <a href="mailto:mail@gerolddesign.com">
                  mhidusti@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Navigation Menu */}
            <div className="header-menu">
              <nav>
               <ul>
                  <li><a href="#services-section">Services</a></li>        
                  <li><a href="#works-section">Projects</a></li>       
                  <li><a href="#resume-section">Experience</a></li>       
                  <li><a href="#skills-section">Expertise</a></li>      
                  <li><a href="#testimonials-section">Feedback</a></li>    
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
