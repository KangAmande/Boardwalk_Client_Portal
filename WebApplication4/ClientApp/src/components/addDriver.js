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
var Accordion_1 = require("./Accordion");
var Sidebarmr_1 = require("./Sidebarmr");
var NavMenu_1 = require("./NavMenu");
var DriversStore = require("../store/Drivers");
var addDriver = /** @class */ (function (_super) {
    __extends(addDriver, _super);
    function addDriver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: 0,
            firstName: "",
            lastName: "",
            birthDate: Date,
            driverTrain: "",
            licenseNumber: "",
            conviction: "",
            licenseYear: ""
        };
        _this.addDriver = function (e) {
            e.preventDefault();
            _this.props.addDrivers(_this.state.firstName, _this.state.lastName, _this.state.birthDate, _this.state.driverTrain, _this.state.licenseNumber, _this.state.conviction, _this.state.licenseYear);
        };
        return _this;
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
        var _this = this;
        console.log(this.props.Driver);
        return (React.createElement("div", null, this.props.Driver.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Driver " + (index + 1), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Id: ",
                            d.id),
                        React.createElement("p", null,
                            "Full Name : ",
                            d.fullName),
                        React.createElement("p", null,
                            "Driver License : ",
                            d.driverLicense),
                        React.createElement("p", null),
                        React.createElement("button", { onClick: function (e) { return _this.removeDriver(d.id); } }, "Remove")) }),
                React.createElement("br", null));
        })));
    };
    addDriver.prototype.removeDriver = function (e) {
        var _this = this;
        console.log("ID: " + e);
        this.setState({ id: e }, function () { return _this.props.removeDrivers(_this.state.id); });
    };
    addDriver.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Add New Drivers"),
                    React.createElement("form", { onSubmit: this.addDriver },
                        React.createElement("input", { type: 'text', placeholder: 'First Name', onChange: function (e) { return _this.setState({ firstName: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Last Name', onChange: function (e) { return _this.setState({ lastName: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'date', placeholder: 'Birth Date', onChange: function (e) { return _this.setState({ birthDate: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Driver Train', onChange: function (e) { return _this.setState({ driverTrain: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'License Number', onChange: function (e) { return _this.setState({ licenseNumber: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Conviction', onChange: function (e) { return _this.setState({ conviction: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'License Year', onChange: function (e) { return _this.setState({ licenseYear: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'Submit' })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.showDrivers()))));
    };
    return addDriver;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return state.Drivers; }, DriversStore.actionCreators)(addDriver);
//# sourceMappingURL=addDriver.js.map