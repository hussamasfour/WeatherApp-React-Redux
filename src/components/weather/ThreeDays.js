import React from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";
import "../../sass/main.scss";
import { ReactComponent as WindLogo } from "../../assets/wind.svg";
import { getDayName } from "../../util/weather.util";
const ThreeDays = (props) => {
  // function to render the weather
  const renderWeather = () => {
    return props.weather[2].forecastday.map((weather) => {
      return (
        <div className="details" key={weather.date}>
          <div className="details__date">{getDayName(weather.date)}</div>
          <div className="details__temp">
            <div className="details__maxTemp">{weather.day.maxtemp_f | 0}°</div>
            /
            <div className="details__minTemp">{weather.day.mintemp_f | 0}°</div>
          </div>

          <div className="details__summary">
            <img
              className="details__icon"
              src={weather.day.condition.icon}
              alt="weather icon"
            />
            <span className="details__text">{weather.day.condition.text}</span>
          </div>
          <div className="details__precip">
            <svg
              className="list__item-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <title>eyedropper</title>
              <path d="M15.414 0.586c-0.781-0.781-2.047-0.781-2.828 0l-2.689 2.689-1.896-1.896-2.121 2.121 1.663 1.663-7.377 7.377c-0.126 0.126-0.179 0.296-0.161 0.46h-0.004v2.5c0 0.276 0.224 0.5 0.5 0.5h2.5c0 0 0.042 0 0.063 0 0.144 0 0.288-0.055 0.398-0.165l7.377-7.377 1.663 1.663 2.121-2.121-1.896-1.896 2.689-2.689c0.781-0.781 0.781-2.047 0-2.828zM2.705 15h-1.705v-1.705l7.337-7.337 1.704 1.704-7.337 7.337z"></path>
            </svg>
            <span>{(weather.day.totalprecip_in * 100) | 0}%</span>
          </div>
          <div className="details__wind">
            <WindLogo className="list__item-icon"> </WindLogo>
            <span>{weather.day.maxwind_mph | 0} mph</span>
          </div>
        </div>
      );
    });
  };

  if (props.weather.length === 0) {
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
  return {
    weather: Object.values(state.weather.weatherData),
  };
};

export default connect(mapStateToProps)(ThreeDays);
