import React from "react";
import { NavLink } from "react-router-dom";


import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <React.Fragment>
        <ul className="nav-links">
      <li>
        <NavLink to="/" exact>Home</NavLink>
      </li>

      <li>
        <NavLink to="/uid/resume">Saved</NavLink>
      </li>

      <li>
        <NavLink to="/templates">Templates</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>

    </React.Fragment>
    
  );
};

export default NavLinks;
