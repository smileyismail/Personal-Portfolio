import React, { useState } from "react";

import logo from "../../../assets/logo.png";

import navLinks from "../../../data/navLinks";

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
          <li key={link.id} className="text-base font-semibold">
            <a
              href={link.path}
              onClick={() => setActiveLink(link.path)}
              className={`${
                activeLink === link.path ? "border-b-2 border-accent" : ""
              }`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
