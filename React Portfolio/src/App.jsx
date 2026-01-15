import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testmonials from "./sections/Testmonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="relative gradients">
      <CustomCursor />
      <ParticleBackground />

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testmonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
