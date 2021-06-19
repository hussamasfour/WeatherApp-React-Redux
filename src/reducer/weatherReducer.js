// Weather reducer

const initialState = {
  weatherData: {},
  error: null,
  isLoading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_WEATHER":
      return {
        ...state,
        weatherData: action.payload,
        isLoading: false,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload,
        weatherData: {},
        isLoading: false,
      };
    default:
      return state;
  }
};
