import React from "react";

export default function BrandSection() {
  return (
    <section className="brand-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header style-2">
              <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                Worked With Big Brands
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="swiper brand-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brand-item wow fadeInUp" data-wow-delay=".4s">
                    <a href="#"><img src="assets/img/brand/brand-1.png" alt="Brand" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item wow fadeInUp" data-wow-delay=".5s">
                    <a href="#"><img src="assets/img/brand/brand-2.png" alt="Brand" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item wow fadeInUp" data-wow-delay=".6s">
                    <a href="#"><img src="assets/img/brand/brand-3.png" alt="Brand" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item wow fadeInUp" data-wow-delay=".7s">
                    <a href="#"><img src="assets/img/brand/brand-4.png" alt="Brand" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item wow fadeInUp" data-wow-delay=".8s">
                    <a href="#"><img src="assets/img/brand/brand-5.png" alt="Brand" /></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brand-item wow fadeInUp" data-wow-delay=".9s">
                    <a href="#"><img src="assets/img/brand/brand-6.png" alt="Brand" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}
