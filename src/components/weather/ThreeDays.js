import React from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";

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
        <tr key={weather.date}>
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
        </tr>
      );
    });
  };

  if (props.weather.length === 0) {
    return <div>Please Enter city name first </div>;
  }

  return (
    <div>
      <NavBar />
      <div className="ui segment">
        <table className="ui seven column table">
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
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    weather: Object.values(state.weather.weatherData),
  };
};

export default connect(mapStateToProps)(ThreeDays);
