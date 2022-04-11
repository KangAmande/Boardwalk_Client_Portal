"use strict";
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
// This component is made to be used as side bar for account's page.
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var Accountsidebar = /** @class */ (function (_super) {
    __extends(Accountsidebar, _super);
    function Accountsidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accountsidebar.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/Account" }, "Account info"),
            React.createElement("br", null)));
    };
    return Accountsidebar;
}(React.PureComponent));
exports["default"] = Accountsidebar;
