import React from "react";

import Resume from "../../assets/Resume.pdf";

import heroPic from "../../assets/heroPic.gif";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="flex justify-between items-center my-auto">
        <div className="max-w-[60%] flex flex-col gap-6">
          <h3 className="text-5xl">Hello World,</h3>
          <h4 className="text-2xl">My name is,</h4>
          <h1 className="text-6xl font-bold">Syed Ismailuddin.</h1>
          <h2 className="text-xl">I Write Code for Internet. </h2>
          <p className="text-lg">
            Front-End Developer with a strong Foundation in Technology and
            Frameworks of today's Standards like
            <span className="text-accent">React</span>,
            <span className="text-accent"> JavaScript</span>, etc. I heartily
            enjoy Building websites and web applications with attention to
            detail and Focusing on
            <span className="text-accent"> mobile-first development</span>.
          </p>

          <div>
            <a href={Resume} download>
              <button className="border-2 border-accent hover:bg-secondary p-4 text-xl font-semibold rounded-xl w-56 mr-4">
                Resume
              </button>
            </a>

            <a href="#contact">
              <button className="border-2 border-accent hover:bg-secondary p-4 text-xl font-semibold rounded-xl w-56">
                Message Me
              </button>
            </a>
          </div>
        </div>

        <div className="w-full border-2">
          <div className="w-[70%]">
            <img src={heroPic} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
