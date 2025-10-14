import React from "react";

export default function Services() {
  return (
    <section className="skills-section style-2" id="skills-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header style-2 text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                Skills
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                I have hands-on experience in multiple design and development tools. 
                My focus is on creating clean, efficient, and visually appealing products that deliver a great user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="skills-widget style-2 d-flex flex-wrap justify-content-center align-items-center">

              {/* Figma */}
              <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="/assets/img/icons/figma.svg" alt="Figma" />
                  </div>
                  <div className="number">92%</div>
                </div>
                <p>Figma</p>
              </div>

              {/* Sketch */}
              <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="/assets/img/icons/sketch.svg" alt="Sketch" />
                  </div>
                  <div className="number">80%</div>
                </div>
                <p>Sketch</p>
              </div>

              {/* Adobe XD */}
              <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="/assets/img/icons/xd.svg" alt="Adobe XD" />
                  </div>
                  <div className="number">85%</div>
                </div>
                <p>Adobe XD</p>
              </div>

              {/* WordPress */}
              <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="/assets/img/icons/wp.svg" alt="WordPress" />
                  </div>
                  <div className="number">99%</div>
                </div>
                <p>WordPress</p>
              </div>

              {/* React */}
              <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="/assets/img/icons/react.svg" alt="React" />
                  </div>
                  <div className="number">89%</div>
                </div>
                <p>React</p>
              </div>

              {/* JavaScript */}
              <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                <div className="skill-inner">
                  <div className="icon-box">
                    <img src="/assets/img/icons/js.svg" alt="JavaScript" />
                  </div>
                  <div className="number">93%</div>
                </div>
                <p>JavaScript</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
