import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import BounceLoader from "react-spinners/BounceLoader";

import Header from "./Components/Header/Header";

import SocialMedia from "./Components/Social/SocialMedia";
import SocialEmail from "./Components/Social/SocialEmail";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Works from "./Components/Works/Works";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-primary text-customText">
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <BounceLoader
            color={"#05668D"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Header />
          <main className="w-[80vw] mx-auto flex flex-col justify-center items-center">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <SocialMedia />
                    <SocialEmail />
                    <Hero />
                    <About />
                    <Skills />
                    <Works />
                    <Projects />
                    <Contact />
                    <Footer />
                  </>
                }
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
