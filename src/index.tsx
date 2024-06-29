import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Welcome from "./screens/welcome";
import Question from "./screens/question/question";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
