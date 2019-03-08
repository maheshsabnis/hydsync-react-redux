// 1. Import React OM
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
// 3. bootstrap CSS
import "!style!css!bootstrap/dist/css/bootstrap.min.css";

// 4. import all react components
import SimpleComponent from "./components/simplecomponent.jsx";
import SatefulComponent from "./components/statefulcomponent.jsx";
let data = "Hay!Simple Component.";
// 5. Rendering Components
ReactDom.render(<SatefulComponent />, document.getElementById("app"));
