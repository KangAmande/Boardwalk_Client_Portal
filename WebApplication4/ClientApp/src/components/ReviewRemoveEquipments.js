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
// this is to view remove Equipements requests which are under review.
var React = require("react");
var react_redux_1 = require("react-redux");
var NavMenu_1 = require("./NavMenu");
var RemoveEquipmentsStore = require("../store/RemoveEquipment");
var ReviewBar_1 = require("./ReviewBar");
var ReviewRemoveEquipments = /** @class */ (function (_super) {
    __extends(ReviewRemoveEquipments, _super);
    function ReviewRemoveEquipments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReviewRemoveEquipments.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    ReviewRemoveEquipments.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    ReviewRemoveEquipments.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientRemoveEquipments(startDateIndex);
        console.log(this.props.ClientRemoveEquipment);
    };
    ReviewRemoveEquipments.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(ReviewBar_1["default"], null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Remove Equipment Requests"),
                    React.createElement("div", null, this.props.ClientRemoveEquipment.map(function (d, index) {
                        return React.createElement("div", { key: index },
                            React.createElement("h3", null,
                                "Request ",
                                index + 1),
                            React.createElement("p", null,
                                "Equipment Id: ",
                                d.equipId),
                            React.createElement("p", null,
                                "Request time: ",
                                d.requestTime));
                    }))))));
    };
    return ReviewRemoveEquipments;
}(React.PureComponent));
;
exports["default"] = react_redux_1.connect(function (state) { return (state.ClientRemoveEquipments); }, (RemoveEquipmentsStore.clientActionCreators))(ReviewRemoveEquipments);
