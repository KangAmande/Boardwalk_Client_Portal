"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.reducer = exports.actionCreators = void 0; // ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

exports.actionCreators = {
  requestClientBuildingInfo: function requestClientBuildingInfo() {
    return function (dispatch, getState) {
      // Only load data if it's something we don't already have (and are not already loading)
      var appState = getState();

      if (appState && appState.ClientBuildingInfo) {
        fetch("api/ClientBuildingInfo/Index").then(function (response) {
          return response.json();
        }).then(function (data) {
          console.log(JSON.stringify(data));
          dispatch({
            type: 'RECEIVE_CLIENTBUILDINGINFO',
            ClientBuildingInfo: data
          });
        });
        dispatch({
          type: 'REQUEST_CLIENTBUILDINGINFO'
        });
      }
    };
  }
}; // ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

var unloadedState = {
  ClientBuildingInfo: [],
  isLoading: false
};

exports.reducer = function (state, incomingAction) {
  if (state === undefined) {
    return unloadedState;
  }

  var action = incomingAction;

  switch (action.type) {
    case 'REQUEST_CLIENTBUILDINGINFO':
      return __assign(__assign({}, state), {
        ClientBuildingInfo: state.ClientBuildingInfo,
        isLoading: true
      });

    case 'RECEIVE_CLIENTBUILDINGINFO':
      // Only accept the incoming data if it matches the most recent request. This ensures we correctly
      // handle out-of-order responses.
      return __assign(__assign({}, state), {
        ClientBuildingInfo: action.ClientBuildingInfo,
        isLoading: false
      });

    default:
      return state;
  }
};