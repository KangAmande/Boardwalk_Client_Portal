"use strict";

exports.__esModule = true;

var React = require("react");

var react_router_1 = require("react-router");

var Layout_1 = require("../components/Layout");

var scheduledEquipments_1 = require("../components/scheduledEquipments");

exports["default"] = function () {
  return React.createElement("div", null, React.createElement(Layout_1["default"], null, React.createElement(react_router_1.Route, {
    path: '/',
    component: scheduledEquipments_1["default"]
  })));
};