"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducers = void 0;
var Policies = require("./Policies");
var Drivers = require("./Drivers");
var Vehicles = require("./Vehicles");
var Equipments = require("./Equipments");
var ClientBuildingInfo = require("./ClientBuildingInfo");
var AddEquipments = require("./AddEquipments");
var RemoveEquipments = require("./RemoveEquipment");
var AddLocations = require("./AddLocations");
var RemoveLocations = require("./RemoveLocations");
var AddDrivers = require("./AddDrivers");
var RemoveDrivers = require("./RemoveDrivers");
var AddVehicles = require("./AddVehicles");
var RemoveVehicles = require("./RemoveVehicles");
var Accounts = require("./Accounts");
var Files = require("./Files");
var CertificateInsurances = require("./CertificateInsurances");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    Policies: Policies.reducer,
    Drivers: Drivers.reducer,
    ClientBuildingInfo: ClientBuildingInfo.reducer,
    Vehicles: Vehicles.reducer,
    Equipments: Equipments.reducer,
    AddEquipments: AddEquipments.reducer,
    RemoveEquipments: RemoveEquipments.reducer,
    AddLocations: AddLocations.reducer,
    RemoveLocations: RemoveLocations.reducer,
    AddDrivers: AddDrivers.reducer,
    RemoveDrivers: RemoveDrivers.reducer,
    AddVehicles: AddVehicles.reducer,
    RemoveVehicles: RemoveVehicles.reducer,
    ClientAddVehicles: AddVehicles.clientReducer,
    ClientRemoveVehicles: RemoveVehicles.clientReducer,
    ClientAddDrivers: AddDrivers.clientReducer,
    ClientRemoveDrivers: RemoveDrivers.clientReducer,
    ClientAddLocations: AddLocations.clientReducer,
    ClientRemoveLocations: RemoveLocations.clientReducer,
    ClientAddEquipments: AddEquipments.clientReducer,
    ClientRemoveEquipments: RemoveEquipments.clientReducer,
    Accounts: Accounts.reducer,
    Files: Files.reducer,
    CertificateInsurances: CertificateInsurances.reducer
};
//# sourceMappingURL=index.js.map