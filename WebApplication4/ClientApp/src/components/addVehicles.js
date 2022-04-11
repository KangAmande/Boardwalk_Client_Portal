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
var VehiclesStore = require("../store/Vehicles");
var addVehicles = /** @class */ (function (_super) {
    __extends(addVehicles, _super);
    function addVehicles() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: 0,
            type: "",
            year: 0,
            make: "",
            model: "",
            radius: "",
            vin: "",
            primaryDriver: "",
            occassionalDriver: "",
            listPrice: 0,
            class: "",
            weight: ""
        };
        _this.addVehicle = function (e) {
            e.preventDefault();
            _this.props.addVehicles(_this.state.type, _this.state.year, _this.state.make, _this.state.model, _this.state.radius, _this.state.vin, _this.state.primaryDriver, _this.state.occassionalDriver, _this.state.listPrice, _this.state.class, _this.state.weight);
        };
        return _this;
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
        var _this = this;
        console.log(this.props.Vehicle);
        return (React.createElement("div", null, this.props.Vehicle.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Vehicle " + (index + 1), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Id : ",
                            d.id),
                        React.createElement("p", null,
                            "Make : ",
                            d.vehicleMake),
                        React.createElement("p", null,
                            "Model : ",
                            d.vehicleModel),
                        React.createElement("p", null,
                            "Type : ",
                            d.vehicleType),
                        React.createElement("button", { onClick: function (e) { return _this.removeVehicle(d.id); } }, "Remove")) }),
                React.createElement("br", null));
        })));
    };
    addVehicles.prototype.removeVehicle = function (e) {
        var _this = this;
        this.setState({ id: e }, function () { return _this.props.removeVehicles(_this.state.id); });
    };
    addVehicles.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Add New Vehicles"),
                    React.createElement("form", { onSubmit: this.addVehicle },
                        React.createElement("input", { type: 'text', placeholder: 'Type', onChange: function (e) { return _this.setState({ type: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Year', onChange: function (e) { return _this.setState({ year: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Make', onChange: function (e) { return _this.setState({ make: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Model', onChange: function (e) { return _this.setState({ model: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Radius', onChange: function (e) { return _this.setState({ radius: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'VIN', onChange: function (e) { return _this.setState({ vin: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Primary Driver', onChange: function (e) { return _this.setState({ primaryDriver: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Occassional Driver', onChange: function (e) { return _this.setState({ occassionalDriver: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'List Price', onChange: function (e) { return _this.setState({ listPrice: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Class', onChange: function (e) { return _this.setState({ class: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Weight', onChange: function (e) { return _this.setState({ weight: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'Submit' })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.showVehicles()))));
    };
    return addVehicles;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return state.Vehicles; }, VehiclesStore.actionCreators)(addVehicles);
//# sourceMappingURL=addVehicles.js.map