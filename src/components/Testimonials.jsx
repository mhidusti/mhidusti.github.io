import React from "react";

export default function Testimonials() {
  return (
    <section className="testimonial-section style-2" id="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header style-2">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".4s">
                Client Testimonials
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="testimonials-widget wow fadeInUp" data-wow-delay=".5s">
              <div className="owl-carousel testimonial-carousel">
                <div className="testimonial-item style-2">
                  <p className="quote">
                    "I love the portfolio page more every day — it makes my life so much easier
                    and perfectly fits our needs. Keep up the great work."
                  </p>
                  <div className="testimonials-auother">
                    <div className="auother-image">
                      <img src="assets/img/testimonials/user/1.png" alt="User" />
                    </div>
                    <div className="auother-text">
                      <h6 className="name">Brander Foster</h6>
                      <span className="designation">UI & UX Designer</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-item style-2">
                  <p className="quote">
                    "The template and service were excellent — it matches our requirements perfectly."
                  </p>
                  <div className="testimonials-auother">
                    <div className="auother-image">
                      <img src="assets/img/testimonials/user/1.png" alt="User" />
                    </div>
                    <div className="auother-text">
                      <h6 className="name">Tommy Boyle</h6>
                      <span className="designation">Senior Software</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-item style-2">
                  <p className="quote">
                    "Professional and fast — the portfolio design helped our product tremendously."
                  </p>
                  <div className="testimonials-auother">
                    <div className="auother-image">
                      <img src="assets/img/testimonials/user/1.png" alt="User" />
                    </div>
                    <div className="auother-text">
                      <h6 className="name">Brander Foster</h6>
                      <span className="designation">UI & UX Designer</span>
                    </div>
                  </div>
                </div>

                {/* Additional testimonial items kept identical to original HTML */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
