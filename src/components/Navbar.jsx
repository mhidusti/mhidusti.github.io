import React from 'react';

export default function Navbar() {
  return (
    <>
      <header className="tj-header-area style-2 header-absolute">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap align-items-center">
              <div className="logo-box">
                <a href="/">
                  <img src="/assets/img/logo/logo.png" alt="Logo" />
                </a>
              </div>

              <div className="header-info-list d-none d-md-inline-block">
                <ul className="ul-reset">
                  <li><a href="mailto:mail@gerolddesign.com">mail@gerolddesign.com</a></li>
                </ul>
              </div>

              <div className="header-menu">
                <nav>
                  <ul>
                    <li><a href="#skills-section">مهارت ها</a></li>
                    <li><a href="#project-section">پروژه ها</a></li>
                    <li><a href="#specialization-section">رزومه</a></li>
                    <li><a href="#works-section">نمونه کار</a></li>
                    <li><a href="#testimonials-section">گواهی نامه ها</a></li>
                    <li><a href="#contact-section">تماس با ما</a></li>
                  </ul>
                </nav>
              </div>

              <div className="header-button">
                <a href="#" className="tj-btn-primary-2">
                  رزومه
                  <span className="icon_box">
                    <i className="flaticon-download icon_first"></i>
                    <i className="flaticon-download icon_second"></i>
                  </span>
                </a>
              </div>

              <div className="menu-bar d-lg-none">
                <button type="button" aria-label="Toggle menu">
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
    </>
  );
}
