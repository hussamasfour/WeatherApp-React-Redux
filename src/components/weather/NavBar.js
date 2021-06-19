import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <NavLink className="nav__link" to="/current">
          Now
        </NavLink>
        <NavLink className="nav__link" to="/weather">
          3 days
        </NavLink>
        <NavLink className="nav__link" to="/hourly">
          Hourly
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
