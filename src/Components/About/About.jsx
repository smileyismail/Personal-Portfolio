import React from "react";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import aboutPic from "../../assets/aboutPic.jpg";

const infoVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "-100vw", opacity: 0 },
};
const imgVariants = {
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: { x: "100vw", opacity: 0 },
};

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>About Me</h1>
        <div className="bg-accent"></div>
      </div>

      <div
        ref={ref}
        className="flex justify-between items-center gap-8 flex-col-reverse lg:flex-row my-auto"
      >
        <motion.div
          className="w-[100%] lg:max-w-[70%] text-center sm:text-start"
          variants={infoVariants}
          animate={inView ? "visible" : "hidden"}
        >
          <p>
            Howdy, I am Syed Ismailuddin I'm a{" "}
            <span className="text-accent font-semibold">
              Front-End Developer{" "}
            </span>
            Living in Hyderabad, India. I describe myself as a passionate
            developer who loves Coding and building websites. I have a proven
            ability to collaborate effectively with senior developers while
            spending extra time to be{" "}
            <span className="text-accent font-semibold">mentored</span>.
          </p>
          <br />
          <p>
            My interest in web development started back in 2018 when I saw my
            seniors personal website which inspired me to create my own website
            so I started learning{" "}
            <span className="text-accent font-semibold">HTML</span>,{" "}
            <span className="text-accent font-semibold">CSS</span> -- turns out
            I was enjoying it and my eager to learn web development grew!
          </p>
          <br />
          <p>
            I learned the web development technologies through different sources
            such as Bootcamps, Institutes, Online Courses, etc. Mostly I learned
            from online courses provided by platforms such as Udemy,
            freeCodeCamp, GFG, coding ninjas, YouTube, etc.
          </p>
          <p>
            <br />
            Fast-forward to today I have done my graduation in
            <span className="text-accent font-semibold">
              {" "}
              Computer Science Engineering
            </span>{" "}
            with a specialization in web development. I also build and worked on
            many real-time projects with{" "}
            <span className="text-accent font-semibold">
              CRUD operations
            </span>{" "}
            and also Using{" "}
            <span className="text-accent font-semibold">API's</span>. I have a
            strong base in Technologies such as{" "}
            <span className="text-accent font-semibold">React</span>,
            <span className="text-accent font-semibold"> JavaScript</span>, etc.
            I am also learning Back-end development and looking forward to being
            a
            <span className="text-accent font-semibold">
              {" "}
              Full Stack Developer
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-xs relative object-cover rounded-lg overflow-hidden"
          variants={imgVariants}
          animate={inView ? "visible" : "hidden"}
        >
          <img src={aboutPic} alt="Syed Ismailuddin" />
          <div className="absolute inset-0 bg-accent opacity-50 hover:opacity-0 duration-300"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
