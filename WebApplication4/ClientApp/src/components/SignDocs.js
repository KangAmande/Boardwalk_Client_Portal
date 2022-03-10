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
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var SignDocs = /** @class */ (function (_super) {
    __extends(SignDocs, _super);
    function SignDocs() {
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
    SignDocs.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Signed Documents"),
                    React.createElement("p", null, "Click on a document to view or download it"),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 1"),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 2"),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 3"),
                    React.createElement("br", null),
                    React.createElement("button", null, "Upload new Document"),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("h1", null, "New Uploaded Documents"),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 1"),
                    " - Under Review",
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 2"),
                    " - Accepted ",
                    React.createElement("button", null, "x"),
                    React.createElement("br", null),
                    React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, onClick: this.showModal }, "Document 3"),
                    " - Rejected ",
                    React.createElement("button", null, "x"),
                    React.createElement("br", null),
                    React.createElement(Popup_1.Popup, { show: this.state.shown, handleClose: this.hideModal },
                        React.createElement("p", null, "Modal"))))));
    };
    return SignDocs;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)()(SignDocs);
//# sourceMappingURL=SignDocs.js.map