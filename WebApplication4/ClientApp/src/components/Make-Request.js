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
require("./form.css");
var MakeRequest = /** @class */ (function (_super) {
    __extends(MakeRequest, _super);
    function MakeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MakeRequest.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1.default, null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("h1", null, "Request Insurance Certificate"),
                    React.createElement("form", null,
                        React.createElement("label", null, " Name "),
                        "\u00A0\u00A0\u00A0",
                        React.createElement("input", { type: 'text', placeholder: 'Name' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", null, " Address "),
                        React.createElement("input", { type: 'text', placeholder: 'address' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", null, " Province "),
                        React.createElement("select", null,
                            React.createElement("option", { value: "ON" }, "ON"),
                            React.createElement("option", { value: "BC" }, "BC"),
                            React.createElement("option", { value: "AL" }, "AL"),
                            React.createElement("option", { value: "NL" }, "NL"),
                            React.createElement("option", { value: "PE" }, "PE"),
                            React.createElement("option", { value: "NS" }, "NS"),
                            React.createElement("option", { value: "NB" }, "NB"),
                            React.createElement("option", { value: "QC" }, "QC"),
                            React.createElement("option", { value: "MB" }, "MB"),
                            React.createElement("option", { value: "SK" }, "SK"),
                            React.createElement("option", { value: "AB" }, "AB"),
                            React.createElement("option", { value: "YT" }, "YT"),
                            React.createElement("option", { value: "NT" }, "NT"),
                            React.createElement("option", { value: "NU" }, "NU")),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", null, " City "),
                        React.createElement("input", { type: 'text', placeholder: 'CITY' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", null, " Postal Code "),
                        React.createElement("input", { type: 'text', placeholder: 'Postal Code' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'submit' })),
                    React.createElement("br", null)))));
    };
    return MakeRequest;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(MakeRequest);
//# sourceMappingURL=Make-Request.js.map