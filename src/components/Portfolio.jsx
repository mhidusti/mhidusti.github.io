import React, { useEffect, useRef, useState } from "react";
import "../portfolio.css";

const projects = [
  { title: "Menu App", image: "/assets/img/portfolio/meno.png", description: "Frontend React project and backend restAPI." },
  { title: "IranMarket",  image: "/assets/img/portfolio/irankala.png", description: "Backend Django API project with product management." },
  { title: "Cosmetic Store",  image: "/assets/img/portfolio/cosmetic.png", description: "Full-Stack eCommerce built with Django & React." },
  { title: "Arat Platform",  image: "/assets/img/portfolio/arat.png", description: "django backend with seo" },
  { title: "api design",  image: "/assets/img/portfolio/api.png", description: "Task management app with React & Django REST And react." },

];

// مسیر فایل‌های شبیه‌سازی شده / تصاویر / GIF
const mockperv = {
  "Menu App": "/assets/mock-perv/food.mp4",
  "IranMarket": "/assets/mock-perv/iranmarket.mp4",
  "Cosmetic Store": "/assets/mock-perv/cosmetic.gif.mp4",
  "Arat Platform": "/assets/mock-perv/ARAT.mp4",
  "api design": "/assets/mock-perv/API.mp4",
};

export default function PortfolioScroll() {
  const containerRef = useRef(null);
  const scrollingRef = useRef(false);
  const [activeProject, setActiveProject] = useState(null);

  // اسکرول نرم افقی
  const smoothScroll = (container, target) => {
    const start = container.scrollLeft;
    const change = target - start;
    const duration = 200;
    let currentTime = 0;
    const easeOutQuad = (t) => t * (2 - t);

    const animate = () => {
      currentTime += 16;
      const progress = Math.min(currentTime / duration, 1);
      container.scrollLeft = start + change * easeOutQuad(progress);
      if (progress < 1) requestAnimationFrame(animate);
      else scrollingRef.current = false;
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollLeft = 0;

    const onWheel = (e) => {
      e.preventDefault();
      if (scrollingRef.current) return;
      scrollingRef.current = true;

      const scrollAmount = e.deltaY * 2.5;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (scrollAmount > 0) {
        if (container.scrollLeft + scrollAmount >= maxScroll) {
          smoothScroll(container, maxScroll);
          setTimeout(() => {
            window.scrollBy({ top: scrollAmount, behavior: "smooth" });
          }, 200);
        } else {
          smoothScroll(container, container.scrollLeft + scrollAmount);
        }
      } else {
        if (window.scrollY > 0 && container.scrollLeft <= 0) {
          window.scrollBy({ top: scrollAmount, behavior: "smooth" });
          scrollingRef.current = false;
        } else {
          smoothScroll(container, container.scrollLeft + scrollAmount);
        }
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  const openProject = (project) => {
    // باز کردن پیش‌نمایش شبیه‌سازی شده
    const preview = mockperv[project.title];
    if (preview) setActiveProject(preview);
  };

  return (


<section id="portfolio-scroll-section" className="portfolio-scroll-section">

  <div className="portfolio-title-box fade-in-top">
    <h2> Creative Digital Works
</h2>
    <p>Some of the projects I’ve crafted with love — blending design, functionality & real business needs.</p>
  </div>




      <div className="portfolio-scroll-inner" ref={containerRef}>
     
        {projects.map((p, i) => (
          <div key={i} className="portfolio-card fade-in">
            <div
              className="portfolio-img-wrapper"
              onClick={() => openProject(p)}
            >
              <img src={p.image} alt={p.title} />
            </div>
            <div className="portfolio-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
{/* Slide-in Panel */}
<div className={`slide-panel ${activeProject ? "open" : ""}`}>
  <button className="close-btn" onClick={() => setActiveProject(null)}>×</button>

  {activeProject && (
    activeProject.endsWith(".gif") ? (
      <div className="gif-preview-wrapper">
        <img src={activeProject} alt="Project GIF Preview" className="gif-preview" />
      </div>
    ) : (
      <iframe src={activeProject} title="Mock Preview" />
    )
  )}
</div>

      
    </section>
  );
}
