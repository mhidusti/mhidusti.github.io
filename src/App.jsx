import React from "react";

import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import ServicesAlt from "./components/ServicesAlt";
import ServicePopup from "./components/ServicePopup";
import ProjectSection from "./components/ProjectSection";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import BrandSection from "./components/BrandSection";
import ContactSection from "./components/ContactSection";
import ContactModalSuccess from "./components/ContactModalSuccess";
import ContactModalFail from "./components/ContactModalFail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>

      <Header />

      <main>
        <HeroSection />
        <Services />  
        <ServicesAlt />
        <ServicePopup />
        <ProjectSection />
        <Portfolio/>
        <Resume />
        <Testimonials />
        <BrandSection />
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
