import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import navLinks from "../../../data/navLinks";

const navVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  hidden: { y: 200, opacity: 0, transition: { duration: 0.4 } },
};

const NavMobile = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <motion.nav
      className={`justify-center items-center p-4 h-14 bg-secondary rounded-3xl border-[0.1px] border-accent ${
        visible ? "flex " : "hidden"
      }`}
      variants={navVariants}
      initial="visible"
      animate={visible ? "visible" : "hidden"}
    >
      <ul className="flex justify-center items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`text-2xl ${
                activeLink === link.path ? "text-accent" : ""
              }`}
            >
              {link.icon}
            </a>
          </li>
        ))}
        {/* <button onClick={() => setIsNavVisibile(!isNavVisible)}>
              test
            </button> */}
      </ul>
    </motion.nav>
  );
};

export default NavMobile;
