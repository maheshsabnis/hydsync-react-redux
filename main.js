// 1. Import React OM
import React from "react";
// 2. Import ReactDOM for rendering React Component in DOM
import ReactDom from "react-dom";
// 3. bootstrap CSS
import "!style!css!bootstrap/dist/css/bootstrap.min.css";

// 4. import all react components
import SimpleComponent from "./components/simplecomponent.jsx";
import SatefulComponent from "./components/statefulcomponent.jsx";
import ProductUIComponent from "./components/applicaiton/productUIComponent.jsx";
import ValidateComponent from "./components/validations/validatecomponent.jsx";
import ServiceComponent from "./components/servicecomponent.jsx";
import AxiosComponent from "./components/axioxcomppnent.jsx";
import AxiosServiceComponent from "./components/axiosservicecomponent.jsx";
import PrintMessage from "./components/functional/printMessageComponent.jsx";
let data = "Hay!Simple Functional Component.";
import CompanyComponent from "./components/hoc/componeyComponent.jsx";
import StockComponent from "./components/hoc/stockComponent.jsx";
import HOCComponent from "./components/hoc/hocComponent.jsx";

let companies = [{
    id: 101,
    name: 'Microsoft'
}, {
    id: 102,
    name: 'Google'
}];

let stocks = [{
    id: 201,
    name: 'TATA Capital'
}, {
    id: 202,
    name: 'Bajaj Finance'
}];

let CurrentComponent = HOCComponent(StockComponent, stocks);
// 5. Rendering Components
ReactDom.render( < CurrentComponent / > , document.getElementById("app"));