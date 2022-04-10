"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientReducer = exports.reducer = exports.clientActionCreators = exports.actionCreators = void 0;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    requestRemoveEquipments: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.RemoveEquipments && startDateIndex !== appState.RemoveEquipments.startDateIndex) {
            fetch("api/Equipments/GetRemoveEquipment")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_REMOVE_EQUIPMENTS', startDateIndex: startDateIndex, RemoveEquipment: data });
            });
            dispatch({ type: 'REQUEST_REMOVE_EQUIPMENTS', startDateIndex: startDateIndex });
        }
    }; }
};
exports.clientActionCreators = {
    requestClientRemoveEquipments: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.ClientRemoveEquipments && startDateIndex !== appState.ClientRemoveEquipments.startDateIndex) {
            fetch("api/Equipments/ClientRemoveEquipment")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_REMOVE_CLIENT_EQUIPMENTS', startDateIndex: startDateIndex, ClientRemoveEquipment: data });
            });
            dispatch({ type: 'REQUEST_REMOVE_CLIENT_EQUIPMENTS', startDateIndex: startDateIndex });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { RemoveEquipment: [], isLoading: false };
var clientUnloadedState = { ClientRemoveEquipment: [], isLoading: false };
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_EQUIPMENTS':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { RemoveEquipment: state.RemoveEquipment, isLoading: true });
        case 'RECEIVE_REMOVE_EQUIPMENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { RemoveEquipment: action.RemoveEquipment, isLoading: false });
            }
            break;
    }
    return state;
};
exports.reducer = reducer;
var clientReducer = function (state, incomingAction) {
    if (state === undefined) {
        return clientUnloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_CLIENT_EQUIPMENTS':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientRemoveEquipment: state.ClientRemoveEquipment, isLoading: true });
        case 'RECEIVE_REMOVE_CLIENT_EQUIPMENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientRemoveEquipment: action.ClientRemoveEquipment, isLoading: false });
            }
            break;
    }
    return state;
};
exports.clientReducer = clientReducer;
//# sourceMappingURL=RemoveEquipment.js.map