import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section style-2 d-flex align-items-center" id="intro">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-lg-6">
            <div className="hero-content-box wow fadeInUp" data-wow-delay=".3s">
              <h1 className="hero-title">
                I'm <span>Gerold</span>, <br /> a Web Designer & Developer
              </h1>
              <p className="lead">
                I love creating beautiful and user-friendly interfaces, and I have
                over 5 years of experience in web design and development.
              </p>

              <div className="button-box d-flex flex-wrap align-items-center">
                <a href="#contact-section" className="tj-btn-primary-2">
                  Contact Me
                  <span className="icon_box">
                    <i className="fa-regular fa-arrow-right icon_first"></i>
                    <i className="fa-regular fa-arrow-right icon_second"></i>
                  </span>
                </a>

                <ul className="ul-reset social-icons style-2">
                  <li>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 text-center">
            <div className="hero-image-box wow fadeInUp" data-wow-delay=".5s">
              {/* ✅ Images load directly from public/assets/... */}
              <img
                src="/assets/img/hero/hero-2.png"
                alt="Gerold portrait"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
