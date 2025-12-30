import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCartShopping);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
