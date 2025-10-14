import React from "react";

export default function ProjectSection() {
  return (
    <section className="project-section" id="project-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header style-2">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".4s">Recent Projects</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="project-content-area featured wow fadeInUp" data-wow-delay=".5s">
              <div className="project-left-content">
                <div className="project_content">
                  <span className="subtitle">Social App</span>
                  <h3 className="title">
                    <button data-mfp-src="#portfolio-wrapper" className="modal-popup">Deloitte</button>
                  </h3>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    vitae arcu nec urna efficitur volutpat.
                  </p>
                </div>

                <ul className="project_tags">
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">User Stories</a></li>
                </ul>

                <div className="desc">
                  <p>“Excellent service. This template is the next step.”</p>
                </div>

                <div className="project-feature-item">
                  <div className="project-images">
                    <img src="assets/img/project/project-1.png" alt="Project featured" />
                  </div>
                  <div className="project-text">
                    <h6 className="title">Jamie Tanson</h6>
                    <span className="sub-title">UI & UX Designer</span>
                  </div>
                </div>
              </div>

              <div className="project-wrapper">
                <img src="assets/img/project/project-2.png" alt="Project artwork" />
              </div>
            </div>
          </div>
        </div>

        <div className="row bottom-content">
          <div className="col-lg-7">
            <div className="project-content-area wow fadeInUp" data-wow-delay=".6s">
              <div className="project-wrapper">
                <img src="assets/img/project/project-3.png" alt="Project" />
              </div>
              <div className="project-left-content">
                <div className="project_content">
                  <span className="subtitle">Social App</span>
                  <h3 className="title">
                    <button data-mfp-src="#portfolio-wrapper" className="modal-popup">Rizs</button>
                  </h3>
                  <p className="desc">Project focused on precision and data.</p>
                </div>

                <ul className="project_tags">
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">User Stories</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="project-content-area wow fadeInUp" data-wow-delay=".7s">
              <div className="project-wrapper">
                <img src="assets/img/project/project-4.png" alt="Project" />
              </div>
              <div className="project-left-content">
                <div className="project_content">
                  <span className="subtitle">Social Network</span>
                  <h3 className="title">
                    <button data-mfp-src="#portfolio-wrapper" className="modal-popup">Kilio</button>
                  </h3>
                  <p className="desc">Project focused on precision and data.</p>
                </div>

                <ul className="project_tags">
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Graphic Design</a></li>
                  <li><a href="#">User Stories</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
