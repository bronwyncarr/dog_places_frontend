import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AppContainer } from "./styles/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);
