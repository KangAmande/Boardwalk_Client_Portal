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
var AccountSidebar = /** @class */ (function (_super) {
    __extends(AccountSidebar, _super);
    function AccountSidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountSidebar.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/Account-page" }, "Account info"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/Changepassword" }, "change password"),
            React.createElement("br", null),
            React.createElement(reactstrap_1.NavLink, { className: "menu-item", tag: react_router_dom_1.Link, to: "/" }, "change e-mail"),
            React.createElement("br", null)));
    };
    return AccountSidebar;
}(React.PureComponent));
exports.default = AccountSidebar;
//# sourceMappingURL=AccountSidebar.js.map