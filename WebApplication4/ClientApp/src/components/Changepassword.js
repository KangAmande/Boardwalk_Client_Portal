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
var AccountsStore = require("../store/Accounts");
var NavMenu_1 = require("./NavMenu");
var Changepassword = /** @class */ (function (_super) {
    __extends(Changepassword, _super);
    function Changepassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Changepassword.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' }, "Change Password"),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("div", null,
                        "New Password:",
                        React.createElement("form", { action: "/", method: "get" },
                            React.createElement("input", { id: "newpwd", type: "password", name: "password" }),
                            React.createElement("input", { type: "submit", value: "Submit" }))),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", null,
                        "Verification Code:",
                        React.createElement("form", { action: "/", method: "get" },
                            React.createElement("input", { id: "inputcode", type: "text", name: "inputcode" }),
                            React.createElement("input", { id: "sendcode", type: "button", value: "sendcode", onClick: verificationcode }),
                            React.createElement("input", { id: "checkcode", type: "button", value: "checkcode", onClick: checkverfy })))))));
    };
    return Changepassword;
}(React.PureComponent));
var num = 0;
function checkverfy() {
    var userinput = document.getElementById("inputcode").value;
    alert(parseInt(userinput) == num);
}
function verificationcode() {
    var str = "";
    for (var i = 0; i < 4; i++) {
        str += Math.round(Math.random() * 9);
    }
    num = Math.round(parseInt(str));
    alert(num);
}
exports.default = (0, react_redux_1.connect)(function (state) { return state.Policies; }, // Selects which state properties are merged into the component's props
AccountsStore.actionCreators // Selects which action creators are merged into the component's props
)(Changepassword);
//# sourceMappingURL=Changepassword.js.map