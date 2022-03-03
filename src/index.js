import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultStore = {
  number: 0,
};
const reducer = (state = defaultStore, action) => {
  switch (action.type) {
    case "Plus":
      return {
        ...state,
        number: state.number + 1,
      };
    case "Minus":
      return {
        ...state,
        number: state.number - 1,
      };
    case "Reset":
      return {
        ...state,
        number: 0,
      };
    case "Random":
      return {
        ...state,
        number: state.number + Math.random(),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
