import React from "react";
import ReactDOM from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./Route";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);
