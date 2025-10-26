import React from "react";

function ScrollDown({ targetId = "skills-section" }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button className="scroll-down filled" onClick={handleClick} aria-label="Scroll down">
      <span className="scroll-down__arrow" />
    </button>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section style-2 d-flex align-items-center" id="intro">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="hero-content-box wow fadeInUp text-center" data-wow-delay=".3s">
              <h1 className="hero-title">
                I'm <span>Mohadese</span>, <br /> a passionate Full Stack Developer
              </h1>

              <p className="lead">
                I design and build modern web applications from front-end interfaces to back-end systems — clean, fast, and user-focused.
              </p>

              <ul
                className="ul-reset social-icons style-2 d-flex"
                style={{ justifyContent: "center", gap: 18 }}
              >
           
                <li><a href="https://www.linkedin.com/in/mohadese-doosti-2a8644373/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/mhidusti"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://t.me/Moadse"><i className="fa-brands fa-telegram"></i></a></li>
                <li><a href="https://www.instagram.com/mohdse.doosti?igsh=MTQ0aGtnN3p3MTZreg=="><i className="fa-brands fa-instagram"></i></a></li>
              </ul>

              {/* فلش پایین برای اسکرول به بخش Skills */}
              <div style={{ marginTop: 45 }}>
                <ScrollDown targetId="skills-section" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
