import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface RemoveLocationsState {
    isLoading: boolean;
    startDateIndex?: number;
    RemoveLocation: RemoveLocations[];
}

export interface RemoveLocations {
    id: number;
    clientId: number;
    locationId: number;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestRemoveLocationsAction {
    type: 'REQUEST_REMOVE_LOCATIONS';
    startDateIndex: number;
}

interface ReceiveRemoveLocationsAction {
    type: 'RECEIVE_REMOVE_LOCATIONS';
    startDateIndex: number;
    RemoveLocation: RemoveLocations[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestRemoveLocationsAction | ReceiveRemoveLocationsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestRemoveLocations: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.RemoveLocations && startDateIndex !== appState.RemoveLocations.startDateIndex) {
            fetch(`api/ClientBuildingInfo/GetRemoveLocation`)
                .then(response => response.json() as Promise<RemoveLocations[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_REMOVE_LOCATIONS', startDateIndex: startDateIndex, RemoveLocation: data });
                });

            dispatch({ type: 'REQUEST_REMOVE_LOCATIONS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RemoveLocationsState = { RemoveLocation: [], isLoading: false };

export const reducer: Reducer<RemoveLocationsState> = (state: RemoveLocationsState | undefined, incomingAction: Action): RemoveLocationsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_LOCATIONS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                RemoveLocation: state.RemoveLocation,
                isLoading: true
            };
        case 'RECEIVE_REMOVE_LOCATIONS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    RemoveLocation: action.RemoveLocation,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


