import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <Services />
        <Portfolio />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}
