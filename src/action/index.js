import weatherApi from "../api/weatherApi";

export const fetchWeather = (city) => async (disptach) => {
  const response = await weatherApi.get("forecast.json", {
    params: { key: "35490059991041f28a0162329212905", q: city, days: 3 },
  });

  disptach({
    type: "FETCH_WEATHER",
    payload: response.data.forecast.forecastday,
  });
};
