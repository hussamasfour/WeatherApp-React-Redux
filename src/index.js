import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./history";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the redux store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
