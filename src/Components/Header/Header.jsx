import React, { useState } from "react";

import NavDesktop from "./NavBar/NavDesktop";
import NavMobile from "./NavBar/NavMobile";

const Header = () => {
  const [navBgColor, setNavBgColor] = useState(false);

  function navbarFix() {
    if (window.scrollY >= 700) {
      setNavBgColor(true);
    } else {
      setNavBgColor(false);
    }
  }

  window.addEventListener("scroll", navbarFix);

  return (
    <>
      <div
        className={`fixed top-0 px-4 hidden sm:flex z-50  justify-center items-center w-screen ${
          navBgColor ? "bg-secondary" : "bg-primary"
        } transition-all duration-500`}
      >
        <NavDesktop />
      </div>

      <div className="fixed bottom-4 flex sm:hidden z-50 justify-center items-center w-screen bg-transparent">
        <NavMobile />
      </div>
    </>
  );
};

export default Header;
