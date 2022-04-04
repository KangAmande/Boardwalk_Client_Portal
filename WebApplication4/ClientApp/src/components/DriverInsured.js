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
var DriversStore = require("../store/Drivers");
var Accordion_1 = require("./Accordion");
var NavMenu_1 = require("./NavMenu");
var DriverInsured = /** @class */ (function (_super) {
    __extends(DriverInsured, _super);
    function DriverInsured() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DriverInsured.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    DriverInsured.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    DriverInsured.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestDrivers(startDateIndex);
    };
    DriverInsured.prototype.showDrivers = function () {
        console.log(this.props.Driver);
        return (React.createElement("div", null, this.props.Driver.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Name " + d.fullName.toString(), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "License ",
                            d.driverLicense)) }),
                React.createElement("br", null));
        })));
    };
    DriverInsured.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(InfoBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "List of Drivers insured under auto policy"),
                    React.createElement("br", null),
                    React.createElement("div", null, this.showDrivers())))));
    };
    return DriverInsured;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return state.Drivers; }, DriversStore.actionCreators)(DriverInsured);
//# sourceMappingURL=DriverInsured.js.map