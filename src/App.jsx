import React from "react";
import { useEffect, useRef } from "react";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ServicesAlt from "./components/ServicesAlt";
import ProjectSection from "./components/ProjectSection";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import ContactModalSuccess from "./components/ContactModalSuccess";
import ContactModalFail from "./components/ContactModalFail";
import Footer from "./components/Footer";

/* ---------- CustomCursor component (inside same file) ---------- */
function CustomCursor({ color = "#6C63FF" }) {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  // simple lerp
  const lerp = (a, b, n) => (1 - n) * a + n * b;

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // move target
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    // hoverable elements (adjust selector if needed)
    const hoverSelector = 'a, button, .service-item, .skill-item, .modal-popup, .project-item';
    const addHover = (e) => {
      isHovering.current = true;
      cursor.classList.add("cursor--hover");
    };
    const removeHover = (e) => {
      isHovering.current = false;
      cursor.classList.remove("cursor--hover");
    };

    const hoverElems = Array.from(document.querySelectorAll(hoverSelector));
    hoverElems.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // RAF loop for smooth follow
    let rafId;
    const tick = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.18);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.18);
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };
    tick();

    // cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      hoverElems.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" style={{ ["--cursor-color"]: color }} />;
}

/* ----------------- App component ----------------- */
export default function App() {
  return (
    <div>
      <Header />

      <main>
        <CustomCursor color="#00bcd4" />

        <HeroSection />
        <Services />
        <Portfolio />
        <ProjectSection />
        <ServicesAlt />
     
       
        <Resume />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />

      <BackToTop />

      {/* Modals (mount at end of body) */}
      <ContactModalSuccess />
      <ContactModalFail />
    </div>
  );
}
