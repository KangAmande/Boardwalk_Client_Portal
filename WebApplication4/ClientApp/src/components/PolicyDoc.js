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
var PolicyDoc = /** @class */ (function (_super) {
    __extends(PolicyDoc, _super);
    function PolicyDoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolicyDoc.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Policy"),
            React.createElement(Sidebar_1.default, null)));
    };
    return PolicyDoc;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(PolicyDoc);
//# sourceMappingURL=PolicyDoc.js.map