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
var react_redux_1 = require("react-redux");
var NavMenu_1 = require("./NavMenu");
var helppage = /** @class */ (function (_super) {
    __extends(helppage, _super);
    function helppage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    helppage.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", null,
                React.createElement("h3", null,
                    "Email address: ",
                    React.createElement("a", { href: "mailto:andrew@bwinsco.com" }, "andrew@bwinsco.com"),
                    " "),
                React.createElement("h3", null, "phone number:(123)456-7890"))));
    };
    return helppage;
}(React.Component));
exports.default = (0, react_redux_1.connect)()(helppage);
//# sourceMappingURL=Helppage.js.map