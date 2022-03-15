import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/themeContext";
import { UserContextProvider } from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
