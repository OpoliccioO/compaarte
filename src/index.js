import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faGuitar,
  faCamera,
  faChevronDown,
  faChevronUp
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faGuitar, faCamera, faChevronDown, faChevronUp);

ReactDOM.render(<App />, document.getElementById("root"));
