import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <NavLink
          className="nav__link"
          activeClassName="nav__selected"
          to="/current"
        >
          Now
        </NavLink>
        <NavLink
          className="nav__link"
          activeClassName="nav__selected"
          to="/weather"
        >
          3 days
        </NavLink>
        <NavLink
          className="nav__link"
          activeClassName="nav__selected"
          to="/hourly"
        >
          Hourly
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
