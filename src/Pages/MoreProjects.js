import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Styles from "./MoreProjects.module.css";

const MoreProjects = () => {
  return (
    <>
      <header className={Styles.header}>
        <nav className={Styles.nav}>
          <ul>
            <li>
              <NavLink
                to="/moreProjects/allProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                All Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/moreProjects/reactProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                React Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/moreProjects/javaScriptProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                JavaScript Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/moreProjects/otherProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                Other Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default MoreProjects;
