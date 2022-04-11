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
// This is admin side view for seeing requests of remove Vehocles by client.
// Admin can accept or reject the request.
var React = require("react");
var react_redux_1 = require("react-redux");
var AdminNavMenu_1 = require("./AdminNavMenu");
var AdminChangeRequestBar_1 = require("./AdminChangeRequestBar");
var RemoveVehiclesStore = require("../store/RemoveVehicles");
var AdminRemoveVehicle = /** @class */ (function (_super) {
    __extends(AdminRemoveVehicle, _super);
    function AdminRemoveVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminRemoveVehicle.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    AdminRemoveVehicle.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    AdminRemoveVehicle.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestRemoveVehicles(startDateIndex);
    };
    AdminRemoveVehicle.prototype.showRemoveVehicles = function () {
        console.log(this.props.RemoveVehicle);
        return (React.createElement("div", null,
            React.createElement("table", { className: "table table-bordered" },
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "Client ID"),
                    React.createElement("th", null, "Vehicle ID"),
                    React.createElement("th", null, "Request Time"),
                    React.createElement("th", null, "Approve or Reject")),
                this.props.RemoveVehicle.map(function (d, index) {
                    return React.createElement("tr", { key: index },
                        React.createElement("td", null, d.id),
                        React.createElement("td", null, d.clientId),
                        React.createElement("td", null, d.vehicleId),
                        React.createElement("td", null, d.requestTime),
                        React.createElement("td", null,
                            React.createElement("button", null, "Yes"),
                            React.createElement("button", null, "No")));
                }))));
    };
    AdminRemoveVehicle.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(AdminNavMenu_1["default"], null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement(AdminChangeRequestBar_1["default"], null)),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h1", null, "Remove Vehicle Requests"),
                    React.createElement("div", null, this.showRemoveVehicles())))));
    };
    return AdminRemoveVehicle;
}(React.PureComponent));
exports["default"] = react_redux_1.connect(function (state) { return state.RemoveVehicles; }, RemoveVehiclesStore.actionCreators)(AdminRemoveVehicle);
