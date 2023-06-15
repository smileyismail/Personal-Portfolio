import React from "react";
import { motion } from "framer-motion";
import Resume from "../../assets/Resume.pdf";

import heroGif from "../../assets/heroGif.gif";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start gap-7 z-10">
          <div className="w-full h-full flex justify-center items-start md:hidden max-h-[40vh]  overflow-hidden object-fill">
            <img
              src={heroGif}
              alt="HeroAvatar"
              className="w-full h-full object-cover"
            />
          </div>

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
            className="text-5xl sm:text-6xl font-bold text-center md:text-start"
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
          <p className="text-md sm:text-lg text-center md:text-start">
            <span className="text-accent font-semibold">
              Full-Stack Developer
            </span>{" "}
            and{" "}
            <span className="text-accent font-semibold">
              Mobile App Development
            </span>{" "}
            with a strong Foundation in Technology and Frameworks of today's
            Standards like <span className="text-accent">React.JS</span>,{" "}
            <span className="text-accent">React Native</span>,{" "}
            <span className="text-accent">Next.JS</span>,{" "}
            <span className="text-accent">Redux</span>,{" "}
            <span className="text-accent"> MERN Stack</span>, etc. I heartily
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

        <div className="hidden md:block h-[40vh] md:h-[90vh] overflow-hidden object-cover">
          <img
            src={heroGif}
            alt="HeroAvatar"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
