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
var NavMenu_1 = require("./NavMenu");
var AddVehiclesStore = require("../store/AddVehicles");
var ReviewBar_1 = require("./ReviewBar");
var underReview = /** @class */ (function (_super) {
    __extends(underReview, _super);
    function underReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    underReview.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    underReview.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    underReview.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientAddVehicles(startDateIndex);
    };
    underReview.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(ReviewBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Add Driver requests"),
                    React.createElement("div", null, this.props.ClientAddVehicle.map(function (d, index) {
                        return React.createElement("div", { key: index },
                            React.createElement("h3", null,
                                "Request ",
                                index + 1),
                            React.createElement("p", null,
                                "Type: ",
                                d.type),
                            React.createElement("p", null,
                                "Year: ",
                                d.year),
                            React.createElement("p", null,
                                "Make: ",
                                d.make),
                            React.createElement("p", null,
                                "Model: ",
                                d.model),
                            React.createElement("p", null,
                                "Radius: ",
                                d.radius),
                            React.createElement("p", null,
                                "VIN: ",
                                d.vin),
                            React.createElement("p", null,
                                "Primary Driver: ",
                                d.primaryDriver),
                            React.createElement("p", null,
                                "Occassional Driver: ",
                                d.occassionDriver),
                            React.createElement("p", null,
                                "List Price: ",
                                d.listPrice),
                            React.createElement("p", null,
                                "Class: ",
                                d.class),
                            React.createElement("p", null,
                                "Weight: ",
                                d.weight),
                            React.createElement("p", null,
                                "Request Time: ",
                                d.requestTime));
                    }))))));
    };
    return underReview;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return (state.ClientAddVehicles); }, (AddVehiclesStore.clientActionCreators))(underReview);
//# sourceMappingURL=ReviewAddDrivers.js.map