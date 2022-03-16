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
var Sidebarmr_1 = require("./Sidebarmr");
var scheduleCall = /** @class */ (function (_super) {
    __extends(scheduleCall, _super);
    function scheduleCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    scheduleCall.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1["default"], null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("h1", null, "Schedule a call with Broker"),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("p", null,
                        "A call can be booked with our Broker ",
                        React.createElement("a", { href: "" }, "Here"))))));
    };
    return scheduleCall;
}(React.Component));
;
exports["default"] = react_redux_1.connect()(scheduleCall);
