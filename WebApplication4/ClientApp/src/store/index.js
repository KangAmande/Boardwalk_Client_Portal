"use strict";
exports.__esModule = true;
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
var CertificateRequests = require("./CertificateRequests");
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
    CertificateRequests: CertificateRequests.reducer
};
