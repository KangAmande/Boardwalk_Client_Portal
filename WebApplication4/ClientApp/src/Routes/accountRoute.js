"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_1 = require("react-router");
var Account_1 = require("../components/Account");
var Layout_1 = require("../components/Layout");
exports["default"] = (function () { return (React.createElement("div", null,
    React.createElement(Layout_1["default"], null,
        React.createElement(react_router_1.Route, { path: '/', component: Account_1["default"] })))); });
