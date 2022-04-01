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
var PoliciesStore = require("../store/Policies");
var Accordion_1 = require("./Accordion");
var PolicyLimits = /** @class */ (function (_super) {
    __extends(PolicyLimits, _super);
    function PolicyLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolicyLimits.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    PolicyLimits.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    PolicyLimits.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestPolicies(startDateIndex);
    };
    PolicyLimits.prototype.showPolicies = function () {
        console.log(this.props.Policy);
        return (React.createElement("div", null, this.props.Policy.map(function (d) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: d.id, title: "Policy " + d.description.toString(), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Created By ",
                            d.createdBy)) }),
                React.createElement("br", null));
        })));
    };
    PolicyLimits.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(InfoBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Primary Policy Limits and Deductibles"),
                    React.createElement("br", null),
                    React.createElement("div", null, this.showPolicies())))));
    };
    return PolicyLimits;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return state.Policies; }, PoliciesStore.actionCreators)(PolicyLimits);
//# sourceMappingURL=PolicyLimits.js.map