import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Box from "./components/Box";
import Button from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export { Box, Button };
