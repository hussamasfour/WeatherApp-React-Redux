import weatherApi from "../api/weatherApi";
import history from "../history";
export const fetchWeatherStart = () => {
  return { type: "FETCH_WEATHER_START" };
};

export const fetchWeatherSuccess = (weatherData) => {
  return { type: "FETCH_WEATHER_SUCCESS", payload: weatherData };
};

export const fetchWeatherFailure = (error) => {
  return { type: "FETCH_WEATHER_FAILURE", payload: error };
};
export const fetchWeather = (city) => async (disptach) => {
  try {
    disptach(fetchWeatherStart());
    const response = await weatherApi.get("forecast.json", {
      params: { key: "35490059991041f28a0162329212905", q: city, days: 3 },
    });

    if (response.status === 200) {
      disptach(fetchWeatherSuccess(response.data));
      history.push("/current");
    }
  } catch (error) {
    disptach(fetchWeatherFailure(error));
  }
};
