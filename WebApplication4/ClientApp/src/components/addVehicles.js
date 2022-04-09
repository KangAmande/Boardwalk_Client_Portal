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
var VehiclesStore = require("../store/Vehicles");
var addVehicles = /** @class */ (function (_super) {
    __extends(addVehicles, _super);
    function addVehicles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    addVehicles.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    addVehicles.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    addVehicles.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestVehicles(startDateIndex);
    };
    addVehicles.prototype.showVehicles = function () {
        console.log(this.props.Vehicle);
        return (React.createElement("div", null, this.props.Vehicle.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Location", content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Full Name : ",
                            d.vehicleMake),
                        React.createElement("p", null,
                            "Driver License : ",
                            d.vehicleModel),
                        React.createElement("p", null,
                            "Driver License : ",
                            d.vehicleType)) }),
                React.createElement("br", null));
        })));
    };
    addVehicles.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1["default"], null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("h1", null, "Add New Vehicles"),
                    React.createElement("form", null,
                        React.createElement("input", { type: 'text', placeholder: 'Type' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Year' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Make' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Model' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Radius' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'VIN' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Primary Driver' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Occassional Driver' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'List Price' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Class' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Weight' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'submit' })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.showVehicles()))));
    };
    return addVehicles;
}(React.PureComponent));
;
exports["default"] = react_redux_1.connect(function (state) { return state.Vehicles; }, VehiclesStore.actionCreators)(addVehicles);
