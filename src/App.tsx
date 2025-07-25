
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProjectsSection from './components/ProjectsSection';
import Testimonials from './components/Testimonials';
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import DirectorMessage from "./components/DirectorMessage";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import "/public/assets/css/particles.css";

const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <ProjectsSection />
      <Testimonials />
      <CTA /> 
      <Contact />
      <DirectorMessage />
      <Footer />
      <WhatsAppButton />
    </>
  );
};


export default App;
