import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/Header/Header";

// import SocialMedia from "./Components/Social/SocialMedia";
// import SocialEmail from "./Components/Social/SocialEmail";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Works from "./Components/Works/Works";

const App = () => {
  return (
    <div className="bg-primary text-customWhite">
      <Header />
      <main className="w-[80vw] mx-auto flex flex-col justify-center items-center gap-10">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <SocialMedia /> */}
                {/* <SocialEmail /> */}
                <Hero />
                <About />
                <Skills />
                <Works />
                <Projects />
                <ContactMe />
                <Footer />
              </>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
