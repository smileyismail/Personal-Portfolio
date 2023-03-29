import React from "react";
import { motion } from "framer-motion";
import Resume from "../../assets/Resume.pdf";

import heroPic from "../../assets/heroPic.gif";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="flex justify-between sm:flex-row flex-col-reverse items-center my-auto">
        <div className="w-full flex justify-center items-center sm:items-start flex-col gap-6">
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
            className="text-5xl sm:text-6xl font-bold text-center"
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

          <div className="flex gap-2">
            <a href={Resume} download>
              <button className="border-2 border-accent hover:bg-secondary p-2 sm:p-4 text-xl font-semibold rounded-xl w-40 sm:w-56 duration-200 hover:drop-shadow-2xl">
                Resume
              </button>
            </a>

            <a href="#contact">
              <button className="border-2 border-accent hover:bg-secondary p-2 sm:p-4 text-lg sm:text-xl font-semibold rounded-xl w-40 sm:w-56 duration-200 hover:drop-shadow-2xl">
                Message Me
              </button>
            </a>
          </div>
        </div>

        <div className="w-[24rem] h-[24rem] sm:w-full sm:h-full border-2 border-red-500 flex justify-start items-start overflow-hidden">
          <img
            src={heroPic}
            alt="hero"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
