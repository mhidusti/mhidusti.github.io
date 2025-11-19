// ContactSection.jsx
import React, { useState } from "react";
import "../contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovppppg";

export default function ContactSection() {
  const [form, setForm] = useState({
    conName: "",
    conLName: "",
    conEmail: "",
    conPhone: "",
    conMessage: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    ok: null,
    msg: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    // Email Validation
    if (!form.conEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.conEmail)) {
      setStatus({ loading: false, ok: false, msg: "Please enter a valid email." });
      return;
    }

    try {
      // Formspree accepted fields: name, email, message
      const payload = new FormData();
      payload.append("name", `${form.conName} ${form.conLName}`);
      payload.append("email", form.conEmail);
      payload.append(
        "message",
        `Phone: ${form.conPhone}\n\nMessage:\n${form.conMessage}`
      );

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        setStatus({ loading: false, ok: true, msg: "Message sent successfully!" });
        setForm({
          conName: "",
          conLName: "",
          conEmail: "",
          conPhone: "",
          conMessage: ""
        });
      } else {
        const data = await res.json();
        setStatus({
          loading: false,
          ok: false,
          msg: data.error || "Failed to send, please try again."
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Error sending message — check your connection."
      });
    }
  }

  return (
    <section className="contact-section" id="contact-section">
      <div className="contact-container">

        {/* Form */}
        <div className="contact-form-box">
          <h2>Let's Work Together!</h2>
          <p>I design and code simple, beautiful things — and I love what I do.</p>

          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="conName"
              value={form.conName}
              onChange={handleChange}
              placeholder="First Name"
            />

            <input
              type="text"
              name="conLName"
              value={form.conLName}
              onChange={handleChange}
              placeholder="Last Name"
            />

            <input
              type="email"
              name="conEmail"
              value={form.conEmail}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="conPhone"
              value={form.conPhone}
              onChange={handleChange}
              placeholder="Phone"
            />

            <textarea
              name="conMessage"
              value={form.conMessage}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
            />

            <button type="submit">
              {status.loading ? "Sending..." : "Send Message"}
            </button>

            {status.ok === true && (
              <p className="success-msg">{status.msg}</p>
            )}

            {status.ok === false && (
              <p className="error-msg">{status.msg}</p>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-box">
            <p>
              I’m currently available for new projects — feel free to send me a message
              about your project.
            </p>
          </div>

          <ul>
            <li><a href="tel:+989918139066">+98 991 813 9066</a></li>
            <li><a href="mailto:mhidusti@gmail.com">mhidusti@gmail.com</a></li>
          </ul>

          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/mohadese-doosti-2a8644373/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>

            <li>
              <a href="https://github.com/mhidusti">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>

            <li>
              <a href="https://t.me/Moadse">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/mohdse.doosti?igsh=MTQ0aGtnN3p3MTZreg==">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
