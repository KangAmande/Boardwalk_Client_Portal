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
var underReview = /** @class */ (function (_super) {
    __extends(underReview, _super);
    function underReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    underReview.prototype.render = function () {
        var i = 1;
        var addVehicle = [];
        var removeVehicle = [];
        var addDriver = [];
        var removeDriver = [];
        var addBuildingLoc = [];
        var removeBuildingLoct = [];
        var addEquipment = [];
        var removeEquipment = [];
        while (i < 2) {
            addVehicle.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Add Vehicle", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            removeVehicle.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Remove Vehicle", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            addDriver.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Add Driver", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            removeDriver.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Remove Driver", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            addEquipment.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Add Equipment", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            removeEquipment.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Remove Equipment", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            addBuildingLoc.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Add Building/Location", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            removeBuildingLoct.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Remove Building/Location", content: React.createElement("div", null, "Requests") }),
                React.createElement("br", null)));
            i++;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1.default, null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("div", null, addDriver),
                    React.createElement("div", null, removeDriver),
                    React.createElement("div", null, addVehicle),
                    React.createElement("div", null, removeVehicle),
                    React.createElement("div", null, addEquipment),
                    React.createElement("div", null, removeEquipment),
                    React.createElement("div", null, addBuildingLoc),
                    React.createElement("div", null, removeBuildingLoct)))));
    };
    return underReview;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(underReview);
//# sourceMappingURL=underReview.js.map