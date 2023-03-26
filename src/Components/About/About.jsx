import React from "react";

import aboutPic from "../../assets/aboutPic.jpg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section_heading">
        <div className="bg-accent"></div>
        <h1>About Me</h1>
        <div className="bg-accent"></div>
      </div>

      <div className="flex justify-between items-center gap-8 flex-col-reverse lg:flex-row my-auto">
        <div className="w-[100%] lg:max-w-[70%] text-lg  text-start">
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
        </div>

        <div className="w-80">
          <img src={aboutPic} alt="Syed Ismailuddin" />
        </div>
      </div>
    </section>
  );
};

export default About;