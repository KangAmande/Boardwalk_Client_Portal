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
var AdminNavMenu_1 = require("./AdminNavMenu");
var AdminChangeRequestBar_1 = require("./AdminChangeRequestBar");
var AddDriversStore = require("../store/AddDrivers");
var AdminAddDriver = /** @class */ (function (_super) {
    __extends(AdminAddDriver, _super);
    function AdminAddDriver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminAddDriver.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    AdminAddDriver.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    AdminAddDriver.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddDrivers(startDateIndex);
    };
    AdminAddDriver.prototype.showAddDrivers = function () {
        console.log(this.props.AddDriver);
        return (React.createElement("div", null,
            React.createElement("table", { className: "table table-bordered" },
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "Client ID"),
                    React.createElement("th", null, "First Name"),
                    React.createElement("th", null, "Last Name"),
                    React.createElement("th", null, "Birth Date"),
                    React.createElement("th", null, "Driver Train"),
                    React.createElement("th", null, "License Number"),
                    React.createElement("th", null, "Conviction"),
                    React.createElement("th", null, "License Year"),
                    React.createElement("th", null, "Request Time"),
                    React.createElement("th", null, "Approve or Reject")),
                this.props.AddDriver.map(function (d, index) {
                    return React.createElement("tr", { key: index },
                        React.createElement("td", null, d.id),
                        React.createElement("td", null, d.clientId),
                        React.createElement("td", null, d.firstName),
                        React.createElement("td", null, d.lastName),
                        React.createElement("td", null, d.birthDate),
                        React.createElement("td", null, d.driverTrain),
                        React.createElement("td", null, d.licenseNumber),
                        React.createElement("td", null, d.conviction),
                        React.createElement("td", null, d.licenseYear),
                        React.createElement("td", null, d.requestTime),
                        React.createElement("td", null,
                            React.createElement("button", null, "Yes"),
                            React.createElement("button", null, "No")));
                }))));
    };
    AdminAddDriver.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(AdminNavMenu_1.default, null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement(AdminChangeRequestBar_1.default, null)),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h1", null, "Add Driver Requests"),
                    React.createElement("div", null, this.showAddDrivers())))));
    };
    return AdminAddDriver;
}(React.PureComponent));
exports.default = (0, react_redux_1.connect)(function (state) { return state.AddDrivers; }, AddDriversStore.actionCreators)(AdminAddDriver);
//# sourceMappingURL=AdminAddDriver.js.map