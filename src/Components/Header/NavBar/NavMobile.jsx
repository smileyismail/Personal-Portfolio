import React, { useState } from "react";

import navLinks from "../../../data/navLinks";

const NavMobile = () => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav className="flex justify-center items-center p-4 h-14 bg-secondary rounded-3xl border-[0.1px] border-accent">
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
      </ul>
    </nav>
  );
};

export default NavMobile;

