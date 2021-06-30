// Weather reducer

const initialState = {
  weatherData: {},
  error: null,
  isLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_START":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_WEATHER_SUCCESS":
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_WEATHER_FAILURE":
      return {
        ...state,
        error: action.payload,
        weatherData: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
