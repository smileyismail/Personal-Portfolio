import React from "react";
import { motion } from "framer-motion";
import Resume from "../../assets/Resume.pdf";

import heroPic from "../../assets/heroPic.gif";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="flex justify-between items-center my-auto">
        <div className="max-w-[60%] flex flex-col gap-6">
          <motion.h3
            className="text-5xl"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            Hello World,
          </motion.h3>
          <motion.h4
            className="text-2xl"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            My name is,
          </motion.h4>
          <motion.h1
            className="text-6xl font-bold"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Syed Ismailuddin.
          </motion.h1>
          <motion.h2
            className="text-xl"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            I Write Code for Internet.
          </motion.h2>
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
