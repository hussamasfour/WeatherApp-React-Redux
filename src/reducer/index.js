import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import WeatherReducer from "./weatherReducer";

export default combineReducers({
  form: formReducer,
  weather: WeatherReducer,
});
