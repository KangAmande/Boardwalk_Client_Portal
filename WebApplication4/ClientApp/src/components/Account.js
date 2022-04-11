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
// This component will display Client's information such as their username and city.
var React = require("react");
var react_redux_1 = require("react-redux");
var Accountsidebar_1 = require("./Accountsidebar");
var NavMenu_1 = require("./NavMenu");
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Account.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Accountsidebar_1["default"], null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("p", null, "user name:"),
                    React.createElement("p", null, "city")))));
    };
    return Account;
}(React.Component));
exports["default"] = react_redux_1.connect()(Account);
