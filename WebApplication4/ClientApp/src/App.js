"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
require("./custom.css");
var react_router_dom_1 = require("react-router-dom");
var LoginForm_1 = require("./components/LoginForm");
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
var RequestRoute_1 = require("./Routes/RequestRoute");
var addVehicle_1 = require("./Routes/addVehicle");
var addDriver_1 = require("./Routes/addDriver");
var changeMailingAddress_1 = require("./Routes/changeMailingAddress");
var Helppage_1 = require("./Routes/Helppage");
var AccountRoute_1 = require("./Routes/AccountRoute");
var AdminCertRequests_1 = require("./components/AdminCertRequests");
var AdminChangeMailAdd_1 = require("./components/AdminChangeMailAdd");
var AdminAddDriver_1 = require("./components/AdminAddDriver");
var AdminAddVehicle_1 = require("./components/AdminAddVehicle");
exports.default = (function () { return (React.createElement("div", null,
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(react_router_1.Route, { exact: true, path: "/", component: LoginForm_1.default }),
        React.createElement(react_router_1.Route, { path: '/policy-menu', component: pmr_1.default }),
        React.createElement(react_router_1.Route, { path: '/sign-docs', component: sdr_1.default }),
        React.createElement(react_router_1.Route, { path: '/pink-slips', component: pinkSlipRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/cert-insur', component: centinsRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/invoices', component: invoiceRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/policy-limits', component: policylimitRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/vehicle-insured', component: vehicle_insuredRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/driver-insured', component: driver_insuredRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/equip-insured', component: equip_insuredRoutes_1.default }),
        React.createElement(react_router_1.Route, { path: '/risk-addr', component: risk_addrRoutes_1.default }),
        React.createElement(react_router_1.Route, { path: '/mail-addr', component: mail_addrRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/request', component: make_requestRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/sched-equip', component: sched_equipRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/sched-call', component: sched_callRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/under-review', component: under_reviewRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/Make-request', component: RequestRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/addVehicles', component: addVehicle_1.default }),
        React.createElement(react_router_1.Route, { path: '/addDriver', component: addDriver_1.default }),
        React.createElement(react_router_1.Route, { path: '/changeMailingAddress', component: changeMailingAddress_1.default }),
        React.createElement(react_router_1.Route, { path: '/help', component: Helppage_1.default }),
        React.createElement(react_router_1.Route, { path: '/Account', component: AccountRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-cert-requests', component: AdminCertRequests_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-change-mail-add', component: AdminChangeMailAdd_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-add-drivers', component: AdminAddDriver_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-add-vehicles', component: AdminAddVehicle_1.default })))); });
//# sourceMappingURL=App.js.map