import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.scss";

import App from "./App";
import store from "./redux";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
