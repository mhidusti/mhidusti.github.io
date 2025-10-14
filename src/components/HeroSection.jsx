import React from "react";

const HeroSection = () => {
  return (
    <main className="site-content" id="content">
      {/* HERO SECTION START */}
      <section className="hero-section d-flex align-items-center" id="intro">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-box">
                <span className="hero-sub-title">I am Gerold</span>
                <h1 className="hero-title">
                  Web Developer +<br />UX Designer
                </h1>

                <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.png" alt="" />
                </div>

                <p className="lead">
                  I break down complex user experinece problems to create
                  integritiy focussed solutions that connect billions of people
                </p>

                <div className="button-box d-flex flex-wrap align-items-center">
                  <a href="#" className="btn tj-btn-secondary">
                    Download CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-light fa-basketball"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-none d-md-block">
              <div className="hero-image-box text-center">
                <img src="assets/img/hero/me.png" alt="" />
              </div>
            </div>
          </div>

          <div className="funfact-area">
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="14">
                      0
                    </span>
                  </div>
                  <div className="text">
                    Years of <br />Experience
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="50">
                      0
                    </span>
                    +
                  </div>
                  <div className="text">
                    Project <br />Completed
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="1.5">
                      0
                    </span>
                    K
                  </div>
                  <div className="text">
                    Happy <br />Clients
                  </div>
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number">
                    <span className="odometer" data-count="14">
                      0
                    </span>
                  </div>
                  <div className="text">
                    Years of <br />Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}
    </main>
  );
};

export default HeroSection;
