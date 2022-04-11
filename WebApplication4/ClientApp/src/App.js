"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
require("./custom.css");
var react_router_dom_1 = require("react-router-dom");
var LoginForm_1 = require("./components/LoginForm");
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
var makeRequest_1 = require("./components/makeRequest");
var scheduledEquipments_1 = require("./components/scheduledEquipments");
var scheduleCall_1 = require("./components/scheduleCall");
var Make_Request_1 = require("./components/Make-Request");
var addVehicles_1 = require("./components/addVehicles");
var addDriver_1 = require("./components/addDriver");
var changeMailingAddress_1 = require("./components/changeMailingAddress");
var Helppage_1 = require("./components/Helppage");
var Account_1 = require("./components/Account");
var Changepassword_1 = require("./components/Changepassword");
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
var AdminUploadedDocs_1 = require("./components/AdminUploadedDocs");
var AdminAccount_1 = require("./components/AdminAccount");
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
        React.createElement(react_router_1.Route, { path: '/request', component: makeRequest_1.default }),
        React.createElement(react_router_1.Route, { path: '/sched-equip', component: scheduledEquipments_1.default }),
        React.createElement(react_router_1.Route, { path: '/sched-call', component: scheduleCall_1.default }),
        React.createElement(react_router_1.Route, { path: '/Make-request', component: Make_Request_1.default }),
        React.createElement(react_router_1.Route, { path: '/addVehicles', component: addVehicles_1.default }),
        React.createElement(react_router_1.Route, { path: '/addDriver', component: addDriver_1.default }),
        React.createElement(react_router_1.Route, { path: '/changeMailingAddress', component: changeMailingAddress_1.default }),
        React.createElement(react_router_1.Route, { path: '/help', component: Helppage_1.default }),
        React.createElement(react_router_1.Route, { path: '/Account', component: Account_1.default }),
        React.createElement(react_router_1.Route, { path: '/change-pass', component: Changepassword_1.default }),
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
        React.createElement(react_router_1.Route, { path: '/admin-upload-docs', component: AdminUploadedDocs_1.default }),
        React.createElement(react_router_1.Route, { path: '/admin-account', component: AdminAccount_1.default }),
        React.createElement(react_router_1.Route, { path: '/under-review', component: underReview_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-vehicles', component: ReviewRemoveVehicles_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-add-drivers', component: ReviewAddDrivers_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-drivers', component: ReviewRemoveDrivers_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-add-locations', component: ReviewAddLocations_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-locations', component: ReviewRemoveLocations_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-add-equipments', component: ReviewAddEquipments_1.default }),
        React.createElement(react_router_1.Route, { path: '/review-remove-equipments', component: ReviewRemoveEquipments_1.default })))); });
//# sourceMappingURL=App.js.map