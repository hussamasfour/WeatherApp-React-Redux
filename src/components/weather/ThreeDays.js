import React from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";
import "../../sass/main.scss";

const ThreeDays = (props) => {
  // function to get day name of a selected date

  const getDayName = (date) => {
    var days = ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"];
    var d = new Date(date);
    return days[d.getDay()];
  };

  // function to render the weather
  const renderWeather = () => {
    return props.weather[2].forecastday.map((weather) => {
      return (
        <div className="details">
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
            <svg
              className="list__item-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="28"
              viewBox="0 0 29 28"
            >
              <title>wind</title>
              <path d="M30 14c0-2.209-1.795-4-4-4-2.209 0-4 1.789-4 4h2c0-1.105 0.888-2 2-2 1.105 0 2 0.888 2 2 0 1.105-0.89 2-2.004 2h-22.996v2h23.002c2.208 0 3.998-1.795 3.998-4v0zM21 10c0-2.209-1.795-4-4-4-2.209 0-4 1.789-4 3.997v0.003h2c0-1.105 0.888-2 2-2 1.105 0 2 0.888 2 2 0 1.105-0.897 2-2.006 2h-11.994v2h12.004c2.207 0 3.996-1.795 3.996-4v0zM26 23c0 1.657-1.347 3-3 3v0c-1.657 0-3-1.342-3-2.991v-0.009h2c0 0.552 0.444 1 1 1v0c0.552 0 1-0.444 1-1v0c0-0.552-0.449-1-1.007-1h-13.993v-2h14c1.657 0 3 1.347 3 3v0 0z"></path>
            </svg>
            <span>{weather.day.maxwind_mph} mph</span>
          </div>
        </div>

        /* <tr key={weather.date}>
          <td>{getDayName(weather.date)}</td>
          <td>
            <img src={weather.day.condition.icon} alt="weather icon" />
            {weather.day.condition.text}
          </td>
          <td>{weather.day.mintemp_f} °F</td>
          <td>{weather.day.maxtemp_f} °F</td>
          <td>{weather.day.avghumidity} %</td>
          <td>{weather.day.maxwind_mph} mph</td>
          <td>{weather.day.totalprecip_in} %</td>
        </tr> */
      );
    });
  };

  if (props.weather.length === 0) {
    return <div>Please Enter city name first </div>;
  }

  return (
    <div className="">
      <NavBar />
      <div className="day">{renderWeather()}</div>
      {/* <table className="ui seven column table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Conditions</th>
              <th>Min Temp</th>
              <th>Max Temp</th>
              <th>Humidity</th>
              <th>Max Wind</th>
              <th>Precip</th>
            </tr>
          </thead>
          <tbody>{renderWeather()}</tbody>
        </table> */}
    </div>
  );

  return;
};
const mapStateToProps = (state) => {
  return {
    weather: Object.values(state.weather.weatherData),
  };
};

export default connect(mapStateToProps)(ThreeDays);
