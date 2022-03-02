"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var Counter_1 = require("./components/Counter");
var FetchData_1 = require("./components/FetchData");
var PolicyMenu_1 = require("./components/PolicyMenu");
var SignDocs_1 = require("./components/SignDocs");
var PinkSlips_1 = require("./components/PinkSlips");
var CertInsur_1 = require("./components/CertInsur");
var Invoices_1 = require("./components/Invoices");
require("./custom.css");
exports.default = (function () { return (React.createElement(Layout_1.default, null,
    React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
    React.createElement(react_router_1.Route, { path: '/counter', component: Counter_1.default }),
    React.createElement(react_router_1.Route, { path: '/fetch-data/:startDateIndex?', component: FetchData_1.default }),
    React.createElement(react_router_1.Route, { path: '/policy-menu', component: PolicyMenu_1.default }),
    React.createElement(react_router_1.Route, { path: '/sign-docs', component: SignDocs_1.default }),
    React.createElement(react_router_1.Route, { path: '/pink-slips', component: PinkSlips_1.default }),
    React.createElement(react_router_1.Route, { path: '/cert-insur', component: CertInsur_1.default }),
    React.createElement(react_router_1.Route, { path: '/invoices', component: Invoices_1.default }))); });
//# sourceMappingURL=App.js.map