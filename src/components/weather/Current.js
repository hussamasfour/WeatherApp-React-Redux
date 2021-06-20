import { connect } from "react-redux";
import NavBar from "../weather/NavBar";
import "../../sass/main.scss";

const Current = (props) => {
  if (props.weather.length === 0) {
    return <div>Please Enter city name first</div>;
  }

  const currentWeather = props.weather[1];

  return (
    <div className="">
      <NavBar />
      <div className="card">
        <div className="card__city">
          <h2>
            {props.weather[0].name}, {props.weather[0].region}
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
              <svg
                className="list__item-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="28"
                viewBox="0 0 16 28"
              >
                <title>thermometer</title>
                <path d="M10 21c0 1.656-1.344 3-3 3s-3-1.344-3-3c0-1.25 0.781-2.391 2-2.828v-14.172h2v14.172c1.219 0.438 2 1.578 2 2.828zM12 21c0-1.641-0.781-3.078-2-4v-12c0-1.656-1.344-3-3-3s-3 1.344-3 3v12c-1.219 0.922-2 2.359-2 4 0 2.766 2.234 5 5 5s5-2.234 5-5zM14 21c0 3.859-3.141 7-7 7s-7-3.141-7-7c0-1.906 0.766-3.625 2-4.891v-11.109c0-2.766 2.234-5 5-5s5 2.234 5 5v11.109c1.234 1.266 2 2.984 2 4.891zM16 12v2h-3v-2h3zM16 8v2h-3v-2h3zM16 4v2h-3v-2h3z"></path>
              </svg>
              Temperature:
            </div>
            <div className="list__item-data"> {currentWeather.temp_f} F</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <svg
                className="list__item-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="28"
                viewBox="0 0 16 28"
              >
                <title>thermometer</title>
                <path d="M10 21c0 1.656-1.344 3-3 3s-3-1.344-3-3c0-1.25 0.781-2.391 2-2.828v-14.172h2v14.172c1.219 0.438 2 1.578 2 2.828zM12 21c0-1.641-0.781-3.078-2-4v-12c0-1.656-1.344-3-3-3s-3 1.344-3 3v12c-1.219 0.922-2 2.359-2 4 0 2.766 2.234 5 5 5s5-2.234 5-5zM14 21c0 3.859-3.141 7-7 7s-7-3.141-7-7c0-1.906 0.766-3.625 2-4.891v-11.109c0-2.766 2.234-5 5-5s5 2.234 5 5v11.109c1.234 1.266 2 2.984 2 4.891zM16 12v2h-3v-2h3zM16 8v2h-3v-2h3zM16 4v2h-3v-2h3z"></path>
              </svg>
              <span>Feels Like:</span>
            </div>
            <div className="list__item-data">
              {currentWeather.feelslike_f} F
            </div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
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
              <span>Wind:</span>
            </div>
            <div className="list__item-data">{currentWeather.wind_mph} mph</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
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
              <span>Wind Gusts:</span>
            </div>
            <div className="list__item-data">{currentWeather.gust_mph} mph</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <svg
                className="list__item-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="27"
                viewBox="0 0 16 20"
              >
                <title>droplet</title>
                <path d="M13.51 7.393c-1.027-2.866-3.205-5.44-5.51-7.393-2.305 1.953-4.482 4.527-5.51 7.393-0.635 1.772-0.698 3.696 0.197 5.397 1.029 1.955 3.104 3.21 5.313 3.21s4.284-1.255 5.313-3.21c0.895-1.701 0.832-3.624 0.197-5.397zM11.543 11.859c-0.684 1.301-2.075 2.141-3.543 2.141-0.861 0-1.696-0.29-2.377-0.791 0.207 0.027 0.416 0.041 0.627 0.041 1.835 0 3.573-1.050 4.428-2.676 0.701-1.333 0.64-2.716 0.373-3.818 0.227 0.44 0.42 0.878 0.576 1.311 0.353 0.985 0.625 2.443-0.084 3.791z"></path>
              </svg>
              <span>Humidity:</span>
            </div>
            <div className="list__item-data">{currentWeather.humidity} %</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <svg
                className="list__item-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 16 20"
              >
                <title>sun</title>
                <path d="M8 13c0.552 0 1 0.448 1 1v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v-1c0-0.552 0.448-1 1-1zM8 3c-0.552 0-1-0.448-1-1v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v1c0 0.552-0.448 1-1 1zM15 7c0.552 0 1 0.448 1 1s-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1zM3 8c0 0.552-0.448 1-1 1h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h1c0.552 0 1 0.448 1 1zM12.95 11.536l0.707 0.707c0.39 0.39 0.39 1.024 0 1.414s-1.024 0.39-1.414 0l-0.707-0.707c-0.39-0.39-0.39-1.024 0-1.414s1.024-0.39 1.414 0zM3.050 4.464l-0.707-0.707c-0.391-0.391-0.391-1.024 0-1.414s1.024-0.391 1.414 0l0.707 0.707c0.391 0.391 0.391 1.024 0 1.414s-1.024 0.391-1.414 0zM12.95 4.464c-0.39 0.391-1.024 0.391-1.414 0s-0.39-1.024 0-1.414l0.707-0.707c0.39-0.391 1.024-0.391 1.414 0s0.39 1.024 0 1.414l-0.707 0.707zM3.050 11.536c0.39-0.39 1.024-0.39 1.414 0s0.391 1.024 0 1.414l-0.707 0.707c-0.391 0.39-1.024 0.39-1.414 0s-0.391-1.024 0-1.414l0.707-0.707z"></path>
                <path d="M8 4c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM8 10.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
              </svg>
              <span>UV Index:</span>
            </div>
            <div className="list__item-data">{currentWeather.uv} of 10</div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <svg
                className="list__item-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 27 27"
              >
                <title>compress</title>
                <path d="M3.984 12h16.031v2.016h-16.031v-2.016zM3.984 9h16.031v2.016h-16.031v-2.016zM15.984 3.984l-3.984 4.031-3.984-4.031h3v-3h1.969v3h3zM8.016 18.984l3.984-3.984 3.984 3.984h-3v3h-1.969v-3h-3z"></path>
              </svg>
              <span>Pressure:</span>
            </div>
            <div className="list__item-data">
              {currentWeather.pressure_in} %
            </div>
          </div>
          <div className="list__item">
            <div className="list__item-label">
              <svg
                className="list__item-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="20"
                viewBox="0 0 20 20"
              >
                <title>cloud</title>
                <path d="M20 11.32c0 2.584-2.144 4.68-4.787 4.68h-11.596c-1.998 0-3.617-1.584-3.617-3.537 0-1.951 1.619-3.535 3.617-3.535 0.146 0 0.288 0.012 0.429 0.027-0.037-0.246-0.057-0.498-0.057-0.756 0-2.871 2.381-5.199 5.32-5.199 2.407 0 4.439 1.562 5.096 3.707 0.263-0.043 0.532-0.066 0.809-0.066 2.642 0 4.786 2.093 4.786 4.679z"></path>
              </svg>
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
  return { weather: Object.values(state.weather.weatherData) };
};

export default connect(mapStateToProps)(Current);
