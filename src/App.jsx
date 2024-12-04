import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BG_GRADIENT from "./assets/blob-scene-haikei.png";

const App = () => {
  return (
    <div className="bg-[#EAE7EA]">
      <div
        style={{
          backgroundImage: `url(${BG_GRADIENT})`,
          backgroundSize: `cover`,
          backgroundRepeat: "repeat-y",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />

      <Footer />
    </div>
  );
};

export default App;
