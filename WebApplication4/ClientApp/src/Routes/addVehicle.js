"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("../components/Layout");
var addVehicles_1 = require("../components/addVehicles");
exports.default = (function () { return (React.createElement("div", null,
    React.createElement(Layout_1.default, null,
        React.createElement(react_router_1.Route, { path: '/', component: addVehicles_1.default })))); });
//# sourceMappingURL=addVehicle.js.map