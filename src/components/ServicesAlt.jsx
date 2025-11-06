import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../services.css";
import "../custom.css";

export default function ServicesAlt() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // مدت زمان انیمیشن‌ها (۱ ثانیه)
      once: true,      // فقط یک‌بار اجرا میشه
      offset: 100,     // فاصله تا شروع انیمیشن
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="services-section"
      id="services-section"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-12">
            <h2
              className="section-title"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              My Quality Services
            </h2>
            <p data-aos="fade-up" data-aos-delay="300">
              I offer a range of backend and full-stack services built with
              Django, Python, and modern web technologies — focusing on
              performance, scalability, and clean architecture.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="services-widget position-relative">

              {/* Service Item 1 */}
              <div
                className="service-item d-flex flex-wrap align-items-center current"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">01</span>
                  <h3 className="service-title">Backend Development</h3>
                </div>
                <div className="right-box">
                  <p>
                    I develop powerful backend systems using Django and FastAPI —
                    ensuring your applications are secure, efficient, and built on
                    scalable architecture ready for real-world use.
                  </p>
                </div>
              </div>

              {/* Service Item 2 */}
              <div
                className="service-item d-flex flex-wrap align-items-center"
                data-aos="zoom-in-up"
                data-aos-delay="400"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">02</span>
                  <h3 className="service-title">API Design & Integration</h3>
                </div>
                <div className="right-box">
                  <p>
                    I build RESTful APIs with Django REST Framework that connect
                    your frontend and backend seamlessly — with clean
                    documentation and high reliability.
                  </p>
                </div>
              </div>

              {/* Service Item 3 */}
              <div
                className="service-item d-flex flex-wrap align-items-center"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">03</span>
                  <h3 className="service-title">
                    Database Design & Optimization
                  </h3>
                </div>
                <div className="right-box">
                  <p>
                    I design efficient and normalized databases using PostgreSQL
                    and MySQL — focusing on query optimization, indexing, and data
                    consistency for peak performance.
                  </p>
                </div>
              </div>

              {/* Service Item 4 */}
              <div
                className="service-item d-flex flex-wrap align-items-center"
                data-aos="zoom-out-up"
                data-aos-delay="600"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">04</span>
                  <h3 className="service-title">Deployment & DevOps</h3>
                </div>
                <div className="right-box">
                  <p>
                    I handle complete deployment processes with Docker, Nginx, and
                    CI/CD pipelines — ensuring stable, scalable, and zero-downtime
                    environments for your projects.
                  </p>
                </div>
              </div>

              <div
                className="active-bg"
                data-aos="fade-up"
                data-aos-delay="700"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
