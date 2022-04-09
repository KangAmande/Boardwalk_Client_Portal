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
var RemoveDriversStore = require("../store/RemoveDrivers");
var AdminRemoveDriver = /** @class */ (function (_super) {
    __extends(AdminRemoveDriver, _super);
    function AdminRemoveDriver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminRemoveDriver.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    AdminRemoveDriver.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    AdminRemoveDriver.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestRemoveDrivers(startDateIndex);
    };
    AdminRemoveDriver.prototype.showRemoveDrivers = function () {
        console.log(this.props.RemoveDriver);
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "Client ID"),
                    React.createElement("th", null, "Driver ID"),
                    React.createElement("th", null, "Request Time"),
                    React.createElement("th", null, "Approve or Reject")),
                this.props.RemoveDriver.map(function (d, index) {
                    return React.createElement("tr", { key: index },
                        React.createElement("td", null, d.id),
                        React.createElement("td", null, d.clientId),
                        React.createElement("td", null, d.driverId),
                        React.createElement("td", null, d.requestTime),
                        React.createElement("td", null,
                            React.createElement("button", null, "Yes"),
                            React.createElement("button", null, "No")));
                }))));
    };
    AdminRemoveDriver.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(AdminNavMenu_1.default, null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement(AdminChangeRequestBar_1.default, null)),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h1", null, "Remove Driver Requests"),
                    React.createElement("div", null, this.showRemoveDrivers())))));
    };
    return AdminRemoveDriver;
}(React.PureComponent));
exports.default = (0, react_redux_1.connect)(function (state) { return state.RemoveDrivers; }, RemoveDriversStore.actionCreators)(AdminRemoveDriver);
//# sourceMappingURL=AdminRemoveDriver.js.map