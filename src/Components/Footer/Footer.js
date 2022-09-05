import React from "react";
import Styles from "./Footer.module.css";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="contact" className={Styles.footer}>
      <div className={Styles.social}>
        <a
          href="https://github.com/smileyismail"
          target="github"
          title="Github"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-ismailuddin/"
          target="linkedin"
          title="Linkedin"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/smiley__ismail/"
          target="instagram"
          title="Instagram"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/smiley__ismail"
          target="twitter"
          title="Twitter"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.facebook.com/ismail.uddin.908/"
          target="facebook"
          title="Facebook"
        >
          <FiFacebook />
        </a>
      </div>

      <p>Copyright © Syed Ismailuddin 2021 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
