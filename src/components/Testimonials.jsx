import React from "react";
import "../backend.css";

const reasons = [
  {
    title: "Expertise",

    back: "5+ years of experience in designing and developing responsive, user-friendly websites.",
    translation: "بیش از ۵ سال تجربه در طراحی و توسعه وبسایت‌های واکنش‌گرا و کاربرپسند."
  },
  {
    title: "Custom Solutions",

    back: "I create tailored websites that meet your unique business needs and goals.",
    translation: "وبسایت‌های سفارشی طراحی می‌کنم که نیازها و اهداف منحصر به فرد کسب‌وکار شما را برآورده کنند."
  },
  {
    title: "Performance & Security",

    back: "I ensure your website loads fast, is optimized, and follows best security practices.",
    translation: "اطمینان می‌دهم وبسایت شما سریع بارگذاری شود، بهینه باشد و بهترین استانداردهای امنیتی را رعایت کند."
  },
  {
    title: "Support & Maintenance",
    back: "I provide ongoing support, updates, and maintenance to keep your website running smoothly.",
    translation: "پشتیبانی مداوم، بروزرسانی و نگهداری ارائه می‌دهم تا وبسایت شما بدون مشکل کار کند."
  },
];

export default function BackendCards() {
  return (
    <section className="backend-section" id="backend-process">
      <div className="backend-container">
        <h2 className="backend-title">Why Choose Me for Backend Development?</h2>
        <div className="cards-grid">
          {reasons.map((reason, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h3>{reason.title}</h3>
                  <p>{reason.front}</p>
                </div>
                <div className="flip-card-back">
                  <p>{reason.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
