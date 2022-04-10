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
<<<<<<< HEAD
var Popup_1 = require("./Popup");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var NavMenu_1 = require("./NavMenu");
=======
var BindingInfosStore = require("../store/BindingInfos");
var Accordion_1 = require("./Accordion");
>>>>>>> 231172509945bb50a81d9ffc949de8f11c91045e
var PinkSlips = /** @class */ (function (_super) {
    __extends(PinkSlips, _super);
    function PinkSlips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PinkSlips.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    PinkSlips.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    PinkSlips.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestBindinginfos(startDateIndex);
    };
    PinkSlips.prototype.showpinkslip = function () {
        console.log(this.props.Bindinginfo);
        return (React.createElement("div", null, this.props.Bindinginfo.map(function (d) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: d.id, title: "Pink Slip ", content: React.createElement("div", null,
                        React.createElement("p", null,
                            "effective data ",
                            d.effectiveDate),
                        React.createElement("p", null,
                            "expiry date ",
                            d.expiryDate),
                        React.createElement("p", null,
                            "created by ",
                            d.createdBy)) }),
                React.createElement("br", null));
        })));
    };
    PinkSlips.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1.default, null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Auto Insurance Pink Slips"),
                    React.createElement("div", null, this.showpinkslip())))));
    };
    return PinkSlips;
}(React.Component));
;
exports.default = (0, react_redux_1.connect)(function (state) { return state.BindingInfos; }, BindingInfosStore.actionCreators)(PinkSlips);
/*
class PinkSlips extends React.Component<{}, { shown: boolean }> {
    constructor() {
        super({}, {});
        this.state = {
            shown: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ shown: true });
    };

    hideModal = () => {
        this.setState({ shown: false });
    };
    public render() {

        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-8'>
                        <h1>Auto Insurance Pink Slips</h1>
                        <p>Click on a document to view or download it</p>
                        <NavLink tag={Link} onClick={this.showModal}>Document 1</NavLink><br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 2</NavLink><br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 3</NavLink><br />
                        <Popup show={this.state.shown} handleClose={this.hideModal}>
                            <p>Modal</p>
                        </Popup>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(PinkSlips);
*/ 
//# sourceMappingURL=PinkSlips.js.map