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
var Sidebar_1 = require("./Sidebar");
var Popup_1 = require("./Popup");
var Invoices = /** @class */ (function (_super) {
    __extends(Invoices, _super);
    function Invoices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Invoices.prototype.togglePopup = function () {
    };
    Invoices.prototype.showPopup = function () {
    };
    Invoices.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Invoices"),
                    React.createElement("p", null, "Click on a document to view or download it"),
                    React.createElement("a", { onClick: this.showPopup }, "Document 1"),
                    React.createElement("br", null),
                    React.createElement("a", null, "Document 2"),
                    React.createElement("br", null),
                    React.createElement("a", null, "Document 3"),
                    React.createElement("br", null),
                    React.createElement(Popup_1.default, { content: React.createElement("p", null, "Hello"), handleClose: this.togglePopup })))));
    };
    return Invoices;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(Invoices);
//# sourceMappingURL=Invoices.js.map