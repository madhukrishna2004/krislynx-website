import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // optional if you use Tailwind or other styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
