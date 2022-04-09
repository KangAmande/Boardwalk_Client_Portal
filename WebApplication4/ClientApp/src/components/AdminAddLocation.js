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
var AddLocationsStore = require("../store/AddLocations");
var AdminAddLocation = /** @class */ (function (_super) {
    __extends(AdminAddLocation, _super);
    function AdminAddLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminAddLocation.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    AdminAddLocation.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    AdminAddLocation.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddLocations(startDateIndex);
    };
    AdminAddLocation.prototype.showAddLocations = function () {
        console.log(this.props.AddLocation);
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "Client ID"),
                    React.createElement("th", null, "Building Type"),
                    React.createElement("th", null, "Street"),
                    React.createElement("th", null, "City"),
                    React.createElement("th", null, "Postal Code"),
                    React.createElement("th", null, "Province"),
                    React.createElement("th", null, "Primary Operation"),
                    React.createElement("th", null, "Building Construction"),
                    React.createElement("th", null, "Wall Construction"),
                    React.createElement("th", null, "Floor Construction"),
                    React.createElement("th", null, "Sprinklered"),
                    React.createElement("th", null, "Deck Construction"),
                    React.createElement("th", null, "Roof Covering"),
                    React.createElement("th", null, "Size Sqft"),
                    React.createElement("th", null, "Number of storeys"),
                    React.createElement("th", null, "Year Built"),
                    React.createElement("th", null, "Construction Type"),
                    React.createElement("th", null, "Alarm"),
                    React.createElement("th", null, "Mortgage"),
                    React.createElement("th", null, "Request Time"),
                    React.createElement("th", null, "Approve or Reject")),
                this.props.AddLocation.map(function (d, index) {
                    return React.createElement("tr", { key: index },
                        React.createElement("th", null, d.id),
                        React.createElement("th", null, d.clientId),
                        React.createElement("th", null, d.buildingType),
                        React.createElement("th", null, d.street),
                        React.createElement("th", null, d.city),
                        React.createElement("th", null, d.postalCode),
                        React.createElement("th", null, d.province),
                        React.createElement("th", null, d.primaryOp),
                        React.createElement("th", null, d.buildingConstr),
                        React.createElement("th", null, d.wallConstr),
                        React.createElement("th", null, d.floorConstr),
                        React.createElement("th", null, d.sprinklered),
                        React.createElement("th", null, d.deckConstruction),
                        React.createElement("th", null, d.roofCovering),
                        React.createElement("th", null, d.sizeSqft),
                        React.createElement("th", null, d.storeysNumber),
                        React.createElement("th", null, d.yearBuilt),
                        React.createElement("th", null, d.constrType),
                        React.createElement("th", null, d.alarm),
                        React.createElement("th", null, d.mortgage),
                        React.createElement("th", null, d.requestTime),
                        React.createElement("th", null,
                            React.createElement("button", null, "Yes"),
                            React.createElement("button", null, "No")));
                }))));
    };
    AdminAddLocation.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(AdminNavMenu_1.default, null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement(AdminChangeRequestBar_1.default, null)),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h1", null, "Add Location Requests"),
                    React.createElement("div", null, this.showAddLocations())))));
    };
    return AdminAddLocation;
}(React.PureComponent));
exports.default = (0, react_redux_1.connect)(function (state) { return state.AddLocations; }, AddLocationsStore.actionCreators)(AdminAddLocation);
//# sourceMappingURL=AdminAddLocation.js.map