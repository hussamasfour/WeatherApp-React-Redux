// Weather reducer

const initialState = {
  weather: {},
  error: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return { ...state, weather: action.payload };
    case "FETCH_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
