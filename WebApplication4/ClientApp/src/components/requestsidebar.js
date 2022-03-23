"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var RequestSidebar = /** @class */ (function (_super) {
    __extends(RequestSidebar, _super);
    function RequestSidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestSidebar.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/Make-Request" }, "Request Insurance Certificate"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/changeMailingAddress" }, "Change Maling Address"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/addVehicles" }, "Add/Remove Vehicles"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/addDriver" }, "Add/Remove Drivers"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/" }, "Add/ Remove Locations and Buildings"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/" }, "Add/ Remove Scheduled Equipments"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/" }, "Schedule A call with Broker"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/" }, "Request Under review")));
    };
    return RequestSidebar;
}(React.PureComponent));
exports.default = RequestSidebar;
//# sourceMappingURL=requestsidebar.js.map