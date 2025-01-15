// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store"; // Store configurado
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    Provider,
    { store },
    React.createElement(App)
  )
);
