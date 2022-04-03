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
var Accordion_1 = require("./Accordion");
var NavMenu_1 = require("./NavMenu");
var scheduledEquipments = /** @class */ (function (_super) {
    __extends(scheduledEquipments, _super);
    function scheduledEquipments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    scheduledEquipments.prototype.render = function () {
        var i = 1;
        var a = [];
        while (i < 3) {
            a.push(React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { title: "Equipment " + i.toString(), content: React.createElement("div", null,
                        React.createElement("p", null, "Make"),
                        React.createElement("p", null, "Model"),
                        React.createElement("p", null, "Year"),
                        React.createElement("p", null, "Serial Number"),
                        React.createElement("p", null, "Value")) }),
                React.createElement("br", null)));
            i++;
        }
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
                    a))));
    };
    return scheduledEquipments;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(scheduledEquipments);
//# sourceMappingURL=scheduledEquipments.js.map