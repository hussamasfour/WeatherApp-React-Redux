// Weather reducer

const initialState = {
  weatherData: {},
  error: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return {
        ...state,
        weatherData: action.payload,

        error: null,
      };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, weatherData: {} };
    default:
      return state;
  }
};
