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
var Sidebarmr_1 = require("./Sidebarmr");
var EquipmentsStore = require("../store/Equipments");
var Accordion_1 = require("./Accordion");
var NavMenu_1 = require("./NavMenu");
var scheduledEquipments = /** @class */ (function (_super) {
    __extends(scheduledEquipments, _super);
    function scheduledEquipments() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: 0,
            year: 0,
            make: "",
            model: "",
            value: 0.0,
            serialNumber: ""
        };
        _this.addEquipments = function (e) {
            e.preventDefault();
            _this.props.addEquipments(_this.state.year, _this.state.make, _this.state.model, _this.state.value, _this.state.serialNumber);
        };
        return _this;
    }
    scheduledEquipments.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    scheduledEquipments.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    scheduledEquipments.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestEquipments(startDateIndex);
    };
    scheduledEquipments.prototype.showEquipments = function () {
        var _this = this;
        console.log(this.props.Equipment);
        return (React.createElement("div", null, this.props.Equipment.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Equipment " + (index + 1), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Id: ",
                            d.id),
                        React.createElement("p", null,
                            "Model: ",
                            d.model),
                        React.createElement("p", null,
                            "Serial Number: ",
                            d.serialNumber),
                        React.createElement("p", null,
                            "Value: ",
                            d.value),
                        React.createElement("p", null,
                            "Year: ",
                            d.year),
                        React.createElement("button", { onClick: function (e) { return _this.removeEquipment(d.id); } }, "Remove")) }),
                React.createElement("br", null));
        })));
    };
    scheduledEquipments.prototype.removeEquipment = function (e) {
        var _this = this;
        console.log("ID: " + e);
        this.setState({ id: e }, function () { return _this.props.removeEquipment(_this.state.id); });
    };
    scheduledEquipments.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1.default, null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("h1", null, "Add New Equipment"),
                    React.createElement("form", { onSubmit: this.addEquipments },
                        React.createElement("input", { type: 'text', placeholder: 'Year', onChange: function (e) { return _this.setState({ year: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Make', onChange: function (e) { return _this.setState({ make: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Model', onChange: function (e) { return _this.setState({ model: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Value', onChange: function (e) { return _this.setState({ value: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Serial Number', onChange: function (e) { return _this.setState({ serialNumber: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'submit' })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.showEquipments()))));
    };
    return scheduledEquipments;
}(React.PureComponent));
;
exports.default = (0, react_redux_1.connect)(function (state) { return state.Equipments; }, EquipmentsStore.actionCreators)(scheduledEquipments);
//# sourceMappingURL=scheduledEquipments.js.map