import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";

const Hourly = (props) => {
  // function to render the weather
  const compareDate = (date, d) => {
    let f = new Date(date);

    let e = new Date(d);

    if (f.getHours() >= e.getHours()) {
      return f.getHours();
    }
  };
  console.log(props.weather[0].localtime);
  const renderWeather = () => {
    return props.weather[2].forecastday[1].hour.map((weather) => {
      var s = compareDate(weather.time, props.weather[0].localtime);
      if (s) {
        return (
          <tr key={weather.time}>
            {/* <td>{getDayName(weather.date)}</td> */}
            {/* <td>
            <img src={weather.hour.condition.icon} alt="weather icon" />
            {weather.day.condition.text}
          </td> */}
            <td>{s} </td>
            {/* <td>{weather.day.maxtemp_f} °F</td>
          <td>{weather.day.avghumidity} %</td>
          <td>{weather.day.maxwind_mph} mph</td>
          <td>{weather.day.totalprecip_in} %</td> */}
          </tr>
        );
      }
    });
  };

  if (props.weather.length === 0) {
    return <div>Please Enter city name first </div>;
  }
  return (
    <div className="ui container">
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
  return { weather: Object.values(state.weather.weatherData) };
};
export default connect(mapStateToProps)(Hourly);
