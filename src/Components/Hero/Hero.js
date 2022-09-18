import React from "react";
import Styles from "./Hero.module.css";

import Resume from "../../assets/Resume.pdf";

import heroPic from "../../assets/heroPic.gif";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className={Styles.hero}>
        <div className={Styles.hero_left}>
          <h3>Hello World,</h3>
          <h4>My name is,</h4>
          <h1>Syed Ismailuddin.</h1>
          <h2>I Write Code for Internet. </h2>
          <p>
            Front-End Developer with a strong Foundation in Technology and
            Frameworks of today's Standards like <span>React</span>,
            <span> JavaScript</span>, etc. <br /> <br /> I heartily enjoy
            Building websites and web applications with attention to detail and
            Focusing on
            <span> mobile-first development</span>.
          </p>

          <div className={Styles.buttons}>
            <a href={Resume} download className="button">
              Resume
            </a>

            <a href="#contact" className="linkButton">
              Message Me
            </a>
          </div>
        </div>

        <div className={Styles.hero_right}>
          <img src={heroPic} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
