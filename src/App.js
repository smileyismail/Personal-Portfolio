import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import SocialMedia from "./Components/Social/SocialMedia";
import SocialEmail from "./Components/Social/SocialEmail";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import MoreProjects from "./Pages/moreProjects";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <SocialMedia />
            <SocialEmail />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer />
          </>
        }
      />
      <Route path="moreProjects" element={<MoreProjects />} />
    </Routes>
  );
};

export default App;
