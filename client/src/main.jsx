import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";

window.firstName = "ovidiu";
window.lastName = "pepcu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
