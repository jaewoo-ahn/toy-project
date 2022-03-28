import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./styles/Reset.scss";
import "./styles/Common.scss";
import Router from "./Router";
import app from "./FireBase";

ReactDOM.render(<Router />, document.getElementById("root"));
