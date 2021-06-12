import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className="ui pointing menu">
        <NavLink className=" item" to="/current">
          Now
        </NavLink>
        <NavLink className="item" to="/weather">
          3 days
        </NavLink>
        <NavLink className="item" to="/hourly">
          Hourly
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
