import React from "react";

import Header from "./Components/Header/Header";
import SocialMedia from "./Components/Social/SocialMedia";
import SocialEmail from "./Components/Social/SocialEmail";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
// import AllProjects from "./Pages/AllProjects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
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
  );
};

export default App;
