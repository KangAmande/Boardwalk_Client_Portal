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
// This is admin side view for seeing requests of add vehicles by client.
// Admin can accept or reject the request.
var React = require("react");
var react_redux_1 = require("react-redux");
var AdminNavMenu_1 = require("./AdminNavMenu");
var AdminChangeRequestBar_1 = require("./AdminChangeRequestBar");
var AddVehiclesStore = require("../store/AddVehicles");
var AdminAddVehicle = /** @class */ (function (_super) {
    __extends(AdminAddVehicle, _super);
    function AdminAddVehicle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminAddVehicle.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    AdminAddVehicle.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    AdminAddVehicle.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddVehicles(startDateIndex);
    };
    AdminAddVehicle.prototype.showAddVehicles = function () {
        console.log(this.props.AddVehicle);
        return (React.createElement("div", null,
            React.createElement("table", { className: "table table-bordered" },
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "Client ID"),
                    React.createElement("th", null, "Type"),
                    React.createElement("th", null, "Year"),
                    React.createElement("th", null, "Make"),
                    React.createElement("th", null, "Model"),
                    React.createElement("th", null, "Radius"),
                    React.createElement("th", null, "VIN"),
                    React.createElement("th", null, "Primary Driver"),
                    React.createElement("th", null, "Occassional Driver"),
                    React.createElement("th", null, "List Price"),
                    React.createElement("th", null, "Class"),
                    React.createElement("th", null, "Weight"),
                    React.createElement("th", null, "Request Time"),
                    React.createElement("th", null, "Approve or Reject")),
                this.props.AddVehicle.map(function (d, index) {
                    return React.createElement("tr", { key: index },
                        React.createElement("td", null, d.id),
                        React.createElement("td", null, d.clientId),
                        React.createElement("td", null, d.type),
                        React.createElement("td", null, d.year),
                        React.createElement("td", null, d.make),
                        React.createElement("td", null, d.model),
                        React.createElement("td", null, d.radius),
                        React.createElement("td", null, d.vin),
                        React.createElement("td", null, d.primaryDriver),
                        React.createElement("td", null, d.occassionDriver),
                        React.createElement("td", null, d.listPrice),
                        React.createElement("td", null, d["class"]),
                        React.createElement("td", null, d.weight),
                        React.createElement("td", null, d.requestTime),
                        React.createElement("td", null,
                            React.createElement("button", null, "Yes"),
                            React.createElement("button", null, "No")));
                }))));
    };
    AdminAddVehicle.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(AdminNavMenu_1["default"], null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement(AdminChangeRequestBar_1["default"], null)),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h1", null, "Add Vehicles Requests"),
                    React.createElement("div", null, this.showAddVehicles())))));
    };
    return AdminAddVehicle;
}(React.PureComponent));
exports["default"] = react_redux_1.connect(function (state) { return state.AddVehicles; }, AddVehiclesStore.actionCreators)(AdminAddVehicle);
