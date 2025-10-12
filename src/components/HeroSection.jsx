import React from 'react';

export default function HeroSection() {
  return (
    <>
<section className="hero-section style-2 d-flex align-items-center" id="intro">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="hero-wrrapper wow fadeInUp" data-wow-delay=".4s">
                     <div className="hero-image-box d-none d-md-inline-block">
                        <img src="assets/img/hero/hero-2.png" alt="">
                     </div>
                     <div className="hero-content-box">
                        <h1 className="hero-title">سلام، من سام هستم - وب <br>توسعه دهنده + طراح UX</h1>
                        <div className="hero-image-box d-md-none text-center">
                           <img src="assets/img/hero/me.png" alt="">
                        </div>
                        <p className="lead">من چیزهای ساده و زیبا را طراحی و کدنویسی می کنم و کاری را که انجام می دهم دوست دارم.
                        </p>
                        <div className="button-box d-flex flex-wrap align-items-center">
                           <a href="#" className="tj-btn-primary-2">
                              دریافت رزومه !
                              <span className="icon_box">
                                 <i className="fa-regular fa-arrow-right icon_first"></i>
                                 <i className="fa-regular fa-arrow-right icon_second"></i>
                              </span>
                           </a>
                           <ul className="ul-reset social-icons style-2">
                              <li>
                                 <a href="#"><i className="fa-brands fa-twitter"></i></a>
                              </li>
                              <li>
                                 <a href="#"><i className="fa-light fa-basketball"></i></a>
                              </li>
                              <li>
                                 <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                              </li>
                              <li>
                                 <a href="#"><i className="fa-brands fa-github"></i></a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="funfact-area style-2">
                     <div className="funfact-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="funfact-icon">
                           <i className="flaticon-trophy"></i>
                        </div>
                        <div className="number"><span className="odometer" data-count="14">0</span>%</div>
                        <div className="text">دستاوردهای شغلی</div>
                     </div>
                     <div className="funfact-item wow fadeInUp" data-wow-delay=".4s">
                        <div className="funfact-icon">
                           <i className="flaticon-suitcase"></i>
                        </div>
                        <div className="number"><span className="odometer" data-count="50">0</span>+</div>
                        <div className="text">سابقه کاری</div>
                     </div>
                     <div className="funfact-item wow fadeInUp" data-wow-delay=".5s">
                        <div className="funfact-icon">
                           <i className="flaticon-menu"></i>
                        </div>
                        <div className="number"><span className="odometer" data-count="1.5">0</span>K</div>
                        <div className="text">مشتریان خوشحال</div>
                     </div>
                     <div className="funfact-item wow fadeInUp" data-wow-delay=".6s">
                        <div className="funfact-icon">
                           <i className="flaticon-crown"></i>
                        </div>
                        <div className="number"><span className="odometer" data-count="14">0</span>+</div>
                        <div className="text">پروژهای اتمام شده</div>
                     </div>
                  </div>
                  <div className="about-area">
                     <div className="row">
                        <div className="col-lg-7">
                           <div className="about-left-content  wow fadeInUp" data-wow-delay=".3s">
                              <h2 className="title">دستاوردهای زندگی حرفه ای من.</h2>
                              <div className="desc">
                                 <p className="lead">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                 </p>
                              </div>
                              <div className="about-button d-flex">
                                 <a href="#" className="btn tj-btn-primary-2">تماس با من
                                    <span className="icon_box">
                                       <i className="fa-regular fa-arrow-right icon_first"></i>
                                       <i className="fa-regular fa-arrow-right icon_second"></i>
                                    </span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-5">
                           <div className="about-right-content  wow fadeInUp" data-wow-delay=".5s">
                              <div className="about-text">
                                 <h5 className="title">طراح رابط</h5>
                                 <div className="desc">
                                    <p>
                                       لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                                    </p>
                                 </div>
                              </div>
                              <div className="about-images">
                                 <img src="assets/img/hero/about-1.png" alt="Images">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
