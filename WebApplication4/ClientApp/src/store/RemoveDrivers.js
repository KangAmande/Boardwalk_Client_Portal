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
    requestRemoveDrivers: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.RemoveDrivers && startDateIndex !== appState.RemoveDrivers.startDateIndex) {
            fetch("api/Drivers/GetRemoveDriver")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_REMOVE_DRIVERS', startDateIndex: startDateIndex, RemoveDriver: data });
            });
            dispatch({ type: 'REQUEST_REMOVE_DRIVERS', startDateIndex: startDateIndex });
        }
    }; }
};
exports.clientActionCreators = {
    requestClientRemoveDrivers: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.ClientRemoveDrivers && startDateIndex !== appState.ClientRemoveDrivers.startDateIndex) {
            fetch("api/Drivers/ClientRemoveDriver")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_REMOVE_CLIENT_DRIVERS', startDateIndex: startDateIndex, ClientRemoveDriver: data });
            });
            dispatch({ type: 'REQUEST_REMOVE_CLIENT_DRIVERS', startDateIndex: startDateIndex });
        }
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { RemoveDriver: [], isLoading: false };
var clientUnloadedState = { ClientRemoveDriver: [], isLoading: false };
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_DRIVERS':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { RemoveDriver: state.RemoveDriver, isLoading: true });
        case 'RECEIVE_REMOVE_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { RemoveDriver: action.RemoveDriver, isLoading: false });
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
        case 'REQUEST_REMOVE_CLIENT_DRIVERS':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientRemoveDriver: state.ClientRemoveDriver, isLoading: true });
        case 'RECEIVE_REMOVE_CLIENT_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { ClientRemoveDriver: action.ClientRemoveDriver, isLoading: false });
            }
            break;
    }
    return state;
};
exports.clientReducer = clientReducer;
//# sourceMappingURL=RemoveDrivers.js.map