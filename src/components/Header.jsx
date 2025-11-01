import React, { useEffect } from "react";
import "../header.css";

export default function Header() {
  useEffect(() => {
    const links = document.querySelectorAll("a.smooth-scroll");

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const smoothScrollTo = (target) => {
      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + window.scrollY;
      const duration = 800;
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, start + (end - start) * ease);
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) smoothScrollTo(targetElement);
    };

    links.forEach((link) => link.addEventListener("click", handleClick));
    return () => links.forEach((link) => link.removeEventListener("click", handleClick));
  }, []);

  return (
    <header className="tj-header-area style-2 header-absolute">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center">

            {/* Email Info */}
            <div className="header-info-list d-none d-md-inline-block">
              <ul className="ul-reset">
                <li>
                  <a href="mailto:mail@gerolddesign.com">mhidusti@gmail.com</a>
                </li>
              </ul>
            </div>

            {/* Navigation Menu */}
            <div className="header-menu">
              <nav>
                <ul>
                  <li><a href="#skills-section" className="smooth-scroll">Expertise</a></li>  
                  <li><a href="#portfolio-scroll-section" className="smooth-scroll">Projects</a></li> 
                  <li><a href="#services-section" className="smooth-scroll">Services</a></li>        
                  <li><a href="#resume" className="smooth-scroll">Experience</a></li>          
                  <li><a href="#backend-process" className="smooth-scroll">Why Us</a></li>
                  <li><a href="#contact-section" className="smooth-scroll">Contact</a></li>
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
