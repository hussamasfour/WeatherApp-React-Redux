import axios from "axios";

// connection to the weather api
export default axios.create({
  baseURL: `http://api.weatherapi.com/v1/`,
});
