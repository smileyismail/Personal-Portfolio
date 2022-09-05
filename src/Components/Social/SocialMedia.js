import React from "react";
import Styles from "./Social.module.css";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Social = () => {
  return (
    <div className={Styles.socialMedia}>
      <a href="https://github.com/smileyismail" target="github" title="Github">
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

      <div className={Styles.socialLine}></div>
    </div>
  );
};

export default Social;
