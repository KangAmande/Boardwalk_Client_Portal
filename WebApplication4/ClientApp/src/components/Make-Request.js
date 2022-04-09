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
require("./form.css");
var NavMenu_1 = require("./NavMenu");
var CertificateRequestsStore = require("../store/CertificateRequests");
var Accordion_1 = require("./Accordion");
var MakeRequest = /** @class */ (function (_super) {
    __extends(MakeRequest, _super);
    function MakeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MakeRequest.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    MakeRequest.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    MakeRequest.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestCertificateRequests(startDateIndex);
    };
    MakeRequest.prototype.showCertificateRequests = function () {
        console.log(this.props.CertificateRequests);
        return (React.createElement("div", null, this.props.CertificateRequests.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Location", content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Name : ",
                            d.Name),
                        React.createElement("p", null,
                            "Address : ",
                            d.Street),
                        React.createElement("p", null,
                            "Province : ",
                            d.Province),
                        React.createElement("p", null,
                            "city : ",
                            d.City),
                        React.createElement("p", null,
                            "Postal Code : ",
                            d.PostalCode)) }),
                React.createElement("br", null));
        })));
    };
    MakeRequest.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1["default"], null)),
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
                    React.createElement("br", null),
                    this.showCertificateRequests()))));
    };
    return MakeRequest;
}(React.PureComponent));
;
exports["default"] = react_redux_1.connect(function (state) { return state.CertificateRequests; }, CertificateRequestsStore.actionCreators)(MakeRequest);
