import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ReactQueryClientProvider } from "./ReactQueryContext";
import "./index.css";

ReactDOM.render(
  <ReactQueryClientProvider>
    <App />
  </ReactQueryClientProvider>,
  document.getElementById("root")
);
