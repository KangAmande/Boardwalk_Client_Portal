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
var Login_1 = require("./Login");
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginForm.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", null,
                React.createElement(Login_1["default"], null))));
    };
    return LoginForm;
}(React.Component));
exports["default"] = react_redux_1.connect()(LoginForm);
