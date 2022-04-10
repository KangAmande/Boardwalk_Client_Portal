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
var Accountsidebar_1 = require("./Accountsidebar");
<<<<<<< HEAD
var NavMenu_1 = require("./NavMenu");
=======
var AccountsStore = require("../store/Accounts");
>>>>>>> 231172509945bb50a81d9ffc949de8f11c91045e
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Account.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    Account.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    Account.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAccounts(startDateIndex);
    };
    Account.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Accountsidebar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("p", null, "Account Number:"),
                    React.createElement("div", null, this.props.Account.map(function (pol) {
                        return React.createElement("p", { key: pol.id }, pol.accountNumber);
                    }))))));
    };
    return Account;
}(React.PureComponent));
exports.default = (0, react_redux_1.connect)(function (state) { return state.Accounts; }, // Selects which state properties are merged into the component's props
AccountsStore.actionCreators)(Account);
//# sourceMappingURL=Account.js.map