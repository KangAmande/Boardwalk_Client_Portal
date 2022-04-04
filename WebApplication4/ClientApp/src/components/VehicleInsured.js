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
var VehiclesStore = require("../store/Vehicles");
var Accordion_1 = require("./Accordion");
var NavMenu_1 = require("./NavMenu");
var VehicleInsured = /** @class */ (function (_super) {
    __extends(VehicleInsured, _super);
    function VehicleInsured() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehicleInsured.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    VehicleInsured.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    VehicleInsured.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestVehicles(startDateIndex);
    };
    VehicleInsured.prototype.showVehicles = function () {
        console.log(this.props.Vehicle);
        return (React.createElement("div", null, this.props.Vehicle.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: d.vehicleType.toString(), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Make - ",
                            d.vehicleMake),
                        React.createElement("p", null,
                            "Model - ",
                            d.vehicleModel)) }),
                React.createElement("br", null));
        })));
    };
    VehicleInsured.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(InfoBar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "List of Drivers insured under auto policy"),
                    React.createElement("br", null),
                    React.createElement("div", null, this.showVehicles())))));
    };
    return VehicleInsured;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return state.Vehicles; }, VehiclesStore.actionCreators)(VehicleInsured);
//# sourceMappingURL=VehicleInsured.js.map