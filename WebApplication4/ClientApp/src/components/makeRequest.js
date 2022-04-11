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
// This is make request components to Add New Location/Building for clients.
var React = require("react");
var react_redux_1 = require("react-redux");
var Sidebarmr_1 = require("./Sidebarmr");
var ClientBuildingInfoStore = require("../store/ClientBuildingInfo");
var Accordion_1 = require("./Accordion");
var NavMenu_1 = require("./NavMenu");
var makeRequest = /** @class */ (function (_super) {
    __extends(makeRequest, _super);
    function makeRequest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: 0, buildingType: "", street: "", city: "", postalCode: "", province: "", primaryOp: "", buildingConstr: "", wallConstr: "",
            floorConstr: "", sprinklered: "", deckConstr: "", roofCovering: "", sizeSqft: 0, storeyNumber: 0, yearBuilt: 0, constrType: "", alarm: "", mortgage: ""
        };
        _this.addLocations = function (e) {
            e.preventDefault();
            _this.props.addLocations(_this.state.buildingType, _this.state.street, _this.state.city, _this.state.postalCode, _this.state.province, _this.state.primaryOp, _this.state.buildingConstr, _this.state.wallConstr, _this.state.floorConstr, _this.state.sprinklered, _this.state.deckConstr, _this.state.roofCovering, _this.state.sizeSqft, _this.state.storeyNumber, _this.state.yearBuilt, _this.state.constrType, _this.state.alarm, _this.state.mortgage);
        };
        return _this;
    }
    makeRequest.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    makeRequest.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    makeRequest.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientBuildingInfo(startDateIndex);
    };
    makeRequest.prototype.showClientBuildingInfo = function () {
        var _this = this;
        console.log(this.props.ClientBuildingInfo);
        return (React.createElement("div", null, this.props.ClientBuildingInfo.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: "Location", content: React.createElement("div", null,
                        React.createElement("p", null,
                            "primary operation : ",
                            d.primaryOperation),
                        React.createElement("p", null,
                            "city : ",
                            d.city),
                        React.createElement("p", null,
                            "street : ",
                            d.street),
                        React.createElement("p", null,
                            "postal code : ",
                            d.postalCode),
                        React.createElement("button", { onClick: function (e) { return _this.removeLocation(d.id); } }, "Remove")) }),
                React.createElement("br", null));
        })));
    };
    makeRequest.prototype.removeLocation = function (e) {
        var _this = this;
        console.log("ID: " + e);
        this.setState({ id: e }, function () { return _this.props.removeLocation(_this.state.id); });
    };
    makeRequest.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1["default"], null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("h1", null, "Add New Location/Building"),
                    React.createElement("form", { onSubmit: this.addLocations },
                        React.createElement("input", { type: 'text', placeholder: 'Building Type', onChange: function (e) { return _this.setState({ buildingType: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Street', onChange: function (e) { return _this.setState({ street: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'City', onChange: function (e) { return _this.setState({ city: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Postal Code', onChange: function (e) { return _this.setState({ postalCode: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Province', onChange: function (e) { return _this.setState({ province: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Primary Operation', onChange: function (e) { return _this.setState({ primaryOp: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Building Construction', onChange: function (e) { return _this.setState({ buildingConstr: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Wall Construction', onChange: function (e) { return _this.setState({ wallConstr: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Floor Construction', onChange: function (e) { return _this.setState({ floorConstr: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Sprinklered', onChange: function (e) { return _this.setState({ sprinklered: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Deck Construction', onChange: function (e) { return _this.setState({ deckConstr: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Roof Covering', onChange: function (e) { return _this.setState({ roofCovering: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Size sqft', onChange: function (e) { return _this.setState({ sizeSqft: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Number of Storeys', onChange: function (e) { return _this.setState({ storeyNumber: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Year Built', onChange: function (e) { return _this.setState({ yearBuilt: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Construction Type', onChange: function (e) { return _this.setState({ constrType: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Alarm', onChange: function (e) { return _this.setState({ alarm: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'text', placeholder: 'Mortgage', onChange: function (e) { return _this.setState({ mortgage: e.target.value }); } }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'submit' })),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    this.showClientBuildingInfo()))));
    };
    return makeRequest;
}(React.PureComponent));
;
exports["default"] = react_redux_1.connect(function (state) { return state.ClientBuildingInfo; }, ClientBuildingInfoStore.actionCreators)(makeRequest);
