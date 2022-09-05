import React from "react";
import Styles from "./About.module.css";

import aboutPic from "../../assets/aboutPic.jpg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section_heading">
        <h1>
          <span>About Me</span>
        </h1>
      </div>

      <div className={Styles.about}>
        <div className={Styles.about_left}>
          <p>
            Howdy, I am Syed Ismailuddin I'm a <span>Front-End Developer </span>
            Living in Hyderabad, India. I describe myself as a passionate
            developer who loves Coding and building websites. I have a proven
            ability to collaborate effectively with senior developers while
            spending extra time to be <span>mentored</span>.
          </p>
          <p>
            My interest in web development started back in 2018 when I saw my
            seniors personal website which inspired me to create my own website
            so I started learning <span>HTML</span>, <span>CSS</span> -- turns
            out I was enjoying it and my eager to learn web development grew!
          </p>
          <p>
            I learned the web development technologies through different sources
            such as Bootcamps, Institutes, Online Courses, etc. Mostly I learned
            from online courses provided by platforms such as Udemy,
            freeCodeCamp, GFG, coding ninjas, YouTube, etc.
          </p>
          <p>
            Fast-forward to today I have done my graduation in
            <span> Computer Science Engineering</span> with a specialization in
            web development. I also build and worked on many real-time projects
            with <span>CRUD operations</span> and also Using <span>API's</span>.
            I have a strong base in Technologies such as <span>React</span>,
            <span> JavaScript</span>, etc. I am also learning Back-end
            development and looking forward to being a
            <span> Full Stack Developer</span>.
          </p>
        </div>

        <div className={Styles.about_right}>
          <img src={aboutPic} alt="Syed Ismailuddin" />
        </div>
      </div>
    </section>
  );
};

export default About;
