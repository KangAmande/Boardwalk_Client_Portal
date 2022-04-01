"use strict";

exports.__esModule = true;
exports.reducers = void 0;

var Policies = require("./Policies");

var ClientBuildingInfo = require("./ClientBuildingInfo"); // Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.


exports.reducers = {
  Policies: Policies.reducer,
  ClientBuildingInfo: ClientBuildingInfo.reducer
};