// ContactSection.jsx
import React, { useState } from "react";
import "../contact.css";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // ارسال فرم واقعی به Getform
    fetch("https://getform.io/f/anlnrwoa", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => setSent(true))
      .catch((err) => {
        alert("Error sending message. Please try again.");
        console.error(err);
      });
  };

  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-container">

        {/* Form */}
        <div className="contact-form-box">
          <h2>Let's Work Together!</h2>
          <p>I design and code simple, beautiful things — and I love what I do.</p>

          {!sent ? (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_gotcha" style={{ display: "none" }} />

              {/* First & Last Name */}
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />

              {/* Optional Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone (optional)"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          ) : (
            <p className="success-msg" style={{ marginTop: 20 }}>
              Your message has been sent successfully! ✔  
              <br />I will contact you soon.
            </p>
          )}
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-box">
            <p>
              I’m currently available for new projects — feel free to send me a
              message about your project.
            </p>
          </div>

          <ul>
            <li><a href="tel:+989918139066">+98 991 813 9066</a></li>
            <li><a href="mailto:mhidusti@gmail.com">mhidusti@gmail.com</a></li>
          </ul>

          <ul className="social-icons">
            <li><a href="https://www.linkedin.com/in/mohadese-doosti-2a8644373/"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://github.com/mhidusti"><i className="fa-brands fa-github"></i></a></li>
            <li><a href="https://t.me/Moadse"><i className="fa-brands fa-telegram"></i></a></li>
            <li><a href="https://www.instagram.com/mohdse.doosti?igsh=MTQ0aGtnN3p3MTZreg=="><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}
