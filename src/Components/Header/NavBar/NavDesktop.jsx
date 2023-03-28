import React, { useState } from "react";
import { motion } from "framer-motion";

import logo from "../../../assets/logo.png";

import navLinks from "../../../data/navLinks";

const listVariants = {
  hidden: { y: -300, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hover: { scale: 1.1, transition: { delay: 0 } },
};

const NavDesktop = () => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav className="flex justify-between items-center w-full max-w-6xl p-4 h-16">
      <div>
        <a href="#home">
          <img src={logo} alt="logo" className="w-12 rounded-xl" />
        </a>
      </div>

      <ul className="flex justify-center items-center gap-8">
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            className="text-base font-semibold"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.1 + Math.random() }}
          >
            <a
              href={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`${
                activeLink === link.path ? "border-b-2 border-accent" : ""
              } hover:border-b-2 border-accent rounded-b-md duration-150`}
            >
              {link.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
