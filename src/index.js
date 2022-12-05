import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </DarkModeContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
