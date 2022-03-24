"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("../components/Layout");
var MailAddr_1 = require("../components/MailAddr");
exports.default = (function () { return (React.createElement("div", null,
    React.createElement(Layout_1.default, null,
        React.createElement(react_router_1.Route, { path: '/', component: MailAddr_1.default })))); });
//# sourceMappingURL=mail-addrRoute.js.map