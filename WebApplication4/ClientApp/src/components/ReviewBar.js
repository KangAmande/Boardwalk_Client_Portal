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
var ReviewBar = /** @class */ (function (_super) {
    __extends(ReviewBar, _super);
    function ReviewBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReviewBar.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/under-review" }, "Insurance Cerificate Requests"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/under-review" }, "Mailing address Requests"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/under-review" }, "Add Vehicles"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/review-remove-vehicles" }, "Remove Vehicles"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/review-add-drivers" }, "Add Drivers"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/review-remove-drivers" }, "Remove Drivers"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/review-add-locations" }, "Add Locations"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/review-remove-locations" }, "Remove Locations"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/review-add-equipments" }, "Add Equipments"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/review-remove-equipments" }, "Remove Equipments")));
    };
    return ReviewBar;
}(React.PureComponent));
exports.default = ReviewBar;
//# sourceMappingURL=ReviewBar.js.map