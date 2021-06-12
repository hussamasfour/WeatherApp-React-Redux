import weatherApi from "../api/weatherApi";
import history from "../history";

export const fetchWeather = (city) => async (disptach) => {
  try {
    const response = await weatherApi.get("forecast.json", {
      params: { key: "35490059991041f28a0162329212905", q: city, days: 3 },
    });

    disptach({
      type: "FETCH_WEATHER",
      payload: response.data,
    });
    history.push("/weather");
  } catch (error) {
    disptach({
      type: "FETCH_ERROR",
      payload: error.response.data,
    });
  }
};
