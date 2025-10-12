import React from 'react';

export default function Footer() {
  return (
    <>
<footer className="tj-footer-area style-2">
      <div className="container">
         <div className="row">
            <div className="col-md-12 text-center">
               <div className="footer-logo-box">
                  <a href="#"><img src="assets/img/logo/logo.png" alt=""></a>
               </div>
               <div className="footer-menu">
                  <nav>
                     <ul>
                        <li><a href="#services-section">خدمات</a></li>
                        <li><a href="#works-section">نمونه کارها</a></li>
                        <li><a href="#resume-section">رزومه</a></li>
                        <li><a href="#skills-section">مهارت ها</a></li>
                        <li><a href="#testimonials-section">گواهینامه ها</a></li>
                        <li><a href="#contact-section">تماس با ما</a></li>
                     </ul>
                  </nav>
               </div>
               <div className="copy-text style-2">
                  <p>&copy; تمامی حقوق محفوظ است <a href="#" target="_blank">تیم جانکسون</a></p>
               </div>
            </div>
         </div>
      </div>
   </footer>
    </>
  );
}
