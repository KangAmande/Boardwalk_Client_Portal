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
// This is client side view for invoices for client.
var React = require("react");
var react_redux_1 = require("react-redux");
var Sidebar_1 = require("./Sidebar");
var Popup_1 = require("./Popup");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var NavMenu_1 = require("./NavMenu");
var Invoices = /** @class */ (function (_super) {
    __extends(Invoices, _super);
    function Invoices() {
        var _this = _super.call(this, {}, {}) || this;
        _this.showModal = function () {
            _this.setState({ shown: true });
        };
        _this.hideModal = function () {
            _this.setState({ shown: false });
        };
        _this.state = {
            shown: false
        };
        _this.showModal = _this.showModal.bind(_this);
        _this.hideModal = _this.hideModal.bind(_this);
        return _this;
    }
    Invoices.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebar_1["default"], null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Invoices"),
                    React.createElement("p", null, "Click on a document to view or download it"),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 1"),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 2"),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 3"),
                    React.createElement("br", null),
                    React.createElement(Popup_1.Popup, { show: this.state.shown, handleClose: this.hideModal },
                        React.createElement("p", null, "Modal"))))));
    };
    return Invoices;
}(React.Component));
;
exports["default"] = react_redux_1.connect()(Invoices);
