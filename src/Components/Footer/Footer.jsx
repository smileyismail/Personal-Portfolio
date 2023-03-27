import React from "react";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="flex justify-center items-center flex-col p-4 gap-4 bg-secondary w-screen">
      <div className="flex gap-4 text-xl">
        <a
          href="https://github.com/smileyismail"
          target="github"
          title="Github"
          className="hover:text-accent duration-200"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/syed-ismailuddin/"
          target="linkedin"
          title="Linkedin"
          className="hover:text-accent duration-200"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/smiley__ismail/"
          target="instagram"
          title="Instagram"
          className="hover:text-accent duration-200"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/smiley__ismail"
          target="twitter"
          title="Twitter"
          className="hover:text-accent duration-200"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.facebook.com/ismail.uddin.908/"
          target="facebook"
          title="Facebook"
          className="hover:text-accent duration-200"
        >
          <FiFacebook />
        </a>
      </div>

      <p className="text-sm">
        Copyright © Syed Ismailuddin 2021 All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
