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
var InfoBar_1 = require("./InfoBar");
var RiskAddr = /** @class */ (function (_super) {
    __extends(RiskAddr, _super);
    function RiskAddr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RiskAddr.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(InfoBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Risk Address"),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'row' },
                        React.createElement("div", { className: 'col-5' },
                            React.createElement("h4", null, "Address")),
                        React.createElement("div", { className: 'col-7' },
                            React.createElement("p", null, "123 Main Street"))),
                    React.createElement("div", { className: 'row' },
                        React.createElement("div", { className: 'col-5' },
                            React.createElement("h4", null, "City")),
                        React.createElement("div", { className: 'col-7' },
                            React.createElement("p", null, "Hamilton"))),
                    React.createElement("div", { className: 'row' },
                        React.createElement("div", { className: 'col-5' },
                            React.createElement("h4", null, "Province")),
                        React.createElement("div", { className: 'col-7' },
                            React.createElement("p", null, "ON"))),
                    React.createElement("div", { className: 'row' },
                        React.createElement("div", { className: 'col-5' },
                            React.createElement("h4", null, "Postal Code")),
                        React.createElement("div", { className: 'col-7' },
                            React.createElement("p", null, "L7J8T5")))))));
    };
    return RiskAddr;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(RiskAddr);
//# sourceMappingURL=RiskAddr.js.map