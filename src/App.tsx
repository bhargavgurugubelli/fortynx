import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from './components/Testimonials';

import CTA from "./components/CTA";
import Contact from "./components/Contact";
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
      <Testimonials />
      <CTA /> 
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
