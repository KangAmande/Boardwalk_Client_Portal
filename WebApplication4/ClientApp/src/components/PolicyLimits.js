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
var PolicyLimits = /** @class */ (function (_super) {
    __extends(PolicyLimits, _super);
    function PolicyLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolicyLimits.prototype.render = function () {
        var i = 1;
        var a = [];
        while (i < 5) {
            a.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Policy Limit " + i.toString(), content: React.createElement("div", null,
                        React.createElement("p", null, "Insurance Company"),
                        React.createElement("p", null, "Policy Effective Date"),
                        React.createElement("p", null, "Policy Expiry Date")) }),
                React.createElement("br", null)));
            i++;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(InfoBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Primary Policy Limits and Deductibles"),
                    React.createElement("br", null),
                    React.createElement("div", null, a)))));
    };
    return PolicyLimits;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(PolicyLimits);
//# sourceMappingURL=PolicyLimits.js.map