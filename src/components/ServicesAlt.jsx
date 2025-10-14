import React from "react";

export default function ServicesAlt() {
  return (
    <section className="services-section" id="services-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                My Quality Services
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
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
                  <h3 className="service-title">Branding Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                  </p>
                </div>
                <i className="flaticon-up-right-arrow"></i>
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
              </div>

              {/* Service Item 2 */}
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">02</span>
                  <h3 className="service-title">Web Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                  </p>
                </div>
                <i className="flaticon-up-right-arrow"></i>
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
              </div>

              {/* Service Item 3 */}
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">03</span>
                  <h3 className="service-title">UI/UX Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                  </p>
                </div>
                <i className="flaticon-up-right-arrow"></i>
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
              </div>

              {/* Service Item 4 */}
              <div
                className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="left-box d-flex flex-wrap align-items-center">
                  <span className="number">04</span>
                  <h3 className="service-title">Graphics Design</h3>
                </div>
                <div className="right-box">
                  <p>
                    I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                  </p>
                </div>
                <i className="flaticon-up-right-arrow"></i>
                <button data-mfp-src="#service-wrapper" className="service-link modal-popup"></button>
              </div>

              <div className="active-bg wow fadeInUp" data-wow-delay=".5s"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
