"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var Policies = require("./Policies");
var Accounts = require("./Accounts");
var Drivers = require("./Drivers");
var Files = require("./Files");
var CertificateInsurances = require("./CertificateInsurances");
var BindingInfos = require("./BindingInfos");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    Policies: Policies.reducer,
    Accounts: Accounts.reducer,
    Drivers: Drivers.reducer,
    Files: Files.reducer,
    BindingInfos: BindingInfos.reducer,
    CertificateInsurances: CertificateInsurances.reducer
};
//# sourceMappingURL=index.js.map