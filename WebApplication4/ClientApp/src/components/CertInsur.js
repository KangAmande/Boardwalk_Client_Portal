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
var CIStore = require("../store/CertificateInsurances");
var Accordion_1 = require("./Accordion");
var CertInsur = /** @class */ (function (_super) {
    __extends(CertInsur, _super);
    function CertInsur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CertInsur.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    CertInsur.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    CertInsur.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestCertificateInsurances(startDateIndex);
    };
    CertInsur.prototype.showCI = function () {
        console.log(this.props.CI);
        return (React.createElement("div", null, this.props.CI.map(function (d) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: d.id, title: "CertificateInsurances " + d.holderName.toString(), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Insuracne type ",
                            d.insuranceType)) }),
                React.createElement("br", null));
        })));
    };
    CertInsur.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebar_1.default, null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "Certificate of Insurance"),
                    this.props.CI.map(function (pol) {
                        return React.createElement("p", { key: pol.id }, pol.holderName);
                    })))));
    };
    return CertInsur;
}(React.PureComponent));
;
/*
class CertInsur extends React.Component<{}, { shown: boolean }> {
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
                        <h1>Certificate of Insurance</h1>
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
};*/
exports.default = (0, react_redux_1.connect)(function (state) { return state.CertificateInsurances; }, // Selects which state properties are merged into the component's props
CIStore.actionCreators)(CertInsur);
//# sourceMappingURL=CertInsur.js.map