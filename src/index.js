import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from "./reportWebVitals";
import ContainerContextProvider from "./Components/context/context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContainerContextProvider>
      <App />
    </ContainerContextProvider>
  </React.StrictMode>
);

reportWebVitals();
