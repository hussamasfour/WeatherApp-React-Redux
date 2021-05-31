import React from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../action";

class Weather extends React.Component {
  renderWeather() {
    return this.props.weather[0].map((weather) => {
      return (
        <tbody>
          <tr>
            <td>{weather.date}</td>
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
        </tbody>
      );
    });
  }
  render() {
    if (this.props.weather.length === 0) {
      return <div> </div>;
    }

    return (
      <table class="ui seven column table">
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
        {this.renderWeather()}
      </table>
    );
  }
}
const mapStateToProps = (state) => {
  return { weather: Object.values(state.weather) };
};

export default connect(mapStateToProps, { fetchWeather })(Weather);
