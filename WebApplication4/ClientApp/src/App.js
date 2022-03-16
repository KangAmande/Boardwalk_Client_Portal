"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_1 = require("react-router");
var Layout_1 = require("./components/Layout");
var Home_1 = require("./components/Home");
var PolicyMenu_1 = require("./components/PolicyMenu");
var SignDocs_1 = require("./components/SignDocs");
var PinkSlips_1 = require("./components/PinkSlips");
var CertInsur_1 = require("./components/CertInsur");
var Invoices_1 = require("./components/Invoices");
var PolicyLimits_1 = require("./components/PolicyLimits");
var VehicleInsured_1 = require("./components/VehicleInsured");
var DriverInsured_1 = require("./components/DriverInsured");
var EquipInsured_1 = require("./components/EquipInsured");
var RiskAddr_1 = require("./components/RiskAddr");
var MailAddr_1 = require("./components/MailAddr");
require("./custom.css");
var makeRequest_1 = require("./components/makeRequest");
var scheduleCall_1 = require("./components/scheduleCall");
var underReview_1 = require("./components/underReview");
var scheduledEquipments_1 = require("./components/scheduledEquipments");
exports["default"] = (function () {
    return (React.createElement("div", null,
        React.createElement(Layout_1["default"], null,
            React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/policy-menu', component: PolicyMenu_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/sign-docs', component: SignDocs_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/pink-slips', component: PinkSlips_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/cert-insur', component: CertInsur_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/invoices', component: Invoices_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/policy-limits', component: PolicyLimits_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/vehicle-insured', component: VehicleInsured_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/driver-insured', component: DriverInsured_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/equip-insured', component: EquipInsured_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/risk-addr', component: RiskAddr_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/mail-addr', component: MailAddr_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/make-request', component: makeRequest_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/sched-equip', component: scheduledEquipments_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/sched-call', component: scheduleCall_1["default"] }),
            React.createElement(react_router_1.Route, { path: '/under-review', component: underReview_1["default"] }))));
});
