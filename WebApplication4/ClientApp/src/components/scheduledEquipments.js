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
        return _super !== null && _super.apply(this, arguments) || this;
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
        console.log(this.props.Equipment);
        return (React.createElement("div", null, this.props.Equipment.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Equipment " + d.id, content: React.createElement("div", null,
                        React.createElement("p", null, d.model),
                        React.createElement("p", null, d.serialNumber),
                        React.createElement("p", null, d.value),
                        React.createElement("p", null, d.year)) }),
                React.createElement("br", null));
        })));
    };
    scheduledEquipments.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1.default, null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("h1", null, "Add New Equipment"),
                    React.createElement("form", null,
                        React.createElement("input", { type: 'text', placeholder: 'Year' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Make' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Model' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Value   ' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Serial Number' }),
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