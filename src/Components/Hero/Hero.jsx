import React from "react";
import { motion } from "framer-motion";
import Resume from "../../assets/Resume.pdf";

import heroPic from "../../assets/heroPic.gif";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center sm:items-start gap-7">
          <motion.h3
            className="text-4xl sm:text-5xl"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
          >
            Hello World,
          </motion.h3>
          <motion.h4
            className="text-xl sm:text-2xl"
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
            className="text-md sm:text-lg"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            I Write Code for Internet.
          </motion.h2>
          <p className="text-md sm:text-lg text-center sm:text-start">
            Front-End Developer with a strong Foundation in Technology and
            Frameworks of today's Standards like
            <span className="text-accent">React</span>,
            <span className="text-accent"> JavaScript</span>, etc. I heartily
            enjoy Building websites and web applications with attention to
            detail and Focusing on
            <span className="text-accent"> mobile-first development</span>.
          </p>

          <div className="w-screen flex justify-center items-start md:hidden max-h-[40vh]  overflow-hidden px-[20%]">
            <img src={heroPic} alt="HeroAvatar" className="w-3/4" />
          </div>

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

        <div className="hidden md:block h-[40vh] md:h-auto overflow-hidden">
          <img src={heroPic} alt="HeroAvatar" className="w-10/12" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
