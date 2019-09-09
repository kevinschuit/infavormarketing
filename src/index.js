import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./scss/styles.scss";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

console.log("SUPERMAN", process.env.REACT_APP_NAME);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
registerServiceWorker();
