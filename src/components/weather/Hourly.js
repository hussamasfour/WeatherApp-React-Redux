import React from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";
import { formatTime } from "../../util/weather.util";
import "../../sass/main.scss";

import { ReactComponent as WindLogo } from "../../assets/wind.svg";
import { ReactComponent as RainChance } from "../../assets/eyedropper.svg";
const Hourly = ({ weather }) => {
  const renderWeather = () => {
    return weather.forecast.forecastday[1].hour.map((hour) => {
      let time = formatTime(hour.time, weather.location.localtime);
      if (time) {
        return (
          <div className="details" key={hour.time}>
            <div className="details__date">{time}</div>
            <div className="details__temp temp">{hour.temp_f | 0}°</div>
            <div className="details__summary">
              <img
                className="details__icon"
                src={hour.condition.icon}
                alt="weather icon"
              />
              <span className="details__text">{hour.condition.text}</span>
            </div>
            <div className="details__precip">
              <RainChance className="list__item-icon" />
              <span>{hour.chance_of_rain | 0}%</span>
            </div>
            <div className="details__wind">
              <WindLogo className="list__item-icon"></WindLogo>
              <span>{hour.wind_mph | 0} mph</span>
            </div>
          </div>
        );
      }
    });
  };
  if (weather.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <NavBar />
      <div className="day">{renderWeather()}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { weather: state.weather.weatherData };
};
export default connect(mapStateToProps)(Hourly);
