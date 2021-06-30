import { connect } from "react-redux";
import NavBar from "../weather/NavBar";
import "../../sass/main.scss";
import { ReactComponent as TempLogo } from "../../assets/thermometer.svg";
import { ReactComponent as WindLogo } from "../../assets/wind.svg";
import { ReactComponent as HumadityLogo } from "../../assets/droplet.svg";
import { ReactComponent as SunLogo } from "../../assets/sun.svg";
import { ReactComponent as CompressLogo } from "../../assets/compress.svg";
import { ReactComponent as CloudLogo } from "../../assets/cloud.svg";

const Current = ({ weather }) => {
  const currentWeather = weather.current;

  return (
    <div>
      <NavBar />
      <div className="card">
        <div className="card__city">
          <h2>
            {weather.location.name}, {weather.location.region}
          </h2>
          <span className="card__city-timeStamp">
            As of {currentWeather.last_updated.split(" ")[1]}
          </span>
        </div>
        <div className="card__header">
          <img
            className="card__header-icon"
            src={currentWeather.condition.icon}
            alt="weather status"
          />

          <div className="card__header-temp">
            <span className="temp">{currentWeather.temp_f | 0}°</span>
          </div>
        </div>

        <div className="list">
          <div className="list__item">
            <div className="list__item-label">
              <TempLogo className="list__item-icon" />
              Temperature:
            </div>
            <div className="list__item-data"> {currentWeather.temp_f} F</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <TempLogo className="list__item-icon" />
              <span>Feels Like:</span>
            </div>
            <div className="list__item-data">
              {currentWeather.feelslike_f} F
            </div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <WindLogo className="list__item-icon" />
              <span>Wind:</span>
            </div>
            <div className="list__item-data">{currentWeather.wind_mph} mph</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <WindLogo className="list__item-icon"></WindLogo>
              <span>Wind Gusts:</span>
            </div>
            <div className="list__item-data">{currentWeather.gust_mph} mph</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <HumadityLogo className="list__item-icon" />
              <span>Humidity:</span>
            </div>
            <div className="list__item-data">{currentWeather.humidity} %</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <SunLogo className="list__item-icon" />
              <span>UV Index:</span>
            </div>
            <div className="list__item-data">{currentWeather.uv} of 10</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <CompressLogo className="list__item-icon" />
              <span>Pressure:</span>
            </div>
            <div className="list__item-data">
              {currentWeather.pressure_in} in
            </div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <CloudLogo className="list__item-icon" />
              <span>Cloud:</span>
            </div>
            <div className="list__item-data">{currentWeather.cloud} %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather.weatherData };
};

export default connect(mapStateToProps)(Current);
