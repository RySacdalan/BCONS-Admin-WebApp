import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context/themeContext";
import { UserContextProvider } from "./context/userContext";
import { v4 as uuidv4 } from "uuid";
import { ReportProvider } from "./context/reportContext";

ReactDOM.render(
  <React.StrictMode key={uuidv4()}>
    <UserContextProvider key={uuidv4()}>
      <ReportProvider key={uuidv4()}>
        <ThemeProvider key={uuidv4()}>
          <App key={uuidv4()} />
        </ThemeProvider>
      </ReportProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
