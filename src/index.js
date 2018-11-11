import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import "bulma/css/bulma.css";
import "./index.css";

const store = configureStore();

const appWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(appWithStore, document.getElementById("root"));

serviceWorker.unregister();
