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
              Full-Stack Developer{" "}
            </span>
            and a
            <span className="text-accent font-semibold">
              {" "}
              Mobile App Developer{" "}
            </span>
            Living in Hyderabad, India. I describe myself as a passionate
            developer who loves Coding and building websites. Demonstrating my
            commitment to growth and learning, I have a proven ability to
            collaborate effectively with other developers while actively seeking
            <span className="text-accent font-semibold"> mentoring</span>.
            opportunities.{" "}
          </p>
          <br />
          <p>
            My passion for web development ignited in 2018 when I encountered my
            senior's personal website, which inspired me to create my own. I
            began learning{" "}
            <span className="text-accent font-semibold">HTML</span> and
            <span className="text-accent font-semibold"> CSS</span>, quickly
            discovering my enjoyment and deepening my interest in web
            development. -- turns out I was enjoying it and my eager to learn
            web development grew!
          </p>
          <br />
          <p>
            I acquired knowledge of web development technologies through various
            channels such as bootcamps, institutes, and online courses. Notably,
            I extensively utilized platforms like Udemy, freeCodeCamp, GFG,
            coding ninjas, and YouTube to expand my skills.
          </p>
          <p>
            <br />
            Fast forward to today, I pursued a specialization in{" "}
            <span className="text-accent font-semibold">
              Web Development
            </span>{" "}
            during my Computer Science Engineering graduation. Additionally, I
            explored{" "}
            <span className="text-accent font-semibold">
              Full-Stack Development
            </span>{" "}
            as well as{" "}
            <span className="text-accent font-semibold">
              Mobile App Development
            </span>{" "}
            and successfully built several applications for both Android and
            iOS.
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
