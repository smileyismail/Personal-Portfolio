import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import SocialMedia from "./Components/Social/SocialMedia";
import SocialEmail from "./Components/Social/SocialEmail";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";

import MoreProjects from "./Pages/MoreProjects";
import AllProjects from "./Pages/AllProjects";
import ReactProjects from "./Pages/ReactProjects";
import JavaScriptProjects from "./Pages/JavaScriptProjects";
import OtherProjects from "./Pages/OtherProjects";

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
      <Route path="moreProjects" element={<MoreProjects />}>
        <Route
          path="/moreProjects"
          element={<Navigate to="/moreProjects/allProjects" />}
        />
        <Route path="allProjects" element={<AllProjects />} />
        <Route path="reactProjects" element={<ReactProjects />} />
        <Route path="javaScriptProjects" element={<JavaScriptProjects />} />
        <Route path="otherProjects" element={<OtherProjects />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
