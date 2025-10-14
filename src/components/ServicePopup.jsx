import React from "react";

export default function ServicePopup() {
  return (
    <div id="service-wrapper" className="popup_content_area zoom-anim-dialog mfp-hide">
      <div className="popup_modal_img">
        <img src="assets/img/services/modal-img.jpg" alt="Service modal" />
      </div>

      <div className="popup_modal_content">
        <div className="service_details">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <div className="service_details_content">
                <div className="service_info">
                  <h6 className="subtitle">Services</h6>
                  <h2 className="title">UI/UX Designer</h2>

                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                      deserunt explicabo libero tempore?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                      obcaecati, ullam, aperiam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                      dolores, repellat.
                    </p>
                  </div>

                  <h3 className="title">Service Process</h3>
                  <div className="desc">
                    <p>
                      We follow a proven process to deliver the best results for your product.
                    </p>
                  </div>

                  <ul>
                    <li>Analyze user needs</li>
                    <li>Prototype design</li>
                    <li>Deliver final version</li>
                    <li>Usability testing</li>
                    <li>UI improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-xl-4">
              <div className="tj_main_sidebar">
                <div className="sidebar_widget services_list">
                  <div className="widget_title">
                    <h3 className="title">All Services</h3>
                  </div>
                  <ul>
                    <li className="active">
                      <button>
                        <i className="flaticon-design"></i> Branding Design
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-3d-movie"></i> 3D Animation
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-ux-design"></i> UI/UX Design
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-web-design"></i> Web Design
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-ui-design"></i> App Design
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="sidebar_widget contact_form">
                  <div className="widget_title">
                    <h3 className="title">Get in touch</h3>
                  </div>

                  <form action="#">
                    <div className="form_group">
                      <input type="text" name="name" id="name" placeholder="Name" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" />
                    </div>
                    <div className="form_group">
                      <textarea name="message" id="message" placeholder="Your message" autoComplete="off"></textarea>
                    </div>
                    <div className="form_btn">
                      <button className="btn tj-btn-primary" type="submit">Send Message</button>
                    </div>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
