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
// this is to view add/remove locations requests which are under review.
var React = require("react");
var react_redux_1 = require("react-redux");
var NavMenu_1 = require("./NavMenu");
var AddLocationsStore = require("../store/AddLocations");
var ReviewBar_1 = require("./ReviewBar");
var ReviewAddLocations = /** @class */ (function (_super) {
    __extends(ReviewAddLocations, _super);
    function ReviewAddLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReviewAddLocations.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    ReviewAddLocations.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    ReviewAddLocations.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientAddLocations(startDateIndex);
    };
    ReviewAddLocations.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(ReviewBar_1["default"], null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Add Location Requests"),
                    React.createElement("div", null, this.props.ClientAddLocation.map(function (d, index) {
                        return React.createElement("div", { key: index },
                            React.createElement("h3", null,
                                "Request ",
                                index + 1),
                            React.createElement("p", null,
                                "Building Type: ",
                                d.buildingType),
                            React.createElement("p", null,
                                "Street: ",
                                d.street),
                            React.createElement("p", null,
                                "City: ",
                                d.city),
                            React.createElement("p", null,
                                "Postal Code: ",
                                d.postalCode),
                            React.createElement("p", null,
                                "Province: ",
                                d.province),
                            React.createElement("p", null,
                                "Primary Operation: ",
                                d.primaryOp),
                            React.createElement("p", null,
                                "Building Construction: ",
                                d.buildingConstr),
                            React.createElement("p", null,
                                "Wall Construction: ",
                                d.wallConstr),
                            React.createElement("p", null,
                                "Floor Construction: ",
                                d.floorConstr),
                            React.createElement("p", null,
                                "Sprinklered: ",
                                d.sprinklered),
                            React.createElement("p", null,
                                "Deck Construction: ",
                                d.deckConstruction),
                            React.createElement("p", null,
                                "Roof Covering: ",
                                d.roofCovering),
                            React.createElement("p", null,
                                "Size Sqft: ",
                                d.sizeSqft),
                            React.createElement("p", null,
                                "Number of storeys: ",
                                d.storeysNumber),
                            React.createElement("p", null,
                                "Year Built: ",
                                d.yearBuilt),
                            React.createElement("p", null,
                                "Construction Type: ",
                                d.constrType),
                            React.createElement("p", null,
                                "Alarm: ",
                                d.alarm),
                            React.createElement("p", null,
                                "Mortgage: ",
                                d.mortgage),
                            React.createElement("p", null,
                                "Request Time: ",
                                d.requestTime));
                    }))))));
    };
    return ReviewAddLocations;
}(React.PureComponent));
;
exports["default"] = react_redux_1.connect(function (state) { return (state.ClientAddLocations); }, (AddLocationsStore.clientActionCreators))(ReviewAddLocations);
