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
var Accordion_1 = require("./Accordion");
var DriverInsured = /** @class */ (function (_super) {
    __extends(DriverInsured, _super);
    function DriverInsured() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DriverInsured.prototype.render = function () {
        var i = 1;
        var a = [];
        while (i < 5) {
            a.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Driver " + i.toString(), content: React.createElement("div", null,
                        React.createElement("p", null, "Full name"),
                        React.createElement("p", null, "Birth Date"),
                        React.createElement("p", null, "Drivers License"),
                        React.createElement("p", null, "License Year")) }),
                React.createElement("br", null)));
            i++;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(InfoBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "List of Drivers insured under auto policy"),
                    React.createElement("br", null),
                    React.createElement("div", null, a)))));
    };
    return DriverInsured;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(DriverInsured);
//# sourceMappingURL=DriverInsured.js.map