import { connect } from "react-redux";
import { Card, Image, Header } from "semantic-ui-react";
import { fetchWeather } from "../../action";
import NavBar from "../weather/NavBar";
const Current = (props) => {
  if (props.weather.length === 0) {
    return <div>Please Enter city name first</div>;
  }

  const currentWeather = props.weather[1];

  return (
    <div>
      <NavBar />
      <Card>
        <Card.Content>
          <Header size="huge">
            <Image
              floated="right"
              size="huge"
              src={props.weather[1].condition.icon}
            />
            {props.weather[1].condition.text}
          </Header>

          <Card.Meta>
            Last Update: {currentWeather.last_updated.split(" ")[1]}
          </Card.Meta>
          <Card.Description>
            <div className="">
              <ul>
                <li>Temperature: {currentWeather.temp_f} F</li>
                <li>Feels Like: {currentWeather.feelslike_f} F</li>
                <li>Wind: {currentWeather.wind_mph} mph</li>
                <li>Wind Gusts: {currentWeather.gust_mph} mph</li>
                <li>Humidity: {currentWeather.humidity} %</li>
              </ul>
            </div>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: Object.values(state.weather.weather) };
};

export default connect(mapStateToProps, { fetchWeather })(Current);
