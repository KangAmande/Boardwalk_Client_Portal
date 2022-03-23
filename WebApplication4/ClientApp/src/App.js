"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
require("./custom.css");
<<<<<<< HEAD
var makeRequest_1 = require("./components/makeRequest");
var scheduleCall_1 = require("./components/scheduleCall");
var underReview_1 = require("./components/underReview");
var scheduledEquipments_1 = require("./components/scheduledEquipments");
var helppage_1 = require("./components/helppage");
var Account_1 = require("./components/Account");
var Changepassword_1 = require("./components/Changepassword");
exports.default = (function () { return (React.createElement("div", null,
    React.createElement(Layout_1.default, null,
        React.createElement(react_router_1.Route, { exact: true, path: '/', component: Home_1.default }),
        React.createElement(react_router_1.Route, { path: '/policy-menu', component: PolicyMenu_1.default }),
        React.createElement(react_router_1.Route, { path: '/sign-docs', component: SignDocs_1.default }),
        React.createElement(react_router_1.Route, { path: '/pink-slips', component: PinkSlips_1.default }),
        React.createElement(react_router_1.Route, { path: '/cert-insur', component: CertInsur_1.default }),
        React.createElement(react_router_1.Route, { path: '/invoices', component: Invoices_1.default }),
        React.createElement(react_router_1.Route, { path: '/policy-limits', component: PolicyLimits_1.default }),
        React.createElement(react_router_1.Route, { path: '/vehicle-insured', component: VehicleInsured_1.default }),
        React.createElement(react_router_1.Route, { path: '/driver-insured', component: DriverInsured_1.default }),
        React.createElement(react_router_1.Route, { path: '/equip-insured', component: EquipInsured_1.default }),
        React.createElement(react_router_1.Route, { path: '/risk-addr', component: RiskAddr_1.default }),
        React.createElement(react_router_1.Route, { path: '/mail-addr', component: MailAddr_1.default }),
        React.createElement(react_router_1.Route, { path: '/make-request', component: makeRequest_1.default }),
        React.createElement(react_router_1.Route, { path: '/sched-equip', component: scheduledEquipments_1.default }),
        React.createElement(react_router_1.Route, { path: '/sched-call', component: scheduleCall_1.default }),
        React.createElement(react_router_1.Route, { path: '/under-review', component: underReview_1.default }),
        React.createElement(react_router_1.Route, { path: '/help-page', component: helppage_1.default }),
        React.createElement(react_router_1.Route, { path: '/Account-page', component: Account_1.default }),
        React.createElement(react_router_1.Route, { path: '/Changepassword', component: Changepassword_1.default })))); });
//# sourceMappingURL=App.js.map
=======
var react_router_dom_1 = require("react-router-dom");
var LoginForm_1 = require("./components/LoginForm");
var HomePage_1 = require("./Routes/HomePage");
var pmr_1 = require("./Routes/pmr");
var sdr_1 = require("./Routes/sdr");
var pinkSlipRoute_1 = require("./Routes/pinkSlipRoute");
var centinsRoute_1 = require("./Routes/centinsRoute");
var invoiceRoute_1 = require("./Routes/invoiceRoute");
var policylimitRoute_1 = require("./Routes/policylimitRoute");
var vehicle_insuredRoute_1 = require("./Routes/vehicle-insuredRoute");
var driver_insuredRoute_1 = require("./Routes/driver-insuredRoute");
var equip_insuredRoutes_1 = require("./Routes/equip-insuredRoutes");
var risk_addrRoutes_1 = require("./Routes/risk-addrRoutes");
var mail_addrRoute_1 = require("./Routes/mail-addrRoute");
var make_requestRoute_1 = require("./Routes/make-requestRoute");
var sched_equipRoute_1 = require("./Routes/sched-equipRoute");
var sched_callRoute_1 = require("./Routes/sched-callRoute");
var under_reviewRoute_1 = require("./Routes/under-reviewRoute");
exports["default"] = (function () { return (React.createElement("div", null,
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_1.Route, { exact: true, path: "/", component: LoginForm_1["default"] }),
        React.createElement(react_router_1.Route, { path: "/home", component: HomePage_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/policy-menu', component: pmr_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/sign-docs', component: sdr_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/pink-slips', component: pinkSlipRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/cert-insur', component: centinsRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/invoices', component: invoiceRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/policy-limits', component: policylimitRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/vehicle-insured', component: vehicle_insuredRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/driver-insured', component: driver_insuredRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/equip-insured', component: equip_insuredRoutes_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/risk-addr', component: risk_addrRoutes_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/mail-addr', component: mail_addrRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/make-request', component: make_requestRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/sched-equip', component: sched_equipRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/sched-call', component: sched_callRoute_1["default"] }),
        React.createElement(react_router_1.Route, { path: '/under-review', component: under_reviewRoute_1["default"] })))); });
>>>>>>> parent of 95a8812 (Revert "Merge pull request #10 from Hruthvikk/master")
