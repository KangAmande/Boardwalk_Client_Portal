"use strict";
// This is admin side view for seeing change request side bar by client.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var InfoBar = /** @class */ (function (_super) {
    __extends(InfoBar, _super);
    function InfoBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InfoBar.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-cert-requests" }, "Insurance Certificate Requests"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-change-mail-add" }, "Change Mailing Address"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-add-vehicles" }, "Add Vehicles"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-remove-vehicles" }, "Remove Vehicles"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-add-drivers" }, "Add Drivers"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-remove-drivers" }, "Remove Drivers"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-add-location" }, "Add Locations and Buildings"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-remove-location" }, "Remove Locations and Buildings"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-add-equip" }, "Add Scheduled Equipment"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/admin-remove-equip" }, "Remove Scheduled Equipment")));
    };
    return InfoBar;
}(React.PureComponent));
exports["default"] = InfoBar;
