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
var RequestRoute_1 = require("./Routes/RequestRoute");
var addVehicle_1 = require("./Routes/addVehicle");
var addDriver_1 = require("./Routes/addDriver");
var changeMailingAddress_1 = require("./Routes/changeMailingAddress");
var Helppage_1 = require("./Routes/Helppage");
var AccountRoute_1 = require("./Routes/AccountRoute");
var AdminCertRequests_1 = require("./components/AdminCertRequests");
var AdminChangeMailAdd_1 = require("./components/AdminChangeMailAdd");
var AdminAddDriver_1 = require("./components/AdminAddDriver");
var AdminRemoveDriver_1 = require("./components/AdminRemoveDriver");
var AdminAddVehicle_1 = require("./components/AdminAddVehicle");
var AdminRemoveVehicle_1 = require("./components/AdminRemoveVehicle");
var AdminAddEquipment_1 = require("./components/AdminAddEquipment");
var AdminRemoveEquipment_1 = require("./components/AdminRemoveEquipment");
var AdminAddLocation_1 = require("./components/AdminAddLocation");
var AdminRemoveLocation_1 = require("./components/AdminRemoveLocation");
var underReview_1 = require("./components/underReview");
var ReviewRemoveVehicles_1 = require("./components/ReviewRemoveVehicles");
var ReviewAddDrivers_1 = require("./components/ReviewAddDrivers");
var ReviewRemoveDrivers_1 = require("./components/ReviewRemoveDrivers");
var ReviewAddLocations_1 = require("./components/ReviewAddLocations");
var ReviewRemoveLocations_1 = require("./components/ReviewRemoveLocations");
var ReviewAddEquipments_1 = require("./components/ReviewAddEquipments");
var ReviewRemoveEquipments_1 = require("./components/ReviewRemoveEquipments");
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
        React.createElement(react_router_1.Route, { path: '/Make-request', component: RequestRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/addVehicles', component: addVehicle_1.default }),
        React.createElement(react_router_1.Route, { path: '/addDriver', component: addDriver_1.default }),
        React.createElement(react_router_1.Route, { path: '/changeMailingAddress', component: changeMailingAddress_1.default }),
        React.createElement(react_router_1.Route, { path: '/help', component: Helppage_1.default }),
        React.createElement(react_router_1.Route, { path: '/Account', component: AccountRoute_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-cert-requests', component: AdminCertRequests_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-change-mail-add', component: AdminChangeMailAdd_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-add-drivers', component: AdminAddDriver_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-remove-drivers', component: AdminRemoveDriver_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-add-vehicles', component: AdminAddVehicle_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-remove-vehicles', component: AdminRemoveVehicle_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-add-equip', component: AdminAddEquipment_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-remove-equip', component: AdminRemoveEquipment_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-add-location', component: AdminAddLocation_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-remove-location', component: AdminRemoveLocation_1.default }),
        React.createElement(react_router_1.Route, { path: '/under-review', component: underReview_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-vehicles', component: ReviewRemoveVehicles_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-add-drivers', component: ReviewAddDrivers_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-drivers', component: ReviewRemoveDrivers_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-add-locations', component: ReviewAddLocations_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-locations', component: ReviewRemoveLocations_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-add-equipments', component: ReviewAddEquipments_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-equipments', component: ReviewRemoveEquipments_1.default })))); });
//# sourceMappingURL=App.js.map