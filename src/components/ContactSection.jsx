import React from "react";

export default function ContactSection() {
  return (
    <section className="contact-section style-2" id="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-content-area">
              <div className="contact-form-box order-2 order-md-1 wow fadeInLeft" data-wow-delay=".3s">
                <div className="section-header">
                  <h2 className="section-title">
                    Let's<br />
                    Work Together!
                  </h2>
                  <p>
                    I design and code simple and beautiful things — and I love what I do.
                  </p>
                </div>

                <div className="tj-contact-form style-2">
                  <form id="contact-form">
                    <div className="form_group">
                      <input type="text" name="conName" id="conName" placeholder="First Name" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <input type="text" name="conLName" id="conLName" placeholder="Last Name" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <input type="email" name="conEmail" id="conEmail" placeholder="Email Address" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <input type="tel" name="conPhone" id="conPhone" placeholder="Phone" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <textarea name="conMessage" id="conMessage" placeholder="Message"></textarea>
                    </div>
                    <div className="form_btn">
                      <button type="submit" className="btn tj-btn-primary-2">
                        Send Message
                        <span className="icon_box">
                          <i className="fa-regular fa-arrow-right icon_first"></i>
                          <i className="fa-regular fa-arrow-right icon_second"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>

              </div>

              <div className="contact-info-list-2 order-1 order-md-2">
                <div className="desc wow fadeInRight" data-wow-delay=".3s">
                  <p>
                    I’m currently available for new projects — feel free to send me a message about your project.
                  </p>
                </div>

                <ul className="ul-reset contact-info-list-3">
                  <li className="wow fadeInRight" data-wow-delay=".3s">
                    <a href="tel:0123456789">+01 123 654 8096</a>
                  </li>
                  <li className="wow fadeInRight" data-wow-delay=".4s">
                    <a href="mailto:mail@mail.com">gerolddesign@mail.com</a>
                  </li>
                  <li className="wow fadeInRight" data-wow-delay=".5s">
                    <p>Gisha Alley 38<br />Madob G St.</p>
                  </li>
                </ul>

                <ul className="ul-reset social-icons style-3 wow fadeInRight" data-wow-delay=".6s">
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-light fa-basketball"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
