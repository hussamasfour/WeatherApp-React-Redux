import weatherApi from "../api/weatherApi";

export const fetchWeather = (city) => async (disptach) => {
  try {
    const response = await weatherApi.get("forecast.json", {
      params: { key: "35490059991041f28a0162329212905", q: city, days: 3 },
    });
    console.log(response.status);
    disptach({
      type: "FETCH_WEATHER",
      payload: response.data,
    });
  } catch (error) {
    disptach({
      type: "FETCH_ERROR",
      payload: error.response.data,
    });
  }
};
