import React from "react";
import "../services.css";
export default function ServicesAlt() {
  return (
      <section
      className="services-section"
      id="services-section"
      style={{ backgroundColor: "#ffffff" }} // ← اینجا بکگراند سفید شد
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Quality Services
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                I offer a range of backend and full-stack services built with Django, Python, and modern web technologies — focusing on performance, scalability, and clean architecture.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="services-widget position-relative">

              {/* Service Item 1 */}
              <div
                className="service-item current d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".5s"
            
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">01</span>
                  <h3 className="service-title">Backend Development</h3>
                </div>
                <div className="right-box">
                  <p>
                    I develop powerful backend systems using Django and FastAPI — ensuring your applications are secure, efficient, and built on scalable architecture ready for real-world use.
                  </p>
                </div>
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                ></button>
              </div>

              {/* Service Item 2 */}
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".6s"
            
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">02</span>
                  <h3 className="service-title">API Design & Integration</h3>
                </div>
                <div className="right-box">
                  <p>
                    I build RESTful APIs with Django REST Framework that connect your frontend and backend seamlessly — with clean documentation and high reliability.
                  </p>
                </div>
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                ></button>
              </div>

              {/* Service Item 3 */}
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".7s"
           
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">03</span>
                  <h3 className="service-title">Database Design & Optimization</h3>
                </div>
                <div className="right-box">
                  <p>
                    I design efficient and normalized databases using PostgreSQL and MySQL — focusing on query optimization, indexing, and data consistency for peak performance.
                  </p>
                </div>
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                ></button>
              </div>

              {/* Service Item 4 */}
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">04</span>
                  <h3 className="service-title">Deployment & DevOps</h3>
                </div>
                <div className="right-box">
                  <p>
                    I handle complete deployment processes with Docker, Nginx, and CI/CD pipelines — ensuring stable, scalable, and zero-downtime environments for your projects.
                  </p>
                </div>
                <button
                  data-mfp-src="#service-wrapper"
                  className="service-link modal-popup"
                ></button>
              </div>

              <div
                className="active-bg wow fadeInUp"
                data-wow-delay=".5s"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
