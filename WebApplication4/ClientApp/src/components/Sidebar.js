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
require("./Sidebar.css");
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    function Sidebar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sidebar.prototype.render = function () {
        return (React.createElement(reactstrap_1.Container, null,
            React.createElement("a", { className: "menu-item", href: "/" }, "Policy"),
            React.createElement("br", null),
            React.createElement("a", { className: "menu-item", href: "/" }, "Signed Documents"),
            React.createElement("br", null),
            React.createElement("a", { className: "menu-item", href: "/" }, "Auto Insurance pink slips"),
            React.createElement("br", null),
            React.createElement("a", { className: "menu-item", href: "/" }, "Certificate of Insurance"),
            React.createElement("br", null),
            React.createElement("a", { className: "menu-item", href: "/" }, "Invoices")));
    };
    return Sidebar;
}(React.PureComponent));
exports.default = Sidebar;
//# sourceMappingURL=Sidebar.js.map