import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
