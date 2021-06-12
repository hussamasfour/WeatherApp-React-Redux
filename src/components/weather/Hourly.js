import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { fetchWeather } from "../../action";
const Hourly = (props) => {
  return (
    <div>
      <NavBar />
    </div>
  );
};
const mapStateToProps = (state) => {
  return { weather: Object.values(state.weather.weather) };
};
export default connect(mapStateToProps, { fetchWeather })(Hourly);
