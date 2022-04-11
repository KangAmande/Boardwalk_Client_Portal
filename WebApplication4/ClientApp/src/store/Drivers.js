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
exports.reducer = exports.actionCreators = void 0;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
exports.actionCreators = {
    requestDrivers: function (startDateIndex) { return function (dispatch, getState) {
        // Only load data if it's something we don't already have (and are not already loading)
        var appState = getState();
        if (appState && appState.Drivers && startDateIndex !== appState.Drivers.startDateIndex) {
            fetch("api/Drivers/Index")
                .then(function (response) { return response.json(); })
                .then(function (data) {
                dispatch({ type: 'RECEIVE_DRIVERS', startDateIndex: startDateIndex, Driver: data });
            });
            dispatch({ type: 'REQUEST_DRIVERS', startDateIndex: startDateIndex });
        }
    }; },
    addDrivers: function (firstName, lastName, birthDate, driverTrain, licenseNumber, conviction, licenseYear) { return function (dispatch) {
        fetch("api/Drivers/addDriver/" + firstName + "/" + lastName + "/" + birthDate + "/" + driverTrain + "/" + licenseNumber + "/" + conviction + "/" + licenseYear, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, birthDate: birthDate, driverTrain: driverTrain, licenseNumber: licenseNumber, conviction: conviction, licenseYear: licenseYear })
        }).
            then(function (response) { return console.log(response); });
    }; },
    removeDrivers: function (id) { return function (dispatch) {
        fetch("api/Drivers/removeDriver/" + id, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        }).then();
    }; }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var unloadedState = { Driver: [], isLoading: false };
var reducer = function (state, incomingAction) {
    if (state === undefined) {
        return unloadedState;
    }
    var action = incomingAction;
    switch (action.type) {
        case 'REQUEST_DRIVERS':
            return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { Driver: state.Driver, isLoading: true });
        case 'RECEIVE_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return __assign(__assign({ startDateIndex: action.startDateIndex }, state), { Driver: action.Driver, isLoading: false });
            }
            break;
    }
    return state;
};
exports.reducer = reducer;
//# sourceMappingURL=Drivers.js.map