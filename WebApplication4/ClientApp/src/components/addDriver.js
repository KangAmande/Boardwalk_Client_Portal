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
var React = require("react");
var react_redux_1 = require("react-redux");
var Accordion_1 = require("./Accordion");
var Sidebarmr_1 = require("./Sidebarmr");
var NavMenu_1 = require("./NavMenu");
var DriversStore = require("../store/Drivers");
var addDriver = /** @class */ (function (_super) {
    __extends(addDriver, _super);
    function addDriver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    addDriver.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    addDriver.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    addDriver.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestDrivers(startDateIndex);
    };
    addDriver.prototype.showDrivers = function () {
        console.log(this.props.Driver);
        return (React.createElement("div", null, this.props.Driver.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Location", content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Full Name : ",
                            d.fullName),
                        React.createElement("p", null,
                            "Driver License : ",
                            d.driverLicense)) }),
                React.createElement("br", null));
        })));
    };
    addDriver.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1["default"], null)),
                React.createElement("div", { className: 'col-8', id: 'mr2add' },
                    React.createElement("h1", null, "Add New Drivers"),
                    React.createElement("form", null,
                        React.createElement("input", { type: 'text', placeholder: 'First Name' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Last Name' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Birth Date' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Driver Train' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'License Number' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Conviction' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'License Year' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'submit' })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.showDrivers()))));
    };
    return addDriver;
}(React.PureComponent));
;
exports["default"] = react_redux_1.connect(function (state) { return state.Drivers; }, DriversStore.actionCreators)(addDriver);
